import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
import RBus from '../../Data/regionbus.json';


import '../../scss/Easyres.scss';

const Menuselect = styled.div`
    width: 130px;
    margin-right: 40px;
    > button {
        padding: 10px;
        width: 100%;
        border-bottom: 1px solid black;
        &.redselect {
            border-bottom: 1px solid #d60815;
            color: #d60815;
            svg {
                fill: #d60815;
            }
        }
    }
`;

const Submitbtn = styled.div`
    width: 70px;
    margin-right: 20px;
    > button {
        width: 100%;
        padding: 10px 20px;
        background-color: #464343;
        color: white;
        border-radius: 5px;
        font-size: 14px;
    }

`;

const Subcomponent = styled.div`
    padding-left: 36px;
    padding-top: 36px;
    padding-bottom: 100px;
    padding-right: 100px;
    .firstcomp {
        padding: 16px 34px;
        background-color: white;
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 7px;
        margin-right: 20px;
        button {
            width: 200px;
            text-align: left;
            padding: 8px 20px;
            display: flex;
            justify-content: space-between;
            svg {
                display: none;
            }
            &.selected {
                background-color: #625c5c;
                color: white;
                svg {
                    display: inline !important;
                }
            }
        }
    }
    .secondcomp {
        padding: 16px 34px;
        background-color: white;
        border: 1px solid rgba(0,0,0,.2);
        > h2 {
            font-size: 16px;
            font-family: 'Pretendard' !important;
            font-weight: 600 !important;
            color: #625c5c;
            width: 300px;
        }
        .twodepthtaps {
            ul {
                display: none;
            }
            li {
                margin-top: 15px;
            }
            button {
                width: 300px;
                text-align: left;
                display: flex;
                justify-content: space-between;
                background-color: #e4e4e4;
                padding: 5px 10px;
            }
        }
    }
`;

const Easyres = () => {
    const [twoselect,settwoselect] = useState([{
        number: null,
        isSelected: false
    }])

    const [startbtn,setstartbtn] = useState([{
        number : null,
        isSelect: false,
        isFirstbtn: false
    }])

    useEffect(()=>{
        const fbutton = document.querySelectorAll('.btnwrap button');
        fbutton.forEach((ele,idx)=>{
            ele.addEventListener('click',(e)=>{
                settwoselect([{number:idx,isSelected:true}]);
                console.log(twoselect[0].number);
                if(twoselect[0].number === idx && twoselect[0].isSelected) {
                    fbutton.forEach((eles)=>{eles.classList.remove('redbtn')})
                    fbutton[idx].classList.add('redbtn');
                }
            })
        })
        const busnbtn = document.querySelector('.busnbtn button');
        busnbtn.addEventListener('click',()=>{
            document.body.classList.toggle('dimmed');
            document.querySelector('.Easyreswrap').classList.toggle('fixwrap');
        });
    },[twoselect])


    return (
    <>
        <div className="Easyreswrap relative">
            <div className="mx-auto max-w-screen-2xl flex items-center">
                <h2>버스 시간 예약</h2>
                <div className="btnwrap flex">
                    <button>왕복</button>
                    <button>편도</button>
                </div>
                <Menuselect className="busnbtn">
                    <button className={`flex justify-between ${startbtn[0].isFirstbtn ? 'redselect': ''}`} onClick={()=>{setstartbtn([{...startbtn,isFirstbtn:!(startbtn[0].isFirstbtn)}])}}><span>버스 번호</span><CheckIcon /></button>
                </Menuselect>

                <Menuselect>
                    <button className="flex justify-between"><span>출발지</span><CheckIcon /></button>
                </Menuselect>

                <Menuselect>
                    <button className="flex justify-between"><span>도착지</span><CheckIcon /></button>
                </Menuselect>

                <Menuselect>
                    <button className="flex justify-between"><span>버스 시간</span><CheckIcon /></button>
                </Menuselect>

                <Menuselect>
                    <button className="flex justify-between"><span>좌석 번호</span><CheckIcon /></button>
                </Menuselect>

                <Submitbtn>
                    <button>조회</button>
                </Submitbtn>

                <Submitbtn>
                    <button>예약</button>
                </Submitbtn>

            </div>
        </div>
        <div className={`submenues ${startbtn[0].isFirstbtn ? 'db': ''}`}>
            <Subcomponent className="flex" >
                <div className="firstcomp">
                    <ul>
                        {
                            RBus.map((rb,indexes)=>(<li><button className={`${startbtn[0].number === indexes && startbtn[0].isSelect ? 'selected': ''}`}onClick={()=>{setstartbtn([{...startbtn,number:indexes,isSelect:true}]);}}><span>{rb.busregname} 지역</span><CheckIcon /></button></li>))
                        }
                    </ul>
                </div>
                <div className="secondcomp">
                    <h2>버스 번호 정보</h2>
                    <div className="twodepthtaps">
                        {
                            RBus.map((rbu,iii)=>(<ul className={`${startbtn[0].number === iii & startbtn[0].isSelect ? 'db': ''}`}>{rbu.buseach.map((eaches)=>(<li><button><span>{eaches.busn}</span><span>{eaches.busname.split('(')[0]}</span></button></li>))}</ul>))
                        }
                    </div>
                </div>
            </Subcomponent>    
        </div>
    </>
    );
};

export default Easyres;