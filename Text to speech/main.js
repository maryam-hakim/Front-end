const textArea = document.querySelector("#text");
let voiceList = document.querySelector("#voice");
let speechBtn = document.querySelector(".submit");

let synth = speechSynthesis
let isSpeaking = true

function voiceSpeech(){
    for (let voice of synth.getVoices()){
        let option = document.createElement('option');
        option.text = voice.neme;
        voiceList.add(option);
        console.log(option);
    }
}

synth.addEventListener("voiceschanged" , voiceSpeech);

function textToSpeech(text){
    let utterance = new SpeechSynthesisUtterance(text);
    for(let voice of synth.getVoices()){
        if(voice.name === voiceList.value){
            utterance.voice = voice
        }
    }
    speechSynthesis.speak(utterance)
}

speechBtn.addEventListener("click" , (event)=>{
    event.preventDefault();
    if(textArea.value != ''){
        if (!synth.speaking){
            textToSpeech(textArea.value)
        }
        if(textArea.value.length > 80){
            if (isSpeaking){
                speechBtn.innerHTML = 'Pause Speech';
                synth.resume();
                isSpeaking = false;
            } else{
                speechBtn.innerHTML = 'Resume Speech';
                synth.pause();
                isSpeaking = true;
            }
            setInterval(() => {
                if(!synth.speaking && !isSpeaking){
                    isSpeaking = true;
                    speechBtn.innerHTML = 'Convert To Speech'
                }
            })
        } else{
            speechBtn.innerHTML = 'Convert To Speech'
        }
    }
})
