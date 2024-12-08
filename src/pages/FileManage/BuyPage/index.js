import classNames from "classnames/bind";
import style from "./BuyPage.module.scss";
import { useState } from "react";
import PopUP from "./PopUp";
const cx = classNames.bind(style);
function BuyPage({ availablePages, setAvailablePages }) {
  const [isPopup, setIsPopUp] = useState(false);
  const handleClick = () => {
    return setIsPopUp(true);
  };
  return (
    <div>
      <button className={cx("three-button")} onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 106 106"
          fill="none"
        >
          <rect
            x="2.5"
            y="2.5"
            width="101"
            height="101"
            rx="7.5"
            fill="#B7CADB"
          />
          <rect
            x="2.5"
            y="2.5"
            width="101"
            height="101"
            rx="7.5"
            stroke="#4B89C4"
            stroke-width="5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M43 83C45.2092 83 47 81.2092 47 79C47 76.7908 45.2092 75 43 75C40.7909 75 39 76.7908 39 79C39 81.2092 40.7909 83 43 83ZM43 87C47.4184 87 51 83.4184 51 79C51 74.5816 47.4184 71 43 71C38.5817 71 35 74.5816 35 79C35 83.4184 38.5817 87 43 87Z"
            fill="#005DB4"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M71 83C73.2092 83 75 81.2092 75 79C75 76.7908 73.2092 75 71 75C68.7908 75 67 76.7908 67 79C67 81.2092 68.7908 83 71 83ZM71 87C75.4184 87 79 83.4184 79 79C79 74.5816 75.4184 71 71 71C66.5816 71 63 74.5816 63 79C63 83.4184 66.5816 87 71 87Z"
            fill="#005DB4"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 21C17 19.8954 17.8954 19 19 19H27C27.8707 19 28.6413 19.5633 28.9056 20.3929L42.4797 63H73C74.1044 63 75 63.8956 75 65C75 66.1044 74.1044 67 73 67H41.0178C40.1472 67 39.3765 66.4368 39.1122 65.6072L25.5381 23H19C17.8954 23 17 22.1046 17 21Z"
            fill="#005DB4"
          />
          <path
            d="M39 57L29 29H82.3484C83.6772 29 84.6368 30.2718 84.2716 31.5494L77.4144 55.5496C77.1692 56.408 76.3844 57 75.4912 57H39Z"
            fill="#005DB4"
          />
          <path
            d="M57.8999 33.9C57.8999 33.1268 57.2731 32.5 56.4999 32.5C55.7267 32.5 55.0999 33.1268 55.0999 33.9V42.1H46.9C46.1268 42.1 45.5 42.7268 45.5 43.5C45.5 44.2732 46.1268 44.9 46.9 44.9H55.0999V53.1C55.0999 53.8732 55.7267 54.5 56.4999 54.5C57.2731 54.5 57.8999 53.8732 57.8999 53.1V44.9H66.1C66.8732 44.9 67.5 44.2732 67.5 43.5C67.5 42.7268 66.8732 42.1 66.1 42.1H57.8999V33.9Z"
            fill="#B7CADB"
            stroke="#B7CADB"
          />
        </svg>
      </button>
      {isPopup && (
        <PopUP
          setIsPopUp={setIsPopUp}
          availablePages={availablePages}
          setAvailablePages={setAvailablePages}
        />
      )}
    </div>
  );
}

export default BuyPage;
