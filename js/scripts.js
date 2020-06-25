
// function handleLink(event){
// 	event.preventDefault();
//     linksInternos.forEach((item) => {
// 		item.classList.remove('ativo');
// 	})
// 	event.currentTarget.classList.add('ativo');
// }

// linksInternos.forEach((link) => {
//     link.addEventListener('click', handleLink)
// })

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