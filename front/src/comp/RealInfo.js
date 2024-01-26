import React from 'react';
import styled from 'styled-components';

const Bgpart = styled.div`
    width: 100%;
    height: 200px;
    background: url('https://i.imgur.com/DCd45vb.jpg') no-repeat 100% 30%/cover;
    filter: grayscale(100%);
    position: relative;
    &::after {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.5);
        z-index: -1;
    }
`;

const Header1 = styled.h1`
    text-align: center;
    color: white;
    padding-top: 2%;
    font-weight: 300 !important;
`;

const Header2 = styled.h2`
    text-align: center;
    color: white;
`;

const Knowhow = styled.div`
    width: 100%;
    height: 200px;
    background-color: white;
    margin-bottom: 4%;

`;

const Know1 = styled.h2`
    text-align: center;
    color: black;
    padding-top: 4%;
    padding-bottom: 2%;
`;

const Knowp = styled.p`
    text-align: center;
    font-weight: 200 !important;
`;

const Overview = styled.div`
    width: 100%;
    height: 300px;
    & > h2 {
        text-align: center;
        font-size: 1.5em;
        font-weight: 400 !important;
    }

    & > div {
        display: flex;
        justify-content: center;
        padding-top: 5%;
        gap: 80px;
    }

    & > div > div {
        text-align: center;
    }

    & > div > div h2 {
        font-size: .8rem;
    }

    & > div > div > p {
        font-size: 1.3rem;
    }
`;

const RealInfo = () => {
    return (
        <>
            <Bgpart>
                <Header1>SINCE 2022</Header1>
                <Header2>진정한 버스 예약 시스템은 여기서부터.</Header2>
            </Bgpart> 
            <Knowhow>
                <Know1>최고의 노하우로 기획한 프로젝트!</Know1>
                <Knowp>건강하고 안전하게 출퇴근 길 걱정없이 살수 있는 때가 올까요? <br></br>
                       여러번의 고민 끝에 모든 광역버스를 예약하는 시스템을 마련하였습니다. <br></br>
                       이런 생각들이 현대 시대의 경쟁력이 되게 하겠습니다.
                </Knowp>
            </Knowhow>
            <Overview>
                <h2>OVERVIEW</h2>
                <div>
                    <div>
                        <h2>설립연도</h2>
                        <p>2022년 3월</p>
                    </div>
                    <div>
                        <h2>설립연도</h2>
                        <p>2022년 3월</p>
                    </div>
                    <div>
                        <h2>설립연도</h2>
                        <p>2022년 3월</p>
                    </div>
                    <div>
                        <h2>설립연도</h2>
                        <p>2022년 3월</p>
                    </div>
                    <div>
                        <h2>설립연도</h2>
                        <p>2022년 3월</p>
                    </div>
                </div>
            </Overview>
        </>
    );
};

export default RealInfo;