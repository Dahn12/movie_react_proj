import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'


export const LoginControl = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   const handleClick = () => {
  //     setIsLoggedIn(!isLoggedIn);
  //   };
  const handleLoginClick = () => {
    setIsLoggedIn(true);
    navigate('/')
  };
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    navigate('/login')
  };
 

  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      
      <div className='LoginButton'
        onClick={
          isLoggedIn == false ? handleLoginClick : handleLogoutClick
        }
      >
        {isLoggedIn ? '로그인' : '로그아웃'}
      </div>
      <div style={{ color: 'white', marginLeft: 24 }}>
        {isLoggedIn ? '로그인 해주세요!' : '환영합니다!'}
      </div>
    </div>
  );
};

