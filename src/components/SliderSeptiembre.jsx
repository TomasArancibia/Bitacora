import React, { useRef, useState } from 'react';
import Item from './Item';

const SliderSeptiembre = () => {
    const slideRef = useRef();

    const itemsData = [
        { 
            id: 43,   
            fecha: "2 de septiembre", 
            nombrejuego: "Las quemadas", 
            description: "Dos personas son las que queman y los demás jugadores se encuentran dentro de la cancha. El objetivo de los jugadores en la cancha es evitar ser quemados, mientras que los quemadores intentan eliminar a todos los jugadores lanzando la pelota para tocarlos. Si un jugador es tocado por la pelota y esta cae al suelo sin ser atrapada, queda quemado y debe salir de la cancha. El juego continúa hasta que todos los jugadores hayan sido eliminados o el tiempo establecido por el moderador se haya agotado.", 
            objetivos: "estrategia, trabajo en equipo", 
            backgroundImage: "https://i.pinimg.com/736x/f6/11/46/f611468e6efb4ac81b9e08293c36587b.jpg" 
          
          } ,
          { 
            id: 44, 
            fecha: "2 de septiembre", 
            nombrejuego: "Las Naciones", 
            description: "En el juego 'Las Naciones', los jugadores se dividen en dos equipos, cada uno posicionado en una mitad de la cancha. Cada equipo tiene un embajador ubicado en el extremo opuesto del área de su equipo. El objetivo es eliminar a todos los integrantes del equipo contrario. Los embajadores lanzan una pelota para quemar a los jugadores rivales. Si un jugador atrapa la pelota antes de que toque el suelo, permanece en juego y puede intentar quemar a los adversarios. Si la pelota toca el suelo o golpea a un jugador (excepto en la cabeza), este queda quemado, debe salir del área delimitada y unirse a su embajador para colaborar en la quema de los competidores restantes. \nLos embajadores tienen tres vidas que pueden usar para reincorporarse al juego o permitir que un compañero regrese al campo. Los jugadores en la cancha pueden pasarse la pelota entre ellos para eliminar a los rivales. El juego finaliza cuando un equipo elimina a todos los miembros del equipo contrario. Para añadir dinamismo, se puede introducir un segundo balón si el juego se estanca.", 
            objetivos: "estrategia, trabajo motriz (lanzar y atrapar), trabajo en equipo", 
            backgroundImage: "https://cdnx.jumpseller.com/edukim/image/21018015/TEL1034.jpg?1656070982" 
          } ,
          { 
            id: 45, 
            fecha: "las naciones", 
            nombrejuego: "Dodge Ball",           
            description: "Se divide al grupo en 2 equipos, ubicándose cada uno en un lado de la cancha dividida en 2. Se colocan 6 balones en la mitad de la cancha. Al iniciar el juego, ambos equipos corren desde el final de sus respectivos lados hacia la mitad de la cancha para intentar obtener la mayor cantidad de balones. El objetivo es quemar a los jugadores del equipo contrario lanzando la pelota. Sin embargo, si un jugador del equipo contrario atrapa en el aire la pelota lanzada, el lanzador queda eliminado, y un jugador eliminado del equipo contrario puede volver a entrar. El juego continúa hasta que todos los jugadores de un equipo hayan sido eliminados o el tiempo se agote.", 
            objetivos: "Habilidad motriz de lanzar y atrapar, estrategia", 
            backgroundImage: "https://i.pinimg.com/736x/0b/f7/dc/0bf7dc26def09dc2ae55757bcaa86fb6.jpg" 
          } ,
          { 

            id: 46, 
            fecha: "2 de septiembre", 
            nombrejuego: "Hay un hoyo en el fondo de la mar", 
            description: "Consiste en una canción que debe ser actuada con mímica. La idea es que los participantes actúen o simbolicen lo que dice la canción de manera coordinada. La canción es la siguiente: \n'Hay un hoyo en el fondo de la mar \nHay un hoyo en el fondo de la mar, \nHay un hoyo, hay un hoyo, hay un hoyo \nHay un hoyo en el fondo de la mar \nHay un palo en el hoyo en el fondo de la mar \nHay un palo en el hoyo en el fondo de la mar \nHay un palo, hay un palo \nHay un palo en el hoyo en el fondo de la mar \nHay un clavo en el palo en el hoyo en el fondo de la mar \nHay un clavo en el palo en el hoyo en el fondo de la mar \nHay un clavo, hay un clavo \nHay un clavo en el palo en el hoyo en el fondo de la mar \nHay un pañuelo en el clavo en el palo en el hoyo en el fondo de la mar \nHay un pañuelo en el clavo en el palo en el hoyo en el fondo de la mar \nHay un pañuelo, hay un pañuelo \nHay un pañuelo en el clavo en el palo en el hoyo en el fondo de la mar \nHay una abeja en el pañuelo en el clavo en el palo en el hoyo en el fondo de la mar \nHay una abeja en el pañuelo en el clavo en el palo en el hoyo en el fondo de la mar \nHay una abeja, hay una abeja \nHay una abeja en el pañuelo en el clavo en el palo en el hoyo en el fondo de la mar.'", 
            objetivos: "memoria, coordinación motriz", 
            backgroundImage: "https://previews.123rf.com/images/rastudio/rastudio1611/rastudio161100387/65118092-dibujado-a-mano-de-dibujos-animados-del-paisaje-del-mar-dibujo-animado-colorido-del-mar-o-el-oc%C3%A9ano.jpg" 
          
          },
          { 
            id: 47, 
            fecha: "4 de septiembre", 
            nombrejuego: "Virus/Hospital", 
            description: "El juego inicia con dos personas que deben infectar a los demás compañeros. Cuando tocan a alguien, esta persona debe tirarse al suelo y esperar a que cuatro compañeros la tomen de cada extremidad y la lleven a una zona designada como 'la zona de recuperación' o 'hospital' para ser liberada y volver a jugar. Durante el traslado, las personas que llevan al compañero no pueden ser infectadas. El objetivo del juego es que los infectores logren infectar a todos los compañeros.", 
            objetivos: "calentamiento, trabajo en equipo, velocidad, atención", 
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jvwuVuyz6SUb_E4NqaSeAndKrKZalQNeuA&s"
          },
          { 

            id: 48, 
            fecha: "4 de septiembre", 
            nombrejuego: "Nadie sabe para quién trabaja", 
            description: "Para este juego se necesitan dos pelotas. Dos personas comienzan quemando, tratando de tocar a los demás con una de las pelotas (pueden lanzarla). Si te queman, debes sentarte en el suelo y esperar a que una pelota pase cerca para agarrarla y poder levantarte y seguir jugando. Además, si un quemador pasa cerca de alguien que está sentado, este último puede intentar quitarle la pelota. Si agarras la pelota con la mano sin que toque el piso, no estás quemado y puedes quemar a alguien. Si la pelota no toca el piso al quemar a alguien, esa persona tampoco está quemada. Los quemadores también pueden quemarse entre sí; en ese caso, deben dejar caer la pelota y hacerla rodar. El objetivo del juego es que todos sean quemados excepto uno, quien será el ganador.", 
            objetivos: "reacción, lanzamiento y atrape, estrategia", 
            backgroundImage: "https://www.shutterstock.com/image-vector/business-character-working-office-creating-260nw-1008077542.jpg" 
          },
          { 
            id: 49, 
            fecha: "4 de septiembre", 
            nombrejuego: "Protegiendo el castillo", 
            description: "Este juego es similar a 'Las Naciones', pero con la diferencia de que cada equipo tiene un escudero que debe proteger el castillo de su equipo usando una colchoneta escudera. El objetivo es derribar el castillo del equipo contrario con una pelota o quemar a sus integrantes. Si el escudero es quemado, debe salir del área de juego y otro jugador asume su rol. \nEl castillo no puede ser tocado por los miembros de su propio equipo; si lo derriban, pierden. No se considera quemado si la pelota golpea la cabeza de un jugador. Si un jugador atrapa la pelota pero esta se le cae al suelo, queda quemado. Los jugadores pueden pasarse la pelota entre ellos para quemar a los adversarios. No se deben cruzar las líneas que delimitan el área de juego. El equipo que derribe el castillo contrario primero, gana.", 
            objetivos: "trabajo en equipo, estrategia, precisión, reacción, lanzamiento y atrape", 
            backgroundImage: "https://thumbs.dreamstime.com/z/ilustraci%C3%B3n-de-dibujos-animados-color-castillo-real-esta-caricatura-muestra-una-del-244854603.jpg" 
          },
          { 
            id: 50, 
            fecha: "4 de septiembre", 
            nombrejuego: "4 esquinas", 
            description: "En este juego, gana el grupo que acumule menos puntaje. Se forman 5 grupos, con uno ubicado en el centro y los otros en las cuatro esquinas de la mitad de la cancha, delimitadas por conos. Al inicio, el coordinador da la señal y cada grupo debe ponerse de acuerdo para correr hacia una nueva esquina. Todos los integrantes deben llegar para apropiarse de ella. Si dos grupos coinciden en la misma esquina, se queda el grupo que tenga a todos sus jugadores en la esquina primero. El grupo perdedor debe correr hacia otra esquina desocupada. Si un equipo no logra llegar a una esquina desocupada, deberá ir al centro y sumará un punto. Esta dinámica se repite según lo determine el coordinador. Al final, se suman los puntos obtenidos por cada equipo, y gana el equipo con el menor puntaje.", 
            objetivos: "velocidad, estrategia, reacción, comunicación", 
            backgroundImage: "https://misjuegostradicionales.wordpress.com/wp-content/uploads/2012/06/las-cuatro-esquinas.gif" 
          },
          { 
            id: 51, 
            fecha: "4 de septiembre", 
            nombrejuego: "Un aplauso gaucho", 
            description: "El juego consiste en que todos los integrantes se reúnan en círculo. El coordinador les enseñará el saludo del gaucho, que deberán imitar y recordar para luego realizarlo solos. El saludo es el siguiente: zapatear con el pie derecho tres veces mientras dicen 'tan tan tan', luego golpear los muslos con ambas manos diciendo 'tarantan tan', aplaudir dos veces y cantar 'tan tan'. Después, hacer una pausa y aplaudir tres veces mientras dicen 'tan tan tan', golpear nuevamente los muslos diciendo 'tarantan tan', tocar el pie derecho por detrás diciendo 'tan' y terminar aplaudiendo con las manos arriba y al frente diciendo '¡Hey!'.", 
            objetivos: "coordinación", 
            backgroundImage: "https://www.shutterstock.com/image-vector/hands-clapping-vector-icon-applause-260nw-407369212.jpg" 
          },
          { 
            id: 52, 
            fecha: "6 de septiembre", 
            nombrejuego: "Tornado", 
            description: "Se forman tres grupos, cada uno en fila. El último integrante de cada fila corre hacia adelante y debe pegar su hombro con el del compañero que está al frente, luego se posiciona en el primer lugar. Este proceso se repite hasta que el grupo completo llegue al fondo de la cancha.", 
            objetivos: "trabajo en equipo, coordinación, calentamiento", 
            backgroundImage: "https://img.freepik.com/vector-gratis/ilustracion-tornado-dibujos-animados-dibujados-mano_23-2150556242.jpg" 
          },
          { 
            id: 53, 
            fecha: "6 de septiembre", 
            nombrejuego: "Cuncuna Zigzag", 
            description: "Se forman tres grupos, cada uno en fila, tomados de la mano. El último participante de cada equipo debe pasar entremedio de sus compañeros hasta llegar al frente y desenredarse. Luego, el jugador que era primero pasa a ser el último y debe repetir el proceso. El equipo continúa avanzando de esta forma hasta llegar a la línea final de la cancha.", 
            objetivos: "coordinación, trabajo en equipo, agilidad, calentamiento", 
            backgroundImage: "https://st3.depositphotos.com/1005091/19255/v/450/depositphotos_192553674-stock-illustration-happy-caterpillar-theme-image-1.jpg" 
          },
          { 
            id: 54, 
            fecha: "6 de septiembre", 
            nombrejuego: "Carrera de la cuncuna", 
            description: "Se forman tres grupos. Los integrantes de cada grupo se ubican en hilera, se sientan en el suelo y pasan sus piernas alrededor del compañero de adelante para sostenerse de sus tobillos sin soltarse. Cuando el coordinador indique la partida, cada equipo deberá comenzar a avanzar de forma coordinada hasta llegar a la última línea de la cancha. Para ganar, todos los integrantes del equipo deben cruzar la línea.", 
            objetivos: "comunicación, coordinación, resistencia, trabajo en equipo", 
            backgroundImage: "https://www.curriculumnacional.cl/614/articles-31892_thumbnail.jpg" 
          },
          { 
            id: 55, 
            fecha: "6 de septiembre", 
            nombrejuego: "Vuelta al universo", 
            description: "Se forman 5 grupos, donde los integrantes de cada grupo se posicionan en hilera y los grupos forman un pentágono (estrella). A cada integrante de los equipos se le asigna un número. Cuando el coordinador mencione un número, los participantes de cada equipo con ese número deben salir por su lado izquierdo, correr hacia la derecha, dar una vuelta completa al pentágono y luego hacer un zigzag entre los compañeros de su equipo desde el último al primero. Al finalizar, deben llegar al centro para tomar una de las 4 prendas colocadas en el suelo. Cada prenda suma un punto, y el participante que no logre tomar ninguna queda sin puntos. El equipo con más puntos al final del juego gana.", 
            objetivos: "reacción, velocidad", 
            backgroundImage: "https://img.freepik.com/vector-premium/caricatura-planeta-universo-fondo_135595-78367.jpg" 
          },
          { 
            id: 56, 
            fecha: "6 de septiembre", 
            nombrejuego: "Airball", 
            description: "Se forman cuatro equipos que se enfrentarán de a dos. En cada extremo de la cancha se instalan tres aros, que funcionan como el arco en el fútbol. El objetivo es sumar puntos haciendo goles. Los jugadores deben estar ubicados en uno de los tres aros del equipo rival para hacer un gol. Pueden anotar de dos maneras: estar al lado del aro, recibir la pelota y saltar con ambos pies dentro del aro, o recibir la pelota estando ya dentro del aro. No pueden tocar el aro o el punto será anulado, y solo pueden permanecer dentro del aro por tres segundos. \nPara dar pases, los jugadores no pueden correr con la pelota en mano ni quitársela entre ellos. Si la pelota cae al suelo, el otro equipo saca desde ese lugar. Si alguien toca el aro al defender, se cobrará penal. Durante el penal, un jugador del equipo que cometió la falta toma el aro con ambas manos y lo coloca sobre su cabeza de espaldas a los demás. El jugador que lanza el penal debe estar a 7 pasos de distancia e intentar encestar en el aro. \nLa pelota puede mantenerse en mano solo por tres segundos. Después de cada gol, el equipo contrario reinicia el juego. No está permitido el autopase.", 
            objetivos: "predeportivo, trabajo en equipo, comunicación, estrategia", 
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlM94FtxlzvWsDb4U5KMbQJ-IIBR1JAjvqw&s" 
          },
          { 
            id: 57, 
            fecha: "6 de septiembre", 
            nombrejuego: "1, 2, 3", 
            description: "Los participantes se reúnen en parejas y comienzan a contar hasta tres infinitamente, turnándose entre los dos compañeros. El coordinador indicará que, en lugar de decir el número 1, los participantes deberán aplaudir. Luego, deberán reemplazar el número 2 por un salto y acordar entre ellos una nueva forma creativa de representar el número 3. El objetivo es que los jugadores realicen la actividad de manera coordinada y sin enredarse.", 
            objetivos: "coordinación, atención, creatividad", 
            backgroundImage: "https://static.vecteezy.com/system/resources/previews/008/454/856/non_2x/sticker-of-a-cartoon-1-2-3-vector.jpg" 
          },
          { 
            id: 58, 
            fecha: "11 de septiembre", 
            nombrejuego: "Bosque encantado", 
            description: "El juego comienza con el brujo o bruja en una posición dentro del área delimitada, mientras los demás jugadores se dispersan. Al sonar una señal (como un silbato o un grito), el brujo empieza a perseguir a los corredores. Si el brujo toca a un jugador, este debe quedarse inmóvil en el lugar donde fue tocado. El juego continúa hasta que quede un solo jugador libre. Este jugador debe intentar atravesar el campo sin ser tocado por el brujo. Si lo logra, gana; si es tocado, el brujo gana.", 
            objetivos: "calentamiento, juego de velocidad y cooperación", 
            backgroundImage: "https://img.freepik.com/vector-premium/caricatura-escena-bosque-muchos-arboles_43633-5045.jpg" 
          },
          { 
            id: 59, 
            fecha: "11 de septiembre", 
            nombrejuego: "Águila/aguilucho", 
            description: "El juego consiste en formar dos filas de jugadores frente a frente, una fila denominada 'águilas' y la otra 'aguiluchos', con una distancia prudente entre ambas. El moderador da las señales que determinan las acciones: \n- ¡Águila!: Las águilas deben correr para atrapar a los aguiluchos. \n- ¡Aguilucho!: Los aguiluchos deben correr hacia un lugar seguro mientras las águilas intentan tocarlos. \n- Categorías (ej. par/impar): El moderador puede asignar categorías específicas; por ejemplo, si dice 'número par', solo los aguiluchos designados como pares deben correr.\nEl juego continúa hasta que el moderador decida finalizarlo.", 
            objetivos: "velocidad, reacción, conocimiento general, atención", 
            backgroundImage: "https://i.pinimg.com/736x/22/ca/ed/22caedc8232757a8d3ac3c012af22eb4.jpg" 
          },
          { 
            id: 60, 
            fecha: "11 de septiembre", 
            nombrejuego: "Zorba", 
            description: "En este juego, se forman dos equipos con la misma cantidad de jugadores. A cada integrante se le asigna un número, desde el 1 hasta el número total de personas en el grupo. Cada equipo se posiciona en un lado de la cancha, y un pañuelo se coloca justo en el centro. Cuando el moderador menciona un número, los jugadores de ambos equipos con ese número corren hacia el centro para intentar recoger el pañuelo. El jugador que agarre el pañuelo debe llevarlo a su área mientras el contrincante intenta pintarlo. Si logra llegar a su área sin ser pintado, su equipo gana un punto. El juego continúa hasta que el moderador decida finalizarlo.", 
            objetivos: "velocidad, estrategia, reacción, matemáticas básicas", 
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBk1-XNCThpN5pwda7InDpLO5FZNNhCj8D0g&s" 
          },
          { 
            id: 61, 
            fecha: "11 de septiembre", 
            nombrejuego: "Cachipún alemán", 
            description: "El juego consiste en dos grupos contrarios formados en filas (fila A y fila B). El primer jugador de cada fila sale al mismo tiempo para enfrentarse en un punto determinado, donde juegan al cachipún. El jugador que gana sigue avanzando hacia la fila contraria, mientras el jugador que pierde regresa a su fila para esperar su próximo turno. Si un jugador logra llegar al comienzo de la fila contraria sin ser detenido, su equipo gana un punto. El siguiente jugador de la fila contraria debe salir rápidamente para evitar que el ganador continúe avanzando. El objetivo es evitar que los jugadores del equipo contrario lleguen a la base de tu fila.", 
            objetivos: "velocidad, atención, reacción, azar", 
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg27LtzMqqSCS8KpOHaVjpJp9qujG19n-rg&s" 
          },
          { 
            id: 62, 
            fecha: "11 de septiembre", 
            nombrejuego: "Aplauso del torero", 
            description: "En este juego, los participantes se colocan en un círculo. La persona que dirige el juego utiliza un pañuelo, y dependiendo de cómo lo mueva, el resto deberá realizar distintas acciones durante el aplauso. Las claves son las siguientes: \n- Si el pañuelo se mueve hacia los lados, los participantes deben decir '¡Olé!'.\n- Si el pañuelo es lanzado, todos gritan hasta que este caiga al suelo.\n- Si el pañuelo se mueve en círculos hacia abajo, los participantes deben simular un tambor golpeando sus muslos.\n- Si el pañuelo se gira hacia arriba, los participantes deben aplaudir. \nEl juego busca generar celebraciones y motivar al grupo a través de estas acciones coordinadas.", 
            objetivos: "celebraciones, motivación, atención", 
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4L2OQAFx3fnNvulf9naVNEz0AHOtSkm_Jg&s" 
          },
          { 
            id: 63, 
            fecha: "13 de septiembre", 
            nombrejuego: "La misión imposible", 
            description: "En este juego, los participantes se dividen en equipos equitativos. Cada equipo debe completar una serie de desafíos, registrando cada uno de ellos para comprobar su correcta realización. El equipo que complete primero todas las misiones correctamente, según el registro, será el ganador. La dinámica fomenta la comunicación, la estrategia y el trabajo en equipo para cumplir con las tareas en el menor tiempo posible.", 
            objetivos: "trabajo en equipo, estrategias, comunicación", 
            backgroundImage: "https://media.revistagq.com/photos/5ca600c4f46488d00ef4a49f/master/w_1600%2Cc_limit/mision_imposible_3778.jpg" 
          },
          { 
            id: 64, 
            fecha: "27 de septiembre", 
            nombrejuego: "Fútbol 4 esquinas", 
            description: "El juego es similar al fútbol, pero con 4 equipos, cada uno posicionado en una esquina de la cancha, que actúa como su arco. El objetivo es marcar goles en los arcos de los equipos contrarios mientras se defienden los propios. \n\nPuntos: Cada vez que un equipo marca un gol en el arco de un equipo contrario, suma un punto. Si un equipo recibe un gol, pierde un punto. El equipo con más puntos al final del tiempo establecido gana el juego. Se fomenta el trabajo en equipo y la precisión en los pases para coordinar ataques y defensas de manera efectiva.", 
            objetivos: "trabajo en equipo, precisión en los pases", 
            backgroundImage: "https://us.123rf.com/450wm/anitnov/anitnov1905/anitnov190500020/122196628-ni%C3%B1a-jugar-al-balompi%C3%A9-f%C3%BAtbol-caricatura.jpg" 
          },
          { 
            id: 65, 
            fecha: "27 de septiembre", 
            nombrejuego: "El gato", 
            description: "El juego se lleva a cabo con dos equipos. Se crea un 'gato' (#) en el suelo utilizando 4 cuerdas, y cada equipo recibe 3 conos. Los equipos se colocan en hileras. El primer jugador de cada equipo corre hacia el gato para colocar su cono en cualquier espacio libre. Al regresar, debe tocar al siguiente compañero para que este haga lo mismo. Una vez que los tres conos de un equipo están en el gato, los jugadores continúan corriendo, pero esta vez reposicionan los conos con el objetivo de formar una línea recta. Cuando un equipo logra la línea, gana un punto. El juego continúa hasta que un equipo alcance 5 puntos o hasta que el moderador decida finalizar.", 
            objetivos: "trabajo en equipo, velocidad, agilidad", 
            backgroundImage: "https://static.vecteezy.com/system/resources/previews/029/583/101/non_2x/cute-cat-cartoon-on-white-background-vector.jpg" 
          },
          { 
            id: 66, 
            fecha: "27 de septiembre", 
            nombrejuego: "Colpbol", 
            description: "Los jugadores se dividen en dos equipos, cada uno defendiendo una portería. El objetivo es marcar la mayor cantidad de goles en la portería del equipo contrario. Los jugadores solo pueden movilizar el balón golpeándolo con la mano, sin sujetarlo. El equipo que marque más goles al final del tiempo establecido será el ganador.", 
            objetivos: "trabajo en equipo, agilidad y estrategia", 
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrXXfZnUcQS_MpCBSvBlyTEiWGVtT4PxW3Q&s" 
          },
          { 
            id: 67, 
            fecha: "27 de septiembre", 
            nombrejuego: "Piepie", 
            description: "El animador comienza cantando 'Yo tengo una danza que se baila así...' e indica una parte del cuerpo realizando un movimiento específico. Los demás participantes deben imitar el movimiento del animador. El juego continúa con el animador añadiendo nuevos movimientos y partes del cuerpo, desafiando a los participantes a coordinarse y recordar la secuencia.", 
            objetivos: "coordinación, concentración y memoria", 
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE7_v-lLKMf8rHomw5Gyzi3k1UOVS23vVICQ&s" 
          },
          { 
            id: 68, 
            fecha: "27 de septiembre", 
            nombrejuego: "Cortar el hilo", 
            description: "El juego es una versión de pinta tradicional con una variante: si alguien se cruza entre quien está pintando y quien está siendo perseguido, el pintador debe cambiar su objetivo y perseguir a quien se cruzó. El objetivo es mantener el dinamismo y la cooperación, ya que los jugadores deben estar atentos a sus movimientos y a los de los demás para evitar ser pintados.", 
            objetivos: "Calentamiento, velocidad, cooperación", 
            backgroundImage: "https://static.vecteezy.com/system/resources/previews/008/822/437/non_2x/thread-spool-needle-halloween-cartoon-clipart-free-vector.jpg" 
          },
          { 
            id: 69, 
            fecha: "27 de septiembre", 
            nombrejuego: "Frisbee Ultimate", 
            description: "El juego se realiza en dos equipos. Cada equipo se alinea en fila a lo largo de la línea del área designada. El equipo que comienza lanza el frisbee hacia el equipo oponente para iniciar el juego. El objetivo es realizar un punto atrapando el frisbee dentro del área del equipo contrario. Los jugadores pueden hacer pases ilimitados, pero no pueden correr o caminar con el frisbee en la mano. El juego fomenta la comunicación, la estrategia y la coordinación entre los miembros del equipo.", 
            objetivos: "juego predeportivo, habilidad de lance y atrape, trabajo en equipo, comunicación, estrategia", 
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLTBCmFWiEXJnqIxfIVwt-7lSmWa4afX3mEw&s" 
          },
          { 
            id: 70, 
            fecha: "27 de septiembre", 
            nombrejuego: "Cosechando a ciegas", 
            description: "Este es un juego en parejas donde cada pareja tiene una venda. Un jugador comienza con los ojos vendados mientras el otro da instrucciones. Todas las parejas se posicionan en la línea central de la cancha. Los jugadores con los ojos vendados deben cruzar la línea y seguir las indicaciones de su pareja para recoger conos que representan puntos. El desafío es que todas las parejas están dando instrucciones simultáneamente, dificultando escuchar solo a su compañero. El turno finaliza cuando se recogen todos los conos, y luego el jugador con los ojos vendados cambia. Al final, cada pareja cuenta los conos recolectados, y gana la pareja con el mayor número de conos.", 
            objetivos: "Trabajo en equipo, comunicación, estrategia, juego sensorial de audición y tacto", 
            backgroundImage: "https://media.istockphoto.com/id/1275086034/es/vector/nietos-y-abuelos-cosechan-manzanas.jpg?s=612x612&w=0&k=20&c=BapIUvZy1tnYGWvo1w_RLGFF2DZB9OSj9ZwWu3GiP04=" 
          },
          { 
            id: 71, 
            fecha: "23 de septiembre", 
            nombrejuego: "Mariacha", 
            description: "En este juego, los jugadores se forman en círculo alrededor del guía u organizador, quien irá dando instrucciones que los jugadores deben seguir mientras cantan 'Mariacha'. Las instrucciones pueden incluir movimientos como mover las manos, las piernas, aplaudir, entre otros. El juego continúa hasta que el guía decida finalizarlo.", 
            objetivos: "Coordinación", 
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHE_vl8zD_1pjrcf7e9mcKGVLaMqmyw11Lg&s" 
          },
          { 
            id: 72, 
            fecha: "23 de septiembre", 
            nombrejuego: "Pinta selfie", 
            description: "En este juego, se seleccionan uno o más jugadores para que pinten, mientras el resto intenta escapar. Para pintar a un jugador, basta con tocarlo. Cuando un jugador es pintado, debe quedarse quieto y hacer una pose, como si estuviera posando para una foto. Para liberarlo, otro jugador debe acercarse y simular tomarse una selfie con él. El juego termina cuando todos los jugadores están pintados haciendo poses o cuando el grupo lo estime conveniente. Si un jugador sale del terreno delimitado, se considera automáticamente pintado.", 
            objetivos: "Velocidad, atención, colaboración", 
            backgroundImage: "https://www.paredro.com/wp-content/uploads/2014/12/frida-selfie.jpg" 
          },
          { 
            id: 73, 
            fecha: "30 de septiembre", 
            nombrejuego: "Alfa, beta, gama", 
            description: "El juego se organiza con tres grupos de igual cantidad de personas: Alfa, Beta y Gama. A cada grupo se le asignan pañuelos de un color específico. El objetivo es que el grupo Alfa quite los pañuelos al grupo Beta, Beta a Gama, y Gama a Alfa. Cuando a un jugador le quitan el pañuelo, debe ir a una cárcel y permanecer allí hasta que otro jugador de su equipo le lleve un nuevo pañuelo para liberarlo. En la variación del juego, los jugadores eliminados no pueden ser liberados, y el equipo ganador será aquel que mantenga al menos un jugador activo al final.", 
            objetivos: "calentamiento, trabajo en equipo, estrategia, agilidad", 
            backgroundImage: "https://thumbs.dreamstime.com/z/gamma-beta-alfa-alfabeto-griego-38499644.jpg" 
          },
          { 
            id: 74, 
            fecha: "30 de septiembre", 
            nombrejuego: "Esferas del dragón", 
            description: "El curso se divide en dos equipos. Cada participante lleva un pañuelo en la cintura a la altura de la rodilla. Cada equipo tiene 3 o 4 pelotas en su área y debe intentar robar las pelotas del equipo contrario cruzando la cancha. Si un jugador es tocado por un oponente mientras está en el territorio enemigo, deben realizar un duelo tratando de quitarse el pañuelo. Si el jugador que defendía pierde, debe regresar a su base; si gana, el oponente debe ir al 'infierno', de donde solo puede ser liberado por un compañero. Gana el equipo que logre reunir las 7 pelotas primero.", 
            objetivos: "trabajo en equipo, azar, reacción, velocidad", 
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsaBRsIGMzdn4H5Tvcm5mzSgKu-i2qYzlAyg&s" 
          },
          { 
            id: 75, 
            fecha: "30 de septiembre", 
            nombrejuego: "Rayuela zapatilla", 
            description: "El curso se divide en dos equipos. Cada participante debe quitarse ambos zapatos. Los equipos se organizan en hileras y, de forma alternada, lanzan primero el zapato derecho y luego el izquierdo hacia una rayuela hecha con aros. Los lanzamientos se puntúan según si los zapatos caen dentro del área definida. Gana el equipo que logre colocar más zapatos en la rayuela. \nOpcional: Una vez finalizados los lanzamientos, los equipos compiten para ver quién puede ponerse los zapatos más rápido y reorganizarse en sus hileras.", 
            objetivos: "precisión, lanzamiento, ponerse los zapatos rápidamente", 
            backgroundImage: "https://www.chileparaninos.gob.cl/639/articles-320962_imagen_00.thumb_img_1200x800.jpg" 
          },
          {
            id: 76,
            fecha: "25 de septiembre",
            nombrejuego: "Carrera tres pies",
            description: "En este juego, los participantes forman parejas y sus tobillos son atados entre sí, de modo que deben coordinarse para correr con tres pies. La carrera se desarrolla en un recorrido delimitado y el objetivo es llegar a la meta antes que las demás parejas, trabajando en equipo y manteniendo el equilibrio.",
            objetivos: "coordinación, trabajo en equipo, equilibrio",
            backgroundImage: "https://img.freepik.com/vector-gratis/dos-ninos-corriendo-carrera-tres-patas_1308-75142.jpg"
          },
          {
            id: 77,
            fecha: "25 de septiembre",
            nombrejuego: "Lanzar la argolla",
            description: "Los jugadores deben lanzar argollas desde una distancia determinada, intentando que caigan sobre un poste o botellas colocadas como objetivo. Cada acierto suma puntos, y gana quien logre la mayor cantidad de puntos al finalizar el juego.",
            objetivos: "precisión, concentración, coordinación",
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmiM_hUc8Lq22GBqKwYPAhgLJ46bfo8W-48w&s"
          },
          {
            id: 78,
            fecha: "25 de septiembre",
            nombrejuego: "La rayuela",
            description: "Este clásico juego chileno consiste en lanzar un tejo metálico hacia un cajón con arena o un círculo marcado, buscando que caiga lo más cerca posible del centro. Los jugadores toman turnos y acumulan puntos según la precisión de sus lanzamientos.",
            objetivos: "precisión, estrategia, coordinación",
            backgroundImage: "https://www.chileparaninos.gob.cl/639/articles-320962_imagen_00.thumb_img_1200x800.jpg"
          },
          {
            id: 79,
            fecha: "25 de septiembre",
            nombrejuego: "Pesca milagrosa",
            description: "Los jugadores utilizan una caña de pescar improvisada con un gancho en el extremo para intentar recoger premios o peces decorativos colocados en un área delimitada. Cada captura otorga puntos o recompensas.",
            objetivos: "destreza, concentración, paciencia",
            backgroundImage: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/119235857_01/public"
          },
          {
            id: 80,
            fecha: "25 de septiembre",
            nombrejuego: "Emboque",
            description: "En este juego, los participantes intentan encajar una pequeña pieza de madera, sujeta por un cordón, en el extremo de un palo. Cada acierto suma puntos, y gana quien logre la mayor cantidad de embocaduras en el tiempo establecido.",
            objetivos: "precisión, concentración, coordinación motriz",
            backgroundImage: "https://www.vitamina.cl/wp-content/uploads/2018/09/juegos_tradicionales.jpg"
          },
          {
            id: 81,
            fecha: "25 de septiembre",
            nombrejuego: "Tirar la cuerda",
            description: "Los participantes saltan una cuerda girada por dos personas. El objetivo es mantener el ritmo y evitar tropezar con la cuerda. Se puede aumentar la dificultad incorporando saltos sincronizados en equipo.",
            objetivos: "coordinación, resistencia, ritmo",
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLxihDLbotafUf-6y8dUL47YJU2dzgzDTlYA&s"
          },
          {
            id: 82,
            fecha: "25 de septiembre",
            nombrejuego: "Derribar tarros",
            description: "Los jugadores lanzan pelotas hacia una torre de tarros apilados, intentando derribarlos completamente. Cada derribo suma puntos, y gana quien logre más puntos en el tiempo asignado.",
            objetivos: "precisión, fuerza, coordinación",
            backgroundImage: "https://www.aprenderjuntos.cl/wp-content/uploads/2016/09/botar-tarros.jpg"
          },
          {
            id: 83,
            fecha: "25 de septiembre",
            nombrejuego: "Tragabolas",
            description: "Los jugadores deben guiar pequeñas bolas hacia una meta utilizando un camino inclinado o un laberinto. El objetivo es lograr que la mayor cantidad de bolas lleguen a la meta antes que los demás jugadores.",
            objetivos: "destreza, paciencia, precisión",
            backgroundImage: "https://daleunritmoalternativo.wordpress.com/wp-content/uploads/2021/10/juego-de-la-rana.jpg?w=356"
          },
          {
            id: 84,
            fecha: "25 de septiembre",
            nombrejuego: "Carrera de sacos",
            description: "Cada participante se mete dentro de un saco y, sujetándolo con las manos, debe saltar hasta la meta lo más rápido posible. El primer jugador en cruzar la línea de meta será el ganador.",
            objetivos: "velocidad, equilibrio, coordinación",
            backgroundImage: "https://img.freepik.com/vector-premium/carrera-sacos-chicos-hermosos_679557-339.jpg"
          }
    ];

    const [activeId, setActiveId] = useState(itemsData[0].id);

    const handleNext = () => {
        const slide = slideRef.current;
        const items = slide.children;
        slide.appendChild(items[0]);
        if (activeId - 42  === itemsData.length) {
            setActiveId(43);
        } else {
            setActiveId(activeId + 1);
        }
    };

    const handlePrev = () => {
        const slide = slideRef.current;
        const items = slide.children;
        slide.prepend(items[items.length - 1]);
        if (activeId === 43) {
            setActiveId(itemsData.length + 42);
            console.log('activeId', activeId)
        } else {
            setActiveId(activeId - 1);
            console.log('activeId', activeId)
        }
    };


    return (
        <>
        <h1 className='title-spt'>Juegos Septiembre</h1>
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
                    {activeId -42} of {itemsData.length}
                    <button className="next" onClick={handleNext}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default SliderSeptiembre;