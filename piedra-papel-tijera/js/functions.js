console.log("Functions working...")


// Genera una eleccion aleatoria para la ronda de la maquina
const generarEleccionMaquina = function () {
  opcion_maquina = opciones_maquina[Math.floor(Math.random() * opciones_maquina.length)]

  return opcion_maquina
}

// Funcion del texto inicial

const eliminarTextoInicial = function (textoInicial) {
  $(textoInicial).remove()
  //textoInicial.classList.add("desaparecer")
  }

// Funciones de ganar, perder, empatar
const ganar = function () {
  return true
}

const perder = function () {
  return false
}

const empate = function () {
  return 'Empate'
}



// Funcion de la lógica del juego
const logica_juego = function (eleccion_jugador, opcion_maquina, puntosJugador, puntosMaquina) {

  // Logica de la piedra
  if (eleccion_jugador  === "piedra" && opcion_maquina === "piedra") {
    return empate()
  }

  else if (eleccion_jugador === 'piedra' && opcion_maquina === 'papel') {
    return perder()
  }

  else if (eleccion_jugador === 'piedra' && opcion_maquina === 'tijeras') {
    return ganar()
  }

  else if (eleccion_jugador === 'piedra' && opcion_maquina === 'lagarto') {
    return ganar()
  }

  else if (eleccion_jugador === 'piedra' && opcion_maquina === 'spok') {
    return perder()
  }

  //logica del papel

  else if (eleccion_jugador  === "papel" && opcion_maquina === "papel") {
    return empate()
  }

  else if (eleccion_jugador === 'papel' && opcion_maquina === 'tijeras') {
    return perder()
  }

  else if (eleccion_jugador === 'papel' && opcion_maquina === 'piedra') {
    return ganar()
  }

  else if (eleccion_jugador === 'papel' && opcion_maquina === 'lagarto') {
    return perder()
  }

  else if (eleccion_jugador === 'papel' && opcion_maquina === 'spok') {
    return ganar()
  }

  // logica de las tijeras

  else if (eleccion_jugador  === "tijeras" && opcion_maquina === "tijeras") {
    return empate()
  }

  else if (eleccion_jugador === 'tijeras' && opcion_maquina === 'piedra') {
    return perder()
  }

  else if (eleccion_jugador === 'tijeras' && opcion_maquina === 'papel') {
    return ganar()
  }

  else if (eleccion_jugador === 'tijeras' && opcion_maquina === 'lagarto') {
    return ganar()
  }

  else if (eleccion_jugador === 'tijeras' && opcion_maquina === 'spok') {
    return perder()
  }

  // Logica del lagarto

  else if (eleccion_jugador  === "lagarto" && opcion_maquina === "spok") {
    return ganar()
  }

  else if (eleccion_jugador === 'lagarto' && opcion_maquina === 'piedra') {
    return perder()
  }

  else if (eleccion_jugador === 'lagarto' && opcion_maquina === 'papel') {
    return ganar()
  }

  else if (eleccion_jugador === 'lagarto' && opcion_maquina === 'tijeras') {
    return perder()
  }

  else if (eleccion_jugador === 'lagarto' && opcion_maquina === 'lagarto') {
    return empate()
  }

  // Logica de Spok

  else if (eleccion_jugador  === "spok" && opcion_maquina === "spok") {
    return empate()
  }

  else if (eleccion_jugador === 'spok' && opcion_maquina === 'piedra') {
    return ganar()
  }

  else if (eleccion_jugador === 'spok' && opcion_maquina === 'papel') {
    return perder()
  }

  else if (eleccion_jugador === 'spok' && opcion_maquina === 'tijeras') {
    return ganar()
  }

  else if (eleccion_jugador === 'spok' && opcion_maquina === 'lagarto') {
    return perder()
  }

  else {
    console.log("Error")
  }
}
