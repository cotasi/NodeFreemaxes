import * as React from 'react';
import { useEffect, useState} from 'react';
import { serverapi } from '../../api/serverapi';
import { Mainform } from 'ts/common';

import '../../scss/Contact.scss';
import SearchIcon from '@mui/icons-material/Search';
import Busregion from '../../Data/busregion.json';

const ContactForm = () => {

    const [centerbutton,setcenterbutton] = useState({
        center1: "37.3595704",
        center2: "127.105399"
    });

    const [submitdata,setsubmitdata] = useState('');
    const [realsubmit,setrealsubmit] = useState('');
    const [algo,setalgo] = useState(false);
    const [formdata,setformdata] = useState({});
    const [resformdata,setresformdata] = useState({});
    const num = 5;

useEffect(()=>{
       // 네이버 지도 생성
        const mapOptions = {
            center: new window.naver.maps.LatLng(parseInt(centerbutton.center1), parseInt(centerbutton.center2)),
            zoom: 15
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
    },[centerbutton])

    const result = Busregion.find((busRoute) => {
        return busRoute.bus_stop.includes(submitdata);
      });
    console.log(result);

    const formapi = async (tablerouter:any,formdata:any) => {
        const formapidata = await serverapi(tablerouter,formdata);
       return formapidata?.data;
    }

    const submiteffect = (e:any) => {
        e.preventDefault();
    }

    const handlechange = (e:any) => {
        
        const { name, value } = e.target;
        setformdata(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handlesubmit = (e:any) => {
        e.preventDefault();
        const realform = formapi('first_form',formdata);
        console.log('gul',realform);
    };

    useEffect(()=>{
        console.log('real',formdata);
    },[formdata])

    return (
        <div className="contact">
            <div className="mx-auto max-w-screen-xl">
                <h2>Contact us</h2>
                <p>문의사항은 아래 양식으로 보내주세요.</p>
                <div className="contactcon flex">
                    <div className="mapwrap">
                        <div id="map" style={{width: '100%', height: '100%', objectFit: 'cover'}}></div>
                        <div className="forms relative">
                            <form>
                                <input type="text" placeholder="검색어를 입력해주세요." className={`${submitdata !== '' && algo ? 'inputon': ''}`} value={submitdata} onChange={(e)=>{setsubmitdata(e.target.value); setalgo(true); submitdata == '' ? setalgo(false): setalgo(true)}} />
                                <button type="submit" onClick={(e)=>{e.preventDefault();}} onSubmit={(e)=>{submiteffect(e)}} ><span className="sr_only">검색하기</span><SearchIcon /></button>
                            </form>
                            <div className={`search_algorithm absolute top-full ${submitdata !== '' && algo ? 'algoon': ''}`}>
                            {
                                result?.bus_stop.split('|').map((bussplit)=>(<div onClick={()=>{setsubmitdata(bussplit.substring(1,bussplit.length-1).split(',')[2]); setalgo(false);}}>{bussplit.substring(1,bussplit.length-1).split(',')[2]}</div>))
                            }
                            </div>
                            <div className="search_result">
                                <div>{realsubmit}</div>
                            </div>
                        </div>
                    </div>
                    <div className="realform">
                        <form onSubmit={handlesubmit}>
                            <input type="text" placeholder="이름" name="f_name" id="formname" onChange={(e)=>{handlechange(e)}} />
                            <input type="text" placeholder="연락처" name="f_tel" id="formtel" onChange={(e)=>{handlechange(e)}}/>
                            <input type="text" placeholder="이메일" name="f_email" id="formemail" onChange={(e)=>{handlechange(e)}}/>
                            <textarea name="f_text" id="formtext" onChange={(e)=>{handlechange(e)}}></textarea>
                            <button type="submit">연락하기</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;