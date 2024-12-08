import classNames from "classnames/bind";
import style from "./HeaderHomePageNotLog.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
function HeaderHomePageNotLog() {
  return (
    <div className={cx("navbar")}>
      <div className={cx("logo")}>
        <Link to="/">SPSO</Link>
      </div>
      <Link to="/login" className={cx("login")}>
        ĐĂNG NHẬP
      </Link>
    </div>
  );
}

export default HeaderHomePageNotLog;
