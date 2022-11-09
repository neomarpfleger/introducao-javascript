var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        var alvoEvento = event.target;
        var paiDoAlvo = alvoEvento.parentNode; // = paciente = remover
        paiDoAlvo.remove()
        //event.target.parentNode.remove();    linha abreviada ela substitui as tres linhas acima.
    },500);
});