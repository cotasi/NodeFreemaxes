import * as React from 'react';

import { Swiper,SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';

import '../../scss/Bestbus.scss';
import Busregion from '../../Data/busregion.json';
import PaidIcon from '@mui/icons-material/Paid';
import SubwayIcon from '@mui/icons-material/Subway';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Bestbus = () => {
    const number = 1;
    return (
        <div className="bestbus">
            <div className="mx-auto max-w-screen-1280">
                <h2>베스트 이용 버스</h2>
                <p>수도권 버스 이용자 중 가장 많이 이용된 버스들을 선정하였습니다.</p>
                <div id="bestswiper">
                    <Swiper spaceBetween={50}
                            slidesPerView={4}
                            scrollbar={{draggable: true}}>
                        {
                            Busregion.map((breg)=>(
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