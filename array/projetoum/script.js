let array = [];

console.log("tipo do meu array: " + typeof(array))

function adicionarNumero(){
    let input = document.querySelector('#numero');
    let n = parent(input.Value);
    // alert(n);
    let exibirArray = document.querySelector
    ('#exibir-array');

    if (isNaN(n)) {
        alert('Digite um numero valido!');
        return;
    }

    array.push(n);
    input.Value = '';

    console.log(array);
    exibirArray.innerHTML = `Array: ${array} <br/> tamanho do array: ${array.length}`;
}