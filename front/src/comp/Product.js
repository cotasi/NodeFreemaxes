import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Pro from '../Data/Product.json';

const Productwrap = styled.div`
    max-width: 85%;
    margin: 0 auto;
    > h2 {
        padding-top: 90px;
        font-size: 1.8em;
        padding-bottom: 30px;
        font-weight: 700 !important;
        margin-bottom: 45px;
        border-bottom: 1px solid black;
    }
`;

const Products = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 50px;
    > h3 {
        font-weight: 400 !important;
        font-size: 1.1em;
        > span {
            color: purple;
        }
    }
    > ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        margin-top: 50px;
        gap: 30px;
        list-style: none;
        > li {
            width: 15vw;
            > div:first-child {
                width: 100%;
                height: 15vw;
                position: relative;
                background-color: rgb(246, 248, 251);
                > a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    overflow: hidden;
                    height: 100%;
                    &:hover img {
                        transform: scale(1.2);
                    }
                    > img {
                    width: 60%;
                    height: 60%;
                    object-fit: contain;
                    transition: all .4s;
                }
                }
                
            }
            > div:nth-child(2) {
                padding-top: 20px;
                font-weight: 400 !important;
                color: #5a5c60;
                padding-bottom: 5px;
            }
            > div:nth-child(3) {
                font-size: 1.05em;
                font-weight: 500 !important;
                padding-bottom: 5px;
                
            }
            > div:nth-child(4) {
                >span.sale {
                    font-size: 1.05em;
                    color: purple;
                }
                > span.ori {
                    font-size: 0.75em;
                    margin-left: 10px;
                    margin-right: 10px;
                    text-decoration: line-through;
                    opacity: .2;
                    &.nosale {
                        text-decoration: none;
                        font-size: 1.05em;
                        opacity: 1;
                    }
                }
                }
            }
        }
`;

const Drops = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    > button {
        &.down {
            & + ul {
                height: 85px;
            }
        }
        background-color: transparent;
        padding: 10px 15px;
        width: 150px;
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 10px;
        text-align: left;
        position: relative;
        > i {
            position: absolute;
            right: 15px;
        }
    }
    > ul {
        list-style: none;
        padding: 0;
        margin: 0;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        border-radius: 10px;
        height: 0;
        overflow: hidden;
        transition: all .4s;
        > li {
            > button {
                background-color: transparent;
                width: 100%;
                text-align: left;
                border: none;
                padding: 10px 15px;
                &:hover {
                    background-color: purple;
                    color: white;
                }
            }
        }
    }
`;

const Product = (props) => {
    const { what, coffee } = props;

    const array = ['높은 가격순','낮은 가격 순'];

    const [drop,setdrop] = useState(false);
    
    const [dropcon,setdropcon] = useState('선택');

    const [dropnum,setdropnum] = useState(null);

    const [sortpro,setsortpro] = useState(what);

    const [issale,setissale] = useState(false);

   useEffect(()=>{

    if(dropcon === array[0]) {
        setsortpro([...what].sort((a,b)=> b.coffeeprice - a.coffeeprice));
    } else if (dropcon === array[1]) {
        setsortpro([...what].sort((c,d)=>c.coffeeprice - d.coffeeprice));
    }
   },[dropcon,array,what]);

    return (
        <Productwrap>
            <h2>커피 제품({what.length})</h2>
            <Products>
                <h3>전체 <span>{what.length}</span>건</h3>
                <Drops id="drops">
                  <button onClick={()=>{setdrop(!drop)}} className={drop ? 'down': ''}><span>{dropcon}</span><i class="bi bi-chevron-down"></i></button>
                  <ul>
                    {
                        array.map((el,iff)=>{
                            return(
                                <li><button onClick={()=>{setdropnum(iff); setdropcon(el); setdrop(false);}}>{el}</button></li>
                            )
                        })
                    }
                  </ul>
                </Drops>
                <ul>
                    {
                        sortpro.map((eles,idxs)=>{
                            return(
                                <li>
                                    <div>
                                        <Link to={`/product/coffee/${parseInt(idxs)+1}`}>
                                        <img src={eles.coffeeimages[0]} alt="coffee" />
                                        </Link>
                                    </div>
                                    <div>{eles.coffeecompany}</div>
                                    <div>{eles.coffeeinames}
                                    </div>
                                    <div>
                                        {eles.coffeeissale ? <span className="sale">{
                                            Math.floor(((parseInt(eles.coffeeprice)-parseInt(eles.coffeesale))/parseInt(eles.coffeeprice))*100)
                                            }%</span> : '' }
                                        {   !issale ?
                                            (<span className="ori">{Intl.NumberFormat('ko-kr').format(eles.coffeeprice)}원</span>)
                                            : null
                                        }
                                        {
                                            eles.coffeeissale = 'true' ? <span className="saleprice">{eles.coffeesale}</span> : null
                                        }
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>    
            </Products>
        </Productwrap>
    );
};

export default Product;