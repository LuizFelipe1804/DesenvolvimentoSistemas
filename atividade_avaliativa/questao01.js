function anoNovo(minutos) {
  let segundos = minutos * 60;
 
  for (let i = segundos; i >= 0; i--) {
    console.log(i);

    if (i === 5) {
      console.log("Feliz Ano Novo!");
    }

    if (i === 0) {
      segundos--; 
      break;
    }
    
  }
}
anoNovo(1);





          