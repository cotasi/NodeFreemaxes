import React from 'react';
import styled from 'styled-components';
import Gwangju from '../Data/gwangju.json';

const Bigwrap = styled.div`
    padding-top: 50px;
    max-width: 75%;
    margin: 0 auto;
    & h2 {
        font-size: 1.3em;
        padding-bottom: 30px;
    }

`;

const Tablerwrap = styled.div`
    width: 100%;
`;

const Tablertop = styled.div`
    border-top: 2px solid black;
    background-color: #f8f8f8;
    > span {
        text-align: center;
        border-right: 1px solid rgba(0,0,0,.5);
        padding: 15px 0;
    }
    > span:last-child {
        border-right: none;
    } 
`;

const Tablercon = styled.div`
    > div {
    border-top: 1px solid black;
    }
    background-color: white;
    > div >span {
        padding: 15px 0;
        text-align: center;
        border-right: 1px solid black;
    }
    > div > span:last-child {
        border: none;
    }
`;

const Pagination = styled.div`
    width: 100%;
`

const Region1 = () => {
    const filterGwangju = Gwangju.slice(51,100);
    console.log(filterGwangju);

    return (
        <Bigwrap>
            <h2>
                {
                    Gwangju.length
                }
                <span>건</span>
            </h2>
            <Tablerwrap>
                <Tablertop className="d-flex">
                    <span className="col">노선번호</span>
                    <span className="col">상행첫차</span>
                    <span className="col">하행첫차</span>
                    <span className="col">데이터기준일자</span>  
                </Tablertop>
                <Tablercon>
                    {filterGwangju.map((eee,iii)=>{
                        return(
                            <div className="d-flex">
                                <span className="col">{eee.노선번호}</span>
                                <span className="col">{eee.상행첫차}</span>
                                <span className="col">{eee.하행첫차}</span>
                                <span className="col">{eee.데이터기준일자}</span>
                            </div>
                        )
                    })}
                </Tablercon>
            </Tablerwrap>
        </Bigwrap>
    );
};

export default Region1;