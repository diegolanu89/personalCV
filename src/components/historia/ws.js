module.exports = function() {
    var request = {}
    return {
        accesorios:function(){
            request.info =  '   Encargado de marketing y creación de web para la venta de accesorios automotrices.' + 
                            'Venta de equipos de iluminación y respuestos para autos. ' + 
                            'Tuve que encontrar soluciones para poder vender grandes catálogos provistos por un depósito de respuestos clásicos y desempañarme en administración de cartilla de clientes. ' + 
                            'Las soluciones fueron factibles y ofrecía la flexibilidad que me permitía mantener los estudios sin operar al 100% en ello durante el transcurso del día' + 
                            'Una vez que los artículos o piezas comenzaban a escasear comenzó a ser difícil conseguir oportunidades similares. Además de no ser compatible para la carrera en la cual me estaba embarcando a nivel académico.';
            request.fecha_inicial = '2010';
            request.fecha_final = '2012';
            request.before = false;
            request.after = 'Tecnico';
            request.titulo = 'Accesorios Sur';
            request.cargo = 'Programador y ventas';
            return request
        },
        tecnico:function(){
            request.info = 'Si bien previamente mantuve conocimientos informáticos al terminar el secundario, continue desempeñando tareas freelance ' + 
                            'y ofrecí mis servicios a través de la web en reparación , instalaciones y armado de pc,nooteboock, incluso celulares y tablets. ' + 
                            'Mantuve estas actividades durante un alrgo periodo como soporte económico, razón por lacual se solapo en muchos casos con otros' + 
                            ' desempeños como lo fue la venta de accesorios o incluso periodos durante mi trabajo en Cetek en la fiuba';
            request.fecha_inicial = '2009';
            request.fecha_final = '2017';
            request.before = 'Accesorios';
            request.after = 'Cetek';
            request.titulo = 'Técnico Informático';
            request.cargo = 'Programador y ventas';
            return request
        },
        cetek:function(){
            request.info = 'Desarrollo de software para soluciones relacionadas con el manejo de datos y realidad aumentada.Las tareas se desarrollaban' +
                            ' en el departamento de Educación a Distancia de la facultad de ingeniería de la UBA.' + 
                            ' Esta gran etapa contemplo de periodo de aprendisaje de multiples herramientas como punto de partido para comenar a sentar la base como perfil de desarrollo' +
                            ' Aquí mantuve  acesoramiento directo de profesores del campo e incursiené por primera vez en data analyst y maching learning.';
            request.fecha_inicial = '20/08/2017';
            request.fecha_final = '05/08/2019';
            request.before = 'Tecnico';
            request.after = 'Ncr';
            request.titulo = 'Cetek';
            request.cargo = 'Programador ';
            return request
        },
        ncr:function(){
            request.info = 'Desarrollador full stack. Manejo de soluciones , soporte e implementaciones en proyectos vinculados con el manejo de aplicaciones y sus interfaces ' + 
                            'en terminales ATM y portales. Asistiendo y dando soporte de las mismas a los clientes en su mayoría bancos. Los proyectos involucran' + 
                            ' conocimiento tanto en programación como una base técnica para poder implementar aplicaciones que se comunican directamente con el manejo de hardware ' +
                             ', software para la comunicación de apis y el backend de los clientes para brindar aplicaciones destinadas al manejo de cash dispenser para usuarios de terminales ATM de NCR y clientes asociados.';
            request.fecha_inicial = '02/09/2019';
            request.fecha_final = 'Actual';
            request.before = 'Cetek';
            request.after = false;
            request.titulo = 'NCR';
            request.cargo = 'Programador full stack';
            return request
        },
    }
}

