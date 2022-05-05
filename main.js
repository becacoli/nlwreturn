function OnScroll() {
  if (scrollY != 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

// scrollY mostra as "coordenadas" do cursor do mouse

// adiconando a classe para adicionar o menu no html
function openMenu() {
  document.body.classList.add('menu-expanded')
}

// removendo a classe "menu-expanded" do html
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

// {} objeto no javascript
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home,
 #home img,
 #home .stats,
 #services,
 #services header,
 #services .card,
 #about,
 #about header,
 #about .content`)
