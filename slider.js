let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(n)
{
    slides.forEach((slide, index) =>
    {
       slide.style.transform = `translateX(${100 * (index - n)}%)`;
    });
}

function nextSlide()
{
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide()
{
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide)
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

showSlide(0);