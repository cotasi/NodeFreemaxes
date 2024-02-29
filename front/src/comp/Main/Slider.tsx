import * as React from 'react';

import '../../scss/slider.scss';

import Resbus from './Resbus';

import { Swiper,SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation} from 'swiper';
import 'swiper/swiper-bundle.css';

import '../../scss/media.css';

SwiperCore.use([EffectFade, Navigation])





const Slider = () => {

  
    return (
       <div className="Allslider relative">
         <Swiper id="mainslide">
            <SwiperSlide className="mainslide1">
              <div className="mx-auto max-w-screen-1280 hfull relative">
                    <div className="textwrap">
                            <div className="imgwrap"><img src="/images/logo_white.svg" alt="logo_white" /></div>
                            <h2>프리맥스는 버스 예약과 <span className="br_768">구독 서비스를 제공합니다.</span></h2>
                            <p>
                                편한 출퇴근을 위한 예약 서비스 <br />
                                예약 서비스 누적을 통해 구독 서비스 혜택 <br />
                                여행 및 호텔 회사의 협업을 통해 여행 서비스 제공
                            </p>
                    </div>
                    <img src="/images/ch_ani-02.svg" alt="slide1_img" className="zdown"/>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mainslide2">
                <img src="/images/info.svg" alt="info" />
                <div className="textwrap">
                  <h2>매번 확인하는 <span className="br_768">예약은 그만!</span></h2>
                  <p>
                  자신의 좌석을 직접 확인하고!<br />
                  근처의 MY BUS 찾기를 통해 <br />
                  편안한 아침과 저녁을 맞이하세요!
                  </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="mainslide3">
            <div className="textwrap">
                  <h2><span>무슨 혜택을</span> 제공할까?</h2>
                  <p>
                    구독 서비스 이용자에 한해서 여행 및 호텔 서비스를 <br />
                    제공하고 있습니다. 자세한 혜택에 대해서는 <br />
                    문서를 통해 확인하시길 바랍니다.
                  </p>
                  <button>문서 보기</button>
                </div>
              <div className="mx-auto max-w-screen-1280 hfull relative">
                <img src="/images/mapbg.svg" alt="mapbg" />
                <img src="/images/flyingchar.svg" alt="flyingchar" />
                <img src="/images/tickets.svg" alt="tickets" />
                <img src="/images/card.svg" alt="card" />
              </div>
            </SwiperSlide>
         </Swiper>
         <Resbus></Resbus>
       </div>
    );
};

export default Slider;