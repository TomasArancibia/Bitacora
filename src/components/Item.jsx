import React from 'react';

const Item = ({ backgroundImage, name, description, fecha, id, objetivos }) => {
    const itemStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    return (
        <div className="item" style={itemStyle}>
            <div className="content">
                <div className='date-container'>
                   <div className="id">{id}</div>
                    <div className="date">{fecha}</div> 
                </div>
                
                <div className="name">{name}</div>
                <div className="obj">{objetivos}</div>
                <div className="des">{description}</div>
            </div>
        </div>
    );
};

export default Item;