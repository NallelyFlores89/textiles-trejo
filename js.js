$(document).ready(function(){

  $(".wrapper").hide(); //Oculta el contenido de la página

  //Evento scroll para mostrar el contenido de la página
  $( window ).scroll(function() {
    $("#inicio").fadeOut(1000,function(){
      $(".wrapper").fadeIn(1000);
    });    
  });

  $("#imagen-inicio").click(function(){
    $(".wrapper").fadeOut(1000,function(){
      $("#inicio").fadeIn(1000);
    }); 
  })

	$(".diamante").click(function(){
		if($(this).hasClass("diamanteActivo")){
			$(this).html("<img src='elementos/diamanteMarcado.png'>");
		}else{
			$(".diamante").html("<img src='elementos/diamanteOpaco.png'>");
			$(this).html("<img src='elementos/diamanteMarcado.png'>");
		}		
	})

  $("#galeriaProd li, #experienciaImg, #regalo").fadeOut();

/*************** EFECTO APARECER/DESAPARECER ELEMENTOS CON EL SCROLL ********/

var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
var is_safari = navigator.userAgent.indexOf("Safari") > -1;
var is_Opera = navigator.userAgent.indexOf("Presto") > -1;
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
  var controller = $.superscrollorama();
  controller.addTween('#quienesTitulo', TweenMax.fromTo( $('#quienesTitulo'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'60px'}, ease:Quad.easeInOut}));
  controller.addTween('#productosTitulo', TweenMax.fromTo( $('#productosTitulo'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'60px'}, ease:Quad.easeInOut}));
  controller.addTween('#experienciaTitulo', TweenMax.fromTo( $('#experienciaTitulo'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'60px'}, ease:Quad.easeInOut}));
  controller.addTween('#ubicacionTitulo', TweenMax.fromTo( $('#ubicacionTitulo'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'60px'}, ease:Quad.easeInOut}));
  controller.addTween('#mensajeTitulo', TweenMax.fromTo( $('#mensajeTitulo'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'60px'}, ease:Quad.easeInOut}));
  controller.addTween('#ofertaTitulo', TweenMax.fromTo( $('#ofertaTitulo'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'60px'}, ease:Quad.easeInOut}));

  $("#cuadroVerde").css("font-size","12px");
  $("#intro h1").css("font-size","75px");
  $("#h2").css("font-size","30px").css("font-weight","bold");
  $(".texto").css("font-size","25px");
  $(".labelForm").css("font-size","22px");
  $("#diamantesNavegacion").css("margin-top","35%");
}else{

	var controller = $.superscrollorama();
  controller.addTween('#quienesTitulo', TweenMax.fromTo( $('#quienesTitulo'), .25, {css:{opacity:0, fontSize:'4vw'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'4.7vw'}, ease:Quad.easeInOut}));
  controller.addTween('#chica', TweenMax.fromTo( $('#chica'), .25, {css:{opacity:0, height:'100px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, height:'236px'}, ease:Quad.easeInOut}));
  controller.addTween('#productosTitulo', TweenMax.fromTo( $('#productosTitulo'), .25, {css:{opacity:0, fontSize:'4vw'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'4.7vw'}, ease:Quad.easeInOut}));
  controller.addTween('#experienciaTitulo', TweenMax.fromTo( $('#experienciaTitulo'), .25, {css:{opacity:0, fontSize:'4vw'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'4.7vw'}, ease:Quad.easeInOut}));
  controller.addTween('#ubicacionTitulo', TweenMax.fromTo( $('#ubicacionTitulo'), .25, {css:{opacity:0, fontSize:'4vw'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'4.7vw'}, ease:Quad.easeInOut}));
  controller.addTween('#mensajeTitulo', TweenMax.fromTo( $('#mensajeTitulo'), .25, {css:{opacity:0, fontSize:'4vw'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'4.7vw'}, ease:Quad.easeInOut}));
  controller.addTween('#ofertaTitulo', TweenMax.fromTo( $('#ofertaTitulo'), .25, {css:{opacity:0, fontSize:'4vw'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'4.7vw'}, ease:Quad.easeInOut}));
}
});

$(window).scroll(function() {
    var homeHeight = $("#home").height();
    var quienesHeight = $("#quienesSomos").height()+$(".linea").height();
    var productosHeight = $("#productos").height()+$(".linea").height();
    var experienciaHeight = $("#experiencia").height()+$(".linea").height();
    var ofertasHeight = $("#ofertas").height()+$(".linea").height();
    var ubicacionHeight = $("#ubicacion").height()+$(".linea").height();
    var mensajeHeight = $("#mensaje").height()+$(".linea").height();
    var height = $(window).scrollTop();
    
    switch(true){
      case height>=homeHeight && 
           height < homeHeight + quienesHeight :
        $(".diamante").html("<img src='elementos/diamanteOpaco.png'>");
        $("#diamante2").html("<img src='elementos/diamanteMarcado.png'>");
        break;
      case height>=homeHeight + quienesHeight && 
           height <homeHeight + quienesHeight+productosHeight :
           $("#prod1").fadeIn(220,"swing",function(){
              $("#prod2").fadeIn(220,"swing",function(){
               $("#prod3").fadeIn(220,"swing",function(){
                $("#prod4").fadeIn(220,"swing",function(){
                  $("#prod5").fadeIn(220,"swing",function(){
                    $("#prod6").fadeIn(220,"swing",function(){
                      $("#prod7").fadeIn(220,"swing",function(){
                        $("#prod8").fadeIn(220,"swing",function(){
                        }); 
                      });                       
                    });                     
                  });                   
                }); 
              });                
              });   
           });
        $(".diamante").html("<img src='elementos/diamanteOpaco.png'>");
        $("#diamante3").html("<img src='elementos/diamanteMarcado.png'>");
        break;
      case height>=homeHeight + quienesHeight + productosHeight && 
           height < homeHeight + quienesHeight + quienesHeight + experienciaHeight :
        $("#experienciaImg").fadeIn(1000,"swing",350)
        $(".diamante").html("<img src='elementos/diamanteOpaco.png'>");
        $("#diamante4").html("<img src='elementos/diamanteMarcado.png'>");
        break;
      case height>= homeHeight + quienesHeight + quienesHeight + experienciaHeight  && 
           height < homeHeight + quienesHeight + quienesHeight + experienciaHeight + ofertasHeight:
        $("#regalo").fadeIn(1000,"swing",350)
        $(".diamante").html("<img src='elementos/diamanteOpaco.png'>");
        $("#diamante5").html("<img src='elementos/diamanteMarcado.png'>");
        break;
      case height >= homeHeight + quienesHeight + quienesHeight + experienciaHeight + ofertasHeight && 
           height < homeHeight + quienesHeight + quienesHeight + experienciaHeight + ofertasHeight + ubicacionHeight:
        $(".diamante").html("<img src='elementos/diamanteOpaco.png'>");
        $("#diamante6").html("<img src='elementos/diamanteMarcado.png'>");
        break;
      case height>=homeHeight + quienesHeight + quienesHeight + experienciaHeight + ofertasHeight + ubicacionHeight:
        $(".diamante").html("<img src='elementos/diamanteOpaco.png'>");
        $("#diamante7").html("<img src='elementos/diamanteMarcado.png'>");
        break;
      default:
        $(".diamante").html("<img src='elementos/diamanteOpaco.png'>");
        $("#diamante1").html("<img src='elementos/diamanteMarcado.png'>");
    }
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

function limpiaCamposForm(){
  $("#nombre, #email, #telefono, #mensaje").val("");
}