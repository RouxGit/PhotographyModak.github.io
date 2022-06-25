/*=============== SHOW MENU ===============*/


/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== HOME SWIPER ===============*/

var homeSwiper = new Swiper('.home-swiper', {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: "true",
});

/*=============== SERVICES TAB ===============*/

const tabs = document.querySelectorAll('[data-target]'),
  tabContent = document.querySelectorAll('[data-content]')
    
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContent.forEach(tabContents => {
      tabContents.classList.remove('services__active')
    })

    target.classList.add('services__active')

    tabs.forEach(tab => {
      tab.classList.remove('services__active')
    })

    tab.classList.add('services__active')
  })
})


/*=============== LIGHTBOX GALLERY ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
