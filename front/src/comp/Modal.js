import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Modalwrap = styled.div`
    &.closing {
        transform: translateX(-100%);
    }
    width: 300px;
    height: 400px;
    position: fixed;
    left: 0;
    top: 130px;
    z-index: 1000000;
    transition: all .4s;
    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    > button {
        display: flex;
        position: absolute;
        left: 100%;
        top: 0;
        border: none;
        padding: 0;
        padding: 20px 25px;
        background-color: #333;
        color: white;
        font-family: 'KNUTRUTHTTF';
       
        >span {
            margin-right: 20px;
        }
    }
`;

const Modal = () => {
    const [close,setclose] = useState('CLOSE');
    const [flag,setflag] = useState(false);
    const location = useLocation();

    const closing = () => {
        document.querySelector('#modal').classList.toggle('closing');
        if (!flag) {
            setclose('OPEN');
            setflag(true);
            document.querySelector('#modal i').classList = '';
            document.querySelector('#modal i').classList += 'bi bi-plus-lg'
        } else { // 이 부분 수정
            setclose('CLOSE');
            setflag(false);
            document.querySelector('#modal i').classList = '';
            document.querySelector('#modal i').classList += 'bi bi-x-lg'
        }
    }

    useEffect(() => {
        // 페이지 전환 시에 flag 상태 초기화
        setflag(true);
        setclose('OPEN');
        document.querySelector('#modal i').classList = '';
        document.querySelector('#modal i').classList += 'bi bi-plus-lg'
        document.querySelector('#modal').classList += ' closing'
    }, [location.pathname]); // location.pathname이 변경될 때마다 useEffect 실행
    return (
        <Modalwrap id="modal">
            <img src="https://i.imgur.com/PMIMojA.jpg" alt="Modal"></img>
            <button onClick={()=>{closing();}}>
                <span>{close}</span>
                <i class="bi bi-x-lg"></i>
            </button>
        </Modalwrap>
    );
};

export default Modal;