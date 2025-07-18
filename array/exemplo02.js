let nomes = ['Ana','Bruno','Carlos','Diana','Eduardo'];

// verifique se o nome 'carlos' esta na lista e,se estiver, substitua por 'caio'.includes()
let indiceCarlos = nomes.indexOf('Carlos');
if(indiceCarlos != -1){
    nomes[indiceCarlos] = 'Caio';
}

// depois, remova o nome 'ana' do array. splice()
let indiceAna = nomes.indexOf('Ana');
if(indiceAna != -1){    
    nomes.splice(indiceAna, 1);
}

// mostrar o array final


console.log(nomes);

