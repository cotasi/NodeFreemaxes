import * as React from 'react';

/* default import */
import HeaderAll from './comp/HeaderAll';
import Main from './comp/Main/Main';
import Footer from './comp/Footer';

/* detail */
import Coffee from './comp/Store/Coffee';
import Detail from './comp/Store/Detail';
import { Route,Routes} from 'react-router-dom';

/* Reser */
import Reservation from './comp/Reservation/Reservation';

const Kings = () => {

    return (
        <div>
            <HeaderAll/>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/stores">
                    <Route path="/stores/coffee" element={<Coffee />}>
                    </Route>
                    <Route path="/stores/coffee/0" element={<Detail il={0} />}>
                    </Route>
                </Route>
                <Route path="/reser">
                    <Route path="/reser/busres" element={<Reservation one={1} two={1} />}></Route>
                </Route>
            </Routes>
            <Footer />
        </div>
    );
};

export default Kings;