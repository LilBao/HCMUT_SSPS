// import classNames from "classnames/bind";
// import style from "./PrintSetting.module.scss";
// const cx = classNames.bind(style);
// function PrintSetting({ setisPrintPage, printPage }) {
//   {
//     if (!printPage) return null;
//   }
//   const handleClose = () => {
//     setisPrintPage(false);
//   };
//   return (
//     <div className={cx("popup-container")} onClick={handleClose}>
//       <div className={cx("popup")} onClick={(e) => e.stopPropagation()}>
//         <div className={cx("main-container")}>
//           <form action="" />
//           <span className={cx("cai-dat-in")}>Cài đặt in</span>
//           <hr className={cx("divider")} />
//           <div>
//             <select
//               className={cx("rectangle")}
//               name="danh-sach-may-in"
//               id="printerlist"
//             >
//               <option value="printer" selected>
//                 Danh sách máy in
//               </option>
//               <option value="printer1">Máy in 1</option>
//               <option value="printer2">Máy in 2</option>
//               <option value="printer3">Máy in 3</option>
//             </select>
//             <span className={cx("so-trang")}>Số trang</span>
//             <div className={cx("radio-group")}>
//               <label className={cx("custom-radio")}>
//                 <input type="radio" name="pagenum" />
//                 <span className={cx("radio-btn")}></span>
//                 Tất cả
//               </label>
//               <label className={cx("custom-radio")}>
//                 <input type="radio" name="pagenum" />
//                 <span className={cx("radio-btn")}></span>
//                 Trang lẻ
//               </label>
//               <label className={cx("custom-radio")}>
//                 <input type="radio" name="pagenum" />
//                 <span className={cx("radio-btn")}></span>
//                 Trang chẵn
//               </label>
//             </div>
//             <div className={cx("radio-group")}>
//               <label className={cx("custom-radio")} />
//               <input type="radio" name="pagenum" value="custom" id="custom" />
//               Tùy chọn
//               <input
//                 type="text"
//                 id="customInput"
//                 name="customInput"
//                 placeholder="Nhập tùy chọn"
//                 disabled
//               />
//             </div>
//             <div className={cx("group-2")}>
//               <span className={cx("text-9")}>
//                 <label for="size">Kích thước</label>
//               </span>
//               <select
//                 className={cx("rectangle-size")}
//                 name="kich-thuoc"
//                 id="size"
//               >
//                 <option value="A4" selected>
//                   A4
//                 </option>
//                 <option value="A1">A1</option>
//                 <option value="A2">A2</option>
//                 <option value="A3">A3</option>
//               </select>
//             </div>

//             <div>
//               <div className={cx("radio-group")}>
//                 <label className={cx("custom-radio")}>
//                   <input type="radio" name="printmode" />
//                   <span className={cx("radio-btn")}></span>
//                   In dọc
//                 </label>
//                 <label className={cx("custom-radio")}>
//                   <input type="radio" name="printmode" />
//                   <span className={cx("radio-btn")}></span>
//                   In ngang
//                 </label>
//               </div>
//             </div>

//             <div className={cx("toggle-group")}>
//               <span className={cx("label-left")}>Tùy chọn</span>
//               <label className={cx("switch")}>
//                 <input type="checkbox" id="duplexToggle" />
//                 <span className={cx("slider")}></span>
//               </label>
//               <span className={cx("text-f")}>In hai mặt</span>
//             </div>
//             <div className={cx("flex-row-cbbf")}>
//               <button
//                 type="button"
//                 className={cx("rectangle-1 cancel")}
//                 id="close-popup-btn"
//                 onClick={handleClose}
//               >
//                 <span className={cx("cancel")} id="close-popup-btn">
//                   Hủy
//                 </span>
//               </button>
//               <button type="submit" className={cx("rectangle-2")}>
//                 <span className={cx("confirm")}>Xác nhận</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PrintSetting;
