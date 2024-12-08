import style from "./DeletePrinter.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

function DeletePrinter({ isPopup, setIsPopup, handleDelete }) {
  const handleClose = () => {
    setIsPopup(false);
  };

  const handleConfirmDelete = () => {
    handleDelete(); // Call the function passed in props to handle the actual delete
    setIsPopup(false); // Close the popup after confirming
  };

  return (
    <div>
      {isPopup && (
        <div>
          <div className={cx("overlay")} onClick={handleClose}>
            <div
              className={cx("popup-container")}
              onClick={(e) => e.preventDefault()}
            >
              <div className={cx("popup-text")}>
                Xác nhận xoá Máy in đã chọn?
              </div>
              <div className={cx("popup-buttons")}>
                <button
                  className={cx("button", "button-style-1")}
                  onClick={handleClose}
                >
                  Hủy
                </button>
                <button
                  className={cx("button", "button-style-2")}
                  onClick={handleConfirmDelete} // Confirm delete logic
                >
                  Xác nhận
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeletePrinter;
