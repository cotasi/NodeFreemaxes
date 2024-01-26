import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Joinwrap = styled.div`
    max-width: 50%;
    margin: 50px auto;
    border: 1px solid rgba(0,0,0,.2);
    > form {
        display: block;
        width: 100%;
        height: 100%;
        > fieldset > legend {
            text-align: center;
            margin-bottom: 30px !important;
            margin-top: 30px !important;
        }
        > fieldset {
            width: 100%;
            > button {
                    width: 60%;
                    margin: 0 auto;
                    text-align: center;
                    display: block;
                    margin-top: 20px;
                    height:60px;
                    border: none;
                    background-color: #13cfb8;
                    color: white;
                    border-radius: 5px;
                    margin-bottom: 30px;
                }
            > div {
                text-align: center;
                margin-top: 20px;
                > label {
                    text-align: left;
                    width: 60%;
                    margin: 0 auto;
                    font-size: 1.05em;
                    >b {
                        color: red;
                        margin-left: 5px;
                    }
                }
                > label,
                > input {
                    display: block;
                }
                > input {
                    width: 60%;
                    height: 40px;
                    margin: 0 auto;
                    margin-top: 10px;
                    border-radius: 10px;
                    border: 1px solid rgba(0,0,0,.3);
                    padding: 10px 15px;
                }
            }
        }
    }
`;

const Join = () => {
    const [id,setid] = useState('');
    const [password,setpassword] = useState('');
    const history = useNavigate();

    const handleJoin = async()=>{
        try {
            history.push('/signup');
        }catch(error) {
            console.error('회원가입 실패',error);
        }
    }

    return (
        <Joinwrap>
            <form>
                <fieldset>
                    <legend className="m-0">회원 가입</legend>
                    <div>
                        <label htmlFor="">아이디<b>*</b></label>
                        <input type="text" name="username" value={id} oncChange={(e)=> setid(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">비밀번호<b>*</b></label>
                        <input type="password" name="password" value={password} onChange={(e)=> setpassword(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">비밀번호 확인<b>*</b></label>
                        <input type="password" />
                    </div>
                    <div>
                        <label htmlFor="">이름<b>*</b></label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">연락처<b>*</b></label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">이메일<b>*</b></label>
                        <input type="text" name="email" />
                    </div>
                    <button type="submit" onClick={handleJoin}>가입하기</button>
                </fieldset>
            </form>
        </Joinwrap>
    );
};


export default Join;