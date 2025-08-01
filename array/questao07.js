let cores = ['azul','roxo','preto'];

let indiceCores = cores.indexOf('azul');
if(indiceCores != -1){
    cores.push('verde');
}
if(indiceCores != -1){    
    cores.splice(indiceCores, 1);
}

console.log(cores);
