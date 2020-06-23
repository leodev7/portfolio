const linksInternos = document.querySelectorAll('.habilidades li a');

const pegarImagem = document.querySelector('.habilidades img');

pegarImagem.setAttribute("src", "img/gamer.jpg")
console.log(pegarImagem)


function handleLink(event){
	event.preventDefault();
    linksInternos.forEach((item) => {
		item.classList.remove('ativo');
	})
	event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink)
})