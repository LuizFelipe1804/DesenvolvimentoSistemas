let frutas = ['Maçã','Banana','Laranja'];

let indice = frutas.indexOf('Banana');
// se o indice retornado for diferente de -1, mude, através do indice, para 'uva

if ( indice  !== -1){
    frutas[indice] = 'uva';
    frutas.unshift('bergamota');
    frutas.push('tangerina');
    frutas.splice(indice, 2)
}
console.log(frutas);
   