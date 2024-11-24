import React, { useRef, useState } from 'react';
import Item from './Item';

const SliderNoviembre = () => {
    const slideRef = useRef();

    const itemsData = [
        {
            "id": 128,
            "fecha": "4 de noviembre",
            "nombrejuego": "Vueltas del aro",
            "description": "Los alumnos se dividen en dos equipos y forman hileras paralelas. Uno a uno, los jugadores corren hacia un aro, pasan por dentro, y regresan tomados de la mano para recoger al siguiente compañero. El objetivo es que todo el equipo pase junto al final sin soltarse. Si alguien se suelta, deben empezar de nuevo.",
            "objetivos": "Trabajar mejor en equipo, mejorar la motricidad fina, confiar en los compañeros.",
            "backgroundImage": "https://m.media-amazon.com/images/I/71AXhcigcGL._AC_UF350,350_QL80_.jpg"
          },
          {
            "id": 129,
            "fecha": "4 de noviembre",
            "nombrejuego": "Teléfono Bailarín",
            "description": "Una variante del juego de 'Teléfono' donde los participantes deben transmitir movimientos de baile a través de una hilera, memorizándolos y pasándolos al siguiente compañero. El objetivo es que el primer participante de la hilera repita los pasos correctamente frente al moderador. Gana el equipo con más pasos correctos.",
            "objetivos": "Desarrollar y poner a prueba su atención, mejorar habilidades de coordinación, fomentar la creatividad.",
            "backgroundImage": "https://img.freepik.com/vector-premium/pareja-hombre-mujer-bailando-ilustracion-icono-dibujos-animados-musica-concepto-icono-musica-personas-premium-aislado-estilo-plano-dibujos-animados_138676-1568.jpg?semt=ais_hybrid"
          },
          {
            "id": 130,
            "fecha": "4 de noviembre",
            "nombrejuego": "Quemados en la Base",
            "description": "Versión del clásico juego de quemados donde ambos equipos comparten la misma cancha y los capitanes queman desde fuera. Los jugadores deben refugiarse en aros dispersos en la cancha, evitando ser quemados. Los colores de los aros se desactivan aleatoriamente para aumentar la dificultad. Gana el equipo que mantenga al último jugador en pie.",
            "objetivos": "Mejorar coordinación y agilidad, trabajar en equipo aplicando estrategias colaborativas, tomar decisiones rápidas y adaptarse a los cambios.",
            "backgroundImage": "https://www.wikihow.com/images_en/thumb/c/c1/Play-Dodgeball-Step-5-Version-2.jpg/v4-460px-Play-Dodgeball-Step-5-Version-2.jpg"
          },
          {
            "id": 131,
            "fecha": "6 de noviembre",
            "nombrejuego": "Campo Minado",
            "description": "Un juego competitivo donde los participantes se dividen en dos equipos: lanzadores y caminantes. Los caminantes, con los ojos vendados, intentan cruzar un campo evitando pisar minas representadas por lentejas. Si pisan una mina, los lanzadores pueden lanzarles balones para eliminarlos. El objetivo es cruzar la cancha y acumular puntos en un tiempo limitado.",
            "objetivos": "Trabajar en equipo, desarrollar estrategias para la resolución de problemas, comunicarse entre personas para lograr un mismo objetivo.",
            "backgroundImage": "https://img.freepik.com/vector-premium/campo-minado-cartel-minas-antitanque-ilustracion-vector-plano_124715-4603.jpg"
          },
          {
            "id": 132,
            "fecha": "6 de noviembre",
            "nombrejuego": "Campo de minas",
            "description": "Los participantes se dividen en dos equipos con parejas dentro de cada equipo. Uno de los miembros de la pareja se venda los ojos y debe ser guiado verbalmente por su compañero para atravesar un campo lleno de obstáculos sin tocarlos. Si toca un obstáculo, regresa al punto de partida. Los roles se invierten después de 3 minutos. Gana el equipo con más puntos al final.",
            "objetivos": ["Trabajar la comunicación y percepción", "Trabajar la motricidad y concentración", "Analizar las estrategias utilizadas o posibles"],
            "backgroundImage": "https://img.odcdn.com.br/wp-content/uploads/2020/12/Sem-titulo-15.jpg"
          },
          {
            "id": 133,
            "fecha": "6 de noviembre",
            "nombrejuego": "Pinta Depredador",
            "description": "Los jugadores se dividen en tres grupos representando animales (león, cebra, insecto). Un 'congelador' atrapa a los jugadores, quienes quedan congelados imitando a su animal. Para ser liberados, un jugador del depredador natural debe realizar una mímica o un ruido característico. El juego termina si todos los jugadores son congelados o se acaba el tiempo.",
            "objetivos": "Ejercitar la velocidad, mejorar la comunicación entre compañeros, mejorar la concentración y reacción.",
            "backgroundImage": "https://saposyprincesas.elmundo.es/assets/2016/03/juego-atrapa-la-bandera.jpg"
          },
          {
            "id": 134,
            "fecha": "6 de noviembre",
            "nombrejuego": "Laberinto silencioso",
            "description": "Los equipos deben atravesar un laberinto marcado por conos, siguiendo las indicaciones de un guía que no puede hablar ni colocarse frente a la fila. Los demás jugadores están vendados y deben confiar en la comunicación no verbal del guía. Gana el equipo que complete el laberinto primero.",
            "objetivos": "Trabajar en equipo, fomentar la comunicación no verbal y confianza en el equipo, desarrollar coordinación y precisión.",
            "backgroundImage": "https://fotografias.lasexta.com/clipping/cmsimages02/2024/07/03/E5664B7C-3F4D-4AD0-A4FE-3399B1C85F78/laberinto_103.jpg?crop=1091,818,x97,y0&width=1200&height=900&optimize=low&format=webply"
          },
          {
            "id": 135,
            "fecha": "11 de noviembre",
            "nombrejuego": "Aro Doble",
            "description": "Dos equipos compiten para anotar puntos pasando un balón a través de los aros sostenidos por los portadores de aro de su equipo. Los jugadores deben moverse estratégicamente y lanzar el balón con rapidez y precisión sin permitir que toque el suelo o sea interceptado. El equipo con más puntos al final del juego gana.",
            "objetivos": "Desarrollar rapidez y precisión en el lanzamiento, coordinarse en equipo y asignar roles, identificar estrategias eficaces.",
            "backgroundImage": "https://http2.mlstatic.com/D_NQ_NP_964051-CBT70779526306_082023-O.webp"
          },
          {
            "id": 136,
            "fecha": "11 de noviembre",
            "nombrejuego": "Frisbee al ataque",
            "description": "Dos equipos compiten en una cancha de futbolito lanzando un frisbee con el objetivo de derribar conos en el lado del equipo contrario. Un escudero defiende los conos usando un escudo. Los jugadores no pueden moverse con el frisbee en las manos, solo pivotear. Gana el equipo que derribe más conos.",
            "objetivos": "Trabajar en equipo, mejorar en la coordinación ojo-mano, practicar lanzamiento de frisbee.",
            "backgroundImage": "https://i.pinimg.com/736x/1b/47/80/1b4780650cf04d88a5c25867aa0e1ae9.jpg"
          },
          {
            "id": 137,
            "fecha": "18 de noviembre",
            "nombrejuego": "Policías y ladrones",
            "description": "Un equipo de policías intenta capturar a los ladrones, llevándolos a una cárcel designada. Los ladrones pueden liberar a sus compañeros atrapados tocando sus manos, pero deben evitar ser recapturados inmediatamente. Gana el equipo que logre cumplir su objetivo antes de que acabe el tiempo.",
            "objetivos": "Ejercitar la velocidad, formar estrategias grupales, entrenar el tiempo de reacción y la atención al entorno.",
            "backgroundImage": "https://m.media-amazon.com/images/I/71+qn9y7yoL.jpg"
          },
          {
            "id": 138,
            "fecha": "18 de noviembre",
            "nombrejuego": "La Bomba",
            "description": "Los jugadores forman círculos y se pasan una pelota mientras un 'desactivador' cuenta hasta 20 en silencio. Al gritar '¡Bomba!', el jugador con la pelota pierde y debe sentarse. Gana quien quede de pie al final. Variaciones incluyen diferentes tipos de pelotas, cambios de desactivadores y más pelotas en juego.",
            "objetivos": "Potenciar la velocidad de reacción y agilidad, fomentar la habilidad de lanzamiento y atrape, desarrollar coordinación motriz.",
            "backgroundImage": "https://i.pinimg.com/474x/1a/37/08/1a3708db3975e0e7085f01c832df33c0.jpg"
          },
          {
            "id": 139,
            "fecha": "20 de noviembre",
            "nombrejuego": "La Torre",
            "description": "Dos equipos compiten para pasar la pelota a su 'torre,' un jugador ubicado en un aro en cada lado de la cancha. Los pases deben realizarse con la mano, evitando que el equipo contrario intercepte la pelota. Si la 'torre' recibe la pelota correctamente, el equipo obtiene un punto.",
            "objetivos": "Comunicarse, trabajar en equipo, desarrollar estrategias.",
            "backgroundImage": "https://img.freepik.com/foto-gratis/bella-torre-castillo-angulo_23-2150791585.jpg"
          }
    ];
    const [activeId, setActiveId] = useState(itemsData[0].id);

    const handleNext = () => {
        const slide = slideRef.current;
        const items = slide.children;
        slide.appendChild(items[0]);
        if (activeId - 127 === itemsData.length) {
            setActiveId(128);
        } else {
            setActiveId(activeId + 1);
        }
    };

    const handlePrev = () => {
        const slide = slideRef.current;
        const items = slide.children;
        slide.prepend(items[items.length - 1]);
        if (activeId === 128) {
            setActiveId(itemsData.length + 127);
        } else {
            setActiveId(activeId - 1);
        }
    };


    return (
        <>
        <h1 className='title-spt'>Juegos Noviembre</h1>
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
                    {activeId - 127} of {itemsData.length}
                    <button className="next" onClick={handleNext}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default SliderNoviembre;