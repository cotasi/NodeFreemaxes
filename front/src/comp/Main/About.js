import React from 'react';
import { Link } from 'react-router-dom';

import '../../scss/About.scss';
import Aboutus from '../../Data/aboutus.json';


const About = () => {
    return (
        <div className="aboutwrap">
            <div className="mx-auto max-w-screen-2xl">
                <h2>About us</h2>
                <p>차별화된 버스 예약 기술 및 다양한 혜택들이 있습니다.</p>
                <div className="aboutcon flex items-center">
                    <ul className="flex">
                        {
                            Aboutus.map((about)=>(<li><Link>
                                                    <div className="imgwr"><img src={about.svg_path} alt="aboutsvg" /></div>
                                                    <div className="texts">{about.svg_subject}</div>
                                                </Link></li>))
                        }
                    </ul>
                    <div className="subtit">
                        <h2><span>Korea</span><span>Bus</span><span>Reservation</span><span>Systems.</span></h2>
                        <p>
                        <span>Freemax</span>는 한국 최고의 버스 예약 구독 시스템으로써 <br />
                        직장인들의 출퇴근 대중교통의 해결을 위해 교통부에서 고안되었습니다. <br />
                        버스 예약 뿐만 아니라 기사 등록 및 여러가지 VIP 혜택을 제공하고 있습니다.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default About;