AOS.init();

const dataEvent = new Date("nov 11, 2025 17:00:00");
const timeStampEvent = dataEvent.getTime();

const  countTime = setInterval(function(){
    const time = new Date()
    const timeStampNow = time.getTime()

    const previsaoEvent = timeStampEvent - timeStampNow

    const diasAteEvento = Math.floor(previsaoEvent / (1000 * 60 * 60 * 24))
    const horasAteEvento = Math.floor((previsaoEvent % (1000 * 60 * 60 *  24)) / (1000 * 60* 60))
    const minutosAteEvento = Math.floor((previsaoEvent % (1000 * 60 * 60)) /( 1000 * 60))
    const segundosAteEvent =  Math.floor((previsaoEvent % (1000 * 60)) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvent}s`

    if(previsaoEvent < 0 ){
        clearInterval(countTime)
        document.getElementById('contador').innerHTML = 'Evento expirado ;('
    }

}, 1000)