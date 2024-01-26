import React from 'react';
import Data from '../Data/Data.json'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Subnaviwrap = styled.div`
    width: 100%;
`

const SubnaviTop = styled.div`
    width: 100%;
    height: 200px;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.2);
    }
    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(100%);
    }
    > div {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0;
        margin: 0;
        padding: 80px 90px;
        color: white;
        z-index: 100000;
        > h2 {
            display: inline-block;
            margin-right: 10px;
        }
        > span {
            font-weight: 200 !important;
        }

    }
`;

const Subnavibottom = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 50px;
    background-color: white;
    border-bottom: 1px solid rgba(0,0,0,.2);
    background-color: #f9f9f9;
    > a {
        padding-right: 10px;
        padding: 30px 0;
    }
    > a > span {
        display: block;
        text-indent: -9999em;
        width: 0;
        height: 0;
    }
    > a > i::before {
        color: rgba(0,0,0,.5);
        font-size: 1.4em;
    }
    > div.maindrop {
        position: relative;
        
        &:hover {
            > ul {
                height: 270px;
                border: 1px solid rgba(0,0,0,.2);
                border-top: none;
                & a:hover {
                    font-weight: 900 !important;
                }
            }
        }
            > a {
                padding: 30px 50px;
                display: block;
                text-decoration: none;
                text-align: left;
                color: black;
                > i {
                    margin-left: 50px;
                    &::after {
                        color: black;
                    }
                }
            }
            > ul {
                list-style: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                height: 0;
                overflow: hidden;
                background-color: #f9f9f9;
                transition: all .4s;
                z-index: 10000000;
                > li {
                    > a {
                        text-decoration: none;
                        padding: 10px 0;
                        display: block;
                        font-weight: 200 !important;
                        color: black;
                    }
                }
            }
        }
`

const Subnavi = (props) => {
    return (
            <Subnaviwrap>
                <SubnaviTop>
                    <img src="https://i.imgur.com/DCd45vb.jpg" alt="jpg" />
                    <div>
                    <h2>{props.default2}</h2>
                    <span>{props.default3}</span>
                    </div>
                </SubnaviTop>
                <Subnavibottom>
                    <Link to="/"><span>홈으로</span>
                    <i class="bi bi-house-door"></i></Link>
                    <div className="maindrop">
                        <Link to=""><span>{props.default1}</span>
                        <i class="bi bi-chevron-down"></i></Link>
                        <ul>
                        {Data[1].menu.map((ee, ii) => (
                            ee.menu2.map((eee, iii) => (
                                <li key={iii}><Link to={eee.href}>{eee.name}</Link></li>
                            ))
                        ))}
                        </ul>
                    </div>
                    <div className="maindrop">
                        <Link to=""><span>{props.default2}</span>
                        <i class="bi bi-chevron-down"></i></Link>
                        <ul>
                            
                        </ul>
                    </div>
                </Subnavibottom>
            </Subnaviwrap>
        );
};

export default Subnavi;