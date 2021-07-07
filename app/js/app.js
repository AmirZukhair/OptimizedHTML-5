// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper('.swiper-top', {
		loop: true,
		speed: 850,
		spaceBetween: 10,
		effect: "fade",
		fadeEffect: { crossFade: true },
        slidesPerView: 1,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}, 
		breakpoints: {
			768: {
			  
			}
		  }
	  });

	  const swiperTestimonials = new Swiper('.swiper-testimonials', {
	
        slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		  },
		breakpoints: {
			768: {
				
				slidesPerView: 2,
			},
			992: {
				enabled: false,
				slidesPerView: 3,
			}
		  },
		
	  });

	  const swiperBallons = new Swiper('.swiper-ballons', {
		slidesPerView: 1,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		  },
		  speed: 850,
	  });

	  const swiperConstructor = new Swiper('.swiper-constructor', {
		slidesPerView: 1,
		effect: "fade",
		fadeEffect: { crossFade: true },
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		  },
		  speed: 1450,
	  });
	  

    
      const navMenu = document.querySelector('.header__inner-nav');
	  const mobileMenu = document.querySelector('.mobile-menu');
	  const body = document.querySelector('body');
	  
	  mobileMenu.addEventListener('click', ()=>{
		navMenu.classList.toggle('menu-opened');
		body.classList.toggle('overflow-hidden');
	  });

});