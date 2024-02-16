import * as React from 'react';
import { useState, useEffect } from 'react';
import Main from './comp/Main/Main.js';
import { Route, Routes } from 'react-router-dom';

/* default import */
import HeaderAll from './comp/HeaderAll.jsx';

/* Company import */
import Service from './comp/Company/Service.js';



const Kings = () => {

    return (
        <div>
            <HeaderAll/>
        </div>
    );
};

export default Kings;