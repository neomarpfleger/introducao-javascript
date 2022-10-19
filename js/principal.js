var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
        //paciente.style.backgroundColor= "red";
        //Linha acima modifica cor de fundo da linha diretamente pelo o JS porém não é uma boa prática.
    }

    // Barra dupla vertical significa "ou" se um item é uma "ou" outra opção.//

    if (!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso,altura)
        tdImc.textContent = imc;
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura*altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >=0 && peso < 500){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >=0 && altura <3.0){
        return true;
    } else{
        return false;
    }
}