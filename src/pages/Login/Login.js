import React from 'react';
import '../Login/Login.scss'
import '../../styles/common.scss'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const goToMain = () =>{
    navigate('/main');
  }

  return (
    <div className='box'>
        <h1>Westagram</h1>
        <div className='login-area'>
            <input className='id-input' type='text' placeholder='전화번호, 사용자 이름 또는 이메일'/>
            <input className='pw-input' type='password' placeholder='비밀번호'/>
            <button className='login-button' onClick={goToMain}>로그인</button>
        </div>
        <div className='find-password'>
            <a href='#'>비밀번호를 잊으셨나요?</a>
        </div>
    </div>
  )
}

export default Login