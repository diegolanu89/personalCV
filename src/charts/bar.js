define(function(require) {
    'use strict';

    const d3Array = require('d3-array');
    const d3Ease = require('d3-ease');
    const d3Axis = require('d3-axis');
    const d3Color = require('d3-color');
    const d3Dispatch = require('d3-dispatch');
    const d3Format = require('d3-format');
    const d3Scale = require('d3-scale');
    const d3Selection = require('d3-selection');
    const d3Transition = require('d3-transition');

    const textHelper = require('./helpers/text');
    const {exportChart} = require('./helpers/export');
    const colorHelper = require('./helpers/color');
    const { bar: barChartLoadingMarkup } = require('./helpers/load');
    const {uniqueId} = require('./helpers/number');
    const {setDefaultLocale} = require('./helpers/locale');

    const PERCENTAGE_FORMAT = '%';
    const NUMBER_FORMAT = ',f';

    /**
     * @typedef BarChartData
     * @type {Object[]}
     * @property {Number} value        Value of the group (required)
     * @property {String} name         Name of the group (required)
     *
     * @example
     * [
     *     {
     *         value: 1,
     *         name: 'glittering'
     *     },
     *     {
     *         value: 1,
     *         name: 'luminous'
     *     }
     * ]
     */

    /**
     * @typedef LocaleObject
     * @type {Object}
     * @property {String} decimal       the decimal point(e.g., ".")
     * @property {String} thousands     the group separator(e.g., ",")
     * @property {Number[]} grouping    the array of group sizes(e.g., [3]), cycled as needed
     * @property {String[]} currency    the currency prefix and suffix(e.g., ["$", ""])
     * @property {String[]} numerals    optional; an array of ten strings to replace the numerals 0 - 9.
     * @property {String} percent       optional; the percent sign(defaults to "%")
     * @property {String} minus         optional; the minus sign(defaults to hyphen - minus, "-")
     * @property {String} nan           optional; the not - a - number value(defaults "NaN")
     *
     * See some standard locale object values [here]{@link https://cdn.jsdelivr.net/npm/d3-format/locale/}.
     * @example
     * {
     *     "decimal": ",",
     *     "thousands": ".",
     *     "grouping": [3],
     *     "currency": ["", "\u00a0€"]
     * }
     */

    /**
     * Bar Chart reusable API class that renders a
     * simple and configurable bar chart.
     *
     * @module Bar
     * @tutorial bar
     * @requires d3-array, d3-axis, d3-dispatch, d3-scale, d3-selection
     *
     * @example
     * var barChart = bar();
     *
     * barChart
     *     .height(500)
     *     .width(800);
     *
     * d3Selection.select('.css-selector')
     *     .datum(dataset)
     *     .call(barChart);
     *
     */
    return function module() {

        let margin = {
                top: 20,
                right: 20,
                bottom: 30,
                left: 40
            },
            width = 960,
            height = 500,
            loadingState = barChartLoadingMarkup,
            data,
            dataZeroed,
            chartWidth, chartHeight,
            xScale, yScale,
            colorSchema = colorHelper.singleColors.aloeGreen,
            colorList,
            colorMap,
            chartGradientColors = null,
            chartGradient = null,
            chartGradientEl,
            chartGradientId = uniqueId('bar-gradient'),
            yTicks = 5,
            xTicks = 5,
            percentageAxisToMaxRatio = 1,
            numberFormat = NUMBER_FORMAT,
            enableLabels = false,
            labelsMargin = 7,
            labelsNumberFormat = NUMBER_FORMAT,
            labelsSize = 12,
            betweenBarsPadding = 0.1,
            xAxis, yAxis,
            xAxisPadding = {
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            },
            yAxisPaddingBetweenChart = 10,
            yAxisLineWrapLimit = 1,
            isHorizontal = false,
            svg,

            hasSingleBarHighlight = true,
            isAnimated = false,
            ease = d3Ease.easeQuadInOut,
            animationDuration = 800,
            animationStepRatio = 70,
            interBarDelay = (d, i) => animationStepRatio * i,

            highlightBarFunction = (barSelection) =>
                barSelection.attr('fill', ({name}) =>
                    d3Color.color(
                        chartGradientColors
                        ? chartGradientColors[1]
                        : colorMap(name)
                    ).darker()
                ),
            orderingFunction,

            valueLabel = 'value',
            nameLabel = 'name',
            labelEl,

            xAxisLabelEl = null,
            xAxisLabel = null,
            xAxisLabelOffset = 30,
            yAxisLabelEl = null,
            yAxisLabel = null,
            yAxisLabelOffset = -30,


            baseLine,
            maskGridLines,
            shouldReverseColorList = true,
            locale = null,
            localeFormatter = d3Format,

            // Dispatcher object to broadcast the mouse events
            // Ref: https://github.com/mbostock/d3/wiki/Internals#d3_dispatch
            dispatcher = d3Dispatch.dispatch(
                'customMouseOver',
                'customMouseOut',
                'customMouseMove',
                'customClick'
            ),

            // extractors
            getName = ({name}) => name,
            getValue = ({value}) => value,

            _labelsHorizontalX = ({value}) => xScale(value) + labelsMargin,
            _labelsHorizontalY= ({name}) => yScale(name) + (yScale.bandwidth() / 2) + (labelsSize * (3/8)),

            _labelsVerticalX = ({name}) => xScale(name),
            _labelsVerticalY = ({value}) => yScale(value) - labelsMargin;

        /**
         * This function creates the graph using the selection as container
         * @param  {D3Selection} _selection A d3 selection that represents
         *                                  the container(s) where the chart(s) will be rendered
         * @param {BarChartData} _data The data to attach and generate the chart
         */
        function exports(_selection) {
            if (locale) {
                localeFormatter = setDefaultLocale(locale);
            }

            _selection.each(function(_data) {
                chartWidth = width - margin.left - margin.right - (yAxisPaddingBetweenChart * 1.2);
                chartHeight = height - margin.top - margin.bottom;
                ({data, dataZeroed} = sortData(cleanData(_data)));

                buildScales();
                buildAxis(localeFormatter);
                buildSVG(this);
                buildGradient();
                drawGridLines();
                drawAxis();
                drawBars();

                if (enableLabels) {
                    drawLabels(localeFormatter);
                }
            });
        }

        /**
         * Creates the d3 x and y axis, setting orientations
         * @private
         */
        function buildAxis(locale) {
            if (isHorizontal) {
                xAxis = d3Axis.axisBottom(xScale)
                    .ticks(xTicks, locale.format(numberFormat))
                    .tickSizeInner([-chartHeight]);

                yAxis = d3Axis.axisLeft(yScale);
            } else {
                xAxis = d3Axis.axisBottom(xScale);

                yAxis = d3Axis.axisLeft(yScale)
                    .ticks(yTicks, locale.format(numberFormat))
            }
        }

        /**
         * Builds containers for the chart, the axis and a wrapper for all of them
         * Also applies the Margin convention
         * @private
         */
        function buildContainerGroups() {
            let container = svg
                .append('g')
                  .classed('container-group', true)
                  .attr('transform', `translate(${margin.left + yAxisPaddingBetweenChart}, ${margin.top})`);

            container
              .append('g')
                .classed('grid-lines-group', true);
            container
              .append('g')
                .classed('chart-group', true);
            container
              .append('g')
                .classed('x-axis-group axis', true)
              .append('g')
                .classed('x-axis-label', true);
            container
              .append('g')
                .attr('transform', `translate(${-1 * (yAxisPaddingBetweenChart)}, 0)`)
                .classed('y-axis-group axis', true)
                  .append('g')
                    .classed('y-axis-label', true);
            container
              .append('g')
                .classed('metadata-group', true);
        }

        /**
         * Builds the gradient element to be used later
         * @return {void}
         * @private
         */
        function buildGradient() {
            if (!chartGradientEl && chartGradientColors) {
                chartGradientEl = svg.select('.metadata-group')
                  .append('linearGradient')
                    .attr('id', chartGradientId)
                    .attr('x1', '0%')
                    .attr('y1', '0%')
                    .attr('x2', '100%')
                    .attr('y2', '100%')
                    .attr('gradientUnits', 'userSpaceOnUse')
                    .selectAll('stop')
                     .data([
                        {offset:'0%', color: chartGradientColors[0]},
                        {offset:'50%', color: chartGradientColors[1]}
                    ])
                    .enter()
                      .append('stop')
                        .attr('offset', ({offset}) => offset)
                        .attr('stop-color', ({color}) => color)
            }
        }

        /**
         * Creates the x and y scales of the graph
         * @private
         */
        function buildScales() {
            let percentageAxis = Math.min(percentageAxisToMaxRatio * d3Array.max(data, getValue))

            if (isHorizontal) {
                xScale = d3Scale.scaleLinear()
                    .domain([0, percentageAxis])
                    .rangeRound([0, chartWidth]);

                yScale = d3Scale.scaleBand()
                    .domain(data.map(getName))
                    .rangeRound([chartHeight, 0])
                    .padding(betweenBarsPadding);
            } else {
                xScale = d3Scale.scaleBand()
                    .domain(data.map(getName))
                    .rangeRound([0, chartWidth])
                    .padding(betweenBarsPadding);

                yScale = d3Scale.scaleLinear()
                    .domain([0, percentageAxis])
                    .rangeRound([chartHeight, 0]);
            }

            if (shouldReverseColorList) {
                colorList = data.map(d => d)
                                .reverse()
                                .map(({name}, i) => ({
                                        name,
                                        color: colorSchema[i % colorSchema.length]}
                                    ));
            } else {
                colorList = data.map(d => d)
                                .map(({name}, i) => ({
                                        name,
                                        color: colorSchema[i % colorSchema.length]}
                                    ));
            }

            colorMap = (item) => colorList.filter(({name}) => name === item)[0].color;
        }

        /**
         * Builds the SVG element that will contain the chart
         * @param  {HTMLElement} container DOM element that will work as the container of the graph
         * @private
         */
        function buildSVG(container) {
            if (!svg) {
                svg = d3Selection.select(container)
                    .append('svg')
                      .classed('britechart bar-chart', true);

                buildContainerGroups();
            }

            svg
                .attr('width', width)
                .attr('height', height);
        }

        /**
         * Cleaning data casting the values and names to the proper type while keeping
         * the rest of properties on the data
         * It also creates a set of zeroed data (for animation purposes)
         * @param  {BarChartData} originalData  Raw data as passed to the container
         * @return  {BarChartData}              Clean data
         * @private
         */
        function cleanData(originalData) {
            let data = originalData.reduce((acc, d) => {
                d.value = +d[valueLabel];
                d.name = String(d[nameLabel]);

                return [...acc, d];
            }, []);

            let dataZeroed = data.map((d) => ({
                value: 0,
                name: String(d[nameLabel])
            }));

            return { data, dataZeroed };
        }

        /**
         * A utility function that checks if custom gradient
         * color map should be applied if specified by the user
         * @param {String} name - bar's data point name
         * @return {void}
         * @private
         */
        function computeColor(name) {
            return chartGradientColors ? `url(#${chartGradientId})` : colorMap(name);
        }

        /**
         * Sorts data if orderingFunction is specified
         * @param  {BarChartData}     clean unordered data
         * @return  {BarChartData}    clean ordered data
         * @private
         */
        function sortData(unorderedData) {
            let {data, dataZeroed} = unorderedData;

            if (orderingFunction) {
                data.sort(orderingFunction);
                dataZeroed.sort(orderingFunction)
            }

            return { data, dataZeroed };
        }

        /**
         * Utility function that wraps a text into the given width
         * @param  {D3Selection} text         Text to write
         * @param  {Number} containerWidth
         * @private
         */
        function wrapText(text, containerWidth) {
            textHelper.wrapTextWithEllipses(text, containerWidth, 0, yAxisLineWrapLimit)
        }

        /**
         * Draws the x and y axis on the svg object within their
         * respective groups
         * @private
         */
        function drawAxis() {
            svg.select('.x-axis-group.axis')
                .attr('transform', `translate(0, ${chartHeight})`)
                .call(xAxis);

            svg.select('.y-axis-group.axis')
                .call(yAxis);

            svg.selectAll('.y-axis-group .tick text')
                .call(wrapText, margin.left - yAxisPaddingBetweenChart);

            drawAxisLabels();
        }

        /**
         * Draws the x and y axis custom labels respective groups
         * @private
         */
        function drawAxisLabels() {
            if (yAxisLabel) {
                if (yAxisLabelEl) {
                    yAxisLabelEl.remove();
                }
                yAxisLabelEl = svg.select('.y-axis-label')
                  .append('text')
                    .classed('y-axis-label-text', true)
                    .attr('x', -chartHeight / 2)
                    .attr('y', yAxisLabelOffset)
                    .attr('text-anchor', 'middle')
                    .attr('transform', 'rotate(270 0 0)')
                    .text(yAxisLabel);
            }

            if (xAxisLabel) {
                if (xAxisLabelEl) {
                    xAxisLabelEl.remove();
                }
                xAxisLabelEl = svg.select('.x-axis-label')
                  .append('text')
                    .attr('y', xAxisLabelOffset)
                    .attr('text-anchor', 'middle')
                    .classed('x-axis-label-text', true)
                    .attr('x', chartWidth / 2)
                    .text(xAxisLabel);
            }
        }

        /**
         * Draws the bars along the x axis
         * @param  {D3Selection} bars Selection of bars
         * @return {void}
         */
        function drawHorizontalBars(bars) {
            // Enter + Update
            bars.enter()
              .append('rect')
                .classed('bar', true)
                .attr('y', chartHeight)
                .attr('x', 0)
                .attr('height', yScale.bandwidth())
                .attr('width', ({value}) => xScale(value))
                .on('mouseover', function(d, index, barList) {
                    handleMouseOver(this, d, barList, chartWidth, chartHeight);
                })
                .on('mousemove', function(d) {
                    handleMouseMove(this, d, chartWidth, chartHeight);
                })
                .on('mouseout', function(d, index, barList) {
                    handleMouseOut(this, d, barList, chartWidth, chartHeight);
                })
                .on('click', function(d) {
                    handleClick(this, d, chartWidth, chartHeight);
                })
              .merge(bars)
                .attr('x', 0)
                .attr('y', ({name}) => yScale(name))
                .attr('height', yScale.bandwidth())
                .attr('width', ({value}) => xScale(value))
                .attr('fill', ({name}) => computeColor(name));
        }

        /**
         * Draws and animates the bars along the x axis
         * @param  {D3Selection} bars Selection of bars
         * @return {void}
         */
        function drawAnimatedHorizontalBars(bars) {
            // Enter + Update
            bars.enter()
              .append('rect')
                .classed('bar', true)
                .attr('x', 0)
                .attr('y', chartHeight)
                .attr('height', yScale.bandwidth())
                .attr('width', ({value}) => xScale(value))
                .on('mouseover', function(d, index, barList) {
                    handleMouseOver(this, d, barList, chartWidth, chartHeight);
                })
                .on('mousemove', function(d) {
                    handleMouseMove(this, d, chartWidth, chartHeight);
                })
                .on('mouseout', function(d, index, barList) {
                    handleMouseOut(this, d, barList, chartWidth, chartHeight);
                })
                .on('click', function(d) {
                    handleClick(this, d, chartWidth, chartHeight);
                });

            bars
                .attr('x', 0)
                .attr('y', ({name}) => yScale(name))
                .attr('height', yScale.bandwidth())
                .attr('fill', ({name}) => computeColor(name))
                .transition()
                .duration(animationDuration)
                .delay(interBarDelay)
                .ease(ease)
                .attr('width', ({value}) => xScale(value));
        }

        /**
         * Draws and animates the bars along the y axis
         * @param  {D3Selection} bars Selection of bars
         * @return {void}
         */
        function drawAnimatedVerticalBars(bars) {
            // Enter + Update
            bars.enter()
              .append('rect')
                .classed('bar', true)
                .attr('x', chartWidth)
                .attr('y', ({value}) => yScale(value))
                .attr('width', xScale.bandwidth())
                .attr('height', ({value}) => chartHeight - yScale(value))
                .on('mouseover', function(d, index, barList) {
                    handleMouseOver(this, d, barList, chartWidth, chartHeight);
                })
                .on('mousemove', function(d) {
                    handleMouseMove(this, d, chartWidth, chartHeight);
                })
                .on('mouseout', function(d, index, barList) {
                    handleMouseOut(this, d, barList, chartWidth, chartHeight);
                })
                .on('click', function(d) {
                    handleClick(this, d, chartWidth, chartHeight);
                })
              .merge(bars)
                .attr('x', ({name}) => xScale(name))
                .attr('width', xScale.bandwidth())
                .attr('fill', ({name}) => computeColor(name))
                .transition()
                .duration(animationDuration)
                .delay(interBarDelay)
                .ease(ease)
                .attr('y', ({value}) => yScale(value))
                .attr('height', ({value}) => chartHeight - yScale(value));
        }

        /**
         * Draws the bars along the y axis
         * @param  {D3Selection} bars Selection of bars
         * @return {void}
         */
        function drawVerticalBars(bars) {
            // Enter + Update
            bars.enter()
              .append('rect')
                .classed('bar', true)
                .attr('x', chartWidth)
                .attr('y', ({value}) => yScale(value))
                .attr('width', xScale.bandwidth())
                .attr('height', ({value}) => chartHeight - yScale(value))
                .on('mouseover', function(d, index, barList) {
                    handleMouseOver(this, d, barList, chartWidth, chartHeight);
                })
                .on('mousemove', function(d) {
                    handleMouseMove(this, d, chartWidth, chartHeight);
                })
                .on('mouseout', function(d, index, barList) {
                    handleMouseOut(this, d, barList, chartWidth, chartHeight);
                })
                .on('click', function(d) {
                    handleClick(this, d, chartWidth, chartHeight);
                })
              .merge(bars)
                .attr('x', ({name}) => xScale(name))
                .attr('y', ({value}) => yScale(value))
                .attr('width', xScale.bandwidth())
                .attr('height', ({value}) => chartHeight - yScale(value))
                .attr('fill', ({name}) => computeColor(name));
        }

        /**
         * Draws labels at the end of each bar
         * @private
         * @return {void}
         */
        function drawLabels(locale) {
            const labelXPosition = isHorizontal ? _labelsHorizontalX : _labelsVerticalX;
            const labelYPosition = isHorizontal ? _labelsHorizontalY : _labelsVerticalY;
            const textFormatter = ({ value }) => locale.format(labelsNumberFormat)(value);

            if (labelEl) {
                svg.selectAll('.percentage-label-group').remove();
            }

            labelEl = svg.select('.metadata-group')
              .append('g')
                .classed('percentage-label-group', true)
                .selectAll('text')
                .data(data.reverse())
                .enter()
                  .append('text');

            labelEl
                .classed('percentage-label', true)
                .attr('x', labelXPosition)
                .attr('y', labelYPosition)
                .text(textFormatter)
                .attr('font-size', labelsSize + 'px')
        }

        /**
         * Draws the bar elements within the chart group
         * @private
         */
        function drawBars() {
            let bars;

            if (isAnimated) {
                bars = svg.select('.chart-group').selectAll('.bar')
                    .data(dataZeroed);

                if (isHorizontal) {
                    drawHorizontalBars(bars);
                } else {
                    drawVerticalBars(bars);
                }

                bars = svg.select('.chart-group').selectAll('.bar')
                    .data(data);

                if (isHorizontal) {
                    drawAnimatedHorizontalBars(bars);
                } else {
                    drawAnimatedVerticalBars(bars);
                }

                // Exit
                bars.exit()
                    .transition()
                    .style('opacity', 0)
                    .remove();
            } else {
                bars = svg.select('.chart-group').selectAll('.bar')
                    .data(data);

                if (isHorizontal) {
                    drawHorizontalBars(bars);
                } else {
                    drawVerticalBars(bars);
                }

                // Exit
                bars.exit()
                    .remove();
            }

        }

        /**
         * Draws grid lines on the background of the chart
         * @return void
         */
        function drawGridLines() {
            svg.select('.grid-lines-group')
                .selectAll('line')
                .remove();

            if (isHorizontal) {
                drawHorizontalGridLines();
            } else {
                drawVerticalGridLines();
            }
        }

        /**
         * Draws the grid lines for an horizontal bar chart
         * @return {void}
         */
        function drawHorizontalGridLines() {
            maskGridLines = svg.select('.grid-lines-group')
                .selectAll('line.vertical-grid-line')
                .data(xScale.ticks(xTicks).slice(1))
                .enter()
                  .append('line')
                    .attr('class', 'vertical-grid-line')
                    .attr('y1', (xAxisPadding.left))
                    .attr('y2', chartHeight)
                    .attr('x1', (d) => xScale(d))
                    .attr('x2', (d) => xScale(d))

            drawVerticalExtendedLine();
        }

        /**
         * Draws a vertical line to extend y-axis till the edges
         * @return {void}
         */
        function drawVerticalExtendedLine() {
            baseLine = svg.select('.grid-lines-group')
                .selectAll('line.extended-y-line')
                .data([0])
                .enter()
                  .append('line')
                    .attr('class', 'extended-y-line')
                    .attr('y1', (xAxisPadding.bottom))
                    .attr('y2', chartHeight)
                    .attr('x1', 0)
                    .attr('x2', 0);
        }

        /**
         * Draws the grid lines for a vertical bar chart
         * @return {void}
         */
        function drawVerticalGridLines() {
            maskGridLines = svg.select('.grid-lines-group')
                .selectAll('line.horizontal-grid-line')
                .data(yScale.ticks(yTicks).slice(1))
                .enter()
                  .append('line')
                    .attr('class', 'horizontal-grid-line')
                    .attr('x1', (xAxisPadding.left))
                    .attr('x2', chartWidth)
                    .attr('y1', (d) => yScale(d))
                    .attr('y2', (d) => yScale(d))

            drawHorizontalExtendedLine();
        }

        /**
         * Draws a vertical line to extend x-axis till the edges
         * @return {void}
         */
        function drawHorizontalExtendedLine() {
            baseLine = svg.select('.grid-lines-group')
                .selectAll('line.extended-x-line')
                .data([0])
                .enter()
                  .append('line')
                    .attr('class', 'extended-x-line')
                    .attr('x1', (xAxisPadding.left))
                    .attr('x2', chartWidth)
                    .attr('y1', chartHeight)
                    .attr('y2', chartHeight);
        }

        /**
         * Custom OnMouseOver event handler
         * @return {void}
         * @private
         */
        function handleMouseOver(e, d, barList, chartWidth, chartHeight) {
            dispatcher.call('customMouseOver', e, d, d3Selection.mouse(e), [chartWidth, chartHeight]);
            highlightBarFunction = highlightBarFunction || function() {};

            if (hasSingleBarHighlight) {
                highlightBarFunction(d3Selection.select(e));
                return;
            }

            barList.forEach(barRect => {
                if (barRect === e) {
                    return;
                }
                highlightBarFunction(d3Selection.select(barRect));
            });
        }

        /**
         * Custom OnMouseMove event handler
         * @return {void}
         * @private
         */
        function handleMouseMove(e, d, chartWidth, chartHeight) {
            dispatcher.call('customMouseMove', e, d, d3Selection.mouse(e), [chartWidth, chartHeight]);
        }

        /**
         * Custom OnMouseOver event handler
         * @return {void}
         * @private
         */
        function handleMouseOut(e, d, barList, chartWidth, chartHeight) {
            dispatcher.call('customMouseOut', e, d, d3Selection.mouse(e), [chartWidth, chartHeight]);

            barList.forEach((barRect) => {
                d3Selection.select(barRect).attr('fill', ({name}) => computeColor(name));
            });
        }

        /**
         * Custom onClick event handler
         * @return {void}
         * @private
         */
        function handleClick(e, d, chartWidth, chartHeight) {
            dispatcher.call('customClick', e, d, d3Selection.mouse(e), [chartWidth, chartHeight]);
        }

        // API

        /**
         * Gets or Sets the gradient colors of a bar in the chart
         * @param  {String[]} _x Desired color gradient for the line (array of two hexadecimal numbers)
         * @return {String[] | module} Current color gradient or Line Chart module to chain calls
         * @public
         */
        exports.chartGradient = function(_x) {
            if (!arguments.length) {
                return chartGradientColors;
            }
            chartGradientColors = _x;

            return this;
        }

        /**
         * Gets or Sets the padding of the chart (Default is 0.1)
         * @param  { Number | module } _x Padding value to get/set
         * @return {padding | module} Current padding or Chart module to chain calls
         * @public
         */
        exports.betweenBarsPadding = function(_x) {
            if (!arguments.length) {
                return betweenBarsPadding;
            }
            betweenBarsPadding = _x;

            return this;
        };

        /**
         * Gets or Sets the colorSchema of the chart
         * @param  {String[]} _x Desired colorSchema for the graph
         * @return { colorSchema | module} Current colorSchema or Chart module to chain calls
         * @public
         */
        exports.colorSchema = function(_x) {
            if (!arguments.length) {
                return colorSchema;
            }
            colorSchema = _x;

            return this;
        };

        /**
         * If true, adds labels at the end of the bars
         * @param  {Boolean} [_x=false]
         * @return {Boolean | module}    Current value of enableLabels or Chart module to chain calls
         * @public
         */
        exports.enableLabels = function(_x) {
            if (!arguments.length) {
                return enableLabels;
            }
            enableLabels = _x;

            return this;
        };

        /**
         * Chart exported to png and a download action is fired
         * @param {String} filename     File title for the resulting picture
         * @param {String} title        Title to add at the top of the exported picture
         * @public
         */
        exports.exportChart = function(filename, title) {
            exportChart.call(exports, svg, filename, title);
        };

        /**
         * Gets or Sets the hasPercentage status
         * @param  {boolean} _x     Should use percentage as value format
         * @return {boolean | module} Is percentage used or Chart module to chain calls
         * @public
         */
        exports.hasPercentage = function(_x) {
            if (!arguments.length) {
                return numberFormat === PERCENTAGE_FORMAT;
            }
            if (_x) {
                numberFormat = PERCENTAGE_FORMAT;
            } else {
                numberFormat = NUMBER_FORMAT;
            }

            return this;
        };

        /**
         * Gets or Sets the hasSingleBarHighlight status.
         * If the value is true (default), only the hovered bar is considered to
         * be highlighted and will be darkened by default. If the value is false,
         * all the bars but the hovered bar are considered to be highlighted
         * and will be darkened (by default). To customize the bar highlight or
         * remove it completely, use highlightBarFunction instead.
         * @param  {boolean} _x        Should highlight the hovered bar
         * @return {boolean | module} Is hasSingleBarHighlight used or Chart module to chain calls
         * @public
         */
        exports.hasSingleBarHighlight = function(_x) {
            if (!arguments.length) {
                return hasSingleBarHighlight;
            }
            hasSingleBarHighlight = _x;

            return this;
        }

        /**
         * Gets or Sets the height of the chart
         * @param  {number} _x Desired width for the graph
         * @return {height | module} Current height or Chart module to chain calls
         * @public
         */
        exports.height = function(_x) {
            if (!arguments.length) {
                return height;
            }
            height = _x;

            return this;
        };

        /**
         * Gets or Sets the highlightBarFunction function. The callback passed to
         * this function returns a bar selection from the bar chart. Use this function
         * if you want to apply a custom behavior to the highlighted bar on hover.
         * When hasSingleBarHighlight is true the highlighted bar will be the
         * one that was hovered by the user. When hasSingleBarHighlight is false
         * the highlighted bars are all the bars but the hovered one. The default
         * highlight effect on a bar is darkening the highlighted bar(s) color.
         * @param  {Function} _x        Desired operation operation on a hovered bar passed through callback
         * @return {highlightBarFunction | module} Is highlightBarFunction used or Chart module to chain calls
         * @public
         * @example barChart.highlightBarFunction(bar => bar.attr('fill', 'blue'))
         * barChart.highlightBarFunction(null) // will disable the default highlight effect
         */
        exports.highlightBarFunction = function(_x) {
            if (!arguments.length) {
                return highlightBarFunction;
            }
            highlightBarFunction = _x;

            return this;
        }

        /**
         * Gets or Sets the isAnimated property of the chart, making it to animate when render.
         * By default this is 'false'
         *
         * @param  {Boolean} _x             Desired animation flag
         * @return {isAnimated | module}    Current isAnimated flag or Chart module
         * @public
         */
        exports.isAnimated = function(_x) {
            if (!arguments.length) {
                return isAnimated;
            }
            isAnimated = _x;

            return this;
        };

        /**
         * Gets or Sets the horizontal direction of the chart
         * @param  {number} _x              Desired horizontal direction for the graph
         * @return { isHorizontal | module} If it is horizontal or Chart module to chain calls
         * @public
         */
        exports.isHorizontal = function(_x) {
            if (!arguments.length) {
                return isHorizontal;
            }
            isHorizontal = _x;

            return this;
        };

        /**
         * Offset between end of bar and start of the percentage bars
         * @param  {number} [_x=7]      Margin offset from end of bar
         * @return {number | module}    Current offset or Chart module to chain calls
         * @public
         */
        exports.labelsMargin = function(_x) {
            if (!arguments.length) {
                return labelsMargin;
            }
            labelsMargin = _x;

            return this;
        }

        /**
         * Gets or Sets the labels number format
         * @param  {string} [_x=",f"] desired label number format for the bar chart
         * @return {string | module} Current labelsNumberFormat or Chart module to chain calls
         * @public
         */
        exports.labelsNumberFormat = function(_x) {
            if (!arguments.length) {
                return labelsNumberFormat;
            }
            labelsNumberFormat = _x;

            return this;
        }

        /**
         * Get or Sets the labels text size
         * @param  {number} [_x=12] label font size
         * @return {number | module}    Current text size or Chart module to chain calls
         * @public
         */
        exports.labelsSize = function(_x) {
            if (!arguments.length) {
                return labelsSize;
            }
            labelsSize = _x;

            return this;
        }

        /**
         * Gets or Sets the loading state of the chart
         * @param  {string} markup Desired markup to show when null data
         * @return {loadingState | module} Current loading state markup or Chart module to chain calls
         * @public
         */
        exports.loadingState = function(_markup) {
            if (!arguments.length) {
                return loadingState;
            }
            loadingState = _markup;

            return this;
        };

        /**
         * Gets or Sets the margin of the chart
         * @param  {object} _x Margin object to get/set
         * @return {margin | module} Current margin or Chart module to chain calls
         * @public
         */
        exports.margin = function(_x) {
            if (!arguments.length) {
                return margin;
            }
            margin = {
                ...margin,
                ..._x
            };

            return this;
        };

        /**
         * Gets or Sets the nameLabel of the chart
         * @param  {Number} _x Desired nameLabel for the graph
         * @return {nameLabel | module} Current nameLabel or Chart module to chain calls
         * @public
         */
        exports.nameLabel = function(_x) {
            if (!arguments.length) {
                return nameLabel;
            }
            nameLabel = _x;

            return this;
        };

        /**
         * Gets or Sets the number format of the bar chart
         * @param  {string} [_x=',f'] Desired number format for the bar chart
         * @return {numberFormat | module} Current numberFormat or Chart module to chain calls
         * @public
         */
        exports.numberFormat = function(_x) {
            if (!arguments.length) {
                return numberFormat;
            }
            numberFormat = _x;

            return this;
        }

        /**
         * Exposes an 'on' method that acts as a bridge with the event dispatcher
         * We are going to expose this events:
         * customMouseOver, customMouseMove, customMouseOut, and customClick
         *
         * @return {module} Bar Chart
         * @public
         */
        exports.on = function() {
            let value = dispatcher.on.apply(dispatcher, arguments);

            return value === dispatcher ? exports : value;
        };

        /**
         * Configurable extension of the x axis
         * if your max point was 50% you might want to show x axis to 60%, pass 1.2
         * @param  {number} _x ratio to max data point to add to the x axis
         * @return {ratio | module} Current ratio or Chart module to chain calls
         * @public
         */
        exports.percentageAxisToMaxRatio = function(_x) {
            if (!arguments.length) {
                return percentageAxisToMaxRatio;
            }
            percentageAxisToMaxRatio = _x;

            return this;
        }

        /**
         * Gets or Sets whether the color list should be reversed or not
         * @param  {boolean} _x     Should reverse the color list
         * @return {boolean | module} Is color list being reversed or Chart module to chain calls
         * @public
         */
        exports.shouldReverseColorList = function(_x) {
            if (!arguments.length) {
                return shouldReverseColorList;
            }
            shouldReverseColorList = _x;

            return this;
        };


        /**
         * Changes the order of items given the custom function
         * @param  {Function} _x             A custom function that sets logic for ordering
         * @return {(Function | Module)}   A custom ordering function or Chart module to chain calls
         * @public
         */
        exports.orderingFunction = function(_x) {
            if (!arguments.length) {
                return orderingFunction;
            }
            orderingFunction = _x;

            return this;
        }

        /**
         * Gets or Sets the valueLabel of the chart
         * @param  {Number} _x Desired valueLabel for the graph
         * @return { valueLabel | module} Current valueLabel or Chart module to chain calls
         * @public
         */
        exports.valueLabel = function(_x) {
            if (!arguments.length) {
                return valueLabel;
            }
            valueLabel = _x;

            return this;
        };

        /**
         * Gets or Sets the width of the chart
         * @param  {number} _x Desired width for the graph
         * @return {width | module} Current width or Chart module to chain calls
         * @public
         */
        exports.width = function(_x) {
            if (!arguments.length) {
                return width;
            }
            width = _x;

            return this;
        };

        /**
         * Gets or Sets the text of the xAxisLabel on the chart
         * @param  {String} _x Desired text for the label
         * @return {String | module} label or Chart module to chain calls
         * @public
         */
        exports.xAxisLabel = function(_x) {
            if (!arguments.length) {
                return xAxisLabel;
            }
            xAxisLabel = _x;

            return this;
        };

        /**
         * Gets or Sets the offset of the xAxisLabel on the chart
         * @param  {Number} _x Desired offset for the label
         * @return {Number | module} label or Chart module to chain calls
         * @public
         */
        exports.xAxisLabelOffset = function(_x) {
            if (!arguments.length) {
                return xAxisLabelOffset;
            }
            xAxisLabelOffset = _x;

            return this;
        };

        /**
         * Gets or Sets the number of ticks of the x axis on the chart
         * (Default is 5)
         * @param  {Number} _x          Desired horizontal ticks
         * @return {Number | module}    Current xTicks or Chart module to chain calls
         * @public
         */
        exports.xTicks = function (_x) {
            if (!arguments.length) {
                return xTicks;
            }
            xTicks = _x;

            return this;
        };

        /**
         * Gets or Sets the text of the yAxisLabel on the chart
         * @param  {String} _x Desired text for the label
         * @return {String | module} label or Chart module to chain calls
         * @public
         */
        exports.yAxisLabel = function(_x) {
            if (!arguments.length) {
                return yAxisLabel;
            }
            yAxisLabel = _x;

            return this;
        }

        /**
         * Gets or Sets the offset of the yAxisLabel on the chart
         * @param  {Number} _x Desired offset for the label
         * @return {Number | module} label or Chart module to chain calls
         * @public
         */
        exports.yAxisLabelOffset = function(_x) {
            if (!arguments.length) {
                return yAxisLabelOffset;
            }
            yAxisLabelOffset = _x;

            return this;
        };

        /**
         * Space between y axis and chart
         * (Default 10)
         * @param  {Number} _x          Space between y axis and chart
         * @return {Number| module}     Current value of yAxisPaddingBetweenChart or Chart module to chain calls
         * @public
         */
        exports.yAxisPaddingBetweenChart = function(_x) {
            if (!arguments.length) {
                return yAxisPaddingBetweenChart;
            }
            yAxisPaddingBetweenChart = _x;

            return this;
        };

        /**
         * Gets or Sets the number of vertical ticks on the chart
         * (Default is 6)
         * @param  {Number} _x          Desired number of vertical ticks for the graph
         * @return {Number | module}    Current yTicks or Chart module to chain calls
         * @public
         */
        exports.yTicks = function(_x) {
            if (!arguments.length) {
                return yTicks;
            }
            yTicks = _x;

            return this;
        };

        /**
         * Gets or Sets the locale which our formatting functions use.
         * Check [the d3-format docs]{@link https://github.com/d3/d3-format#formatLocale} for the required values.
         *
         * @param  {LocaleObject}  [_x=null]  _x    Desired locale object format.
         * @return {LocaleObject | module}           Current locale object or Chart module to chain calls
         * @public
         */
        exports.locale = function (_x) {
            if (!arguments.length) {
                return locale;
            }
            locale = _x;

            return this;
        };

        return exports;
    };

});