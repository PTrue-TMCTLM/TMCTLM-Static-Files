if(JClicObject){JClicObject.projectFiles["ci.jclic"]="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<JClicProject name=\"ci\" version=\"0.1.3\">\r\n <settings>\r\n  <title>Un niño diferente en nuestra escuela</title>\r\n  <revision description=\"created\" date=\"5/7/13\" />\r\n  <revision description=\"Publicación en la zonaClic (http://clic.xtec.cat)\" date=\"9/20/13\">\r\n   <author name=\"Equip Clic\" mail=\"clic@xtec.cat\" organization=\"Àrea TIC - Departament d'Educació\" />\r\n  </revision>\r\n  <author name=\"Marta Pérez Calvo\" mail=\"martaperezcalvo@hotmail.com\" />\r\n  <author name=\"Sara Ferrer Pérez\" rol=\"Dibujos\" />\r\n  <author name=\"Pablo Ferrer Pérez\" rol=\"Voz\" />\r\n  <organization name=\"CEIP Cesáreo Alierta\" mail=\"cpcalzaragoza@educa.aragon.es\" url=\"http://www.cesareoalierta.com/\" city=\"Zaragoza\" state=\"Aragón\" />\r\n  <language>español</language>\r\n  <description>\r\n   <p>Ejercicios de comprensión lectora a partir de un cuento con ilustraciones. Existen dos niveles: infantil y primaria. en cada nivel se puede encontrar el cuento adaptado según la etapa y actividades para cada nivel. A estos se accede a través de menús de elección de itinerario.&lt;p&gt;</p>\r\n   <p>El cuento y las actividades de infantil están en mayúsculas y tienen audio, mientras que las de primer ciclo de primaria están en cursiva y sin audio.</p>\r\n  </description>\r\n  <descriptors area=\"Lenguas\" level=\"Infantil (3-6), Primaria (6-12)\">aprendizaje de la lengua, comprensión escrita, lectura, vocabulario, comprensión lectora</descriptors>\r\n  <skin file=\"@orange.xml\" />\r\n </settings>\r\n <sequence>\r\n  <item id=\"inicio\" name=\"Cuento _1\">\r\n   <jump action=\"RETURN\" id=\"back\" />\r\n  </item>\r\n  <item name=\"Cuento _2\" />\r\n  <item name=\"Cuento _3\" />\r\n  <item name=\"Cuento _4\" />\r\n  <item name=\"Cuento _5\" />\r\n  <item name=\"Cuento _6\" />\r\n  <item name=\"Cuento _7\" />\r\n  <item name=\"Cuento _8\">\r\n   <jump action=\"RETURN\" id=\"forward\" />\r\n  </item>\r\n </sequence>\r\n <activities>\r\n  <activity class=\"@panels.InformationScreen\" name=\"Cuento _1\" code=\"\">\r\n   <description />\r\n   <messages>\r\n    <cell type=\"initial\">\r\n     <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n      <font family=\"Edelfontmed\" size=\"20\" bold=\"true\" />\r\n      <color background=\"0xFFFFFF\" />\r\n     </style>\r\n     <p>PULSA LA FLECHA PARA CONTINUAR ESCUCHANDO EL CUENTO.</p>\r\n    </cell>\r\n   </messages>\r\n   <settings margin=\"10\" report=\"false\">\r\n    <container bgColor=\"0xC0C0C0\">\r\n     <gradient source=\"0xFFFFFF\" dest=\"0x6666FF\" angle=\"0\" cycles=\"5\" />\r\n     <counters time=\"true\" actions=\"true\" score=\"true\" />\r\n    </container>\r\n    <window bgColor=\"0x330066\" border=\"true\" />\r\n   </settings>\r\n   <cells rows=\"1\" cols=\"1\" cellWidth=\"640.0\" cellHeight=\"500.0\" border=\"true\">\r\n    <style borderStroke=\"0.7\" markerStroke=\"5.0\" />\r\n    <shaper class=\"@Rectangular\" cols=\"1\" rows=\"1\" />\r\n    <cell id=\"0\" txtAlign=\"middle,bottom\" imgAlign=\"middle,top\" avoidOverlapping=\"true\" image=\"parrafo1-resized.jpg\">\r\n     <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n      <font family=\"Edelfontmed\" size=\"18\" bold=\"true\" />\r\n      <color background=\"0xFFFFFF\" />\r\n     </style>\r\n     <media type=\"PLAY_AUDIO\" level=\"1\" file=\"parrafo1.mp3\" autoStart=\"true\" />\r\n     <p>HOLA, ME LLAMO SARA Y ESTOY EN SEGUNDO DE PRIMARIA. MIS MEJORES AMIGOS SON, PABLO Y ANA. HACE UNAS SEMANAS VINO UN NIÑO NUEVO A NUESTRA CLASE. EL PROFE LE PIDIÓ QUE SE PRESENTARA. ME LLAMO T.J., DIJO.</p>\r\n    </cell>\r\n   </cells>\r\n  </activity>\r\n  <activity class=\"@panels.InformationScreen\" name=\"Cuento _2\" code=\"\">\r\n   <description />\r\n   <messages>\r\n    <cell type=\"initial\">\r\n     <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n      <font family=\"Edelfontmed\" size=\"20\" bold=\"true\" />\r\n      <color background=\"0xFFFFFF\" />\r\n     </style>\r\n     <p>PULSA LA FLECHA PARA CONTINUAR ESCUCHANDO EL CUENTO.</p>\r\n    </cell>\r\n   </messages>\r\n   <settings margin=\"10\" report=\"false\">\r\n    <container bgColor=\"0xC0C0C0\">\r\n     <gradient source=\"0xFFFFFF\" dest=\"0x6666FF\" angle=\"0\" cycles=\"5\" />\r\n     <counters time=\"true\" actions=\"true\" score=\"true\" />\r\n    </container>\r\n    <window bgColor=\"0x330066\" border=\"true\" />\r\n   </settings>\r\n   <cells rows=\"1\" cols=\"1\" cellWidth=\"640.0\" cellHeight=\"500.0\" border=\"true\">\r\n    <style />\r\n    <shaper class=\"@Rectangular\" cols=\"1\" rows=\"1\" />\r\n    <cell id=\"0\" txtAlign=\"middle,bottom\" imgAlign=\"middle,top\" avoidOverlapping=\"true\" image=\"parrafo2-resized.jpg\">\r\n     <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n      <font family=\"Edelfontmed\" size=\"18\" bold=\"true\" />\r\n      <color background=\"0xFFFFFF\" />\r\n     </style>\r\n     <media type=\"PLAY_AUDIO\" level=\"1\" file=\"parrafo2.mp3\" autoStart=\"true\" />\r\n     <p>EN CUANTO COMENZÓ A HABLAR TODOS NOS REÍMOS DISIMULADAMENTE. HABLABA RARO, MUY RARO Y SU FORMA DE MOVERSE ERA DISTINTA, EXTRAÑA. A TODOS NOS HACÍA MUCHA GRACIA. NOS REÍAMOS DE ÉL CONSTANTEMENTE.</p>\r\n    </cell>\r\n   </cells>\r\n  </activity>\r\n  <activity class=\"@panels.InformationScreen\" name=\"Cuento _3\" code=\"\">\r\n   <description />\r\n   <messages>\r\n    <cell type=\"initial\">\r\n     <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n      <font family=\"Edelfontmed\" size=\"20\" bold=\"true\" />\r\n      <color background=\"0xFFFFFF\" />\r\n     </style>\r\n     <p>PULSA LA FLECHA PARA CONTINUAR ESCUCHANDO EL CUENTO.</p>\r\n    </cell>\r\n   </messages>\r\n   <settings margin=\"10\" report=\"false\">\r\n    <container bgColor=\"0xC0C0C0\">\r\n     <gradient source=\"0xFFFFFF\" dest=\"0x6666FF\" angle=\"0\" cycles=\"5\" />\r\n     <counters time=\"true\" actions=\"true\" score=\"true\" />\r\n    </container>\r\n    <window bgColor=\"0x330066\" border=\"true\" />\r\n   </settings>\r\n   <cells rows=\"1\" cols=\"1\" cellWidth=\"640.0\" cellHeight=\"500.0\" border=\"true\">\r\n    <style />\r\n    <shaper class=\"@Rectangular\" cols=\"1\" rows=\"1\" />\r\n    <cell id=\"0\" txtAlign=\"middle,bottom\" imgAlign=\"middle,top\" avoidOverlapping=\"true\" image=\"parrafo3-resized.jpg\">\r\n     <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n      <font family=\"Edelfontmed\" size=\"18\" bold=\"true\" />\r\n      <color background=\"0xFFFFFF\" />\r\n     </style>\r\n     <media type=\"PLAY_AUDIO\" level=\"1\" file=\"parrafo3.mp3\" autoStart=\"true\" />\r\n     <p>LA PRIMERA SEMANA ESTUVO SIEMPRE SÓLO, INCLUSO EN LOS RECREOS. NADIE QUERÍA JUGAR CON ÉL... ¡ES QUE ERA TAN RARO! ADEMÁS SÓLO HABLABA DE DINOSAURIOS, TODO EL RATO HABLANDO DE DINOSAURIOS... ¡QUÉ ABURRIDO!</p>\r\n    </cell>\r\n   </cells>\r\n  </activity>\r\n  <activity class=\"@panels.InformationScreen\" name=\"Cuento _4\" code=\"\">\r\n   <description />\r\n   <messages>\r\n    <cell type=\"initial\">\r\n     <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n      <font family=\"Edelfontmed\" size=\"20\" bold=\"true\" />\r\n      <color background=\"0xFFFFFF\" />\r\n     </style>\r\n     <p>PULSA LA FLECHA PARA CONTINUAR ESCUCHANDO EL CUENTO.</p>\r\n    </cell>\r\n   </messages>\r\n   <settings margin=\"10\" report=\"false\">\r\n    <container bgColor=\"0xC0C0C0\">\r\n     <gradient source=\"0xFFFFFF\" dest=\"0x6666FF\" angle=\"0\" cycles=\"5\" />\r\n     <counters time=\"true\" actions=\"true\" score=\"true\" />\r\n    </container>\r\n    <window bgColor=\"0x330066\" border=\"true\" />\r\n   </settings>\r\n   <cells rows=\"1\" cols=\"1\" cellWidth=\"640.0\" cellHeight=\"500.0\" border=\"true\">\r\n    <style />\r\n    <shaper class=\"@Rectangular\" cols=\"1\" rows=\"1\" />\r\n    <cell id=\"0\" txtAlign=\"middle,bottom\" imgAlign=\"middle,top\" avoidOverlapping=\"true\" image=\"parrafo4-resized.jpg\">\r\n     <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n      <font family=\"Edelfontmed\" size=\"18\" bold=\"true\" />\r\n      <color background=\"0xFFFFFF\" />\r\n     </style>\r\n     <media type=\"PLAY_AUDIO\" level=\"1\" file=\"parrafo4.mp3\" autoStart=\"true\" />\r\n     <p>TODOS LOS COMPAÑEROS NOS METÍAMOS CON ÉL, LE LLAMÁBAMOS T.REX., Y SIEMPRE QUE SE ACERCABA A ALGUNO DE NOSOTROS LE RECIBÍAMOS HACIENDO UN GRUÑIDO COMO EL DE DINOSAURIO ¡GGRRR!</p>\r\n    </cell>\r\n   </cells>\r\n  </activity>\r\n  <activity class=\"@panels.InformationScreen\" name=\"Cuento _5\" code=\"\">\r\n   <description />\r\n   <messages>\r\n    <cell type=\"initial\">\r\n     <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n      <font family=\"Edelfontmed\" size=\"20\" bold=\"true\" />\r\n      <color background=\"0xFFFFFF\" />\r\n     </style>\r\n     <p>PULSA LA FLECHA PARA CONTINUAR ESCUCHANDO EL CUENTO.</p>\r\n    </cell>\r\n   </messages>\r\n   <settings margin=\"10\" report=\"false\">\r\n    <container bgColor=\"0xC0C0C0\">\r\n     <gradient source=\"0xFFFFFF\" dest=\"0x6666FF\" angle=\"0\" cycles=\"5\" />\r\n     <counters time=\"true\" actions=\"true\" score=\"true\" />\r\n    </container>\r\n    <window bgColor=\"0x330066\" border=\"true\" />\r\n   </settings>\r\n   <cells rows=\"1\" cols=\"1\" cellWidth=\"640.0\" cellHeight=\"500.0\" border=\"true\">\r\n    <style />\r\n    <shaper class=\"@Rectangular\" cols=\"1\" rows=\"1\" />\r\n    <cell id=\"0\" txtAlign=\"middle,bottom\" imgAlign=\"middle,top\" avoidOverlapping=\"true\" image=\"parrafo5-resized.jpg\">\r\n     <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n      <font family=\"Edelfontmed\" size=\"18\" bold=\"true\" />\r\n      <color background=\"0xFFFFFF\" />\r\n     </style>\r\n     <media type=\"PLAY_AUDIO\" level=\"1\" file=\"parrafo5.mp3\" autoStart=\"true\" />\r\n     <p>LA SEMANA PASADA, JULIO, EL PROFESOR DE CONO NOS PREPARÓ UN JUEGO. UNA ESPECIE DE TRIVIAL EN EL QUE HABÍA QUE JUGAR POR PAREJAS. LA QUE GANARA SE LLEVARÍA UN REGALO SORPRESA. ¡QUÉ GUAY!</p>\r\n    </cell>\r\n   </cells>\r\n  </activity>\r\n  <activity class=\"@panels.InformationScreen\" name=\"Cuento _6\" code=\"\">\r\n   <description />\r\n   <messages>\r\n    <cell type=\"initial\">\r\n     <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n      <font family=\"Edelfontmed\" size=\"20\" bold=\"true\" />\r\n      <color background=\"0xFFFFFF\" />\r\n     </style>\r\n     <p>PULSA LA FLECHA PARA CONTINUAR ESCUCHANDO EL CUENTO.</p>\r\n    </cell>\r\n   </messages>\r\n   <settings margin=\"10\" report=\"false\">\r\n    <container bgColor=\"0xC0C0C0\">\r\n     <gradient source=\"0xFFFFFF\" dest=\"0x6666FF\" angle=\"0\" cycles=\"5\" />\r\n     <counters time=\"true\" actions=\"true\" score=\"true\" />\r\n    </container>\r\n    <window bgColor=\"0x330066\" border=\"true\" />\r\n   </settings>\r\n   <cells rows=\"1\" cols=\"1\" cellWidth=\"640.0\" cellHeight=\"500.0\" border=\"true\">\r\n    <style />\r\n    <shaper class=\"@Rectangular\" cols=\"1\" rows=\"1\" />\r\n    <cell id=\"0\" txtAlign=\"middle,bottom\" imgAlign=\"middle,top\" avoidOverlapping=\"true\" image=\"parrafo6-resized.jpg\">\r\n     <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n      <font family=\"Edelfontmed\" size=\"18\" bold=\"true\" />\r\n      <color background=\"0xFFFFFF\" />\r\n     </style>\r\n     <media type=\"PLAY_AUDIO\" level=\"1\" file=\"parrafo6.mp3\" autoStart=\"true\" />\r\n     <p>ME PUSE MUY CONTENTA PORQUE ME ENCANTAN LOS JUEGOS DE MESA. HASTA QUE DE REPENTE EL PROFE EMPEZÓ A NOMBRAR LAS PAREJAS,... ¡ME HABÍA TOCADO CON T.REX.! ¡VAYA MALA SUERTE!... O ESO PENSABA YO.</p>\r\n    </cell>\r\n   </cells>\r\n  </activity>\r\n  <activity class=\"@panels.InformationScreen\" name=\"Cuento _7\" code=\"\">\r\n   <description />\r\n   <messages>\r\n    <cell type=\"initial\">\r\n     <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n      <font family=\"Edelfontmed\" size=\"20\" bold=\"true\" />\r\n      <color background=\"0xFFFFFF\" />\r\n     </style>\r\n     <p>PULSA LA FLECHA PARA CONTINUAR ESCUCHANDO EL CUENTO.</p>\r\n    </cell>\r\n   </messages>\r\n   <settings margin=\"10\" report=\"false\">\r\n    <container bgColor=\"0xC0C0C0\">\r\n     <gradient source=\"0xFFFFFF\" dest=\"0x6666FF\" angle=\"0\" cycles=\"5\" />\r\n     <counters time=\"true\" actions=\"true\" score=\"true\" />\r\n    </container>\r\n    <window bgColor=\"0x330066\" border=\"true\" />\r\n   </settings>\r\n   <cells rows=\"1\" cols=\"1\" cellWidth=\"640.0\" cellHeight=\"500.0\" border=\"true\">\r\n    <style />\r\n    <shaper class=\"@Rectangular\" cols=\"1\" rows=\"1\" />\r\n    <cell id=\"0\" txtAlign=\"middle,bottom\" imgAlign=\"middle,top\" avoidOverlapping=\"true\" image=\"parrafo7-resized.jpg\">\r\n     <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n      <font family=\"Edelfontmed\" size=\"18\" bold=\"true\" />\r\n      <color background=\"0xFFFFFF\" />\r\n     </style>\r\n     <media type=\"PLAY_AUDIO\" level=\"1\" file=\"parrafo7.mp3\" autoStart=\"true\" />\r\n     <p>COMENZÓ EL JUEGO Y ¡VAYA SORPRESA! T.REX SABÍA DE DINOSAURIOS Y DE MUCHAS MÁS COSAS DE CONO... ¡FUE GENIAL! GANAMOS NOSOTROS, Y NO VOY A NEGARLO TODO FUE GRACIAS A ÉL. ADEMÁS EN EL JUEGO LO PASAMOS SUPERBIÉN JUNTOS.</p>\r\n    </cell>\r\n   </cells>\r\n  </activity>\r\n  <activity class=\"@panels.InformationScreen\" name=\"Cuento _8\" code=\"\">\r\n   <description />\r\n   <messages>\r\n    <cell type=\"initial\">\r\n     <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n      <font family=\"Edelfontmed\" size=\"20\" bold=\"true\" />\r\n      <color background=\"0xFFFFFF\" />\r\n     </style>\r\n     <p>PULSA LA FLECHA Y HAZ LAS ACTIVIDADES.</p>\r\n    </cell>\r\n   </messages>\r\n   <settings margin=\"10\" report=\"false\">\r\n    <container bgColor=\"0xC0C0C0\">\r\n     <gradient source=\"0xFFFFFF\" dest=\"0x6666FF\" angle=\"0\" cycles=\"5\" />\r\n     <counters time=\"true\" actions=\"true\" score=\"true\" />\r\n    </container>\r\n    <window bgColor=\"0x330066\" border=\"true\" />\r\n   </settings>\r\n   <cells rows=\"1\" cols=\"1\" cellWidth=\"640.0\" cellHeight=\"500.0\" border=\"true\">\r\n    <style />\r\n    <shaper class=\"@Rectangular\" cols=\"1\" rows=\"1\" />\r\n    <cell id=\"0\" txtAlign=\"middle,bottom\" imgAlign=\"middle,top\" avoidOverlapping=\"true\" image=\"parrafo8-resized.jpg\">\r\n     <style borderStroke=\"0.7\" markerStroke=\"5.0\">\r\n      <font family=\"Edelfontmed\" size=\"18\" bold=\"true\" />\r\n      <color background=\"0xFFFFFF\" />\r\n     </style>\r\n     <media type=\"PLAY_AUDIO\" level=\"1\" file=\"parrafo8.mp3\" autoStart=\"true\" />\r\n     <p>DESDE ENTONCES T.J. Y YO SOMOS AMIGOS. TODAVÍA HAY UNOS POCOS NIÑOS QUE SE METEN CON ÉL PERO AHORA YA NO ESTÁ SÓLO. AYER T.J. ME CONTÓ EL SECRETO DE PORQUÉ HABLA Y SE MUEVE DE FORMA EXTRAÑA. SU NOMBRE COMPLETO ES T.J. 273X ¡¡ES UN ROBOT!!... PERO ESO A MÍ YA NO ME IMPORTA.</p>\r\n    </cell>\r\n   </cells>\r\n  </activity>\r\n </activities>\r\n <mediaBag>\r\n  <media name=\"parrafo1-resized.jpg\" file=\"parrafo1_resized.jpg\" />\r\n  <media name=\"parrafo2-resized.jpg\" file=\"parrafo2_resized.jpg\" />\r\n  <media name=\"parrafo3-resized.jpg\" file=\"parrafo3_resized.jpg\" />\r\n  <media name=\"parrafo4-resized.jpg\" file=\"parrafo4_resized.jpg\" />\r\n  <media name=\"parrafo5-resized.jpg\" file=\"parrafo5_resized.jpg\" />\r\n  <media name=\"parrafo6-resized.jpg\" file=\"parrafo6_resized.jpg\" />\r\n  <media name=\"parrafo7-resized.jpg\" file=\"parrafo7_resized.jpg\" />\r\n  <media name=\"parrafo8-resized.jpg\" file=\"parrafo8_resized.jpg\" />\r\n  <media name=\"parrafo1.mp3\" file=\"parrafo1.mp3\" />\r\n  <media name=\"parrafo2.mp3\" file=\"parrafo2.mp3\" />\r\n  <media name=\"parrafo3.mp3\" file=\"parrafo3.mp3\" />\r\n  <media name=\"parrafo4.mp3\" file=\"parrafo4.mp3\" />\r\n  <media name=\"parrafo5.mp3\" file=\"parrafo5.mp3\" />\r\n  <media name=\"parrafo6.mp3\" file=\"parrafo6.mp3\" />\r\n  <media name=\"parrafo7.mp3\" file=\"parrafo7.mp3\" />\r\n  <media name=\"parrafo8.mp3\" file=\"parrafo8.mp3\" />\r\n </mediaBag>\r\n</JClicProject>\r\n\r\n";}