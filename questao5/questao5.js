const palavra = "Olá Mundo";

function inverterString(texto) {
  let invertida = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    invertida += texto[i];
  }
  return invertida;
}

const palavraInvertida = inverterString(palavra);
console.log("Palavra invertida:", palavraInvertida);