document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("videoFondo");
  const slideshow = document.getElementById("slideshow");
  const images = slideshow.querySelectorAll("img");

  video.preload = "auto";
  video.muted = true;
  video.autoplay = true;
  video.playbackRate = 0.8;

  // Mostrar video solo cuando pueda reproducirse
  video.addEventListener("canplaythrough", () => {
    video.style.display = "block";
    video.play();
  });

  // Cuando termina el video
  video.addEventListener("ended", () => {
    video.style.display = "none";
    slideshow.style.display = "flex";

    let currentImage = 0;

    function showNextImage() {
      images.forEach((img, i) => {
        img.style.opacity = i === currentImage ? "1" : "0";
      });
      currentImage++;
      if (currentImage >= images.length) currentImage = 0;
    }

    showNextImage();
    setInterval(showNextImage, 3000);
  });
});
