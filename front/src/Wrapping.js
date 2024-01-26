import React, { useEffect } from 'react';
import HeaderAll from './comp/HeaderAll';
import Main from './comp/Main';
import CI from './comp/CI';
import RealInfo from './comp/RealInfo';
import Travel from './comp/Travel';
import Travelinfo from './comp/TravelingInfo';
import Notice from './comp/Notice';
import { Route, Routes } from 'react-router-dom';
import Modals from './comp/Modal';
import Footer from './comp/Footer';
import Region1 from './comp/Region1';
import Region2 from './comp/Region2';
import Product from './comp/Product'
import Products from './Data/Product.json';
import Sang from './comp/Sangsae';
import Promotion from './comp/Promotion';
import Join from './comp/Join';
import Signup from './comp/Signup';
import Gwangju from './Data/gwangju.json';

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