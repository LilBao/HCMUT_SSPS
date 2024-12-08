import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import style from "./PrinterManage.module.scss";
import classNames from "classnames/bind";
import DeletePrinter from "./DeletePrinter";
import AddPrinter from "./AddPrinter";
import PrinterRow from "./PrinterRow";

const cx = classNames.bind(style);

function PrinterManage() {
  const [printers, setPrinters] = useState([]);
  const [selectedPrinters, setSelectedPrinters] = useState([]);
  const [isPopupDelete, setIsPopupDelete] = useState(false);
  const [isPopupAdd, setIsPopupAdd] = useState(false);

  // Fetch printers on mount
  useEffect(() => {
    const fetchPrinters = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://localhost:8080/api/system/printer/all-printer",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch printers");

        const data = await response.json();
        setPrinters(data.data || []); // Set fetched printers
      } catch (error) {
        console.error("Error fetching printers:", error);
      }
    };

    fetchPrinters();
  }, [printers]);

  // Handle adding new printer
  const handleAddPrinter = (newPrinter) => {
    setPrinters((prev) => [...prev, newPrinter]);
  };

  // Handle toggling printer status
  const handleToggleStatus = async (id) => {
    const printerToUpdate = printers.find(
      (printer) => printer.printerId === id
    );
    if (!printerToUpdate) return;

    const updatedStatus = !printerToUpdate.status;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8080/api/system/printer", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...printerToUpdate,
          status: updatedStatus,
        }),
      });

      if (!response.ok) throw new Error("Failed to update printer status");

      setPrinters((prev) =>
        prev.map((printer) =>
          printer.printerId === id
            ? { ...printer, status: updatedStatus }
            : printer
        )
      );
    } catch (error) {
      console.error("Error toggling printer status:", error);
    }
  };

  // Handle deleting printers
  const handleDeletePrinters = async () => {
    try {
      for (const id of selectedPrinters) {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `http://localhost:8080/api/system/printer/${id}`,
          {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!response.ok) throw new Error(`Failed to delete printer ID: ${id}`);
      }

      setPrinters((prev) =>
        prev.filter((printer) => !selectedPrinters.includes(printer.printerId))
      );
      setSelectedPrinters([]);
      setIsPopupDelete(false);
    } catch (error) {
      console.error("Error deleting printers:", error);
    }
  };

  // Handle selection for deletion
  const handleSelectPrinter = (id) => {
    setSelectedPrinters((prev) =>
      prev.includes(id)
        ? prev.filter((printerId) => printerId !== id)
        : [...prev, id]
    );
  };

  return (
    <div>
      <HeaderAdmin />
      <div className={cx("container")}>
        <div className={cx("header")}>
          <button
            className={cx("delete-button")}
            onClick={() => setIsPopupDelete(true)}
            disabled={selectedPrinters.length === 0}
          >
            Xóa máy in
          </button>
          <button
            className={cx("add-button")}
            onClick={() => setIsPopupAdd(true)}
          >
            Thêm máy in
          </button>
        </div>

        <table className={cx("file-table")}>
          <thead>
            <tr>
              <th></th>
              <th>ID Máy in</th>
              <th>Trạng thái</th>
              <th>Mẫu máy</th>
              <th>Điều khiển</th>
            </tr>
          </thead>
          <tbody>
            {printers.map((printer) => (
              <PrinterRow
                key={printer.printerId}
                printer={printer}
                onSelect={handleSelectPrinter}
                onToggle={handleToggleStatus}
                isSelected={selectedPrinters.includes(printer.printerId)}
              />
            ))}
          </tbody>
        </table>
      </div>

      <DeletePrinter
        isPopup={isPopupDelete}
        setIsPopup={setIsPopupDelete}
        handleDelete={handleDeletePrinters}
      />
      <AddPrinter
        isPopupAdd={isPopupAdd}
        setIsPopupAdd={setIsPopupAdd}
        onAddSuccess={handleAddPrinter}
      />
      <Footer />
    </div>
  );
}

export default PrinterManage;
