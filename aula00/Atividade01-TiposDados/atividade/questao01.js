
let nota01= 60;
let nota02= 60;
let nota03= 70;
let nota04= 50;
let media = (nota01+nota02+nota03+nota04)/4;

if(media >= 60){
    console.log('a nota é',media,'o aluno foi aprovado');
}
else if(media < 40){
    console.log('a nota é',media,'o aluno foi reprovado');
}
else{
    console.log('a nota é',media,' o aluno ta na recuperação');
    
}
