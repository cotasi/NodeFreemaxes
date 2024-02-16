import React from 'react';

import Submenu from './Submenu';

import menu from '../../Data/menuback.json';

const Service = () => {
    return (
        <div className="Servicewrap">
            <div className="mx-auto max-w-screen-2xl">
                <Submenu menu={menu} menuid={0} submenuid={0}></Submenu>
            </div>
        </div>
    );
};

export default Service;