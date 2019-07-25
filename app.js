document.getElementById('button').addEventListener('click');

let finalTranscripts = '';
let speechRecognizer = new webkitSpeechRecognition();

speechRecognizer.continuous = true;
speechRecognizer.interimResults = true;
speechRecognizer.lang = 'en-US'; //"es-Es"
// speechRecognizer.onend = reset;

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
