$(document).ready(function () {

    // *** BOLITAS SELECTORAS ***
    $("#sel1").click(function () {
        $("#sel1").addClass("blanco");
        $("#sel2").removeClass("blanco");
        $("#sel3").removeClass("blanco");
        $("#sel4").removeClass("blanco");
        $("#1").css("display", "inline-block");
        $("#2").css("display", "none");
        $("#3").css("display", "none");
        $("#4").css("display", "none");
    });

    $("#sel2").click(function () {
        $("#sel2").addClass("blanco");
        $("#sel1").removeClass("blanco");
        $("#sel3").removeClass("blanco");
        $("#sel4").removeClass("blanco");
        $("#2").css("display", "inline-block");
        $("#1").css("display", "none");
        $("#3").css("display", "none");
        $("#4").css("display", "none");
    });

    $("#sel3").click(function () {
        $("#sel3").addClass("blanco");
        $("#sel2").removeClass("blanco");
        $("#sel1").removeClass("blanco");
        $("#sel4").removeClass("blanco");
        $("#3").css("display", "inline-block");
        $("#2").css("display", "none");
        $("#1").css("display", "none");
        $("#4").css("display", "none");
    });

    $("#sel4").click(function () {
        $("#sel4").addClass("blanco");
        $("#sel2").removeClass("blanco");
        $("#sel3").removeClass("blanco");
        $("#sel1").removeClass("blanco");
        $("#4").css("display", "inline-block");
        $("#2").css("display", "none");
        $("#3").css("display", "none");
        $("#1").css("display", "none");
    });
    
    
    // *** BOTONES-FLECHAS IZQUIERDA Y DERECHA ***
    $("#izq").click(function (e) {
        var imagenVisible = $(".visible");
        var imagenAnterior = imagenVisible.prev();
        console.log(imagenAnterior);

        if (imagenAnterior.length == 0) {
            imagenAnterior = $("#imagenes img").last();
        }

        imagenVisible.removeClass("visible").addClass("oculta");
        imagenAnterior.addClass("visible").removeClass("oculta");
        e.preventDefault();
    })

    $("#der").click(function (e) {
        var imagenVisible = $(".visible");
        var imagenSiguiente = imagenVisible.next();

        if (imagenSiguiente.length == 0) {
            imagenSiguiente = $("#imagenes img").first();
        }

        imagenVisible.removeClass("visible").addClass("oculta");
        imagenSiguiente.addClass("visible").removeClass("oculta");
        e.preventDefault();
    });

});
