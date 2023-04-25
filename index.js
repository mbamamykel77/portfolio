let menuBar = document.querySelector('.menu');
let menuContent = document.querySelector('.desktop_menu')
let introSection = document.querySelector('.intro')
let sec1 = document.querySelector('.sec1')



//  menu bar
menuBar.addEventListener("click", ()=> {
  menuContent.classList.toggle("active");
  menuContent.style.width = "100%"
  menuContent.style.position = 'relative'
  introSection.classList.toggle("active")
  sec1.classList.toggle('active')
  // sec1.style.position = 'relative'
})


