//questao 7) Faça uma função que receba o salário de um trabalhador e o empréstimo, verifique se o empréstimo é de até 20% do salario do trabalhador , se for, o emprestimo deve ser aprovado , caso contrario, deve ser rejeitado.
let salario = 1000

function salarioEmprestimo(emprestimo){
    if(emprestimo <= salario*(20/100)){
    console.log("Emprestimo aprovado!!!");
}
else{
    console.log("Emprestimo negado.")
}
}
console.log(salarioEmprestimo(200));
