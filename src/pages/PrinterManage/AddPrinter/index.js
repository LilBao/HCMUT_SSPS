import { useState } from "react";
import style from "./AddPrinter.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function AddPrinter({ isPopupAdd, setIsPopupAdd, onAddSuccess }) {
  const [newPrinter, setNewPrinter] = useState({
    printerId: "",
    brand: "",
    model: "",
    description: "",
    location: {
      campusName: "",
      buildingName: "",
      roomNumber: "",
    },
    ipAddress: "",
    status: true, // Thay đổi giá trị mặc định thành boolean
  });

  const [error, setError] = useState("");

  // Xử lý thay đổi dữ liệu khi người dùng nhập
  // Updated handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "location") {
      // Tách chuỗi khi người dùng nhập vào
      let buildingName = "";
      let roomNumber = "";
      let newValue = value.trim();

      // Tách tòa nhà và phòng nếu có dấu '-'
      if (newValue.includes("-")) {
        const parts = newValue.split("-");
        buildingName = parts[0]?.trim(); // Tòa nhà
        roomNumber = parts[1]?.trim(); // Phòng
      } else {
        // Nếu không có dấu '-', giả sử người dùng chỉ nhập tòa nhà
        buildingName = newValue;
      }

      // Lấy chữ cái đầu tiên của buildingName và kiểm tra
      const firstLetter = buildingName.charAt(0).toUpperCase(); // Lấy chữ cái đầu tiên và chuyển thành chữ hoa

      // Kiểm tra nếu chữ cái đầu tiên là "H" thì sẽ gán là "Cơ sở 2", nếu không là "Cơ sở 1"
      const campusName = firstLetter === "H" ? "Cơ sở 2" : "Cơ sở 1";

      setNewPrinter((prev) => ({
        ...prev,
        location: {
          buildingName: buildingName || "", // Nếu không có buildingName, để trống
          roomNumber: roomNumber || "", // Nếu không có roomNumber, để trống
          campusName, // Gán campusName dựa trên chữ cái đầu tiên của buildingName
        },
      }));
    } else {
      // Cập nhật các trường khác như bình thường
      setNewPrinter((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Gửi form để thêm máy in
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Kiểm tra đầu vào (validation)

    const printerData = {
      ...newPrinter,
      printerId: parseInt(newPrinter.printerId, 10),
    };

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8080/api/system/printer", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(printerData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Không thể thêm máy in");
      }

      const addedPrinter = await response.json();
      onAddSuccess(addedPrinter);
      setIsPopupAdd(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const closePopup = () => {
    setIsPopupAdd(false);
    setError("");
  };

  return (
    isPopupAdd && (
      <div className={cx("popup")}>
        <div className={cx("popup-content")}>
          <div className={cx("popup-header")}>
            <h2>Thêm máy in mới</h2>
            <button onClick={closePopup} className={cx("close-btn")}>
              X
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={cx("form-group")}>
              <label>ID Máy in *</label>
              <input
                type="number"
                name="printerId"
                value={newPrinter.printerId}
                onChange={handleChange}
                placeholder="Nhập ID máy in"
                required
              />
            </div>

            <div className={cx("form-group")}>
              <label>Mẫu máy *</label>
              <input
                type="text"
                name="model"
                value={newPrinter.model}
                onChange={handleChange}
                placeholder="Nhập mẫu máy"
              />
            </div>

            <div className={cx("form-group")}>
              <label>Thông tin vị trí (Ví dụ: H6 - 101) *</label>
              <input
                type="text"
                name="location"
                value={`${newPrinter.location.buildingName}${
                  newPrinter.location.buildingName.length >= 2 ? " - " : ""
                }${newPrinter.location.roomNumber}`}
                onChange={handleChange}
                placeholder="Nhập tòa nhà và phòng (Ví dụ: H6 - 101)"
              />
            </div>
            <div className={cx("form-group")}>
              <label>Địa chỉ IP *</label>
              <input
                type="text"
                name="ipAddress"
                value={newPrinter.ipAddress}
                onChange={handleChange}
                placeholder="Nhập địa chỉ IP"
              />
            </div>
            <div className={cx("form-group")}>
              <label>Trạng thái</label>
              <select
                name="status"
                value={newPrinter.status.toString()} // Chuyển giá trị boolean thành chuỗi
                onChange={handleChange}
              >
                <option value="true">Hoạt động</option>
                <option value="false">Không hoạt động</option>
              </select>
            </div>

            {error && <p className={cx("error")}>{error}</p>}

            <button type="submit" className={cx("submit-btn")}>
              Thêm
            </button>
            <button
              type="button"
              className={cx("cancel-btn")}
              onClick={closePopup}
            >
              Hủy
            </button>
          </form>
        </div>
      </div>
    )
  );
}

export default AddPrinter;
