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
           </SwiperSlide>
           <SwiperSlide>
              <div className="imgwrap"><img src="/images/coffee_vector.svg" alt="ch" /></div>
           </SwiperSlide>
         </Swiper>
         <Resbus></Resbus>
       </div>
    );
};

export default Slider;