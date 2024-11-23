const boxes = document.querySelectorAll(".box[data-animate]");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

// Overvåg hver boks
boxes.forEach((box) => observer.observe(box));
