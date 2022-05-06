// FUNÇÃO PARA RETIRAR O ERRO
// AO INICIAR A PÁGINA ELA VAI EXECUTAR A FUNÇÃO WINDOW E VAI CHAMAR onScroll

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
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
