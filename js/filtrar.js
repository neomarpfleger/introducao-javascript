var campoFiltro = document.querySelector("#filtrarTabela");
campoFiltro.addEventListener("input", function(){
    console.log(this.value);//"this" é referente ao dono do evento que no caso seria a var campoFiltro.
    var pacientes = document.querySelectorAll(".paciente")

    if(this.value.length > 0){
        for( var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i]
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            if(nome != this.value){
                paciente.classList.add("invisivel")
            }else{
                paciente.classList.remove("invisivel")
            }
        }
    }else{
        for(var i = 0; 1 < pacientes.length;i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});