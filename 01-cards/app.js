const slides = document.querySelectorAll('.slide')

slides.forEach((slide) => {
  slide.addEventListener('click', () => {
    clearActiveClasses()

    slide.classList.add('active')
    document.body.style.backgroundImage = document.getElementsByClassName("slide active")[0].style.backgroundImage;
  })
})

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}