import Footer from "../../components/Footer";
import HeaderUser from "../../components/Header/HeaderUser";
import classnames from "classnames/bind";
import style from "./UserHistory.module.scss";

const cx = classnames.bind(style);

function UserHistory() {
  return (
    <div>
      <HeaderUser />
      <div className={cx("container")}>
        <div className={cx("section-title")}>File đã tải lên</div>

        <div className={cx("header")}>
          <div className={cx("input-box")}>
            <input
              type="text"
              className={cx("placeholder")}
              placeholder="ID Máy in"
            />
            <div className={cx("icon")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="56"
                viewBox="0 0 55 56"
                fill="none"
              >
                <path
                  d="M22.9168 41.75C26.9845 41.7492 30.9349 40.3875 34.1391 37.8817L44.2133 47.9559L47.4537 44.7155L37.3795 34.6413C39.8866 31.4368 41.2492 27.4854 41.2502 23.4167C41.2502 13.3082 33.0254 5.08337 22.9168 5.08337C12.8083 5.08337 4.5835 13.3082 4.5835 23.4167C4.5835 33.5252 12.8083 41.75 22.9168 41.75ZM22.9168 9.66671C30.5 9.66671 36.6668 15.8336 36.6668 23.4167C36.6668 30.9998 30.5 37.1667 22.9168 37.1667C15.3337 37.1667 9.16683 30.9998 9.16683 23.4167C9.16683 15.8336 15.3337 9.66671 22.9168 9.66671Z"
                  fill="#6D6D6D"
                />
              </svg>
            </div>
          </div>

          <div className={cx("date-filter-box")}>
            <input
              type="text"
              className={cx("date-placeholder")}
              placeholder="DD/MM/YYYY - DD/MM/YYYY"
            />

            <div className={cx("calendar-icon")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="60"
                viewBox="0 0 59 60"
                fill="none"
              >
                <path
                  d="M17.2085 27.5416H22.1252V32.4583H17.2085V27.5416ZM17.2085 37.375H22.1252V42.2916H17.2085V37.375ZM27.0418 27.5416H31.9585V32.4583H27.0418V27.5416ZM27.0418 37.375H31.9585V42.2916H27.0418V37.375ZM36.8752 27.5416H41.7918V32.4583H36.8752V27.5416ZM36.8752 37.375H41.7918V42.2916H36.8752V37.375Z"
                  fill="#757575"
                />
                <path
                  d="M12.2639 54.4166H46.4861C49.1823 54.4166 51.375 52.219 51.375 49.5166V15.2166C51.375 12.5143 49.1823 10.3166 46.4861 10.3166H41.5972V5.41663H36.7083V10.3166H22.0417V5.41663H17.1528V10.3166H12.2639C9.56767 10.3166 7.375 12.5143 7.375 15.2166V49.5166C7.375 52.219 9.56767 54.4166 12.2639 54.4166ZM46.4861 20.1166L46.4886 49.5166H12.2639V20.1166H46.4861Z"
                  fill="#757575"
                />
              </svg>
            </div>

            <div className={cx("date-filter-icon")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="32"
                viewBox="0 0 49 32"
                fill="none"
              >
                <path
                  d="M9.1875 12.9H39.8125V19.1H9.1875V12.9ZM0 0.5H49V6.7H0V0.5ZM18.375 25.3H30.625V31.5H18.375V25.3Z"
                  fill="#757575"
                />
              </svg>
            </div>
          </div>
        </div>

        <table className={cx("file-table")}>
          <thead>
            <tr>
              <th>STT</th>
              <th>File in</th>
              <th>ID Máy in</th>
              <th>Thời gian in</th>
              <th>Số lượng</th>
              <th>Kích thước</th>
              <th>Tổng tiền</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>File1.docx</td>
              <td>PTR001</td>
              <td>DD/MM/YYYY</td>
              <td>1</td>
              <td>A3</td>
              <td>10000</td>
              <td className={cx("printed")}>Đã in</td>
            </tr>
            <tr>
              <td>2</td>
              <td>File2.docx</td>
              <td>PTR002</td>
              <td>DD/MM/YYYY</td>
              <td>2</td>
              <td>A4</td>
              <td>10000</td>
              <td className={cx("errorprinted")}>Lỗi in</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default UserHistory;
