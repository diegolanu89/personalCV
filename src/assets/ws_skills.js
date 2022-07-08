module.exports = function() {
    var request = {}
    return {
        javascript:function(){
            request.info =  '';
            request.fecha_inicial = '2010';
            request.fecha_final = '2012';
            request.before = false;
            request.after = 'React';
            request.titulo = 'Javascript';
            request.cargo = 'Programador y ventas';
            return request
        },
        react:function(){
            request.info = '';
            request.fecha_inicial = '2009';
            request.fecha_final = '2017';
            request.before = 'javascript';
            request.after = 'Angular';
            request.titulo = 'React';
            request.cargo = 'Programador y ventas';
            return request
        },
        angular:function(){
            request.info = '';
            request.fecha_inicial = '20/08/2017';
            request.fecha_final = '05/08/2019';
            request.before = 'react';
            request.after = 'Java';
            request.titulo = 'Angular';
            request.cargo = 'Programador ';
            return request
        },
        java:function(){
            request.info = '';
            request.fecha_inicial = '02/09/2019';
            request.fecha_final = 'Actual';
            request.before = 'angular';
            request.after = 'Django';
            request.titulo = 'Java';
            request.cargo = 'Programador full stack';
            return request
        },
        django:function(){
            request.info = '';
            request.fecha_inicial = '02/09/2019';
            request.fecha_final = 'Actual';
            request.before = 'java';
            request.after = false;
            request.titulo = 'Django';
            request.cargo = 'Programador full stack';
            return request
        },
    }
}


