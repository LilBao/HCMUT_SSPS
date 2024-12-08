import Footer from "../../components/Footer";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import style from "./StudentManage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
function StudentManage() {
  return (
    <div>
      <HeaderAdmin />
      <div className={cx("container")}>
        <div className={cx("header")}>
          <button className={cx("filter-button")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="31"
              viewBox="0 0 49 31"
              fill="none"
            >
              <path
                d="M9.1875 12.4H39.8125V18.6H9.1875V12.4ZM0 0H49V6.2H0V0ZM18.375 24.8H30.625V31H18.375V24.8Z"
                fill="#005DB4"
              />
            </svg>
            <span>Bộ lọc</span>
          </button>

          <div className={cx("input-box")}>
            <input
              type="text"
              className={cx("placeholder")}
              placeholder="MSSV"
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

          <button className={cx("settings-button")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
            >
              <rect
                x="2.5"
                y="2.5"
                width="85"
                height="85"
                rx="7.5"
                fill="#B7CADB"
              />
              <rect
                x="2.5"
                y="2.5"
                width="85"
                height="85"
                rx="7.5"
                stroke="#005DB4"
                stroke-width="5"
              />
              <path
                d="M44.9998 58.3333C52.3532 58.3333 58.3332 52.3533 58.3332 45C58.3332 37.6466 52.3532 31.6666 44.9998 31.6666C37.6465 31.6666 31.6665 37.6466 31.6665 45C31.6665 52.3533 37.6465 58.3333 44.9998 58.3333ZM44.9998 38.3333C48.6132 38.3333 51.6665 41.3866 51.6665 45C51.6665 48.6133 48.6132 51.6666 44.9998 51.6666C41.3865 51.6666 38.3332 48.6133 38.3332 45C38.3332 41.3866 41.3865 38.3333 44.9998 38.3333Z"
                fill="#005DB4"
              />
              <path
                d="M14.4831 58.7866L17.8164 64.5533C19.5864 67.61 23.8464 68.7566 26.9164 66.9866L28.6798 65.9666C30.6082 67.4836 32.7345 68.7306 34.9998 69.6733V71.6666C34.9998 75.3433 37.9898 78.3333 41.6664 78.3333H48.3331C52.0098 78.3333 54.9998 75.3433 54.9998 71.6666V69.6733C57.2643 68.7305 59.3904 67.4847 61.3198 65.97L63.0831 66.99C66.1598 68.7566 70.4098 67.6166 72.1864 64.5533L75.5164 58.79C76.3998 57.259 76.6394 55.4399 76.1825 53.7324C75.7256 52.0249 74.6097 50.5686 73.0798 49.6833L71.3964 48.71C71.7543 46.2518 71.7543 43.7548 71.3964 41.2966L73.0798 40.3233C74.609 39.4374 75.7244 37.9811 76.1812 36.2738C76.638 34.5666 76.3989 32.7478 75.5164 31.2166L72.1864 25.4533C70.4164 22.3866 66.1598 21.2366 63.0831 23.0133L61.3198 24.0333C59.3913 22.5163 57.2651 21.2693 54.9998 20.3266V18.3333C54.9998 14.6566 52.0098 11.6666 48.3331 11.6666H41.6664C37.9898 11.6666 34.9998 14.6566 34.9998 18.3333V20.3266C32.7352 21.2694 30.6092 22.5152 28.6798 24.03L26.9164 23.01C23.8364 21.24 19.5831 22.3866 17.8131 25.45L14.4831 31.2133C13.5997 32.7443 13.3601 34.5633 13.817 36.2708C14.2739 37.9783 15.3899 39.4347 16.9198 40.32L18.6031 41.2933C18.2439 43.7502 18.2439 46.2464 18.6031 48.7033L16.9198 49.6766C15.3903 50.5632 14.2749 52.0201 13.8181 53.7279C13.3613 55.4357 13.6004 57.2549 14.4831 58.7866ZM25.5698 49.5933C25.1934 48.0911 25.002 46.5486 24.9998 45C24.9998 43.46 25.1931 41.9133 25.5664 40.4066C25.7422 39.7044 25.6844 38.964 25.4017 38.2975C25.119 37.6311 24.6269 37.075 23.9998 36.7133L20.2564 34.5466L23.5831 28.7833L27.3998 30.99C28.0222 31.3501 28.7446 31.4987 29.4587 31.4133C30.1727 31.328 30.8398 31.0133 31.3598 30.5166C33.6148 28.3718 36.3342 26.776 39.3064 25.8533C39.9892 25.6448 40.587 25.2227 41.0118 24.6491C41.4367 24.0754 41.6661 23.3805 41.6664 22.6666V18.3333H48.3331V22.6666C48.3334 23.3805 48.5629 24.0754 48.9877 24.6491C49.4126 25.2227 50.0104 25.6448 50.6931 25.8533C53.6648 26.7773 56.3838 28.373 58.6398 30.5166C59.1603 31.0124 59.8273 31.3264 60.5411 31.4117C61.2548 31.497 61.977 31.3491 62.5998 30.99L66.4131 28.7866L69.7464 34.55L65.9998 36.7133C65.3731 37.0754 64.8812 37.6316 64.5986 38.2979C64.316 38.9642 64.2579 39.7044 64.4331 40.4066C64.8064 41.9133 64.9998 43.46 64.9998 45C64.9998 46.5366 64.8064 48.0833 64.4298 49.5933C64.2548 50.2959 64.3134 51.0364 64.5967 51.7027C64.8799 52.3691 65.3725 52.9251 65.9998 53.2866L69.7431 55.45L66.4164 61.2133L62.5998 59.01C61.9775 58.6493 61.2549 58.5004 60.5408 58.5858C59.8266 58.6711 59.1595 58.9861 58.6398 59.4833C56.3847 61.6281 53.6653 63.2239 50.6931 64.1466C50.0104 64.3551 49.4126 64.7772 48.9877 65.3509C48.5629 65.9245 48.3334 66.6194 48.3331 67.3333L48.3398 71.6666H41.6664V67.3333C41.6661 66.6194 41.4367 65.9245 41.0118 65.3509C40.587 64.7772 39.9892 64.3551 39.3064 64.1466C36.3348 63.2226 33.6157 61.627 31.3598 59.4833C30.8408 58.9847 30.1733 58.669 29.4586 58.5842C28.7439 58.4993 28.0211 58.65 27.3998 59.0133L23.5864 61.22L20.2531 55.4566L23.9998 53.2866C24.6271 52.9251 25.1196 52.3691 25.4029 51.7027C25.6861 51.0364 25.7447 50.2959 25.5698 49.5933Z"
                fill="#005DB4"
              />
            </svg>
          </button>
        </div>

        <table className={cx("file-table")}>
          <thead>
            <tr>
              <th>MSSV</th>
              <th>Họ và Tên</th>
              <th>Truy cập gần nhất</th>
              <th>Số lượng Giấy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2xxxxxx</td>
              <td>Nguyễn Văn A</td>
              <td>DD/MM/YYYY</td>
              <td>xxx</td>
            </tr>
            <tr>
              <td>2xxxxxx</td>
              <td>Nguyễn Văn A</td>
              <td>DD/MM/YYYY</td>
              <td>xxx</td>
            </tr>
            <tr>
              <td>2xxxxxx</td>
              <td>Nguyễn Văn A</td>
              <td>DD/MM/YYYY</td>
              <td>xxx</td>
            </tr>
            <tr>
              <td>2xxxxxx</td>
              <td>Nguyễn Văn A</td>
              <td>DD/MM/YYYY</td>
              <td>xxx</td>
            </tr>
            <tr>
              <td>2xxxxxx</td>
              <td>Nguyễn Văn A</td>
              <td>DD/MM/YYYY</td>
              <td>xxx</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}

export default StudentManage;
