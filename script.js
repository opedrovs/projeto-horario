function carregar() {
    function zeroAEsquerda(num) {
        return num >= 10 ? num : `0${num}`
    }

    let horario = window.document.getElementById('horario')
    let data = new Date()
    let hora = zeroAEsquerda(data.getHours())
    let min = zeroAEsquerda(data.getMinutes())
    let seg = zeroAEsquerda(data.getSeconds())

    horario.innerHTML = `<h1>${hora} : ${min} : ${seg}</h1>` 
}