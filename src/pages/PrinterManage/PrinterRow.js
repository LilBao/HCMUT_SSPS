import React from "react";
import classNames from "classnames/bind";
import style from "./PrinterManage.module.scss";

const cx = classNames.bind(style);

const PrinterRow = React.memo(({ printer, onSelect, onToggle, isSelected }) => {
  return (
    <tr className={cx("row")}>
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(printer.printerId)}
        />
      </td>
      <td>
        <a href="#">{`PRT00${printer.printerId}`}</a>
      </td>
      <td className={cx("status-cell")}>
        <span>{printer.status ? "Đang hoạt động" : "Ngừng hoạt động"}</span>
      </td>

      <td>{printer.model}</td>
      <td>
        <input
          type="checkbox"
          className={cx("toggle-switch")}
          checked={printer.status}
          onChange={() => onToggle(printer.printerId)}
        />
      </td>
    </tr>
  );
});

export default PrinterRow;
