import * as React from 'react';
import { useState, useEffect } from 'react';

import '../../scss/Distribtion.scss';
import '../../scss/media.css';
import Mapinfo from '../../Data/mapinfo.json';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Distribtion = () => {
    type maps = {
        mapon: boolean,
        mapidx: number,
        mapcon: string
    }

    type bb = {
        bt: boolean
    }

    const [mapreg,setmapreg] = useState<maps>({
        mapon: true,
        mapidx: 1,
        mapcon: Mapinfo[1].text
    });

    const [b,setb] = useState<bb>({
        bt: false
    })

    useEffect(()=>{
        setmapreg({ mapon: true,
            mapidx: 2,
            mapcon: Mapinfo[2].text})
    },[])

    return (
        <div className="distri">
            <div className="mx-auto xl:max-w-screen-xl lg:max-w-screen-lg sm:max-w-screen-sm max-w-screen-ssm max-w-screen-xssm max-w-screen-xxssm max-w-screen-xxxssm">
                <h2>수도권 버스 분포도 살펴보기</h2>
                <p>실제 서울 지역을 예시로 어떤 버스들이 구성되어 있는지 살펴보았습니다.</p>
                <div className="districon flex">
                    <div className="shows">
                        <div className="regionshows">
                            <ul className="xl:flex hidden">
                            {
                                Mapinfo.map((el,idxes)=>(
                                    <li className={`${mapreg.mapon && mapreg.mapidx === idxes ? 'buttoncolor': ''}`}>
                                        <button onClick={()=>{setmapreg({...mapreg,mapon:true,mapidx: idxes,})}}>{el.text}</button></li>
                                ))
                            }
                            </ul>
                            <div className={`togbtn xl:hidden block relative ${b.bt ? 'tover': ''}`}>
                                <button onClick={()=>{setb({bt:!b.bt})}}><span>{mapreg.mapcon}</span><KeyboardArrowDownIcon /></button>
                                <ul className={`${b.bt ? 'ton': ''} togsub absolute top-full`}>
                                    {
                                        Mapinfo.map((eel,idx)=>(<li><button onClick={()=>{setb({bt:false}); setmapreg({...mapreg,mapidx:idx,mapcon: eel.text})}}>{eel.text}</button></li>))
                                    }
                                </ul>
                            </div>
                        </div>
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
                    <div className="mapwrap" style={{width: '58%', height: '50%', border: '1px solid black'}}>
                        <div className="map" style={{height:'100%'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 768 800'>
                            <g stroke="white" id="firsts">{Mapinfo.map((maps,idx)=>(<path className={`OUTLINE ${mapreg.mapon && mapreg.mapidx === idx ? 'mapcolor': ''}`} d={maps.d} onClick={()=>{setmapreg({mapcon:maps.text,mapon:true, mapidx:idx})}}></path>))}</g>
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