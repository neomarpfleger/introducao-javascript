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

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 500) {
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
        //paciente.style.backgroundColor= "red";
        //Linha acima modifica cor de fundo da linha diretamente pelo o JS porém não é uma boa prática.
    }

    // Barra dupla vertical significa "ou" se um item é uma "ou" outra opção.//

    if (altura <= 0 || altura >= 3.00) {
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura)
        tdImc.textContent = (imc.toFixed(2))
    }
}

/*function mostraMensagem(){
    document.write("Ola eu fui clicado!");
    Exemplo de função nomeada.
}*/


var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    //event.preventDefault() previne as ações padrão do brownser.

    var form = document.querySelector("#form-adiciona");
     var nome = form.nome.value;
     var peso = form.peso.value;
     var altura = form.altura.value;
     var gordura = form.gordura.value;
    
    var pacienteTr = document.createElement("tr")

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imc.toFixed(2);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});


/*titulo.addEventListener("click",function (){
    document.write("fui clicado!")
    Exemplo de função anonima.
});*/