import * as React from 'react';
import { useEffect } from 'react';

import Slider from './Slider';
import Bestbus from './Bestbus';
import Distribtion from './Distribtion';
import GBus from './Gbus';
import Store from './Store';
import Business from './Business';
import Modal from './Modal';
import Contact from './ContactForm';



const Main = () => {
    useEffect(()=>{
        document.body.classList.add('dimmed');
    })
    
    return (
        <main>
            <Modal />
            <Slider />
            <Bestbus />
            <Distribtion />
            <GBus />
            <Store />
            <Business />
            <Contact />
        </main>
    );
};

export default Main;