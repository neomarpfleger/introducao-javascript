var campoFiltro = document.querySelector("#filtrarTabela");
campoFiltro.addEventListener("input", function(){
    console.log(this.value);//"this" é referente ao dono do evento que no caso seria a var campoFiltro.
    var pacientes = document.querySelectorAll(".paciente")
    for( var i = 1; i < pacientes.length; i++){
        var paciente = pacientes[i]
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        console.log(nome)
    }
});