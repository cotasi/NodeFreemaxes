import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';

import '../../scss/maps.scss';
import Graphics from './Graphics';
import Mapif from '../../Data/mapinfo.json';
import styled from 'styled-components';

const Maptabs = styled.li`
    margin: 0 1rem;
    > button {
        width: 100px;
        height: 50px;
        font-size: 0.8rem;
        border-bottom: 1px solid rgba(0,0,0,.3);
        &.regon {
            border-bottom: 1px solid #f63636;
            color: #f63636
        }
    }
`;

const Tabscon = styled.ul`
    width: 80%;
    border-top: 2px solid black;
    display: none;
    &.dok { display: block !important;}
    > li {
        padding: 20px;
        display: flex;
        border-bottom: 1px solid black;
        position: relative;
        transition: all .4s;
        &:hover {
            background-color: black;
            border-bottom: 1px solid white;
            .types {
                background-color: white !important;
                color: black;
            }
            .infowraps {
                > * {
                    color: white;
                }
            }
            .rotate { 
                background-color: white !important;
                .rotatenumber {
                    color: black;
                }
            }
        }
        .types {
            background-color: black;
            display: inline-block;
            color: white;
            width: 56px;
            height: 25px;
            text-align: center;
            line-height: 25px;
            border-radius: 15px;
            font-size: .7rem;
            margin-right: 20px;
        }
        .infowraps {
            font-family: 'Pretendard' !important;
            h2 {
                font-weight: 800 !important;
                font-size: 1.1rem;
                padding-bottom: 10px;
            }
            h3 {
                font-weight: 200 !important;
                font-size: .9rem;
                padding-bottom: 10px;
            }
            p {
                font-size: .9rem;
            }
        }
        .rotate {
            width: 80px;
            height: 80px;
            background-color: black;
            position: absolute;
            right: 20%;
            top: 20%;
            transform: translateY(-50%);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            .rotatenumber {
                color: white;
            }
        }
        .rotate::after {
            content: '';
            position: absolute;
            display: block;
            width: 10px; 
            height: 10px;
            background-color: #faa74a;
            border-radius: 50%;
            top: 0;
            transform: translateY(-50%);
        }
    }
`;


const Maps = () => {
    const [pathnum,setpathnum] = useState(0);
    const [ispath,setispath] = useState(false);

    const setpathnums = (newnum) => { setpathnum(newnum);}
    const setispaths = (newpath) => { setispath(newpath);}

    useEffect(()=>{
        const clicktarget = document.querySelectorAll('#firsts path');
        clicktarget.forEach((ele,iii)=>{
            ele.addEventListener('click',(e)=>{
                const maptab = document.querySelectorAll('#maptabs button');
                maptab.forEach((eles)=>{
                    eles.classList.remove('regon');
                })
                maptab[iii].classList.add('regon');

                const tabcons = document.querySelectorAll('#tabscon > ul');
                tabcons.forEach((el)=>{
                    el.classList.remove('dok');
                });
                tabcons[iii].classList.add('dok');
            })
        });
    },[pathnum])

    return (
        <div className="mapmain">
            <div className="mapwrap mx-auto max-w-screen-2xl flex flex-1">
                <div className="mapinfo">
                    <h2>지도로 <span>버스 분포도를 확인해</span>  <br /> 현 <span>상황</span>을 알아봅니다.</h2>
                    <p>각 지역별 서울 주요 지역으로 향하는 버스 정보를 나타내고 있습니다.</p>
                    <ul id="maptabs">
                        {
                            Mapif.map((mapif,ifdex)=>(<Maptabs><button className={`${ispath && pathnum === ifdex ? 'regon' : ''}`} onClick={()=>{setispath(true); setpathnum(ifdex);}}>#{mapif.text}</button></Maptabs>))
                        }
                    </ul>
                    <div id="tabscon" className="relative">
                        {
                            Mapif.map((ifs,idd)=>(<Tabscon className={`${pathnum === idd && ispath ? 'dok' : ''}`}>
                                {
                                    ifs.detail.map((det)=>(<li>
                                        <div className="types" style={{backgroundColor: `${det.bg}`}}>{det.types}</div>
                                        <div className="infowraps">
                                            <h2>{det.busnumber}</h2>
                                            <h3>{det.addr}</h3>
                                            <p>{det.com}</p>
                                        </div>
                                        <div className="rotate" style={{backgroundColor: det.bg}}>
                                            <div className="rotatenumber">{det.busnumber}</div>
                                        </div>
                                    </li>))
                                }
                            </Tabscon>))
                        }
                    </div>
                </div>
                <div className="realmap">
                    <Graphics idname="mapinfo" pathnum={pathnum} setpathnums={setpathnums} ispath={ispath} setispaths={setispaths}/>
                </div>
            </div>
        </div>
    );
};

export default Maps;