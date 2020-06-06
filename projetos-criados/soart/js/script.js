if (window.SimpleSlide) {
  new SimpleSlide({
    slide: "produto1", // nome do atributo data-slide="principal"
    nav: false, // se deve ou não mostrar a navegação
    auto: true, // se o slide deve passar automaticamente
    time: 4000, // tempo de transição dos slides
    pauseOnHover: false, // pausa a transição automática
  });

  new SimpleSlide({
    slide: "produto2", // nome do atributo data-slide="principal"
    nav: false, // se deve ou não mostrar a navegação
    auto: true, // se o slide deve passar automaticamente
    time: 4000, // tempo de transição dos slides
    pauseOnHover: false, // pausa a transição automática
  });

  new SimpleSlide({
    slide: "clientes", // nome do atributo data-slide="principal"
    nav: false, // se deve ou não mostrar a navegação
    auto: true, // se o slide deve passar automaticamente
    time: 5000, // tempo de transição dos slides
    pauseOnHover: false, // pausa a transição automática
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}
