var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {

    event.preventDefault();
    //event.preventDefault() previne as ações padrão do brownser.

    var form = document.querySelector("#form-adiciona");

    var paciente = obtenhaPacientesDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);

    form.reset();
    /*O reset serve para limpar os campos do formulario após clicar no botão*/
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

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}
function montaTd(dado,classe){

    var td = document.createElement("td");
    td.textContent = dado ;
    td.classList.add(classe);

    return td
}
// 9 minutos de video
