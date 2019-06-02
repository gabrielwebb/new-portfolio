const animatedTags = document.querySelectorAll("h2, h3, p,section img, a.button")

/// fade out on load
animatedTags.forEach(tag => {
  tag.style.opacity = 0
})

const fadeIn = function () {
  // look thru all animated tags and see
  // withe the getBoundingClientRect if its in the window
  let delay = 0.5
  animatedTags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom

    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadein ${delay}s both`
      delay = delay + 0.5
    } else {
      tag.style.opacity = 0
      tag.style.animation = ''
    }


  })
}


// run fadeIn on load
fadeIn()

// on scroll run fadeIn

document.addEventListener('scroll', function () {
  fadeIn()
})

// on browser resie run fadeIn

window.addEventListener('resize', function () {
  fadeIn()
})