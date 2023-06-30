function verificaSeOChutePossuiUmaValorValido(chute) {
  const numero = +chute; // só de somar o js já converte para inteiro

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido</div>`;
    console.log("Valor inválido!!!");
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
    console.log(
      `Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`
    );
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
      <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
      `;
  } else {
    elementoChute.innerHTML += `
      <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
      `;
  }
}
function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});