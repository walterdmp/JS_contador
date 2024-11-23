function contar() {
  let inicio = parseInt(document.getElementById("inicio").value);
  let fim = parseInt(document.getElementById("fim").value);
  let passo = parseInt(document.getElementById("passo").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
    resultado.innerHTML = "Impossível contar!";
  } else {
    if (passo <= 0) {
      alert("Passo inválido! Considerando passo 1");
      passo = 1;
    }

    resultado.innerHTML = "Contando: ";
    if (inicio > fim) {
      for (let i = inicio; i >= fim; i -= passo) {
        resultado.innerHTML += ` ${i} |`;
      }
    } else {
      for (let i = inicio; i <= fim; i += passo) {
        resultado.innerHTML += ` ${i} |`;
      }
    }
  }
}
