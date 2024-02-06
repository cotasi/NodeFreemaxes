import React, { useState,useEffect } from 'react';
import '../../scss/graphics.scss';

import mapif from '../../Data/mapinfo.json';

const Graphics = ({pathnum,idname,setpathnums,ispath,setispaths}) => {

    useEffect(()=>{
    
    },[pathnum])

    return (
        <div className="graphicsmap">
            <svg height="656" width="800" id={idname} xmlns="http://www.w3.org/2000/svg">
                    <g stroke="white" id="firsts">{mapif.map((maps,idx)=>(<path className={`OUTLINE ${pathnum === idx ? 'bg': ''}`} d={maps.d} onClick={()=>{setpathnums(idx); setispaths(true)}}></path>))}</g>
                    <g id="seconds">{mapif.map((maped,idxx)=>(<text className={`text ${pathnum === idxx && ispath ? 'whitetext': ''}`} x={maped.x} y={maped.y}>{maped.text}</text>))}</g>
            </svg>
        </div>
    );
};

export default Graphics;