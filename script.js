const scrollButtons = document.querySelectorAll("[data-scroll-target]");
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const lightboxClose = document.querySelector(".lightbox-close");
const videoShell = document.querySelector(".video-shell");
const mainVideo = document.querySelector(".main-video");
const videoPlay = document.querySelector(".video-play");

scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.scrollTarget);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

function openLightbox(src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  lightboxImage.src = "";
  lightboxImage.alt = "";
}

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const image = item.querySelector("img");
    openLightbox(item.dataset.full, image.alt);
  });
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }
});

if (videoPlay && mainVideo && videoShell) {
  videoPlay.addEventListener("click", () => {
    mainVideo.controls = true;
    videoShell.classList.add("is-playing");
    mainVideo.play();
  });

  mainVideo.addEventListener("pause", () => {
    if (mainVideo.currentTime === 0 || mainVideo.ended) {
      videoShell.classList.remove("is-playing");
    }
  });

  mainVideo.addEventListener("ended", () => {
    videoShell.classList.remove("is-playing");
  });
}
