const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

function contact(){
  location.href="mailto:soninikhil670000@gmail.com";
  contact();
}


function resume(){
  location.href="https://www.linkedin.com/in/nikhil-soni-ba89821a1/overlay/1635461529774/single-media-viewer/";
  resume();
}
