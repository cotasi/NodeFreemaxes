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
        <div className="modal" style={{width: "300px", height: "500px",backgroundColor: "white", position: "fixed", left: "50%", transform: 'translate(-50%,-50%)', top: '50%', zIndex: '80'}}>
            <div className="img" style={{height: '90%'}}><img src="/images/광고배너.jpg" alt="modal" style={{width: '100%', height: '100%', objectFit: 'cover'}}/></div>
            <div className="btns" style={{position: 'relative', height: '10%', display: 'flex'}}>
                <button style={{width: '50%', fontSize:'.8rem', borderRight: '1px solid rgba(0,0,0,.2)'}}>오늘 더 이상 띄우지 않기</button>
                <button style={{width: '50%', fontSize:'.8rem'}}>닫기</button>
            </div>
        </div>
    );
};

export default Modal;