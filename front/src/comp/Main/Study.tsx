import React from 'react';

const Study = () => {
    const [formData,setformData] = React.useState({
        name:'',
        password: ''
    });

    const onSubmitHandler = (e:any) => {
        e.preventDefault();
        const { name,password } = formData;
        console.log(name);
        console.log(password)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setformData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div>
             <form
                    className='border p-3 rounded-1 position-fixed'
                    style={{ width: "30%", backgroundColor: "#FBFBF9", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                    onSubmit={onSubmitHandler}
                >
                    <h5 className='w-100 text-center' style={{ lineHeight: "40px" }}>로그인</h5>
                    <input
                        type="text"
                        placeholder='아이디를 입력해주세요'
                        className='border w-100 mb-2'
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder='비밀번호를 입력해주세요'
                        className='border w-100'
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                    />
                    <button
                        type="submit"
                        className='w-100 mt-4'
                    >로그인</button>
                </form>
        </div>
    );
};

export default Study;