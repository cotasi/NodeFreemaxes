import React , { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footerwrap = styled.div`
    padding: 30px 10%;
    border: 1px solid rgba(0,0,0,.2);
    > div:first-child {
        > h1 {
            font-size: 1.1em;
            font-weight: 300 !important;
            padding-bottom: 20px;
            margin: 0;
        }
        > p {
            font-size: 0.75em;
            font-weight: 300 !important;
            letter-spacing: 0.12em;
        }
        > .d {
            width: 60%;
            position: relative;
            > button {
                &.leg + ul {
                    height: 225px;
                    border: 1px solid rgba(0,0,0,.2);
                    border-top: 0;
                }
                width: 100%;
                background-color: white;
                padding: 10px 15px;
                border: 1px solid rgba(0,0,0,.2);
                text-align: left;
                > span {
                    font-weight: 400 !important;
                    font-size: 0.85em;
                }
            }
            > ul {
                list-style: none;
                margin: 0;
                padding: 0;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: white;
                /* border: 1px solid rgba(0,0,0,.2); */
                border-top: 0;
                height: 0;
                overflow: hidden;
                transition: all .4s;
                > li {
                    > a {
                        text-decoration: none;
                        color: black;
                        padding: 10px 15px;
                        display: block;
                        font-weight: 300 !important;
                    }
                }
            }
        }
    }
    > div:last-child {
        gap: 65px;
        > div {
            > h2 {
                font-size: 0.95em;
                padding-bottom: 50px;
                margin: 0;
            }
            > pre {
                font-family: 'Pretendard' !important;
                font-weight: 300 !important;
                font-size: 0.85em;
            }
        }
        > div:last-child {
            > ul {
                padding: 0;
                margin: 0;
                list-style: none;
                > li > a {
                    font-weight: 300 !important;
                    font-size: 0.85em;
                    text-decoration: none;
                    color: black;
                }
            }
        }
    }
`;

const Footer = () => {
    const familysite=['네이버','다음','패션플러스','쿠팡','배달의 민족'];
    const [fs,setfs] = useState('Family Site');
    const [cl,setcl] = useState(false);

    return (
        <Footerwrap className="d-flex">
            <div className="col-5">
                <h1>Freemax Reserve</h1>
                <p>Copyright © 주식회사 혼 (HON).All rights reserved.</p>
                <div className="d">
                    <button className={`d-flex justify-content-between align-items-center ${cl ? 'leg': ''}`} onClick={()=>{setcl(!cl);}}><span>{fs}</span><i class="bi bi-chevron-down"></i></button>
                    <ul>
                        {
                            familysite.map((el,iff)=>{
                                return(<li><a href="#" onClick={(e)=>{e.preventDefault(); setfs(el); setcl(!cl);}}>{el}</a></li>)
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="col-7 d-flex justify-content-between">
                <div>
                    <h2>Customer Center</h2>
                    <pre>
                        월~금<br></br>
                        AM 10:00 ~ PM 17:00<br></br>
                        (주말 및 공휴일 휴무)<br></br>
                        점심시간<br></br>
                        PM 12:00 ~ PM 13:00<br></br>
                        CS센터<br></br>
                        080-356-0123<br></br>
                        cs03@daum.net<br></br>
                    </pre>
                </div>
                <div>
                    <h2>Company Info</h2>
                    <pre>
                        상호명 : 주식회사 카페24 <br />
                        대표: 김세중 <br></br>
                        주소: 경기도 용인시 처인구 (신림동) <br />
                        사업자 등록번호 : XXX-XXXX-XXX <br />
                    </pre>
                </div>
                <div>
                    <h2>Follow us</h2>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Youtube</a></li>
                        <li><a href="#">Facebook</a></li>
                    </ul>
                </div>
            </div>
        </Footerwrap>
    );
};

export default Footer;