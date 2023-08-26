let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    document.querySelector(".background").style.backgroundPosition = "center " + -scrollTop / 2 + "px"; // Desplazamiento hacia arriba
  } else {
    document.querySelector(".background").style.backgroundPosition = "center " + scrollTop / 2 + "px"; // Desplazamiento hacia abajo
  }
  
  lastScrollTop = scrollTop;
});

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("close-button");

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.src;
    lightbox.style.display = "flex";
  });
});

closeButton.addEventListener("click", () => {
  lightbox.style.display = "none";
});