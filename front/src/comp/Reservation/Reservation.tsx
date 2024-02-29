import React from 'react';
import Submenu from '../Submenu';


type Reser = {
    one:number,
    two:number
}
const Reservation: React.FC<Reser> = ({one,two}) => {
    return (
        <div className="reserve">
            <Submenu one={1} two={0} three={3}/>
            <div className="mx-auto max-w-screen-xl">
                
            </div>
        </div>
    );
};

export default Reservation;