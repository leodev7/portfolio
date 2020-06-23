const pegarClasse = document.querySelectorAll('.habilidades li a');

const pegarImagem = document.querySelectorAll('.habilidades img');

pegarClasse.forEach(pegarClasse => {
    pegarClasse.addEventListener('click', function(event) {
       if (pegarClasse.classList.value === ''){
             pegarClasse.classList.add('ativo');
        } else if (pegarClasse.classList.value != ''){
            pegarClasse.classList.remove('ativo');
        }
    });
});

// pegarImagem.forEach(pegarImagem => {
//     pegarImagem.addEventListener('click', function(event) {
//        if (pegarImagem.classList.value === ''){
//              pegarImagem.classList.add('ativo_img');
//         } else if (pegarImagem.classList.value != ''){
//             pegarImagem.classList.remove('ativo_img');
//         }
//     });
// });