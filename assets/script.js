
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
