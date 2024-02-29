import * as React from 'react';
import Submenu from '../Submenu';

import Store1 from '../../Data/store_1.json';
import Store2 from '../../Data/store_2.json';

import '../../scss/Coffee.scss';

import { Link } from 'react-router-dom';

import { Swiper,SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation])

const Coffee = () => {
    const [storetab,setstoretab] = React.useState({
        storetabon: false,
        storetabidx: 0
    })
    const storeall = Store1.map((st1)=>({
        ...st1,
        store_detail:Store2.filter((st2)=>st2.store_id === st1.store_id)
    }));

    React.useEffect(()=>{
    setstoretab({
        ...storetab,
        storetabon:true
    })
    },[])
    
    return (
        <div className="store">
            <Submenu one={2} two={1} three={0}/>
            <div className="storetab">
                <div className="mx-auto max-w-screen-xl">
                    <Swiper id="storetab" slidesPerView={9} spaceBetween={5}>
                        {
                            storeall[0].store_detail.map((sdet,idx)=>(
                                <SwiperSlide>
                                    <div className="coffee_list">
                                        <button className={`${storetab.storetabon && storetab.storetabidx == idx? 'storeons': ''}`} onClick={()=>{setstoretab({storetabon:true,storetabidx:idx})}}>
                                            <div className="imgwrap"><img src={sdet.theme_img} alt="themeimg" /></div>
                                            <div className="text">{sdet.stores_type}</div>
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className="storecons">
                    <div className="mx-auto max-w-screen-xl">
                        <div className="conswrap">
                            <strong>{storeall[0].store_detail.filter((items)=>(items.stores_type === storeall[0].store_detail[storetab.storetabidx].stores_type)).length}개 가 있습니다.</strong>
                            <div className={`conlist flex flex-wrap`} >
                                {
                                   storeall[0].store_detail.filter((items)=>(items.stores_type === storeall[0].store_detail[storetab.storetabidx].stores_type)).map((sdex,iii)=>(
                                    <Link to={`/stores/coffee/${iii}`}>
                                        <div className="number">0{iii+1}</div>
                                        <div className="imgwrap"><img src={sdex.store_product_path.substring(1,sdex.store_product_path.length-1).split(',')[0]} alt="" /></div>
                                        <div className="text">
                                            <div>{sdex.store_product_name}</div>
                                            <div className="prices flex items-center">
                                                {sdex.store_product_issale && sdex.store_product_sales !== null ? <div className="salesper">{Math.floor(((sdex.store_product_price - sdex.store_product_sales) / (sdex.store_product_price))*100)}%</div> : null }
                                                {sdex.store_product_issale && sdex.store_product_sales !== null ? <div className="sales">{sdex.store_product_sales}</div>: null}
                                                <div className="oriprice">{sdex.store_product_price}</div>
                                            </div>
                                        </div>
                                    </Link>
                                   )) 
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Coffee;
