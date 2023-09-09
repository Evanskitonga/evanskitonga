const words = document.querySelectorAll('.word');

function fadeInOnScroll() {
  words.forEach((word) => {
    if (isElementInViewport(word)) {
      word.style.animation = `fadeIn 20s forwards`;
    }
  });
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 20 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('resize', fadeInOnScroll);
fadeInOnScroll();



