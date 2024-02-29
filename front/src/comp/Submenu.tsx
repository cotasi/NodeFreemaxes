import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Submenu.scss';
import HomeIcon from '@mui/icons-material/Home';
import { Menuall } from 'ts/common';
import Menuss from '../Data/menuback.json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Legend = {
    one: number,
    two: number,
    three: number
}


const Submenu: React.FC<Legend> = ({one,two,three}) => {

React.useEffect(()=>{
    document.querySelectorAll('.substab ul li a')[three].classList.add('active');
})

const [rolldown,setrolldown] = React.useState({
    rollon: false,
    rollidx: -1,
    rollcon: Menuss[one].menu1
});

const [rolldowntwo,setrolldowntwo] = React.useState({
    rollons: false,
    rollidxs: -1,
    rollcons: Menuss[one].menu2[two].name
});
    return (
    <>
        <div className="subsmenu">
            <div className="mx-auto max-w-screen-xl">
                <div className="subwrap ">
                    <ul className="flex items-center">
                        <li><Link to="/"><span className="sr_only">홈으로 가기</span><HomeIcon /></Link></li>
                        <li className="relative"><button className={`flex items-center justify-between `} onClick={()=>{setrolldown({...rolldown,rollon:!rolldown.rollon})}}><span>{rolldown.rollcon}</span><ExpandMoreIcon /></button>
                            <ul className={`main_sub absolute top-full ${rolldown.rollon ? 'open': ''}`}>
                                {
                                    Menuss.map((eee)=>(<li><Link to={eee.href1}>{eee.menu1}</Link></li>))
                                }
                            </ul>
                        </li>
                        <li className="relative"><button className={`flex items-center justify-between `} onClick={()=>{setrolldowntwo({...rolldowntwo,rollons:!rolldowntwo.rollons})}}><span>{rolldowntwo.rollcons}</span><ExpandMoreIcon /></button>
                            <ul className={`main_sub absolute top-full ${rolldowntwo.rollons ? 'open': ''}`}>
                                {
                                    Menuss[one].menu2.map((d222)=>(<li><Link to={d222.href}>{d222.name}</Link></li>))
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="substab">
            <div className="mx-auto max-w-screen-xl">
                <ul className="flex items-center justify-center">
                    {
                        Menuss[one].menu2.map((kk)=>(<li><Link to={kk.href}>{kk.name}</Link></li>))
                    }
                </ul>
            </div>
        </div>
        <div className="subtit text-center">
            {
                <span>{rolldowntwo.rollcons}</span>
            }
        </div>
    </>
    );
};

export default Submenu;
