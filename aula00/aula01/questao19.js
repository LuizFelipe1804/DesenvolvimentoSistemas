let salarioBruto = 1000;
let inns = salarioBruto * 0.07; // 7%
let irrf = salarioBruto * 0.14; // 14%
let salarioLiquido = salarioBruto - (inns + irrf);

console.log("salarioBruto: R$" + salarioBruto);
console.log("(-) INNS: R$" + inns);
console.log("(-) IRRF: R$" + irrf);
console.log("salarioLiquido: R$" + salarioLiquido);


