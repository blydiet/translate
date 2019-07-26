let result = document.getElementById('result');
let final_span = document.getElementById('final_span');
let speechRecognizer = new webkitSpeechRecognition();
let recognizing;
let finalTranscripts = '';
let incommingSpeech = document.getElementById('incomming_speech');
let capationReset = false;

speechRecognizer.continuous = true;
speechRecognizer.interimResults = true;
speechRecognizer.lang = 'en-US'; //"es-Es

speechRecognizer.onresult = async function(event) {
  let inCommingSpeech = '';
  for (let i = 0; i < event.results.length; i++) {
    let transcript = event.results[i][0].transcript;
    if (event.results[i].isFinal) {
      finalTranscripts += transcript;
    } else {
      inCommingSpeech += transcript;
    }
  }
  final_span.innerHTML = finalTranscripts;
  incomming_speech.innerHTML = inCommingSpeech;
};

function reset() {
  recognizing = false;
  let capationTimeOut = window.setTimeout(() => {
    // window.setTimeout(() => {
    //
    //   console.log('hi')
    // }, 070)
    incommingSpeech.innerHTML = '';
    final_span.parentNode.removeChild(final_span);

    //reset()
  }, 10000);
  console.log('hi');
  final_span.innerHTML = ' ';
  incommingSpeech.innerHTML = ' ';
  button.innerHTML = 'click get capation';
}

function toggleStartStop() {
  if (recognizing) {
    speechRecognizer.stop();
    reset();
  } else {
    speechRecognizer.start();
    recognizing = true;
    button.innerHTML = 'Click to Stop';
    final_span.innerHTML = ' ';
    incomming_speech.innerHTML = ' ';
  }
}
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: speechRecognizer.lang },
    'google_translate_element'
  );
}
