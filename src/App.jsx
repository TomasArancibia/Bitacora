import React from 'react';
import SliderAgosto from './components/SliderAgosto';
import SliderSeptiembre from './components/SliderSeptiembre';
import SliderOctubre from './components/SliderOctubre';
import SliderNoviembre from './components/SliderNoviembre';
import Concluciones from './Concluciones';
import './App.css'; 

const App = () => {
    return (
        <>
        <SliderAgosto/>
        <SliderSeptiembre/>
        <SliderOctubre/>
        <SliderNoviembre/>
        <Concluciones/>
        </>
    )
    ;
};

export default App;