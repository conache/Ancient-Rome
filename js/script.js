$(document).ready(function(){
	
// hover menu text

$("#rasp").prop('disabled', true);
	
	$( ".container" ).load( "acasa.html .container" );
	
	var scrl=function(){
		
	$("html, body").delay(100).animate({scrollTop: $('body').offset().top }, 900);
	}

	scrl();
	

	
$(".hamb").hover(function(){
		$(".menu_t").fadeTo("normal",0.5);
		$(".hamb").fadeTo("normal",0.5);
	
},function(){

$(".menu_t").fadeTo("normal",1);
		$(".hamb").fadeTo("normal",1);
});

	
	//hover hamburger logo
	
$(".menu_t").hover(function(){
		$(".menu_t").fadeTo("normal",0.6);
		$(".hamb").fadeTo("normal",0.6);
	
},function(){

$(".menu_t").fadeTo("normal",1);
		$(".hamb").fadeTo("normal",1);
});
	
	//menu_click;
	
	$(".menu_t").click(function(){
	
		
	$(".menu_content").animate({
    left: "0px"},500);
		
	$(".menu_t").animate({left:"+=2000px"},500);
	$(".hamb").animate({left:"+=2000px"},500);
	$(".container").animate({left:"+=2000px"},500
		
	);	
		
		
	
		
	});
	
	
	
	//hamb_click
	
	
	$(".hamb").click(function(){
	
		
	$(".menu_content").animate({
    left: "0px"},500);
		
	$(".menu_t").animate({left:"+=2000px"},500);
	$(".hamb").animate({left:"+=2000px"},500);
	$(".container").animate({left:"+=2000px"},500);	
		
	});
	
	
	
	$(".inchidere").click(function(){
	
	$(".menu_content").animate({
    left: "-2000px"},500);
		
	$(".menu_t").animate({left:"-=2000px"},500);
	$(".hamb").animate({left:"-=2000px"},500);
	$(".container").animate({left:"-=2000px"},800
	);		
		
	});
	
	
	//inchidere hovering;
	
	
	$(".inchidere").hover(function(){
	
		$(this).animate({opacity:"1",
						fontSize:"22px"},200);
	
		
	},function(){
	
		$(this).animate({opacity:"0.6",
						fontSize:"20px"},200);
		
	});
	
	
	
	$("#2").click(function(){
		$( ".container" ).load( "forme.html .container" );
		$(".menu_content").animate({
    left: "-2000px"},500);
		
	$(".menu_t").animate({left:"-=2000px"},500);
	$(".hamb").animate({left:"-=2000px"},500);
	$(".container").animate({left:"-=2000px"},800
		
		
	);
		
		scrl();
	});
		
		$("#1").click(function(){
		$( ".container" ).load( "acasa.html .container" );
		$(".menu_content").animate({
    left: "-2000px"},500);
		
	$(".menu_t").animate({left:"-=2000px"},500);
	$(".hamb").animate({left:"-=2000px"},500);
	$(".container").animate({left:"-=2000px"},800
		
	);
			
			scrl();
	});	
			
			$("#3").click(function(){
				scrl();
		$( ".container" ).load( "cultura.html .container" );
		$(".menu_content").animate({
    left: "-2000px"},500);
		
	$(".menu_t").animate({left:"-=2000px"},500);
	$(".hamb").animate({left:"-=2000px"},500);
	$(".container").animate({left:"-=2000px"},800
	);
	
	});	
				
			$("#4").click(function(){
		$( ".container" ).load( "Scurt_istoric.html .container" );
		$(".menu_content").animate({
    left: "-2000px"},500);
		
	$(".menu_t").animate({left:"-=2000px"},500);
	$(".hamb").animate({left:"-=2000px"},500);
	$(".container").animate({left:"-=2000px"},800
	);	
			scrl();
			});
	

	

	
	
	$(".other").hover(function(){
		
	$(this).animate({opacity:"1",
						fontSize:"+=4",
					 marginLeft:"+=5"},200);
	
					  
	},
		function(){
		
	$(this).animate({opacity:"0.6",
						fontSize:"-=4",
					 marginLeft:"-=5",
					},200);
		
					  
	}			  
					 );
	
		$(".i22").prop('checked', true);
	
	
	$('#Verificare').click(function(){
		
		$("input").prop("maxlength","10");
			$("input").prop('disabled', true);
		
		$("#rasp").prop('disabled', false);
		$(this).prop('disabled', 'disabeled');
		$('select').prop("disabled",true);
	
	// intrebarea 1;
		if($('.i11').val()=='sapte'||$('.i11').val()=='șapte'||$('.i11').val()=="7"){
			$('.i11').toggleClass('corect');
			$('#i11').toggleClass('corinp');
			
	
	}
		else{
		$('.i11').toggleClass('incorect');
			$('#i11').toggleClass('incinp');
		}
	
if(($('.i12').val()=='Romulus' && $('.i13').val()=='Remus')||($('.i12').val()=='Remus' && $('.i13').val()=='Romulus')){
			$('.i12').toggleClass('corect');
			$('#i12').toggleClass('corinp');
			$('.i13').toggleClass('corect');
			$('#i13').toggleClass('corinp');
			
	
	}
		else{
		$('.i12').toggleClass('incorect');
			$('#i12').toggleClass('incinp');
			$('.i13').toggleClass('incorect');
			$('#i13').toggleClass('incinp');
		}
	
		
		
	//intrebarea 2
		
		
		if($("#i21").prop("checked")==true){
			
			$(".i21").toggleClass("corect");
		}
	
			if($("#i22").prop('checked')==true){
			$(".i22").toggleClass("incorect");
			}
		
			if($("#i23").prop('checked')==true){
			$(".i23").toggleClass("incorect");
			}
			
	
		
		if(($("#i21").prop("checked")==false )&& ($("#i22").prop("checked")==false )&& ($("#i23").prop("checked")==false)){
		$(".i21").toggleClass("incorect");
		$(".i22").toggleClass("incorect");
		$(".i23").toggleClass("incorect");
		}
	
		
		//intrebarea 3
		if($("#i31").prop("checked")==true){
			$(".i31").toggleClass("corect");
		}
		
		if($("#i32").prop("checked")==true){
			$(".i32").toggleClass("corect");
		}
		
		if($("#i33").prop("checked")==true){
		$(".i33").toggleClass("incorect");
		}
		
		if($("#i34").prop("checked")==true){
		$(".i34").toggleClass("corect");
		}
		
		
		if($("#i35").prop("checked")==true){
		$(".i35").toggleClass("incorect");
		}
		
		//intrebarea 4
		
		
		if($('.i41').val()=='corect'){
			$('.i41').toggleClass('corect');
			$('#i41').toggleClass('corinp');
			
			}
		else{
			$('.i41').toggleClass('incorect');
			$('#i41').toggleClass('incinp');
			
		}
		
		//intrebarea 6
		if($('.i61').val()=='corect'){
			$('.i61').toggleClass('corect');
			$('#i61').toggleClass('corinp');
			
			}
		else{
			$('.i61').toggleClass('incorect');
			$('#i61').toggleClass('incinp');
			
		}
		//i7
		
		
			if($('.i71').val()=='corect'){
			$('.i71').toggleClass('corect');
			$('#i71').toggleClass('corinp');
			
			}
		else{
			$('.i71').toggleClass('incorect');
			$('#i71').toggleClass('incinp');
			
		}
		
		//i8
		
		
		
			if($('.i81').val()=='corect'){
			$('.i81').toggleClass('corect');
			$('#i81').toggleClass('corinp');
			
			}
		else{
			$('.i81').toggleClass('incorect');
			$('#i81').toggleClass('incinp');
			
		}
		
		//i9
		
		
		
			if($('.i91').val()=='corect'){
			$('.i91').toggleClass('corect');
			$('#i91').toggleClass('corinp');
			
			}
		else{
			$('.i91').toggleClass('incorect');
			$('#i91').toggleClass('incinp');
			
		}
		
		
		//i10
		
		
			if($('.i10').val()=='corect'){
			$('.i10').toggleClass('corect');
			$('#i10').toggleClass('corinp');
			
			}
		else{
			$('.i10').toggleClass('incorect');
			$('#i10').toggleClass('incinp');
			
		}
		
		
		
		//intrebarea 5
		
		
		
			
		if($("#i53").prop("checked")==true){
			
			(".i53").toggleClass("corect");
		}
		else{
			if($("#i52").prop('checked')==true){
			$(".i52").toggleClass("incorect");
			}
			if($("#i51").prop('checked')==true){
			$(".i51").toggleClass("incorect");
			}
			
		}
		
		if($("#i21").prop("checked")==false && $("#i22").prop("checked")==false && $("#i23").prop("checked")==false){
		$(".i21").toggleClass("incorect");
		$(".i22").toggleClass("incorect");
		$(".i23").toggleClass("incorect");
		}
		
		
		
		
	//knsdnlksndlsmdlsmldmsldmlsm	
	});
	
	

	$("#rasp").click(function(){
	
		//intrebarea 1
		
		$('.i11').removeClass();
		$('#i11').removeClass();
		$('#i11').val("șapte");
	$('.i11').toggleClass('corect');
			$('#i11').toggleClass('corinp');
		
		$('.i12').removeClass();
		$('#i12').removeClass();
		$('#i12').val("Romulus");
	$('.i12').addClass('corect');
			$('#i12').addClass('corinp');
		
		
		
		$('.i13').removeClass();
		$('#i13').removeClass();
		$('#i13').val("Remus");
	$('.i13').toggleClass('corect');
			$('#i13').toggleClass('corinp');
		
		
		//intrebarea 2
		
		
		$("#i21").prop("checked",true);
		$("#i22").prop("checked",false);
		$("#i23").prop("checked",false);
		
		$('.i21').removeClass();
		$('.i22').removeClass();
		$('.i23').removeClass();
		
		//intrebarea 3
		
		
		$("#i31").prop("checked",true);
		$("#i32").prop("checked",true);
		$("#i33").prop("checked",false);
		$("#i34").prop("checked",true);
		$("#i35").prop("checked",false);
		
		$('.i31').removeClass();
		$('.i32').removeClass();
		$('.i33').removeClass();
			$('.i35').removeClass();
		$('.i34').removeClass();
		
		//intrebarea 4
		
		$('.i41').val("corect");
		$('#i41').removeClass();
		$('#i41').addClass("corect");
		$('#i41').toggleClass("corimp");
		//i7
		$('.i71').val("corect");
		$('#i71').removeClass();
		$('#i71').addClass("corect");
		$('#i71').toggleClass("corimp");
		$('.i81').val("corect");
		$('#i81').removeClass();
		$('#i81').addClass("corect");
		$('#i81').toggleClass("corimp");
		
		$('.i91').val("corect");
		$('#i91').removeClass();
		$('#i91').addClass("corect");
		$('#i91').toggleClass("corimp");
		
			$('.i61').val("corect");
		$('#i61').removeClass();
		$('#i61').addClass("corect");
		$('#i61').toggleClass("corimp");
		
		$('.i10').val("corect");
		$('#i10').removeClass();
		$('#i10').addClass("corect");
		$('#i10').toggleClass("corimp");
		
					
	$("#i51").prop("checked",false);
		$("#i52").prop("checked",false);
		$("#i53").prop("checked",true);
		
		$('.i51').removeClass();
		$('.i52').removeClass();
		$('.i53').removeClass();
	
	
	});
	

	
	
});





