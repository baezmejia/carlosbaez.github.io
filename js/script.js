const navbarToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navbarToggle.addEventListener('click', function () {
  navbarToggle.classList.toggle('active');
  nav.classList.toggle('active');
});




// navbarToggle.addEventListener("click", function(){
//   if(navbarNav.classList.contains('nav-items--open')){
//     navbarNav.classList.remove('nav-items--open');
//     navbarToggle.classList.remove('active');

//     navbarNav.classList.add('nav-items--closed');
//   }else{
//     navbarNav.classList.remove('nav-items--closed');
//     navbarToggle.classList.add('active');
//     navbarNav.classList.add('nav-items--open');
//   }
// })