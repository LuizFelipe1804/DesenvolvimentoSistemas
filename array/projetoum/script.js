let array = [];

console.log("tipo do meu array: " + typeof (array));

function adicionarNumero() {
    let input = document.querySelector('#numero');
    let n = parseInt(input.value);

    let exibirArray = document.querySelector('#exibir-array');

    if(isNaN(n)){
        alert("digite um número válido")
        return;
    }
    array.push(n);

    input.value = '';

    console.log(array);
    exibirArray.innerHTML = `Array: ${array} <br/>  tamanho do array: ${array.length}`; 

    function removerNumero(){

        if(isNaN(n)){
            alert('digite um numero valido');
            return;
        }
        
        let indexN = array.indexOf(n);

        if (indexN == -1){
            alert('o numero não esta no array');
            return;
        }
        array.splice(indexN, 1);

        input.value = '';
        console.log(array);
        

    }

}
