import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import vector1 from "../../assets/images/Vector1.svg";
import { login } from "./api";

function Login() {
  const [log, setLog] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <div className="login login--hanhkhach container">
        <div className="login__left">
          <h2>Đăng nhập</h2>
          <form className="login__form">
            <label abel>Email: </label>
            <p className="star">*</p>
            <input
              type="email"
              required
              onChange={(e) => setLog({ ...log, email: e.target.value })}
            ></input>
            <label>Mật khẩu: </label>
            <p className="star">*</p>
            <input
              type="password"
              required
              onChange={(e) => setLog({ ...log, password: e.target.value })}
            ></input>
            <p className="alter">Đăng nhập bằng SĐT</p>
            <button type="submit" onClick={() => login(log)}>
              Đăng nhập
            </button>
          </form>
          <div>
            Bạn chưa có tài khoản?
            <Link to="/dangky">Đăng ký</Link>
          </div>
        </div>
        <div className="login__ill">
          <img src={vector1}></img>
        </div>
        <div className="login__right"></div>
      </div>
      {/* <div className="login login--nhaxe">
        <h2>LOGIN</h2>
        <form>
          <label>Email: *</label>
          <input type="email" required></input>
          <label>Mật khẩu: *</label>
          <input type="password" required></input>
          <p>Đăng nhập bằng SĐT</p>
          <button type="submit">Đăng nhập</button>
        </form>
        <p>Bạn chưa có tài khoản?</p>
        <Link to="/dangky">Đăng ký</Link>
      </div> */}
    </>
  );
}

export default Login;
