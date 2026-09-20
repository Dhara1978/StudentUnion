const carousel = document.querySelector('.carousel');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click', () => {
  const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1;

  carousel.scrollTo({
    left: atEnd ? 0 : carousel.scrollLeft + 300,
    behavior: 'smooth'
  });
});

prev.addEventListener('click', () => {
  const atStart = carousel.scrollLeft <= 0;

  carousel.scrollTo({
    left: atStart ? carousel.scrollWidth - carousel.clientWidth : carousel.scrollLeft - 300,
    behavior: 'smooth'
  });
});