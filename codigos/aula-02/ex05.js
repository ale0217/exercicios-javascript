const preco = "1250.50"; 
const precoNumerico = parseFloat(preco);
const desconto = precoNumerico * 0.9;
console.log(`o preço com desconto é: R$ ${desconto.toFixed(2)}`); 
// calculando desconto direto 



const preco = "1250.50"; 
const precoNumerico = parseFloat(preco);
const desconto = precoNumerico * 0.10;
console.log(`o preço com desconto é: R$ ${precoNumerico - desconto.toFixed(2)}`); 
// calculando desconto subtraidno depois 