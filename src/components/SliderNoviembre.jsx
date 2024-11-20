import React, { useRef, useState } from 'react';
import Item from './Item';

const SliderNoviembre = () => {
    const slideRef = useRef();

    const itemsData = [
        {
            id:1, 
            fecha: "12 de Agosto",
            backgroundImage: 'https://i.ibb.co/qCkd9jS/img1.jpg',
            nombrejuego: 'Switzerland',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
            objetivos: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
        },
        {
            id:2, 
            fecha: "12 de Agosto",
            backgroundImage: 'https://i.ibb.co/qCkd9jS/img1.jpg',
            nombrejuego: 'Switzerland',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
            objetivos: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
        },
        {
            id:3, 
            fecha: "12 de Agosto",
            backgroundImage: 'https://i.ibb.co/qCkd9jS/img1.jpg',
            nombrejuego: 'Switzerland',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
            objetivos: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
        },
        {
            id:4, 
            fecha: "12 de Agosto",
            backgroundImage: 'https://i.ibb.co/qCkd9jS/img1.jpg',
            nombrejuego: 'Switzerland',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
            objetivos: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
        },
        {
            id:5, 
            fecha: "12 de Agosto",
            backgroundImage: 'https://i.ibb.co/qCkd9jS/img1.jpg',
            nombrejuego: 'Switzerland',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
            objetivos: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
        },
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
        slide.prepend(items[items.length - 1]);
        if (activeId === 1) {
            setActiveId(itemsData.length);
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
                    {activeId} of {itemsData.length}
                    <button className="next" onClick={handleNext}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default SliderNoviembre;