import * as React from 'react';
import { useState,useEffect } from 'react';

import '../../scss/Store.scss';
import Cafe from '../../Data/Cafestore.json';
import Fassion from '../../Data/Fassionstore.json';

import { Swiper,SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Store = () => {
    type stab = {
        storetabon: boolean,
        storetabidx: number
    }
    
    const [storetab,setstoretab] = useState<stab>(
        {
            storetabon: false,
            storetabidx: 0
        }
    )

    useEffect(()=>{
        const tabbutton = document.querySelectorAll('.storetabs ul li button');
        const swiperon = document.querySelectorAll('.storecon .swiper-container');
        tabbutton.forEach((ele,idx)=>{
            ele.addEventListener('click',()=>{
                tabbutton.forEach((eles)=>{
                    eles.classList.remove('storeon');
                })
                swiperon.forEach((eee)=>{
                    eee.classList.remove('swiperon');
                })
                setstoretab({storetabon:true,storetabidx:idx});
                if(storetab.storetabon && storetab.storetabidx === idx) {
                    tabbutton[idx].classList.add('storeon');
                    swiperon[idx].classList.add('swiperon');
                }
            })
            
            
        })
    },[storetab]);

    return (
        <div className="stores">
            <div className="mx-auto max-w-screen-xl">
                <h2>스토어 아이템들</h2>
                <p>등록된 스토어에서 판매되는 아이템들을 소개합니다.</p>
                <div className="storetabs">
                    <ul className="flex">
                        <li><button>카페 스토어</button></li>
                        <li><button>패션 스토어</button></li>
                        <li><button>여행거리 스토어</button></li>
                    </ul>
                </div>
                <div className="storecon">
                    <Swiper slidesPerView={4} spaceBetween={30} navigation={true} id="cafeswiper">
                        {
                            Cafe.map((cafes,cafeidx)=>(
                                <SwiperSlide>
                                    <button>
                                    <div className="numbers">{cafeidx+1}</div>
                                    <div className="imgpart"><img src={cafes.product_path} alt="cafe" /></div>
                                    <div className="textpart">
                                        <div className="cafename">{cafes.product_name}</div>
                                        <div className="price">
                                            <div>{Intl.NumberFormat().format(cafes.product_isSale ? cafes.product_sale : cafes.product_price)}원</div>
                                            {cafes.product_isSale && <div>{Math.floor((cafes.product_price - cafes.product_sale )/ (cafes.product_price) * 100)}%</div>}
                                        </div>
                                    </div>
                                    </button>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <Swiper id="fassionswiper" slidesPerView={4} spaceBetween={30}>
                        {
                            Fassion.map((fassion)=>(
                                <SwiperSlide>
                                    <button>
                                        <div className="imgpart">
                                            {
                                                fassion.fassion_path.substring(1,fassion.fassion_path.length - 1).split(',').map((splls)=>(
                                                    <img src={splls} alt="two"></img>
                                                ))
                                            }
                                        </div>
                                        <div className="textpart">
                                            <div className="fassionname">{fassion.fassion_name}</div>
                                            <div className="price">
                                                <div>{Intl.NumberFormat().format(fassion.fassion_isSale ? fassion.fassion_sale : fassion.fassion_price)} 원</div>
                                                <div>{Math.floor((fassion.fassion_price - fassion.fassion_sale )/ (fassion.fassion_price) * 100)}%</div>
                                            </div>
                                        </div>
                                    </button>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Store;