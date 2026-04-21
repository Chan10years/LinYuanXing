const scrollButtons = document.querySelectorAll("[data-scroll-target]");
const featureCards = document.querySelectorAll("[data-feature-gallery]");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxTitle = document.querySelector(".lightbox-title");
const lightboxCounter = document.querySelector(".lightbox-counter");
const lightboxPrev = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");
const lightboxCopyTitle = document.querySelector(".lightbox-copy-title");
const lightboxCopyBody = document.querySelector(".lightbox-copy-body");
const characterPlayButtons = document.querySelectorAll("[data-character-play]");
const characterExpandButtons = document.querySelectorAll("[data-character-expand]");
const characterProfileButtons = document.querySelectorAll("[data-character-profile]");
const characterModal = document.querySelector(".character-modal");
const characterModalClose = document.querySelector(".character-modal-close");
const characterModalTitle = document.querySelector(".character-modal-title");
const characterModalSummary = document.querySelector(".character-modal-summary");
const characterModalBody = document.querySelector(".character-modal-body");
const characterModalTags = document.querySelector(".character-modal-tags");
const loreToggles = document.querySelectorAll(".lore-toggle");
const videoShell = document.querySelector(".video-shell");
const mainVideo = document.querySelector(".main-video");
const videoPlay = document.querySelector(".video-play");

const featureGalleries = {
  "ancient-city": {
    title: "古城仍立",
    images: [
      {
        src: "assets/images/gallery-1.png",
        alt: "秩序外壳尚存的古城截图一",
        clueTitle: "古城仍立",
        clueBody: ["礼制尚在，门阶尚净。", "只是城中人说话越来越轻，像怕惊动什么。"],
      },
      {
        src: "assets/images/gallery-2.jpg",
        alt: "秩序外壳尚存的古城截图二",
        clueTitle: "深院无声",
        clueBody: ["院门未闭，香火未断。", "许多规矩还被守着，却已没人敢问缘由。"],
      },
      {
        src: "assets/images/gallery-3.jpg",
        alt: "秩序外壳尚存的古城截图三",
        clueTitle: "旧仪未废",
        clueBody: ["檐下仍悬着旧朝的名号。", "它们端正、肃穆，也冷得不近人情。"],
      },
      {
        src: "assets/images/gallery-4.jpg",
        alt: "秩序外壳尚存的古城截图四",
        clueTitle: "阶前余灰",
        clueBody: ["灰烬被扫到石阶边。", "像有人刚刚清理过，又像清理本身才是仪式。"],
      },
      {
        src: "assets/images/gallery-5.jpg",
        alt: "秩序外壳尚存的古城截图五",
        clueTitle: "供奉仍明",
        clueBody: ["灯盏还亮着。", "可受供者沉默太久，供奉者也渐渐不像活人。"],
      },
      {
        src: "assets/images/gallery-6.jpg",
        alt: "秩序外壳尚存的古城截图六",
        clueTitle: "城心渐冷",
        clueBody: ["越接近城心，路越干净。", "干净到看不见挣扎，只剩被留下的秩序。"],
      },
    ],
  },
  "mist-village": {
    title: "荒村未眠",
    images: [
      {
        src: "assets/images/village-1.png",
        alt: "荒村全景截图",
        clueTitle: "荒村全景",
        clueBody: ["清河镇早已迁空，风还认得回来的路。"],
      },
      {
        src: "assets/images/village-2.jpg",
        alt: "妇人残笔截图",
        clueTitle: "妇人残笔",
        clueBody: [
          "“镇上女眷都说，我是清河镇最风光的夫人。”",
          "“只是官人近来越发阴沉，夜里总在磨刀。”",
          "“我只求荣华安稳，别出祸事。”",
        ],
      },
      {
        src: "assets/images/village-3.jpg",
        alt: "断腿板凳与厨规截图",
        clueTitle: "断腿板凳与厨规",
        clueBody: [
          "一条榆木长凳，断成三截。",
          "凳腿内侧刻着字：“张二因多言，打断腿，逐出厨房。”",
          "墙上厨规仍在：“主厨之言，即为天理。”",
          "“食材来历，不得过问。”",
        ],
      },
      {
        src: "assets/images/village-4.jpg",
        alt: "井边夜哭截图",
        clueTitle: "井边夜哭",
        clueBody: ["后人说，夜分常有妇人哀哭井侧。", "她只反复一句：", "“还我儿。”"],
      },
      {
        src: "assets/images/village-5.jpg",
        alt: "残碑录截图",
        clueTitle: "残碑录",
        clueBody: [
          "《清河镇珍味楼兴废记》",
          "“天启四年秋，主厨忽挈其妻子，一夕遁去，莫知所终。”",
          "“不期年，十室九空，向之乐土，鞠为荒墟。”",
        ],
      },
    ],
  },
  "old-street": {
    title: "城镇有市",
    images: [
      {
        src: "assets/images/citystreet-1.jpg",
        alt: "人声与交易交错的城镇截图一",
        clueTitle: "灯火照市",
        clueBody: ["摊贩仍在吆喝，酒旗仍在风里摆动。", "热闹是真，危险也是真。"],
      },
      {
        src: "assets/images/citystreet-2.jpg",
        alt: "人声与交易交错的城镇截图二",
        clueTitle: "价码已明",
        clueBody: ["消息在暗巷里转手，姓名也能折成银钱。", "没人问来处，只问够不够价。"],
      },
      {
        src: "assets/images/citystreet-3.jpg",
        alt: "人声与交易交错的城镇截图三",
        clueTitle: "笑面藏刃",
        clueBody: ["人群把恶意藏得很好。", "直到擦肩而过时，才听见袖中铁器轻响。"],
      },
    ],
  },
};

const characterProfiles = {
  male: {
    title: "半身临渊之人",
    summary: "越是靠近深渊，越要拼命守住还像人的那一部分。",
    body: [
      "村破亲亡后，他活了下来，也从那一刻起对怪物与乱世生出刻骨的敌意。表面寡言冷静，心思却比谁都深。为了活下去，也为了向黑暗复仇，他不得不借深渊之力前行；可每向前一步，都意味着更靠近自己最厌恶的东西。",
      "他不是天生完满的英雄，只是在不断失去之后，仍不肯彻底沉下去的人。",
    ],
    tags: ["乱世遗孤", "半身染污", "仍不低头"],
  },
  female: {
    title: "仍信人间有光的人",
    summary: "她知道这世道有多坏，也仍愿意相信人能彼此相救。",
    body: [
      "她比男主更愿意救人，也更早把“行侠”当成自己要走的路。她知道这世道有多坏，也见过人心如何崩塌，却没有因此放弃相信善意。她并非脆弱的陪衬，恰恰相反，她在最残酷的时候仍能看清现实，并果断做出选择。",
      "她既是男主心中最温柔的牵挂，也是他濒临堕落时，最后那一点不肯熄灭的火。",
    ],
    tags: ["信人", "敢决断", "行侠之念"],
  },
  nameless: {
    title: "见过另一面的求道者",
    summary: "他看见了乱世将至，也看见了“吃人的那一面”。",
    body: [
      "他在大灾与流徙之间察觉天道失常，看见乱世将至，也看见“吃人的那一面”正逐渐显露。怀疑、求证、崩溃，是他走向真相的三步。为了证实自己的判断，他亲手跨过禁线，终于窥见部分真实。",
      "可那份真实没有把他送往超脱，只把他推向毁灭。留下笔记、功法与未竟之因后，他选择自尽，把那个问题交给后来的人去回答。",
    ],
    tags: ["先见者", "求道者", "证道而崩"],
  },
  master: {
    title: "披着道袍的食人者",
    summary: "他追求的从来不是大道，只是把众生踩成登天的阶梯。",
    body: [
      "百年前，他只是清河镇珍味楼的主厨，手艺绝顶，性情严酷，习惯以恐惧统治厨房。与无名道人的交易之后，他亲手烹子，换来一条以吃人为阶的修炼之路。从那以后，他再不怀疑，只全盘接受“吃人才是天道”。",
      "如今的他披着道长外壳，实则是强权、贪欲与异化的化身。众生在他眼里只是祭品，男女主更是难得的“器”。吞下他们，便等于吞下整村人的灵性。",
    ],
    tags: ["成仙执念", "众生为祭", "黑暗化身"],
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

  if (lightboxCopyTitle && lightboxCopyBody) {
    lightboxCopyTitle.textContent = image.clueTitle || "";
    lightboxCopyBody.innerHTML = (image.clueBody || [])
      .map((line) => `<p>${line}</p>`)
      .join("");
    lightboxCopyBody.scrollTop = 0;
  }
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
  if (lightboxCopyTitle && lightboxCopyBody) {
    lightboxCopyTitle.textContent = "";
    lightboxCopyBody.innerHTML = "";
  }
  activeGallery = null;
  activeIndex = 0;
}

function renderParagraphs(container, paragraphs) {
  container.innerHTML = "";
  paragraphs.forEach((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    container.appendChild(paragraph);
  });
}

function openCharacterModal(characterId) {
  const profile = characterProfiles[characterId];
  if (!profile || !characterModal) {
    return;
  }

  characterModalTitle.textContent = profile.title;
  characterModalSummary.textContent = profile.summary;
  renderParagraphs(characterModalBody, profile.body);
  characterModalTags.innerHTML = "";
  profile.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag;
    characterModalTags.appendChild(tagElement);
  });

  characterModal.classList.add("is-open");
  characterModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("profile-open");
  characterModalClose.focus();
}

function closeCharacterModal() {
  if (!characterModal) {
    return;
  }

  characterModal.classList.remove("is-open");
  characterModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("profile-open");
  characterModalTitle.textContent = "";
  characterModalSummary.textContent = "";
  characterModalBody.innerHTML = "";
  characterModalTags.innerHTML = "";
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

characterProfileButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openCharacterModal(button.dataset.characterId);
  });
});

if (characterModal && characterModalClose) {
  characterModalClose.addEventListener("click", closeCharacterModal);
  characterModal.addEventListener("click", (event) => {
    if (event.target === characterModal) {
      closeCharacterModal();
    }
  });
}

loreToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".lore-item");
    const isOpen = item.classList.contains("is-open");

    loreToggles.forEach((toggle) => {
      const currentItem = toggle.closest(".lore-item");
      const body = currentItem.querySelector(".lore-body");

      currentItem.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      body.setAttribute("aria-hidden", "true");
    });

    if (!isOpen) {
      const body = item.querySelector(".lore-body");

      item.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
      body.setAttribute("aria-hidden", "false");
    }
  });
});

characterPlayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".character-card");
    const video = card.querySelector(".character-main-media video");

    if (!video) {
      return;
    }

    video.muted = true;
    video.loop = true;

    if (video.paused) {
      video.play().catch(() => undefined);
      button.textContent = "收起其影";
    } else {
      video.pause();
      button.textContent = "凝看其心";
    }
  });
});

characterExpandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".character-card");
    const panelId = button.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;
    const revealVideo = panel ? panel.querySelector("video") : null;
    const isRevealed = card.classList.toggle("is-revealed");

    button.setAttribute("aria-expanded", String(isRevealed));
    button.textContent = isRevealed ? "收起锋芒" : "见其锋芒";

    if (panel) {
      panel.setAttribute("aria-hidden", String(!isRevealed));
    }

    if (!revealVideo) {
      return;
    }

    if (isRevealed) {
      revealVideo.muted = true;
      revealVideo.loop = true;
      revealVideo.play().catch(() => undefined);
    } else {
      revealVideo.pause();
      revealVideo.currentTime = 0;
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (characterModal && characterModal.classList.contains("is-open")) {
      closeCharacterModal();
      return;
    }

    if (lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  } else if (lightbox.classList.contains("is-open") && event.key === "ArrowLeft") {
    showAdjacentImage(-1);
  } else if (lightbox.classList.contains("is-open") && event.key === "ArrowRight") {
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
