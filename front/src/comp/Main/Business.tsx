import * as React from 'react';
import { useState, useEffect } from 'react';
import { Businesss } from '../../ts/common';
import { serverapi } from '../../api/serverapi';

import '../../scss/Business.scss';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Business = () => {
    type scales = {
        scaleon: boolean,
        scaleidx: any
    }
    const [scale,setscale] = useState<scales>({
        scaleon: false,
        scaleidx: null
    });

    const [busi,setbusi] = useState<Businesss[] | null>(null);

    const clickHandler = (idx:number = 0) => {

        setscale({
            scaleon: !scale.scaleon,
            scaleidx: idx
        });

        console.log(scale);
    };

    const FetchBusiness = async (): Promise<void> => {
        try {
            const busidata = await serverapi('business');
            if(busidata instanceof Error) {
                throw busidata;
            }
            if(busidata === null) {
                console.log('response is undefined');
                return;
            }
            if(Array.isArray(busidata?.data)) {
                setbusi([...(busidata?.data || [])]);
            }
        }catch(error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        FetchBusiness();
    });

    return (
        <div className="business">
            <div className="mx-auto max-w-screen-xl">
                <h2>사업 영역</h2>
                <p>프리맥스에서 제공하는 컨텐츠들입니다.</p>
                <div className="businesscon">
                    <ul className="flex">
                        {/* <li><button>
                                <div className="subject">호텔예약</div>
                                <button className="clickbtn" onClick={()=>{clickHandler(2)}}><div><span className="sr_only">확대하기</span><AddIcon /></div>
                                        <div><span className="sr_only">축소하기</span><RemoveIcon /></div>
                                </button>
                                <div className="hidden_con">
                                    <div>호텔 예약</div>
                                    <div>여기어때와 협약하여, 호텔 예약 프로그램을 제공</div>
                                </div>
                            </button>
                        </li> */}
                        {
                            busi?.map((busi,idx)=>(
                                <li className={`${scale.scaleon && scale.scaleidx === idx ? 'btnover': ''}`}><button><div className="subject">{busi.business_name}</div>
                                            <button className={`clickbtn`} onClick={()=>{clickHandler(idx)}}><div><span className="sr_only">확대하기</span><AddIcon /></div>
                                            <div><span className="sr_only">축소하기</span><RemoveIcon /></div>
                                            </button>
                                            <div className="hidden_con">
                                                <div>{busi.business_name}</div>
                                                <div>{busi.business_program}</div>
                                            </div>
                                </button></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Business;