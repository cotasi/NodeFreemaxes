import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';

import '../scss/maps.scss';
import Graphics from './Graphics';
import Mapif from '../Data/mapinfo.json';
import styled from 'styled-components';

const BusInfo = styled.div`
    display: none;
    gap: 30px;
`;

const BusDetail = styled.div`
    width: 40%;
    > h2 {
        padding-bottom: 20px;
    }
`;

const Detailinfo = styled.div`
    background-color: white;
    height: 180px;
    padding: 30px 20px;
    > h2 {
        padding-bottom: 22px;
        font-family: 'Pretendard' !important;
        font-size: 12px;
    }
    > p {
        font-size: 13px;
        > span {
            margin-right: 0.65em;
        }
    }
    > .add {
        margin-bottom: 18px;
        &::before {
            content: '';
            display: inline-block;
            width: 8px;
            height: 12px;
            background: url('/images/mapping.svg') no-repeat;
            vertical-align: -0.11em;
            margin-right: 10px;
        }
    }
    > .stops > .toto > span { font-size: 14px;}
    > .stops > .toto > span:last-child { margin-left: 20px;}
    > .stops > .toto > span:first-child::after {content:''; display: inline-block; width: 30px; height: 2px; background-color: black; vertical-align: 0.3em; margin-left: 20px;}

`;


const Maps = () => {
    const [pathnum,setpathnum] = useState(0);

    const setpathnums = (newnum) => { setpathnum(newnum);}

    return (
        <div className="mapmain">
            <div className="mapwrap mx-auto max-w-screen-xl flex flex-1">
                <div className="mapinfo">
                    <h2>지도로 <span>버스 분포도를 확인해</span>  <br /> 현 <span>상황</span>을 알아봅니다.</h2>
                    <p>왜 버스 예약 정책이 필요한 걸까 고민해보았습니다.</p>

                    {
                        Mapif.map((ifs,idxxx)=>(<BusInfo className={`${pathnum === idxxx ? 'flex': ''}`}>
                                            <BusDetail>
                                                <h2>강남역으로 향하는 버스</h2>
                                                <Detailinfo>
                                                    <h2>{ifs.text}</h2>
                                                    <p className="add">{ifs.busarr.map((busin,index)=>(<span>{busin}</span>))}</p>
                                                    <div className="stops">
                                                        {
                                                            ifs.noseon.map((eef,iidx)=>(<div className={`toto`}><span>{eef.start}</span><span>{eef.end}</span></div>))
                                                        }
                                                    </div>
                                                </Detailinfo>
                                            </BusDetail>
                                            <BusDetail>
                                                <h2>서울역으로 향하는 버스</h2>
                                                <Detailinfo>
                                                    <h2>{ifs.text}</h2>
                                                    <p className="add">{ifs.busarr2.map((busin2,index)=>(<span>{busin2}</span>))}</p>
                                                    <div className="stops">
                                                    {
                                                        ifs.noseon2.map((eeef,iidx2)=>(<div className="toto"><span>{eeef.starts}</span><span>{eeef.end}</span></div>))
                                                    }
                                                    </div>
                                                </Detailinfo>
                                            </BusDetail>
                                          </BusInfo>))
                    }
                </div>
                <div className="realmap">
                    <Graphics idname="mapinfo" pathnum={pathnum} setpathnums={setpathnums}/>
                </div>
            </div>
        </div>
    );
};

export default Maps;