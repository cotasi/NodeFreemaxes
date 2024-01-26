import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import  { Route , Routes, Link, useParams, useNavigate } from 'react-router-dom';
import R1C from './R1c';
import R2C from './R2c';


const DIV = styled.div`
    width: 100%;
    margin: 0 auto;
`;

const Linkwrap = styled.div`
    max-width: 75%;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    gap: 30px;
    justify-content: center;
    > a {
        padding: 10px 18px;
        text-decoration: none;
        color: black;
        border: 1px solid black;
        &.pgon {
            background-color: #d01f43 !important;
            color: white;
        }
    }
`;

const Region1 = () => {
    const [numb, setnumb] = useState(1);
    const num = [1,2,3,4,5,6,7]
    const navigate = useNavigate();

    const handlePageClick = (pageNumber) => {
        setnumb(pageNumber);
        navigate(`/region/gyeong/${pageNumber}`);
      };

      useEffect(()=>{
        document.querySelectorAll('.dd a').classList = '';
        document.querySelector('.dd a:nth-child(2)').classList.add('pgon');
      },[])
         

    return (
        <DIV>
            <Routes>
                <Route path="/" element={<R2C></R2C>}></Route>
            </Routes>
            <Linkwrap className="dd">
                {
                    num.map((eeee,iiii)=>{
                        return(
                            <Link to={`/region/gyeong/${eeee}`}
                            key={eeee}
                            onClick= {()=> handlePageClick(eeee)} className={num === eeee? 'pgon': ''}>{eeee}</Link>
                        )
                    })
                }
            </Linkwrap>
        </DIV>
    );
};

export default Region1;