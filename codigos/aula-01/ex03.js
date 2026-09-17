let tamanho = 7
for (let i = 0; i < tamanho; i++) {
  if (i === 0 || i === tamanho - 1) {
    console.log("*".repeat(tamanho))
  } else {
    console.log("*" + " ".repeat(tamanho-2) + "*")
  }
}

console.log("╔════╗")
console.log("║    ║")
console.log("╚════╝")


console.log("*****")
console.log("*****")
console.log("*****")
console.log("*****")
console.log("*****")