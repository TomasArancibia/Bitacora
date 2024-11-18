import React, { useRef } from 'react';
import Item from './Item';

const Slider = () => {
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
            backgroundImage: 'data:image/jpeg;base64,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',
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

export default Slider;