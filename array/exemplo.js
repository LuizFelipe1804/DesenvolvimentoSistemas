let alunos = ['felipe','gabriel','klara','livia','cibele','dandara','maria clara','maria clara s','joão henrique','gabriel felipe','rosana'];

alunos = alunos.sort();
for (let i = 0; i < alunos.length; i++) {
    console.log('- ' + alunos[i].toUpperCase());
    
}

if (alunos.indexOf('joão henrique') != -1){
    console.log('achei vc!');
    
}
else{
    console.log('não achei vc!');
    
}

console.log(alunos.includes('klara'));



