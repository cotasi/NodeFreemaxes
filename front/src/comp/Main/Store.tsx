import * as React from 'react';
import { useState,useEffect } from 'react';

import '../../scss/Store.scss';
import { Store1 } from '../../ts/common';
import { Store2 } from '../../ts/common';
import { Storeall } from '../../ts/common';
import { serverapi } from 'api/serverapi';

import { Swiper,SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface Props {
    mergedData?: Storeall[] | null; // mergedData가 MergedData 배열 또는 null일 수 있음
  }

const Store: React.FC<Props> = () => {

    const [storeone,setstoreone] = useState<Store1[] | null>(null);
    const [storetwo,setstoretwo] = useState<Store2[] | null>(null);
    const [tabs,settabs] = useState({
        tabson: false,
        tabsidx: 0
    })

    const FetchStoreOne = async (): Promise<void> => {
        try {
            const storedata1 = await serverapi('store_1');
            if(storedata1 instanceof Error) {
                throw storedata1;
            }
            if(storedata1 === undefined) {
                console.log('response is undefined');
                return;
            }
            if(Array.isArray(storedata1?.data)) {
                setstoreone([...(storedata1?.data || [])])
            }
            
        }catch(error) {
            console.log('에러'+ error);
        }
    }  

    const FetchStoreTwo = async (): Promise<void> => {
        try {
            const storedata2 = await serverapi('store_2');
            if(storedata2 instanceof Error) {
                throw storedata2;
            }
            if(storedata2 === undefined) {
                console.log('response is undefined');
                return;
            }
            if(Array.isArray(storedata2?.data)) {
                setstoretwo([...(storedata2?.data || [])])
            }
            
        }catch(error) {
            console.log('에러'+ error);
        }
    }  
    
    useEffect(()=>{
        FetchStoreOne();
        FetchStoreTwo();
        settabs({
            tabson: true,
            tabsidx: 0
        })
    },[])

    console.log(storetwo);

    const mergedData = storeone?.map(storeo => ({
        ...storeo,
        store_detail: storetwo?.filter(storet => storet.store_id === storeo.store_id)
      }));

    console.log(JSON.stringify(mergedData, null, 2)); 

    const storebreak = {
        1560: {
            spaceBetween: 60,
            slidesPerView: 4
        },
        1024: {
            spaceBetween: 50,
            slidesPerView: 3
        },
        768: {
            spaceBetween: 30,
            slidesPerView: 2
        },
        640: {
            spaceBetween: 20,
            slidesPerView: 1
        },
    }

    return (
        <div className="stores">
            <div className="mx-auto xl:max-w-screen-xl lg:max-w-screen-lg sm:max-w-screen-sm max-w-screen-ssm max-w-screen-xssm max-w-screen-xxssm max-w-screen-xxxssm">
                <h2>스토어 아이템들</h2>
                <p>등록된 스토어에서 판매되는 아이템들을 소개합니다.</p>
                <div className="storetabs">
                    <ul className="flex">
                       {
                        mergedData?.map((md,idxx)=>(<li><button className={`${tabs.tabson && tabs.tabsidx === idxx ? 'storeon': ''}`} onClick={()=>{settabs({tabson: true, tabsidx: idxx})}}>{md.store_type}</button></li>))
                       }
                    </ul>
                </div>
                <div className="storecon">
                    {
                        mergedData?.map((mdd,idx)=>(<Swiper className={`${tabs.tabson && tabs.tabsidx === idx ? 'swiperon': ''}`} breakpoints={storebreak} slidesPerView={1} spaceBetween={20}>
                            {
                                mdd.store_detail?.map((sd)=>(
                                    <SwiperSlide>
                                        <div className="imgpart">
                                            {
                                                sd.store_product_path?.substring(1,sd.store_product_path.length - 1 ).split(',').map((path)=>(
                                                    <img src={path} alt={`${path}imgg`}/>
                                                ))
                                            }
                                        </div>
                                        <div className="textwrap">
                                            <div className="storeproduct">{sd.store_product_name}</div>
                                            <div className="prices flex">
                                               <div>{sd.store_product_issale ? Intl.NumberFormat().format(parseInt(sd.store_product_sales)) : Intl.NumberFormat().format(parseInt(sd.store_product_price))}원</div>
                                               {sd.store_product_issale ? <div>{Math.floor((parseInt(sd.store_product_price) - parseInt(sd.store_product_sales))/parseInt(sd.store_product_price)*100)}%</div> : null }
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>))
                    }
                </div>    
            </div>
        </div>
    );
};

export default Store;