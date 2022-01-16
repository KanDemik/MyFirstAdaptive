let = headerBurger = document.querySelector('.header-burger');
let = headerNav = document.querySelector('.header-nav');
let = pricingItem1 = document.querySelector('#pricingItem1');
let = pricingItem2 = document.querySelector('#pricingItem2');
let = pricingItem3 = document.querySelector('#pricingItem3');
headerBurger.addEventListener('click', function(){
	headerBurger.classList.toggle('active');
	headerNav.classList.toggle('normal');
})

pricingItem1.addEventListener("mouseenter", function( event ) {
	pricingItem1.classList.add('active');
})

pricingItem1.addEventListener("mouseleave", function( event ) {
	pricingItem1.classList.remove('active');
})

pricingItem2.addEventListener("mouseenter", function( event ) {
	pricingItem2.classList.add('active');
})

pricingItem2.addEventListener("mouseleave", function( event ) {
	pricingItem2.classList.remove('active');
})

pricingItem3.addEventListener("mouseenter", function( event ) {
	pricingItem3.classList.add('active');
})

pricingItem3.addEventListener("mouseleave", function( event ) {
	pricingItem3.classList.remove('active');
})