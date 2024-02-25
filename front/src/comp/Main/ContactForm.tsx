import * as React from 'react';
import { useEffect, useState} from 'react';

import '../../scss/Contact.scss';
import SearchIcon from '@mui/icons-material/Search';
import Busregion from '../../Data/busregion.json';

const ContactForm = () => {
useEffect(()=>{
       // 네이버 지도 생성
        const mapOptions = {
            center: new window.naver.maps.LatLng(parseInt(centerbutton.center1), parseInt(centerbutton.center2)),
            zoom: 10
        };
        const map = new window.naver.maps.Map('map', mapOptions);

        // 마커 추가
        const markerOptions = {
            position: new window.naver.maps.LatLng(parseInt(centerbutton.center1), parseInt(centerbutton.center2)),
            map: map
        };
        const marker = new window.naver.maps.Marker(markerOptions);

        // 컴포넌트 언마운트 시 마커 제거
        return () => {
            marker.setMap(null);
        };
    })

    const [submit,setsubmit] = useState('');
    const [centerbutton,setcenterbutton] = useState({
        "center1": "37.3595704",
        "center2": "127.105399"
    })
    const onChange = (e:any) => {
        setsubmit(e.target.value);
    }
    console.log(centerbutton.center1);
    Busregion.map((reg) => (
        reg.bus_stop.split('|').map((splt) => {
            // '|' 기호로 문자열을 나누고, 그 결과로 나온 배열에 map 함수를 적용합니다.
            // 여기서 splt는 문자열을 나타냅니다.
            // 이어서 각 문자열을 다시 쉼표로 나누어 배열을 만듭니다.
            const splitArray = splt.substring(1, splt.length - 1).split(',');
            console.log(splitArray[4]);
        })
    ));


    const search_result = Busregion.filter((items)=>(items.bus_stop.split('|').map((splll)=>{splll.substring(1,splll.length - 1).split(',')[0].includes(submit)})));

    return (
        <div className="contact">
            <div className="mx-auto max-w-screen-xl">
                <h2>Contact us</h2>
                <p>문의사항은 아래 양식으로 보내주세요.</p>
                <div className="contactcon flex">
                    <div className="mapwrap">
                        <div id="map" style={{width: '100%', height: '100%', objectFit: 'cover'}}></div>
                        <div className="forms">
                            <form>
                                <input type="text" placeholder="검색어를 입력해주세요." value={submit} onChange={onChange}/>
                                <button type="submit"><span className="sr_only">검색하기</span><SearchIcon /></button>
                            </form>
                            <div className="searchresult">
                            {
                                search_result.map((resu)=>(
                                    <>
                                        {
                                            resu.bus_stop.split('|').map((buses)=>(<div className="result_list flex justify-between">
                                                <div>
                                                    {
                                                        buses.substring(1,buses.length - 1).split(',')[2]
                                                    }
                                                </div>
                                                <div><button onClick={()=>{setcenterbutton({center1:buses.substring(1,buses.length - 1).split(',')[3],center2:buses.substring(1,buses.length - 1).split(',')[4]}); console.log('dd'); }}>확인하기</button></div>
                                            </div>))
                                        }
                                    </>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                    <div className="realform">
                        <form>
                            <input type="text" placeholder="이름"/>
                            <input type="text" placeholder="연락처"/>
                            <input type="text" placeholder="이메일"/>
                            <textarea name="" id=""></textarea>
                            <button type="submit">연락하기</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;