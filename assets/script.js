
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade-in');
  const options = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, options);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");
const thumbs = document.querySelectorAll(".thumb");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const imageSources = [
  "assets/img1.jpg",
  "assets/img2.jpg",
  "assets/img3.jpg",
  "assets/img4.jpg"
];

let currentIndex = 0;

thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    currentIndex = index;
    openModal(currentIndex);
  });
});

function openModal(index) {
  modal.style.display = "block";
  modalImg.src = imageSources[index];
}

function closeModal() {
  modal.style.display = "none";
}

function showNext() {
  currentIndex = (currentIndex + 1) % imageSources.length;
  modalImg.src = imageSources[currentIndex];
}

function showPrev() {
  currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
  modalImg.src = imageSources[currentIndex];
}

closeBtn.addEventListener("click", closeModal);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
