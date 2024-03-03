import * as React from 'react';
import Store1 from '../../Data/store_1.json';
import Store2 from '../../Data/store_2.json';
import '../../scss/detail.scss';

type Nu = {
    il:number
}



const Detail: React.FC<Nu> = ({il}) => {

    const storealls = Store1.map((st1)=>({
        ...st1,
        store_detail:Store2.filter((st2)=>st2.store_id === st1.store_id)
    }));

    return (
        <div className="detail">
          11111111
        </div>
    );
};

export default Detail;