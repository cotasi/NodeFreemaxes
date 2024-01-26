import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import Company from '../Data/Company.json';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Noticepresswrap = styled.div`
    width: 60%;
    margin: 0 auto;
    > h2 {
        font-size: 1.5em;
        padding-bottom: 15px;
        border-bottom: 2px solid black;
    }
`;

const Comswap = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 550px;
    position: relative;
    margin-bottom: 40px;
    > div:first-child {
        height: 60%;
        position: absolute;
        top: 0;
        left: 0;
        > a {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        &::before {
            content: '';
            display: block;
            background-color: black;
            opacity: .1;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 13;
        }
            > img:first-child {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 12;
        }
            > img:last-child {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 150px;
                height: auto;
                display: none;
                z-index: 14;
            }
        }
        
    }
    > div:nth-child(2) {
        position: absolute;
        top: 0;
        left: 79%;
        height: 60%;
        display: flex;
        align-items: center;
        span {
            &.bulact {
                opacity: 1;
                position: relative;
                &::after {
                    content: '';
                    position: absolute;
                    left: -20px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 10px;
                    height: 10px;
                    display: block;
                    background-color: black;
                    border-radius: 50%;
                }
                &::before {
                    content: '';
                    position: absolute;
                    width: 40px;
                    height: 1px;
                    display: block;
                    background-color: black;
                    left: -50px;
                    top: 50%;
                    transform: translateY(-50%);

                }
            }
            display: block;
            text-align: left;
            font-size: 1.2em;
            opacity: .2;
            font-weight: 400 !important;
            margin-bottom: 10px;
            cursor: pointer;
        }
    }
    > div:last-child {
       margin-top: 55px;
       position: absolute;
       bottom: 0;
       right: 0;
       height: 35%;
       > .wrap {
        height: 150px;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        display: none;
        justify-content: space-between;
        > div {
            width: 18%;
            height: 100%;
            > div:first-child {
                width: 100%;
                height: 100%;
                position: relative;
                box-sizing: content-box;
                > img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            > div:nth-child(2) {
                margin-top: 10px;
                font-size: 0.85em;
                padding-left: 10px;
                font-weight: 600 !important;
            }
            > div:nth-child(3) {
                padding-left: 10px;
                font-weight: 300 !important;
                font-size: 0.85em;
            }
        }
       }
    }
;`

const Contents5 = () => {

    useEffect(()=>{
        AOS.init({

        },2000);
    },[])

    const [bullet,setbullet] = useState(0);

    useEffect(()=>{
     const interval =  setInterval(()=>{
            setbullet((bullet + 1) % 5);
        },4000)

        return () => {
            clearInterval(interval);
        }
    },[bullet])

    return (
        <Noticepresswrap>
            <h2>협업기업</h2>
            <Comswap>
                <div className="col-9">
                    
                    {
                        Company.map((el,ii)=>{
                            return(
                                <a href="#none" onClick={(e)=>{e.preventDefault(); setbullet(ii);}}>
                                <img src={el.companythumb} alt="companythumb" className={bullet === ii ? 'd-inline-block': ''}></img>
                                <img src={el.companylogo} alt="companylogo" className={bullet === ii ? 'd-inline-block': ''}></img>
                                </a>
                            )
                        })
                    }
                </div>
                <div className="col-3">
                    <div>
                    {
                        Company.map((ell,idx)=>{
                            return(
                                <span className={bullet == idx ? 'bulact': ''} onClick={()=>{setbullet(idx);}}>{ell.companyname}</span>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="col-12">
                    {
                        Company.map((첫,둘)=>{
                            return(
                                <div className={`wrap ${bullet === 둘 ? 'd-flex' : ''}`} data-aos="fade-up">
                                    <div>
                                        <div><img src={첫.c1[0]} alt="f"></img></div>
                                        <div>{첫.c1[1]}</div>
                                        <div>{첫.c1[2]}</div>
                                    </div>
                                    <div>
                                        <div><img src={첫.c2[0]} alt="f"></img></div>
                                        <div>{첫.c2[1]}</div>
                                    </div>
                                    <div>
                                        <div><img src={첫.c3[0]} alt="f"></img></div>
                                        <div>{첫.c3[1]}</div>
                                    </div>
                                    <div>
                                        <div><img src={첫.c4[0]} alt="f"></img></div>
                                        <div>{첫.c4[1]}</div>
                                    </div>
                                    <div>
                                        <div><img src={첫.c5[0]} alt="f"></img></div>
                                        <div>{첫.c5[1]}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Comswap>
        </Noticepresswrap>
    );
};

export default Contents5;