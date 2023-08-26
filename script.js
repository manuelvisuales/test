const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    const lightboxImage = new Image();
    lightboxImage.src = item.src;
    lightboxImage.alt = "Imagen en pantalla completa";
    lightboxImage.classList.add("lightbox-image");

    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.appendChild(lightboxImage);
    
    lightbox.addEventListener("click", () => {
      lightbox.remove();
    });

    document.body.appendChild(lightbox);
  });
});

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  document.querySelector(".background").style.backgroundPositionY = -scrollTop / 2 + "px";
});