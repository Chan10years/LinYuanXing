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
  "imperial-temple": {
    title: "御敕玄观",
    images: [
      {
        src: "assets/images/6.imperial-taoist-temple.png",
        alt: "御敕玄观主景",
        clueTitle: "山门未闭",
        clueBody: [
          "被御敕册封的玄观仍旧香火鼎盛，也仍被视作一方秩序尚存的证明。",
          "可真正让人难以回望的，从来不是高悬匾额，而是那些被妥善带回观中的旧痕。"
        ],
      },
      {
        src: "assets/images/gallery-1.png",
        alt: "御敕玄观补充场景一",
        clueTitle: "敕额高悬",
        clueBody: [
          "礼制与威望为这座玄观披上了最正统的外衣。",
          "人们先看见的是体面与安定，很少再继续追问它还守着什么。"
        ],
      },
      {
        src: "assets/images/gallery-2.jpg",
        alt: "御敕玄观补充场景二",
        clueTitle: "深院无声",
        clueBody: [
          "院门层层相接，风声总比人声更容易传得更深。",
          "越往里走，越能感觉到某些规矩并非写在墙上，却始终被默认遵守。"
        ],
      },
      {
        src: "assets/images/gallery-3.jpg",
        alt: "御敕玄观补充场景三",
        clueTitle: "旧制犹在",
        clueBody: [
          "器物、法度与香火都摆在它们该在的位置。",
          "这份井然秩序本身，反而让某些被收起的细节显得更加醒目。"
        ],
      },
      {
        src: "assets/images/gallery-4.jpg",
        alt: "御敕玄观补充场景四",
        clueTitle: "阶前净痕",
        clueBody: [
          "石阶总被打扫得很干净，像什么都没有留下。",
          "可在真正知道的人眼里，空白本身也可能是一种线索。"
        ],
      },
      {
        src: "assets/images/gallery-5.jpg",
        alt: "御敕玄观补充场景五",
        clueTitle: "供灯未熄",
        clueBody: [
          "供台前的灯火一夜未断，照见的是敬意，也是沉默。",
          "有些事并非被忘记，只是长久以来都被默认为不必多问。"
        ],
      },
      {
        src: "assets/images/gallery-6.jpg",
        alt: "御敕玄观补充场景六",
        clueTitle: "池影沉思",
        clueBody: [
          "后院池水很静，鱼群终日在一处游动。",
          "弟子偶尔看见观主久立池边，却从无人听他提起那片水底究竟映着什么。"
        ],
      },
    ],
  },
  "ancient-city": {
    title: "古城旧地",
    images: [
      {
        src: "assets/images/7.ancient-city.png",
        alt: "古城旧地主景",
        clueTitle: "旧城未息",
        clueBody: [
          "城还在，规矩也还在。许多人仍像往常一样生活，只是不再轻易谈起从前。",
          "真正没有散去的，往往不是某一场风波，而是那场风波留下来的秩序裂缝。"
        ],
      },
    ],
  },
  "abandoned-village": {
    title: "荒村未眠",
    images: [
      {
        src: "assets/images/8.abandoned-village.png",
        alt: "荒村未眠主景",
        clueTitle: "旧雨未歇",
        clueBody: [
          "荒村的安静并不轻松，它更像一个被拖得太久的停顿。",
          "空屋里没有答案，却留下了许多还未被说完的话。"
        ],
      },
      {
        src: "assets/images/village-1.png",
        alt: "荒村未眠补充场景一",
        clueTitle: "清河旧地",
        clueBody: [
          "风还认得回来的路，人却未必还在原处。",
          "有些地方之所以荒废，不是因为没人记得，而是因为记得的人太少。"
        ],
      },
      {
        src: "assets/images/village-2.jpg",
        alt: "荒村未眠补充场景二",
        clueTitle: "残笔留痕",
        clueBody: [
          "旧字句常常比人更能留下来。",
          "越是零散的记录，越容易在后来变成重新拼合旧事的钥匙。"
        ],
      },
      {
        src: "assets/images/village-3.jpg",
        alt: "荒村未眠补充场景三",
        clueTitle: "断处无声",
        clueBody: [
          "真正令人不安的，不是被打断的东西，而是打断之后谁都不再追问。",
          "断裂会留在物件上，也会留在人和地方之间。"
        ],
      },
      {
        src: "assets/images/village-4.jpg",
        alt: "荒村未眠补充场景四",
        clueTitle: "井边回音",
        clueBody: [
          "夜里若有人听见回声，也未必知道它来自过去还是来自自己。",
          "荒废之地最擅长保存的，是迟迟没有被安放的情绪。"
        ],
      },
      {
        src: "assets/images/village-5.jpg",
        alt: "荒村未眠补充场景五",
        clueTitle: "残页未终",
        clueBody: [
          "哪怕只剩零散纸页，旧案也会以自己的方式继续存在。",
          "没有说完的部分，往往正是后来的人必须亲自走进去的部分。"
        ],
      },
    ],
  },
  "town-market": {
    title: "城镇有市",
    images: [
      {
        src: "assets/images/9.daytime-town-market.png",
        alt: "城镇有市主景",
        clueTitle: "白日喧声",
        clueBody: [
          "白日里人声鼎沸，买卖照常，乱世似乎也可以暂时退到街巷之外。",
          "可真正流通的不只是货物，还有消息、立场与各自想掩住的来历。"
        ],
      },
      {
        src: "assets/images/citystreet-1.jpg",
        alt: "城镇有市补充场景一",
        clueTitle: "灯火照市",
        clueBody: [
          "热闹是真，戒心也是真。",
          "越是人多的地方，越需要学会分辨谁在说话，谁在试探。"
        ],
      },
      {
        src: "assets/images/citystreet-2.jpg",
        alt: "城镇有市补充场景二",
        clueTitle: "价码已明",
        clueBody: [
          "消息、路引与姓名，都可能在某个角落被折算成另一种价值。",
          "乱世从不只靠刀兵改变走向，也靠市井里悄无声息的交换。"
        ],
      },
      {
        src: "assets/images/citystreet-3.jpg",
        alt: "城镇有市补充场景三",
        clueTitle: "笑面藏意",
        clueBody: [
          "越是平静的交谈，越可能藏着彼此都没有明说的条件。",
          "有时候，人心的转向比城门开合还要更快。"
        ],
      },
    ],
  },
};

const characterProfiles = {
  male: {
    title: "半身临渊之人",
    summary: "越是被推近渊边，越要拼命守住自己仍愿意站在人这一边的那部分。",
    body: [
      "他在旧案之后活了下来，也从那时起学会了如何在失序之中继续前行。为了求生，他被迫靠近本不该属于人的力量；为了不彻底偏离自己，他又必须时时提醒自己为何而战。",
      "在御敕玄观的山门之下，他既是弟子，也是被命运推到边缘的人。越是接近真相，他越明白真正艰难的并不只是斩妖，而是在借力之后仍不愿轻易认命。"
    ],
    tags: ["乱世遗孤", "器体质", "临渊未坠"],
  },
  female: {
    title: "仍信人间有光的人",
    summary: "她见过人心的裂痕，也知道善意在乱世里多么脆弱，可她仍不肯把救人当成笑话。",
    body: [
      "她比许多人都更早意识到这个世道的残酷，却没有因此放弃善意。她知道秩序会崩塌，人心会动摇，也知道仍有人值得被救，仍有事值得被坚持。",
      "她既是同行者，也是那道始终提醒男主别彻底沉下去的目光。面对玄观深处的旧事，她未必最冷静，却往往最先看清什么东西仍值得守住。"
    ],
    tags: ["器体质", "行侠之念", "心火未熄"],
  },
  nameless: {
    title: "游方的先见者",
    summary: "他行走于荒村、古城与山门之外，像一条被遗落在旧事边缘的线索，知道很多事，却从不一次说完。",
    body: [
      "他行走四方，像旁观者，也像旧案曾经的亲历者。许多他看见的东西并不能轻易说出口，许多他留下的话更像是给后来人的提示，而不是现成的答案。",
      "在这个关于玄观、灵性与旧事的故事里，他从不是喧宾夺主的人，却总会在最关键的地方留下足够让人重新回头的痕迹。"
    ],
    tags: ["游方道人", "旁观者", "旧案残影"],
  },
  master: {
    title: "沉默的观主",
    summary: "他是御敕玄观的观主，持守秩序，也把许多答案收进了山门深处。",
    body: [
      "他立观、收徒、斩妖，在乱世中为许多人撑起了仍可依附的一方山门。外人眼里，他是稳重而值得信任的正统观主；弟子眼里，他却也始终带着一些难以看透的沉默。",
      "每次异象平息之后，他总会亲自处理那些不便示人的痕迹。有些残痕被带回观中，有些旧事被留在池水与山门深处。究竟是谨慎、责任，还是别的原因，故事并不会太早给出结论。"
    ],
    tags: ["正统道门", "御敕观主", "深藏旧事"],
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

function renderParagraphs(container, paragraphs) {
  container.innerHTML = "";
  paragraphs.forEach((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    container.appendChild(paragraph);
  });
}

function renderLightboxImage() {
  if (!activeGallery) {
    return;
  }

  const image = activeGallery.images[activeIndex];
  lightboxTitle.textContent = activeGallery.title;
  lightboxCounter.textContent = `${activeIndex + 1} / ${activeGallery.images.length}`;
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCopyTitle.textContent = image.clueTitle || "";
  lightboxCopyBody.innerHTML = (image.clueBody || [])
    .map((line) => `<p>${line}</p>`)
    .join("");
  lightboxCopyBody.scrollTop = 0;
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
  lightboxCopyTitle.textContent = "";
  lightboxCopyBody.innerHTML = "";
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

function openCharacterModal(characterId) {
  const profile = characterProfiles[characterId];
  if (!profile) {
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
  characterModal.classList.remove("is-open");
  characterModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("profile-open");
  characterModalTitle.textContent = "";
  characterModalSummary.textContent = "";
  characterModalBody.innerHTML = "";
  characterModalTags.innerHTML = "";
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

characterModalClose.addEventListener("click", closeCharacterModal);
characterModal.addEventListener("click", (event) => {
  if (event.target === characterModal) {
    closeCharacterModal();
  }
});

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
    const panel = card.querySelector(".character-video-inline");
    const video = panel ? panel.querySelector("video") : null;
    const playLabel = button.dataset.labelPlay || "观看片段";
    const pauseLabel = button.dataset.labelPause || "收起片段";

    if (!panel || !video) {
      return;
    }

    const isOpen = panel.classList.toggle("is-open");
    panel.setAttribute("aria-hidden", String(!isOpen));

    if (isOpen) {
      video.muted = true;
      video.loop = true;
      video.play().catch(() => undefined);
      button.textContent = pauseLabel;
    } else {
      video.pause();
      video.currentTime = 0;
      button.textContent = playLabel;
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

    if (revealVideo) {
      if (isRevealed) {
        revealVideo.muted = true;
        revealVideo.loop = true;
        revealVideo.play().catch(() => undefined);
      } else {
        revealVideo.pause();
        revealVideo.currentTime = 0;
      }
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (characterModal.classList.contains("is-open")) {
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
    mainVideo.play().catch(() => undefined);
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
