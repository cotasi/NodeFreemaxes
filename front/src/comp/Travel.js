import React , { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputSlider from 'react-input-slider';
import traveling from '../Data/Trips.json';
import { Link } from 'react-router-dom';
import { set } from 'react-hook-form';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import LoopIcon from '@mui/icons-material/Loop';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StarIcon from '@mui/icons-material/Star';

const Travels = styled.div`
    max-width: 80%;
    margin: 0 auto;
    > h2 {
        padding-top: 30px;
        font-size: 1.5em;
        font-weight: 600 !important;
        padding-bottom: 30px;
    }
`

const Filtering = styled.div`
    width: 100%;
`;

const Indexing = styled.div`
    width: 24%;
    > div {
        position: sticky;
        top: calc(100% - 700px);
        > .maps {
        width: 100%;
        height: 200px;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            display: block;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0,0,0,.2);
        }
        > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
        }
        > button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            border: none;
            background-color: rgb(18 115 228);
            padding: 10px 30px;
            border-radius: 8px;
            color: white;
            font-size: 0.75em;
            font-weight: 500 !important;
            z-index: 10000;
        }
    }
    > .filter {
       
        > div:first-child {
            h2 {
                padding-top: 30px;
                font-size: 1.2em;
                margin: 0;
                padding-bottom: 30px;
            }
            button {
                background-color: transparent;
                border: none;
                padding-top: 30px;
                padding-bottom: 30px;
                opacity: .2;
                font-size: 15px;
                > i {
                    margin-left: 0.35em;
                }
            }
        }
        > div.chkbox {
            display: flex;
            align-items: center;
            gap: 8px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(0,0,0,.2);
            margin-bottom: 40px;
            > * {
                display: inline-block;
            }
            > button {
                border: none;
                width: 20px;
                height: 20px;
                background-color: transparent;
                border: 1px solid rgba(0,0,0,.2);
                &.btnclicked {
                    background-color: rgb(18 115 228);
                    background-image: url('https://i.imgur.com/mlaO4Hb.png');
                    background-repeat: no-repeat;
                    background-size: 60%;
                    background-position: center;
                    border: none;
                }
                > span {
                    display: block;
                    text-indent: -9999em;
                  /* s */
                }
            }
            > div {
                font-weight: 400 !important;
            }
        }
        > div.list {
            border-bottom: 1px solid rgba(0,0,0,.2);
            margin-bottom: 25px;
            > h2 {
                font-size: 1.2em;
                font-weight: 500 !important;
                padding-bottom: 30px;
                
            }
            > div {
                display: flex;
                align-items: center;
                padding-bottom: 20px;
                
                > button {
                    margin-right: 8px;
                    background-color: transparent;
                    border: none;
                    width: 20px;
                    height: 20px;
                    border: 1px solid rgba(0,0,0,.2);
                    > span {
                        display: block;
                        text-indent: -9999em;
                      /*   width: 0;
                        height: 0; */
                    }
                }
                > div {
                    font-weight: 400 !important;
                }
            }
            > div.all {
                > button.allclick {
                    background-color: rgb(18 115 228);
                    background-image: url('https://i.imgur.com/mlaO4Hb.png');
                    background-repeat: no-repeat;
                    background-size: 60%;
                    background-position: center;
                    border: none;
                }
            }
            > div.regs {
                > button.regclick {
                    background-color: rgb(18 115 228);
                    background-image: url('https://i.imgur.com/mlaO4Hb.png');
                    background-repeat: no-repeat;
                    background-size: 60%;
                    background-position: center;
                    border: none;
                }
            }

        }
        > div.prices {
            > h2 {
                font-size: 1.2em;
                > span {
                    font-size: 0.75em;
                    margin-left: 10px;
                    opacity: .6;
                }
            }
            > .css-yvszuv-Slider {
                width: 100% !important;
                height: 5px;
                > div.css-3g5hux-Slider {
                    background-color: purple;
                }
            }
            > .slcon {
                font-size: 0.9em;
                opacity: .5;
                padding-top: 10px;
                padding-bottom: 40px;
            }
        }
    }
    }
    
`;

const Indexcontent = styled.div`
    width: 76%;
    margin-left: 25px;
    > button {
        width: 40%;
        margin: 0 30%;
        border: none;
        background-color: var(--bs-primary);
        color: white;
        padding: 10px 0;
        border-radius: 20px;
        margin-bottom: 50px;
    }
    > .travel {
        padding-bottom: 40px;
        border-bottom: 1px solid rgba(0,0,0,.2);
        margin-bottom: 30px;
        > div {
            > div:first-child {
            border-radius: 10px;
            overflow: hidden;
            > a {
                display: block;
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px;
            }
        }
        > div:last-child {
            margin-left: 15px;
            > div:first-child {
                font-size: 1.1em;
            }
            > div:nth-child(2) {
                font-size: 0.85em;
                color: rgba(112,112,112,.8);
            }
            > div:nth-child(3) {
                margin-top: 15px;
                overflow: hidden;
                > span {
                    display: inline-block;
                    margin: 0 5px;
                    background-color: #ffad0a;
                    font-size: 0.80em;
                    padding: 3px 5px;
                    border-radius: 10px;

                }
            }
        }
        }
        
    }
`;
const Mapfiltering = styled.div`
    width: calc(100% - 80px);
    height: calc(100% - 80px);
    margin : 40px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10000000000;
    display: none;
    background-color: white;
    .topfix {
        position: relative;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        > h2 {
        font-size: 1.1em;
    }
    > button {
        background-color: transparent;
        border: none;
        position: absolute;
        left: 18px;
        top: 50%;
        transform: translateY(-50%);
        > span {
            display: block;
            text-indent: -9999em;
            width: 0;
            height: 0;
        }
    }
    }
    .divider {
        width: 100%;
        height: calc(100% - 60px);
        .mapfilter {
            overflow: auto;
            width: 23%;
            height: 100%;
            padding: 0 20px;
            .liteheader {
                padding: 20px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                h2 {
                    font-size: 1.15rem;
                    margin: 0;
                    font-weight: 700 !important;
                }
                button {
                    border: none;
                    background-color: transparent;
                    font-size: 14px;
                    opacity: .4;
                }
            }
            .litebtns {
                margin-top: 10px;
                .suk {
                    display: flex;
                    align-items: center;
                    padding-bottom: 20px;
                    border-bottom: 1px solid rgba(0,0,0,.3);
                    > button {
                        margin-right: 10px;
                        border-radius: 5px;
                        > span {
                            display: block;
                            text-indent: -9999em;
                            width: 0;
                            height: 0;
                        }
                        border: none;
                        background-color: transparent;
                        width: 20px;
                        height: 20px;
                        border: 1px solid rgba(0,0,0,.3);
                    }
                    > span {
                        font-weight: 400 !important;
                    }
                    
                }
                .suk2 {
                    padding-top: 20px;
                    border-bottom: 1px solid rgba(0,0,0,.3);
                    > h2 {
                        font-size: 1.15rem;
                        margin: 0;
                        font-weight: 700 !important;  
                        padding-bottom: 25px;        
                    }
                    .listbtnss {
                        display: flex;
                        align-items: center;
                        padding-bottom: 20px;
                        > button {
                        margin-right: 10px;
                        border-radius: 50%;
                        border: none;
                        background-color: transparent;
                        width: 20px;
                        height: 20px;
                        border: 1px solid rgba(0,0,0,.3);
                        > span {
                            display: block;
                            text-indent: -9999em;
                            width: 0;
                            height: 0;
                        }
                        }
                    }
                }
            }
        }
        .result {
            width: 23%;
            overflow: auto;
            > h2 {
                padding: 20px 10px;
                font-size: 1.05em;
            }
            .resultmapping {
                width: 100%;
                .goodresult {
                    width: 100%;
                    display: flex;
                    padding-bottom: 15px;
                    padding-top: 15px;
                    border-bottom: 1px solid rgba(0,0,0,.3);
                    .resultimg {
                        width: 40%;
                        max-height: 250px;
                        margin-left: 10px;
                        > img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                    .resulttxt {
                        width: calc(60% - 20px);
                        margin-left: 10px;
                        h2 {
                            margin: 0;
                            font-size: 0.7em;
                        }
                        h3 {
                            font-size: 0.85em;
                        }
                        p {
                            margin: 0;
                        }
                        .opin {
                            display: flex;
                            gap: 10px;
                            align-items: center;
                            > div {
                                display: inline-block;
                                font-size: 0.85em;
                            }
                            > div:first-child {
                                display: flex;
                                align-items: center;
                                background-color: #d92e0c;
                                color: white;
                                padding: 0 5px;
                                > svg {
                                    width: .65em;
                                    height: .65em;
                                }
                            }
                        }
                    }
                }
            }
        }
        .resultmap {
            width: calc(54% - 40px);
            height: 100%;
            position: relative;
            .verti {
                display: inline-block;
            }
        }
    }
    
`;

const Travel = () => {
    const [slidervalue,setslidervalue] = useState(100);
    const [realslide,setrealslide] = useState(5000000);
    
    const [maejinclick,setmaejinclick] = useState(false);
    const [allclick,setallclick] = useState(false);
    const [regclick,setregclick] = useState(false);
    const [moreclick,setmoreclick] = useState(false);
    const [morecon,setmorecon] = useState('더보기');
    const [mapclick,setmapclick] = useState(false);


    const handlech = (position) => {
        setslidervalue(position.x);
        setrealslide(position.x*5000);
    }   

    useEffect(()=>{
        document.querySelector('#mapbtn').addEventListener('click',()=>{
            document.body.classList.add('dim');
            setmapclick(true);
        });

        document.querySelector('.close').addEventListener('click',()=>{
            document.body.classList.remove('dim');
            setmapclick(false);
        })
    },[])

    return (
        <Travels>
            <h2>여행 가능 공간</h2>
            <Mapfiltering id="fixedfilter" className={mapclick ? 'd-block' : ''}>
                <div className="topfix">
                    <h2>지도</h2>
                    <button className="close"><span>닫기</span><CloseTwoToneIcon /></button>
                </div>
                <div className="divider d-flex">
                    <div className="mapfilter">
                        <div className="liteheader">
                            <h2>필터</h2>
                            <button><span>초기화</span><LoopIcon></LoopIcon></button>
                        </div>
                        <div className="litebtns">
                            <div className="suk">
                                <button><span>체크</span></button>
                                <span>매진 숙소 제외</span>
                            </div>
                            <div className="suk2">
                                <h2>숙소 유형</h2>
                                <div className="listbtnss">
                                    <button><span>체크</span></button>
                                    <span>전체</span>
                                </div>
                                <div className="listbtnss">
                                    <button><span>체크</span></button>
                                    <span>모텔</span>
                                </div>
                                <div className="listbtnss">
                                    <button><span>체크</span></button>
                                    <span>펜션</span>
                                </div>
                                <div className="listbtnss">
                                    <button><span>체크</span></button>
                                    <span>호텔/리조트</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="result">
                        <h2>검색 결과</h2>
                        <div className="resultmapping">
                            {
                                traveling.map((wl,wx)=>{
                                    return(
                                        <div className="goodresult">
                                            <div className="resultimg"><img src={wl.이미지파일} alt="이미지파일" /></div>
                                            <div className="resulttxt">
                                                <h2>{wl.계절}</h2>
                                                <p>{wl.태마명}</p>
                                                <h3>{wl.주소.split(' ')[0]} {wl.주소.split(' ')[1]}</h3>
                                                <div className="opin">
                                                    <div><StarIcon /><span>9.8</span></div>
                                                    <div>308명이 참여</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="resultmap">
                        <Map center={{lat: 37.5665, lng: 126.9780}}
                        style ={{width: '100%', height:'100%', objectFit: 'cover'}}
                        level={3}>
                            {
                                traveling.map((마,커)=>{
                                    return(
                                        <div className="verti" style={{position:'absolute',top:parseInt(마.위도), left:parseInt(마.경도), zIndex:'10000000'}}>
                                            <VerifiedUserIcon></VerifiedUserIcon>
                                        </div>
                                    )

                                })
                            }
                        </Map>
                    </div>
                </div>
            </Mapfiltering>
            <Filtering className="d-flex">
              <Indexing>
                <div className="wrapp">
                <div className="maps"><img src="https://i.imgur.com/wpdU202.jpg" alt="mapimg" />
                                      <button id="mapbtn">지도 보기</button>
                </div>
                <div className="filter">
                    <div className="d-flex align-items-center justify-content-between">
                        <h2>필터링</h2>
                        <button><span>초기화</span><i class="bi bi-arrow-repeat"></i></button>
                    </div>
                    <div className="chkbox">
                        <button className={maejinclick ? 'btnclicked': ''} onClick={(e)=>{setmaejinclick(prevState => !prevState);}}><span>체크</span></button>
                        <div>매진제외</div>
                    </div>
                    <div className="list">
                        <h2>유형</h2>
                        <div className="all">
                            <button className={`${allclick ? 'allclick' : ''}`} onClick={()=>{setallclick((allclick)=>!allclick);}}><span>전체</span></button>
                            <div>전체</div>
                        </div>
                        <div className="regs">
                            <button className={regclick ? 'regclick': ''} onClick={()=>{setregclick((regclick)=>!regclick);}}><span>지역</span></button>
                            <div>지역</div>
                        </div>
                        <div className="hotels">
                            <button><span>호텔유무</span></button>
                            <div>호텔유무</div>
                        </div>
                    </div>
                    <div className="prices">
                        <h2>가격<span>(1박기준)</span></h2>
                        <InputSlider axis="x" x={slidervalue} xmin={0} xmax={100} onChange={handlech}/>
                        <div className="slcon"><span>0원 ~ </span><span>{realslide}원</span></div>
                    </div>
                </div>
                </div>
                
              </Indexing>
              <Indexcontent>

              {
                maejinclick  ? (traveling.filter((maejin)=>maejin.매진 === 'ok').splice(0,5).map((el,iff)=>{
                    return(
                        <div className="travel">
                            <div className="d-flex">
                                <div className="col-5">
                                    <Link to={`/sangdam/shinchung/${parseInt(iff)+1}`}><img src={el.이미지파일} alt="idd"></img></Link>
                                </div>
                                <div className="col-7">
                                    <div>{el.태마명}</div>
                                    <div>{el.주소}</div>
                                    <div>{el.관광테마.split(', ').map((첫,둘)=>{
                                        return(
                                            <span>{첫}</span>
                                        )
                                    })}</div>
                            </div>
                            
                            </div>
                            
                        </div>
                    )
                })) : (null)
              }
              {
                allclick && !moreclick ?
                (
                    traveling.slice(0,5).map((e,i)=>{
                        return(
                            <div className="travel">
                                <div className="d-flex">
                                    <div className="col-5">
                                        <Link to={`/sangdam/shinchung/${parseInt(i)+1}`}><img src={e.이미지파일} alt="idd"></img></Link>
                                    </div>
                                    <div className="col-7">
                                        <div>{e.태마명}</div>
                                        <div>{e.주소}</div>
                                        <div>{e.관광테마.split(', ').map((셋,넷)=>{
                                            return(
                                                <span>{셋}</span>
                                            )
                                        })}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : ( traveling.slice(0,13).map((오,하요)=>{
                    return(
                        <div className="travel">
                            <div className="d-flex">
                                <div className="col-5">
                                    <Link to={`/sangdam/shinchung/${parseInt(하요)+1}`}><img src={오.이미지파일} alt="idd"></img></Link>
                                </div>
                                <div className="col-7">
                                    <div>{오.태마명}</div>
                                    <div>{오.주소}</div>
                                    <div>{오.관광테마.split(', ').map((셋,넷)=>{
                                        return(
                                            <span>{셋}</span>
                                        )
                                    })}</div>
                                </div>
                            </div>
                        </div>
                    )
                }))
              }
              {
                 regclick?
                 (
                    traveling.filter((regss)=>regss.주소.includes('삼동면') === true).slice(0,5).map((다섯,여섯)=>{
                        return(
                            <div className="travel">
                                <div className="d-flex">
                                    <div className="col-5">
                                        <Link to={`/sangdam/shinchung/${parseInt(여섯)+1}`}><img src={다섯.이미지파일} alt="idd"></img></Link>
                                    </div>
                                    <div className="col-7">
                                        <div>{다섯.태마명}</div>
                                        <div>{다섯.주소}</div>
                                        <div>{다섯.관광테마.split(', ').map((일곱,여덟)=>{
                                            return(
                                                <span>{일곱}</span>
                                            )
                                        })}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : (null)
              }
              {
                !maejinclick && !allclick && !regclick ?
                (
                    traveling.slice(0,5).map((푸,하)=>{
                        return(
                            <div className="travel">
                                <div className="d-flex">
                                    <div className="col-5">
                                        <Link to={`/sangdam/shinchung/${parseInt(하)+1}`}><img src={푸.이미지파일} alt="idd"></img></Link>
                                    </div>
                                    <div className="col-7">
                                        <div>{푸.태마명}</div>
                                        <div>{푸.주소}</div>
                                        <div>{푸.관광테마.split(', ').map((메이,플)=>{
                                            return(
                                                <span>{메이}</span>
                                            )
                                        })}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : (null)
              }

                <button onClick={()=>{ setmoreclick(!moreclick); moreclick ? setmorecon('더보기') : setmorecon('다시 닫기')}}>{morecon}</button>
              </Indexcontent>
            </Filtering>
        </Travels>
    ); 
            }
export default Travel;