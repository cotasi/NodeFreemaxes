import React from 'react';
import styled from 'styled-components';
import Data from '../Data/Data.json';
import Not from '../Data/notice.json';
import { Link } from 'react-router-dom';

const Noticewrap = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 30px;
    > h2 {
        font-family: 'KNUTRUTHTTF' !important;
        text-align: center;
        font-size: 2.4em;
        padding-bottom: 30px;
    }
    > p {
        font-family: 'KNUTRUTHTTF' !important;
        text-align: center;
        font-size: 1.2em;
    }
    > form {
        padding-top: 30px;
        > div {
            display: block;
            width: 50%;
            margin: 0 auto;
            height: 100%;
            border-radius: 15px;
            border: none;
            background-color: rgb(230, 235, 239,.3);
            margin-bottom: 40px;
            align-items: center;
            cursor: pointer;
            > div {
                width: 25%;
                &:hover {
                border-radius: 15px 15px 0 0;
                background-color: black;
                box-sizing: content-box;
                > a {
                    border: none;
                    color: white;
                    > i::before {
                        transform: rotate(180deg);
                    }
                }
                > ul.sub {
                    height: 100px;
                    background-color: black;
                    > li > a {
                        color: white;
                    }
                }
                }
                > a {
                    margin: 10px 25px;
                    display: block;
                    height: 100%;
                    text-decoration: none;
                    color: black;
                    position: relative;
                    margin-right: 10px;
                    border-right: 1px solid rgba(0,0,0,.2);
                    > i {
                        position: absolute;
                        right:25px;
                        &::before {
                            font-size: 12px;
                            vertical-align: 0.05em;
                        }
                    }
                }
                > ul.sub {
                    width: 100%;
                    top: 100%;
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    background-color: white;
                    border-radius: 0 0 15px 15px;
                    height: 0;
                    overflow: hidden;
                    transition: height .4s, background-color .4s;
                    > li {
                        > a {
                            text-decoration: none;
                            color: black;
                            padding: 10px 25px;
                            display: block;
                        }
                    }
                }
            }
            > input {
            width: 60%;
            border: none;
            background-color: transparent;
            padding-left: 10px;
            &:focus {
                outline: none;
            }
        }
        >button {
                border: none;
                background-color: transparent;
                > span {
                    display: block;
                    text-indent: -9999em;
                    width: 0;
                    height: 0;
                }
                > i {
                    vertical-align: -0.2em;
                }
                > i::before {
                    font-size: 20px;
                }
            }
        }

    }
`;

const Tablewrap = styled.div`
    font-family: 'KNUTRUTHTTF' !important;
    width: 100%;
    padding-bottom: 50px;
    > div:first-child {
        padding: 15px 25px;
        background-color: rgb(230, 235, 239,.3);
        border-radius: 15px;
    }
    > div:last-child {
        > div {
            padding: 15px 25px;
            border-bottom: 1px solid rgba(0,0,0,.2);
            align-items: center;
            > span:nth-child(2) {
                font-weight: 200 !important;
            }
            > span:nth-child(3) {
                > span {
                    margin-right: 15px;
                    border: 1px solid black;
                    display: inline-block;
                    padding: 3px 20px;
                    border-radius: 15px;
                }
            }
        }
    }
`

const Notice = () => {
    return (
        <>
            <Noticewrap>
                <h2>공지사항</h2>
                <p>프리맥스 리저브의 여러 소식 및 공지들을 전달해 드립니다.</p>
                <form action="">
                    <div className="d-flex">
                        <div className="selectbox position-relative">
                                <Link><span>전체</span>
                                <i class="bi bi-caret-down-fill"></i></Link>
                                <ul className="sub position-absolute">
                                    <li><Link>제목</Link></li>
                                    <li><Link>내용</Link></li>
                                </ul>
                            </div>
                        <input type="text" />
                        <button><span>검색</span>
                        <i class="bi bi-search"></i></button>
                    </div>
                </form>
                <Tablewrap>
                    <div className="d-flex">
                        <span className="col-1">번호</span>
                        <span className="col-2">구분</span>
                        <span className="col-6">제목</span>
                        <span className="col-3">등록일</span>
                    </div>
                    <div>
                       {/*  <div className="d-flex">
                            <span className="col-1">1</span>
                            <span className="col-2">이벤트</span>
                            <span className="col-6">홈페이지 리뉴얼 오픈 기념 최대 60% 평생 할인</span>
                            <span className="col-3">2023.05.01</span>
                        </div> */}

                        {
                            Not.map((el,idx)=>{
                                return(
                                    <div className="d-flex">
                                        <span className="col-1">{el.number}</span>
                                        <span className="col-2">{el.category}</span>
                                        <span className="col-6"><span>공지</span>{el.subject}</span>
                                        <span className="col-3">{el.dates.split('T')[0]}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Tablewrap>
            </Noticewrap>
        </>
    );
};

export default Notice;