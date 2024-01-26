import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';


const Loginwrap = styled.div`
    width: 45%;
    margin: 0 auto;
`;

const Formwrap = styled.div`
    padding: 150px 0;
    > h2 {
        font-weight: 900 !important;
        padding-bottom: 35px;
    }
    > form {
        > input {
            display: block;
            width: 100%;
            height: 50px;
            border: 1px solid rgba(0,0,0,.2);
            padding: 20px 15px;
            margin-bottom: 25px;
            &:focus {
                outline: none;
            }
        }
        > button {
            width: 100%;
            height: 50px;
            border: none;
            background-color: #2970ff;
            color: white;
            margin-top: 15px;
        }
    }
`;

const Linkwrap = styled.div`
    width: 100%;
    display: flex;
    padding: 30px 0;
    > a:first-child {
        padding-right: 10px;
        border-right: 1px solid rgba(0,0,0,.1);
    }
    > a:last-child {
        padding: 0 10px;
    }
    > a {
        text-decoration: none;
        color: black;
    }
`;

const Signup = () => {
    const [id,setid] = useState('');
    const [password,setpassword] = useState('');
    const history = useNavigate();

    const handlename = (e) => {
        setid(e.target.value);
    }

    const handlepw = (e) => {
        setpassword(e.target.value);
    }

    const handleLogin = async () => {
        try {
          // 서버로 로그인 정보 전송
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id , password }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            // 로그인 성공
            console.log('로그인 성공', data);
            // 여기에서 사용자 상태를 업데이트하고 리디렉션 등의 작업 수행
          } else {
            // 로그인 실패
            console.error('로그인 실패', data.error);
            // 실패에 대한 사용자에게 메시지 표시 등의 작업 수행
          }
        } catch (error) {
          console.error('로그인 오류', error);
        }
      };
    return (
        <Loginwrap>
            <Formwrap>
                <h2>로그인</h2>
                <form action="">
                    <input type="text" value={id} onChange={handlename}placeholder="아이디를 입력하시오."/>
                    <input type="password" value={password} onChange={handlepw} placeholder="비밀번호를 입력하세요."/>
                    <button type="submit" onClick={handleLogin}>로그인</button>
                    <Linkwrap>
                        <Link to="/join">로그인</Link>
                        <Link to="/join">아이디/비밀번호 찾기</Link>
                    </Linkwrap>
                </form>
            </Formwrap>
        </Loginwrap>
    );
};

export default Signup;