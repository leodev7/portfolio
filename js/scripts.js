var myButton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const tabLink = document.querySelectorAll('.js-tabLink li a');
const tabText = document.querySelectorAll('.js-tabLink p');
const tabImagens = document.querySelectorAll('.js-tabImagens li');

if (tabLink.length && tabImagens.length) {
  tabLink[0].classList.add('ativoLink');
  tabText[0].classList.add('ativo');
  tabImagens[0].classList.add('ativo');

  function activeTab(index) {
    tabLink.forEach((section) => {
      section.classList.remove('ativoLink');
    })
    tabText.forEach((section) => {
      section.classList.remove('ativo');
    })
    tabImagens.forEach((section) => {
      section.classList.remove('ativo');
    })

    tabLink[index].classList.add('ativoLink');
    tabText[index].classList.add('ativo');
    tabImagens[index].classList.add('ativo');
  }

  tabLink.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    })
  })
}