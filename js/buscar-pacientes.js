var buscarPacientes = document.querySelector("#buscar-pacientes");

buscarPacientes.addEventListener("click", function (){
    console.log("Buscando Pacientes.")
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientess");

    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta)
            pacientes.forEach( function(paciente){
                adicionaPacienteNaTabela(paciente)
            });
        }else{
            console.log(xhr.status)
            console.log(xhr.responseText)
            var erroAjax = document.querySelector("#erro-ajax")
            erroAjax.classList.remove("invisivel")
        };
    });
    xhr.send();
});
