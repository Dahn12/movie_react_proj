import React from 'react'

export default function loginpage() {
  return (
    <div className='loginpage-container'>
        <div className='login-wrap'>
            <div className='login-text-wrap'>
                이메일과 비밀번호를 입력해 주세요
            </div>
            <div className='login-box-wrap'>
                <div className='email-box-wrap'>
                  <b>이메일 주소</b>
                  <input></input>
                </div>
                <div className='password-box-wrap'>
                  <b>비밀번호</b>
                </div>
            </div>
            <div className='handin-btn-wrap'>

            </div>
        </div>
    </div>
  )
}
