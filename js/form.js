var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {

    event.preventDefault();
    //event.preventDefault() previne as ações padrão do brownser.

    var form = document.querySelector("#form-adiciona");

    var paciente = obtenhaPacientesDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);
});

/*function mostraMensagem(){
    document.write("Ola eu fui clicado!");
    Exemplo de função nomeada.
}*/

/*titulo.addEventListener("click",function (){
    document.write("fui clicado!")
    Exemplo de função anonima.
});*/

function obtenhaPacientesDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente");
    /*linha acima coloca a classe paciente aos pacientes adcionados pelo formulario*/

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    /*parte 2 cria o tr e o td para cada paciente*/

    /*3*/
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;
    /*Parte 3 coloca os valores no td*/

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}
/*video 7.33*/
