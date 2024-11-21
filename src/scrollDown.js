document.addEventListener("DOMContentLoaded", function () {
  const scrollDown = document.querySelector(".fa-circle-down");
  let currentScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  scrollDown.addEventListener("click", function () {
    const viewportHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );

    const scrollOffset = 90;

    const nextPageY = currentScrollPosition + viewportHeight - scrollOffset;

    window.scrollTo({
      top: nextPageY,
      behavior: "smooth", 
    });

    currentScrollPosition = nextPageY;
  });
});
