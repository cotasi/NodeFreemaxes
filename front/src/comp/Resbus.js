import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import '../scss/Resbus.scss';
import Busdata from '../Data/regionbus.json';

const Allwraps = styled.div`
    display: flex;
    position: relative;
    height: 412px;
`

const Buswraps = styled.div`
    display: inline-block;
    position: relative;
    background-color: rgb(217, 217, 217,.4);
    border-radius: 18px;
    height: 100%;
    > ul {
        padding: 10px 0;
        padding-right: 50px;
        position: relative;
        z-index: 1;
        > li > button {
            padding: 0 20px;
            padding-top: 10px;
            padding-bottom: 15px;
        }
    }
`;

const Buttonon = styled.div`
    position: absolute;
    top: 10px;
    padding: 10px 0;
    width: 150px;
    background-color: #f63636;
    border-radius: 10px;
    z-index: 1;
    svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 30px;
    }
`;

const Busnamewraps = styled.div`
    display: inline-block;

    margin-left: 60px;
    top: 0;
    padding-top: 10px;
    #busname ul {
        height: 100%;
    }
    button {
        width: 200px;
        padding: 0 20px;
        padding-top: 10px;
        padding-bottom: 15px;
    }
`;

const Busres = styled.div`
    padding-top: 10px;
    height: 100%;
    position: relative;
`;

const Resinfo = styled.div`
    margin-left: 100px;
    font-family: 'Pretendard' !important;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    .restit { background-color: #f63636; display: inline-block; padding: 4px 14px; color: white; border-radius: 35px; margin-bottom: 10px;}
    .resnums { font-size: 40px; font-weight: 700 !important; color: #f63636;}
    .startend { font-size: 20px; font-weight: 700 !important; display: flex; align-items:center; padding-bottom: 20px;
                span:first-child { padding-right: 10px;}
                span:nth-child(2) { display:inline-block; width: 70px; height: 1px; background-color: black; position: relative;}
                span:nth-child(2)::before { content: ''; display: inline-block; width: 5px; height: 5px; background-color: black; border-radius: 50%; position: absolute; left: 0; top: 50%; transform: translateY(-50%);}
                span:nth-child(2)::after { content: ''; display: inline-block; width: 5px; height: 5px; background-color: black; border-radius: 50%; position: absolute; right: 0; top: 50%; transform: translateY(-50%);}
                span:last-child { padding-left: 10px;}}
    .divide { font-size: 20px; font-weight: 700 !important; padding-bottom: 30px;
              span:first-child { padding-right: 36px;}
              span:last-child { font-weight: 400 !important;}}
    .time { button { padding: 0; width: auto; color: #f63636; padding: 8px 33px; border: 1px solid #f63636; border-radius: 20px; margin-bottom: 20px;}}
`;


const Resbus = () => {
    const [buttonnum,setbuttonnum] = useState(null);
    const [isbutton,setisbutton] = useState(false);
    const [button2num,setbutton2num] = useState(null);
    const [isbutton2,setisbutton2] = useState(false);

    useEffect(()=>{
        document.querySelectorAll('.regbtn').forEach((ele,index,arr)=>{
            ele.addEventListener('click',(e)=>{
                if(buttonnum === index && isbutton) {
                    document.querySelector('#ob').classList.remove('hidden');
                    document.querySelector('#ob').style.top = `${(49*index + 10)}px`;
                    document.querySelectorAll('.regbtn').forEach((regbtn)=>{regbtn.classList.remove('colorwhite');})
                    ele.classList.add('colorwhite');
                    document.querySelector('#ob svg').style.fill = 'white';
                    document.querySelectorAll('#busname > ul').forEach((eles,indxs)=>{
                        eles.classList.add('hidden');
                    })
                    document.querySelectorAll('#busname > ul')[index].classList.remove('hidden');
                
            }
        })
        },
        document.querySelectorAll('#busname > ul').forEach((e,i)=>{
           document.querySelectorAll('#busname > ul > li > button').forEach((ee,ii)=>{
                ee.addEventListener('click',(e)=>{
                    document.querySelectorAll('.resinfo').forEach((eee,iii)=>{
                        eee.classList.add('hiddens');
                    })
                    document.querySelectorAll('.resinfo')[ii].classList.remove('hiddens');
                })
           })
        })
        )},[buttonnum,button2num])

    return (
     <div id="busmain">
        <div className="busmainwrap max-w-screen-xl mx-auto">
            <h2>주요 지역별 수도권 <span>예약 버스들</span></h2>
            <p>수도권 출퇴근 버스로 예약할 만한 버스들을 엄선하였습니다.</p>
            <Allwraps>
                <Buttonon className="hidden" id="ob">
                        <PlusOutlined />
                    </Buttonon>
                <Buswraps>
                    <ul className="onetap">
                        {
                            Busdata.map((datas,idx)=>(<li><button className="regbtn" onClick={()=>{setbuttonnum(idx); setisbutton(true); setbutton2num(null); setisbutton2(false);}}>{datas.busregname}</button>
                                                    </li>))
                        }
                    </ul>     
                </Buswraps>
                <Busnamewraps className="busname flex">
                    <div id="busname">
                        {
                            Busdata.map((busdata,버튼투)=>(<ul className="hidden">{busdata.buseach.map((eachbus,fix)=>(<li><button className={`btn2 ${button2num === fix ? 'colorred': ''}`} onClick={()=>{setbutton2num(fix); setisbutton2(true);}}>{eachbus.busname}</button></li>))}</ul>))
                        }
                    </div>
                    <div id="busres">
                        <Busres>
                        {
                            Busdata.map((busd,ix)=>(
                                <>
                                    {
                                        busd.buseach.map((be)=>(
                                            <Resinfo className="flex hiddens resinfo">
                                                <div className="smallinfo">
                                                    <div className="restit">광역</div>
                                                    <div className="resnums">{be.busname.split('(')[0]}</div>
                                                    <div className="startend"><span>{JSON.parse(be.busstopall)[0]}</span>
                                                                            <span className="line"></span>
                                                                            <span>{JSON.parse(be.busstopall).slice(-1)[0]}</span>
                                                    </div>
                                                    <div className="divide"><span>배차 간격</span>
                                                                            <span>{be.bustime}</span>
                                                                            
                                                    </div>
                                                    <div className="time"><button>운행 시간표 보러가기</button></div>
                                                    <div className="time"><button>예약하기</button></div>
                                                </div>
                                                <div className="largeinfo">
                                                    <ul>
                                                        {
                                                            JSON.parse(be.busstopall).map((par)=>(
                                                                <li><button>{par}</button></li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </Resinfo>   
                                        ))
                                    }
                                </>
                            ))
                        }
                          {/* <Resinfo className="flex">
                            <div className="smallinfo">
                                <div className="restit">광역</div>
                                <div className="resnums">{Busdata[0].buseach[0].busname.split('(')[0]}</div>
                                <div className="startend"><span>{startend[0]}</span><span className="line"></span><span>{startend.slice(-1)[0]}</span></div>
                                <div className="divide"><span>배차간격</span><span>{Busdata[0].buseach[0].bustime}</span></div>
                                <div className="time"><button>운행시간표 보러가기</button></div>
                                <div className="time"><button>예약하기</button></div>
                            </div>
                            <div className="largeinfo">
                                <ul>
                                    {
                                        JSON.parse(Busdata[0].buseach[0].busstopall).map((busstop)=>(<li><button>{busstop}</button></li>))
                                    }
                                </ul>
                            </div>
                          </Resinfo> */}
                          
                        </Busres>
                    </div>
                </Busnamewraps>
                

            </Allwraps>
            

        </div>
     </div>
    );
};

export default Resbus;