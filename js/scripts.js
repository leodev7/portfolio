var myButton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

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
const tabImagens = document.querySelectorAll('.js-tabImagens li');


if (tabLink.length && tabImagens.length) {
	tabImagens[0].classList.add('ativo')
	tabLink[0].classList.add('ativoLink')
    function activeTab(index) {
        tabImagens.forEach((section) => {
            section.classList.remove('ativo')
		})
		tabLink.forEach((section) => {
			section.classList.remove('ativoLink')
		})
		tabImagens[index].classList.add('ativo')
		tabLink[index].classList.add('ativoLink')
    }

    tabLink.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        })
    })
}