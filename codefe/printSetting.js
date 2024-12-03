
document.getElementById('custom').addEventListener('change', function() {
    const inputField = document.getElementById('customInput');
    inputField.disabled = !this.checked; // Bật input nếu radio "Tùy chọn" được chọn
  });
  
  document.querySelectorAll('input[name="pages"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
      if (this.id !== 'custom') {
        document.getElementById('customInput').disabled = true;
      }
    });
  });
  
  // show/close popup
  document.addEventListener('DOMContentLoaded', () => {
    const openPopupBtn = document.getElementById('open-popup-btn');
    const closePopupBtn = document.getElementById('close-popup-btn');
    const popupContainer = document.getElementById('popup-container');
    const popup = document.querySelector('.popup');
  
    openPopupBtn.addEventListener('click', () => {
      popupContainer.style.display = 'flex';
      setTimeout(() => {
        popup.classList.add('show');
      }, 10); // Small delay to trigger the transition
    });
  
    closePopupBtn.addEventListener('click', () => {
      popup.classList.remove('show');
      popup.addEventListener('transitionend', () => {
        popupContainer.style.display = 'none';
      }, { once: true });
    });
    document.getElementById('fileInput').addEventListener('change', function() {
      console.log(this.files[0]);
    });
  });