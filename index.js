const INICIAR_TEMPO_EM_SEGUNDOS = 25 * 60; // 25 MINUTOS TRANSFORMADOS EM SEGUNDOS. 1500
let TEMPO_EM_SEGUNDOS = INICIAR_TEMPO_EM_SEGUNDOS;
let TIMER = null // variavel declarada para parar o cronometro

//botao
const playButton = document.getElementById ('play')
const pauseButton = document.getElementById ('pause')
const resetButton = document.getElementById ('reset')

//add o evento para que o botão funcione
playButton.addEventListener( 'click', startIniciar);
pauseButton.addEventListener( 'click', stopParar);
resetButton.addEventListener( 'click', resetZerar)


updateDom();

function startIniciar() {
 // timer add aqui para parar o cronometro, ele estar guardando esse intervalo. 'stop'
   TIMER = setInterval( () => { 
        TEMPO_EM_SEGUNDOS--;
        updateDom();
    }, 1000);
}

function stopParar() {
    clearInterval(TIMER); //
}

function resetZerar() {
    clearInterval(TIMER);
    TEMPO_EM_SEGUNDOS = INICIAR_TEMPO_EM_SEGUNDOS;
    updateDom();

}

function updateDom() {
    const minutes = Math.floor(TEMPO_EM_SEGUNDOS / 60);
        document.getElementById('min').innerHTML = String(minutes).padStart(2, 0);

    const seconds = TEMPO_EM_SEGUNDOS % 60;
    document.getElementById('sec').innerHTML = String(seconds).padStart(2, 0);

    


}
//String || padStart ->transoforma o numero em string para em seguida usar o PADSTART para definir o tamanho da string em 2 e add o 0 pra complementar.