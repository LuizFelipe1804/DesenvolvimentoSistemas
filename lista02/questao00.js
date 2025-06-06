function anoNovo(minutos) {
  let segundos = minutos * 60;

  let intervalo = setInterval(function() {
    console.log(segundos);

    if (segundos === 5) {
      console.log("Feliz Ano Novo!");
    }

    if (segundos <= 0) {
      clearInterval(intervalo);
    }

    segundos--;
  }, 1000);
}

anoNovo(2);
