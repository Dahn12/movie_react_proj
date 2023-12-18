import React, { useState } from 'react';

export const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   const handleClick = () => {
  //     setIsLoggedIn(!isLoggedIn);
  //   };
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };
  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      {/* <LoginButton onClick={handleClick}> */}
      <div className='LoginButton'
        onClick={isLoggedIn == false ? handleLoginClick : handleLogoutClick}
        // onClick={handleClick}
      >
        {isLoggedIn ? '로그인' : '로그아웃'}
      </div>
      <div style={{ color: 'white', marginLeft: 24 }}>
        {isLoggedIn ? '로그인 해주세요!' : '환영합니다!'}
      </div>
    </div>
  );
};

