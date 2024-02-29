import * as React from 'react';
import { useState, useEffect } from 'react';

import '../../scss/Distribtion.scss';
import '../../scss/media.css';
import Mapinfo from '../../Data/mapinfo.json';

const Distribtion = () => {
    type maps = {
        mapon: boolean,
        mapidx: number
    }

    const [mapreg,setmapreg] = useState<maps>({
        mapon: true,
        mapidx: 1
    });

    useEffect(()=>{
        setmapreg({ mapon: true,
            mapidx: 2})
    },[])

    return (
        <div className="distri">
            <div className="mx-auto xl:max-w-screen-xl lg:max-w-screen-lg max-w-screen-sm">
                <h2>수도권 버스 분포도 살펴보기</h2>
                <p>실제 서울 지역을 예시로 어떤 버스들이 구성되어 있는지 살펴보았습니다.</p>
                <div className="districon flex">
                    <div className="shows">
                        <ul className="regionshows">
                            {
                                Mapinfo.map((el,idxes)=>(
                                    <li className={`${mapreg.mapon && mapreg.mapidx === idxes ? 'buttoncolor': ''}`}>
                                        <button onClick={()=>{setmapreg({mapon:true,mapidx: idxes})}}>{el.text}</button></li>
                                ))
                            }
                        </ul>
                        <div className="info">
                            {
                                Mapinfo.map((ell,ellidx)=>(
                                    <ul className={`infoshow ${mapreg.mapon && mapreg.mapidx === ellidx? 'showing': ''}`}>
                                        {
                                            ell.detail.map((det)=>(
                                                <li className="flex">
                                                    <div className="bustype">{det.types}</div>
                                                    <div className="busr">
                                                        <div>{det.busnumber}</div>
                                                        <div>{det.com}</div>
                                                        <div>{det.addr}</div>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                    <div className="mapwrap">
                        <div className="map">
                            <svg xmlns="http://www.w3.org/2000/svg">
                            <g stroke="white" id="firsts">{Mapinfo.map((maps,idx)=>(<path className={`OUTLINE ${mapreg.mapon && mapreg.mapidx === idx ? 'mapcolor': ''}`} d={maps.d} onClick={()=>{setmapreg({mapon:true, mapidx:idx})}}></path>))}</g>
                            <g id="seconds">{Mapinfo.map((maped,idxx)=>(<text className={`text ${mapreg.mapon && mapreg.mapidx === idxx ? 'textcolor': ''}`} x={maped.x} y={maped.y}>{maped.text}</text>))}</g>
                            </svg>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Distribtion;