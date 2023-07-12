function verificaChuteValido(chute) {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido</div>`;
    return 
  }
  if (numeroForMaioOuMenorQueOPermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor fora dos valores permitidos, o valor precisa estar entre ${menorValor} e ${maiorValor}</div>`;
    return
}

  if(numero === numeroSecreto){
    document.body.innerHTML = `
    <h2>Você acertou </h2>
    <h3> O número secreto era ${numeroSecreto} </h3>
    <button id="jogar-novamente" class="btn-jogar"> Jogar Novamente</button>
    `
    recognition.stop();
  } else if(numero > numeroSecreto){
    elementoChute.innerHTML += `<div> O numero secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
  } else{
    elementoChute.innerHTML += `<div> O numero secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
  }

}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaioOuMenorQueOPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})