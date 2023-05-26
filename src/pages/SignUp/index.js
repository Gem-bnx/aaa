import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import vector2 from "../../assets/images/vector2.svg";
function SingUp() {
  return (
    <>
      <div className="signup container">
        <div className="signup__left">
          <div className="recta1"></div>
          <div className="recta2"></div>
          <div className="signup__ill">
            <img src={vector2}></img>
          </div>
        </div>
        
        <div className="signup__right">
          <h2>Đăng ký</h2>
          <form className="signup__form">
            <labe>Họ và tên: </labe>
            <p className="star">*</p>
            <input
              type="text"
              required
              // onChange={(e) => setLog({ ...log, email: e.target.value })}
            ></input>
            <label>Email: </label>
            <p className="star">*</p>
            <input
              type="email"
              required
              // onChange={(e) => setLog({ ...log, email: e.target.value })}
            ></input>
            <label>Mật khẩu: </label>
            <p className="star">*</p>
            <input
              type="password"
              required
              // onChange={(e) => setLog({ ...log, password: e.target.value })}
            ></input>
            <label>Số điện thoại: </label>
            <p className="star">*</p>
            <input
              type="number"
              required
              // onChange={(e) => setLog({ ...log, password: e.target.value })}
            ></input>
            <button type="submit">Đăng ký</button>
          </form>
          <div>
            Bạn đã có tài khoản?
            <Link to="/dangnhap">Đăng nhập</Link>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default SingUp;
