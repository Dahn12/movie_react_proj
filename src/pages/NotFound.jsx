import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='page-container'>
      <div style={{
        marginTop: '64px',
        fontSize: '48px',
        fontWeight: 'bold',
        marginBottom: '32px',
      }}>해당 페이지를 찾지 못하였습니다.</div>

      <div style={{
        fontSize: '32px',
        lineHeight:'1.6',}}>주소가 잘못되었습니다.</div>

      <div
        onClick={()=>navigate('/')} //홈경로로 이동
        style={{
        fontSize:'32px',
        lineHeight: '1.6',
        color:'red',
        corsor: 'pointer',
      }}>메인페이지로 이동</div>
    </div>
  )
}
