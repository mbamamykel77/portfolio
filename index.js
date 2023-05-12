let menuBar = document.querySelector('.menu');
let menuContent = document.querySelector('.desktop_menu')
let introSection = document.querySelector('.intro')
let sec1 = document.querySelector('.sec1')
let links = document.querySelectorAll('.link')


//  menu bar
menuBar.addEventListener("click", ()=> {
  menuContent.classList.toggle("active");
  menuContent.style.width = "70%"
  menuContent.style.position = 'fixed'
  introSection.classList.toggle("active")
})

// Links
links.forEach((link) => {
  link.addEventListener('click', () => {
    menuContent.classList.remove("active");
  });
});


