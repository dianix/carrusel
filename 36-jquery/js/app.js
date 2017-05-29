/*$(document).ready(function(){
    alert("soy una alerta de jQuery");    
});*/

$(document).ready(function () {
    $("#saludar").click(function () {
        $("#saludo").append("Hola soy un saludo con jQuery");
    });
});

/*
function saludar(){
    document.getElementById("saludo").innerHTML = "soy una alerta de jQuery";
}
*/

/*
function agregarLista(){
    var nodo = document.createElement("li");
    var texto = document.createTextNode("mas comida");
    nodo.appendChild(texto);
    document.getElementById("lista").appendChild(nodo);
}*/

$(document).ready(function () {
    $("#agregar").click(function () {
        $("#lista").append("<li>Mas comida con jQuery</li>");
    });
    
    $("#estilo").click(function(){
        $("#resaltar").css("color","red");
        $("#resaltar").css("background-color","black");
    });
});

/*function cambiarColor(){
    document.getElementById("resaltar").style.color = "red";
}*/

