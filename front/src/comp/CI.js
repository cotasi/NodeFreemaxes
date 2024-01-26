import React , { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Subnavi from './Subnavi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CIMain = styled.div`
    max-width: 80%;
    margin: 0 auto;
    > h2 {
        font-size: 1.5em;
        padding-top: 30px;   
        padding-bottom: 30px;
    }

    > p {
        padding-bottom: 50px;
    }

    > div {
            height: 150px;
            margin-bottom: 50px;
            > div:first-child {
                height: 100%;
                border: 1px solid rgba(0,0,0,.5);
                display: flex;
                justify-content: center;
                margin-right: 15px;
                > img {
                    width: 80%;
                    margin: 0 auto;
                    height: 100%;
                    object-fit: contain;
                }
            }
            > div:last-child {
                p {
                    font-weight: 200 !important;
                }
                button {
                    width: 50%;
                    height: 30%;
                    left: 0;
                    bottom: 0;
                    border: none;
                    background-color: #5f87f4;
                    color: white;
                }
            }
        }
`;

const CIdetail = styled.div`
    max-width: 80%;
    margin: 0 auto;
    > h2 {
        font-size: 1.5em;
        padding-top: 30px;   
        padding-bottom: 30px;
    }
    > div {
        width: 100%;
        height: 300px;
        margin-bottom: 30px;
        > div:first-child {
            width: 42%;
            height: 100%;
            border: 1px solid rgba(0,0,0,.4);
            margin-right: 15px;
            > img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        > div:nth-child(2) {
            width:58%;
            > p {
                font-weight: 200 !important;
            }
        }
    }
`;

const CI = () => {


    return (
    <>
       <Subnavi default1="사업소개" default2="기업CI" default3="Creative Information" num="0"></Subnavi>
       <CIMain>
           <h2>기본 로고 형태</h2>
           <div className="d-flex">
             <div className="col-5"><img src="https://i.imgur.com/S8wNtbY.png" alt="logoci"></img></div>
             <div className="col-7 position-relative">
                <p>
                SKC 조합기준은 심벌마크와 로고마크의 조합으로 SKC의 ‘고객행복’ 추구의지를 표현하고 있습니다. <br />
                SKC Identifier는 SKC의 공식적인 상징으로 어떤 경우라도 변형되어서는 안되며 공간규정 및 색상규정을 <br/>반드시 준수해야 합니다.
                </p>
                <button className="position-absolute">다운로드</button>
             </div>
           </div>
       </CIMain>
       <CIdetail>
         <h2>로고의 조형적 특징</h2>
         <div className="d-flex">
            <div><img src="https://i.imgur.com/TF4gYy4.png" alt="로고 설명" /></div>
            <div>
                <p>
                ‘행복 날개’는 SK Identifier의 조형적 특징 및 상징성을 가장 잘 드러내는 요소이며 아이덴티티의 왜곡, 변형 및 오남용 등에 따른 이미지 손상 방지를 위하여 심벌마크 적용에 따른 규정과 원칙을 반드시 준수해야 합니다. ‘행복 날개’는 통신위성, 연 등을 모티브로 비상하는 두 날개를 형상화하여, SK의 양대 성장 축인 에너지화학과 정보통신 산업의 약진을 상징하고 글로벌 시장을 향한 진취적 기상과 ‘행복 추구’의지를 구현한 SK의 얼굴입니다.
                </p>
            </div>
         </div>
       </CIdetail>
    </>
    );
};

export default CI;