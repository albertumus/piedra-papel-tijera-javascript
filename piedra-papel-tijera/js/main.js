console.log("Main working...")

$("#puntuaciones_partida").hide()
const opciones_maquina = ["piedra", "papel", "tijeras", 'lagarto', 'spok'];

let jugadas = 0;
let puntosJugador = 0;
let puntosMaquina = 0;
let spanPuntosJugador = document.querySelector('#spanPuntosJugador')
let spanPuntosMaquina = document.querySelector('#spanPuntosMaquina')
let tituloGanador = document.querySelector('#ganador')
let tituloInicio = document.querySelector('#mensajeInicio')
let cerrarPopUp = document.querySelector('#cerrar-pop-up')

// En funcion de la elcción optiene una opcion o no
document.querySelector('#papel').addEventListener('click', function() {
  $("#puntuaciones_partida").show()
  let eleccion_maquina = generarEleccionMaquina(opciones_maquina)
  juego('papel', eleccion_maquina)
  jugadas +=1

  })

document.querySelector('#tijeras').addEventListener('click', function() {
  $("#puntuaciones_partida").show()
  let eleccion_maquina = generarEleccionMaquina(opciones_maquina)
  juego('tijeras', eleccion_maquina)
  jugadas +=1


  })

document.querySelector('#piedra').addEventListener('click', function() {
  $("#puntuaciones_partida").show()
  let eleccion_maquina = generarEleccionMaquina(opciones_maquina)
  juego('piedra', eleccion_maquina)
  jugadas +=1


  })

document.querySelector('#lagarto').addEventListener('click', function() {
  $("#puntuaciones_partida").show()
  let eleccion_maquina = generarEleccionMaquina(opciones_maquina)
  juego('lagarto', eleccion_maquina)
  jugadas +=1


  })

document.querySelector('#spok').addEventListener('click', function() {
  $("#puntuaciones_partida").show()
  let eleccion_maquina = generarEleccionMaquina(opciones_maquina)
  juego('spok', eleccion_maquina)
  jugadas +=1


  })

// Funcion para cerrar el Pop
//cerrarPopUp.onclick = function() {
  //document.querySelector('#pop-up').style.display = 'none'
//}

// Comprueba que la respuesta del juegador y la del usuario es la misma

function juego (eleccion_jugador, opcion_maquina,jugadas) {

    ganador_ronda = logica_juego(eleccion_jugador, opcion_maquina)

    if (ganador_ronda === true) {
      puntosJugador += 1
      jugadas +=1

      eliminarTextoInicial(tituloInicio)
      eleccionJugadorSpan.innerText = eleccion_jugador
      eleccionMaquinaSpan.innerText = opcion_maquina
      jugadorSmall.innerText = 'JUGADOR'
      maquinaSmall.innerText = 'MÁQUINA'
      spanPuntosJugador.innerText = puntosJugador
      spanPuntosMaquina.innerText = puntosMaquina
      tituloGanador.innerText = ' gana a '
      tituloGanador.classList.remove('perder')
      tituloGanador.classList.add("ganar")

    }

    else if (ganador_ronda === false) {
      puntosMaquina += 1

      eliminarTextoInicial(tituloInicio)
      eleccionJugadorSpan.innerText = eleccion_jugador
      eleccionMaquinaSpan.innerText = opcion_maquina
      jugadorSmall.innerText = 'JUGADOR'
      maquinaSmall.innerText = 'MÁQUINA'
      spanPuntosJugador.innerText = puntosJugador
      spanPuntosMaquina.innerText = puntosMaquina
      tituloGanador.innerText = 'pierde ante'
      tituloGanador.classList.remove('ganar')
      tituloGanador.classList.add('perder')


    }

    else {


      eliminarTextoInicial(tituloInicio)
      eleccionJugadorSpan.innerText = eleccion_jugador
      eleccionMaquinaSpan.innerText = opcion_maquina
      jugadorSmall.innerText = 'JUGADOR'
      maquinaSmall.innerText = 'MÁQUINA'
      spanPuntosJugador.innerText = puntosJugador
      spanPuntosMaquina.innerText = puntosMaquina
      tituloGanador.innerText = 'empata'
      tituloGanador.classList.remove('ganar')
      tituloGanador.classList.add('empatar')
    }

}
