import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Footer from "../../../components/Footer";
import classNames from "classnames/bind";
import style from "./LoginPage2.module.scss";
const cx = classNames.bind(style);

function LoginPage2() {
  const navigate = useNavigate();
  const location = useLocation(); // Lấy thông tin từ state chuyển từ LoginPage1
  const role = location.state?.role; // Lấy role (student hoặc admin) từ state
  const [email, setEmail] = useState(""); // Sử dụng email thay vì username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError(""); // Reset error trước khi gửi yêu cầu

    try {
      // Đảm bảo gửi đúng dữ liệu với email và password
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        password: String(password), // Chuyển password thành chuỗi nếu nó là số
      });

      // Kiểm tra nếu có token trong phản hồi
      if (response.data?.success && response.data?.data?.id) {
        const token = response.data?.data?.token; // Giả sử token trả về trong data

        // Lưu token vào localStorage
        localStorage.setItem("token", token);

        // Điều hướng đến trang phù hợp với role
        if (role === "student") {
          navigate("/user"); // Dẫn đến trang student
        } else {
          navigate("/admin"); // Dẫn đến trang admin
        }
      } else {
        setError("Đăng nhập thất bại. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Đăng nhập thất bại. Vui lòng thử lại.");
    } finally {
      setLoading(false); // Dừng trạng thái loading
    }
  };

  return (
    <div>
      <div className={cx("main-container")}>
        <div className={cx("rectangle")}></div>
        <span className={cx("login")}>Đăng nhập</span>
        <div className={cx("printer")}></div>
        <span className={cx("username")}>Email:</span>{" "}
        {/* Đổi tên thành Email */}
        <input
          type="email"
          className={cx("rectangle-1")}
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading} // Vô hiệu hóa input khi đang loading
        />
        <span className={cx("password-input")}>Mật khẩu:</span>
        <input
          type="password"
          className={cx("rectangle-box")}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading} // Vô hiệu hóa input khi đang loading
        />
        {error && <div className={cx("error-message")}>{error}</div>}
        <div
          className={cx("rectangle-box-2")}
          onClick={loading ? null : handleLogin} // Ngừng xử lý khi đang loading
          style={{ pointerEvents: loading ? "none" : "auto" }} // Vô hiệu hóa nút khi đang loading
        >
          {loading ? (
            <span className={cx("login-button")}>Đang đăng nhập...</span>
          ) : (
            <span className={cx("login-button")}>Đăng nhập</span>
          )}
        </div>
        <button className={cx("forgot-password-button")}>Quên mật khẩu?</button>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage2;
