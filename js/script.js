
document.addEventListener("DOMContentLoaded", () => {
    const features = document.querySelectorAll(".fade-in");
    const options = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    features.forEach(feature => {
        observer.observe(feature);
    });
});
