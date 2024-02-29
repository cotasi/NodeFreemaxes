import * as React from 'react';
import { useState, useEffect } from 'react';

import { Swiper,SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import { serverapi } from '../../api/serverapi';
import { Busts1 } from '../../ts/common';
import { Busts2 } from '../../ts/common';

import '../../scss/Bestbus.scss';
import '../../scss/device.css';
import Busregion from '../../Data/busregion.json';
import PaidIcon from '@mui/icons-material/Paid';
import SubwayIcon from '@mui/icons-material/Subway';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const Bestbus = () => {

    const [content,setcontent] = useState<Busts1[] | null>(null);
    const [content2,setcontent2] = useState<Busts2[] | null>(null);

    const FetchDataState1 = async (): Promise<void> =>{
        try {
            const busresp = await serverapi("region_2");
            if(busresp instanceof Error) {
                throw busresp;
            }
            console.log(busresp);
            if (busresp === undefined) {
                console.log("Response is undefined");
                return;
            }
            if(Array.isArray(busresp.data)) {
                setcontent([...busresp.data]);
            }
            console.log(busresp);
        }catch(error) {
            console.log(error);
        }
    }

    const FetchDataState2 = async (): Promise<void> =>{
        try {
            const busresp2 = await serverapi("region_1");
            if(busresp2 instanceof Error) {
                throw busresp2;
            }
            console.log(busresp2);
            if (busresp2 === undefined) {
                console.log("Response is undefined");
                return;
            }
            if(Array.isArray(busresp2.data)) {
                setcontent2([...busresp2.data]);
            }
            console.log(busresp2);
        }catch(error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        FetchDataState1();
        FetchDataState2();
    },[]);

    useEffect(()=>{
        console.log(content);
        console.log(content2);
    },[content,content2])

    const mergedData = content?.map(bus => ({
        ...bus,
        region_name: content2?.find(region => region.region_num === bus.region_num)?.region_name
      }));
      
      console.log(mergedData);
      
    const number = 1;

    const breakpoints = {
        1560: {
            spaceBetween: 60,
            slidesPerView: 4
        },
        1024: {
            spaceBetween: 50,
            slidesPerView: 3
        },
        768: {
            spaceBetween: 30,
            slidesPerView: 2
        },
        640: {
            spaceBetween: 20,
            slidesPerView: 1
        },
        480: {

        }
    }

    return (
        <div className="bestbus">
            <div className="mx-auto xl:max-w-screen-xl lg:max-w-screen-lg max-w-screen-sm ssm:max-w-screen-ssm sssm:max-w-screen-sssm">
                <h2>베스트 이용 버스</h2>
                <p>수도권 버스 이용자 중 가장 많이 이용된 버스들을 선정하였습니다.</p>
                <div id="bestswiper">
                    <Swiper spaceBetween={20}
                            slidesPerView={1}
                            scrollbar={{draggable: true}}
                            breakpoints={breakpoints}>
                        {
                            mergedData?.map((breg)=>(
                                <SwiperSlide>
                                    
                                    <div className="busimg">
                                        <div className="imgwrap">
                                            <img src="/images/Gwang.svg" alt="광역버스" />
                                        </div>
                                        <div className="bustype">
                                            <div>{breg.bus_type}버스</div>
                                            <div>예약제</div>
                                        </div>
                                    </div>
                                    <div className="businfo">
                                        <div><span>{breg.region_name.split('시')[0]} {breg.bus_type}버스</span>{breg.bus_name}</div>
                                        <div>{breg.bus_com}</div>
                                        <div className="paid">
                                            <span><PaidIcon /></span>
                                            <span>2600원</span>
                                        </div>
                                        <div className="subway">
                                            <span><SubwayIcon /></span>
                                            <span>
                                               <span>{breg.bus_stop.split('|')[0].substring(1,breg.bus_stop.split('|')[0].length - 1).split(',')[3*number - 3]}</span>
                                               <span><ArrowRightAltIcon /></span>
                                               <span>{breg.bus_stop.split('|').slice(-1)[0].substring(1,breg.bus_stop.split('|')[0].length - 1).split(',')[3*number - 3]}</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="reserpart">
                                        <button>예약하러 가기</button>
                                        <button>시간표 보기</button>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Bestbus;