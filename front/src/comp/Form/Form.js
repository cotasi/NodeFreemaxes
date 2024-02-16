import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {

    const productApi = async (myName, data = null) => { // myName : 테이블 이름
        try {
            if (data) {            
    
                const response = await axios.post(`/data/${myName}`, {              
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body : data
                  });
              
                  if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
              
                  const responseData = await response.json(); // Assuming the response is JSON, adjust as necessary
                  return responseData;
            } else {
                return axios.get(`/data/${myName}`);
            }
    
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    const [formdata,setformdata] = useState({ // input name = 변수
        y_name: '',
        y_phone: '',
        y_email: '',
        y_marketing: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformdata(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const  buttonClick = async (e) => { //전송버튼 비동기 이벤트
        console.log("전송요청함")

       try {
           e.preventDefault();
           // productApi 호출
           console.log("리엑트 formData>>>>>",formdata);
           ////////////////////////////////////

           const response = await productApi('inquery_form', formdata);
           // 서버 응답 확인
           console.log('서버 응답:', response);

           // 성공적으로 처리된 경우 추가 로직 작성

       } catch (error) {
           console.error('서버 요청 오류:', error);
       }

   }


    return (  
            <form  className='myForm' onSubmit={(e) => { buttonClick(e) }} >
                <div className='myFormDiv w-md-3'>
                    <h5 className='text-center mb-5'>모발&두피 상태 체크 후 응모하면 그에 맞는 상품을 드려요!</h5>
                    <div>
                        <div className='mb-4'>
                            <label className='d-block mb-2' htmlFor="username">이름</label>
                            <input
                                type="text"
                                name='y_name' // table의 필드와 같아야 한다.
                                id='username'
                                className='w-100'
                                placeholder='홍길동'                             
                                value={formdata.y_name} 
                                onChange={handleChange} 
                            />
                            
                        </div>
                        <div className='mb-4'>
                            <label className='d-block mb-2' htmlFor="userphone">휴대전화번호</label>
                            <input
                                type="number"
                                name='y_phone'
                                id='userphone'
                                className='w-100'
                                placeholder='01012346789'
                                value={formdata.y_phone} 
                                onChange={handleChange} 
                              
                               
                            />
                           
                        </div>
                        <div className='mb-4'>
                            <label className='d-block mb-2' htmlFor="useremail">이메일</label>
                            <input
                                type="text"
                                name='y_email'
                                id='useremail'
                                className='w-100'
                                placeholder='aaa@naver.com'
                                
                                value={formdata.y_email}
                                onChange={handleChange} 
                            />
                          
                        </div>
                    </div>

                    <div className='d-flex justify-content-left align-items-center'>
                        <div className='d-flex justify-content-left align-items-center' style={{ marginRight: "20px" }}>
                            <input
                                type="checkbox"
                                name="information"
                                id="information"
                                // checked={Essential}
                                // onClick={() => {
                                //     setEssential(!Essential)
                                // }}
                            />
                            <label htmlFor="information">개인정보수집동의</label>
                        </div>
                        <div className='d-flex justify-content-left align-items-center'>
                            <input
                                type="checkbox"
                                name="marketing"
                                id="y_marketing"
                                value={formdata.y_marketing}
                                onChange={handleChange} 
                            />
                            <label htmlFor="marketing">마케팅수신정보동의 </label>
                            <span className='choice'>(선택)</span>
                        </div>
                    </div>

                    <button
                        className='w-100 mt-4'
                        type="submit"                       
                    >신청하기</button>
                </div>
            </form>
    )
};

export default Form;