import React , { useState,useEffect } from 'react';
import styled from 'styled-components';
import Travel from '../Data/Trips.json';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';

import { Swiper, SwiperSlide } from 'swiper/react';




const Wrs = styled.div`
    width: 100%;
`

const Trapinfo = styled.div`
    max-width: 80%;
    margin: 0 auto;
`;

const Imaging = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
    height: 500px;
    margin-top: 50px;
    margin-bottom: 20px;
    > button {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 1000000;
        margin-bottom: 20px;
        margin-right: 20px;
        border: none;
        padding: 10px 30px;
        border-radius: 30px;
        box-shadow: 0 0 0 10px rgba(0,0,0,.5);
        display: flex;
        &:hover {
            background-color: white;
        }
        > span {
            margin-right: 10px;
        }
    }
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    > div:first-of-type{
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    > div:nth-of-type(2) {
        position: absolute;
        width: 24%;
        height: 49%;
        top: 0;
        left: 50%;
        margin-left: 1%;
    }
    > div:nth-of-type(3) {
        position: absolute;
        width: 24%;
        height: 49%;
        top: 0;
        right: 0;
    }
    > div:nth-of-type(4) {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 24%;
        height: 49%;
        margin-left: 1%;
        margin-top: 1%;

    }
    > div:nth-of-type(5) {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 24%;
        height: 49%;
    }
`;

const Trapcon = styled.div`
    width: 100%;
    > .text {
        color: var(--bs-gray-800);
        font-size: 1.1em;
        > div:nth-child(2) {
            font-size: 1.5em;
        }
        > div:nth-child(3) {
            margin-top: 20px;
            font-size: 12px;
            color: var(--bs-blue);
            background-color: var(--bs-primary-bg-subtle);
            display: inline-block;
            padding: 2px 5px;
        }
        > div:nth-child(4) {
            margin-top: 20px;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            > div:first-of-type {
                width: 20px;
                height: 20px;
                > img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    margin-right: 10px;
                }
            }
            > div:nth-of-type(2) {
                font-size: 0.9em;
                margin-left: 10px;
            }
            > div:nth-of-type(3) {
                margin-left: 10px;
                font-size: 0.9em;
                opacity: .5;
            }
            > a {
                margin-left: 10px;
                font-size: 0.9em;
                text-decoration: none;
            }
        }
        > div.reviewswiper {
            padding-bottom: 30px;
            border-bottom: 1px solid rgba(0,0,0,.2);
            .reviewslide {
                width: 60%;
                padding: 20px 22px 20px 20px;
                background-color: rgb(250,250,250);
                border-radius: 20px;
                text-align: right;
                > div:first-child {
                    font-size: 0.8em;
                    text-align: right;
                    opacity: .5;
                    font-weight: 400 !important;
                }
                > div:nth-child(2) {
                    font-size: 0.85em;
                    padding-top: 15px;
                }
                > div:last-child {
                    font-size: 0.55em;
                    opacity: .5;
                }
            }
        }
        > div:nth-child(6) {
            > h2 {
                text-align: center;
                font-size: 1.3em;
                padding-top: 30px;
                padding-bottom: 50px;
            }
            > .pictureinfo {
                width: 80%;
                margin: 0 auto;
                text-align: center;
                > div {
                    position: relative;
                    height: 350px;
                    margin-bottom: 20px;
                    > img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        position: absolute;
                        top: 0;
                        left: 0;
                    }
                    > span {
                        color: white;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        padding: 30px;
                        font-weight: 400 !important;
                    }
                }
            }
        }
    }
    > .maper {
        > .mapwrap {
            width: 90%;
            height: 200px;
            margin-left: 30px;
            border-radius: 20px;
            overflow: hidden;
            position: relative;
            border: 1px solid rgba(235,235,235,.5);
            margin-bottom: 15px;
            > div:last-child {
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
                z-index: 10000000;
                padding: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: white;
                border-top: 1px solid rgba(235,235,235,.5);
                > span {
                    font-size: 0.9em;
                    opacity: .3;
                    font-weight: 400 !important;
                    display: inline-block;
                    width: 60%;
                }
                > button {
                    border: none;
                    background-color: transparent;
                    font-size: .7em;
                    color:rgb(18 115 228);
                }
            }
        }
        > .coupon {
            border-radius: 20px;
            border: 1px solid rgba(235,235,235,.5);
            overflow: hidden;
            margin-left: 30px;
            padding: 15px 10px;
            border-radius: 15px;
            position: sticky;
            top: 0;
            > div:first-child {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-bottom: 15px;
                border-bottom: 1px solid rgba(0,0,0,.2);
                > h2 {
                    font-size: 0.9em;
                    > span {
                        color: red;
                    }
                }
                > button {
                    border: none;
                    background-color: rgb(18 115 228);
                    color: white;
                    font-size: 0.75em;
                    padding: 5px 15px;
                    > i {
                        margin-left: 0.5em;
                    }
                }
            }
            > div.smallswiper {
                width: 100%;
                margin: 0 auto;
                margin-top: 30px;
                height: 100px;
                margin-bottom: 30px;
                border-bottom: 1px solid rgba(0,0,0,.2);
                .smallslide {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    > img {
                        width: 100%;
                        height: 60%;
                        object-fit: cover;
                        position: absolute;
                        left: 0;
                        top: 0;
                        border-radius: 20px;
                        overflow: hidden;
                    }
                }
            }
            > div.goodover {
                margin-bottom: 30px;
                > div:first-child {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    > h2 {
                        font-size: 1.1em;
                        margin: 0;
                    }
                    > button {
                        background-color: transparent;
                        border: none;
                        color: rgb(18 115 228);
                        > span {
                            font-size: 0.9em;
                            margin-right: 0.85em;
                        }
                    }
                }
                > div:nth-child(2) {
                    margin-top: 25px;
                    > h2 {
                        font-size: .9em;
                    }
                    > ul {
                        margin: 0;
                        padding: 0;
                        margin-left: 15px;
                        > li {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        margin-bottom: 10px;
                        font-size: 0.85em;
                        font-weight: 400 !important;
                    }
                    }
                    
                }
            }

        }
        
    }
`;

const Navig = styled.nav`
    padding: 0 10%;
    background-color: white;
    border-bottom: 1px solid rgba(0,0,0,.2);
    position: sticky;
    top: 90px;
    z-index: 1;
    > ul {
        list-style: none;
        padding: 0;
        margin: 0;
        > li > a {
            text-decoration: none;
            color: rgba(0,0,0,.6);
            padding: 20px 30px;
            display: block;
        }
    }
    > button {
        border: none;
        background-color: rgb(18 115 228);
        color: white;
        padding: 10px 30px;
        border-radius: 8px;
    }
`;

const Moreimage = styled.div`
    display: none;
    position: fixed;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
    z-index: 100000000010;
    padding: 10px;
    > h2 {
        text-align: center;
        font-size: 1.1em;
        padding-bottom: 50px;
    }
    > ul {
        padding: 0;
        margin: 0;
        list-style: none;
        > li > a {
            display: inline-block;
            color: #007aff;
            text-decoration: none;
            padding: 0 20px;
            border-bottom: 3px solid#007aff;;
            padding-bottom: 10px;
        }
    }
    > .swipergroup {
        width: 100%;
        > .imgswi1 {
            height: 300px;
            & .swiper-button-prev,
            & .swiper-button-next {
                background-color: white;
                width:  40px !important;
                height: 40px !important;
                border-radius: 50%;
                box-shadow: 0 0 5px 2px rgba(0,0,0,.1);
            }

            & .swiper-button-prev::after,
            & .swiper-button-next::after {
                color: black;
                font-size: 0.8em;
            }
            & .swiper-slide {
                width: 100% !important;
                background-color: rgb(245,247,250);
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    } 
`;

const TravelingInfo = () => {
    const [menuon,setmenuon] = useState(false);

    useEffect(()=>{
        document.querySelector('.new').addEventListener('click',()=>{
            document.body.classList.add('dim');
        })
    },[])

    return (
        <Wrs>
        <Navig className="d-flex justify-content-between align-items-center">
           <ul className="d-flex justify-content-start align-items-center">
            <li><a href="#">개요</a></li>
            <li><a href="#">시설</a></li>
            <li><a href="#">리뷰</a></li>
           </ul>
           <button>신청하기</button>
        </Navig>
        <Trapinfo>
            <Moreimage className={menuon ? 'd-block': ''}>
              <h2>{Travel[0].태마명}</h2>
              <ul>
                <li><a href="#">전체</a></li>
              </ul>
              <div className="swipergroup">
                <Swiper className="imgswi1">
                    {
                        Travel[0].썸네일.map((스,와)=>{
                            return(
                                <SwiperSlide >
                                    <img src={스} alt="스와이퍼"></img>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
              </div>
            </Moreimage>
            <Imaging>
                <button className="new" onClick={()=>{setmenuon(!menuon);}}><span>사진 더보기</span>
                <MonochromePhotosIcon />
                </button>
                {
                  Travel[0].썸네일.splice(0,5).map((elss,ifss)=>{
                    return(
                        <>
                        <div><img src={elss} alt="s" />
                        </div>
                        </>
                    )
                  })
                }
            </Imaging>
            <Trapcon className="d-flex">
                <div className="text col-8">
                    <div><span>{Travel[0].계절}과 관련된 여행 테마</span></div>
                    <div>{Travel[0].태마명}</div>
                    <div>반짝특가</div>
                    <div className="d-flex">
                        <div><img src="https://i.imgur.com/H6OZ2lF.png" alt="star" /></div>
                        <div>9.9</div>
                        <div>107명 평가</div>
                        <a href="#">리뷰보기</a>
                    </div>
                    <Swiper slidesPerView={'auto'} spaceBetween={30} className="reviewswiper">
                        {
                            Travel[0].리뷰.map((첫,둘)=>{
                                return(
                                    <SwiperSlide className="reviewslide">
                                        <div>{첫.리뷰내용}</div>
                                        <div>{첫.유저아이디}</div>
                                        <div>{첫.날짜}</div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <div>
                        <h2>{Travel[0].태마명}</h2>
                        <div className="pictureinfo">
                            {
                                Travel[0].시설.map((셋,넷)=>{
                                    return(
                                        <div><img src={셋.시설이미지} alt="시설" />
                                             <span>{셋.설명}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
                <div className="maper col-4">
                    <div className="mapwrap">
                        <Map center={{lat: Travel[0].위도, lng: Travel[0].경도}}
                        style ={{width: '100%', height:'100%', objectFit: 'cover'}}
                        level={3}>
                            <MapMarker position = {{ lat: Travel[0].위도, lng: Travel[0].경도}}></MapMarker>
                        </Map>
                        <div>
                            <span>
                            {
                                Travel[0].주소
                            }
                            </span>
                            <button>주소복사</button>
                        </div>
                    </div>
                    <div className="coupon">
                        <div>
                            <h2>최대 <span>3%</span> 할인</h2>
                            <button><span>쿠폰받기</span><i class="bi bi-download"></i></button>
                        </div>
                        <Swiper className="smallswiper">
                            <SwiperSlide className="smallslide">
                                <img src="https://i.imgur.com/67KJlOG.jpg" alt="https://i.imgur.com/67KJlOG.jpg" />
                            </SwiperSlide>
                            <SwiperSlide className="smallslide">
                                <img src="https://i.imgur.com/67KJlOG.jpg" alt="https://i.imgur.com/67KJlOG.jpg" />
                            </SwiperSlide>
                            <SwiperSlide className="smallslide">
                                <img src="https://i.imgur.com/67KJlOG.jpg" alt="https://i.imgur.com/67KJlOG.jpg" />
                            </SwiperSlide>
                        </Swiper>
                        <div className="goodover">
                        <div>
                            <h2>결제혜택</h2>
                            <button><span>더보기</span><i class="bi bi-chevron-right"></i></button>
                        </div>
                        <div>
                            <h2>토스페이</h2>
                            <ul>
                                <li>3만원 이상 10% 최대 1만원 할인 오전 10시에 하던지 말던지</li>
                                <li>3만원 이상 10% 최대 1만원 할인 오전 10시에 하던지 말던지</li>
                                <li>3만원 이상 10% 최대 1만원 할인 오전 10시에 하던지 말던지</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className="review col-12">
                    
                </div>
            </Trapcon>
        </Trapinfo>
        </Wrs>
        
    );
};

export default TravelingInfo;