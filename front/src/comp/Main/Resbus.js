import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import '../../scss/Resbus.scss';

const Pointer = styled.div`
    width: 15%;
    background-color: #fafafa;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    margin-right: 3rem;
    h2 {
        width: 40%;
        padding: .5rem;
        text-align: center;
        font-size: 1rem;
    }
    > button {
        width: 60%;
        text-align: center;
        background-color: black;
        color: white;
        font-size: .95rem;
    }
`;

const Subpointer = styled.div`


`;

const Resbus = () => {

    useEffect(()=>{
    })

    return (
        <div className="resbus">
            <div className="mx-auto max-w-screen-1280">
                <div className="resbus_wrap">
                    <form className="flex items-center">
                        <h2>궁금한 버스 찾기</h2>
                        <div className="checks flex">
                            <div id="check1" className="flex j-center">
                                <input type="checkbox" id="checkone"/>
                                <label htmlFor="checkone">광역/공항</label>
                            </div>
                            <div id="check2" className="flex j-center">
                                <input type="checkbox" id="checktwo"/>
                                <label htmlFor="checktwo">지선/간선</label>
                            </div>
                        </div>
                        <Pointer className="flex">
                            <h2>출발지</h2>
                            <button>출발지 선택</button>
                            <Subpointer>

                            </Subpointer>
                        </Pointer>
                        <Pointer className="flex">
                            <h2>도착지</h2>
                            <button>도착지 선택</button>
                        </Pointer>
                        <button type="submit">검색하기</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Resbus;