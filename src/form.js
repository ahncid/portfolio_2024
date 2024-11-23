const form = document.getElementById("contactForm");
const thankYouMessage = document.getElementById("thankYouMessage");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  // Send data til Formspree
  const response = await fetch("https://formspree.io/f/myzydyyr", {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });

  if (response.ok) {
    form.style.display = "none";
    thankYouMessage.style.display = "block";
  } else {
    alert("Something went wrong. Please try again.");
  }
});
