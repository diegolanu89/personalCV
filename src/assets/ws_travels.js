module.exports = function() {
    var request = {}
    return {
        paris:function(){
            request.info = 'Primer país que visitamos';
            request.fecha_inicial = '22/04';
            request.fecha_final = '26/04';
            request.before = false;
            request.after = 'Holanda';
            request.titulo = 'Paris';
            request.cargo = 'Técnico';
            request.descripcion = [{'titulo':'Francia','subtitulo':'187 Rue Saint-Denis, París, Isla de Francia 75002','descripcion':'','icon':'france','small':true},
                                    {'titulo':'Arribo',
                                    'links':[{'text':'Tickets','link':'https://wwws.airfrance.fr/en/trip/trip-details?id=de70f119-b796-4a42-9d15-7f1e33cc0eea'}
                                    ],
                                    'subtitulo':'Aeropuerto Paris',
                                    'descripcion':'Ver detalles del vuelo',
                                    'icon':'flight_down',
                                    'small':true,
                                    'date':new Date('Sat Apr 22 2023 19:55:00 GMT+0200')},
                                
                                    {'titulo':'Traslado',
                                    'links':[{'text':'Opciones','link':'https://www.france-hotel-guide.com/es/blog/cdg-al-centro-de-paris/#:~:text=1)%20RER%20B%20(el%20tren%20de%20las%20afueras%20de%20Par%C3%ADs)&text=Si%20est%C3%A1n%20en%20el%20terminal,se%20encuentran%20en%20el%20terminal.'}
                                    ,{'text':'Ruta','link':'https://drive.google.com/file/d/1beDRLXlX4rwn00lM2S-vsswVzzwGHBas/view?usp=share_link'}],
                                    'subtitulo':'',
                                    'descripcion':'Ver Opciones de traslado',
                                    'icon':'bus',
                                    'small':true,
                                    'date':new Date('Sat Apr 22 2023 20:55:00 GMT+0200')},

                                    {'titulo':'Hospedaje',
                                    'links':[{'text':'Airbnb','link':'https://www.airbnb.com.ar/trips/v1/47644f6b-d817-44b8-9269-6c5e05724c98/ro/RESERVATION_USER_CHECKIN/HMMNANE8DB'}],
                                    'subtitulo':'',
                                    'descripcion':'',
                                    'icon':'airbnb',
                                    'small':true,
                                    'date':new Date('Sat Apr 22 2023 21:55:00 GMT+0200')},

                                    {'titulo':'Torre Eiffel Nocturna',
                                    'links':[{'text':'Ruta','link':'https://drive.google.com/file/d/1UfTzIuF30ygQUf5QrEPZNNPdfB3XHevz/view?usp=share_link'}],
                                    'subtitulo':'',
                                    'descripcion':'Conseguir Insumos y trasladarse a la Torre para verla de Noche',
                                    'icon':'city',
                                    'small':true,
                                    'date':new Date('Sat Apr 22 2023 22:55:00 GMT+0200')},

                                    {'titulo':'Luvre',
                                    'links':[{'text':'Entradas','link':'https://drive.google.com/file/d/1vTHXnSlG0G8SgX1M875RI5-2KTaLpEsd/view?usp=share_link'},
                                             {'text':'AudioGuía','link':'https://drive.google.com/file/d/19Y_ZQBndvObLwH2RgbJ6Yl6ahnWFrOlK/view?usp=share_link'},
                                             {'text':'Recomendaciones','link':'https://www.elviajedesofi.com/que-ver-en-el-louvre-en-dos-horas-20-obras-que-no-te-puedes-perder/'}],
                                    'subtitulo':'Visita al muse de Luvre',
                                    'descripcion':'Entradas por HelloTickets',
                                    'icon':'city',
                                    'small':true,
                                    'date':new Date('Sun Apr 23 2023 10:00:00 GMT+0200')},

                                    {'titulo':'Recorrido hasta Triomphe',
                                    'links':[{'text':'Ruta','link':'https://drive.google.com/file/d/1oRLbpYOjHSbPdi6L36-FaDLy-mJmLQpV/view?usp=share_link'}],
                                    'subtitulo':'',
                                    'descripcion':'Jardin des Tulleries , Place de la Concorde, Jardins des Champs Élysées, Arc de Triomphe (10 a 23hs)',
                                    'icon':'walk',
                                    'small':true,
                                    'date':new Date('Sun Apr 23 2023 12:35:00 GMT+0200')},

                                    {'titulo':'Torre Eiffel',
                                    'links':[{'text':'Ruta','link':'https://drive.google.com/file/d/17rGAZPmLiqtqzDh8uZsa2qx7OhTKy1l0/view?usp=share_link'}],
                                    'subtitulo':'',
                                    'descripcion':'Entrada Cima con Escaleras + Ascensor: $43//Entrada Cima Ascensor: $56, 60',
                                    'icon':'city',
                                    'small':true,
                                    'date':new Date('Sun Apr 23 2023 15:35:00 GMT+0200')},

                                    {'titulo':'Excursion bateau Sena',
                                    'links':[{'text':'Voucher','link':'https://drive.google.com/file/d/16Lo_Dud3IWwD6ZtgwdwzsJb9BTxw1q3E/view'},
                                            {'text':'Ruta','link':'https://drive.google.com/file/d/1VklnIHkucFRh7QAEEgApEh5aWuUy6rot/view?usp=share_link'}
                                            ],
                                    'subtitulo':'',
                                    'descripcion':'',
                                    'icon':'barco',
                                    'small':true,
                                    'date':new Date('Sun Apr 23 2023 19:00:00 GMT+0200')},

                                    {'titulo':'L’Opera Garnier',
                                    'links':[{'text':'Voucher 1','link':'https://drive.google.com/file/d/1Z-SU9oXYVS_qhPazWlBr6aMnCZNjV42P/view?usp=share_link'},
                                             {'text':'Voucher 2','link':'https://drive.google.com/file/d/1LJOf66R8-spTCcFxUbT1W8VWCX498EUf/view?usp=share_link'},
                                             {'text':'Ruta','link':'https://drive.google.com/file/d/10G046GKZpBhyimpjgCR27elHWLsnLzql/view?usp=share_link'}
                                            ],
                                    'subtitulo':'',
                                    'descripcion':'',
                                    'icon':'city',
                                    'small':true,
                                    'date':new Date('Mon Apr 24 2023 10:00:00 GMT+0200')},

                                    {'titulo':'Galerias Lafayette',
                                    'links':[{'text':'Ruta','link':'https://drive.google.com/file/d/1RWlFadVB4w_NdpNfeei3kS13kf2XkmGV/view?usp=share_link'}],
                                    'subtitulo':'',
                                    'descripcion':'A la vuelta del teatro Garnier',
                                    'icon':'city',
                                    'small':true,
                                    'date':new Date('Mon Apr 24 2023 11:00:00 GMT+0200')},

                                    {'titulo':'Free Tour Montmarte y sagrado corazón',
                                    'links':[{'text':'GuruWalk','link':'https://www.guruwalk.com/es/walks/37446-free-tour-montmartre-y-sagrado-corazon'},
                                            {'text':'Ruta','link':'https://drive.google.com/file/d/124btwSErbN82UZrhLNdeG8E0qh07iiX1/view?usp=share_link'}
                                            ],
                                    'subtitulo':'',
                                    'descripcion':'',
                                    'icon':'walk',
                                    'small':true,
                                    'date':new Date('Mon Apr 24 2023 16:30:00 GMT+0200')},

                                    {'titulo':'Le Marie',
                                    'links':[{'text':'Ruta','link':'https://drive.google.com/file/d/1LBEnWqeivSTryT0Lp3IgnzqtXTt452ZA/view?usp=share_link'}],
                                    'subtitulo':'',
                                    'descripcion':'Vuelta al hospedaje. Podríamos ir a comer a Le Marais (barrio judío) recomendado: L’AS du Fallafel 34 Rue des Rosiers, 75004 Paris, Francia (15 cuadras del lugar de hospedaje)',
                                    'icon':'lunch',
                                    'small':true,
                                    'date':new Date('Mon Apr 24 2023 19:40:00 GMT+0200')},

                                    {'titulo':'Versalles',
                                    'links':[{'text':'Opcion 1','link':'https://goo.gl/maps/ZQRP2rdkDRkxk2137'},
                                            {'text':'Opcion 2','link':'https://goo.gl/maps/tEfa2KQnRcyQ9Dam9'},
                                            {'text':'Ruta 1','link':'https://drive.google.com/file/d/1-8HtB9wdtyRho4Z4E7gWWto-GPNXGv4n/view?usp=share_link'},
                                            {'text':'Ruta 2','link':'https://drive.google.com/file/d/13m6RoIxnQCrH_NaQKU1hsaeynvYYeUIQ/view?usp=share_link'}
                                            ],
                                    'subtitulo':'',
                                    'descripcion':'La entrada se puede comprar desde la página de internet del Chateau Versailles, o se puede sacar directamente en la boletería del Palacio, quizá nos conviene sacar ese día porque es más barato sacar ahí y si llegamos temprano no creo que haya tanta cola. Ticker Zona 4',
                                    'icon':'image_black',
                                    'small':true,
                                    'date':new Date('Tue Apr 25 2023 08:00:00 GMT+0200')},

                                    {'titulo':'Recorrido Barrio Latino',
                                    'links':[{'text':'Ruta','link':'https://drive.google.com/file/d/1_L1Q10qIByhlN5k3f15r_gPTH9J3gnwN/view?usp=share_link'}],
                                    'subtitulo':'',
                                    'descripcion':'Le jardin du Luxembourg, Fuente Medici, Panteon , Universidad Pierre Marie Curie, La Sorbona, Eglise de Saint Severin, Notre Dame, Sainte-Chapelle (cúpula $11), La conciergerie (9:30 a 17:00hs). ' + 
                                    '* Restaurant recomendado : Au p’tit Grec 68 Rue Mouffetard, 75005 Paris, Francia. ',
                                    'icon':'walk',
                                    'small':true,
                                    'date':new Date('Tue Apr 25 2023 14:00:00 GMT+0200')},

                                    {'titulo':'Traslado a Eidhoven',
                                    'links':[{'text':'Tickets','link':'https://drive.google.com/file/d/1rsOfKRphuniW4R9LW3P3dUO-PT2pPXBb/view?usp=share_link'},
                                            {'text':'Ruta','link':'https://drive.google.com/file/d/1939yE2w5eP4QMoRgh_BlzzXgQ0LjXEZX/view?usp=share_link'}
                                           ],
                                    'subtitulo':'',
                                    'descripcion':'Autobús 822 en dirección Arnhem - FlixBus Shop Paris, Parc de Bercy, 75012 Paris, Francia',
                                    'icon':'bus',
                                    'small':true,
                                    'date':new Date('Wed Apr 26 2023 11:30:00 GMT+0200')},

                                    {'titulo':'Tips',
                                    'links':[{'text':'Como sacar Tickets','link':'https://www.youtube.com/watch?v=kvHbm_fe6qM&t=183s'}],
                                    'subtitulo':'',
                                    'descripcion':'* WIFI PARIS: te permite encontrar estos puntos libres de acceso para que puedas consultar tus mails o utilizar tus redes sociales. ' + 
                                    '* TOALETS: La falta de baños públicos en Paris es realmente sorprendente para una ciudad que recibe tantos turistas así que no dudes en bajarla. ' + 
                                    '* LOUVRE: Puedes bajar esta aplicación para preparar tu visita al museo del louvre. Más de 3 horas de audioguías fueron creadas para facilitarte el recorrido dentro del museo. ' + 
                                    '* MOOVIT: para transportes públicos. ' + 
                                    '* FRAND PRIX hasta las 10:00 pm. ' + 
                                    '* METRO de 5.00 am hasta 1:15/2:15 findes.',
                                    'icon':'done',
                                    'small':true,
                                    'date':new Date('Wed Apr 26 2023 12:00:00 GMT+0200')},
                                ];
            request.info_tec = false;
            request.tecnologias = false;
            return request
        },
        holanda:function(){
            request.info = 'Nos trasladamos a la casa de Paula  & Andre.'
            request.fecha_inicial = '26/04';
            request.fecha_final = '30/04';
            request.before = 'Paris';
            request.after = 'Berlin';
            request.titulo = 'Holanda';
            request.cargo = 'Técnico';
            request.descripcion = [
                                    {'titulo':'Holanda','subtitulo':'Casa de Paula y Andre','descripcion':'','icon':'holanda','small':true},

                                    {'titulo':'Llegada a Eindhoven',
                                    'subtitulo':'John F Kennedylaan',
                                    'descripcion':'Nos van a buscar a la terminal o nos darán indicaciones.',
                                    'icon':'bus',
                                    'small':false,
                                    'date':new Date('Wed Apr 26 2023 18:45:00 GMT+0200')},

                                    {'titulo':'Salida',
                                    'links':[{'text':'Tickets','link':'https://www.klm.com.ar/trip/trip-details?id=9cfe6fb3-0a92-48b1-9c93-460c58f35f95'}],
                                    'subtitulo':'Aeropuerto Amsterdam Reserva:28U7XZ ',
                                    'descripcion':'KLM CheckIn:Sábado 28 de abril desde las 4:15',
                                    'icon':'flight_up',
                                    'small':true,
                                    'date':new Date('Sun Apr 30 2023 10:15:00 GMT+0200')},

                                    ];
            request.info_tec = 'Se utilizó una aplicación de angular para administar el sotck y mostrar en la web el catálogo de productos. ';
            //request.tecnologias = 'angular,hmtl,npm,git,css';
            return request
        },
        berlin:function(){
            request.info = 'Tercer Destino Berlin';
            request.fecha_inicial = '30/04';
            request.fecha_final = '03/05';
            request.before = 'Holanda';
            request.after = 'Roma';
            request.titulo = 'Berlin';
            request.cargo = 'Desarrollador';
            request.descripcion = [
                                    {'titulo':'Berlin','subtitulo':'Rodenbergstraße 8, 10439 Berlin, Alemania','descripcion':'','icon':'alemania','small':true},
                                    
                                    {'titulo':'Arribo',
                                   'subtitulo':'Berlin Brandenburg Airport',
                                   'descripcion':'',
                                   'icon':'flight_down',
                                   'small':false,
                                   'date':new Date('Sun Apr 30 2023 11:30:00 GMT+0200')},

                                   {'titulo':'Welcome Card',
                                   'links':[{'text':'Link','link':'https://drive.google.com/file/d/12kJ_IIvWoAkkLYjz5h0VC-r1kWl7h2yk/view?usp=share_link'},
                                            {'text':'Como sacar los ticket:','link':'https://www.youtube.com/watch?v=iPr-GCafRNs'},
                                            {'text':'Como usar la BWC:','link':'https://www.youtube.com/watch?v=vHca9A11LM8'}
                                   ],
                                   'subtitulo':'Retirar Welcome card',
                                   'descripcion':'',
                                   'icon':'card',
                                   'small':false,
                                   'date':new Date('Sun Apr 30 2023 12:00:00 GMT+0200')},

                                   {'titulo':'Traslado',
                                    'links':[{'text':'Indicaciones','link':'https://www.google.com/maps/dir/BER+Airport+%E2%80%93+Terminal+1-2,+Melli-Beese-Ring,+12529+Sch%C3%B6nefeld,+Alemania/8+Rodenbergstra%C3%9Fe,+Berl%C3%ADn+10439,+Alemania/@52.4562182,13.3531106,11z/data=!4m14!4m13!1m5!1m1!1s0x47a846d6ec03c211:0x8fe4806071dbb604!2m2!1d13.5126093!2d52.363446!1m5!1m1!1s0x47a85206425de69b:0xb0df4f1ca7f1e069!2m2!1d13.4158492!2d52.5508817!3e3'},
                                             {'text':'Ruta','link':'https://drive.google.com/file/d/1wtHoGqGhrdpqUzTImsY7TEctZk8k4-Jd/view?usp=share_link'}],
                                    'subtitulo':'Este primer traslado debemos comprar los tickets',
                                    'descripcion':'Ver Opciones de traslado',
                                    'icon':'train',
                                    'small':true,
                                    'date':new Date('Sun Apr 30 2023 12:15:00 GMT+0200')},

                                    {'titulo':'Hospedaje',
                                    'links':[{'text':'Indicaciones','link':'https://www.airbnb.com.ar/trips/v1/a260520a-f728-4706-a6a6-4ec6989d1c08/ro/RESERVATION_USER_CHECKIN/HMTDZ5QBBB'}],
                                    'subtitulo':'Rodenbergstraße 8, 10439 Berlin, Alemania',
                                    'descripcion':'Airbnb',
                                    'icon':'airbnb',
                                    'small':true,
                                    'date':new Date('Sun Apr 30 2023 13:30:00 GMT+0200')},

                                    {'titulo':'Recorrido al corazon de Berlin',
                                    'links':[{'text':'GuruWalk','link':'https://www.guruwalk.com/es/vx9dk4c7gx537sfj34dr/messages/received/1987198?'},
                                    {'text':'Ruta','link':'https://drive.google.com/file/d/1GAGck0EOStOLOsearP9KORTY4Op6u0Do/view?usp=share_link'}
                                    ],
                                    'subtitulo':'Recorrido acompañado de guías en español',
                                    'descripcion':'Puerta del Ayuntamiento Rojo, justo a la salida de la estación "Rotes Rathaus"muy cerca de Alexander Platz con paraguas BLANCO',
                                    'icon':'walk',
                                    'small':true,
                                    'date':new Date('Sun Apr 30 2023 15:30:00 GMT+0200')},

                                    {'titulo':'Museo de la guerra fría',
                                    'links':[{'text':'Ruta','link':'https://goo.gl/maps/Gh95kBLkMXn6G7gP9'}],
                                    'subtitulo':'',
                                    'descripcion':'',
                                    'icon':'city',
                                    'small':true,
                                    'date':new Date('Sun Apr 30 2023 19:30:00 GMT+0200')},

                                    {'titulo':'Recorrido a Sachsenhausen',
                                    'links':[{'text':'GuruWalk','link':'https://www.guruwalk.com/es/vx9dk4c7gx537sfj34dr/messages/received/1987198?'},
                                                {'text':'Ruta','link':'https://drive.google.com/file/d/1GAGck0EOStOLOsearP9KORTY4Op6u0Do/view?usp=share_link'}],
                                    'subtitulo':'Recorrido al campo de concentración con guías en español',
                                    'descripcion':'Puerta del Ayuntamiento Rojo,  justo a la salida de la estación "Rotes Rathaus" y vamos juntos hasta el Campo llevamos un paraguas BLANCO. ' +
                                    'Recuerda que para el tour necesitarás un ticket de transporte de las zonas ABC y es recomendable traer algo de comer y de beber.' + 
                                    'El ticket se puede comprar en cualquier estación de metro y/o tren o en la app BVG Tickets.',
                                    'icon':'walk',
                                    'small':true,
                                    'date':new Date('Mon May 1 2023 10:00:00 GMT+0200')},
                                    
                                    {'titulo':'360° - Berliner Fernsehturm',
                                    'links':[{'text':'Ruta','link':'https://goo.gl/maps/FXSoT9FRHseaPMcz7'}],
                                    'subtitulo':'Visita a la torre',
                                    'descripcion':'Luego de esta actividad quedamos libres por la tarde',
                                    'icon':'city',
                                    'small':true,
                                    'date':new Date('Mon May 1 2023 17:30:00 GMT+0200')},

                                    {'titulo':'Postdam',
                                    'links':[{'text':'Guía','link':'https://misindromeviajero.com/que-ver-potsdam/'},
                                            {'text':'Ruta','link':'https://drive.google.com/file/d/1OLuhTwzSDJ8dh4MXhII7cjUah6dpv_Hk/view?usp=share_link'},
                                            {'text':'Pagina Entradas','link':'https://www.berlin-welcomecard.de/es/socio/sanssouci'}],
                                    'subtitulo':'Visita al pueblo de Postdam y sus castillos',
                                    'descripcion':'Partimos a la mañana temprano y nos trasladamos en transporte público',
                                    'icon':'walk',
                                    'small':true,
                                    'date':new Date('Tue May 2 2023 9:30:00 GMT+0200')},
                                   
                                    {'titulo':'Parlamento',
                                    'links':[{'text':'Permiso de entrada','link':'https://drive.google.com/file/d/1r9yXSpQo0d53VfsabuEQxlv_OpiHyeBy/view?usp=share_link'},
                                             {'text':'Ruta','link':'https://drive.google.com/file/d/166DUoV0GWlV4KLW_hEPnYO6zz3q-ESCI/view?usp=share_link'}
                                            ],
                                    'subtitulo':'Visita al pueblo de Postdam y sus castillos',
                                    'descripcion':'Partimos a la mañana temprano y nos trasladamos en transporte público',
                                    'icon':'walk',
                                    'small':true,
                                    'date':new Date('Tue May 2 2023 18:30:00 GMT+0200')},

                                    {'titulo':'Salida',
                                    'links':[{'text':'Tickets','link':'https://www.ryanair.com/es/es/trip/manage/a3b85c42-c684-44d1-98fa-8c4ae73b496c'}],
                                    'subtitulo':'Aeropuerto:Berlín Bradenburg Reserva:HH194A',
                                    'descripcion':'RyanAir CheckIn listo',
                                    'icon':'flight_up',
                                    'small':true,
                                    'date':new Date('Wed May 3 2023 11:00:00 GMT+0200')},
                                ];

                                   
            request.info_tec = 'Se realizaron diferentes soluciones de frontend con React.Se gestionaban las tareas con Trello. El código se ordenaba con dependencias de npm y git. Backend con pymongo (python y mongo). Se realizaron tareas de maching Learning con python y tensor flow';
            
            return request
        },
        /*component,sync,proyect,work,verified,ncr*/ 
        roma:function(){
            request.info = 'Desarrollador Fullstack y Analista. Consultor';
            request.fecha_inicial = '03/05';
            request.fecha_final = '07/05';
            request.before = 'Berlin';
            request.after = 'Nerja';
            request.titulo = 'Roma';
            request.cargo = 'Programador full stack';
            request.descripcion = [
                {'titulo':'Roma','subtitulo':"Via L'Aquila, 52",'descripcion':'','icon':'roma','small':true},

                {'titulo':'Llegada a Bergamo Airport',
                'subtitulo':'',
                'descripcion':'',
                'icon':'flight_down',
                'small':false,
                'date':new Date('Wed May 3 2023 12:45:00 GMT+0200')},

                {'titulo':'Traslado de Bergamo a  Milano Centrale',
                'links':[{'text':'Tickets','link':'https://drive.google.com/file/d/1hz6Ijz_i5_BpPqCtBwbjMSYvgclYAWMu/view?usp=share_link'},
                        {'text':'Ruta','link':'https://drive.google.com/file/d/1RRbR8IN3CCf-bhDsl5Q4OwIzOhjTVLt5/view?usp=share_link'}
                        ],
                'subtitulo':'Salida de tren desde Bergamo a Milano Centrale',
                'descripcion':'',
                'icon':'train',
                'small':true,
                'date':new Date('Wed May 3 2023 15:10:00 GMT+0200')},

                {'titulo':'Conexión Milano Centrale a Roma',
                'links':[{'text':'Tickets','link':'https://drive.google.com/file/d/1hz6Ijz_i5_BpPqCtBwbjMSYvgclYAWMu/view?usp=share_link'}],
                'subtitulo':'',
                'descripcion':'',
                'icon':'train',
                'small':true,
                'date':new Date('Wed May 3 2023 16:30:00 GMT+0200')},

                {'titulo':'Roma Termini',
                'links':[{'text':'Como comprar tickets:', 'link':'https://www.youtube.com/watch?v=NakGclf9-rg'}],
                'subtitulo':'Estación Terminal de tren de Roma',
                'descripcion':'Comprar 14 ticket de 100 minutos en la estación para tenerlos listos los días siguientes.',
                'icon':'city',
                'small':true,
                'date':new Date('Wed May 3 2023 19:50:00 GMT+0200')},

                {'titulo':'Traslado a Hospedaje',
                'links':[],
                'subtitulo':'Desde la Estación Terminal de tren de Roma',
                'descripcion':'Tomar Tranvía 14 y 15 hasta Prenestino hasta las 23.30',
                'icon':'train',
                'small':true,
                'date':new Date('Wed May 3 2023 20:00:00 GMT+0200')},

                {'titulo':'Hospedaje',
                'links':[{'text':'Tickets','link':'https://www.airbnb.com.ar/trips/v1/f8d2df8b-d3ca-4ab8-9d28-aeb4cccfd01d/ro/RESERVATION_USER_CHECKIN/HM39PE4PCK'}],
                'subtitulo':'',
                'descripcion':"Via L'Aquila, 52 Interno 9, scala unica, piano III senza ascensore, Roma, Lazio 00176, Italia",
                'icon':'airbnb',
                'small':true,
                'date':new Date('Wed May 3 2023 21:50:00 GMT+0200')},

                {'titulo':'Coliseo, Palatino y Foro romano',
                'links':[{'text':'Ubicación Touristation ','link':'https://goo.gl/maps/f8hxQ5yDYQnYmNcp6'},
                         {'text':'Reserva','link':'https://drive.google.com/file/d/1IhoLLU0xOAWHkB2ufvxF48nfs_jvpevW/view?usp=share_link'},
                         {'text':'Ruta','link':'https://drive.google.com/file/d/1m0tkbfuG8OKYbrSoOSGFZR3-XGB65Nli/view?usp=share_link'}
                        ],
                'subtitulo':'',
                'descripcion':"* Tomar línea 81 de bus. * Tenemos la reserva para las 10:00 a.m. * El punto de encuentro con el personal de turismo es: TOURISTATION PIAZZA VENEZIA: Piazza D'Ara Coeli. * Tenemos que estar 20 minutos antes en este lugar.",
                'icon':'city',
                'small':true,
                'date':new Date('Thu May 4 2023 9:15:00 GMT+0200')},

                {'titulo':'Recorrido a la salida del Coliseo',
                'links':[],
                'subtitulo':'',
                'descripcion':"[1] Circo máximo (Gratis). [2] Boca de la verdad. [3] Plaza Venecia y el Altar a la Patria. [4] Foro de Trajano "+
                            "[5] Panteón de Agripa. [6]Fontana de Trevi. [7]Gelateria Valentino.",
                'icon':'walk',
                'small':true,
                'date':new Date('Thu May 4 2023 10:15:00 GMT+0200')},

                {'titulo':'Comida',
                'links':[],
                'subtitulo':'',
                'descripcion':"OPCIONES DE COMIDA PARA EL PRIMER DIA:PIZZA FLORIDA: 00186, Via Florida, 25, 00186 Roma RM, Italia (barato y rico según el blog)" + 
                            "Si nos queremos sentar a comer: Giggetto al Portico d’Ottavia en la Via del Portico d’Ottavia, 21. (entre 30 y 40 euros por persona)" +
                            "Grom gelato; gelateria Romana;Giolitti (noccioola con pistaccio) Venchi.",
                'icon':'lunch',
                'small':true,
                'date':new Date('Thu May 4 2023 21:15:00 GMT+0200')},

                {'titulo':'Retorno a Hospedaje',
                'links':[],
                'subtitulo':'',
                'descripcion':'',
                'icon':'bus',
                'small':true,
                'date':new Date('Thu May 4 2023 22:00:00 GMT+0200')},

                {'titulo':'Vaticano & Capilla Sixtina',
                'links':[{'text':'Ubicación Touristation ','link':'https://www.google.com/maps/place/Viale+Vaticano,+97,+00192+Roma+RM,+Italia/@41.9069145,12.4504697,17z/data=!4m15!1m8!3m7!1s0x132f607a922f1a35:0x544821744fabcb2b!2sViale+Vaticano,+97,+00192+Roma+RM,+Italia!3b1!8m2!3d41.9069145!4d12.4526584!16s%2Fg%2F11cshmddnn!3m5!1s0x132f607a922f1a35:0x544821744fabcb2b!8m2!3d41.9069145!4d12.4526584!16s%2Fg%2F11cshmddnn'},
                         {'text':'Reserva ','link':'https://drive.google.com/file/d/1nVQVepemC3ZyCYUfl6PldoIXmeewFnbP/view?usp=share_link'},
                         {'text':'Ruta','link':'https://drive.google.com/file/d/1EcfTiKhx7fTDddoEtfGnriySdM8jRa0c/view?usp=share_link'}
                        ],
                'subtitulo':'',
                'descripcion':"Encuentro en Viale Vaticano, 97 9:45.* Vaticano. * Basílica de San Pedro. * Museo del Vaticano. * Capilla sixtina",
                'icon':'city',
                'small':true,
                'date':new Date('Friday May 5 2023 8:00:00 GMT+0200')},

                
                {'titulo':"Castillo y Puente de Sant'Angelo",
                'links':[{'text':'Ubicación ','link':'https://www.google.com/maps/place/Lungotevere+Castello,+50,+00186+Roma+RM,+Italia/@41.9030686,12.4637004,17z/data=!4m15!1m8!3m7!1s0x132f605c7a08f955:0x65cd4a5322cc5698!2sLungotevere+Castello,+50,+00186+Roma+RM,+Italia!3b1!8m2!3d41.9030646!4d12.4662753!16s%2Fg%2F11bw4jv8mj!3m5!1s0x132f605c7a08f955:0x65cd4a5322cc5698!8m2!3d41.9030646!4d12.4662753!16s%2Fg%2F11bw4jv8mj?hl=es'},
                         {'text':'Reserva ','link':'https://drive.google.com/file/d/1OUYWeWr-NYHO5aBHtg5u32zev7gT0Qrq/view?usp=share_link'}],
                'subtitulo':'',
                'descripcion':"Presentar a la entrada del castillo Lungotevere Castello, 50.",
                'icon':'city',
                'small':true,
                'date':new Date('Friday May 5 2023 12:00:00 GMT+0200')},

                {'titulo':'Comida',
                'links':[{'text':'Ubicación ','link':'https://goo.gl/maps/KGGNh8YTdzDg3va37'}],
                'subtitulo':'',
                'descripcion':"Para comer cerca, el Likeat tiene un bocata de porcetta super recomendado, si te cuadra algo rápido para seguir la ruta. Está a 5 minutos andando del castillo de Sant´Angelo, en la calle Corso Vittorio Emanuele II 310.",
                'icon':'lunch',
                'small':true,
                'date':new Date('Friday May 5 2023 14:30:00 GMT+0200')},

                {'titulo':'Recorrido',
                'links':[],
                'subtitulo':'',
                'descripcion':"* Piazza Navona. * Campo di Fiori. * Teatro Marcello. * Isla Tiberina ",
                'icon':'walk',
                'small':true,
                'date':new Date('Friday May 5 2023 18:30:00 GMT+0200')},

                {'titulo':'Ruta Gastronomica Trasteverre',
                'links':[{'text':'GuruWalk ','link':'https://www.guruwalk.com/es/vx9dk4c7gx537sfj34dr/messages/received/2121098?'},
                {'text':'Civitatis ','link':'https://www.civitatis.com/es/roma/tour-gastronomico-barrio-trastevere/?aid=1065'},
                {'text':'Ubicación ','link':'https://maps.app.goo.gl/x42jBv3e1B7thS1C7'},
                {'text':'Vuelta','link':'https://drive.google.com/file/d/1DDVa9a8LP8wtYWpRM_QTu7omHYmqpXTM/view?usp=share_link'}],
                'subtitulo':'',
                'descripcion':"Salir desde Piazza Trilussa en tour Guru",
                'icon':'lunch',
                'small':true,
                'date':new Date('Friday May 5 2023 18:30:00 GMT+0200')},
                        

                {'titulo':'Basilica el Sagrado Corazón de Jeses Santa Maria della Neve',
                'links':[],
                'subtitulo':'',
                'descripcion':"Trasladarse desde el hospedaje",
                'icon':'walk',
                'small':true,
                'date':new Date('Sat May 6 2023 8:30:00 GMT+0200')},

                {'titulo':'Recorrido de Popolo a Vincoli',
                'links':[{'text':'Ruta','link':'https://drive.google.com/file/d/1WGVRlOZvqYN5odmRVExIhHg9RQTow6Kz/view?usp=share_link'},
                         {'text':'Vuelta','link':'https://drive.google.com/file/d/1I5DY3qfEsBBMxGv3rrnvyu4XWM4hT4R7/view?usp=share_link'}
                ],
                'subtitulo':'',
                'descripcion':"Plaza del Popolo * Vía del Corso * Pompi Tiramisù * Vía Condotti * Galería Alberto Sordi * Alberto Sordi * Plaza Colonna * Piazza di Pietra * Vía del Boschetto * Basílica San Pietro in Vincoli",
                'icon':'walk',
                'small':true,
                'date':new Date('Sat May 6 2023 8:30:00 GMT+0200')},
                

                {'titulo':'Taxi a Fiumicino',
                'links':[],
                'subtitulo':'',
                'descripcion':"",
                'icon':'bus',
                'small':true,
                'date':new Date('Sun May 7 2023 2:40:00 GMT+0200')},

                {'titulo':'Salida',
                'links':[{'text':'WizzAir','link':'https://wizzair.com/es-es#/'}],
                'subtitulo':'Aeropuerto:Fiumicino Reserva:CCWQ8P',
                'descripcion':'WizzAir CheckIn hasta 3hs antes de la salida',
                'icon':'flight_up',
                'small':true,
                'date':new Date('Sun May 7 2023 6:05:00 GMT+0200')},

                ];
            request.info_tec = 'Principales soluciones con javascript, html y css. Frameworks propios de la empresa. react, angular, Typescript y RXJS. Storage en sharepoint. Gestión y administración con azure y npm. Productos con ambiente de Django. Testing point to point con Cypress. Desarrollo a bajo nivel y soluciones para hardware de ATM.';
           
            return request
        },
        nerja:function(){
            request.info = 'Desarrollador Fullstack y Analista. Consultor';
            request.fecha_inicial = '07/05';
            request.fecha_final = '10/05';
            request.before = 'Roma';
            request.after = 'Madrid';
            request.titulo = 'Nerja';
            request.cargo = 'Programador full stack';
            request.descripcion = [
                {'titulo':'Nerja','subtitulo':'Casa de Adela Ruiz Diaz ','descripcion':'','icon':'nerja','small':true},

                {'titulo':'Llegada a Málaga',
                'subtitulo':'Aeropuerto de Málaga',
                'descripcion':'Nos van a buscar al aeropuerto.',
                'icon':'flight_down',
                'small':false,
                'date':new Date('Sun May 7 2023 8:55:00 GMT+0200')},

                {'titulo':'Cuevas de Nerja',
                'subtitulo':'',
                'descripcion':'Traslado desde la plaza principal en el tren hasta la cueva y el museo',
                'icon':'image_black',
                'small':false,
                'date':new Date('Mon May 8 2023 10:00:00 GMT+0200')},

                {'titulo':'Salida',
                'links':[{'text':'EuropaAir','link':'https://www.aireuropa.com/ar/es/mytrips/managereservation?reservationId=3N4AH3&lastName=PEYRANO&checkinBox=false&search=true'}],
                'subtitulo':'Aeropuerto Málaga Reserva:3N4AH3',
                'descripcion':'EuropaAir Checkin: 24 u 48hs antes.',
                'icon':'flight_up',
                'small':false,
                'date':new Date('Wed May 10 2023 8:35:00 GMT+0200')},

                ];
            request.info_tec = 'Principales soluciones con javascript, html y css. Frameworks propios de la empresa. react, angular, Typescript y RXJS. Storage en sharepoint. Gestión y administración con azure y npm. Productos con ambiente de Django. Testing point to point con Cypress. Desarrollo a bajo nivel y soluciones para hardware de ATM.';
           
            return request
        },
        madrid:function(){
            request.info = 'Desarrollador Fullstack y Analista. Consultor';
            request.fecha_inicial = '10/05';
            request.fecha_final = '13/05';
            request.before = 'Nerja';
            request.after = false;
            request.titulo = 'Madrid';
            request.cargo = 'Programador full stack';
            request.descripcion = [{'titulo':'Madrid','subtitulo':'C. Gonzalo Jiménez de Quesada, 2','descripcion':'','icon':'madrid','small':true},
                                
            {'titulo':'Llegada a Madrid',
            'subtitulo':'Aeropuerto Barajas',
            'descripcion':'Cargar la tarjeta para pasajes (alrededor de 12 traslados)',
            'icon':'flight_down',
            'small':false,
            'date':new Date('Wed May 10 2023 9:55:00 GMT+0200')},

            {'titulo':'Traslado',
            'links':[{'text':'Ruta','link':'https://drive.google.com/file/d/1m7QnCTidgD15IqSAKtJxViIVDdbCsUzO/view?usp=share_link'}],
            'subtitulo':'',
            'descripcion':'',
            'icon':'bus',
            'small':false,
            'date':new Date('Wed May 10 2023 10:00:00 GMT+0200')},

            {'titulo':'Hospedaje',
            'subtitulo':'',
            'descripcion':'',
            'icon':'airbnb',
            'small':false,
            'date':new Date('Wed May 10 2023 10:35:00 GMT+0200')},

            {'titulo':'Santiago Bernabeu',
            'links':[{'text':'Ruta','link':'https://drive.google.com/file/d/1cXnHIzsm0ja6wiV991RmT4XJBy7guFBu/view?usp=share_link'}],
            'subtitulo':'',
            'descripcion':'',
            'icon':'city',
            'small':false,
            'date':new Date('Wed May 10 2023 13:35:00 GMT+0200')},

            {'titulo':'Plaza Mayor a Plaza del retiro',
            'links':[{'text':'GuruWalk','link':'https://www.guruwalk.com/es/walks/38448-free-tour-madrid-el-otro-lado'},
                    {'text':'Ruta','link':'https://drive.google.com/file/d/1DDq_xVmO5znybcAGUooJpb-wceB02Gzi/view?usp=share_link'}
                    ],
            'subtitulo':'',
            'descripcion':'',
            'icon':'walk',
            'small':false,
            'date':new Date('Wed May 10 2023 17:35:00 GMT+0200')},

            {'titulo':'Museo del Jamón',
            'subtitulo':'Cena',
            'descripcion':'Momento para elegir aquí u otra comida',
            'icon':'lunch',
            'small':false,
            'date':new Date('Wed May 10 2023 20:55:00 GMT+0200')},

            {'titulo':'Excursión a Avila y Segovia',
            'links':[{'text':'Ruta','link':' https://drive.google.com/file/d/1XtUBNmRmnCJHmcbG71g0LmLE3abXaEQ2/view?usp=share_link'}],
            'subtitulo':'Reserva: GYGX7Q2YYLQF',
            'descripcion':'Excursion con guía de GetyoutGuide',
            'icon':'bus',
            'small':false,
            'date':new Date('Thu May 11 2023 20:55:00 GMT+0200')},

            {'titulo':'Recorrido de Compras',
            'subtitulo':'Shopping',
            'descripcion':'SARA - PRIMARK - OULETS - LA GRAN VIA',
            'icon':'card',
            'small':false,
            'date':new Date('Fri May 12 2023 20:55:00 GMT+0200')},

            {'titulo':'Taxi a Barajas Airport',
            'subtitulo':'Shopping',
            'descripcion':'SARA - PRIMARK - OULETS - LA GRAN VIA',
            'icon':'bus',
            'small':false,
            'date':new Date('Sat May 12 2023 2:35:00 GMT+0200')},

            {'titulo':'Salida',
            'links':[{'text':'Tickets','link':'https://wwws.airfrance.fr/en/trip/trip-details?id=de70f119-b796-4a42-9d15-7f1e33cc0eea'}],                    
            'subtitulo':'AirFrance Reserva:43BYCG',
            'descripcion':'CheckIn:Averiguar  Recordar realizar TAXES FREE',
            'icon':'flight_up',
            'small':false,
            'date':new Date('Sat May 12 2023 6:10:00 GMT+0200')},
                                   
                                ];
            request.info_tec = 'Principales soluciones con javascript, html y css. Frameworks propios de la empresa. react, angular, Typescript y RXJS. Storage en sharepoint. Gestión y administración con azure y npm. Productos con ambiente de Django. Testing point to point con Cypress. Desarrollo a bajo nivel y soluciones para hardware de ATM.';
            
            return request
        },
    }
}
