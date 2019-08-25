$(document).ready(function() {

    var $slideImage = document.querySelector("#slide");
    var $slideImage2 = document.querySelector("#slide2");
    $("#contato").hide();
    $("#projetos").hide();

    $("#btnProjeto").click(function() {
        $("#sobre").hide();
        $("#projetos").show();
        $("#contato").hide();
    });
    $("#btnSobre").click(function() {
        $("#sobre").show();
        $("#projetos").hide();
        $("#contato").hide();
    });
    $("#btnContato").click(function() {
        $("#sobre").hide();
        $("#projetos").hide();
        $("#contato").show();
    });
    
    function slide(){
    
    setInterval(function(){ $($slideImage).attr("src", "./Imagem/marvel.jpg");  }, 3000);   
    setInterval(function(){ $($slideImage2).attr("src", "./Imagem/github.png");  }, 3000); 
    setInterval(function(){ $($slideImage).attr("src", "./Imagem/Halsey1.jpg");  }, 6000);  
    setInterval(function(){ $($slideImage2).attr("src", "./Imagem/rpgmaker.png");  }, 6000); 
    setInterval(function(){ $($slideImage).attr("src", "./Imagem/Hinna - Azza1.jpg");  }, 9000); 
    setInterval(function(){ $($slideImage2).attr("src", "./Imagem/gamemaker.png");  }, 9000); 
    setInterval(function(){ $($slideImage).attr("src", "./Imagem/1998_tranquilize.jpg");  }, 12000); 
    setInterval(function(){clearInterval();},13000);
    }

    slide();
});