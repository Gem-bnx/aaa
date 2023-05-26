import React from 'react'
import './style.scss'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <section className='header container'>
        <div className='header__logo'>
            GOGO
        </div>
        <div className='header__menu'>
            <ul><Link to="/" >Trang chủ </Link></ul>
            <ul><Link to="/" href='#uudai'> Ưu đãi</Link></ul>
            <ul><a href='#'>Hotline</a></ul>
            <ul className='login'><Link to="/dangnhap">Đăng nhập</Link></ul>
            <ul className='signin'><Link to="/dangky">Đăng ký</Link></ul>
        </div>
    </section>
  )
}

export default Header