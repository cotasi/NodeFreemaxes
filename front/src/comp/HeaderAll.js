import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import NotesIcon from '@mui/icons-material/Notes';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';


import '../scss/menu.scss';

import Menu from '../Data/menuback.json';

export default function HeaderAll() {

  useEffect(()=>{
    document.querySelector('.allbtn > button').addEventListener('click',()=>{
      document.querySelector('.second-menu').classList.toggle('menuon');
      document.body.classList.toggle('dimmed');
    })
  })

  return (
    <header className="bg-white">
      <div className="first-menu">
        <nav className="mx-auto flex max-w-screen-2xl items-center justify-between" aria-label="firstmenu">
          <div className="logowrap"><h1 className="logo"><Link to="/kr"><img src="/images/freemax.svg" alt="main_logo" /></Link></h1></div>
          <ul className="loginmenu flex">
            <li>
              <Link to="/kr/login">로그인</Link>
            </li>
            <li>
              <Link to="/kr/join">회원가입</Link>
            </li>
            <li>
              <Link to="/kr/membership">멤버쉽(구독)</Link>
            </li>
            <li>
              <Link to="/kr/lists">최근 리스트</Link>
            </li>
            <li>
              <Link to="/kr/points">포인트</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="second-menu relative z-50">
        <nav className="mx-auto max-w-screen-2xl flex justify-between items-center relative">
          <div className="menuwrap flex items-center">
            <div className="allbtn"><button className="flex flex-row-reverse"><span>전체 메뉴</span><NotesIcon /></button></div>
              <div className="mainmenu">
                <ul className="flex">
                  {
                    Menu.map((datas)=>(<li><Link to={datas.href1}>{datas.menu1}</Link></li>))
                  }
                </ul>
              </div>
            </div>
            <div className="iconswrap flex items-center">
              <div className="formwrap">
                <form action="" className="flex items-center relative">
                  <input type="text" placeholder="#강원도여행" />
                  <button className="absolute"><span className="sr-only">Search</span><SearchIcon /></button>
                </form>
              </div>
              <div className="mapfindwrap"><button><span className="sr-only">Map Find</span><DirectionsBusIcon /></button></div>
              <div className="langwrap"><button><span className="sr-only">Languages</span><LanguageIcon /></button></div>
            </div>
            <div className="subwrap absolute">
              <ul className="flex">
                {Menu.map((menus)=>(<li><Link to={menus.href1}>{menus.menu1}
                                    <ul className="subsub">
                                      {
                                        menus.menu2.map((m2)=>(<li><Link to={m2.href}>{m2.name}</Link></li>))
                                      }
                                    </ul>
                </Link></li>))}
              </ul>
            </div>
          </nav>
      </div>
    </header>
  );
}

