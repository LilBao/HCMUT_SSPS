import classNames from "classnames/bind";
import style from "./HeaderAdmin.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
function HeaderAdmin() {
  return (
    <div className={cx("navbar")}>
      <div className={cx("logo")}>
        <Link to="/admin">SPSO</Link>
      </div>
      <div className={cx("nav-qlls")}>
        <Link to="/printerManage">QUẢN LÝ MÁY IN</Link>
        <Link to="/studentManage">QUẢN LÝ SINH VIÊN</Link>
        <Link to="/adminHistory">LỊCH SỬ IN</Link>
      </div>
      <Link to="/" className={cx("dangxuat")}>
        ĐĂNG XUẤT
      </Link>
    </div>
  );
}

export default HeaderAdmin;
