import React from 'react';
import styled from 'styled-components';
import Slider from './Slider'
import Easyres from './Easyres';
import Maps from './Maps';
import Resbus from './Resbus';
import Business from './Business';
import About from './About';
import BestProduct from './Bestproduct';
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';



const Main = () => {
    
    return (
        <div>
            <Slider></Slider>
            <Easyres></Easyres>
            <About></About>
            <Maps></Maps>
            <Resbus></Resbus>
            <Business></Business>
            <BestProduct></BestProduct>
        </div>
    );
};

export default Main;