import { useNavigate } from "react-router-dom"; // Import useNavigate
import printerImg from "../../assets/img/HomePageNotLog/printer.png";
import bkImg from "../../assets/img/HomePageNotLog/bk.png";
import quickPrint from "../../assets/img/HomePageNotLog/quick_print.png";
import highQuality from "../../assets/img/HomePageNotLog/high_quality.png";
import budgetPrint from "../../assets/img/HomePageNotLog/budget_print.png";
import easyPay from "../../assets/img/HomePageNotLog/easy_pay.png";
import style from "./HomePageUser.module.scss";
import classNames from "classnames/bind";
import HeaderUser from "../../components/Header/HeaderUser";
import Footer from "../../components/Footer";

const cx = classNames.bind(style);

function HomePageUser() {
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle the "In File" button click
  const handleInFileClick = () => {
    navigate("/fileManage"); // Navigate to the "InFilePage" or any other page you want
  };

  return (
    <div>
      <HeaderUser />
      <div className={cx("header")}>
        <div className={cx("login-box")}>
          <h1>SMART PRINTING SERVICE</h1>
          <p>IN TÀI LIỆU</p>
          <button className={cx("login-button")} onClick={handleInFileClick}>
            In File
            <span>
              <i className="fas fa-arrow-right"></i>
            </span>
          </button>
        </div>
        <div className={cx("image-container")}>
          <img
            src={printerImg}
            alt="Illustration of smart printing service with laptops and documents"
            width="200"
            height="200"
          />
        </div>
      </div>

      <div className={cx("content")}>
        <h2>
          <img src={bkImg} />
        </h2>
        <h2>
          ĐẠI HỌC QUỐC GIA TP.HCM
          <br />
          TRƯỜNG ĐẠI HỌC BÁCH KHOA
        </h2>

        <div className={cx("services")}>
          <div className={cx("service")}>
            <img
              src={quickPrint}
              alt="Icon representing quick print"
              width="50"
              height="50"
            />
            <h3>
              QUICK
              <br />
              PRINT
            </h3>
            <p>Tiết kiệm thời gian</p>
          </div>
          <div className={cx("service")}>
            <img
              src={highQuality}
              alt="Icon representing high quality"
              width="50"
              height="50"
            />
            <h3>
              HIGH
              <br />
              QUALITY
            </h3>
            <p>Chất lượng vượt trội</p>
          </div>
          <div className={cx("service")}>
            <img
              src={budgetPrint}
              alt="Icon representing budget print"
              width="50"
              height="50"
            />
            <h3>
              BUDGET
              <br />
              PRINT
            </h3>
            <p>Tiết kiệm chi phí</p>
          </div>
          <div className={cx("service")}>
            <img
              src={easyPay}
              alt="Icon representing easy pay"
              width="50"
              height="50"
            />
            <h3>
              EASY
              <br />
              PAY
            </h3>
            <p>Thanh toán tiện lợi</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePageUser;