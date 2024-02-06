import React, { useEffect } from 'react';
import HeaderAll from './comp/HeaderAll';
import Main from './comp/Main/Main';
import { Route, Routes } from 'react-router-dom';

const Wrapping = () => {
    useEffect(()=>{
    },[]);

    return (
        <div>
            <HeaderAll/>
            <Routes>
                <Route path="/" element={<Main />}></Route>
            </Routes>
        </div>
    );
};

export default Wrapping;