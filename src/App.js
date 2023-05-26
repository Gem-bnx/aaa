import "./App.css";
import "./assets/styles/global.scss";
import Header from "./components/Header";
import Home from "./pages/Homepage";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dangnhap" element={<Login></Login>}></Route>
        <Route path="/dangky" element={<SignUp></SignUp>}></Route>
      </Routes>
    </>
  );
}

export default App;
