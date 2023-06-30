const elementoChute = document.getElementById("chute");

//https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API#browser_compatibility
//https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
//https://wicg.github.io/speech-api/#speechreco-section
//https://www.sitepoint.com/introducing-web-speech-api/
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  //console.log(e.results[0][0].transcript);
  chute = e.results[0][0].transcript;
  exibeChuteNaTela(chute);

  verificaSeOChutePossuiUmaValorValido(chute);
}

function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `;
}

recognition.addEventListener("end", () => recognition.start());
