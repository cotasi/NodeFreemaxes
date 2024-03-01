import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';



import '../../scss/Resbus.scss';
import Busregion from'../../Data/busregion.json';
import '../../scss/media.css'

const Pointer = styled.div`
    width: 15%;
    background-color: #fafafa;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    margin-right: 3rem;
    @media (max-width: 1024px) {
        width: 20% !important;
        margin-right: 1rem;
    }
    @media (max-width: 768px) {
        margin: 0;
        width: 100% !important;
    }
    &.pointeronon {
        border-radius: 4px 4px 0 0;
    }
    h2 {
        width: 40%;
        padding: .5rem;
        text-align: center;
        font-size: 1rem;
        @media (max-width: 1280px) {
            display: none;
        }
    }
    > button {
        width: 60%;
        @media (max-width: 768px) {
            width: 100%;
        }
        @media (max-width: 1280px) {
            width: 100%;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        text-align: center;
        background-color: black;
        color: white;
        font-size: .95rem;
        padding: 0 .5rem;
        > div {
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;

const Subpointer = styled.div`
    background-color: white;
    height: 0;
    overflow-y: scroll;
    overflow: hidden;
    top: 100%;
    left: 0; right: 0;
    border: 1px solid rgba(0,0,0,.15);
    border: none;
    z-index: 80;
    transition: all .4s;
    @media (max-width: 1280px) {
        right: -20px;
    }
    @media (max-width: 1024px) {
        top: unset !important;
        bottom: 100% !important;
    }

    &.pointeron { height: 330px; overflow-y:scroll; border: 1px solid rgba(0,0,0,.15); }
    > .pointer {
        padding: 1rem;
        li {
            padding-bottom: .9rem;
            &:last-child {
                padding-bottom: 0;
            }
            dd {
            padding-bottom: .7rem;
            font-size: 1.1rem;
            &:hover {
                text-decoration: underline;
            }
            }
            dt {
                padding-bottom: .5rem;
                font-size: .9rem;
                cursor: pointer;
                &:hover {
                text-decoration: underline;
            }
            }
        }
    }
`;

const Resbus = () => {

    const [Bustabon,setbustabon] = useState(false);
    const [selecton,setselecton] = useState({
        on: false,
        idd: -1
    });
    const [starton,setstarton] = useState({
        startons: false,
        startidx: -1,
        startcon: '출발지 선택'
    });

    useEffect(()=>{
        setselecton({on: true, idd:0});
    },[])

    return (
    <div className="resbusall">
        <div className={`resbus ${Bustabon ? 'formon': ''}`}>
            <div className="lg:mx-auto m-0 w-full xl:max-w-screen-xl lg:max-w-screen-lg">
                <div className="resbus_wrap">
                    <form className="flex items-center justify-around">
                        <h2>궁금한 버스 찾기</h2>
                        <div className="select flex items-center">
                            <button onClick={(e)=>{e.preventDefault(); setselecton({on:true,idd:0}); }} className={`${selecton.on && selecton.idd == 0 ? 'ons': ''}`}>지선/간선</button>
                            <button onClick={(e)=>{e.preventDefault(); setselecton({on:true,idd:1}); }} className={`${selecton.on && selecton.idd == 1 ? 'ons': ''}`}>광역/직행</button>
                        </div>
                        <Pointer className={`flex relative pointer1 ${starton.startons ? 'pointeronon': ''}`}>
                            <h2>출발지</h2>
                            <button onClick={(e)=>{e.preventDefault(); const updatedStarton = { ...starton, startons: !starton.startons }; setstarton(updatedStarton); }}><div><span>{starton.startcon}</span></div></button>
                            <Subpointer className={`absolute subpointer1 ${starton.startons ? 'pointeron': ''}`}>
                                <ul className="pointer">
                                    {
                                        Busregion.map((reg,idx)=>(
                                            <li>
                                                <div>
                                                    <dd>{reg.region_name}</dd>
                                                    {
                                                        reg.bus_stop.split('|').map((regb:any,idx:number)=>(<dt onClick = {()=>{setstarton({startons:false,startidx:idx,startcon:regb.substring(1,regb.length - 1).split(',')[0]})}}>{regb.substring(1,regb.length - 1).split(',')[0]}</dt>))
                                                    }
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </Subpointer>
                        </Pointer>
                        <Pointer className="flex pointer2">
                            <h2>도착지</h2>
                            <button>도착지 선택</button>
                        </Pointer>
                        <button type="submit">검색하기</button>
                    </form>
                </div>
            </div>
        </div>
        <div className={`resbustab ${Bustabon ? 'oo': ''}`}>
            <div className="mx-auto max-w-screen-1280">
                <ul className={`bustab flex j-center `}>
                    <li><button onClick={()=>{setbustabon(!Bustabon);}} className={`${Bustabon ? 'btnon': ''}`}>
                           <div className="svgwrap">
                             <img src="/images/busicon_1_off.svg" alt="svgoff" />
                             <img src="/images/busicon_1_on.svg" alt="svgon" />
                           </div>
                           <div className="namewrap">
                            버스 찾기
                           </div>
                    </button></li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Resbus;