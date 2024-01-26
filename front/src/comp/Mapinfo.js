import React, { useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const MapInfowrapper = styled.div`
    width: 60%;
    margin: 0 auto;
    height: 100%;
    margin-bottom: 60px;
    & h2 {
        font-size: 1.5em;
        position: relative;
        margin-bottom: 8%;
        padding-top: 7%;
        &::after {
            content: '';
            display: block;
            position: absolute;
            bottom: -25%;
            width: 100%;
            height: 2px;
            background-color: black;
        }
    }
`;

const Mapwrapper = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
`;


const Mapinfo = () => {

    return (
        <MapInfowrapper>
            <h2>어디로 가야 할까요?</h2>
            <Mapwrapper>
                <Map center={{lat: 33.5563, lng: 126.79581}}
                     style ={{width: '100%', height:'100%', objectFit: 'cover'}}
                     level={3}>
                        <MapMarker position = {{ lat: 33.55635, lng: 126.795841}}></MapMarker>
                     </Map>
            </Mapwrapper>
        </MapInfowrapper>
    );
};

export default Mapinfo;