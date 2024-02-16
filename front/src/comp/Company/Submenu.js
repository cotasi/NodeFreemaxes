import React from 'react';

import { Link } from 'react-router-dom';

import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import '../../scss/Submenu.scss';

const Submenu = ({ menu,menuid,submenuid }) => {
    return (
        <div className="submenuwrap">
                <ul className="flex items-center">
                    <li><Link to="/"><span>Home</span><HomeSharpIcon /></Link></li>
                    <li><ArrowForwardIosIcon></ArrowForwardIosIcon></li>
                    <li><Link to={menu[menuid].href1}>{menu[menuid].menu1}</Link></li>
                    <li><ArrowForwardIosIcon></ArrowForwardIosIcon></li>
                    <li><Link to={menu[menuid].menu2[submenuid].href}>{menu[menuid].menu2[submenuid].name}</Link></li>
                </ul>
        </div>
    );
};

export default Submenu;