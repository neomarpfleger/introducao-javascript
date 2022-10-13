//var titulo = document.querySelector(".titulo");
//titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 500) {
        document.write("Peso Inválido!")
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
        //paciente.style.backgroundColor= "red";
        //Linha acima modifica cor de fundo da linha diretamente pelo o JS porém não é uma boa prática.
    }

    // Barra dupla vertical significa "ou" se um item é uma "ou" outra opção.//

    if (altura <= 0 || altura >= 3.00) {
        document.write("Altura Inválida!")
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura)
        tdImc.textContent = (imc.toFixed(2))
    }
}

  // Barra dupla vertical significa "ou" se um item é uma "ou" outra opção.//