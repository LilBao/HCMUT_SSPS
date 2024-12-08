import className from "classnames/bind";
import styles from "./HeaderUser.module.scss";
import { Link } from "react-router-dom";
const cx = className.bind(styles);
function HeaderUser() {
  return (
    <div className={cx("navbar")}>
      <div className={cx("logo")}>
        <Link to="/user">SPSO</Link>
      </div>
      <div className={cx("nav-qlls")}>
        <Link to="/fileManage">QUẢN LÝ FILE</Link>
        <Link to="/userHistory">LỊCH SỬ IN</Link>
      </div>
      <Link to="/" className={cx("dangxuat")}>
        ĐĂNG XUẤT
      </Link>
    </div>
  );
}

export default HeaderUser;
