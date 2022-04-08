/*page loader function*/
var headLoader = document.querySelector('.loader-screen');
window.onload = ()=> {
  headLoader.style.display = 'none';
}





/*    Toggle menu open function    */
var menuIco = document.querySelector('.menu-icon');
var nav = document.querySelector('nav');
var pageLinks = document.querySelector('.page-links') 
menuIco.onclick = function(){
  nav.classList.toggle('mobile-menu-open');
  pageLinks.classList.toggle('mobile-menu-list-open');
} 
