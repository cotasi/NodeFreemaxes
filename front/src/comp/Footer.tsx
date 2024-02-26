import * as React from 'react';
import { Link } from 'react-router-dom';

import '../scss/Footer.scss';
import Menu from '../Data/menuback.json';


const Footer = () => {
    return (
        <div className="footer flex">
            <div className="left_side">
                <div className="logopart"><img src="/images/logo_white.svg" alt="whitesvg" /></div>
                <div className="subject">(주)프리맥스</div>
                <div className="telwrap">
                    <div>
                        <span>TEL</span>
                        <span>031-xxx-xxxx</span>
                    </div>
                    <div>
                        <span>FAX</span>
                        <span>031-xxx-xxxx</span>
                    </div>
                    <div>
                        <span>Email</span>
                        <span>freemax@freemaxes.com</span>
                    </div>
                </div>
            </div>
            <div className="right_side">
                <nav className="mainmenu">
                    <ul className="flex items-center">
                        {
                            Menu.map((menues)=>(
                                <li className="relative"><Link to={menues.href1}>{menues.menu1}
                                    <ul className="smallmenu absolute">
                                        {
                                            menues.menu2.map((menutwo)=>(
                                                <li><Link to={menutwo.href}>{menutwo.name}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </Link></li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Footer;