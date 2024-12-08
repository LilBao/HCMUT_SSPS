import React, { useState } from "react";
import classNames from "classnames/bind";
import style from "./BtnAddfile.module.scss";

const cx = classNames.bind(style);

function BtnAddfile({ handleAddFiles }) {
  const [isPopup, setIsPopup] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]); // Temporary state for selected files

  const handlePopUp = () => {
    setIsPopup(true); // Open popup
  };

  const handleClosePopup = () => {
    setIsPopup(false); // Close popup
    setSelectedFiles([]); // Reset selected files when closing the popup
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files); // Save selected files to temporary state
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      handleAddFiles({ target: { files: selectedFiles } }); // Pass selected files to parent handler
      setSelectedFiles([]); // Clear temporary state
      setIsPopup(false); // Close popup
    }
  };

  return (
    <div>
      <button className={cx("three-button")} onClick={handlePopUp}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 106 106"
          fill="none"
          className={cx("svg-icon")}
        >
          <rect
            x="2.5"
            y="2.5"
            width="101"
            height="101"
            rx="7.5"
            fill="#B7DBBB"
          />
          <rect
            x="2.5"
            y="2.5"
            width="101"
            height="101"
            rx="7.5"
            stroke="#00B56D"
            strokeWidth="5"
          />
          <path d="M62 38L52 21L42 38H52V68H56V38H62Z" fill="#00B56D" />
          <path
            d="M74 77H32C28.6863 77 26 74.3137 26 71V55H22V71C22 76.5228 26.4772 81 32 81H74C79.5228 81 84 76.5228 84 71V55H80V71C80 74.3137 77.3137 77 74 77Z"
            fill="#00B56D"
          />
        </svg>
      </button>

      {isPopup && (
        <div>
          <div className={cx("overlay")} onClick={handleClosePopup}></div>
          <div className={cx("popup-container", { show: isPopup })}>
            <div className={cx("popup", { show: isPopup })}>
              <div className={cx("main-container")}>
                <div className={cx("tai-file-cua-ban")}>
                  Tải file của bạn lên
                </div>
                <div
                  className={cx("rectangle")}
                  onClick={() => document.getElementById("fileInput").click()}
                >
                  <div className={cx("flex-row-fc")}>
                    <div className={cx("upload")}>
                      <div className={cx("icon")}></div>
                    </div>
                    <div className={cx("ellipse")}></div>
                  </div>
                  {/* Display selected file information */}
                  {selectedFiles.length > 0 ? (
                    <div className={cx("file-preview")}>
                      {selectedFiles.map((file, index) => (
                        <div key={index} className={cx("file-name")}>
                          {file.name}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={cx("nhap-tai-file")}>
                      Nhấn để tải hoặc kéo và thả để tải file lên
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  id="fileInput"
                  className={cx("hidden-input")}
                  style={{ display: "none" }}
                  multiple
                  onChange={handleFileChange}
                />
                <div className={cx("flex-row-ac")}>
                  <button
                    type="button"
                    className={cx("rectangle-1")}
                    onClick={handleClosePopup}
                  >
                    Hủy
                  </button>
                  <button
                    type="button"
                    className={cx("rectangle-2")}
                    onClick={handleUpload}
                  >
                    <div className={cx("upload-3")}>Tải lên</div>
                  </button>
                </div>
                <div className={cx("line")}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BtnAddfile;
