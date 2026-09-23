const numero = 17;
const numeroPar = numero % 2 === 0;
console.log(numeroPar ? `O número ${numero} é par` : `O número ${numero} é ímpar`);

if (numero > 0) {
    console.log(`O número ${numero} é positivo`);
} else if (numero < 0) {
    console.log(`O número ${numero} é negativo`);
} else {
    console.log(`O número ${numero} é zero`);
}

 const numero2 = 10;
 console.log
 (`\n${numero2} é ${numero2 % 2 === 0 ? "par" : "ímpar"} e ${numero2 > 0 ? "positivo" : numero2 < 0 ? "negativo" : "zero"}`);
 