function sequencer(){
    const kick = new Tone.Player('./drums/kick-electro01.wav').toDestination();
    const snare = new Tone.Player('./drums/snare-lofi02.wav').toDestination();
    const base = new Tone.Player('./drums/kick-thump.wav').toDestination();
    const cymbal = new Tone.Player('./drums/snare-analog.wav').toDestination();
    const clap = new Tone.Player('./drums/clap-808.wav').toDestination();
    let index = 0;

    Tone.Transport.scheduleRepeat(repeat,'16n');
    Tone.Transport.start();

    function repeat(){
        let step = index % 16;
        let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
        let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
        let baseInputs = document.querySelector(`.base input:nth-child(${step + 1})`);
        let cymbalInputs = document.querySelector(`.cymbal input:nth-child(${step + 1})`);
        let clapInputs = document.querySelector(`.clap input:nth-child(${step + 1})`);
        if(kickInputs.checked){
            kick.start(); 
        }
        if(snareInputs.checked){
            snare.start(); 
        }
        if(baseInputs.checked){
            base.start(); 
        }
        if(cymbalInputs.checked){
            cymbal.start(); 
        }
        if(clapInputs.checked){
            clap.start(); 
        }
        index++;
    }
};
