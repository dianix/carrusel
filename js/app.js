$(document).ready(function () {
    
   
    $("#sel1").click(function(){
        $("#1").css("display", "inline-block");
        $("#2").css("display", "none");
        $("#3").css("display", "none");
        $("#4").css("display", "none");
        
    });
    
    $("#sel2").click(function(){
        $("#2").css("display", "inline-block");
        $("#1").css("display", "none");
        $("#3").css("display", "none");
        $("#4").css("display", "none");
        
    });
    
    $("#sel3").click(function(){
        $("#3").css("display", "inline-block");
        $("#2").css("display", "none");
        $("#1").css("display", "none");
        $("#4").css("display", "none");
        
    });
    
    $("#sel4").click(function(){
        $("#4").css("display", "inline-block");
        $("#2").css("display", "none");
        $("#3").css("display", "none");
        $("#1").css("display", "none");
        
    });

    


});
