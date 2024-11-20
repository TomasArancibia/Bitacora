import React from 'react';

const Item = ({ backgroundImage, name, description, fecha, id, objetivos, isActive }) => {
    const itemStyle = {
        backgroundImage: isActive ? `url(https://i.ibb.co/qCkd9jS/img1.jpg)` : `url(${backgroundImage})`,
    };

    return (
        <div className="item" style={itemStyle} >
            <div className="content">
                <div className='date-container'>
                    <div className="id">{id}</div>
                    <div className="name">{name}</div>
                </div>
                <div className="date">Fecha: {fecha}</div>
                <div className="obj">Objetivos: {objetivos}</div>
                <div className="des">{description}</div>
                <div className='cto-foto'>    
                <img src={backgroundImage} className='foto' alt={name} />
                </div>
            </div>
        </div>
    );
};

export default Item;