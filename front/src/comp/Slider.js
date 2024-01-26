import React, { useState, useEffect } from 'react';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,EffectFade, Navigation,Pagination } from 'swiper';
import { Link } from 'react-router-dom';
import slcon from '../Data/slider.json';
import newscon from '../Data/news.json';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/components/autoplay';

import '../scss/slider.scss';

SwiperCore.use([Autoplay,EffectFade,Navigation,Pagination]);



const Slider = () => {
    const [swiperindex,setswiperindex] = useState(null);

    useEffect(()=>{
            document.querySelectorAll('.swiperimg img')[0].classList.add('blocks');
            document.querySelectorAll('.swiperimg img').forEach((ele,idx)=>{
                if(swiperindex === idx) {
                    document.querySelectorAll('.swiperimg img').forEach((eles)=>{eles.classList.remove('blocks')})
                    document.querySelectorAll('.swiperimg img')[idx].classList.add('blocks');
                }
            })
    })

    const swiperOptions1 = {
       /*  autoplay: {
          delay: 5000, // 원하는 autoplay 딜레이 설정
          disableOnInteraction: false, // 사용자 상호 작용 시 자동 재생 비활성화 여부
        }, */
        navigation: false, // 네비게이션 활성화
        mousewheel: false, // 마우스 스와이프 비활성화
        pagination : {
            clickable: true,
        }
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
            <div className="swiperimg">
                {
                    slcon.map((slcontrol)=>(<img src={slcontrol.swiper1img} alt="swiper1img"></img>))
                }
            </div>
            <div className="mswiwraps relative">
            <Swiper id="mainswiper" {...swiperOptions1} onSlideChange = { (swiper)=>{setswiperindex(swiper.realIndex)}} >
                {
                    slcon.map((swipers)=>(<SwiperSlide>
                                            
                                            <img src={swipers.swiper1img} alt="메인이미지"></img>
                                            <div className="txtwrap">
                                                <div className="logocom flex items-center">
                                                    <img src={swipers.mylogo} alt="내로고" />
                                                    <span>X</span>
                                                    <img src={swipers.otherlogo} alt="상대로고" />
                                                </div>
                                                <h2>{swipers.subject}</h2>
                                                <div className="first">{swipers.slidetext.split('/').map((sp)=>(<span>{sp}</span>))}</div>
                                                <div className="second">{swipers.slidetext2.split('/').map((two)=>(<span>{two}</span>))}</div>
                                                <div className="buttonwraps flex items-center"><h2>자세히 보기</h2><button><span className="sr-only">자세히 보기</span><img src="https://i.imgur.com/5P7Ye6q.png" alt="자세히 보기" /></button></div>
                                            </div>
                                          </SwiperSlide>))
                }
            </Swiper>
                <div className="newssec flex">
                    <h2>NEWSROOM</h2>
                    <Swiper {...swiperOptions2} id="newsswiper">
                        {
                            newscon.map((news)=>(<SwiperSlide><div>{news.newssubject}</div></SwiperSlide>))
                        }
                    </Swiper>
                </div>
                <div className="scrollwrap text-white">
                    <h2>SCROLL DOWN</h2>
                    <div className="mouse"></div>
                </div>
            </div>
        </div>
    );
};

export default Slider;