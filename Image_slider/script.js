   const images = [
      "images/1.jpg",
      "images/2.jpg",
      "images/3.jpg"
    ];
    let index = 0;
    const sliderImage = document.getElementById('sliderImage');

    function showImage(i) {
      index = (i + images.length) % images.length;
      sliderImage.src = images[index];
    }
    function prevImage() {
      showImage(index - 1);
    }
    function nextImage() {
      showImage(index + 1);
    }