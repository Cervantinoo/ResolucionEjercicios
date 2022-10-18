//Ejercicio 1
numUno = document.querySelector(".numA")
resultMaydiez = document.querySelector(".mayor")


numUno.addEventListener('keyup', mayorQueDiez)

function mayorQueDiez() {
    if (numUno.value > 10) {
        resultMaydiez.innerHTML = "El número " + numUno.value + " Es mayor a 10"
    } else if (numUno.value < 10) {
        resultMaydiez.innerHTML = "El número " + numUno.value + " Es menor que 10"
    } else {
        resultMaydiez.innerHTML = "Ups, No conozco ese número"
    }

}

//Ejercicio 2
numB = document.querySelector(".numB")
numC = document.querySelector(".numC")
menor = document.querySelector(".menor")

function menorOmayor() {
    if (numB.value < numC.value) {
        menor.innerHTML = numB.value + " es menor que " + numC.value
    } else {
        menor.innerHTML = numC.value + " es menor que " + numB.value
    }
}

numC.addEventListener('keypress', menorOmayor)
if (menorOmayor.key === "Enter") {
    menorOmayor()
}

//Ejercicio 3
numD = document.querySelector(".numd")
numE = document.querySelector(".nume")
resultIgual = document.querySelector(".igual")

numE.addEventListener('click', igual)
function igual() {
    if (numD.value === numE.value) {
        resultIgual.innerHTML = "Los números son iguales"
    } else if (numD.value > numE.value) {
        resultIgual.innerHTML = numD.value + " es mayor"
    } else {
        resultIgual.innerHTML = numE.value + " es mayor"
    }
}

//Ejercicio 4

numF = document.querySelector(".numf")
resultPositivo = document.querySelector(".positivo")

numF.addEventListener('click', positivo)
function positivo() {
    if (numF.value == 0) {
        resultPositivo.innerHTML = numF.value + " es Cero"
    } else if (numF.value < 0) {
        resultPositivo.innerHTML = numF.value + " es Negativo"
    } else {
        resultPositivo.innerHTML = numF.value + " es Positivo"
    }
}

//Ejercicio 5

numG = document.querySelector(".numg")
resultPar = document.querySelector(".par")

numG.addEventListener('click', par)
function par() {
  /*
    if (numG.value == "1") {
        resultPar.innerHTML = " "
    }
    */
    if (numG.value % 2 == 0) {
        resultPar.innerHTML = numG.value + " Es par"
    } else {
        resultPar.innerHTML = numG.value + " Es impar"
    }
}



//Ejercicio 6
precio = document.querySelector(".precio")
descuento = document.querySelector(".descuento")

precio.addEventListener('click', aplicarDescuento)
function aplicarDescuento() {
    if (precio.value < 1000) {
        descuento.innerHTML = "Cobrar: " + precio.value
    } else if (precio.value < 5000) {
        let descDiez = precio.value - precio.value * 0.10
        descuento.innerHTML = "Cobrar: " + descDiez
    } else {
        descDieciocho = precio.value - precio.value * 0.18
        descuento.innerHTML = "Cobrar: " + descDieciocho
    }
}


//Ejercicio 7