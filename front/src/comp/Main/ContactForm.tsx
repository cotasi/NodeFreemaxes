import * as React from 'react';
import { useEffect } from 'react';

import '../../scss/Contact.scss';

const ContactForm = () => {
    useEffect(()=>{
       // 네이버 지도 생성
        const mapOptions = {
            center: new window.naver.maps.LatLng(37.3595704, 127.105399),
            zoom: 10
        };
        const map = new window.naver.maps.Map('map', mapOptions);

        // 마커 추가
        const markerOptions = {
            position: new window.naver.maps.LatLng(37.3595704, 127.105399),
            map: map
        };
        const marker = new window.naver.maps.Marker(markerOptions);

        // 컴포넌트 언마운트 시 마커 제거
        return () => {
            marker.setMap(null);
        };
    })
    return (
        <div className="contact">
            <div className="mx-auto max-w-screen-xl">
                <h2>Contact us</h2>
                <p>문의사항은 아래 양식으로 보내주세요.</p>
                <div className="contactcon">
                    <div className="mapwrap"><div id="map"></div></div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;