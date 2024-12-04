document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("tbody");

    // Hàm lấy danh sách máy in từ API
    async function fetchPrinters() {
        try {
            const response = await fetch("https://your-backend-api.com/printers"); // URL API
            if (!response.ok) throw new Error("Lỗi khi lấy danh sách máy in");
            
            const printers = await response.json();

            // Xóa các dòng cũ trong bảng
            tableBody.innerHTML = "";

            // Hiển thị các máy in từ API
            printers.forEach((printer) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td><input type="checkbox" data-id="${printer.id}"></td>
                    <td><a href="#">${printer.id}</a></td>
                    <td>${printer.status}</td>
                    <td>${printer.model}</td>
                    <td><input type="checkbox" class="toggle-switch"></td>
                `;
                tableBody.appendChild(row);
            });
        } catch (error) {
            console.error("Lỗi khi lấy danh sách máy in:", error);
        }
    }

    // Gọi hàm để tải danh sách máy in khi trang tải
    fetchPrinters();
});

document.addEventListener("DOMContentLoaded", () => {
    const deleteButton = document.querySelector(".delete-button");
    const popupContainer = document.createElement("div");

    popupContainer.className = "popup-container";
    popupContainer.style.display = "none"; // Ẩn popup mặc định
    popupContainer.innerHTML = `
        <div class="popup-content">
            <div class="popup-text">Xác nhận xoá Máy in đã chọn?</div>
            <div class="popup-buttons">
                <button class="button button-style-1">Hủy</button>
                <button class="button button-style-2">Xác nhận</button>
            </div>
        </div>
    `;
    document.body.appendChild(popupContainer);

    // Hàm hiển thị và ẩn popup
    const showPopup = () => (popupContainer.style.display = "flex");
    const hidePopup = () => (popupContainer.style.display = "none");

    // Lấy các nút trong popup
    const cancelButton = popupContainer.querySelector(".button-style-1");
    const confirmButton = popupContainer.querySelector(".button-style-2");

    // Xử lý khi nhấn nút xóa
    deleteButton.addEventListener("click", () => {
        const checkboxes = document.querySelectorAll("tbody input[type='checkbox']");
        const selectedItems = Array.from(checkboxes).filter(checkbox => checkbox.checked);

        if (selectedItems.length === 0) {
            alert("Vui lòng chọn ít nhất một máy in để xóa.");
        } else {
            showPopup(); // Hiển thị popup
        }
    });

    // Xử lý nút "Hủy" trong popup
    cancelButton.addEventListener("click", hidePopup);

    // Xử lý nút "Xác nhận" trong popup
    confirmButton.addEventListener("click", () => {
        const checkboxes = document.querySelectorAll("tbody input[type='checkbox']");
        const selectedItems = Array.from(checkboxes).filter(checkbox => checkbox.checked);

        // Xóa các hàng được chọn
        selectedItems.forEach(item => {
            const row = item.closest("tr");
            row.parentNode.removeChild(row);
        });

        hidePopup(); // Đóng popup
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.querySelector(".add-button");

    // Tạo popup container
    const popupContainer = document.createElement("div");
    popupContainer.id = "add-printer-popup";
    popupContainer.style.display = "none"; // Đảm bảo popup bị ẩn ban đầu
    popupContainer.style.position = "fixed";
    popupContainer.style.top = "0";
    popupContainer.style.left = "0";
    popupContainer.style.width = "100%";
    popupContainer.style.height = "100%";
    popupContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    popupContainer.style.justifyContent = "center";
    popupContainer.style.alignItems = "center";
    popupContainer.style.zIndex = "1000";

    // Tạo nội dung popup
    const popupContent = document.createElement("div");
    popupContent.style.width = "500px"; // Thu nhỏ chiều ngang
    popupContent.style.background = "#FFF";
    popupContent.style.borderRadius = "10px";
    popupContent.style.padding = "20px";
    popupContent.style.display = "flex";
    popupContent.style.flexDirection = "column";
    popupContent.style.gap = "15px"; // Tăng khoảng cách tổng thể giữa các phần tử

    // Header
    const popupHeader = document.createElement("div");
    popupHeader.innerText = "Thông tin máy in";
    popupHeader.style.color = "#000";
    popupHeader.style.textAlign = "center";
    popupHeader.style.fontFamily = "'Open Sans', sans-serif";
    popupHeader.style.fontSize = "24px";
    popupHeader.style.fontWeight = "400";
    popupHeader.style.marginBottom = "10px";
    popupContent.appendChild(popupHeader);

    // Body
    const popupBody = document.createElement("div");
    popupBody.style.display = "flex";
    popupBody.style.flexDirection = "column";
    popupBody.style.gap = "10px";

    const fields = [
        { label: "ID", id: "printer-id", placeholder: "Nhập ID máy in" },
        { label: "Mẫu máy", id: "printer-model", placeholder: "Nhập mẫu máy" },
        { label: "Địa chỉ IP", id: "printer-ip", placeholder: "Nhập địa chỉ IP" },
        { label: "Vị trí", id: "printer-location", value: "H6 - 611" },
    ];

    fields.forEach(field => {
        const fieldContainer = document.createElement("div");
        fieldContainer.style.display = "flex";
        fieldContainer.style.justifyContent = "space-between";
        fieldContainer.style.alignItems = "center";
        fieldContainer.style.gap = "10px"; // Tăng khoảng cách giữa nhãn và input

        const label = document.createElement("label");
        label.innerText = field.label + ":";
        label.style.color = "#000";
        label.style.fontFamily = "'Open Sans', sans-serif";
        label.style.fontSize = "16px";
        label.style.fontWeight = "400";
        label.style.flex = "0.3"; // Đảm bảo nhãn không chiếm quá nhiều không gian

        const input = document.createElement("input");
        input.type = "text";
        input.id = field.id;
        input.className = "type-box";
        input.style.flex = "0.7"; // Đảm bảo input chiếm không gian hợp lý
        input.style.height = "35px";
        input.style.borderRadius = "5px";
        input.style.border = "1px solid #6D6D6D";
        input.style.background = "#FFF";
        input.style.padding = "0 10px";
        input.placeholder = field.placeholder || "";
        if (field.value) input.value = field.value;

        fieldContainer.appendChild(label);
        fieldContainer.appendChild(input);

        popupBody.appendChild(fieldContainer);
    });

    popupContent.appendChild(popupBody);

    // Footer
    const popupFooter = document.createElement("div");
    popupFooter.style.display = "flex";
    popupFooter.style.justifyContent = "space-evenly";
    popupFooter.style.padding = "15px 0";

    const cancelButton = document.createElement("button");
    cancelButton.innerText = "Hủy";
    cancelButton.style.width = "150px"; // Giảm kích thước nút
    cancelButton.style.height = "40px";
    cancelButton.style.borderRadius = "5px";
    cancelButton.style.background = "#FFF";
    cancelButton.style.color = "#000";
    cancelButton.style.border = "1px solid #6D6D6D";
    cancelButton.style.cursor = "pointer";
    cancelButton.style.fontFamily = "'Open Sans', sans-serif";
    cancelButton.style.fontSize = "16px";
    cancelButton.style.fontWeight = "600";
    cancelButton.addEventListener("mouseover", () => cancelButton.style.background = "#E0E0E0");
    cancelButton.addEventListener("mouseout", () => cancelButton.style.background = "#FFF");

    const saveButton = document.createElement("button");
    saveButton.innerText = "Lưu";
    saveButton.style.width = "150px"; // Giảm kích thước nút
    saveButton.style.height = "40px";
    saveButton.style.borderRadius = "5px";
    saveButton.style.background = "#005DB4";
    saveButton.style.color = "#FFF";
    saveButton.style.border = "none";
    saveButton.style.cursor = "pointer";
    saveButton.style.fontFamily = "'Open Sans', sans-serif";
    saveButton.style.fontSize = "16px";
    saveButton.style.fontWeight = "600";
    saveButton.addEventListener("mouseover", () => saveButton.style.background = "#004080");
    saveButton.addEventListener("mouseout", () => saveButton.style.background = "#005DB4");

    cancelButton.addEventListener("click", () => {
        popupContainer.style.display = "none";
    });

    saveButton.addEventListener("click", () => {
        const id = document.getElementById("printer-id").value;
        const model = document.getElementById("printer-model").value;
        const ip = document.getElementById("printer-ip").value;
        const location = document.getElementById("printer-location").value;

        if (!id || !model || !ip || !location) {
            alert("Vui lòng nhập đầy đủ thông tin máy in!");
            return;
        }

        console.log("Thông tin máy in mới:", { id, model, ip, location });

        popupContainer.style.display = "none"; // Đóng popup sau khi lưu
    });

    popupFooter.appendChild(cancelButton);
    popupFooter.appendChild(saveButton);

    popupContent.appendChild(popupFooter);
    popupContainer.appendChild(popupContent);
    document.body.appendChild(popupContainer);

    // Hiển thị popup khi nhấn nút "Thêm máy in"
    addButton.addEventListener("click", () => {
        popupContainer.style.display = "flex";
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const printerLinks = document.querySelectorAll(".file-table a");
    const body = document.body;

    // Tạo popup HTML
    const popupHTML = `
        <div class="popup-container">
            <div class="popup-content">
                <h2>Thông tin máy in</h2>
                <p><strong>ID:</strong> <span id="printer-id"></span> <button class="edit-button">✏️</button></p>
                <p><strong>Mẫu máy:</strong> <span id="printer-model"></span></p>
                <p><strong>Địa chỉ IP:</strong> <span id="printer-ip"></span></p>
                <p><strong>Vị trí:</strong> <span id="printer-location"></span></p>
                <hr />
                <p><strong>Trạng thái:</strong>
                    <select id="printer-status">
                        <option value="Đang hoạt động">Đang hoạt động</option>
                        <option value="Không hoạt động">Không hoạt động</option>
                    </select>
                </p>
                <div class="popup-buttons">
                    <button class="button button-style-1">Hủy</button>
                    <button class="button button-style-2">Lưu</button>
                </div>
            </div>
        </div>
    `;

    // Thêm popup vào body
    body.insertAdjacentHTML("beforeend", popupHTML);

    const popupContainer = document.querySelector(".popup-container");
    const popupContent = document.querySelector(".popup-content");
    const cancelButton = document.querySelector(".button-style-1");
    const saveButton = document.querySelector(".button-style-2");

    // Dữ liệu máy in
    const printerData = {
        PRT001: {
            id: "Máy in 1",
            model: "Toshiba 5505AC",
            ip: "123.456.7890",
            location: "H1 - phòng tự học tầng 1",
            status: "Đang hoạt động",
        },
        PRT002: {
            id: "Máy in 2",
            model: "Canon iR-ADV C3520",
            ip: "192.168.1.2",
            location: "H2 - phòng thí nghiệm",
            status: "Không hoạt động",
        },
    };

    // Hiển thị popup
    printerLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const printerId = link.textContent;
            const data = printerData[printerId];

            if (data) {
                document.getElementById("printer-id").textContent = data.id;
                document.getElementById("printer-model").textContent = data.model;
                document.getElementById("printer-ip").textContent = data.ip;
                document.getElementById("printer-location").textContent = data.location;
                document.getElementById("printer-status").value = data.status;

                popupContainer.style.display = "flex";
            }
        });
    });

    // Đóng popup
    cancelButton.addEventListener("click", () => {
        popupContainer.style.display = "none";
    });

    // Lưu dữ liệu
    saveButton.addEventListener("click", () => {
        const updatedStatus = document.getElementById("printer-status").value;
        alert(`Trạng thái đã lưu: ${updatedStatus}`);
        popupContainer.style.display = "none";
    });

    // CSS trong script
    const style = document.createElement("style");
    style.textContent = `
        .popup-container {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
        }

        .popup-content {
            background-color: #FFF;
            border-radius: 10px;
            padding: 20px;
            text-align: left;
            width: 500px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            font-family: 'Open Sans', sans-serif;
        }

        .popup-content h2 {
            font-size: 20px;
            margin-bottom: 15px;
            font-weight: bold;
        }

        .popup-content p {
            margin: 5px 0;
            font-size: 16px;
        }

        .popup-buttons {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-top: 20px;
        }

        .button {
            padding: 10px 20px;
            font-size: 14px;
            border-radius: 5px;
            cursor: pointer;
            border: none;
        }

        .button-style-1 {
            background-color: #D9D9D9;
            color: black;
        }

        .button-style-1:hover {
            background-color: #B0B0B0;
        }

        .button-style-2 {
            background-color: #005DB4;
            color: white;
        }

        .button-style-2:hover {
            background-color: #004080;
        }
    `;
    document.head.appendChild(style);
});