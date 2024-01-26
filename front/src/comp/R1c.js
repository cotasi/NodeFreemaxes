import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Gwangju from '../Data/gwangju.json';
import { Link } from 'react-router-dom';

const Bigwrap = styled.div`
    padding-top: 50px;
    max-width: 85%;
    margin: 0 auto;
    & h2 {
        font-size: 1.3em;
        padding-bottom: 30px;
    }
`;

const Tablerwrap = styled.div`
    width: 100%;
`;

const Tablertop = styled.div`
    border-top: 2px solid black;
    background-color: #f8f8f8;
    > span {
        text-align: center;
        border-right: 1px solid rgba(0,0,0,.5);
        padding: 15px 0;
    }
    > span:last-child {
        border-right: none;
    } 
`;

const Tablercon = styled.div`
    > div {
        border-top: 1px solid black;
    }
    background-color: white;
    > div >span {
        padding: 15px 0;
        text-align: center;
        border-right: 1px solid black;
    }
    > div > span:last-child {
        border: none;
    }
`;

const Pagination = styled.div`
    width: 100%;
`;

const Inputwrap = styled.div`
    background-color: #f8f8f8;
    padding: 30px 0;
    margin-bottom: 60px;
    text-align: center;
    > div {
        max-width: 90%;
        margin: 0 auto;
        > form {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            > button {
                margin-left: 30px;
                border: none;
                padding: 10px 0;
                background-color: #d01f43;
                color: white;
            }
            > input {
                padding: 0 10px;
                &::placeholder {
                    opacity: .4;
                }
            }
        }
    }
`;

const Selectbox = styled.div`
    margin-right: 15px;
    position: relative;
    width: 300px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    cursor: pointer;
    box-sizing: content-box;
    &:hover {
        border-bottom: 0;
        padding-bottom: 1px;
        > div {
            background-color: #d01f43;
            color: white;
        }
        > ul {
            height: 180px;
            
        }
    }
    > div {
        padding: 10px 15px;
        width: 100%;
        text-align: left;
        > i {
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            &::before {
                font-size: 12px;
            }
        }
    }
    > ul {
        height: 0;
        overflow: hidden;
        transition: all .4s;
        list-style: none;
        padding: 0;
        margin: 0;
        margin-left: -1px;
        border: 1px solid black;
        border-top: none;
        box-sizing: content-box;
        position: absolute;
        width: 100%;
        top: 100%;
        left: 0;
        right: 0;
        background-color: white;
        > li {
            > a {
                text-decoration: none;
                font-size: 16px;
                text-align: left;
                display: block;
                padding: 10px 15px;
                color: black;
                &.rockon {
                    background-color: #d01f43;
                    color: white;
                }
        }
    }
}
`;

const Region1 = React.memo(() => {

    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseOver = (index) => {
        setHoveredItem(index);
    };

    const handleMouseOut = () => {
        setHoveredItem(null);
    };

    const handleOptionClick = (vent,option) => {
        vent.preventDefault();
        setSelectedOption(option);
      };
    

    const CustomSelectBox = ({ options, onSelect }) => {
        const [selectedOption, setSelectedOption] = useState({});
        const [menuVisible, setMenuVisible] = useState(false);
        const selectBoxRef = useRef(null);
      
        useEffect(() => {
          const handleClickOutside = (event) => {
            if (selectBoxRef.current && !selectBoxRef.current.contains(event.target)) {
              setMenuVisible(false);
            }
          };
      
          document.addEventListener('mousedown', handleClickOutside);
      
          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
        }, []);
      
        const handleSelectClick = () => {
          setMenuVisible(!menuVisible);
        };
    }

        const [selectedOption, setSelectedOption] = useState("옵션 선택");

        const bunryo = ['노선번호','상행첫차','하행첫차','데이터기준일자'];

        const filterGwangju = Gwangju.slice(0, 50);

        const inputref = useRef(null);

        const [value, setvalue] = useState('');

        const [twofilter, setTwofilter] = useState([]);

        useEffect(()=> {
            if(filterGwangju.length > 0 && twofilter.length == 0) {
                setTwofilter([...filterGwangju]);
            }
        },[filterGwangju,twofilter])

        const handleformsubmit = (e) => {
            e.preventDefault();

            if (inputref.current && inputref.current.focus) {
                console.log('조건이 충족됨');
                if(value.trim() === "") {
                    setTwofilter([]);
                }else {
                setTwofilter(Gwangju.filter(item =>{
                    const valueToSearch = item[selectedOption].toString();
                    console.log(`1 ${valueToSearch} 2 ${value}`);
                    return valueToSearch.includes(value);
                } ));
                }   
                console.log('상태 업데이트 후:',twofilter)
            } else {
                console.log('조건이 충족되지 않음');
                console.log(inputref.current);
                setTwofilter([]);
            }
        };

        const handleinputchange = (e) => {
            setvalue(e.target.value);
        };

        return (
            <Bigwrap>
                <h2>
                    {Gwangju.length}
                    <span>건</span>
                </h2>
                <Inputwrap>
                    <div>
                        <form onSubmit={handleformsubmit}>
                            <Selectbox>
                                <div className="item position-relative"><span>{selectedOption}</span>
                                <i class="bi bi-caret-down-fill position-absolute"></i></div>
                                <ul className="selectsub">
                                    {
                                        bunryo.map((eee,iii)=>{
                                            return(
                                                <li><Link to ="/" className={hoveredItem === iii ? 'rockon' : ''}
                                                onMouseOver={() => handleMouseOver(iii)}
                                                onMouseOut={handleMouseOut}
                                                onClick= {(e)=>handleOptionClick(e,eee)}>{eee}</Link></li>
                                            )
                                        })
                                    }
                                </ul>
                            </Selectbox>
                            <input ref={inputref} className="col-6" placeholder="검색어를 입력하세요." value={value} onChange={handleinputchange}></input>
                            <button type="submit" className="col-4">검색</button>
                        </form>
                    </div>
                </Inputwrap>
                <Tablerwrap>
                    <Tablertop className="d-flex">
                        <span className="col">노선번호</span>
                        <span className="col">상행첫차</span>
                        <span className="col">하행첫차</span>
                        <span className="col">데이터기준일자</span>  
                    </Tablertop>
                    <Tablercon>
                        {Array.isArray(twofilter) && twofilter.map((eee, iii) => (
                            <div className="d-flex" key={iii}>
                                <span className="col">{eee.노선번호}</span>
                                <span className="col">{eee.상행첫차}</span>
                                <span className="col">{eee.하행첫차}</span>
                                <span className="col">{eee.데이터기준일자}</span>
                            </div>
                        ))}
                    </Tablercon>
                </Tablerwrap>
            </Bigwrap>
        );
    });


export default Region1;