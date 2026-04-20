const scrollButtons = document.querySelectorAll("[data-scroll-target]");
const featureCards = document.querySelectorAll("[data-feature-gallery]");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxTitle = document.querySelector(".lightbox-title");
const lightboxCounter = document.querySelector(".lightbox-counter");
const lightboxPrev = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");
const characterPlayButtons = document.querySelectorAll(".character-play");
const videoShell = document.querySelector(".video-shell");
const mainVideo = document.querySelector(".main-video");
const videoPlay = document.querySelector(".video-play");

const featureGalleries = {
  "ancient-city": {
    title: "古城有形",
    images: [
      { src: "assets/images/gallery-1.png", alt: "庄严的古城道观截图一" },
      { src: "assets/images/gallery-2.jpg", alt: "庄严的古城道观截图二" },
      { src: "assets/images/gallery-3.jpg", alt: "庄严的古城道观截图三" },
      { src: "assets/images/gallery-4.jpg", alt: "庄严的古城道观截图四" },
      { src: "assets/images/gallery-5.jpg", alt: "庄严的古城道观截图五" },
      { src: "assets/images/gallery-6.jpg", alt: "庄严的古城道观截图六" },
    ],
  },
  "mist-village": {
    title: "雾声有迹",
    images: [
      { src: "assets/images/village-1.png", alt: "山村截图一" },
      { src: "assets/images/village-2.jpg", alt: "山村截图二" },
      { src: "assets/images/village-3.jpg", alt: "山村截图三" },
      { src: "assets/images/village-4.jpg", alt: "山村截图四" },
      { src: "assets/images/village-5.jpg", alt: "山村截图五" },
    ],
  },
  "old-street": {
    title: "旧路有别",
    images: [
      { src: "assets/images/citystreet-1.jpg", alt: "街景截图一" },
      { src: "assets/images/citystreet-2.jpg", alt: "街景截图二" },
      { src: "assets/images/citystreet-3.jpg", alt: "街景截图三" },
    ],
  },
};

let activeGallery = null;
let activeIndex = 0;

scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.scrollTarget);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

function renderLightboxImage() {
  if (!activeGallery) {
    return;
  }

  const image = activeGallery.images[activeIndex];
  lightboxTitle.textContent = activeGallery.title;
  lightboxCounter.textContent = `${activeIndex + 1} / ${activeGallery.images.length}`;
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
}

function openLightbox(galleryKey, startIndex = 0) {
  activeGallery = featureGalleries[galleryKey];
  if (!activeGallery) {
    return;
  }

  activeIndex = startIndex;
  renderLightboxImage();
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
  activeGallery = null;
  activeIndex = 0;
}

function showAdjacentImage(direction) {
  if (!activeGallery) {
    return;
  }

  const total = activeGallery.images.length;
  activeIndex = (activeIndex + direction + total) % total;
  renderLightboxImage();
}

featureCards.forEach((card) => {
  const openCardGallery = () => openLightbox(card.dataset.featureGallery);

  card.addEventListener("click", openCardGallery);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openCardGallery();
    }
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => showAdjacentImage(-1));
lightboxNext.addEventListener("click", () => showAdjacentImage(1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

characterPlayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const media = button.closest(".character-media");
    const video = media.querySelector("video");

    video.controls = true;
    media.classList.add("is-playing");
    video.play();
  });
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("is-open")) {
    return;
  }

  if (event.key === "Escape") {
    closeLightbox();
  } else if (event.key === "ArrowLeft") {
    showAdjacentImage(-1);
  } else if (event.key === "ArrowRight") {
    showAdjacentImage(1);
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
