//questao 5) Elabora uma função que verifique se o número é par ou impar

function parImpar (n){
    if(n % 2 == 0){
        return 'é par';
    }
    else{
        return 'é impar';
    }
}
console.log(parImpar(86));
