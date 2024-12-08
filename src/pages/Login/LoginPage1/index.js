import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import Footer from "../../../components/Footer";
import HeaderHomePageNotLog from "../../../components/Header/HeaderHomePageNotLog";
import style from "./LoginPage1.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function LoginPage1() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle navigation when buttons are clicked
  const handleStudentClick = () => {
    navigate("/login2", { state: { role: "student" } }); // Pass role to next page
  };

  const handleAdminClick = () => {
    navigate("/login2", { state: { role: "admin" } }); // Pass role to next page
  };

  return (
    <div>
      <HeaderHomePageNotLog />
      <div className={cx("main-container")}>
        <div className={cx("rectangle")}>
          <div className={cx("logo")}></div>
          <div className={cx("line")}></div>
          <span className={cx("login-object")}>Đối tượng đăng nhập:</span>
          <button className={cx("rectangle-1")} onClick={handleStudentClick}>
            <span className={cx("student")}>Sinh viên</span>
          </button>
          <button className={cx("rectangle-2")} onClick={handleAdminClick}>
            <span className={cx("admin")}>ADMIN</span>
          </button>
        </div>
        <div className={cx("printer")}></div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage1;
