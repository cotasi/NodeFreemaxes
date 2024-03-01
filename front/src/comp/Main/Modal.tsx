import React from 'react';
import { useEffect } from 'react';

const Modal = () => {
    useEffect(()=>{
        document.querySelectorAll('.btns button')[1]?.addEventListener('click',()=>{
            document.querySelector('.modal')?.classList.add('hidden');
            document.body.classList.remove('dimmed');
        })
    })
    return (
        <div className="modal" style={{width: "60%", height: "80%",backgroundColor: "white", position: "fixed", left: "50%", transform: 'translateX(-50%)', top: '3%', zIndex: '80'}}>
            <div className="img" style={{height: '90%'}}><img src="https://i.imgur.com/UW4I4yc.png" alt="modal" style={{width: '100%', height: '100%', objectFit: 'cover'}}/></div>
            <div className="btns" style={{position: 'relative', height: '10%', display: 'flex'}}>
                <button>오늘 더 이상 띄우지 않기</button>
                <button style={{position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)', paddingRight: '2rem'}}>닫기</button>
            </div>
        </div>
    );
};

export default Modal;