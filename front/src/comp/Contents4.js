import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Data from '../Data/Data.json';

import { Swiper, SwiperSlide } from 'swiper/react';


const Listbar = styled.div`
    width: 60%;
    margin: 0 auto;
    position: relative;
    > h2 {
        font-size: 1.5em;
        padding-top: 50px;
    }
    > p {
        font-size: .9em;
        font-weight: 200 !important;
        padding-top: 20px;
        padding-bottom: 30px;
        margin: 0;
    }

    & .productswiper {
        height: 450px;
        > div.swiper-wrapper {
            gap: 5px;
            height: 100%;
            align-items: center;
            justify-content: center;
           
        }
        > .swiper-button-prev,
        > .swiper-button-next {
                top: 50% !important;
            }
        > .swiper-button-prev {
            left: 0;
        }
        > .swiper-button-next {
            right: 0;
        }
        > .swiper-button-next::after,
        > .swiper-button-prev::after {
            font-size: 20px;
            color: #333333;
        }
        & .productslide {
            height: 90%;
            
            box-shadow: 0px 0px 7px rgba(0,0,0,0.07);
            > div:first-child {
                width: 100%;
                height: 60%;
                > img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }
    }
`;

const Description = styled.div`
    height: 40%;
    padding: 20px 10px;
    > div:first-child {
        text-align: center;
        font-weight: 400 !important;
        font-size: 1.15em;
    }
    > div:nth-child(2) {
        font-size: 0.75em;
        text-align: center;
        padding-top: 10px;
        color: #aaaaaa;
    }
    > div:nth-child(3) {
        text-align: center;
        padding-top: 10px;
    }
    > div.heart {
        text-align: center;
        padding-top: 5px;
        font-size: 0.75em;
        font-weight: 400 !important;
        > span:first-child {
            padding-right: 5px;
        }
    }
`

const Tabbing = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    > ul {
        list-style: none;
        display: flex;
        padding: 0;
        margin: 0;
        > li {
            > button {
                background-color: transparent;
                border: none;
                padding: 0 50px;
                color: rgba(0,0,0,.4);
                &.btnon {
                    color: black;
                }
            }
            > button:last-child {
                padding-right: 0;
            }
        }
    }
`;


const Contents4 = () => {

    return (
        <Listbar>
          <h2>베스트 상품들</h2>
          <p>프리맥스만의 베스트 상품들을 알아보세요!</p>
          <Tabbing>
            <ul>
                <li><button className="btnon">커피 항목</button></li>
                <li><button>과자 항목</button></li>
                <li><button>핸드백 항목</button></li>
            </ul>
          </Tabbing>
          <div className="wrap">
          <Swiper>
            {
                Data[3].goods[0].coffee.map((ele,idx)=>{
                    return(
                        <SwiperSlide className="productslide">
                            <div><img src={ele.coffeeimg} alt="coffee"></img></div>
                            <Description>
                                <div>{ele.coffeeinfo}</div>
                                <div>{ele.coffeesubinfo}</div>
                                <div>{Intl.NumberFormat('ko-kr').format(ele.coffeeprice)}원</div>
                                <div className="heart"><span>💙</span><span>{ele.coffeen}</span></div>
                            </Description>
                        </SwiperSlide>
                    )
                })
            }
          </Swiper>
          </div>
        </Listbar>
    );
};

export default Contents4;