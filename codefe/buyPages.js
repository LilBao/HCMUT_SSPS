
// buyPage.js
document.addEventListener('DOMContentLoaded', (event) => {
    const popup = document.querySelector('.popup');
    const popupContent = document.querySelector('.popup-content');
    const cancelBtn = document.querySelector('.cancel-btn');
    const buyPagesBtn = document.getElementById('buy-pages-btn');
  
    // Show the popup when the "Buy Pages" button is clicked
    buyPagesBtn.onclick = function() {
      popup.style.display = 'block';
      popupContent.classList.remove('zoom-out');
      popupContent.classList.add('zoom-in');
    }
  
    // Close the popup when the user clicks on the "Hủy" button
    cancelBtn.onclick = function() {
      popupContent.classList.add('zoom-out');
      setTimeout(() => {
        popup.style.display = 'none';
        popupContent.classList.remove('zoom-out');
      }, 300); // Match the duration of the zoomOut animation
    }
  
    // Close the popup when the user clicks anywhere outside of the popup
    window.onclick = function(event) {
      if (event.target == popup) {
        popupContent.classList.add('zoom-out');
        setTimeout(() => {
          popup.style.display = 'none';
          popupContent.classList.remove('zoom-out');
        }, 300); // Match the duration of the zoomOut animation
      }
    }

    // Lấy các phần tử từ DOM
  const arrowBtn = document.getElementById("arrowBtn");
  const dropdownMenu = document.getElementById("dropdownMenu");

  // Hiển thị/ẩn dropdown khi nhấn vào mũi tên
  arrowBtn.addEventListener("click", () => {
      // Kiểm tra xem dropdown đang hiển thị hay không, nếu đang hiển thị thì ẩn, nếu không thì hiển thị
      const isDisplayed = dropdownMenu.style.display === "block";
      dropdownMenu.style.display = isDisplayed ? "none" : "block";
  });

  // Ẩn dropdown nếu người dùng nhấn ra ngoài
  document.addEventListener("click", (event) => {
      if (!dropdownMenu.contains(event.target) && event.target !== arrowBtn) {
          dropdownMenu.style.display = "none";
      }
  });
});
  
    