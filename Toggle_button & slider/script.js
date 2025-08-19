// Slider logic
    const range = document.getElementById('myRange');
    const sliderValue = document.getElementById('sliderValue');
    range.addEventListener('input', () => {
      sliderValue.textContent = range.value;
    });

// Toggle logic
    const toggleBtn = document.getElementById('toggleBtn');
    const toggleStatus = document.getElementById('toggleStatus');
    toggleBtn.addEventListener('change', () => {
      toggleStatus.textContent = toggleBtn.checked ? 'ON' : 'OFF';
    });