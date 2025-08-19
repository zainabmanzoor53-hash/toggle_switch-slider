    const thumb = document.getElementById('emojiThumb');
    const label = document.getElementById('statusLabel');
    const switchBox = document.getElementById('emojiSwitch');

    let state = 0; // 0 = off (🙂), 1 = on (☹), 2 = off (😀)

    switchBox.addEventListener('click', () => {
      state = (state + 1) % 3;

      if(state === 0) {
        thumb.textContent = '🙂';
        switchBox.style.backgroundColor = '#ccc';
        thumb.style.transform = 'translateX(0)';
        label.textContent = 'OFF';
      } else if(state === 1) {
        thumb.textContent = '🙁';
        switchBox.style.backgroundColor = 'lightblue';
        thumb.style.transform = 'translateX(40px)';
        label.textContent = 'ON';
      } else if(state === 2) {
        thumb.textContent = '😀';
        switchBox.style.backgroundColor = '#ccc';
        thumb.style.transform = 'translateX(0)';
        label.textContent = 'OFF';
      }
    });