// Hent alle elementer med klassen "box" og attributten "data-animate"
const boxes = document.querySelectorAll(".box[data-animate]");

// Initialiser IntersectionObserver
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Tilføj "visible"-klassen
        observer.unobserve(entry.target); // Stop observering
      }
    });
  },
  { threshold: 0.1 } // Elementet er synligt, når 10% er i viewport
);

// Overvåg hver boks
boxes.forEach((box) => observer.observe(box));
