import * as React from 'react';
import {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

import '../scss/menu.scss';
import '../scss/media.css';

import Menu from '../Data/menuback.json';
import CloseIcon from '@mui/icons-material/Close';


export default function HeaderAll() {
  const [scrolly,setscrolly] = useState(0);
  const [mmenu,setmmenu] = useState({
    realmobileon: false,
    mobileon: false,
    mobileidx: 0
  })

  const handlescroll = () =>{
    setscrolly(window.scrollY);
  }
  React.useEffect(()=>{
    document.querySelector('.mainmenu')?.addEventListener('mouseover',()=>{
      document.querySelector('.logo img:first-child')?.classList.add('img1');
      document.querySelector('.logo img:last-child')?.classList.add('img2');
      document.querySelector('header')?.classList.add('bd');
    });
    document.querySelector('.mainmenu')?.addEventListener('mouseleave',()=>{
      document.querySelector('.logo img:first-child')?.classList.remove('img1');
      document.querySelector('.logo img:last-child')?.classList.remove('img2');
      document.querySelector('header')?.classList.remove('bd');
    });
    
  },[])

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      handlescroll();
      console.log(scrolly);
      if (scrolly> 0.5) { document.querySelector('header')?.classList.add('scrolled');
      document.querySelector('header')?.classList.add('fixed');
      document.querySelector('header')?.classList.remove('absolute');
      document.querySelector('.logo img:first-child')?.classList.add('img1');
      document.querySelector('.logo img:last-child')?.classList.add('img2');
     }
    return () => {
     window.removeEventListener('scroll',()=>{
      handlescroll();
      if(scrolly <= 0.5) {
      document.querySelector('header')?.classList.remove('scrolled');
      document.querySelector('header')?.classList.remove('fixed');
      document.querySelector('header')?.classList.add('absolute');
      document.querySelector('.logo img:first-child')?.classList.remove('img1');
      document.querySelector('.logo img:last-child')?.classList.remove('img2'); 
      }
     })
    }
  })},[scrolly])

  useEffect(()=>{
    setmmenu({...mmenu,mobileon:true})
  },[])
  return (
    <header className="absolute">
       <nav className="mx-auto xl:max-w-screen-xl lg:max-w-screen-lg sm:max-w-screen-sm max-w-screen-ssm max-w-screen-xssm max-w-screen-xxssm max-w-screen-xxxssm flex justify-between items-center h-full">
        <h1 className="logo "><Link to="/"><img src="/images/logo_new.svg" alt="logo" />
                                           <img src="/images/logo_new2.svg" alt="logo2"></img></Link></h1>
        <ul className="mainmenu xl:flex hidden items-center">
          {
            Menu.map((mn)=>(<li className="relative"><Link to={mn.href1}>{mn.menu1}</Link>
                                <ul className="smallmn absolute top-full">
                                  {
                                    mn.menu2.map((smn)=>(<li><Link to={smn.href}>{smn.name}</Link></li>))
                                  }
                                </ul>
                            </li>))
          }
        </ul>
        <div className="mobile__header xl:hidden">
          <button className="flex justify-between items-center" onClick={()=>{setmmenu({...mmenu,realmobileon: true})}}>
            <span><div></div><div></div><div></div><div></div></span>
            <span>MENU</span>
          </button>
        </div>
       </nav>
       <div className={`mobile__allmenu xl:hidden block ${mmenu.realmobileon ? 'over': ''}`}>
          <div className="topimg">
            <img src="/images/logo_white.svg" alt="white" />
            <button onClick={()=>{setmmenu({...mmenu,realmobileon:false})}}><span className="sr_only">엑스 버튼</span><CloseIcon /></button>
          </div>
          <div className="mobile__menu relative">
            <div className="mx-auto xl:max-w-screen-xl lg:max-w-screen-lg sm:max-w-screen-sm max-w-screen-ssm max-w-screen-xssm max-w-screen-xxssm max-w-screen-xxxssm">
            <ul>
                {
                  Menu.map((mm,idx)=>(<li ><button onClick={()=>{setmmenu({...mmenu,mobileon:true,mobileidx:idx})}} className={`${mmenu.mobileon && mmenu.mobileidx === idx ? 'keke': ''}`}>{mm.menuen}</button>
                    <ul className="absolute mobile__sub">
                      {
                        mm.menu2.map((mm2)=>(<li><Link to={mm2.href}>{mm2.name}</Link></li>))
                      }
                    </ul>
                  </li>))
                }
            </ul>
            </div>
          </div>
       </div>
    </header>
  );
}

