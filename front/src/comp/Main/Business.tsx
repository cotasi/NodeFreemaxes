import * as React from 'react';
import { useState, useEffect } from 'react';

import '../../scss/Business.scss';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Business = () => {
    type scales = {
        scaleon: boolean,
        scaleidx: any
    }
    const [scale,setscale] = useState<scales>({
        scaleon: false,
        scaleidx: null
    })

    useEffect(()=>{
        const scalebtn = document.querySelectorAll('.clickbtn');
        scalebtn.forEach((ele,idx)=>{
            ele.addEventListener('click',()=>{
                document.querySelectorAll('.businesscon li').forEach((eles)=>{
                    eles.classList.remove('btnover');
                });

                setscale({
                    scaleon: !scale.scaleon,
                    scaleidx: idx
                });

                if(scale.scaleon && scale.scaleidx === idx) {
                    document.querySelectorAll('.businesscon li')[idx].classList.add('btnover');
                }
            })
        })
    },[scale]);

    return (
        <div className="business">
            <div className="mx-auto max-w-screen-xl">
                <h2>사업 영역</h2>
                <p>프리맥스에서 제공하는 컨텐츠들입니다.</p>
                <div className="businesscon">
                    <ul className="flex">
                        <li><button>
                                <div className="subject">회사소개</div>
                                <button className="clickbtn"><div><span className="sr_only">확대하기</span><AddIcon /></div>
                                        <div><span className="sr_only">축소하기</span><RemoveIcon /></div>
                                </button>
                            </button></li>
                        <li><button>
                                <div className="subject">해외여행예약</div>
                                <button className="clickbtn"><div><span className="sr_only">확대하기</span><AddIcon /></div>
                                        <div><span className="sr_only">축소하기</span><RemoveIcon /></div>
                                </button>
                            </button>
                        </li>
                        <li><button>
                                <div className="subject">호텔예약</div>
                                <button className="clickbtn"><div><span className="sr_only">확대하기</span><AddIcon /></div>
                                        <div><span className="sr_only">축소하기</span><RemoveIcon /></div>
                                </button>
                                <div className="hidden_con">
                                    <div>호텔 예약</div>
                                    <div>여기어때와 협약하여, 호텔 예약 프로그램을 제공</div>
                                </div>
                            </button>
                        </li>
                        <li><button>
                                <div className="subject">스토어 오픈</div>
                                <button className="clickbtn"><div><span className="sr_only">확대하기</span><AddIcon /></div>
                                        <div><span className="sr_only">축소하기</span><RemoveIcon /></div>
                                </button>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Business;