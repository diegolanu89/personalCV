module.exports = function() {
    var request = {}
    return {
        técnico:function(){
            request.info = 'Mantenimiento y reparación de bienes informáticos';
            request.fecha_inicial = '03/2009';
            request.fecha_final = '06/2017';
            request.before = false;
            request.after = 'Accesorios';
            request.titulo = 'Técnico Informático';
            request.cargo = 'Técnico';
            request.descripcion = [{'titulo':'Técnico','subtitulo':'Técnico Informatico freelance','descripcion':'','icon':'tecnico','small':true},
            {'titulo':'Tareas Realizadas',
                                    'subtitulo':'Frontend y Backend',
                                    'descripcion':'Mantenimiento y reparación de bienes informáticos freelance. Se recurria a domicilios o los clientes acercaban sos productos a reparar.',
                                    'icon':'verified',
                                    'small':false},];
            request.info_tec = false;
            request.tecnologias = false;
            return request
        },
        accesorios:function(){
            request.info = 'Creación de web para la venta de accesorios automotrices. Venta de equipos de iluminación y respuestos. Administración de cartilla de clientes.'
            request.fecha_inicial = '03/2011';
            request.fecha_final = '06/2017';
            request.before = 'Técnico';
            request.after = 'Cetek';
            request.titulo = 'Accesorios Sur';
            request.cargo = 'Técnico';
            request.descripcion = [{'titulo':'Accesorios Sur','subtitulo':'Desarrollador y vendedor','descripcion':'','icon':'accesorios','small':true},
                                    {'titulo':'Tareas Realizadas',
                                    'subtitulo':'Frontend y Backend',
                                    'descripcion':'Se utilizó una aplicación de angular para administar el sotck y mostrar en la web el catálogo de productos.Se vendían productos de iluminación y ópticas para autos de manera personalizada o a través de la web.',
                                    'icon':'verified',
                                    'small':false},];
            request.info_tec = 'Se utilizó una aplicación de angular para administar el sotck y mostrar en la web el catálogo de productos. ';
            request.tecnologias = 'angular,hmtl,npm,git,css';
            return request
        },
        cetek:function(){
            request.info = 'Desarrollo de programas vinculados al entorno educativo y Learning Analytics';
            request.fecha_inicial = '20/08/2017';
            request.fecha_final = '05/08/2019';
            request.before = 'Accesorios';
            request.after = 'Ncr';
            request.titulo = 'Cetek';
            request.cargo = 'Desarrollador';
            request.descripcion = [{'titulo':'Cetek','subtitulo':'Desarrollador Fullstack','descripcion':'','icon':'cetek','small':true},
                                    {'titulo':'Tareas Realizadas',
                                   'subtitulo':'Frontend y Backend',
                                   'descripcion':'Se implementaron soluciones orientadas a la educación a distancia y aprender de los datos de los alumnos en las cursadas. Se minaban datos y se realizaba webscrapping desde la pagina del campus de los alumnos y se administraban con una base de datos Mongo desde el cual se consultaban desde otros desarrollos orientados al monitoreo y tareas de learning analytics.',
                                   'icon':'verified',
                                   'small':false},
                                    {'titulo':'Tecnologías Utilizadas',
                                   'subtitulo':'Frontend y Backend',
                                   'descripcion':'Se realizaron diferentes soluciones de front con React. Se gestionaban las tareas con trello. El código se ordenaba con dependencias de npm y git. Backend con pymongo(python y mongo). Se realizaron tareas de maching learning con python y tensor flow.',
                                   'icon':'schema',
                                   'small':false},
                                   {'titulo':'Ambientes',
                                   'subtitulo':'Entorno Linux Ubuntu',
                                   'descripcion':'', 
                                   'icon':'component',
                                   'small':true},
                                   {'titulo':'Clientes',
                                   'subtitulo':'Implementaciones para los alumnnos de educación a distancia de la facultad.',
                                   'descripcion':'',
                                   'icon':'work',
                                   'small':true}];
            request.info_tec = 'Se realizaron diferentes soluciones de frontend con React.Se gestionaban las tareas con Trello. El código se ordenaba con dependencias de npm y git. Backend con pymongo (python y mongo). Se realizaron tareas de maching Learning con python y tensor flow';
            request.tecnologias = 'trello,javascript,react,npm,tensorFlow,python,mongo,git';
            return request
        },
        /*component,sync,proyect,work,verified,ncr*/ 
        ncr:function(){
            request.info = 'Desarrollador Fullstack y Analista. Consultor';
            request.fecha_inicial = '02/09/2019';
            request.fecha_final = 'Actual';
            request.before = 'Cetek';
            request.after = false;
            request.titulo = 'NCR';
            request.cargo = 'Programador full stack';
            request.descripcion = [{'titulo':'NCR','subtitulo':'Desarrollador Fullstack y Consultor','descripcion':'','icon':'ncr','small':true},
                                    {'titulo':'Tareas Realizadas',
                                    'subtitulo':'Frontend y Backend',
                                    'descripcion':'Se implementaron soluciones orientadas a la educación a distancia y aprender de los datos de los alumnos en las cursadas. Se minaban datos y se realizaba webscrapping desde la pagina del campus de los alumnos y se administraban con una base de datos Mongo desde el cual se consultaban desde otros desarrollos orientados al monitoreo y tareas de learning analytics.',
                                    'icon':'verified',
                                    'small':false},
                                   {'titulo':'Tecnologías Utilizadas',
                                   'subtitulo':'Frontend y Backend',
                                   'descripcion':'Principales soluciones con javascript, html y css. Se emplean frameworks propios de la empresa.  Otras librerías y frameworks utilizados son react, Angular, typescript y Rxjs. Desarrollo inclusive a bajo nivel para soluciones de hardware de ATMs. Algunos productos con ambiente Django.',
                                   'icon':'schema',
                                   'small':false},
                                   {'titulo':'Ambientes',
                                   'subtitulo':'Azure, Sharepoint y Microsoft en general',
                                   'descripcion':'Se realizan storage en sharepoint.Gestión, administración y automatización con azure, pipeline y node.', 
                                   'icon':'component',
                                   'small':false},
                                   {'titulo':'Clientes',
                                   'subtitulo':'Principalmente Bancos y Financieras con transacciones Cash',
                                   'descripcion':'',
                                   'icon':'work',
                                   'small':true}];
            request.info_tec = 'Principales soluciones con javascript, html y css. Frameworks propios de la empresa. react, angular, Typescript y RXJS. Storage en sharepoint. Gestión y administración con azure y npm. Productos con ambiente de Django. Testing point to point con Cypress. Desarrollo a bajo nivel y soluciones para hardware de ATM.';
            request.tecnologias = 'angular,cypres,rxjs,jenkins,react,django,typescript,html,css,javascript,azure,git,npm';
            return request
        },
    }
}

/*module.exports = function() {
    var request = {}
    return {
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
        accesorios:function(){
            request.info =  '   Encargado de marketing y creación de web para la venta de accesorios automotrices.' + 
                            'Venta de equipos de iluminación y respuestos para autos. ' + 
                            'Tuve que encontrar soluciones para poder vender grandes catálogos provistos por un depósito de respuestos clásicos y desempañarme en administración de cartilla de clientes. ' + 
                            'Las soluciones fueron factibles y ofrecía la flexibilidad que me permitía mantener los estudios sin operar al 100% en ello durante el transcurso del día' + 
                            'Una vez que los artículos o piezas comenzaban a escasear comenzó a ser difícil conseguir oportunidades similares. Además de no ser compatible para la carrera en la cual me estaba embarcando a nivel académico.';
            request.fecha_inicial = '2011';
            request.fecha_final = '2017';
            request.before = false;
            request.after = 'Tecnico';
            request.titulo = 'Accesorios Sur';
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


*/ 
