const myModalEl = document.querySelector('#myModal')
const modal = new bootstrap.Modal(myModalEl)

const configObject = { keyboard: false }
const modal1 = new bootstrap.Modal(myModalEl, configObject) 
const myCollapseEl = document.querySelector('#myCollapse')

myCollapseEl.addEventListener('shown.bs.collapse', event => {
  
})
const myCarouselEl = document.querySelector('#myCarousel')
const carousel = bootstrap.Carousel.getInstance(myCarouselEl) 

myCarouselEl.addEventListener('slid.bs.carousel', event => {
  carousel.to('2') 
})

carousel.to('1') 
carousel.to('2') 