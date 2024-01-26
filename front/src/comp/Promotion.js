import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import pro from '../Data/Promotion.json';

const Promowrap = styled.div`
    padding-top: 40px;
    width: 80%;
    margin: 0 auto;
    > h2 {
        font-size: 1.5em;
        font-weight: 600 !important;
        padding-bottom: 30px;
    }
`
const Promotap= styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,.1);
    margin-bottom: 15px;
    > ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        > li.linkact {
                color: rgb(18,115,228);
                border: 1px solid rgb(18,115,228) !important;
                margin-right: -1px;
                margin-bottom: -1px;
                border-bottom: none !important;
        }
        > li > button {
            text-decoration: none;
            color: black;
            font-weight: 400 !important;
            padding: 15px 60px;
            display: block;
            border: 1px solid rgba(0,0,0,.1);
            background-color: transparent;
        }
        > li:first-child > button {
            border-bottom: none;
            border-right: none;
        }
        > li:last-child > button {
            border-bottom: none;
        }
    }
`;

const Promolist = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-bottom: 30px;
    > ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        display: none;
        gap: 15px;
        > li {
            width: 24%;
            margin-bottom: 20px;
           
            > div:first-child {
                width: 100%;
                height: 150px; 
                border-radius: 10px;
                overflow: hidden;
                > img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            >div:nth-child(2) {
                padding-top: 10px;
                font-size: 0.95em;
            }
            >div:last-child{
                > span:first-child {
                    font-size: 0.85em;
                    color: rgba(0,0,0,.45);
                    font-weight: 400 !important;
                    &::after {
                        content:'~';
                    }
                }
                > span:nth-child(2) {
                    font-size: 0.85em;
                    color: rgba(0,0,0,.45);
                    font-weight: 400 !important;
                }
                > span:last-child {
                    font-size: 0.85em;
                    color: rgba(0,0,0,.45);
                    font-weight: 400 !important;
                    padding-left: 8px;
                }
            }
        }
    }
`;

const Promotion = () => {
    const [tabflag,settabflag] = useState(false);
    const [tabnum,settabnum] = useState(0);

    return (
        <Promowrap>
            <h2>프로모션 이벤트</h2>
            <Promotap>
                <ul>
                  {
                    pro.map((ell,idxx)=>{
                        return(
                            <li className={!tabflag && tabnum === idxx ? 'linkact': ''}><button onClick={(tabflag)=>{settabflag(!tabflag); settabnum(idxx);}}>{ell.name}</button></li>
                        )
                    })
                  }
                </ul>
            </Promotap>
            <Promolist>
                {
                    pro.map((e,i)=>{
                        return(
                            <ul className={tabnum === i ? 'd-flex': ''}>
                                {
                                    e.how.map((ee,ii)=>{
                                        return(
                                            <li>
                                                <div><img src={ee.banner} alt="dd"></img></div>
                                                <div>{ee.eventname}</div>
                                                <div>{
                                                        ee.eventdate.split('/').map((eee,iii)=>{
                                                            return(
                                                                <span>{eee}</span>
                                                            )
                                                        })
                                                     }</div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        )
                    })
                }
            </Promolist>
        </Promowrap>
    );
};

export default Promotion;