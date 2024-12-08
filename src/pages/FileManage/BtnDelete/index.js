import style from "./BtnDelete.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
function BtnDelete({
  handleDeleteFiles,
  isPopupOpen,
  setIsPopupOpen,
  handleConfirmDelete,
}) {
  return (
    <div>
      <button className={cx("three-button")} onClick={handleDeleteFiles}>
        {/* Delete button SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="106"
          height="106"
          viewBox="0 0 106 106"
          fill="none"
        >
          <rect x="5" y="5" width="96" height="96" rx="5" fill="#F7B8B8" />
          <rect
            x="2.5"
            y="2.5"
            width="101"
            height="101"
            rx="7.5"
            stroke="#BC0000"
            stroke-opacity="0.6"
            stroke-width="5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26 32.6364C26 30.9795 27.3432 29.6364 29 29.6364H77C78.6568 29.6364 80 30.9795 80 32.6364C80 34.2932 78.6568 35.6364 77 35.6364H29C27.3432 35.6364 26 34.2932 26 32.6364Z"
            fill="#BC0000"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M50.3331 24C47.5719 24 45.3331 26.2386 45.3331 29V32.6364H39.3333V29C39.3333 22.9249 44.2581 18 50.3331 18H55.6667C61.7419 18 66.6667 22.9249 66.6667 29V32.6364H60.6667V29C60.6667 26.2386 58.4279 24 55.6667 24H50.3331Z"
            fill="#BC0000"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29 32.6364L37 85H69L77 32.6364H29ZM55 47.182C55 46.0772 54.1044 45.182 53 45.182C51.8956 45.182 51 46.0772 51 47.182V70.4544C51 71.5592 51.8956 72.4544 53 72.4544C54.1044 72.4544 55 71.5592 55 70.4544V47.182ZM42.1046 45.186C43.1912 45.0172 44.1744 45.774 44.3007 46.8764L46.9672 70.1492C47.0936 71.2516 46.3152 72.282 45.2288 72.4504C44.1421 72.6192 43.1588 71.862 43.0325 70.76L40.3659 47.4872C40.2396 46.3848 41.018 45.3544 42.1046 45.186ZM65.634 47.4872C65.7604 46.3848 64.982 45.3544 63.8952 45.186C62.8088 45.0172 61.8256 45.774 61.6992 46.8764L59.0324 70.1492C58.9064 71.2516 59.6848 72.282 60.7712 72.4504C61.858 72.6192 62.8412 71.862 62.9672 70.76L65.634 47.4872Z"
            fill="#BC0000"
          />
        </svg>
      </button>
      {isPopupOpen && (
        <>
          <div
            className={cx("overlay")}
            onClick={() => setIsPopupOpen(false)}
          ></div>
          <div className={cx("popup-container")}>
            <div className={cx("popup-text")}>Xác nhận xoá file đã chọn?</div>
            <div className={cx("popup-buttons")}>
              <button
                className={cx("button", "button-style-1")}
                onClick={() => setIsPopupOpen(false)}
              >
                Hủy
              </button>
              <button
                className={cx("button", "button-style-2")}
                onClick={handleConfirmDelete}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BtnDelete;
