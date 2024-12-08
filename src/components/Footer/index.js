import classNames from "classnames/bind";
import style from "./Footer.module.scss";
const cx = classNames.bind(style);
function Footer() {
  return (
    <div className={cx("footer")}>
      <p className={cx("title")}>TỔ KỸ THUẬT CÔNG TY SPSO</p>
      <p className={cx("contact-info")}>
        Email: sang.truongtan2004@hcmut.edu.vn
      </p>
      <p className={cx("contact-info")}>Sđt: 0927439682</p>
      <p className={cx("contact-info")}>
        Địa chỉ: Đại học Bách khoa Thành phố Hồ Chí Minh
      </p>
      <p className={cx("note")}>
        Quý Thầy/Cô chưa có tài khoản (hoặc quên mật khẩu) nhà trường vui lòng
        liên hệ số điện thoại hoặc gmail để được hỗ trợ.
      </p>
    </div>
  );
}

export default Footer;
