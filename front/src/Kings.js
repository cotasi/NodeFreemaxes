import React, { useEffect } from 'react';
import HeaderAll from './comp/HeaderAll';
import Main from './comp/Main/Main';

/* Company import */
import Service from './comp/Company/Service';

import { Route, Routes } from 'react-router-dom';

const Wrapping = () => {
    useEffect(()=>{
    },[]);

    return (
        <div>
            <HeaderAll/>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/company">
                    <Route path="/company/service" element={<Service />}></Route>
                </Route>
            </Routes>
        </div>
    );
};

export default Wrapping;