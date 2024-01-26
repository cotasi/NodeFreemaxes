import React from 'react';
import styled from 'styled-components';
import Slider from './Slider'
import Func from './Func';
import Maps from './Maps';
import Resbus from './Resbus';
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';



const Main = () => {
    return (
        <div>
            <Slider></Slider>
            <Func></Func>
            <Maps></Maps>
            <Resbus></Resbus>

        </div>
    );
};

export default Main;