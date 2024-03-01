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
           <SwiperSlide>
              <div className="imgwrap"><img src="/images/ch.svg" alt="ch" /></div>
              <div className="textwraps">
               <div className="buttons flex items-center"><button><span className="sr_only">SHOW MORE</span></button>
                                        <span>SHOW MORE</span>
               </div>
               <div className="texteng">
                  <div>WE TAKE EFFICENTLY</div>
                  <div>TO BUS USER.</div>
               </div>
               <div className="textkor">
                  <div>최고의 혜택을 위해</div>
                  <div>프리맥스는 움직입니다.</div>
               </div>
              </div>
           </SwiperSlide>
           <SwiperSlide>
              <div className="imgwrap"><img src="/images/coffees.svg" alt="ch" /></div>
              <div className="textwraps">
               <div className="buttons flex items-center"><button><span className="sr_only">SHOW MORE</span></button>
                                        <span>SHOW MORE</span>
               </div>
               <div className="texteng">
                  <div>WE TAKE EFFICENTLY</div>
                  <div>TO BUS USER.</div>
               </div>
               <div className="textkor">
                  <div>최고의 혜택을 위해</div>
                  <div>프리맥스는 움직입니다.</div>
               </div>
              </div>
           </SwiperSlide>
         </Swiper>
         <Resbus></Resbus>
       </div>
    );
};

export default Slider;