import React from 'react';

import Worldmap from './Worldmap';

import '../../scss/business.scss';

const Business = () => {
    return (
        <div className="businesswrap">
            <div className="mx-auto max-w-screen-2xl">
                <h2><img src="/images/business.svg" alt="business" /></h2>
                <div className="worldmapwrapper">
                    <Worldmap></Worldmap>
                </div>
                
            </div>
        </div>
    );
};

export default Business;