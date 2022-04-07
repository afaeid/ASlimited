var menuIco = document.querySelector('.menu-icon');
var nav = document.querySelector('nav');
var pageLinks = document.querySelector('.page-links') 
menuIco.onclick = function(){
  nav.classList.toggle('mobile-menu-open');
  pageLinks.classList.toggle('mobile-menu-list-open');
} 
