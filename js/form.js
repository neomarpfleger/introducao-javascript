var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {

    event.preventDefault();
    //event.preventDefault() previne as ações padrão do brownser.

    var form = document.querySelector("#form-adiciona");

    var paciente = obtenhaPacientesDoFormulario(form);

    var erros = validaPaciente(paciente);
    if(erros.length > 0){
        exibeMensagemDeErro(erros);
        return;
    }
    
    adicionaPacienteNaTabela(paciente);

    form.reset();
    /*O reset serve para limpar os campos do formulario após clicar no botão*/
    var mensagensDeErro = document.querySelector("#mensagensErro");
    mensagensDeErro.innerHTML = ""
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    //Adiciona o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}


function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagensErro");
    ul.innerHTML = ""

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

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

function validaPaciente(paciente){

    var erros  = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco.")
    }

    if(validaPeso(paciente.peso)){

    }else{
        erros.push("Peso é inválido.");
    }

    if(validaAltura(paciente.altura)){
    
    }else{
        erros.push("Altura é inválida.");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco.")
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco")
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco.")
    }

    return erros;
}
// tempo do video 7:30.