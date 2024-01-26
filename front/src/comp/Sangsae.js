import React, { useState, useEffect } from 'react';
import Pro from '../Data/Product.json';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {Swiper, SwiperSlide} from 'swiper/react';

import Scrollspy from 'react-scrollspy';
import e from 'cors';

const Sangsaewrap = styled.div`
    width: 65%;
    margin: 0 auto;
    padding-top: 50px;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

const Swwrap = styled.div`
    /* height: 600px; */
    @media (max-width: 1000px) {
        width: 100% !important;
    }
    >.image-wrapper {
        flex-direction: row-reverse;
        height: 90%;
        gap: 25px;
        justify-content: space-between;
        @media (max-width: 1300px) {
            flex-direction: column-reverse;
            justify-content: start;
        }
        @media (max-width: 1000px) {
            align-items: center;
        }
        > div.photo {
            width: 95%;
            background-color:rgb(246, 248, 251);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            > img {
                width: 70%;
                height: 70%;
                object-fit: contain;
            }
        }
        > ul {
            width: 50%;
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 15px;
            @media (max-width: 1300px) {
                flex-direction: row;
                gap: 15px;
                justify-content: space-between;
                width: 80%;
            }
            > li {
                &.act {
                    border: 1px solid black;
                }
                width: 100px;
                height: 100px;
                background-color:rgb(246, 248, 251);
                display: flex;
                justify-content: center;
                align-items: center;
                
                
               > img { width: 70%;
                height: 70%;
                object-fit: contain;
               }
            }
        }
    }
`;

const Twrap = styled.div`
    @media (max-width: 1000px) {
        width: 100% !important;
        text-align: center;
    }
    >div:first-child {
        font-weight: 400 !important;
    }
    >div:nth-child(2) {
        font-size: 1.3em;
    }
    >div:nth-child(3) {
        margin-top: 10px;
        display: flex;
        gap: 15px;
        @media (max-width: 1000px) {
            justify-content: center;
        }
        >span {
            display: inline-block;
            background-color:rgb(246, 248, 251);
            padding: 5px 10px;
            font-size: .8em;
        }
    }
    > div:nth-child(4) {
        margin-top: 25px;
        > span:not(.sales) {
            font-size: 1.4em;
        }
    }
    > div:nth-child(5){
        margin-top: 30px;
        span {
            font-weight: 600 !important;
        }
        > button {
            width: 100%;
            border: none;
            border-radius: 20px;
            padding: 10px 55px;
            text-align: left;
            @media (max-width: 1000px) {
                text-align: center;
            }
        }
        span:first-child {
            color: purple;
            margin-right: 5px;
        }
    }
    > div:nth-child(6) {
        padding: 20px 30px;
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 15px;
        margin-top: 50px;
        > div:first-child {
            padding-bottom: 15px;
            border-bottom: 1px solid rgba(0,0,0,.2);
            @media (max-width: 1000px) {
                text-align: left;
            }
            > h2 {
                font-size: .9em;
                display: inline-block;
                margin: 0;
                margin-right: 25px;
                font-weight: 700 !important;
                
            }
            > button {
                border: none;
                font-size: .9em;
                background-color: transparent;
                > i {
                    margin-left: 0.855em;
                }
            }
        }
        > div:last-child {
            @media (max-width: 1000px) {
                text-align: left;
            }
            > h2 {
                font-size: .9em;
                display: inline-block;
                margin: 0;
                margin-right: 25px;
                font-weight: 700 !important;
                padding-top: 15px;
                display: inline-block;
            }
            > h3 {
                display: inline-block;
                font-size: .9em;
                margin:0;
                padding: 0 7px;
            }
        }
        
    }

    > .dr {
        margin-top: 20px;
            > ul {
                list-style: none;
                padding: 0;
                margin: 0;
                background-color: white;
                /* border: 1px solid rgba(0,0,0,.2); */
                border-top: 0;
                height: 0;
                overflow: hidden;
                transition: all .4s;
                > li {
                    border-bottom: 1px solid rgba(0,0,0,.2);
                    &:last-child {
                        border-bottom: 0;
                    }
                    > button {
                        &.onon {
                            background-color: purple;
                            color: white;
                        }
                        background-color: transparent;
                        border: none;
                        padding: 10px 15px;
                        width: 100%;
                        text-align: left;

                    }
                }
            }
            > button {
                &.clicks {
                    border-radius: 15px 15px 0 0;
                    border-color: purple;
                }
                &.clicks + ul {
                    border-radius: 0 0 15px 15px;
                    height: 135px;
                    border: 1px solid rgba(0,0,0,.2);
                    border-top: 0;
                }
                width: 100%;
                background-color: white;
                padding: 10px 15px;
                text-align: left;
                border: 1px solid rgba(0,0,0,.2);
                position: relative;
                > span {
                    font-weight: 400 !important;
                    font-size: .9em;
                }
                > i {
                    position: absolute;
                    right: 15px;
                }
            }
        }
        > div:nth-child(8) {
            display: none;
            background-color: rgb(246, 248, 251);
            margin-top: 20px;
            padding: 15px;
            > div:first-child {
                display:flex;
                justify-content:space-between;
                align-items: center;
                > button {
                    border: none;
                    background-color: transparent;
                    > span {
                        display: block;
                        text-indent: -9999em;
                        width: 0;
                        height: 0;
                    }
                }
            }
            > div:nth-child(2) {
                background-color: white;
                border: 1px solid rgba(0,0,0,.2);
                margin-top: 15px;
                width: 100px;
                display: inline-flex;
                justify-content: space-between;
                align-items: center;
                gap: 15px;
                > button {
                    background-color: transparent;
                    border: none;
                    &.out {
                        opacity: .3;
                    }
                }
            }
            > div:last-child {
                display: inline-block;
                margin-left: 420px;
            }
        }

        > div:nth-child(9) {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            > span:last-child {
                font-size: 1.3em;
                color: purple;
            }
        }
        > div:nth-child(10) {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            > button {
                width: 45%;
                border: none;
                height: 50px;
                opacity: .4;
            }
            > button:first-child {
                background-color: transparent;
                border: 1px solid rgba(0,0,0,.4);
            }
            > button.ok {
                opacity: 1;
            }
        }
 `;

 const Infowrap = styled.div`
    margin-top: 35px;
    width: 84%;
    border: 1px solid rgba(0,0,0,.2);
    @media (max-width: 1000px) {
        margin: 0 auto;
        margin-top: 30px;
        margin-bottom: 50px;
    }
    > p {
        padding: 10px 15px;
        margin: 0;
        font-weight: 400 !important;
        font-size: 0.85em;
    }
    > p:first-child {
        border-bottom: 1px solid rgba(0,0,0,.2);
    }
    > p:last-child {
        background-color: rgb(247, 243, 255);
        color: black;
    }
 `;

 const Tabwrap = styled.div`
    margin-top: 100px;
 `;

 const Hightap = styled.div`
    background-color: rgb(246, 248, 251);
    padding : 0 17.5%;
    position: sticky;
    top: 0;
    z-index: 100000;
    @media (max-width: 1000px) {
        display: none;
    }
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
         li {
            > a {
                &.actor {
                    text-decoration: underline;
                    color: purple;
                }
                background-color: transparent;
                border: none;
                padding: 15px 50px;
                display: block;
                color: black;
                text-decoration: none;
            }
        }
    }
 `;

 const Tapcon = styled.div`
    margin: 0 auto;
    width: 65%;
    display: flex;
    @media (max-width: 1000px) {
        flex-wrap: wrap;
    }
    > div:first-child {
        width: 60%;
        border-right: 1px solid rgba(0,0,0,.2);
        padding-right: 60px;
        @media (max-width: 1000px) {
            width: 100%;
            border: 1px solid rgba(0,0,0,.2);
            padding: 0 60px;
        }
        .pr {
        > h2 {
            margin-top: 50px;
            font-size: 1.35em;
            margin-bottom: 30px;
        }
        >.imgsect {
            > img {
                width: 100%;
            }
        }
        > button {
            width: 100%;
            margin-top: 20px;
            height: 40px;
            border: 1px solid rgba(0,0,0,.2);
            border-radius: 15px;
            margin-bottom: 100px;
        }
         }
        .ch {
            > h2 {
                font-size: 1.35em;
                padding-bottom: 30px;
                border-bottom: 1px solid rgba(0,0,0,.2);
                margin: 0;
                @media (max-width: 1000px) {
                    border: none;
                }
                > span {
                    margin-left: 5px;
                    color: purple;
                }
            }
            > .reviewcon {
                border-bottom: 1px solid rgba(0,0,0,.2);
                margin-bottom: 30px;
                @media (max-width: 1000px) {
                    border: none;
                }
                > div:first-child {
                    width: 30%;
                    padding: 15px;
                    border-right: 1px solid rgba(0,0,0,.2);
                    @media (max-width: 1000px) {
                        border: 1px solid rgba(0,0,0,.2);
                    }
                    > h2 {
                        font-size: 1.25em;
                        padding-bottom: 20px;
                        margin: 0;
                    }
                    > div {
                        margin-top: 30px;
                        margin-left: 10px;
                        > .star {
                            display: flex;
                            > span {
                                display: block;
                                width: 50px;
                                height: 50px;
                                > img {
                                    width: 100%;
                                    height: 100%;
                                    object-fit: contain;
                                }
                            }
                        }

                     > div.num {
                        text-align: center;
                        font-size: 1.4em;
                    }
                    }
                    
                }
                > div:last-child {
                    width: 100%;
                    @media (max-width: 1000px) {
                        border: 1px solid rgba(0,0,0,.2);
                        border-left: 0;
                    }
                    > h2 {
                        font-size: 1.25em;
                        margin: 0;
                        padding: 15px;
                        padding-bottom: 20px;
                    }
                    ul.percent {
                        margin: 0;
                        padding: 0;
                        padding-left: 15px;
                        list-style: none;
                        > li {
                            position: relative;
                            background-color: rgb(246, 248, 251);
                            padding: 20px 30px;
                            margin-bottom: 20px;
                            border-radius: 15px;
                            z-index: 10;
                            overflow: hidden;
                            > div {
                                position: absolute;
                            }
                            > div:first-child {
                                width: 61%;
                                height: 100%;
                                background: rgb(218, 199, 255);
                                left: 0;
                                top: 0;
                                border-radius: 15px;
                            }
                            > div:nth-child(2) {
                                left: 25px;
                                top: 50%;
                                transform: translateY(-50%);
                            }
                            > div:last-child {
                                right: 25px;
                                top: 50%;
                                transform: translateY(-50%);
                            }
                        }
                        }
                        
                    }
                }
            }
    }
  > div:last-child {
        width: 35%;
        border-right: 1px solid rgba(0,0,0,.2);
        padding: 30px 45px;
        @media (max-width: 1000px) {
            width: 100%;
            border: 1px solid rgba(0,0,0,.2);
            border-top: 0;
        }
        > div {
            position: sticky;
            top: 84px;
            > .newdrop {
            position: relative;
            > button {
                width: 100%;
                border: 1px solid rgba(0,0,0,.2);
                height: 40px;
                border-radius: 10px;
                text-align: left;
                padding: 10px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: white;
                @media (max-width: 1100px) {
                    justify-content: center;
                }
                @media (max-width: 1000px) {
                    display: none;
                }
                > span {
                    font-size: 0.95em;
                }
                > i {
                    @media (max-width: 1100px) {
                        display: none;
                    }
                }
                &.clicksss {
                    border-radius: 15px 15px 0 0;
                    border-bottom: 0;
                    border: 1px solid purple;
                }
                &.clicksss + ul {
                    height: 135px;
                    border: 1px solid rgba(0,0,0,.2);
                }
            }
            > ul {
                position: absolute;
                list-style: none;
                padding: 0;
                margin: 0;
                width: 100%;
                top: 100%;
                left: 0;
                z-index: 100000;
                /* border: 1px solid rgba(0,0,0,.2); */
                background-color: white;
                border-top: 0;
                height: 0;
                overflow: hidden;
                transition: all .4s;
                > li {
                    > button {
                        background-color: transparent;
                        border: none;
                        padding: 10px 25px;
                        width: 100%;
                        text-align: left;
                        &.ononon {
                            background-color: rgba(77,96,233,1);
                            color: white;
                        }
                    }
                }
            }
        }
        > div:nth-child(2) {
            margin-top: 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            & span:first-child {
                font-weight: 700 !important;
            }
            & span:last-child {
                font-size: 1.3em;
                color: purple
            }
        }
        > div:last-child {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 30px;
            @media (max-width: 1300px) {
                flex-direction: column;
                gap: 15px;
            }
            & button {
                width: 45%;
                height: 40px;
                border: 1px solid rgba(0,0,0,.4);
                background-color: white;
                opacity: .3;
                @media (max-width: 1300px) {
                    width: 100%;
                }
            }
            & button.oks {
                opacity: 1;
            }
        }
        }
        
  }
 `;

 const Wraps = styled.div`

 `

const Sangsae = ({whats,numb}) => {
    useEffect(()=>{
        AOS.init();
    },[])

    const [img,setimg] = useState(0);
    const [size,setsize] = useState('사이즈 정하기');
    const [clicked,setclicked] = useState(false);
    const [twoclicked,settwoclicked] = useState(false);
    const [clicknum,setclicknum] = useState(null);
    const [boxopen,setboxopen] = useState(false);
    const [buynum,setbuynum] = useState(0);
    const [buttonnum,setbuttonnum] = useState(1);
    const [buttoncon,setbuttoncon] = useState('상세정보 펼치기');
    const [buttoncontrol,setbuttoncontrol] = useState(false);
    const [isScrolled,setisscrolled]= useState(false);

    const coffeesize = ['150','200','300'];

    const imagefirst = whats[numb].coffeesangsae.slice(0,buttonnum);

    console.log(imagefirst);

    return (
       <Wraps>
        <Sangsaewrap className="d-flex">
         <Swwrap className="col-6">
           <div className="image-wrapper d-flex">
            <ul>
                {
                    whats[numb].coffeeimages.map((셋,넷)=>{
                        return(
                            <li onClick={()=>{setimg(넷);}} className={img === 넷? 'act': ''}>
                                <img src={셋} alt=".."></img>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="photo">
                <img src={whats[numb].coffeeimages[img]} alt="d" />
            </div>
           </div>
           <Infowrap>
                <p>이 제품은 식품법에 위반되지 않나요?</p>
                <p>그렇지 않습니다!</p>
           </Infowrap>
         </Swwrap>
         <Twrap className="col-6">
            <div>{whats[numb].coffeecompany}</div>
            <div>{whats[numb].coffeeinames}</div>
            <div>{
                whats[numb].coffeehash.split(' ').map((다섯,여섯)=>{
                    return(
                        <span>{다섯}</span>
                    )
                })
                }</div>
            <div>
                {whats[numb].coffeeissale === "false" && <span className="sales">{Math.floor(((parseInt(whats[numb].coffeeprice)-parseInt(whats[numb].coffeeissale))/parseInt(whats[numb].coffeeprice))*100)}%</span>}
                <span>{Intl.NumberFormat('ko-kr').format(whats[numb].coffeeprice)}원</span>
            </div>
            <div>
                <button><span>7천원</span><span>쿠폰팩 받고 구매하기</span></button>
            </div>
            <div>
                <div>
                    <h2>카드 할인</h2>
                    <button><span>무이자 혜택 보기</span><i class="bi bi-chevron-right"></i></button>
                </div>
                <div>
                    <h2>일반 배송</h2>
                    <h3>무료 배송</h3>
                </div>
            </div>
            <div className="dr">
                <button onClick={()=>{setclicked(!clicked)}} className={clicked ? 'clicks': ''}><span>{size}</span><i class="bi bi-chevron-down"></i></button>
                <ul>
                    {
                        coffeesize.map((일곱,여덟)=>{
                            return(<li><button onClick={()=>{ setclicknum(여덟); setsize(일곱); setclicked(false); setboxopen(true); setbuynum(1);}} className={clicknum == 여덟 ? 'onon': ''}>{일곱}</button></li>)
                        })
                    }
                </ul>
            </div>
            <div className={boxopen? 'd-block' : ''}>
                <div>
                <span>{size}</span>
                <button onClick={()=>{ setboxopen(false); setbuynum(0); setsize('사이즈 정하기');}}><span>닫기</span><i class="bi bi-x-lg"></i></button>
                </div>
                <div>
                    <button className={buynum === 0 ? 'out': ''} onClick={(e)=>{ if(buynum === 0) e.preventDefault(); if(buynum > 0) setbuynum(buynum -1);}}>-</button>
                    <span>{buynum}</span>
                    <button onClick={()=>{setbuynum(buynum+1)}}>+</button>
                </div>
                <div>{whats[numb].coffeeprice * buynum}</div>
            </div>
            <div>
                <span>주문금액</span>
                <span>{whats[numb].coffeeprice * buynum}</span>
            </div>
            <div>
                <button className={buynum >= 1 ? 'ok': ''}>장바구니</button>
                <button className={buynum >= 1 ? 'ok': ''}>구매하기</button>
            </div>
         </Twrap>
        </Sangsaewrap>
        <Tabwrap>
           <Hightap> 
            <ul>
            <Scrollspy
        items={['#pr','#ch']}
        currentClassName="active"
        offset={-100} // 스크롤 위치와 매칭할 때 얼마나 간격을 둘 것인지
        >
            <li><a href="#pr">상품정보</a></li>
                <li><a href="#ch">리뷰</a></li>
              </Scrollspy>
                
             </ul>
      
             
           </Hightap>
           <Tapcon>
                <div>
                  <div className="pr" id="pr">
                    <h2>상품정보</h2>
                    <div className="imgsect">
                        {imagefirst.map((e,ii)=>{
                            return(
                                <img src={e} alt="dd"></img>
                            )
                        })}
                    </div>
                  <button onClick={() => {
                        setbuttoncontrol(!buttoncontrol);
                        if (!buttoncontrol) {
                            setbuttoncon('상세이미지 줄이기');
                            setbuttonnum(3);
                        } else {
                            setbuttoncon('상세정보 펼치기');
                            setbuttonnum(1);
                        }
                        }}>
                        {buttoncon}
                  </button>
                  </div>
                  <div className="ch" id="ch">
                    <h2>리뷰<span>{whats[numb].coffeereview.length}</span></h2>
                    <div className="reviewcon d-flex">
                        <div>
                            <h2>만족도</h2>
                            <div>
                                <div className="star">
                                    {
                                        whats[numb].coffeereview[0].star.map((ee,ii)=>{
                                            return(
                                                <span><img src={ee} alt="dd"></img></span>
                                            )
                                        })
                                    }
                                </div>
                                <div className="num">{whats[numb].coffeereview[0].star.length}</div>
                            </div>
                        </div>
                        <div>
                            <h2>이런 점이 좋아요.</h2>
                            <ul className="percent">
                                <li>
                                    <div className="box"></div>
                                    <div>잘 닦여요</div>
                                    <div>61%</div>
                                </li>
                                <li>
                                     <div className="box"></div>
                                    <div>잘 닦여요</div>
                                    <div>61%</div>  
                                </li>
                                <li>
                                    <div className="box"></div>
                                    <div>잘 닦여요</div>
                                    <div>61%</div>
                                </li>
                                <li>
                                    <div className="box"></div>
                                    <div>잘 닦여요</div>
                                    <div>61%</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                  </div>
                </div>
                <div>
                    <div>
                    <div className="newdrop">
                        <button onClick={()=>{settwoclicked(!twoclicked)}} className={twoclicked ? 'clicksss': ''}><span>{size}</span><i class="bi bi-chevron-down"></i></button>
                        <ul>
                        {
                        coffeesize.map((f,k)=>{
                            return(<li><button onClick={()=>{ setclicknum(k); setsize(f); settwoclicked(false); setboxopen(true); setbuynum(1);}} className={clicknum === k ? 'ononon': ''}>{f}</button></li>)
                        })
                        }
                        </ul>
                    </div>
                    <div data-aos="fade-up">
                        <span>주문금액</span>
                        <span>{whats[numb].coffeeprice * buynum}원</span>
                    </div>
                    <div data-aos="fade-up">
                        <button className={buynum >= 1 ? 'oks': ''}>장바구니</button>
                        <button className={buynum >= 1 ? 'oks': ''}>구매하기</button>
                    </div>             
                    </div>
                </div>
           </Tapcon>
        </Tabwrap>
      </Wraps>
    
    );
            }
export default Sangsae;