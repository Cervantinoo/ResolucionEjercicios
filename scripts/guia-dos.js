//Ejercicio 1
var numUno = document.querySelector(".numA")
var resultMaydiez = document.querySelector(".mayor")


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
var numB = document.querySelector(".numB")
var numC = document.querySelector(".numC")
var menor = document.querySelector(".menor")

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
var numD = document.querySelector(".numd")
var numE = document.querySelector(".nume")
var resultIgual = document.querySelector(".igual")

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

var numF = document.querySelector(".numf")
var resultPositivo = document.querySelector(".positivo")

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

var numG = document.querySelector(".numg")
var resultPar = document.querySelector(".par")

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
var precio = document.querySelector(".precio")
var descuento = document.querySelector(".descuento")

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

a = document.querySelector(".a")
b = document.querySelector(".b")
c = document.querySelector(".c")
d = document.querySelector(".d")
elmayor = document.querySelector(".elmayor")

d.addEventListener('click', detectarElMayor)

function detectarElMayor(){
    if(a.value > b.value){
        if(a.value > c.value){
            if(a.value > d.value){
                elmayor.innerHTML = a.value
            }
        }
    }else if(b.value > c.value){
        if(b.value > d.value){
            elmayor.innerHTML = b.value
        }
    }else if(c.value > a.value){
        if(c.value > d.value){
            elmayor.innerHTML = c.value
        }else if(d.value > b.value){
            if(d.value > a.value){
                elmayor.innerHTML = d.value
            }
        }
    }    
}