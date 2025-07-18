let nomes = ['Ana','Carlos','Fernanda','João'];

let indiceFernada = nomes.indexOf('Fernanda');
if(indiceFernada != -1){
    console.log('o indice de Fernada é:' + nomes.indexOf('Fernanda'));
    nomes.splice(indiceFernada, 1);
}


console.log(nomes);
