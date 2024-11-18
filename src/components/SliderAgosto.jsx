import React, { useRef } from 'react';
import Item from './Item';

const SliderAgosto = () => {
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

    const handleNext = () => {
        const slide = slideRef.current;
        const items = slide.children;
        slide.appendChild(items[0]);
    };

    const handlePrev = () => {
        const slide = slideRef.current;
        const items = slide.children;
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
                    />
                ))}
            </div>
            <div className="button">
                <button className="prev" onClick={handlePrev}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="next" onClick={handleNext}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
        </>
    );
};

export default SliderAgosto;