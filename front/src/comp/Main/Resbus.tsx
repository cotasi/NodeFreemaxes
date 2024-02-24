import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';


import '../../scss/Resbus.scss';
import Busregion from'../../Data/busregion.json'

const Pointer = styled.div`
    width: 15%;
    background-color: #fafafa;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    margin-right: 3rem;
    h2 {
        width: 40%;
        padding: .5rem;
        text-align: center;
        font-size: 1rem;
    }
    > button {
        width: 60%;
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
    height: 330px;
    overflow-y: scroll;
    bottom: calc(100% + 2rem);
    left: 0; right: -2rem;
    border: 1px solid rgba(0,0,0,.15);
    display: none;
    &.pointeron { display: block !important;}
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
            }
            dt {
                padding-bottom: .5rem;
                font-size: .9rem;
                cursor: pointer;
            }
        }
    }
`;

type tab =  {
    tabon: boolean,
    tabidx: number
}

type region = {
    regionon: boolean,
    regionidx: number,
    regioncon: any
}

const Resbus = () => {

    const [tabs,settabs] = useState<tab>({
        tabon: false,
        tabidx: 0
    });

    const [regionbtn,setregionbtn] = useState<region>({
        regionon: false,
        regionidx: -1,
        regioncon: '출발지 선택'
    })


    useEffect(()=>{
        const tabbtn = document.querySelectorAll('.resbustab .bustab button');
        const pointerbtn = document.querySelector('.pointer1 > button');
        const pointeron = document.querySelector('.subpointer1');
        const dtdt = document.querySelectorAll('.dtdt');
        tabbtn.forEach((ele,idx)=>{
            ele.addEventListener('click',()=>{
                tabbtn.forEach((eles)=>{
                    eles.classList.remove('btnon');
                });
                settabs({
                    tabon: true,
                    tabidx: idx
                })
                if(tabs.tabon && tabs.tabidx === idx) {
                    tabbtn[idx].classList.add('btnon');
                }
            })
        })
        pointerbtn?.addEventListener('click',(e)=>{
            e.preventDefault();
            setregionbtn({
                ...regionbtn,
                regionon: !regionbtn.regionon
            })
            if(regionbtn.regionon) {
                pointeron?.classList.add('pointeron');
            } else {
                pointeron?.classList.remove('pointeron');
            }
        })

        dtdt.forEach((eless,idxss)=>{
            eless.addEventListener('click',()=>{
                setregionbtn({
                    regionon:false,
                    regionidx:idxss,
                    regioncon: dtdt[idxss].textContent
                })
                console.log(regionbtn.regioncon);
                if(!regionbtn.regionon) {
                    pointeron?.classList.remove('pointeron');
                }
            })
        })
      
    })
    const num = 1;
    return (
    <div className="resbusall">
        <div className="resbus">
            <div className="mx-auto max-w-screen-1280">
                <div className="resbus_wrap">
                    <form className="flex items-center">
                        <h2>궁금한 버스 찾기</h2>
                        <div className="checks flex">
                            <div id="check1" className="flex j-center">
                                <input type="checkbox" id="checkone"/>
                                <label htmlFor="checkone">광역/공항</label>
                            </div>
                            <div id="check2" className="flex j-center">
                                <input type="checkbox" id="checktwo"/>
                                <label htmlFor="checktwo">지선/간선</label>
                            </div>
                        </div>
                        <Pointer className="flex relative pointer1">
                            <h2>출발지</h2>
                            <button><div><span>{regionbtn.regioncon}</span></div></button>
                            <Subpointer className="absolute subpointer1">
                                <ul className="pointer">
                                    {
                                        Busregion.map((reg)=>(
                                            <li>
                                                <div>
                                                    <dd>{reg.region_name}</dd>
                                                    {
                                                        reg.bus_stop.split('|').map((spl,idxs)=>(
                                                            <dt className="dtdt">{spl.substring(1,spl.length -1).split(',')[3*num - 3]}</dt>
                                                        ))
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
        <div className="resbustab">
            <div className="mx-auto max-w-screen-1280">
                <ul className="bustab flex j-center">
                    <li><button className="btnon">
                           <div className="svgwrap">
                             <img src="/images/busicon_1_off.svg" alt="svgoff" />
                             <img src="/images/busicon_1_on.svg" alt="svgon" />
                           </div>
                           <div className="namewrap">
                            버스 찾기
                           </div>
                        </button></li>
                    <li><button>
                            <div className="svgwrap">
                                <img src="/images/bedicon.svg" alt="svgoff" />
                                <img src="/images/bedicon_on.svg" alt="svgon" />
                            </div>
                            <div className="namewrap">
                                호텔 검색
                            </div>
                        </button></li>
                    <li><button>
                            <div className="svgwrap">
                                <img src="/images/cafeicon-02.svg" alt="svgoff" />
                                <img src="/images/cafeicon-02_on.svg" alt="svgon" />
                            </div>
                            <div className="namewrap">
                                카페 검색
                            </div>
                        </button></li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Resbus;