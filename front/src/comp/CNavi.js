import React from 'react';
import CN from '../scss/CN.module.scss'
import Data from '../Data/Data.json'
import { Link } from 'react-router-dom';

const QNavi = () => {
    return (
        <div className={`${CN.cnavimain} d-flex align-items-center`}>
            <h1 className="m-0 p-0"><img src="/img/logo_icon.png" alt="logo_icon" /></h1>
            <div className={`${CN.mainm}`}>
                <Link to={Data[2].menu[0].href1} className="position-relative"><span>{Data[2].menu[0].menu1}</span>
                <i class="bi bi-chevron-down"></i>
                    <div className={`${CN.subm} position-absolute`}>
                        {
                            Data[2].menu[0].menu2.map((e,i)=>{
                                return(
                                    <Link to={e.href}>{e.name}</Link>
                                )
                            })
                        }
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default QNavi;