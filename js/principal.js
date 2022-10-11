var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiroPaciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = document.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 500) {
    document.write("Peso Inválido!")
    pesoEhValido = false;
    tdImc.textContent = ("Peso Inválido!")
}

// Barra dupla significa "ou" se um item é uma "ou" outra opção.

if (altura <= 0 || altura >= 3) {
    document.write("Altura Inválida!")
    alturaEhValida = false;
    tdImc.textContent = ("Altura Inválido!")    
}

if (pesoEhValido && alturaEhValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
