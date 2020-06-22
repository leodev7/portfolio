// const animais = document.getElementById('animais');

// const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection[1])

// const primeiraLi = document.querySelector('li');
// console.log(primeiraLi);

// const primeiraUl = document.querySelector('ul');
// console.log(primeiraUl);

// const linkInterno = document.querySelector('[href^="#"]')
// console.log(linkInterno)

// const animaisImg = document.querySelectorAll('.animais img')
// animaisImg.forEach(function(item, index, array){
//     console.log(item, index, array);
// })

// const arrayGrid = Array.from(animaisImg);





// Retorne no console todas as imagens do site
const imagensDoSite = document.querySelectorAll('img');

imagensDoSite.forEach(function(item, index){
    // console.log("Imagem: ", index + 1, "Url: ", item )
})

// Retorne no console apenas as imagens que começaram com a palavra imagem
const palavraImagem = document.querySelectorAll('img[src^="img/imagem"]');
palavraImagem.forEach(function(item, index){
    // console.log("Imagem: ", index + 1, "Url: ", item)
})


// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
linksInterno.forEach(function(item, index){
    // console.log("URL: ", index + 1, "Link: ", item)
})

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector('.animais-descricao h2').innerHTML;
// console.log(primeiroh2);

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p')

console.log(ultimoP[--ultimoP.length]);
