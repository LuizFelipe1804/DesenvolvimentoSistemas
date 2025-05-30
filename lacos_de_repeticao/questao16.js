const valores = [];

for (let i = 1000; i <= 2000; i++) {
  if (i % 3 === 0 && i % 5 === 0 && i % 10 !== 0) {
    valores.push(i);
  }
}

console.log("Valores entre 1000 e 2000 divisíveis por 3 e 5, mas não por 10:");
console.log(valores);

if (valores.length > 0) {
  const soma = valores.reduce((acc, val) => acc + val, 0);
  const media = soma / valores.length;
  console.log(`\nMédia dos valores: ${media.toFixed(2)}`);
} else {
  console.log("\nNenhum valor encontrado.");
}
