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