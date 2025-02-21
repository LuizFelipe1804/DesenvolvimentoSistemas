 // variaveis
 let fatiaQueijo = 50; 
 let fatiaPresunto = 50;
 let hamburguer = 100;

 //entrada
 let sanduichesAFazer = 5;

 // processamento
 let quiloQueijo = (sanduichesAFazer * fatiaQueijo * 2) / 1000;
 let quiloPresunto =(sanduichesAFazer * fatiaPresunto) / 1000;
 let quiloHamburguer =(sanduichesAFazer * hamburguer) / 1000;

 //saida
 console.log("\t***LACHONETE***");
 console.log(" para " + sanduichesAFazer + " sanduíches é necessário: ");
 console.log("-" + quiloQueijo + "Kg de queijo");
 console.log("-" + quiloPresunto + "Kg de presunto");
 console.log("-" + quiloHamburguer + "Kg de hamburguer");
 
 
 