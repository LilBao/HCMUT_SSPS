import React, { useState, useRef } from "react";
import Footer from "../../components/Footer";
import HeaderUser from "../../components/Header/HeaderUser";
import style from "./FIleManage.module.scss";
import classNames from "classnames/bind";
import BtnAddfile from "./BtnAddfile";
import BtnDelete from "./BtnDelete";
import BuyPage from "./BuyPage";

const cx = classNames.bind(style);

function FileManage() {
  const [files, setFiles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for controlling the popup visibility
  const [availablePages, setAvailablePages] = useState({
    A1: 3,
    A2: 4,
    A3: 5,
    A4: 6,
  });

  const handleSelectFile = (id) => {
    setSelectedFiles((prev) =>
      prev.includes(id) ? prev.filter((fileId) => fileId !== id) : [...prev, id]
    );
  };

  const handleDeleteFiles = () => {
    if (selectedFiles.length > 0) {
      setIsPopupOpen(true); // Open confirmation popup when files are selected
    }
  };

  const handleConfirmDelete = () => {
    setFiles((prev) => prev.filter((file) => !selectedFiles.includes(file.id)));
    setSelectedFiles([]); // Clear selected files after deletion
    setIsPopupOpen(false); // Close the popup after confirming delete
  };

  const handleAddFiles = (event) => {
    const newFiles = Array.from(event.target.files).map((file, index) => ({
      id: Date.now() + index, // Generate a unique ID
      name: file.name,
      date: new Date().toLocaleDateString("vi-VN"),
      size: `${(file.size / 1024).toFixed(2)} KB`,
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  };

  return (
    <div>
      <HeaderUser />
      <div className={cx("container")}>
        <div className={cx("header")}>
          <div className={cx("text-container")}>
            <span className={cx("text-main")}>Số trang in khả dụng:</span>
            <span className={cx("text-highlight")}>
              {" "}
              {Object.values(availablePages).reduce(
                (total, pages) => total + pages,
                0
              )}
            </span>
          </div>
          <div className={cx("available-pages")}>
            <h4>Số trang khả dụng theo kích thước:</h4>
            <ul>
              {Object.entries(availablePages).map(([size, pages]) => (
                <li key={size}>
                  {size}: {pages} trang
                </li>
              ))}
            </ul>
          </div>
          <div className={cx("icons")}>
            <BuyPage
              availablePages={availablePages}
              setAvailablePages={setAvailablePages}
            />
            <BtnAddfile handleAddFiles={handleAddFiles} />
            <BtnDelete
              handleDeleteFiles={handleDeleteFiles}
              isPopupOpen={isPopupOpen}
              setIsPopupOpen={setIsPopupOpen}
              handleConfirmDelete={handleConfirmDelete}
            />
          </div>
        </div>

        <div className={cx("section-title")}>File đã tải lên</div>

        <div className={cx("table-container")}>
          <table className={cx("file-table")}>
            <thead>
              <tr>
                <th></th>
                <th>Tên file</th>
                <th>Ngày tải lên</th>
                <th>Kích thước</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr key={file.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedFiles.includes(file.id)}
                      onChange={() => handleSelectFile(file.id)}
                    />
                  </td>
                  <td>
                    <a href="#">{file.name}</a>
                  </td>
                  <td>{file.date}</td>
                  <td>{file.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popup for file upload */}

      <Footer />
    </div>
  );
}

export default FileManage;
