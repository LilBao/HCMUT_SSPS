import { useState } from "react";
import classNames from "classnames/bind";
import style from "./PopUP.module.scss";
const cx = classNames.bind(style);
function PopUP({ setIsPopUp, availablePages, setAvailablePages }) {
  // Đóng popup khi nhấn Hủy hoặc nhấp ra ngoài
  const [quantity, setQuantity] = useState(1); // Quản lý số lượng
  const pricePerPage = 500; // Giá mỗi trang in (cố định hoặc có thể truyền từ props)
  const totalAmount = quantity * pricePerPage; // Tổng số tiền
  const [selectedSize, setSelectedSize] = useState("A4"); // Kích thước mặc định là A4
  const handleClose = () => {
    setIsPopUp(false);
  };

  // Ngăn sự kiện click bên trong popup không đóng popup
  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  // Tăng số lượng
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Giảm số lượng
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleConfirm = (e) => {
    e.preventDefault(); // Ngăn tải lại trang

    // Cập nhật số trang khả dụng cho loại kích thước được chọn
    setAvailablePages((prev) => ({
      ...prev,
      [selectedSize]: prev[selectedSize] + quantity,
    }));

    setIsPopUp(false); // Đóng popup
    alert(
      `Bạn đã mua thêm ${quantity} trang ${selectedSize} với tổng số tiền ${totalAmount.toLocaleString()} VND.`
    );
  };
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };
  return (
    <div className={cx("popup-overlay")} onClick={handleClose}>
      <div className={cx("popup-content")} onClick={handlePopupClick}>
        <div className={cx("main-container")}>
          <form action="">
            <span className={cx("text")}>Mua thêm trang in</span>
            <div className={cx("wrapper")}>
              <span className={cx("text-2")}>
                <label htmlFor="size">Kích thước</label>
              </span>
              <select
                className={cx("rectangle-size")}
                name="kich-thuoc"
                id="size"
                value={selectedSize}
                onChange={handleSizeChange}
              >
                <option value="A4" selected>
                  A4
                </option>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="A3">A3</option>
              </select>
            </div>
            <div className={cx("wrapper-2")}>
              <span className={cx("text-4")}>Số lượng mua</span>
              <div className={cx("custom-input")}>
                <button
                  type="button"
                  id="decrement"
                  onClick={handleDecrement}
                  disabled={quantity <= 1} // Vô hiệu hóa nút khi số lượng <= 1
                >
                  -
                </button>
                <input
                  type="number"
                  id="value"
                  name="quantity"
                  value={quantity}
                  readOnly
                />
                <button type="button" id="increment" onClick={handleIncrement}>
                  +
                </button>
              </div>
            </div>
            <div className={cx("section-3")}>
              <input
                type="hidden"
                name="total_amount"
                id="total-amount"
                value={totalAmount}
              />
              <div className={cx("wrapper-3")}>
                <span className={cx("text-6")} id="total">
                  {totalAmount.toLocaleString()} VND{" "}
                </span>
              </div>
              <span className={cx("text-7")}>Thành tiền</span>
            </div>
            <div className={cx("group-2")}>
              <button
                type="button"
                className={cx("button")}
                onClick={handleClose} // Gọi handleClose khi nhấn Hủy
              >
                Hủy
              </button>
              <button
                type="submit"
                className={cx("group-3")}
                onClick={handleConfirm}
              >
                <span className={cx("text-9")}>Xác nhận</span>
              </button>
            </div>
            <div className={cx("pic-4")}></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopUP;
