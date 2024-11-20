import React, { useRef, useState } from 'react';
import Item from './Item';

const SliderAgosto = () => {
    const slideRef = useRef();



    const itemsData = [

        {
            id: 1,
            fecha: "5 de agosto",
            nombrejuego: "Autógrafo",
            description: "Un juego para interactuar con tus compañeros mediante una actividad lúdica. Primero, a todos los participantes se les asigna un número que deben recordar para el siguiente juego, luego, cada uno debe hacer una tabla con 9 cuadrados. El juego consiste en jugar al cachipún en parejas aleatorias y el perdedor debe rellenar uno de los cuadrados de la tabla del ganador con la siguiente información: Nombre, Carrera que cursa, Comida favorita, Pasatiempo. El ganador es el que logra rellenar los 9 cuadrados primero.",
            objetivos: "conocerse",
            backgroundImage: "https://cdn-icons-png.flaticon.com/512/4746/4746446.png "
        },
        {
            id: 2,
            fecha: "5 de agosto",
            nombrejuego: "Lotería de nombres",
            description: "Un moderador dirá un número al azar y el participante que tenga el número asignado del juego anterior debe decir su información personal (Nombre, Carrera, Comida favorita, Pasatiempo). Los demás participantes buscarán en sus tablas para encontrar y marcar el cuadrado que contiene los datos proporcionados por la persona que ha hablado. El primer participante en completar los 9 cuadrados debe gritar '¡Bingo!' para ganar.",
            objetivos: "atención",
            backgroundImage: "https://masterwise.cl/cdn/shop/products/4323.jpg?v=1538491216&width=1400 "
        },
        {
            id: 3,
            fecha: "5 de agosto",
            nombrejuego: "Aplauso del tren",
            description: "El moderador explica que el objetivo del juego es simular el sonido de un tren en movimiento a través de una serie de aplausos y movimientos sincronizados. Inicia el juego con un ritmo básico de aplausos y todos los participantes repiten al unísono, gradualmente el moderador cambia el ritmo y agrega movimientos hasta lograr una ronda de aplausos que simulan los sonidos de un tren.",
            objetivos: "Coordinación grupal y romper el hielo",
            backgroundImage: "https://img.freepik.com/vector-premium/tren-lindo-dibujos-animados_119631-219.jpg?semt=ais_hybrid"
        },
        { 
            id: 4, 
            fecha: "7 de agosto", 
            nombrejuego: "Toque y Fama", 
            description: "El juego se realiza en parejas, cada uno debe escoger un número de 4 dígitos e intentar adivinar el del contrincante. Para esto, por turnos, tendrán que decir un número y la otra persona deberá decirles cuantos toques y famas tiene el número dicho. Toque: dígito pertenece a número secreto pero el orden dicho es incorrecto. Fama: dígito coincide con un dígito del número secreto, en la ubicación correcta.", 
            objetivos: "Estrategia y azar", 
            backgroundImage: "https://thumbs.dreamstime.com/b/caminata-de-la-estrella-de-la-fama-estrella-hollywood-91787251.jpg " 
          
          } ,
          { 
            id: 5,           
            fecha: "7 de agosto", 
            nombrejuego: "Cachipún barra", 
            description: "Los jugadores se dividen en parejas aleatorias y juegan cachipún. El perdedor de cada ronda se convierte en parte de la 'barra' del ganador, animándolo en las siguientes rondas. Los ganadores continúan enfrentándose en nuevas parejas, acumulando barras de apoyo con cada victoria. El juego continúa hasta que solo quedan dos finalistas, quienes se enfrentan en una ronda final con sus respectivas barras animándolos.", 
            objetivos: "Interacción - conocerse", 
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYaYs4tUnYtS9YlR4mkcVg4qfuV10uBQC_KA&s " 
          
          },
          { 
            id: 6, 
            fecha: "7 de agosto", 
            nombrejuego: "Pam parapam", 
            description: "El moderador estará al frente del grupo de jugadores, explica que al mostrar su mano derecha deben decir 'Pan' y para su izquierda 'Parapam'. Luego, muestra las manos con el ritmo que desee y todos deben seguir la canción diciendo 'Pan' y 'Parapam'.", 
            objetivos: "atención, romper el hielo",           
            backgroundImage: "https://www.gourmet.cl/wp-content/uploads/2017/10/Pan-Amasado-570x458.jpg " 
          },
          { 
            id: 7, 
            fecha: "9 de agosto", 
            nombrejuego: "Cachipun cazador", 
            description: "En esta versión del juego piedra, papel o tijera se puede jugar con un grupo grande de personas dividiéndolo en 2 equipos o en pareja. Los elementos clásicos del juego se cambian por: hombre, escopeta y león. La escopeta le gana al león, pero no al hombre ya que éste es el que la manipula y el león le gana al hombre. Se juega representando uno de los elementos al mismo tiempo (todo el grupo debe hacer la misma representación, de lo contrario es punto en contra) y siguiendo las reglas se determina qué equipo ganó la ronda.", 
            objetivos: "estrategia, azar, trabajo en equipo, comunicación", 
            backgroundImage: "https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-cazador-objetivo-rifle_24381-300.jpg " 
          },
          { 
            id: 8, 
            fecha: "9 de agosto",           
            nombrejuego: "Cachipun gigante", 
            description: "En esta versión del juego piedra, papel o tijera se juega con un grupo grande de personas dividiéndolo en 2 equipos. Los equipos deben coordinarse para definir qué movimiento realizarán y, al momento de realizar el cachipún, todos deben hacer el mismo gesto. Además de las reglas normales del cachipún, también pueden perder si alguien del equipo hace un movimiento distinto al definido.", 
            objetivos: "estrategia, azar, trabajo en equipo, comunicación", 
            backgroundImage: "<la url>" 
          },
          { 
            id: 9, 
            fecha: "9 de agosto", 
            nombrejuego: "Saludos", 
            description: "Este juego consiste en crear un saludo de 3 movimientos en pareja o en grupos de varias personas. El moderador pide al grupo que se mueva por el espacio durante unos segundos, y luego anuncia que deben formarse parejas o grupos. Una vez reunidos, los grupos deben crear un saludo único utilizando 3 movimientos. La dinámica continúa con los participantes moviéndose por el espacio y formando nuevos grupos hasta que el moderador indica que deben repetir un saludo previamente creado con uno de los grupos anteriores. El desafío es recordar tanto a las personas con las que se creó el saludo como los 3 movimientos de este.", 
            objetivos: "creatividad, colaboración, coordinación, memoria, sociabilidad, improvisación", 
            backgroundImage: "https://imagenes.elpais.com/resizer/v2/44R7S6Y6K4ZFGX5GPTZUZDCTLM.jpg?auth=6755ebb42e9016a16c858785349c869c7724b122995e8597787575c1d43ad037&width=1960&height=1103&smart=true " 
          },
          { 
            id: 10, 
            fecha: "12 de agosto", 
            nombrejuego: "La Viuda", 
            description: "Una silla, la cual está en un círculo y su pareja detrás de la silla con las manos en la espalda. En este círculo se encuentra una persona sin pareja parada detrás de una silla vacía. Esta persona debe guiñar a alguien para que se siente en su silla, y la persona que está detrás debe evitar que su pareja cambie de puesto.", 
            objetivos: "Agilidad, atención y velocidad de reacción", 
            backgroundImage: "https://www.shutterstock.com/image-vector/vector-illustration-material-woman-mourning-260nw-1916516141.jpg " 
          }, 
          { 
            id: 11, 
            fecha: "12 de agosto", 
            nombrejuego: "Te gusto", 
            description: "Todos estarán sentados excepto 1 participante, el cual deberá acercarse a una persona y preguntar '¿Te gusto?'. La persona podrá responder 'sí' o 'no'. Si responde que sí, todos los participantes deberán cambiarse de puesto. Si dice que no, la persona que preguntó le dirá '¿Por qué?'. Esta deberá responder mencionando alguna característica de su compañero, como el color de su pelo, zapatos, polera, cualquier cosa, idealmente algo común entre varias personas como tener polera negra. Al decir esto, todos los participantes que tengan polera negra deberán cambiar de puesto. La persona que se quede sin asiento deberá continuar con la dinámica y preguntarle a otra persona.", 
            objetivos: "velocidad, atención, observación", 
            backgroundImage: "https://thumbs.dreamstime.com/b/icono-de-caricatura-coraz%C3%B3n-plano-aislado-card%C3%ADaca-255878811.jpg " 
          },
          { 
            id: 12, 
            fecha: "14 de agosto", 
            nombrejuego: "¿Cuántas ovejas bajan del cerro?", 
            description: "Este juego trata de que la audiencia adivine cuál es el número de ovejas que bajan del cerro, tras ver una serie de aplausos y seguido con la pregunta que detona la respuesta del público, la cual varía en palabras y corresponde al nombre del juego.", 
            objetivos: "percepción", 
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_VlQbSEmK_fgipm7gcvoA1cODAeGFAplLQ&s " 
          },
          { 
            id: 13, 
            fecha: "14 de agosto", 
            nombrejuego: "Piti pi", 
            description: "En este juego, el coordinador menciona 'repitan' para luego seguir diciendo 'piti' mientras apunta con el dedo de la mano desde el meñique al pulgar. Al llegar entre el índice y pulgar, se marca la curva entre los dedos diciendo 'pi', para luego llegar al pulgar y volver a decir 'pi'. Luego, se repite el proceso de vuelta para terminar en una pose y ver si otra persona entendió el juego, replicando exactamente lo que hizo, incluyendo la pose final.", 
            objetivos: "percepción", 
            backgroundImage: "<la url>" 
          },
          { 
            id: 14, 
            fecha: "14 de agosto", 
            nombrejuego: "La Cajita musical", 
            description: "En este juego, el coordinador va preguntando '¿Qué entra en la caja musical?'. La idea es ir diciendo cosas que puedan entrar en esta caja, pero únicamente se permiten entrar aquellas palabras que inicien con alguna nota musical.", 
            objetivos: "Razonamiento", 
            backgroundImage: "https://st4.depositphotos.com/2879145/19985/v/450/depositphotos_199853008-stock-illustration-music-box-jewelry-ballerina-vector.jpg " 
          },
          { 
            id: 15, 
            fecha: "16 de agosto", 
            nombrejuego: "Cine'", 
            description: "En el juego 'El Cine', el coordinador inicia diciendo: 'Vamos a ir al cine, pero para poder entrar necesitas llevar algo. Yo llevo una bufanda y puedo entrar. Tú, ¿qué llevas?'. Luego, el coordinador les pregunta a diferentes participantes qué llevarían al cine. Si la respuesta incluye una palabra con la letra 'E', se les dice que no pueden entrar. Si la respuesta es una palabra sin la letra 'E', se les permite entrar. El objetivo del juego es que los participantes descubran la lógica detrás de por qué algunas palabras son aceptables y otras no. Los jugadores que logren entender la regla ganan el juego.", 
            objetivos: "Percepción", 
            backgroundImage: "https://static.vecteezy.com/system/resources/previews/012/170/847/non_2x/cartoon-doodle-cinema-popcorn-free-vector.jpg " 
          },
          { 
            id: 16, 
            fecha: "16 de agosto", 
            nombrejuego: "Juan José Bonilla", 
            description: "En 'Juan José Bonilla', el coordinador enseña una canción a los participantes, que se repetirá dos veces. La canción es: 'Juan José Bonilla, se sentó en una hornilla y comenzó a gritar ¡Ay, mamá, ay, mamá, que caliente está!'. Cada vez que se mencione: '¡Ay, mamá, ay, mamá!', los participantes deben levantarse y sentarse rápidamente de sus sillas. Una vez aprendida la canción, se dividirá al grupo en dos equipos. El coordinador indica qué grupo comienza a cantar primero y luego señala cuándo empezar al otro grupo. Ambos grupos deben cantar la canción dos veces seguidas, ya que se canta la cantidad de grupos que hay. Los equipos deben cantar siguiendo el ritmo y sin confundirse con el canto del otro grupo. Luego, cada grupo se vuelve a dividir en dos, formando 4 grupos, y se repite la misma dinámica. Finalmente, se forman 6 grupos y se repite el mismo procedimiento. El objetivo es que todos los grupos canten la canción de manera coordinada, las veces que se les solicita y sin equivocarse para ganar el juego.", 
            objetivos: "repetición, motricidad, canon", 
            backgroundImage: "<la url>" 
          },
          { 
            id: 17, 
            fecha: "16 de agosto", 
            nombrejuego: "Nudo Humano", 
            description: "En este juego, la idea es que se separen por equipos equitativos y formen un círculo, colocando las manos en el centro y tomando las manos de alguna persona, idealmente que no sea la persona a su lado y que sean las manos de 2 personas distintas. Una vez que todos estén tomados de las manos, intentarán como equipo desenredarse para volver a formar un círculo, sin que existan nudos, es decir, sin que las manos de sus compañeros pasen entremedio de ellos. Esto deben realizarlo sin soltarse de las manos. El primer grupo que logre desenredarse gana.", 
            objetivos: "Juego de comunicación, trabajo en equipo, estrategia", 
            backgroundImage: "https://images.vexels.com/media/users/3/169632/raw/7685e1b12777e4dc0b640dbc3e4b521c-ilustracion-de-nudo-de-cuerda.jpg "
          },
          { 
            id: 18, 
            fecha: "16 de agosto", 
            nombrejuego: "Cachipún suma", 
            description: "El juego consiste en formar parejas al azar, en donde cada jugador esconde su mano detrás de su espalda y forma un número del 0 al 5. Al decir 'ca-chi-pún', ambos jugadores deben revelar sus manos y mostrar el número que formaron, mientras que al mismo tiempo dicen un número del 0 al 10, que será su predicción de la suma total de los dedos. El jugador que adivine correctamente la suma gana un punto. Después de cada ronda, el coordinador del juego indica que los jugadores deben cambiar de pareja y repetir el mismo proceso. Finalmente, los ganadores del juego serán los que recuerden el nombre de las tres personas con las que jugaron y se las digan al coordinador.", 
            objetivos: "interacción y azar", 
            backgroundImage: "<la url>" 
          },
          { 
            id: 19, 
            fecha: "19 de agosto", 
            nombrejuego: "Pinta mitosis", 
            description: "Parte una persona pintando como en el juego normal. Al pintar a otra persona, se toman de la mano y pintan en pareja. Cuando pillan a un tercero, se une y forman un trío. Al cuarto pillado, el grupo se separa en parejas para seguir pintando.", 
            objetivos: "trabajo en equipo, velocidad", 
            backgroundImage: "https://static.vecteezy.com/system/resources/previews/012/475/878/non_2x/cartoon-cells-vector.jpg" 
          },
          { 

            id: 20, 
            fecha: "19 de agosto", 
            nombrejuego: "Nunca de a 3", 
            description: "En este juego, muchas duplas estáticas se posicionan en el área de juego, mientras una pareja actúa como perseguidor y perseguido. El perseguido tratará de alcanzar una dupla estática y colocarse junto a uno de sus miembros. Si lo logra, el miembro del lado contrario al que se colocó se convierte en el nuevo perseguidor y el anterior pasa a ser el perseguido. Si el perseguidor alcanza al perseguido antes de esto, intercambian roles.", 
            objetivos: "estrategia y atención", 
            backgroundImage: "<la url>" 
          },
          { 
            id: 21, 
            fecha: "19 de agosto", 
            nombrejuego: "Pinta colores", 
            description: "Juego que tiene como base la pinta, con la diferencia de que aquellos participantes que toman el rol de pillar pueden ir cambiando en cualquier momento y ellos únicamente tienen en común usar algún color en específico, como por ejemplo poleras cafés, zapatillas azules o poleras rojas. Estas características son las que el moderador nombrará cuando anuncie el cambio de rol, diciendo: 'ahora pillan las personas con (nombra características en común por color)'.", 
            objetivos: "atención, velocidad", 
            backgroundImage: "https://www.adams.es/blogs/alumno/files/2019/04/portada-colores-ok.jpg" 
          },
          { 
            id: 22, 
            fecha: "19 de agosto", 
            nombrejuego: "Calles y avenidas", 
            description: "En este juego, se organizan diferentes filas de 5 personas, quienes estarán constantemente tomadas de las manos. Los espacios que queden entre las filas serán las calles, mientras que las avenidas se forman cuando las personas de cada hilera toman las manos de los compañeros de su fila. Los pasajes se crean rotando 45° y las rotondas cuando los participantes se toman todos de las manos formando un círculo, bloqueando el paso. Cada vez que escuchen las palabras 'calle', 'avenida' o 'rotonda', los participantes deben colocarse en las posiciones correspondientes. Mientras tanto, dos compañeros juegan como gato y ratón; el ratón intenta escapar mientras el gato intenta atraparlo. Los roles se intercambian cuando el gato logra atrapar al ratón.", 
            objetivos: "atención, velocidad", 
            backgroundImage: "https://img.freepik.com/vector-gratis/ciudad-vacia-ilustrada-tiempo-pandemia_23-2148503156.jpg " 
          },
          { 
            id: 23, 
            fecha: "19 de agosto", 
            nombrejuego: "Amitsi chami chami", 
            description: "Todos los participantes forman una ronda y deben cantar lo siguiente: 'Amitzi chami, e le petit ti vo ti vo, Amitzi chami, e le petit ti vo ti vo ¿E le petit ti vo?' (dirigente) 'Ti vo ti vo ti vo' (participantes) '¿E le petit ti vo?' (dirigente) 'Ti vo ti vo ti vo' (participantes)'. Durante la canción, los participantes se mueven y cambian de dirección según avanza la letra. Al decir 'Ti vo ti vo ti vo', todos deben saltar. El juego se repite con variaciones: primero tomándose de los hombros, luego de las orejas, después de las rodillas y, finalmente, de los tobillos.", 
            objetivos: "Coordinación, repetición, memoria, generar confianza entre los participantes", 
            backgroundImage: "<la url>" 
          },
          { 
            id: 24, 
            fecha: "19 de agosto", 
            nombrejuego: "Método Bapne", 
            description: "Los integrantes del curso deben estar de pie. El animador da a conocer 4 tiempos, cada uno relacionado con un movimiento de pie. En cada tiempo, los participantes realizan el movimiento correspondiente.", 
            objetivos: "Coordinación, neuroestimulación, memoria y atención", 
            backgroundImage: "<la url>" 
          },
          { 
            id: 25, 
            fecha: "21 de agosto", 
            nombrejuego: "Pinta pelota", 
            description: "La pareja que pilla debe pintar al resto de jugadores tocándolos con la pelota, que no pueden llevar corriendo, sino solo pasársela entre los que pintan. Una vez pintan a un jugador, este se une al grupo de los pintadores y ayuda a pintar con el balón. El juego termina cuando queda una sola persona sin pintar. El guía puede añadir más balones si lo estima conveniente o permitir un tiempo breve para correr con el balón.", 
            objetivos: "Calentamiento, trabajo en equipo, agarre y lanzamiento de balón, estrategia", 
            backgroundImage: "https://img.freepik.com/vector-premium/diseno-ilustracion-vectorial-pelota-futbol-caricatura-futbol-aislada-fondo-blanco_805877-637.jpg" 
          },
          { 
            id: 26, 
            fecha: "21 de agosto", 
            nombrejuego: "Aram sam sam", 
            description: "El curso debe formar un círculo. El líder del grupo se ubica en el centro del círculo y canta la canción 'Aram sam sam'. Los demás participantes deben imitar los movimientos del líder mientras cantan la canción.", 
            objetivos: "repetición, coordinación, concentración", 
            backgroundImage: "<la url>" 
          },
          { 
            id: 27, 
            fecha: "21 de agosto", 
            nombrejuego: "Voltear la tortuga", 
            description: "Se divide al curso en dos grupos: los 'ecologistas' y los 'anti-ecologistas'. El coordinador, ubicado en la mitad de la cancha, posicionará conos (lentejas) en diferentes lugares, algunos bien orientados y otros invertidos. Estos conos representan tortugas. El objetivo del juego es que los ecologistas coloquen correctamente los conos, mientras que los anti-ecologistas intentarán voltear la mayor cantidad posible (poniéndolos al revés). Ambos equipos comenzarán desde la línea del medio de la cancha. Al inicio del juego, indicado por el coordinador, tendrán un tiempo determinado para actuar. Tras finalizar el tiempo, se contará cuántas tortugas se salvaron y cuántas se voltearon. El jugador con la mayor contribución gana la ronda. Se jugarán tres rondas para definir al grupo ganador, y el coordinador puede cambiar los roles de los equipos en cada ronda.", 
            objetivos: "Trabajo en equipo, calentamiento, agilidad", 
            backgroundImage: " https://th.bing.com/th/id/R.6662362099548320d87883731f8b5117?rik=QZfRW4Af8cLXSg&riu=http%3a%2f%2ffrancis.naukas.com%2ffiles%2f2015%2f04%2fDibujo20150601-Big-tortoise-shell-flipping-nature-com-580x303.jpg&ehk=i%2fL9NMuCdaQBPncp5q2E4lUqO5FZF%2bLXqpSB0rq3oqc%3d&risl=&pid=ImgRaw&r=0" 
          },
          { 
            id: 28, 
            fecha: "23 de agosto", 
            nombrejuego: "Cuerpo a tierra", 
            description: "Cada equipo deberá formarse en hilera, y el primer jugador de cada hilera empezará con la pelota de espuma en la mano. Al comenzar el juego, los jugadores deberán pasar la pelota al compañero de atrás pasándola entre sus piernas, hasta que el balón llegue al último jugador. Al hacerlo, este deberá gritar '¡Cuerpo a tierra!' para que el resto de sus compañeros se acuesten boca abajo en el piso. Luego, el último jugador pasará con el balón saltando por encima de ellos hasta llegar al inicio de la hilera y repetir el ciclo. El juego termina cuando todos los jugadores de uno de los equipos hayan dado la vuelta dos veces, siendo este equipo el ganador.", 
            objetivos: "Coordinación, calentamiento, trabajo en equipo, agilidad, reacción", 
            backgroundImage: "https://th.bing.com/th/id/OIP.tTkC6a9zqGnRgNnp3Hic1AAAAA?rs=1&pid=ImgDetMain" 
          },
          { 
            id: 29, 
            fecha: "23 de agosto", 
            nombrejuego: "Bitcoin", 
            description: "Los jugadores se dividen en tres equipos, y cada integrante de cada equipo lleva un pañuelo del color de su equipo. El objetivo del juego es quitar los pañuelos a los jugadores de otros equipos mientras evitan que les quiten el suyo. Al quitarle el pañuelo a otro jugador, ambos se acercan al guía, quien entrega un 'bitcoin' (una lenteja) al jugador que quitó el pañuelo. Luego, el jugador devuelve el pañuelo al otro participante, y ambos regresan al juego. El juego termina cuando el guía lo indique o cuando se acaben todos los 'bitcoins', ganando el equipo que acumule más. En la variante del juego, se juega en formato todos contra todos, y gana el jugador que consiga más 'bitcoins'.", 
            objetivos: "Trabajo en equipo, agilidad, reacción", 
            backgroundImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png " 
          },
          { 

            id: 30, 
            fecha: "26 de agosto", 
            nombrejuego: "Zorro, gallina y los pollitos", 
            description: "El juego Zorro, Gallina y Pollitos es una actividad de persecución con roles. Hay tres personajes principales: 1. Zorro: el perseguidor. 2. Gallina: el defensor. 3. Pollitos: los perseguidos. Los pollitos se alinean detrás de la gallina, tomándose de la cintura o los hombros, formando una fila. El objetivo del zorro es quitarle la cola al último pollito, mientras la gallina debe protegerlos moviéndose para bloquear al zorro, sin soltar a los pollitos. Si el zorro logra quitar la cola, se reinicia el juego con nuevos personajes del mismo grupo, asegurándose de que todos pasen por los distintos roles.", 
            objetivos: "juego de calentamiento y colaborativo", 
            backgroundImage: "https://st2.depositphotos.com/7413918/10253/i/950/depositphotos_102538130-stock-illustration-fox-hunting-hen.jpg" 
          },
          { 
            id: 31, 
            fecha: "26 de agosto", 
            nombrejuego: "Lazarillo", 
            description: "El Lazarillo es un juego en parejas donde uno actúa como 'ciego', con los ojos vendados, y el otro como 'guía'. El objetivo es que el guía conduzca al ciego de forma segura, fomentando confianza y comunicación.", 
            objetivos: "trabajo en equipo, adquirir confianza en los compañeros", 
            backgroundImage: "<la url>" 
          },
          { 
            id: 32, 
            fecha: "26 de agosto", 
            nombrejuego: "Agrupa2", 
            description: "Presentación: Explica a los participantes que van a jugar a un juego donde tendrán que encontrar a otras personas con las que comparten algo en común. La regla de oro: Lo más importante es que no podrán hablar durante el juego. Tendrán que usar gestos, señas y otros medios no verbales para comunicarse. La primera ronda: El animador propone un primer criterio de agrupamiento (por ejemplo, 'agrúpense por edad'). Los participantes deberán buscar a las personas que compartan esa característica y formar grupos. Rondas sucesivas: Se propondrán diferentes criterios de agrupamiento cada vez más complejos (por ejemplo, 'agrúpense por su mes de cumpleaños y si les gusta el chocolate'). Verificación: Una vez formados los grupos, se pedirá a cada grupo que nombre la característica en común que los une.", 
            objetivos: "comunicación no verbal", 
            backgroundImage: "<la url>" 
          },
          { 
            id: 33, 
            fecha: "26 de agosto", 
            nombrejuego: "Rescatando el cono", 
            description: "Un grupo de personas se colocan detrás de una línea, y al otro lado, a unos 2 metros de distancia, hay unos conos ubicados. Como equipo, deben rescatar todos los conos sin pasar la línea ni tocar el suelo detrás de ella. Es necesario trabajar en equipo para lograrlo.", 
            objetivos: "trabajo en equipo, colaborativo", 
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHAiG68nylUUyN2vHfjqJhf1pzGUemkus0g&s" 
          },
          { 
            id: 34, 
            fecha: "26 de agosto", 
            nombrejuego: "Abecedario humano", 
            description: "El Abecedario Humano es un juego colaborativo en el que los participantes, en grupos o individualmente, deben formar las letras del abecedario con sus cuerpos. El moderador dirá una letra, y los jugadores deberán crearla en el suelo, estirándose o formando figuras con sus compañeros.", 
            objetivos: "trabajo en equipo, estrategia, creatividad", 
            backgroundImage: "https://imagenes.20minutos.es/files/image_990_556/uploads/imagenes/2023/09/13/abecedario-espanol-dominio-publico-wikimedia-commons-1.jpeg" 
          },
          {
            id: 35, 
            fecha: "28 de agosto", 
            nombrejuego: "Protegiendo la corona del rey", 
            description: "Se forman equipos de 5 personas. Cuatro personas de cada equipo se toman de las manos, formando un círculo. Una de las personas del círculo lleva un pañuelo colgado en la cintura, a la altura de la rodilla. El quinto integrante está fuera del círculo y debe intentar quitarle el pañuelo a la persona que lo tiene. Cada participante del equipo debe jugar una vez como el que atrapa el pañuelo.", 
            objetivos: "trabajo en equipo, comunicación, coordinación, agilidad y calentamiento", 
            backgroundImage: "https://img.freepik.com/vector-premium/caricatura-corona-dorada-joyas-vector-monarca-sobre-fondo-blanco_714603-532.jpg " 
          },
          { 
            id: 36, 
            fecha: "28 de agosto", 
            nombrejuego: "10 pases", 
            description: "El juego 10 Pases es una dinámica en la que los jugadores, divididos en dos equipos, deben pasarse una pelota entre ellos. El objetivo es completar 10 pases consecutivos sin que el equipo contrario intercepte la pelota. No se puede mover con la pelota en mano ni pasarla a la misma persona dos veces seguidas. Si el equipo defensor intercepta o toca la pelota antes de que se completen los 10 pases, se reinicia el conteo y el equipo defensor puede tomar posesión de la pelota para intentar sus propios 10 pases.", 
            objetivos: "juego predeportivo, colaborativo, habilidad predominante lanzamiento y atrape", 
            backgroundImage: "<la url>" 
          },
          { 
            id: 37, 
            fecha: "28 de agosto", 
            nombrejuego: "Cable eléctrico", 
            description: "El juego del Cable Eléctrico es una actividad en equipo donde una cuerda se extiende en el aire a cierta altura, simulando un 'cable eléctrico' que los participantes deben atravesar sin tocar. El objetivo es que cada miembro del equipo pase al otro lado sin tocar la cuerda, utilizando la colaboración y el ingenio. Generalmente, los jugadores deben ayudarse entre ellos para elevarse o pasar por debajo, manteniendo el equilibrio y respetando las reglas de no tocar el cable. Si alguien lo toca, el equipo debe reiniciar el intento.", 
            objetivos: "trabajo en equipo, resolución de problemas", 
            backgroundImage: "https://dojiw2m9tvv09.cloudfront.net/44838/product/1-cordon-rv-k-3-x-4mm-cable-de-cobre-x-mts6830.jpg" 
          },
          { 
            id: 38, 
            fecha: "28 de agosto", 
            nombrejuego: "Submarino", 
            description: "Cada equipo debe formar una hilera. Todos los integrantes, excepto el último, deben cubrirse los ojos con un pañuelo. El último de la hilera da indicaciones de manera no verbal para que sus compañeros vendados puedan avanzar. Un golpecito en el hombro derecho indica virar a la derecha, en el hombro izquierdo virar a la izquierda, en la columna avanzar, y en la cabeza recoger la lenteja del suelo. Los equipos deben intentar recolectar la mayor cantidad de lentejas posible.", 
            objetivos: "comunicación no verbal, colaboración, resolución de problemas", 
            backgroundImage: "https://static.vecteezy.com/system/resources/previews/011/762/563/non_2x/cartoon-underwater-submarine-yellow-bathyscaphe-vector.jpg" 
          },
          { 
            id: 39, 
            fecha: "30 de agosto", 
            nombrejuego: "Piratas del Caribe", 
            description: "Se forman 4 equipos de tamaño equivalente y se reparte un pañuelo a cada integrante de cada equipo, quienes deben colgárselo al costado de la cadera hasta la rodilla. Luego, cada equipo forma un círculo tomándose de las manos, a excepción de un integrante que se queda en el medio del círculo. El objetivo del juego es quitar los pañuelos a los jugadores de otros equipos, pero solo el jugador que está en el medio de cada círculo puede hacerlo, estirando su brazo entre sus compañeros. Gana el equipo que logre obtener más pañuelos antes de que se acabe el tiempo o si todos los jugadores pierden sus pañuelos excepto por un equipo. Los pañuelos que no logren ser robados también suman puntos al final.", 
            objetivos: "comunicación, agilidad, coordinación, trabajo en equipo", 
            backgroundImage: "https://static.vecteezy.com/system/resources/previews/010/231/564/non_2x/sticker-of-a-cartoon-skull-and-crossbones-vector.jpg" 
          },
          { 
            id: 40, 
            fecha: "30 de agosto", 
            nombrejuego: "Posta simple, arrastre, transporte", 
            description: "El juego consta de tres modalidades: \nPOSTA SIMPLE: Los jugadores se posicionarán en tres grupos, formados por hileras. Se colocará un punto A y un punto B que deberán recorrer de ida y vuelta. Los jugadores pasan de uno en uno, y la salida será cuando el jugador choque los cinco con su compañero al volver. El primer equipo en el que todos los jugadores completen el recorrido será el ganador. \nPOSTA ARRASTRE: El curso se divide en 2 equipos. Cada equipo se ubica en una hilera detrás de la línea de partida. El primer jugador corre a buscar una lenteja y vuelve para tomar de la mano al siguiente jugador, sumando más personas en cada recorrido. Al final, se desarma el grupo de manera que cada persona se queda en su posición inicial tras completar su recorrido. \nPOSTA TRANSPORTE: Los jugadores se organizan en grupos y se colocan en hileras en el punto de salida. El primer jugador debe llevar a un compañero al punto B y regresar. Con cada recorrido, se suma un nuevo jugador que es cargado por el grupo. El primer equipo en completar el recorrido con todos sus integrantes gana la posta.", 
            objetivos: "velocidad de reacción", 
            backgroundImage: "<la url>" 
          },
          { 
            id: 41, 
            fecha: "30 de agosto", 
            nombrejuego: "Invasión", 
            description: "El curso se divide en 4 grupos y la cancha en 4 cuadrantes. Cada equipo se ubica en un cuadrante. Si alguien lanza el balón a una persona de otro equipo y esta no logra atraparlo, la persona que fue quemada pasa a ser parte del equipo que la quemó. Si un equipo es quemado completamente, su cuadrante pasa a ser parte del equipo que quemó al último jugador. El juego termina cuando queda un solo equipo, es decir, el que logró quemar a todos los demás equipos.", 
            objetivos: "precisión, habilidad motriz de atrape y lanzamiento",          
            backgroundImage: "https://static.vecteezy.com/system/resources/previews/004/595/172/non_2x/alien-invasion-on-earth-flying-ufo-abduction-with-light-beam-at-night-scene-concept-in-comic-cartoon-illustration-vector.jpg" 
          },
          { 
            id: 42, 
            fecha: "30 de agosto", 
            nombrejuego: "Casa inquilino", 
            description: "Un jugador (moderador) cuenta una historia en la que las casas y el inquilino interactúan usando las palabras clave 'TERREMOTO' e 'INQUILINO'. Los jugadores se organizan en grupos de 3: dos personas forman una 'casa' y una persona es el 'inquilino'. \n- TERREMOTO: Las casas deben desarmarse y formar nuevas casas con otros jugadores, mientras el inquilino mantiene su posición.\n- INQUILINO: Todos los inquilinos deben cambiar de casa. Si un inquilino queda sin casa, esa persona retoma la historia desde donde la dejó el moderador.\nEl juego continúa con la historia cambiando cada vez que se mencionan las palabras clave. Finaliza cuando el moderador lo decida, ya sea por tiempo o por algún desenlace.", 
            objetivos: "atención y creatividad", 
            backgroundImage: "https://media.istockphoto.com/id/1321684075/es/vector/el-desalojo-y-la-deuda-hipotecaria-la-ejecuci%C3%B3n-hipotecaria-o-la-dificultad-para-pagar-el.jpg?s=612x612&w=0&k=20&c=Oypw47XGUM5NESH0HGx-diyy3IxKkofQ0ZPGNQ5Bw0A= " 
          
          } 



    ];

    const [activeId, setActiveId] = useState(itemsData[0].id);

    const handleNext = () => {
        const slide = slideRef.current;
        const items = slide.children;
        slide.appendChild(items[0]);
        if (activeId === itemsData.length) {
            setActiveId(1);
        } else {
            setActiveId(activeId + 1);
        }
    };

    const handlePrev = () => {
        const slide = slideRef.current;
        const items = slide.children;
        if (activeId === 1) {
          setActiveId(itemsData.length);
        } else {
          setActiveId(activeId - 1);
        }
        slide.prepend(items[items.length - 1]);
    };

    return (
        <>
            <h1 className='title'>Juegos Agosto</h1>
            <div className="container">

                <div className="slide" ref={slideRef}>
                    {itemsData.map((item, index) => (
                        <Item
                            key={index}
                            id={item.id}
                            fecha={item.fecha}
                            name={item.nombrejuego}
                            description={item.description}
                            objetivos={item.objetivos}
                            backgroundImage={item.backgroundImage}
                            isActive={item.id === activeId}
                        />
                    ))}
                </div>
                <div className="button">
                    <button className="prev" onClick={handlePrev}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    {activeId} of {itemsData.length}
                    <button className="next" onClick={handleNext}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default SliderAgosto;