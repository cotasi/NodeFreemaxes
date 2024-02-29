import * as React from 'react';
import { useState,useEffect } from 'react';

import '../../scss/Gbus.scss';
import Busregion from '../../Data/busregion.json';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Swiper 모듈 활성화
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Gbus = () => {
    type btnreg = {
        region: boolean,
        regiidx: number,
        regicon: any
    }

    type tabone = {
        taboneon: boolean,
        taboneidx: number
    }

    type tabtwo = {
        tabtwoon: boolean,
        tabtwoidx: number
    }

    const [regionbtn,setregionbtn] = useState<btnreg>({
        region: false,
        regiidx: 1,
        regicon: '지역 선택'
    });

    const [tabone,settabone] = useState<tabone>(
        {
            taboneon: false,
            taboneidx: 1
        }
    )

    const [tabtwo,settabtwo] = useState<tabtwo>(
        {
            tabtwoon: false,
            tabtwoidx: 1
        }
    )

    const changearr = Busregion.filter((items)=>(items.region_name === regionbtn.regicon));
    const number1 = 1;

    useEffect(()=>{
        setregionbtn({
            region: false,
            regiidx: 1,
            regicon: Busregion[1].region_name
        });

        settabone({
            taboneon: true,
            taboneidx: 1
        });

        settabtwo({
            tabtwoon: true,
            tabtwoidx: 1
        })
    },[])
    return (
        <div className="gbus">
           <div className="mx-auto max-w-screen-1280">
                <h2>경기도 버스 정보 살펴보기</h2>
                <p>경기도에서 출퇴근 버스는 어떤 것이 있는지 알아봅니다.</p>
                <div className="gbuscon flex">
                    <div className="regioncheck">
                        <div className="rolldown relative">
                            <button onClick={()=>{setregionbtn({...regionbtn,region: !regionbtn.region })}}>{regionbtn.regicon}</button>
                            <ul className={`smallmenu absolute ${regionbtn.region ? 'smallon': ''}`}>
                                {
                                    Busregion.map((regi,iiii)=>(
                                        <li><button onClick={()=>{setregionbtn({region:false,regiidx:iiii,regicon:regi.region_name})}}>{regi.region_name}</button></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="bustab">
                        <div className="tabone">
                            <ul className="flex j-center">
                                {
                                    changearr.map((busion,iiiii)=>(
                                        <li>
                                            <button className={`${tabone.taboneon && tabone.taboneidx === iiiii ? 'taboneons': ''}`} onClick={()=>{settabone({taboneidx:iiiii,taboneon: !tabone.taboneon }); settabtwo({tabtwoon: !tabtwo.tabtwoon, tabtwoidx: iiiii})}}>
                                                <span>{busion.bus_com}</span>
                                                <span>{busion.bus_name}</span>
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="tabtwo">
                            {
                                changearr.map((carr,arridx)=>(
                                    <Swiper slidesPerView={4} spaceBetween={50} id="tabswiper" className={`${tabtwo.tabtwoon && tabtwo.tabtwoidx === arridx ? 'blocks': ''}`}>
                                        {
                                            carr.bus_stop.split('|').map((sl,dd)=>(
                                                <>
                                                    {
                                                        /* sl.substring(1,sl.length - 1).split(',')[3*number1 - 3] */
                                                        <SwiperSlide key={dd}>
                                                            <div className="imgpart">
                                                                <div className="imgwrap"><img src={sl.substring(1,sl.length - 1).split(',')[3*number1 - 2]} alt="" /></div>
                                                                <div className="textregion">{sl.substring(1,sl.length - 1).split(',')[3*number1 - 3]}</div>
                                                                <div className="textadd">{sl.substring(1,sl.length - 1).split(',')[3*number1 - 1]}</div>
                                                            </div>
                                                            <div className="timepart">
                                                                
                                                            </div>
                                                        </SwiperSlide>
                                                    }
                                                </>
                                            ))
                                        }
                                    </Swiper>
                                ))
                            }
                        </div>
                    </div>
                </div>
           </div> 
        </div>
    );
};

export default Gbus;