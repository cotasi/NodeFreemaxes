import React, { useState, useEffect } from 'react';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,EffectFade, Navigation,Pagination } from 'swiper';
import { Link } from 'react-router-dom';
import slcon from '../../Data/slider.json';
import newscon from '../../Data/news.json';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/components/autoplay';

import '../../scss/slider.scss';

SwiperCore.use([Autoplay,EffectFade,Navigation,Pagination]);



const Slider = () => {

    const swiperOptions1 = {
       /*  autoplay: {
          delay: 5000, // 원하는 autoplay 딜레이 설정
          disableOnInteraction: false, // 사용자 상호 작용 시 자동 재생 비활성화 여부
        }, */
        navigation: false, // 네비게이션 활성화
        pagination: {type: 'fraction'},
        mousewheel: false, // 마우스 스와이프 비활성화
        slidesPerView: 3,
        spaceBetween: 90,
        loop: true,
      };

    const swiperOptions2 = {
        direction : 'vertical',
        mousewheel: 'false',
        autoplay: {
          delay: 5000, // 원하는 autoplay 딜레이 설정
          disableOnInteraction: false, // 사용자 상호 작용 시 자동 재생 비활성화 여부
        }
    }


    return (
        <div className="swiperwrap flex" style={{height:'600px'}}>
            <div className="swiperscroll">
        
            </div>
            <div className="mswiwraps relative">
            <div id="mainswiper">
               <img src="https://i.imgur.com/kA6lX5Z.jpg" alt="mainbg"></img>
               <Swiper {...swiperOptions1} id="mainswipers">
                {
                    slcon.map((maps)=>(<SwiperSlide ><div style={{backgroundColor: `${maps.backside}`}}><img src={maps.swiper1img} alt={`slidenum ${maps.swipernum}`}></img></div></SwiperSlide>))
                }
               </Swiper>
               <div className="textwrap">
                <h2>프리맥스는 편안한 직장인들의<br/>
                    출퇴근 시간을 위해 언제나 노력하고 있습니다<br/>
                    항상 버스 기사님들의 무운을 빕니다.</h2>
                <p>고통에 지칠 직장인 분들을 위한 VIP 혜택도 제공합니다.</p>
                <div><img src="/images/freemaxes.svg" alt="freemaxes" /></div>
               </div>
            </div>
                <div className="newssec flex">
                    <h2>NEWSROOM</h2>
                    <Swiper {...swiperOptions2} id="newsswiper">
                        {
                            newscon.map((news)=>(<SwiperSlide><div>{news.newssubject}</div></SwiperSlide>))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Slider;