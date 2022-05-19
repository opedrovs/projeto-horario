function relogio() {
    function retornaHora() {
        const data = new Date();
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    
    function iniciarRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = `${retornaHora(segundos)}`;
        }, 1000);
    }
    
    window.onload = function() {
       relogio.innerHTML = `${iniciarRelogio()}`;
    }
}
relogio();
