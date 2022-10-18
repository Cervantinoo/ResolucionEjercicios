/*Ejercicio 1, sumar dos numeros*/
inputUno = document.getElementById("numeroUno")
inputDos = document.getElementById("numeroDos")
botonSumar = document.querySelector(".botonSumar")
parrafo = document.querySelector(".parrafo")

botonSumar.addEventListener('click', suma)
function suma() {
    let numeroUno = inputUno.value
    let numeroDos = inputDos.value
    let resultado = Number.parseInt(numeroUno) + Number.parseInt(numeroDos)
    parrafo.innerHTML = resultado
}

/*Ejercicio 2, calcular el cubo de un numero*/

numero = document.getElementById("numCubo")
botonCubo = document.querySelector(".botonCubo")
resultCubo = document.querySelector(".resultCubo")

botonCubo.addEventListener('click', calcularCubo)

function calcularCubo() {
    let num = numero.value
    let result = num * num * num;
    resultCubo.innerHTML = result    
}
numero.value = " ";



/*Ejercicio 3, calcular edad*/
var today = new Date();
var year = today.getFullYear();

botonEdad = document.querySelector(".botonEdad")
inputEdad = document.getElementById("ano")
resultEdad = document.querySelector(".resultEdad")

botonEdad.addEventListener('click', calcularEdad)

function calcularEdad() {
    var añoNacimiento = inputEdad.value
    resultEdad.innerHTML = "Su edad es: " + (year - añoNacimiento)
}

/*Ejercicio 4, calcular tiempo de viaje*/

distancia = document.getElementById("distancia")
velocidad = document.getElementById("velocidad")
botonCalcularTiempo = document.querySelector(".botonViaje")
resultTiempo = document.querySelector(".resultTiempo")

botonCalcularTiempo.addEventListener('click', calcularTiempo)

function calcularTiempo() {
    resultTiempo.innerHTML = "Su viaje durar: " + distancia.value / velocidad.value + " horas"
}

/*Ejercicio 5, calcular sueldo + comision*/

var facturado = document.getElementById("facturado")
var porcentaje = document.getElementById("porcentaje")
var botonSueldo = document.getElementById("botonSueldo")
var resultSueldo = document.getElementById("resultSueldo")

botonSueldo.addEventListener('click', calcularComision)


function calcularComision() {
    var comision = facturado.value * porcentaje.value / 100
    var sueldo = 15000 + comision
    resultSueldo.innerHTML = "Su sueldo con comision es: " + sueldo

}

/*Fin ejercicio 5*/

/*Ejercicio 6, calcular promedio de tres notas */
var notaUno = document.getElementById("notaUno")
var notaDos = document.getElementById("notaDos")
var notaTres = document.getElementById("notaTres")
var btnCalcular = document.querySelector(".botonNotaFinal")
var resulFinal = document.querySelector(".resulFinal")

btnCalcular.addEventListener('click', calcularPromedio)

function calcularPromedio() {
    let promedio = (parseInt(notaUno.value) + parseInt(notaDos.value) + parseInt(notaTres.value)) / 3
    resulFinal.innerHTML = "Su nota final es: " + parseFloat(promedio)
}
//Fin ejercicio 6

//Ejercicio 7: Calcular metros cuadrados cubiertos y descubiertos

var mtsTotales = document.getElementById("m2t")
var mtsCubiertos = document.getElementById("m2c")
var btnCalcMts = document.getElementById("btnMts")
var resultMts = document.querySelector(".resultMts")

btnCalcMts.addEventListener('click', calcularMts)

function calcularMts() {
    let porcentajeMtsCubiertos = (mtsCubiertos.value * 100) / mtsTotales.value
    let porcentajeMtsDescubiertos = 100 - porcentajeMtsCubiertos
    resultMts.innerHTML = (porcentajeMtsCubiertos) + "% mts Cubiertos" +" "+(porcentajeMtsDescubiertos) +"% mts Descubiertos"
}
//Fin ejercicio 7

//Ejercicio 8: Calcular descuento de compra
var precio = document.getElementById("precio")
var porcen = document.getElementById("porcentaje")
var btnCobrar = document.getElementById("btnCobrar")
var resulCobrar = document.getElementById("resulCobrar")

btnCobrar.addEventListener('click', calcularDescuento)

function calcularDescuento() {
    let totalAcobrar = precio.value * 0.85
    resulCobrar.innerHTML = "Cobrar: " + totalAcobrar 
}
//Fin ejercicio 8

//Ejercicio 9: Calcular procentaje de hombres y mujeres
var hombres = document.getElementById("hombres")
var mujeres = document.getElementById("mujeres")
var btnmh = document.getElementById("btnmh")
var resultmh = document.getElementById("resultmh")

btnmh.addEventListener('click', calcularPorcentajeMH)

function calcularPorcentajeMH() {
    console.log(hombres.value)
    console.log(mujeres.value)
    let total = parseInt(hombres.value) + parseInt(mujeres.value)
    console.log(total)
    let porcentajeH = (hombres.value * 100) / total
    let porcentajeM = 100 - porcentajeH

    resultmh.innerHTML = parseInt(porcentajeH) + "%" + "hombres " + parseInt(porcentajeM) + "%" + "Mujeres"
}
//Fin ejercicio 9

//Ejercicio 10: Sumar, restar, multiplicar y dividir

var numA = document.getElementById("numA")
var numB = document.getElementById("numB")
var btnCalc = document.getElementById("btnCalc")
var resultadosGenerales = document.getElementById("resultGenerales")

btnCalc.addEventListener('click', calculos)
function calculos(){
    //suma
        let sumaDosnum = parseInt(numA.value) + parseInt(numB.value)
    //resta
        let resta = parseInt(numA.value) - parseInt(numB.value)
    //multiplicacion
        let multiplicacion = parseInt(numA.value) * parseInt(numB.value)
    //division
        let division = parseInt(numA.value) / parseInt(numB.value)

        resultadosGenerales.innerHTML = "Suma: " + sumaDosnum + " Resta: " + resta + " Multiplicaion: " + multiplicacion + " Division: " + parseInt(division)
}