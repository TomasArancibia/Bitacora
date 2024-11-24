import React, { useRef, useState } from 'react';
import Item from './Item';

const SliderOctubre = () => {
  const slideRef = useRef();

  const itemsData = [
    {
      "id": 85,
      "fecha": "2 de octubre",
      "nombrejuego": "Pacman",
      "description": "En este juego, la cancha se delimita con cuerdas que forman una red de líneas, con una intersección central que crea una especie de * desde donde los jugadores pueden cambiar de dirección. Los participantes solo pueden correr a lo largo de estas líneas, sin saltar de una a otra, a menos que lleguen a una intersección. \n\nEl juego incluye 'fantasmas', identificados con pañuelos, cuyo objetivo es pintar a otros jugadores. Una vez que un jugador es pintado, se convierte en fantasma y toma el pañuelo, mientras que el fantasma original pasa a escapar. No está permitido pintar inmediatamente a la misma persona que te pintó ('chicle'). \n\nPara escapar temporalmente de ser pintado, los jugadores pueden saltar dentro de los aros distribuidos cerca de las líneas, donde estarán a salvo por 5 segundos. El juego promueve la velocidad, estrategia y colaboración entre los participantes.",
      "objetivos": "calentamiento, velocidad, estrategia y colaboración",
      "backgroundImage": "https://cdn.pixabay.com/photo/2013/07/12/16/57/pacman-151558_960_720.png"
    },
    {
      "id": 86,
      "fecha": "2 de octubre",
      "nombrejuego": "Botar el cono",
      "description": "Este juego se basa en las reglas del handball. Dos equipos compiten para derribar la mayor cantidad de conos en el área del equipo contrario, utilizando pases para movilizar la pelota. Cada equipo tiene 6 conos que defender. Los jugadores no pueden correr ni caminar con la pelota; deben lanzar desde su posición. \n\nSi la pelota cae al suelo sin ser atrapada, el equipo contrario saca desde el lugar donde cayó. Sin embargo, si un jugador del equipo contrario detiene un lanzamiento y la pelota cae al suelo, el equipo que estaba lanzando mantiene la posesión. El equipo que derribe la mayor cantidad de conos al final del tiempo gana.",
      "objetivos": "juego predeportivo handball, trabajo en equipo, agarre y lanzamiento",
      "backgroundImage": "https://images.vexels.com/media/users/3/319906/isolated/preview/d9037b41d962f1ef0f91bfe2f1735058-dibujos-animados-retro-de-cono-de-tra-fico.png"
    },
    {
      "id": 87,
      "fecha": "2 de octubre",
      "nombrejuego": "La vuelta al mundo",
      "description": "En este juego colaborativo, se forman dos equipos equitativos que se posicionan en hilera. Una persona del primer equipo patea la pelota lo más lejos posible e inmediatamente intenta dar la mayor cantidad de vueltas alrededor de su equipo. Mientras tanto, la primera persona de la hilera del equipo contrario corre a buscar la pelota y la lleva de vuelta a la base lo más rápido posible para interrumpir las vueltas del otro equipo. \n\nUna vez que la pelota está en la base, el equipo contrario pasa a patear y correr mientras el equipo que pateó inicialmente debe buscar la pelota. Los roles se intercambian continuamente. Las vueltas solo cuentan si el jugador rodea a todos los integrantes de su equipo; si salta a alguien, la vuelta no es válida. Gana el equipo que acumule más vueltas al final del juego.",
      "objetivos": "juego colaborativo, velocidad y reacción",
      "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpVCnUu0Uk_62bBcoenIJAWsH8C2H31cw2dw&s"
    },
    {
      "id": 88,
      "fecha": "4 de octubre",
      "nombrejuego": "Roba conos",
      "description": "En este juego participan dos equipos, cada uno ubicado en un lado de la cancha con una cantidad igual de conos distribuidos en su base. El objetivo es robar los conos del equipo contrario y llevarlos a la propia base. Cada jugador lleva un pañuelo tipo cola. Cuando un jugador intenta regresar a su área con un cono, los jugadores del equipo contrario pueden intentar quitarle el pañuelo para evitar que robe el cono. Si lo logran, el jugador capturado va a 'la cárcel' hasta que un compañero de su equipo lo libere llevándolo de la mano de vuelta a su área. Si a alguno de los dos se les quita el pañuelo durante la liberación, ambos van a la cárcel.\n\nRegla: Solo se puede intentar quitar el pañuelo a un jugador que esté regresando a su área con un cono, no mientras va a buscarlo. Gana el equipo que al final del tiempo tenga más conos en su área o el equipo que logre reunir todos los conos.",
      "objetivos": "Juego de velocidad, atención, estrategia, trabajo en equipo",
      "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzaPxbczZ4DqMCH3-3OHLP-6E9amdBMDDAA&s"
    },
    {
      "id": 89,
      "fecha": "4 de octubre",
      "nombrejuego": "Matrix",
      "description": "Este juego enfrenta a dos equipos. Un equipo intenta cruzar al otro extremo de la cancha mientras el equipo contrario lanza pelotas de esponja para eliminarlos. Si un jugador logra cruzar sin ser alcanzado por una pelota, su equipo gana un punto. \n\nReglas: \n- Solo un jugador puede estar en la cancha a la vez; si dos cruzan al mismo tiempo, ambos quedan eliminados. \n- Si una pelota golpea al jugador en la cabeza, este no queda eliminado. \n\nEl objetivo es cruzar la mayor cantidad de jugadores para acumular puntos. Al finalizar el tiempo, los roles se intercambian. Gana el equipo que logre más puntos al final del juego.",
      "objetivos": "Juego de velocidad, lanzamiento, trabajo en equipo",
      "backgroundImage": "https://static.euronews.com/articles/stories/08/35/93/32/1200x675_cmsv2_c7416dac-8a99-57b8-b728-b28d69040539-8359332.jpg"
    },
    {
      "id": 90,
      "fecha": "4 de octubre",
      "nombrejuego": "Spider-Man",
      "description": "En este juego, se delimita un área circular en cuyo centro se colocan varios conos. Los equipos deben usar una cuerda para ayudar a un integrante a sacar los conos del área sin que esta persona toque el suelo. No se permite usar la cuerda directamente para sacar los conos; el jugador debe hacerlo con sus manos mientras está suspendido. \n\nSe forman dos equipos equitativos, y a cada equipo se le entrega una cuerda. El objetivo es sacar todos los conos del área. \n\nTrampa: Aunque inicialmente se forman dos equipos, nunca se especifica que compiten entre sí, fomentando la cooperación entre todos para completar la tarea.",
      "objetivos": "Juego de estrategia, fuerza, trabajo en equipo",
      "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9dEhbjgmjNQc_JAJJYvv4waAPpHilh4Ps8A&s"
    },
    {
      "id": 91,
      "fecha": "7 de octubre",
      "nombrejuego": "Zapatería",
      "description": "El juego consiste en formar cuatro grupos, cada uno representado por un color único. Los grupos se ubican en las esquinas de la mitad de la cancha. El coordinador selecciona un grupo para iniciar el juego. Este grupo llamará a otro grupo gritando su color tres veces. Ambos grupos deben comenzar a saltar hacia el centro mientras realizan un intercambio de palabras, como: \n\n- Equipo 1: 'Azul, azul, azul.'\n- Equipo 2: '¡Qué hay!, ¡Qué hay!, ¡Qué hay!'\n- Equipo 1: '¿Tiene zapatos en venta?'\n- Equipo 2: '¡Sí hay!, ¡Sí hay!, ¡Sí hay!'\n- Equipo 1: '¿De qué color los tiene?'\n- Equipo 2: (responde con un color que no sea el propio).\n\nCuando se menciona el color de otro equipo, este comienza a saltar hacia el centro mientras los grupos anteriores regresan a su posición saltando. El juego continúa con el diálogo entre nuevos equipos. Es crucial que ambos grupos involucrados estén constantemente saltando durante el diálogo.",
      "objetivos": "juego de calentamiento, resistencia, trabajo en equipo y coordinación",
      "backgroundImage": "https://i.pinimg.com/originals/c3/c4/c5/c3c4c510da819bd2d2aef803a2c7939a.png"
    },
    {
      "id": 92,
      "fecha": "7 de octubre",
      "nombrejuego": "Que no caiga",
      "description": "En este juego, se forman 5 equipos distintos. Cada equipo se toma de las manos formando un círculo y se posiciona en un lugar designado de la cancha. Cada equipo recibe una pelota antes de comenzar. El objetivo es avanzar hacia la mitad de la cancha y regresar a su lugar, pasando la pelota entre los integrantes sin que esta salga del círculo. Si la pelota sale, el equipo debe regresar a su inicio y reiniciar el proceso. El equipo que primero regrese con la pelota al punto de inicio, gana.",
      "objetivos": "trabajo en equipo, agilidad, resistencia",
      "backgroundImage": "https://as02.epimg.net/futbol/imagenes/2019/10/10/videos/1570707986_697190_1570708125_noticia_normal.jpg"
    }, {
      "id": 93,
      "fecha": "7 de octubre",
      "nombrejuego": "Balón a la torre",
      "description": "En este juego, la cancha se divide en dos mitades, con dos equipos compitiendo en cada mitad. El objetivo es realizar pases como en handball para avanzar hacia la línea delimitadora y lanzar la pelota con el objetivo de derribar los conos ubicados detrás de dicha línea. \n\nReglas adicionales: \n1. Antes de tener la oportunidad de lanzar a los conos, se deben completar ciertos prerrequisitos, como realizar un mínimo de 10 pases o asegurarse de que todos los jugadores del equipo toquen la pelota al menos una vez. \n2. No se puede quitar la pelota de las manos de un jugador, solo interceptarla en el aire. \n3. Si la pelota sale del área, el otro equipo reanuda el juego con un saque desde el punto de salida.\n\nGana el equipo que logre derribar más conos al finalizar el tiempo.",
      "objetivos": "Juego de estrategia, trabajo en equipo, habilidad motriz y lanzamiento-atrape",
      "backgroundImage": "https://cdn.pixabay.com/photo/2024/05/18/19/01/bowling-alley-8770911_960_720.png"
    },
    {
      "id": 94,
      "fecha": "7 de octubre",
      "nombrejuego": "Grito del estadio",
      "description": "Este es un juego de animación y motivación en el que una persona dirige el grito del grupo. El director utiliza movimientos de brazos para indicar el volumen al que se debe gritar: \n- Si las manos están abajo, los participantes deben susurrar.\n- A medida que los brazos suben, el volumen del grito aumenta progresivamente.\n- Cuando las manos están sobre la cabeza, se debe gritar lo más fuerte posible.\nEl objetivo es que el grupo siga las instrucciones del director, ajustando su volumen de grito en función de las señales visuales.",
      "objetivos": "Juego de animación, motivación, atención",
      "backgroundImage": "https://img.freepik.com/foto-gratis/vista-aficionado-al-futbol-disfrutando-partido_23-2150860605.jpg"
    },
    {
      "id": 95,
      "fecha": "9 de octubre",
      "nombrejuego": "Saltar la cuerda",
      "description": "El juego consiste en que dos personas giran una cuerda grande mientras los demás participantes deben saltar. \n\nNiveles del juego: \n1. En el primer nivel, cada jugador entra de a uno hasta que todos estén saltando al mismo tiempo.\n2. En el segundo nivel, todos deben trasladarse al centro de la cuerda y saltar juntos un mínimo de 10 veces seguidas.\n3. En el nivel más avanzado, el grupo debe realizar al menos 20 saltos consecutivos desde el centro.\n\nEl objetivo es trabajar la coordinación, mantener la resistencia y, sobre todo, divertirse en equipo.",
      "objetivos": "calentamiento, coordinación, resistencia, trabajo en equipo",
      "backgroundImage": "https://medicacampestre.com/wp-content/uploads/2018/11/saltar_cuerda.jpg"
    },
    {
      "id": 96,
      "fecha": "9 de octubre",
      "nombrejuego": "Fútbol scout",
      "description": "Este juego enfrenta a dos equipos, cada uno con un portero que se posiciona en el centro de un aro, detrás de la línea de la cancha, sosteniendo un bastón. Los equipos inician en lados opuestos de la cancha. El árbitro lanza un pequeño aro (pelota) al aire para comenzar. \n\nEl objetivo es que los jugadores pasen el aro entre ellos sin correr, intentando encestar en el bastón del portero desde fuera del área chica. El portero puede moverse dentro del aro para ajustarse y facilitar el enceste, pero no puede salir de su posición.\n\nSi el aro cae al suelo o un equipo encesta, el juego se reinicia con el equipo contrario sacando. En caso de empate al finalizar el tiempo, ambos porteros se ubican en un lado de la cancha para un desempate. Cada equipo tiene dos lanzamientos; si el empate persiste, lanzan una vez cada uno hasta que haya un ganador.",
      "objetivos": "trabajo en equipo, lanzamiento y atrape, estrategia, precisión, puntería",
      "backgroundImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEha1NAA-ndNhHYrErmHChvpKr9LU-YJZQmaWESV7DXwernk1zu_d1qD6x8XCqQG8b4BUr14YOz1ltKOohP6_ocRJKqRwIl7dQr51ZHgqO_122hvVfYeiRdZ0It9JSJXQb3nSK4vIBn3cVg/s1600/scoutball.png"
    },
    {
      "id": 97,
      "fecha": "9 de octubre",
      "nombrejuego": "Pinta por tiempo / El tiempo es oro",
      "description": "El grupo se divide en dos equipos: uno será el equipo que 'pinta' y el otro el que 'arranca'. El equipo que pinta se posiciona en su base (el área chica de la cancha), mientras que el equipo que arranca se dispersa por la mitad de la cancha. \n\nUn jugador del equipo que pinta sale de la base para intentar atrapar a un jugador del equipo contrario. Si logra atrapar a alguien, este debe dirigirse a la base y deja de jugar. El jugador que pintó regresa a la base para tocar la mano de un compañero, quien sale a atrapar a otro jugador rival. \n\nEl objetivo es atrapar a todos los jugadores del equipo contrario en el menor tiempo posible. Una vez que todo el equipo contrario ha sido capturado, los roles se invierten. Gana el equipo que tarde menos tiempo en atrapar a todos los jugadores del otro equipo.",
      "objetivos": "velocidad, estrategia",
      "backgroundImage": "https://thumbs.dreamstime.com/b/el-tiempo-es-oro-11312908.jpg"
    },
    {
      "id": 98,
      "fecha": "11 de octubre",
      "nombrejuego": "El pasillo de las quemadas",
      "description": "Se forman dos equipos. Uno de los equipos debe atravesar un pasillo resguardado por el otro equipo, que está ubicado a ambos lados del pasillo con balones en sus manos para intentar 'quemar' a los participantes. El objetivo del equipo que cruza es llegar al otro extremo del pasillo, recoger un cono (lenteja) y regresar sin ser tocados por los balones. Cada participante que complete la tarea suma un punto para su equipo. \n\nEl juego se realiza en dos niveles: \n1. Nivel 1: El equipo que lanza tiene cuatro pelotas, y los corredores tienen dos vidas para el trayecto de ida y dos para la vuelta.\n2. Nivel 2: Los corredores cuentan con una vida para la ida y otra para la vuelta. \n\nAl finalizar una ronda, los equipos intercambian roles. Gana el equipo con más puntos al final de ambas rondas.",
      "objetivos": "Velocidad, coordinación, precisión y trabajo en equipo",
      "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7lerRy7wvP9--Wa2CTz85JxwMu52vOA7Dqw&s"
    },
    {
      "id": 99,
      "fecha": "14 de octubre",
      "nombrejuego": "Hermanos de",
      "description": "Los jugadores se dividen en parejas y forman dos filas enfrentadas, con cada pareja frente a frente. En el centro, se coloca una línea de conos tipo lentejas que separa a los equipos. \n\nEl animador da la señal diciendo: 'Hermanitos de...' seguido de una parte del cuerpo, como 'manos' o 'codos'. Al escuchar la señal, cada pareja debe correr hacia la línea de lentejas, tocar la parte del cuerpo indicada con su compañero y agacharse. \n\nGana la pareja que llegue primero y cumpla correctamente la indicación. La pareja que pierda deberá cumplir una penitencia determinada por el animador.",
      "objetivos": "calentamiento, velocidad",
      "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYzcngouFeqyt-O3q1Z536ZGPkMdJvo-GU8g&s"
    },
    {
      "id": 100,
      "fecha": "14 de octubre",
      "nombrejuego": "Árbol en el prado",
      "description": "Este es un juego de repetición y expresión corporal donde los jugadores deben imitar los movimientos y cantar siguiendo al moderador. La canción describe un árbol y las cosas que se encuentran en él, aumentando progresivamente los elementos: \n\n1. 'Había una vez un árbol en el medio de un prado.'\n2. 'Y adivinen lo que había en el árbol.'\n3. 'Había ramas, las ramas en el árbol.'\n4. 'Y adivinen lo que había en las ramas.'\n5. 'Había un nido, el nido en las ramas, las ramas en el árbol.'\n6. 'Y adivinen lo que había en el nido.'\n7. 'Había un huevo, el huevo en el nido, el nido en las ramas, las ramas en el árbol.'\n8. 'Y adivinen lo que había en el huevo.'\n9. 'Había un pollo, el pollo en el huevo, el huevo en el nido, el nido en las ramas, las ramas en el árbol.'\n\nEl objetivo es repetir la secuencia correctamente mientras realizan los movimientos indicados por el moderador.",
      "objetivos": "repetición, equilibrio, expresión corporal",
      "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8NaRh7JIH0s4RDlqGzAhUx-dNlhdhIhmUFA&s"
    },
    {
      "id": 101,
      "fecha": "14 de octubre",
      "nombrejuego": "La bolera",
      "description": "En este juego, cuatro equipos se enfrentan en partidos de dos equipos cada uno, jugando en mitades opuestas de la cancha. Cada mitad cuenta con un área semicircular cerca de la línea de la cancha, delimitada con lentejas, donde se alinean tres conos que deben ser derribados por el equipo contrario. \n\nLos jugadores tienen cuatro pelotas para intentar derribar los conos, lanzándolas desde su área de juego (los rebotes cuentan). Además, hay una pelota de diferente color destinada a 'quemar' a los jugadores contrarios. Un jugador queda 'quemado' si es tocado por esta pelota, incluso si la atrapa en el aire. Los jugadores 'quemados' se posicionan en la línea lateral, desde donde pueden seguir ayudando a su equipo para intentar derribar conos, desplazándose por toda la línea lateral.\n\nSi el juego se estanca, se permitirá usar todas las pelotas para quemar. Gana el equipo que derribe más conos al final del tiempo. En caso de empate, el equipo con menos jugadores 'quemados' será el ganador.",
      "objetivos": "trabajo en equipo, azar, reacción",
      "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Nz3cCR-DW-wWyfr9BSKEfL8UtRtdFfiDrw&s"
    },
    {
      "id": 102,
      "fecha": "14 de octubre",
      "nombrejuego": "Guerra cruzada",
      "description": "En este juego, se forman dos equipos, cada uno posicionado en una esquina del extremo de la cancha. En el extremo opuesto de cada equipo hay un cono con una prenda del color representativo de ese equipo. \n\nEl objetivo es que los integrantes de cada equipo logren alcanzar el pañuelo de su color para sumar puntos. Los equipos se turnan para intentar capturar el pañuelo. Antes de cada turno, el equipo debe decidir quién será el corredor. En cada turno, un miembro del equipo corre hacia el cono para atrapar el pañuelo, mientras el equipo contrario intenta detenerlo. \n\nSi el corredor es atrapado antes de llegar al pañuelo, debe quedarse en el lugar donde fue capturado. Sin embargo, durante sus turnos, los corredores también pueden liberar a sus compañeros previamente atrapados tocándolos, añadiendo una dinámica de rescate. Los equipos deben alternar entre un hombre y una mujer como corredores. \n\nCuando un equipo logra atrapar el pañuelo, suma un punto. Al final del juego, el equipo con más puntos será el ganador.",
      "objetivos": "trabajo en equipo, azar, reacción",
      "backgroundImage": "https://www.muyinteresante.com/wp-content/uploads/sites/5/2022/10/18/634dd41d4e6d5.jpeg"
    },
    {
      "id": 103,
      "fecha": "17 de octubre",
      "nombrejuego": "Tejiendo redes",
      "description": "En este juego, todos los participantes forman un círculo. Se entrega un balón al primer jugador, quien debe pasarlo a un compañero que aún no haya recibido el balón. Este proceso continúa hasta que todos hayan tenido la pelota, levantando la mano después de recibir el pase para indicar su participación. \n\nCuando todos hayan recibido el balón, los jugadores deben recordar a quién le dieron el pase. El juego reinicia desde el primer jugador, siguiendo la 'red' creada, pasando la pelota en el mismo orden. La clave es no dejar caer la pelota y no equivocarse en el orden. Si hay un error, el equipo debe comenzar desde cero. \n\nPara aumentar la dificultad, el coordinador puede introducir más pelotas simultáneamente. Una vez que la pelota llega al último jugador, el proceso se repite en reversa, recordando quién fue el que les dio el pase y devolviéndola en ese orden.",
      "objetivos": "memoria, reacción, lanzamiento y atrape",
      "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKT-C6d1VQ567KzUQRNozpwV8Qfj6XLUtGQ&s"
    },
    {
      "id": 104,
      "fecha": "17 de octubre",
      "nombrejuego": "Ferrocarril",
      "description": "En este juego, los participantes forman parejas que se sientan frente a frente, uniendo las plantas de sus pies, creando una 'barrera' de piernas entre las dos filas. \n\nCada pareja recibe un número. El moderador llama un número al azar, y la pareja correspondiente debe levantarse rápidamente y correr saltando entre las piernas de los demás jugadores hasta llegar al inicio de la fila. Desde ahí, deben correr por el exterior de la fila hasta el final, y regresar a su posición original saltando nuevamente entre las piernas. \n\nEl primer jugador en sentarse obtiene un punto para su equipo. Gana el equipo que acumule más puntos al finalizar el juego.",
      "objetivos": "Velocidad, precisión, coordinación y velocidad de reacción",
      "backgroundImage": "https://img.freepik.com/vector-premium/icono-ferrocarril-ilustracion-dibujos-animados-icono-vector-ferrocarril-web_96318-37969.jpg"
    },
    {
      "id": 105,
      "fecha": "17 de octubre",
      "nombrejuego": "Cachipún arranca",
      "description": "En este juego, los participantes se agrupan en parejas y se colocan frente a frente en la línea central de la cancha. Al inicio de cada ronda, las parejas juegan al cachipún. \n\nEl ganador del cachipún debe correr hacia el área de su lado de la cancha, mientras que el perdedor lo persigue. Si el jugador que corre logra llegar a su área sin ser tocado, gana un punto. Si es atrapado, el perseguidor obtiene el punto. El juego continúa con nuevas rondas, y se pueden llevar registros de los puntos acumulados.",
      "objetivos": "Velocidad de reacción, concentración",
      "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCaLG6WdshRhxQGo4H6_FEc4k18KYBNG8eg&s"
    },
    {
      "id": 106,
      "fecha": "17 de octubre",
      "nombrejuego": "Artzikirol",
      "description": "Este juego combina elementos de balonmano y fútbol. El juego comienza con un equipo en posesión del balón, que puede pasarse entre los jugadores usando las manos, como en balonmano. \n\nReglas:\n- Si un jugador del equipo contrario toca el balón con la mano (lo 'pinta'), el equipo en posesión pierde el balón y el otro equipo toma el control.\n- Regla especial: Si, antes de ser 'pintado', un jugador del equipo en posesión juega el balón con los pies (lo patea) como en fútbol, el equipo puede continuar jugando al fútbol hasta que pierdan la posesión o anoten un gol.\n\nGoles:\n- Los goles se pueden anotar lanzando el balón con las manos o pateándolo con los pies.\n\nEl juego termina cuando se alcanza un tiempo límite o cuando un equipo logra una cantidad de goles predefinida.",
      "objetivos": "Juego predeportivo de balonmano y fútbol, habilidad de lanzamiento y atrape",
      "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI55N4C0eQM2kQS86OCo-V90GklOs1RvDRag&s"
    },
    {
      "id": 107,
      "fecha": "17 de octubre",
      "nombrejuego": "Alibaba y los 40 ladrones",
      "description": "Los participantes forman un círculo. Una persona comienza cantando 'Alí Babá y los 40 ladrones' y realiza un movimiento con su cuerpo. Cada vez que repite la frase, añade un nuevo movimiento. \n\nLa persona a la derecha debe observar y comenzar a repetir los movimientos desde el segundo en adelante, mientras el siguiente jugador a la derecha copia los movimientos desde el tercero, y así sucesivamente. \n\nEsto crea una cadena de movimientos que se copian alrededor del círculo. Es importante que cada movimiento se corresponda con una repetición de la frase para mantener el ritmo y aumentar la dificultad a medida que se avanza en el juego.",
      "objetivos": "coordinación, atención y creatividad",
      "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHFVoi0l5NupdsnWPu9SrtzS1E1T-ilT6FVw&s"
    },
    {
      "id": 108,
      "fecha": "18 de octubre",
      "nombrejuego": "Que no caiga la pelota",
      "description": "En este juego, los participantes se colocan en un círculo y deben mantener una pelota en el aire. El objetivo es evitar que la pelota toque el suelo, y los jugadores deben lanzarla entre sí utilizando las manos, sin que se caiga. \n\nCada vez que la pelota es lanzada, el jugador que la recibe tiene 3 segundos para pasarla a otro jugador. Si la pelota cae al suelo, el equipo pierde un punto o debe realizar una actividad determinada, como correr alrededor del círculo. El equipo con más puntos al final del tiempo es el ganador.",
      "objetivos": "habilidades de coordinación, trabajo en equipo",
      "backgroundImage": "https://images.genially.com/5648f1371561e801f0dd4cb1/4e7d59a9-c84e-4a77-adba-afa519f9d9df.jpeg"
    },
    {
      "id": 109,
      "fecha": "18 de octubre",
      "nombrejuego": "La tubería",
      "description": "En este juego, los participantes se forman en fila, cada uno con un tubo de PVC de aproximadamente 15 cm de largo. El objetivo es que los jugadores unan sus tubos para formar una tubería por donde una pelota de tenis pueda pasar desde un punto de inicio hasta un área delimitada por un aro en el otro extremo de la cancha.\n\nSi la pelota cae al suelo, el equipo deberá comenzar de nuevo desde el inicio. El equipo que logre pasar la mayor cantidad de pelotas dentro del tiempo asignado será el ganador. Este juego fomenta la comunicación, paciencia y estrategia en equipo.",
      "objetivos": "trabajar en equipo para pasar la pelota, comunicación, paciencia, estrategia",
      "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqo4mQ5rPV-lJxA0FzaAOkw1EWJBZP70WV8A&s"
    },
    {
      "id": 110,
      "fecha": "18 de octubre",
      "nombrejuego": "Memorice",
      "description": "Los participantes se ubican a unos 5 metros de unas cartas colocadas boca abajo en el suelo. En parejas, los jugadores corren para voltear una carta cada uno al mismo tiempo, intentando encontrar dos cartas con la misma imagen.\n\nSi las cartas no coinciden, deben devolverlas a su posición original. Los jugadores pueden mostrar las cartas a sus compañeros para ayudarse a recordar su ubicación. Una vez que una pareja ha intentado, otra pareja toma su turno.\n\nCuando una pareja encuentra dos cartas iguales, se quedan con ellas y suman un punto. El objetivo es que el equipo acumule la mayor cantidad de pares iguales al final del juego.",
      "objetivos": "trabajar la memoria para recordar las cartas iguales, comunicación con el equipo",
      "backgroundImage": "https://www.ekiz.cl/cdn/shop/products/Memorice-Imagen.jpg?v=1666069597"
    },
    {
      "id": 111,
      "fecha": "18 de octubre",
      "nombrejuego": "La jaula",
      "description": "En este juego, los participantes se dividen en equipos de 4 a 5 personas. Cada jugador utiliza un palo tipo brocheta para trabajar en conjunto y mover una de las pelotas dentro de un tubo de malla con orificios, conocido como 'la jaula'.\n\nEl objetivo es que el equipo levante una pelota a la vez utilizando solo un palo por jugador, sacándola del tubo sin que se caiga. La clave del juego es la coordinación y la colaboración entre los miembros del equipo. Gana el equipo que logre sacar todas las pelotas en el menor tiempo o en un tiempo límite establecido por el coordinador.",
      "objetivos": "desarrollo motricidad fina, paciencia, comunicación, trabajo en equipo, estrategia",
      "backgroundImage": "https://i.scdn.co/image/ab67616d0000b27362e58e4815ad5712074e5b23"
    },
    {
      "id": 112,
      "fecha": "18 de octubre",
      "nombrejuego": "El paracaídas",
      "description": "Este juego utiliza una gran tela dividida en varios colores, que simboliza un paracaídas, y se desarrolla en varios niveles:\n\n**Nivel 1:** Los jugadores se colocan alrededor del paracaídas, cada uno en un color, y lo levantan juntos para que baje lentamente. Luego, deben encerrarse bajo la tela antes de que el coordinador termine de contar hasta tres.\n\n**Nivel 2:** Mientras levantan el paracaídas, el coordinador indica uno o más colores, y los jugadores en esos colores deben cambiar de posición con otros del mismo color.\n\n**Nivel 3:** El coordinador lanza una pelota sobre el paracaídas, y los jugadores deben hacerla girar alrededor sin que se caiga por los extremos o por un agujero central. Posteriormente, intentan que la pelota entre por el agujero en el menor tiempo posible.\n\n**Nivel 4:** Los jugadores utilizan un paracaídas más pequeño y sin agujero. Posicionan la pelota sobre la tela y la lanzan lo más alto posible para luego atraparla.\n\nEl juego fomenta coordinación grupal, estrategia, y trabajo en equipo.",
      "objetivos": "Coordinación grupal, velocidad, estrategia, comunicación, trabajo en equipo",
      "backgroundImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/USN_parachute_demo_team_at_Minot_AFB.jpg/220px-USN_parachute_demo_team_at_Minot_AFB.jpg"
    },
    {
      "id": 113,
      "fecha": "21 de octubre",
      "nombrejuego": "Frisbee al Aro",
      "description": "Dos equipos compiten para lanzar frisbees y hacerlos caer dentro de aros situados en el extremo opuesto de la cancha. Los jugadores deben lanzar desde el lugar donde cayó el frisbee anterior. Gana el equipo que logre encestar en 2 de 3 aros y acumule más puntos al final del juego.",
      "objetivos": "Desarrollar habilidades como rapidez y resistencia, trabajar en equipo, creación de estrategias de lanzamiento efectivo.",
      "backgroundImage": "https://www.shutterstock.com/image-vector/boy-throwing-frisbee-600nw-108343682.jpg"
    },
    {
      "id": 114,
      "fecha": "21 de octubre",
      "nombrejuego": "Código Secreto",
      "description": "Dos equipos compiten para descubrir una palabra secreta. Un equipo huye mientras cada miembro guarda una letra de la palabra. El equipo perseguidor debe capturar a los jugadores del equipo que huye para obtener las letras y adivinar la palabra. Gana un punto el equipo que adivine correctamente o, si falla, el equipo que escapa.",
      "objetivos": "Trabajar en equipo para adivinar palabras, mejorar la memoria a corto plazo, ejercitar la velocidad y resistencia.",
      "backgroundImage": "https://letslaw.es/wp-content/uploads/2021/04/codigo-fuente.jpg"
    },
    {
      "id": 115,
      "fecha": "21 de octubre",
      "nombrejuego": "Pelotapatuela",
      "description": "Dos equipos compiten en un juego de lanzamiento de precisión. Los jugadores de una hilera lanzan pelotas tratando de pasar entre las piernas de sus compañeros en una fila. Cada tiro exitoso libera a un compañero, quien busca una lenteja y vuelve para habilitar a más lanzadores. Gana el equipo que libera a todos sus jugadores y acumula todas las lentejas.",
      "objetivos": "Reforzar habilidades motrices de lanzamiento, elaborar estrategias bajo presión, actuar en equipo con rapidez y agilidad.",
      "backgroundImage": "https://st2.depositphotos.com/4145147/7282/v/450/depositphotos_72829155-stock-illustration-sport-balls.jpg"
    },
    {
      "id": 116,
      "fecha": "23 de octubre",
      "nombrejuego": "Rescata la lenteja",
      "description": "Los participantes deben buscar lentejas en un área delimitada, sorteando obstáculos o compitiendo en diferentes retos para alcanzar la mayor cantidad de lentejas antes de que se termine el tiempo.",
      "objetivos": "Desarrollar agilidad, capacidad de reacción, y trabajo en equipo.",
      "backgroundImage": "https://impoplanet.cl/cdn/shop/products/lenteja1.jpg?v=1712245579"
    },
    {
      "id": 117,
      "fecha": "23 de octubre",
      "nombrejuego": "La canasta veloz",
      "description": "Los jugadores se dividen en equipos de 7-8 personas. Cada equipo se organiza en una fila. Un integrante sostiene una cesta a una distancia de 10 pies, y los demás lanzan pelotas intentando encestarlas. Cuando lo logran, intercambian roles. Gana el equipo que logre encestar con todos sus integrantes primero.",
      "objetivos": "Mejorar su precisión, mejorar su velocidad, trabajar en equipo.",
      "backgroundImage": "https://img.freepik.com/vector-premium/diseno-vectorial-clipart-aislado-canasta-mimbre_1275990-10708.jpg?semt=ais_hybrid"
    },
    {
      "id": 118,
      "fecha": "23 de octubre",
      "nombrejuego": "MondongoBall",
      "description": "Una combinación entre handball y quemados. Dos equipos compiten en una cancha dividida, con un arquero protegiendo su arco. Los jugadores pueden quemar a los rivales y anotar goles. Los quemados pasan a la zona de quemados con el rol del embajador. Gana el equipo que queme a todos los rivales o alcance un número determinado de goles.",
      "objetivos": "Practicar el lanzamiento y agarre de pelota, trabajar mejor en equipo, practicar la agilidad y reflejos.",
      "backgroundImage": "https://cdn0.uncomo.com/es/posts/2/0/9/que_es_el_dodgeball_y_como_se_juega_52902_600_square.jpg"
    },
    {
      "id": 119,
      "fecha": "25 de octubre",
      "nombrejuego": "El más lenteja",
      "description": "Dos equipos se enfrentan en hileras a una distancia de 5-6 metros. Cada jugador tiene 3 lentejas de colores diferentes detrás de ellos. Cuando el conductor dice un color, los jugadores deben recoger la lenteja correspondiente y colocarla en un mástil o soporte. Gana un punto el equipo que coloque la lenteja primero.",
      "objetivos": "Desarrollar su nivel de reacción, mejorar la coordinación ojo-mano, aumentar la capacidad de velocidad.",
      "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs9q8B32rcBMGkGUwF-FEmmLgLfACBOuplPg&s"
    }, {
      "id": 120,
      "fecha": "25 de octubre",
      "nombrejuego": "Tombo",
      "description": "Dos equipos se enfrentan alternando entre lanzar y golpear una pelota. Los jugadores que golpean deben correr a una base antes de que la pelota regrese al lanzador. Los puntos se obtienen cuando los jugadores completan el recorrido hasta la zona de anotación. Los roles cambian si la pelota es atrapada en el aire por el equipo contrario.",
      "objetivos": "Aplicar lecciones a trabajos en grupo, conocer el nivel de precisión, crear estrategias.",
      "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69ynud3tXalkNT89sa8PvDhNMqtx152YsXA&s"
    },
    {
      "id": 121,
      "fecha": "25 de octubre",
      "nombrejuego": "La mafia",
      "description": "Dentro del grupo se eligen a 3 personas para ser los asesinos, que deberán matar al resto de participante guiñándoles el ojo.Para esto, todos deberán caminar aleatoriamente en un espacio delimitado, sin decir ninguna palabra.Si una persona muere, deberá retirarse del campo de juego.La idea es que las personas logren descubrir quién es la mafia antes de que termine el juego, si no lo hacen entonces pierden.",
      "objetivos": "Desarrollar la capacidad de atención, trabajar la elaboración estrategias y mejorar la capacidad de resolución de problemas",
      "backgroundImage": "https://www.shutterstock.com/image-vector/mafia-man-silhouette-vector-emblem-600w-1804888108.jpg"
},
  {
    "id": 122,
    "fecha": "28 de octubre",
    "nombrejuego": "Caza de pañuelos",
    "description": "Los jugadores se dividen en 3 a 6 equipos y corren en la mitad de la cancha. A una señal, deben recoger pañuelos distribuidos en la cancha. Cada miembro de un equipo que recoja un pañuelo suma un punto para su equipo. Los equipos deben dejar los pañuelos en su lugar después de cada ronda. Gana el equipo con más puntos al finalizar el juego.",
    "objetivos": "Trabajar en equipo para lograr un objetivo común, tomar decisiones estratégicas, desarrollar agilidad y velocidad.",
    "backgroundImage": "https://thumbs.dreamstime.com/b/un-sistema-de-los-pa%C3%B1uelos-para-hombres-con-bordado-en-la-caza-134021889.jpg"
  },
  {
    "id": 123,
    "fecha": "28 de octubre",
    "nombrejuego": "Capture The Flag",
    "description": "Cuatro equipos compiten para capturar las banderas de los equipos contrarios y llevarlas a su área sin ser pillados. Los jugadores pueden ser enviados a la cárcel si son atrapados en cachipun o por un lanzamiento exitoso de una pelota (según la variante). Los equipos deben trabajar en equipo y desarrollar estrategias para ganar.",
    "objetivos": "Trabajar en equipo, trabajar la elaboración de estrategias, trabajar la rapidez y la resistencia.",
    "backgroundImage": "https://media.licdn.com/dms/image/v2/C5112AQGggr15s1Hmcg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520210266887?e=2147483647&v=beta&t=4ykOqydmnFcP99-IabXLwhRI5yt5CCYRwlvf3bio2Og"
  },
  {
    "id": 124,
    "fecha": "28 de octubre",
    "nombrejuego": "La Lagartija",
    "description": "En este juego de todos los participantes deben formar un círculo, al centro de este círculo habrán dos personas, una será la cabeza de la lagartija y la otra será la cola. Las personas que conforman el círculo tendrán pelotas que deberán lanzar hacia la cola, y la cabeza debe ser el escudo y evitar que las pelotas lleguen a la cola. Si es que un participante le achunta a la cola entonces la cabeza pasa a ser cola, la cola vuelve al círculo y la persona que le achunto pasa a ser la cabeza de la lagartija. El juego termina cuando se termine el tiempo estipulado por el animador.",
    "objetivos": "Reacción, Agilidad, Trabajar en equipo, reflejos y trabajar el patrón de lanzamiento",
    "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUtSwYqqiTu99ex84cJ20Gy1ja9BY8cuXSSg&s"
  },
  {
    "id": 125,
    "fecha": "30 de octubre",
    "nombrejuego": "Escondite",
    "description": "Dos equipos se enfrentan en una cancha dividida. Un equipo corre siguiendo un circuito delimitado y puede esconderse temporalmente detrás de colchonetas para evitar ser quemado por pelotas de espuma lanzadas por el otro equipo, que se encuentra en un círculo central. Los quemados cambian de equipo. Gana el equipo con más participantes corriendo al final.",
    "objetivos": "Reforzar la velocidad, trabajar la agilidad de los participantes, generar una estrategia de trabajo en equipo.",
    "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQab-XHB-AwhUKCsIgfJ-EZbfpymjwrsfANWw&s"
  },
  {
    "id": 126,
    "fecha": "30 de octubre",
    "nombrejuego": "Que no la atrape",
    "description": "Los jugadores forman un círculo con 2 o 3 personas dentro. Se lanza un balón de mano entre los jugadores del círculo, evitando que las personas del centro lo atrapen. Si lo logran, cambian lugar con quien lanzó el balón. Se puede añadir más balones para aumentar la dificultad.",
    "objetivos": "Lanzar y atrapar pelotas, mantener la atención a varios sucesos a la vez, crear estrategias de juego.",
    "backgroundImage": "https://www.aprenderjuntos.cl/wp-content/uploads/2017/03/juegos-de-pelota-portada-1.jpg"
  },
  {
    "id": 127,
    "fecha": "30 de octubre",
    "nombrejuego": "Reclutamiento",
    "description": "Dos equipos compiten para 'reclutar' jugadores del equipo contrario golpeándolos con una pelota de espuma. Los jugadores alcanzados deben cambiar de postura: primero jugar en un pie, luego agachados, y finalmente pasar al equipo contrario si son golpeados tres veces. El equipo con más jugadores al final gana.",
    "objetivos": "Trabajar en equipo, desarrollar motricidad y concentración, mejorar rapidez de reacción.",
    "backgroundImage": "https://coachinginnovacion.com/wp-content/uploads/2024/05/46-contratacion-interna-y-extrena.png"
  }
];
const [activeId, setActiveId] = useState(itemsData[0].id);

const handleNext = () => {
  const slide = slideRef.current;
  const items = slide.children;
  slide.appendChild(items[0]);
  if (activeId - 84 === itemsData.length) {
    setActiveId(85);
    console.log('activeId', activeId, itemsData.length)
  } else {
    setActiveId(activeId + 1);
    console.log('activeId', activeId, itemsData.length)
  }
};

const handlePrev = () => {
  const slide = slideRef.current;
  const items = slide.children;
  slide.prepend(items[items.length - 1]);
  if (activeId === 85) {
    setActiveId(itemsData.length + 84);
    console.log('activeId', activeId, itemsData.length)
  } else {
    setActiveId(activeId - 1);
    console.log('activeId', activeId, itemsData.length)
  }
};

return (
  <>
    <h1 className='title-spt'>Juegos Octubre</h1>
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
        {activeId - 84} of {itemsData.length}
        <button className="next" onClick={handleNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </>
);
};

export default SliderOctubre;