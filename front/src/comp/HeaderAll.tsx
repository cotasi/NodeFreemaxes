import * as React from 'react';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';


import '../scss/menu.scss';

import Menu from '../Data/menuback.json';

export default function HeaderAll() {

  /* 타입스크립트 연습 */
  const bbynm : string = 'typescript';
  const count : number = 10;
  const arr: string[] = ['문자만','문자만'];
  const union : (string | number)[] = [1,'문자도',1000];
  // typeof -> object : null,object,array

  interface Objtype {
    bbynm : string
    count : number
    arr : string[]
    fun: () => number // 숫자를 반환하는 함수
    fun2: (x:string,y:number) => void
  }

  const obj : Objtype = {
    bbynm : "문자데이터",
    count : 10,
    arr : ["회사소개"],
    fun: () => { return 10;}, // 숫자를 반환하는 함수
    fun2: (x,y) => { console.log('리턴없음')}
  }

  function hardfunc(x : number,y : number):number {
    return x + y;
  }

  const hardfunc2 : (x:number,y:number) => number  = (x,y) => {
    return x + y;
  }

  return (
    <header className="bg-white">
      <div className="first-menu">
       <nav className="mx-auto max-w-screen-1280 flex justify-between items-center relative">
        <ul className="sns flex">
          <li><a href=""><img src="/images/youtube.svg" alt="youtube" /></a></li>
          <li><a href=""><img src="/images/facebook.svg" alt="facebook" /></a></li>
          <li><a href=""><img src="/images/twitter.svg" alt="twitter" /></a></li>
        </ul>
        <h1 className="logo absolute"><Link to="/"><img src="/images/logo.svg" alt="logo" /></Link></h1>
        <ul className="icons flex items-center">
          <li>
            <Link to="/"><img src="/images/locks.svg" alt="locks" /></Link>
          </li>
          <li>
            <Link to="/"><img src="/images/profile.svg" alt="profile" /></Link>
          </li>
          <li>
            <form action="">
              <input type="text" placeholder="검색어를 입력해주세요." />
            </form>
          </li>
          <li>
            <Link to="/"><img src="/images/list.svg" alt="list" /></Link>
          </li>
          <li>
            <Link to="/"><img src="/images/cart.svg" alt="cart" /></Link>
          </li>
        </ul>
       </nav>
      </div>
      <div className="second-menu">
        <ul className="mx-auto max-w-screen-1280 flex j-center items-center">
          {
            Menu.map((menues)=>(<li><Link to={menues.href1} className="relative">{menues.menu1}
                                    <ul className="smenu absolute">
                                      {
                                        menues.menu2.map((menutwo)=>(<li><Link to={menutwo.href}>{menutwo.name}</Link></li>))
                                      }
                                    </ul>
                                    </Link></li>))
          }
        </ul>
      </div>
    </header>
  );
}

