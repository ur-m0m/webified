$(document).ready(function(){

	//new WOW().init();
//var controller = new ScrollMagic.Controller();
	$(".text_header").hide();

    $(".header").mouseenter(function(){
        $(".text_header").show();
    });
    $(".header").mouseleave(function(){
        $(".text_header").hide();
	 });

    $(".text_footer").hide();

    $(".footer").mouseenter(function(){
        $(".text_footer").show();
    });
    $(".footer").mouseleave(function(){
        $(".text_footer").hide();
	 });

    $(".text_page").hide();

    $(".page").mouseenter(function(){
        $(".text_page").show();
    });
    $(".page").mouseleave(function(){
        $(".text_page").hide();
	 });
    $('.dropdown-content-subcontent-text').hover(function(){
    $(this).parent().toggleClass('hover');
	});
	$('.dropdown-content-subcontent-background').hover(function(){
    $(this).parent().toggleClass('hover');
	});
	$('.dropdown-content-subcontent-image').hover(function(){
    $(this).parent().toggleClass('hover');
	});
	$('.dropdown-content-subcontent-video').hover(function(){
    $(this).parent().toggleClass('hover');
	});
	$('.dropdown-content-subcontent-menu').hover(function(){
    $(this).parent().toggleClass('hover');
	});
	$('.dropdown-content-subcontent-list').hover(function(){
    $(this).parent().toggleClass('hover');
	});
	$('.dropdown-content-subcontent-box').hover(function(){
    $(this).parent().toggleClass('hover');
	});
	$('.dropdown-content-subcontent-strip').hover(function(){
    $(this).parent().toggleClass('hover');
	});
	$('.dropdown-content-subcontent-button').hover(function(){
    $(this).parent().toggleClass('hover');
	});
	var x=400;var y=300;
		var mm=0;

	$('.text-large-heading').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});

	$('.text-large-heading').mouseenter(function(){
		
			var text_large_heading_text='<div class="'+mm+'"  style="height:auto;position:absolute;top:'+y+'px;left:'+x+'px;"><h2 contenteditable="true">\
  This is a heading</h2></div>';
	$("body").append(text_large_heading_text);
		$("."+mm).draggable({cancel: "h2"});
	$("."+mm).draggable({
    stop: function() {
		$(this).css("height", "auto");
 }
});
	
	});

	$('.text-large-heading').mouseleave(function(){
	if($('.text-large-heading').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});

	$('.text-small-heading').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});

	$('.text-small-heading').mouseenter(function(){
		
			var text_small_heading_text='<div class="'+mm+' draggable"  style="height:auto;position:absolute;top:'+y+'px;left:'+x+'px;"><h4 contenteditable="true" >\
  This is a heading</h4></div>';
	$("body").append(text_small_heading_text);
		$("."+mm).draggable({cancel: "h4"});
	$("."+mm).draggable({
    stop: function() {
		$(this).css("height", "auto");

 }
});
	
	});

	$('.text-small-heading').mouseleave(function(){
	if($('.text-small-heading').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});

	$('.text-large-paragraph').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});
	//$(".ee").draggable();

	$('.text-large-paragraph').mouseenter(function(){
		
			var text_large_paragraph_text='<div class="'+mm+'" style="height : auto !important;position:absolute;top:'+y+'px;left:'+x+'px;"><p contenteditable="true" style="font-size:18px;">\
  This is a paragraph</p></div>';
	$("body").append(text_large_paragraph_text);
	$("."+mm).draggable({cancel: "p"} );
	$("."+mm).draggable({
    stop: function() {
		$(this).css("height", "auto");
    }
});
	
	});

	$('.text-large-paragraph').mouseleave(function(){
	if($('.text-large-paragraph').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});

	$('.text-small-paragraph').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;

	});

	$('.text-small-paragraph').mouseenter(function(){
		
			var text_small_paragraph_text='<div class="'+mm+'" style="height:auto;position:absolute;top:'+y+'px;left:'+x+'px;"><pcontenteditable="true" style="font-size:14px">\
  This is a paragraph</p></div>';
	$("body").append(text_small_paragraph_text);
		$("."+mm).draggable({cancel: "p"});
	$("."+mm).draggable({
    stop: function() {
		$(this).css("height", "auto");

 }
});
	
	});

	$('.text-small-paragraph').mouseleave(function(){
	if($('.text-small-paragraph').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});

	

$(document).on('click', function(event) {
  if (!$(event.target).is(".text-option-button")) {

  previous_clicked_classname="-1";
    if(text_option_button_data){
    	$(".text-option-button").remove();
    	$(".text-option-edit2").remove();
    	$(".box-option-button").remove();
    	$(".box-option-edit2").remove();
    	$(".animation-type-options").remove();
    	$(".animation-advanced-options").remove();

    	text_option_button_data=false	;

}
  }
});
			var text_option_button_data=false;
			var previous_clicked_classname="-1";

$(document).on('click', 'p , .list',function(e){
		var forclass=($(this).closest('div').attr("class"));
		previous_clicked_classname=forclass.substr(0,forclass.indexOf(' '));
		var offset=$("."+previous_clicked_classname).offset();
		var height=$("."+previous_clicked_classname).innerHeight();

		//alert( +offset.top + +"40");
		if(!text_option_button_data){
			text_option_button_data=true;
		var button_group='<div class="btn-group text-option-button draggable" style="opacity:0.9;position:absolute;top:'+ (+offset.top + +"20" + +height) +'px;left:'+ (+offset.left - +"50") +'px;">\
  <button type="button" class="btn btn-primary text-option-edit " >Edit</button>\
  <div class="btn-group">\
    <button type="button" class="btn btn-primary dropdown-toggle " data-toggle="dropdown" >\
    Animate <span class="caret"></span></button>\
    <ul class="dropdown-menu" role="menu">\
      <li><a href="#" class="animate-option">Animation Types</a></li>\
      <li><a href="#" class="animate-advanced-option">Animation Advanced Settings</a></li>\
    </ul>\
  </div>\
  <button type="button" class="btn btn-primary delete-option " >Delete Element</button>\
</div>';
$("body").append(button_group);
$('.text-option-button').draggable({cancel:false});

}
e.stopPropogation();

	});
$(document).on('click', 'h2',function(e){

		var forclass=($(this).closest('div').attr("class"));
		previous_clicked_classname=forclass.substr(0,forclass.indexOf(' '));
				//alert(previous_clicked_classname);
		var offset=$("."+previous_clicked_classname).offset();
		var height=$("."+previous_clicked_classname).innerHeight();

		if(!text_option_button_data){
			text_option_button_data=true;
		//	alert(text_option_button_data);
		var button_group='<div class="btn-group text-option-button draggable" style="opacity:0.9;position:absolute;top:'+ (+offset.top + +"20" + +height) +'px;left:'+ (+offset.left - +"50") +'px;">\
  <button type="button" class="btn btn-primary text-option-edit draggable">Edit</button>\
  <div class="btn-group">\
    <button type="button" class="btn btn-primary dropdown-toggle draggable" data-toggle="dropdown" >\
    Animate <span class="caret"></span></button>\
    <ul class="dropdown-menu" role="menu">\
      <li><a href="#" class="animate-option">Animation Types</a></li>\
      <li><a href="#" class="animate-advanced-option">Animation Advanced Settings</a></li>\
    </ul>\
  </div>\
    <button type="button" class="btn btn-primary delete-option " >Delete Element</button>\
</div>';
$("body").append(button_group);
$('.text-option-button').draggable({cancel:false});
}
e.stopPropogation();

	});
$(document).on('click', 'h4',function(e){

		var forclass=($(this).closest('div').attr("class"));
		previous_clicked_classname=forclass.substr(0,forclass.indexOf(' '));
		var offset=$("."+previous_clicked_classname).offset();
		var height=$("."+previous_clicked_classname).innerHeight();

		if(!text_option_button_data){
			text_option_button_data=true;
		var button_group='<div class="btn-group text-option-button draggable" style="opacity:0.9;position:absolute;top:'+ (+offset.top + +"20" + +height) +'px;left:'+ (+offset.left - +"50") +'px;">\
  <button type="button" class="btn btn-primary text-option-edit draggable">Edit</button>\
  <div class="btn-group">\
    <button type="button" class="btn btn-primary dropdown-toggle draggable" data-toggle="dropdown" >\
    Animate <span class="caret"></span></button>\
    <ul class="dropdown-menu" role="menu">\
      <li><a href="#" class="animate-option">Animation Types</a></li>\
      <li><a href="#" class="animate-advanced-option">Animation Advanced Settings</a></li>\
    </ul>\
  </div>\
    <button type="button" class="btn btn-primary delete-option " >Delete Element</button>\
</div>';
$("body").append(button_group);
$('.text-option-button').draggable({cancel:false});

}
e.stopPropogation();

	});

$(document).on('click', '.delete-option',function(e){

$('.'+previous_clicked_classname).remove();

});

$(document).on('click', '.Font-Family-Times_New_Roman',function(){
	document.execCommand('fontName',false,"Times New Roman");});


$(document).on('click', '.Font-Family-Arial',function(){
	document.execCommand('fontName',false,"Arial");});

$(document).on('click', '.Font-Family-Comic_Sans',function(){
	document.execCommand('fontName',false,"'Comic Sans MS',cursive,sans-serif");});

$(document).on('click', '.Font-Family-Courier_New',function(){
	document.execCommand('fontName',false,"Courier New");});

$(document).on('click', '.text-option-Font-color',function(){
	$(".text-option-button").remove();
	var offset=$("."+previous_clicked_classname).offset();
 	var text='<input type="color" class="text-option-Font-color-select" style="position:absolute;top:'+ (+offset.top - +"40") +'px;right:'+ (+offset.left - +"50") +'px;">';
 	$("body").append(text);

 });
$(document).on('change', '.text-option-Font-color-select',function(){
	var colorvalue=$(".text-option-Font-color-select").val();
	document.execCommand('foreColor',false,colorvalue);
	$(".text-option-Font-color-select").remove();

});

$(document).on('click', '.Font-Size-10px',function(){
	document.execCommand("fontSize", false, "7");
   var fontElements = document.getElementsByTagName("font");
    for (var i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].size == "7") {
            fontElements[i].removeAttribute("size");
            fontElements[i].style.fontSize = "10px";
        }
    }
});
$(document).on('click', '.Font-Size-12px',function(){
	document.execCommand("fontSize", false, "7");
   var fontElements = document.getElementsByTagName("font");
    for (var i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].size == "7") {
            fontElements[i].removeAttribute("size");
            fontElements[i].style.fontSize = "12px";
        }
    }
});
$(document).on('click', '.Font-Size-14px',function(){
	document.execCommand("fontSize", false, "7");
   var fontElements = document.getElementsByTagName("font");
    for (var i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].size == "7") {
            fontElements[i].removeAttribute("size");
            fontElements[i].style.fontSize = "14px";
        }
    }
});
$(document).on('click', '.Font-Size-16px',function(){
	document.execCommand("fontSize", false, "7");
   var fontElements = document.getElementsByTagName("font");
    for (var i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].size == "7") {
            fontElements[i].removeAttribute("size");
            fontElements[i].style.fontSize = "16px";
        }
    }
});
$(document).on('click', '.Font-Size-18px',function(){
	document.execCommand("fontSize", false, "7");
   var fontElements = document.getElementsByTagName("font");
    for (var i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].size == "7") {
            fontElements[i].removeAttribute("size");
            fontElements[i].style.fontSize = "18px";
        }
    }
});
$(document).on('click', '.Font-Size-20px',function(){
	document.execCommand("fontSize", false, "7");
   var fontElements = document.getElementsByTagName("font");
    for (var i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].size == "7") {
            fontElements[i].removeAttribute("size");
            fontElements[i].style.fontSize = "20px";
        }
    }
});
$(document).on('click', '.Font-Size-24px',function(){
	document.execCommand("fontSize", false, "7");
   var fontElements = document.getElementsByTagName("font");
    for (var i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].size == "7") {
            fontElements[i].removeAttribute("size");
            fontElements[i].style.fontSize = "24px";
        }
    }
});
$(document).on('click', '.Font-Size-28px',function(){
	document.execCommand("fontSize", false, "7");
   var fontElements = document.getElementsByTagName("font");
    for (var i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].size == "7") {
            fontElements[i].removeAttribute("size");
            fontElements[i].style.fontSize = "28px";
        }
    }
});
$(document).on('click', '.Font-Size-32px',function(){
	document.execCommand("fontSize", false, "7");
   var fontElements = document.getElementsByTagName("font");
    for (var i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].size == "7") {
            fontElements[i].removeAttribute("size");
            fontElements[i].style.fontSize = "32px";
        }
    }
});


$(document).on('click', '.text-option-edit',function(e){

	$(".text-option-button").remove();
	var offset=$("."+previous_clicked_classname).offset();
	var height=$("."+previous_clicked_classname).innerHeight();

	var button_group='<div class="btn-group text-option-edit2" style="opacity:0.9;position:absolute;top:'+ (+offset.top + +"20" + +height) +'px;left:'+ (+offset.left - +"150") +'px;">\
	\
	<div class="btn-group">\
    <button type="button" class="btn btn-primary dropdown-toggle Font-Family" data-toggle="dropdown">\
    Font-Family <span class="caret"></span></button>\
    <ul class="dropdown-menu" role="menu">\
      <li><a href="#" class="Font-Family-Times_New_Roman">Times New Roman</a></li>\
      <li><a href="#" class="Font-Family-Arial">Arial</a></li>\
      <li><a href="#" class="Font-Family-Comic_Sans">Comic Sans MS</a></li>\
      <li><a href="#" class="Font-Family-Courier_New">Courier New</a></li>\
    </ul>\
  </div>\
\
  	<div class="btn-group">\
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">\
    Font-Size <span class="caret"></span></button>\
    <ul class="dropdown-menu" role="menu">\
      <li><a href="#" class="Font-Size-10px" style="font-size: 10px;">10 px</a></li>\
      <li><a href="#" class="Font-Size-12px" style="font-size: 12px;">12 px</a></li>\
       <li><a href="#" class="Font-Size-14px" style="font-size: 14px;">14 px</a></li>\
      <li><a href="#" class="Font-Size-16px" style="font-size: 16px;">16 px</a></li>\
       <li><a href="#" class="Font-Size-18px" style="font-size: 18px;">18 px</a></li>\
      <li><a href="#" class="Font-Size-20px" style="font-size: 20px;">20 px</a></li>\
      <li><a href="#" class="Font-Size-24px" style="font-size: 24px;">24 px</a></li>\
      <li><a href="#" class="Font-Size-28px" style="font-size: 28px;">28 px</a></li>\
      <li><a href="#" class="Font-Size-32px" style="font-size: 32px;">32 px</a></li>\
    </ul>\
  </div>\
\
  	<div class="btn-group">\
    <button type="button" class="btn btn-primary text-option-Font-color" >\
    Font-Color </button>\
  </div>\
\
  	<div class="btn-group">\
    <button type="button" class="btn btn-primary text-option-edit-bold" >\
    <b>BOLD</b> </button>\
  </div>\
\
  	<div class="btn-group">\
    <button type="button" class="btn btn-primary text-option-edit-italics" >\
    <i>Italics</i></button> \
  </div>\
\
</div>';
$("body").append(button_group);
e.stopPropogation();




});

$(document).on('click',".text-option-edit-bold",function(){
	
	document.execCommand('bold',false,null);});

$(document).on('click',".text-option-edit-italics",function(){
	
	document.execCommand('italic',false,null);});




//from this .............................................................................................
$(document).on('click', '.button-option-opacity',function(e){


	$(".button-opacity-options").remove();


var text='<input type="text" name="button_opacity" placeholder="Opacity :  '+$("."+previous_clicked_classname).find('[class*="btn"]').css("opacity")+'" class="button-option-opacity-select button-opacity-options" style="position:absolute;top:50px;width:100px;right:130px">	';

$(".button-option-button").append(text);
e.stopPropogation();

});
$(document).on('click', '.button-option-opacity-select',function(e){
	 	e.stopPropogation();

	});
$(document).on('change', '.button-option-opacity-select',function(e){
	var changed_opacity=$(".button-option-opacity-select").val();
	$("."+previous_clicked_classname).find('[class*="btn"]').css("opacity",changed_opacity);	
	 	e.stopPropogation();

	});

//..........................................................................


$(document).on('click', '.button-option-background-color',function(){
	$(".button-opacity-options").remove();
	$(".button-option-button").remove();
	var offset=$("."+previous_clicked_classname).offset();
 	var text='<input type="color" class="button-option-background-color-select" style="position:absolute;top:'+ (+offset.top - +"40") +'px;left:'+ (+offset.left - +"50") +'px;">';
 	$("body").append(text);
 	e.preventDefault();
 	e.stopPropogation();

 });
$(document).on('change', '.button-option-background-color-select',function(){
		text_option_button_data=false;
	var colorvalue=$(".button-option-background-color-select").val();
	$("."+previous_clicked_classname).find('[class*="btn"]').css("background-color",colorvalue);
	$(".button-option-background-color-select").remove();
	e.preventDefault();
 	e.stopPropogation();

});
$(document).on('click', '.button-option-background-color-select',function(e){
	//e.preventDefault();
 	e.stopPropogation();

});
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

$(document).on('click', '.button-option-color',function(){
	$(".button-opacity-options").remove();
	$(".button-option-button").remove();
	var offset=$("."+previous_clicked_classname).offset();
	var origcolor=$("."+previous_clicked_classname).find('[class*="btn"]').css("color");
	origcolor=rgb2hex(origcolor);
	 	var text='<input type="color" value="'+origcolor+'" class="button-option-color-select" style="position:absolute;top:'+ (+offset.top - +"40") +'px;left:'+ (+offset.left - +"50") +'px;">';
 	$("body").append(text);
 	e.preventDefault();
 	e.stopPropogation();

 });
$(document).on('change', '.button-option-color-select',function(){
		text_option_button_data=false;
	var colorvalue=$(".button-option-color-select").val();
	$("."+previous_clicked_classname).find('[class*="btn"]').css("color",colorvalue);
	$(".button-option-color-select").remove();
	e.preventDefault();
 	e.stopPropogation();

});
$(document).on('click', '.button-option-color-select',function(e){
	//e.preventDefault();
 	e.stopPropogation();

});




$(document).on('click',".DangerButton , .WarningButton , .SuccessButton , .InfoButton , .PrimaryButton , .DefaultButton",function(){
	
	$(".just_clicked_animate").removeClass("just_clicked_animate");
		$(this).addClass("just_clicked_animate");
		
	var forclass=($(this).closest('div').parent().parent().attr("class"));
		previous_clicked_classname=forclass.substr(0,forclass.indexOf(' '));
		var offset=$("."+previous_clicked_classname).offset();
		var height=$("."+previous_clicked_classname).innerHeight();
			
		//alert( +offset.top + +"40");
		if(!text_option_button_data){
			text_option_button_data=true;
		var button_group='<div class="btn-group button-option-button draggable" style="opacity:0.9;position:absolute;top:'+ (+offset.top + +"20" + +height) +'px;left:'+ (+offset.left - +"50") +'px;">\
  <button type="button" class="btn btn-primary button-option-background-color " >Background-Color</button>\
  <button type="button" class="btn btn-primary button-option-color " >Font-Color</button>\
    <button type="button" class="btn btn-primary button-option-opacity " >Opacity</button>\
  <button type="button" class="btn btn-primary button-option-link " >HyperLink</button>\
   <div class="btn-group">\
    <button type="button" class="btn btn-primary dropdown-toggle animatebutton " data-toggle="dropdown" >\
    Animate <span class="caret"></span></button>\
    <ul class="dropdown-menu" role="menu">\
      <li><a href="#" class="animate_type">Animation Types</a></li>\
      <li><a href="#" class="advance_animate">Animantion Advanced Options</a></li>\
    </ul>\
  </div>\
  <button type="button" class="btn btn-primary delete-option " >Delete Element</button>\
</div>';
$("body").append(button_group);
//$('.text-option-button').draggable({cancel:false});

}
e.stopPropogation();

});



	$('.Default').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});

	$('.Default').mouseenter(function(){
		
	var Button_text='<div class="'+mm+'" style="position:absolute;top:'+y+'px;left:'+x+'px;"><a href="#" ><button type="button" contenteditable=tRuE class="btn btn-default DefaultButton" >Default</button></a></div>';
	$("body").append(Button_text);
	$(".DefaultButton").draggable({cancel: false}).resizable();
	$("."+mm).draggable({cancel: ".DefaultButton"});
	$(".ui-wrapper").css("padding-bottom","1px");
	$(".ui-wrapper").css("padding-right","0px");
	$(".DefaultButton").css("width","70px");
	$(".DefaultButton").css("height","35px");
	$(".ui-wrapper").css("width","96px");
	$(".ui-wrapper").css("height","50px");

	});

	$('.Default').mouseleave(function(){
	if($('.Default').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});
//
	$('.Primary').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});

	$('.Primary').mouseenter(function(){
		
	var Button_text='<div class="'+mm+'" style="position:absolute;top:'+y+'px;left:'+x+'px;"><a href="#" ><button type="button" contenteditable=tRuE class="btn btn-primary PrimaryButton" >Primary</button></a></div>';
	$("body").append(Button_text);
	$(".PrimaryButton").draggable({cancel: false}).resizable();
	$("."+mm).draggable({cancel: ".PrimaryButton"});
	$(".ui-wrapper").css("padding-bottom","1px");
	$(".ui-wrapper").css("padding-right","0px");
	$(".PrimaryButton").css("width","70px");
	$(".PrimaryButton").css("height","35px");
	$(".ui-wrapper").css("width","96px");
	$(".ui-wrapper").css("height","50px");

	});

	$('.Primary').mouseleave(function(){
	if($('.Primary').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});
//
	$('.Success').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});

	$('.Success').mouseenter(function(){
		
	var Button_text='<div class="'+mm+'" style="position:absolute;top:'+y+'px;left:'+x+'px;"><a href="#" ><button type="button" contenteditable=tRuE class="btn btn-success SuccessButton" >Success</button></a></div>';
	$("body").append(Button_text);
	$(".SuccessButton").draggable({cancel: false}).resizable();
	$("."+mm).draggable({cancel: ".SuccessButton"});
	$(".ui-wrapper").css("padding-bottom","1px");
	$(".ui-wrapper").css("padding-right","0px");
	$(".SuccessButton").css("width","70px");
	$(".SuccessButton").css("height","35px");
	$(".ui-wrapper").css("width","96px");
	$(".ui-wrapper").css("height","50px");

	});

	$('.Success').mouseleave(function(){
	if($('.Success').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});
//
	$('.Info').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});

	$('.Info').mouseenter(function(){
		
	var Button_text='<div class="'+mm+'" style="position:absolute;top:'+y+'px;left:'+x+'px;"><a href="#" ><button type="button" contenteditable=tRuE class="btn btn-info InfoButton" >Info</button></a></div>';
	$("body").append(Button_text);
	$(".InfoButton").draggable({cancel: false}).resizable();
	$("."+mm).draggable({cancel: ".InfoButton"});
	$(".ui-wrapper").css("padding-bottom","1px");
	$(".ui-wrapper").css("padding-right","0px");
	$(".InfoButton").css("width","70px");
	$(".InfoButton").css("height","35px");
	$(".ui-wrapper").css("width","96px");
	$(".ui-wrapper").css("height","50px");

	});

	$('.Info').mouseleave(function(){
	if($('.Info').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});
//	

	$('.Warning').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});

	$('.Warning').mouseenter(function(){
		
	var Button_text='<div class="'+mm+'" style="position:absolute;top:'+y+'px;left:'+x+'px;"><a href="#" ><button type="button" contenteditable=tRuE class="btn btn-warning WarningButton" >Warning</button></a></div>';
	$("body").append(Button_text);
	$(".WarningButton").draggable({cancel: false}).resizable();
	$("."+mm).draggable({cancel: ".WarningButton"});
	$(".ui-wrapper").css("padding-bottom","1px");
	$(".ui-wrapper").css("padding-right","0px");
	$(".WarningButton").css("width","70px");
	$(".WarningButton").css("height","35px");
	$(".ui-wrapper").css("width","96px");
	$(".ui-wrapper").css("height","50px");

	});

	$('.Warning').mouseleave(function(){
	if($('.Warning').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});
//
	$('.Danger').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});

	$('.Danger').mouseenter(function(){
		
	var Button_text='<div class="'+mm+' dangerButton" style="position:absolute;top:'+y+'px;left:'+x+'px;"><a href="#" ><button type="button" contenteditable=tRuE class="btn btn-danger DangerButton" >Danger</button></a></div>';
	$("body").append(Button_text);
	$(".DangerButton").draggable({cancel: false}).resizable();
	$("."+mm).draggable({cancel: ".DangerButton"});
	$(".ui-wrapper").css("padding-bottom","1px");
	$(".ui-wrapper").css("padding-right","0px");
	$(".DangerButton").css("width","70px");
	$(".DangerButton").css("height","35px");
	$(".ui-wrapper").css("width","96px");
	$(".ui-wrapper").css("height","50px");

	});

	$('.Danger').mouseleave(function(){
	if($('.Danger').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});







//till this ...............................................................................................









	$('.Bullet').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});

	$('.Bullet').mouseenter(function(){
		
			var Bullet_text='<div class="'+mm+' list" style="position:absolute;top:'+y+'px;left:'+x+'px;"><ul contenteditable="true">\
  <li>First item</li>\
  <li>Second item</li>\
  <li>Third item</li>\
</ul></div>';
	$("body").append(Bullet_text);
	$("."+mm).draggable({cancel: "ul"});
	
	});

	$('.Bullet').mouseleave(function(){
	if($('.Bullet').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});


	$('.Numbered').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});

	$('.Numbered').mouseenter(function(){
		
			var Bullet_text='<div class="'+mm+' list" contenteditable="true" style="position:absolute;top:'+y+'px;left:'+x+'px;"><ol type="1">\
  <li>First item</li>\
  <li>Second item</li>\
  <li>Third item</li>\
</ol></div>';
	$("body").append(Bullet_text);
	$("."+mm).draggable();
	
	});

	$('.Numbered').mouseleave(function(){
	if($('.Numbered').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});


	$('.Disc').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});

	$('.Disc').mouseenter(function(){
		
			var Bullet_text='<div class="'+mm+' list" contenteditable="true" style="position:absolute;top:'+y+'px;left:'+x+'px;"><ul style="list-style-type:circle">\
  <li>First item</li>\
  <li>Second item</li>\
  <li>Third item</li>\
</ul></div>';
	$("body").append(Bullet_text);
	$("."+mm).draggable();
	
	});

	$('.Disc').mouseleave(function(){
	if($('.Disc').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});


	$('.Roman').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});

	$('.Roman').mouseenter(function(){
		
			var Bullet_text='<div class="'+mm+' list" contenteditable="true" style="position:absolute;top:'+y+'px;left:'+x+'px;"><ol type="I">\
  <li>First item</li>\
  <li>Second item</li>\
  <li>Third item</li>\
</ol></div>';
	$("body").append(Bullet_text);
	$("."+mm).draggable();
	
	});

	$('.Roman').mouseleave(function(){
	if($('.Roman').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});


	$('.Unordered').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});

	$('.Unordered').mouseenter(function(){
		
			var Bullet_text='<div class="'+mm+' list" contenteditable="true" style="position:absolute;top:'+y+'px;left:'+x+'px;"><ul style="list-style-type:none">\
  <li>First item</li>\
  <li>Second item</li>\
  <li>Third item</li>\
</ul></div>';
	$("body").append(Bullet_text);
	$("."+mm).draggable();
	
	});

	$('.Unordered').mouseleave(function(){
	if($('.Unordered').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});
	


	$(document).on('click', '.box-option-edit-border',function(e){

$(".box-edit-color-options").remove();
$(".box-edit-shadow-options").remove();
$(".box-edit-border-options").remove();
$(".box-edit-opacity-options").remove();

var text1='<div style="position:absolute;top:50px;left:10px;display:inline;" class="box-edit-border-options">Border-Width : <input type="text" name="box_border_width" placeholder="Border width :  '+$("."+previous_clicked_classname).css("border-width")+'" class="box-option-edit-border-width-select" style="width:150px;"></div>	';
var text2='<div style="position:absolute;top:70px;left:10px;display:inline;" class="box-edit-border-options"><br>Border-Radius : <br><input type="text" name="box_border_top_left_radius" placeholder="Top-Left :  '+$("."+previous_clicked_classname).css("border-top-left-radius")+'" class="box-option-edit-border-radius-topleft-select" style="width:120px;margin-right:10px;">\
<input type="text" name="box_border_top_rightradius" placeholder="Top-Right :  '+$("."+previous_clicked_classname).css("border-top-right-radius")+'" class="box-option-edit-border-radius-topright-select" style="width:120px;"><br>\
<input type="text" name="box_border_bottom_left_radius" placeholder="Bottom-left :  '+$("."+previous_clicked_classname).css("border-bottom-left-radius")+'" class="box-option-edit-border-radius-bottomleft-select" style="width:120px;margin-right:10px;">\
<input type="text" name="box_border_bottom_right_radius" placeholder="Bottom-right :  '+$("."+previous_clicked_classname).css("border-bottom-right-radius")+'" class="box-option-edit-border-radius-bottomright-select" style="width:120px;"></div>	';
var text3='<div style="position:absolute;top:170px;left:10px;display:inline;" class="box-edit-border-options"><select class="box-option-edit-border-style">\
  <option value="0">Solid Border</option>\
  <option value="1">Dashed Border</option>\
  <option value="2">Double Border</option>\
  <option value="3">No Border</option>\
   <option value="4">Groove Border</option>\
  <option value="5">Ridge Border</option>\
  <option value="6">Inset Border</option>\
  <option value="7">Outset Border</option>\
</select></div>	';

$(".box-option-edit2").append(text1,text2,text3);
e.stopPropogation();

});
$(document).on('click', '.box-option-edit-border-width-select',function(e){
	 	e.stopPropogation();

	});
$(document).on('change', '.box-option-edit-border-width-select',function(e){
	var changed_border_width=$(".box-option-edit-border-width-select").val();
	$("."+previous_clicked_classname).css("border-width",changed_border_width+"px");	
	 	e.stopPropogation();

	});
$(document).on('click', '.box-option-edit-border-radius-topleft-select',function(e){
	 	e.stopPropogation();

	});
$(document).on('change', '.box-option-edit-border-radius-topleft-select',function(e){
	var changed_border_radius=$(".box-option-edit-border-radius-topleft-select").val();
	$("."+previous_clicked_classname).css("border-top-left-radius",changed_border_radius+"px");	
	 	e.stopPropogation();

	});
$(document).on('click', '.box-option-edit-border-radius-topright-select',function(e){
	 	e.stopPropogation();

	});
$(document).on('change', '.box-option-edit-border-radius-topright-select',function(e){
	var changed_border_radius=$(".box-option-edit-border-radius-topright-select").val();
	$("."+previous_clicked_classname).css("border-top-right-radius",changed_border_radius+"px")	;
	 	e.stopPropogation();

	});
$(document).on('click', '.box-option-edit-border-radius-bottomleft-select',function(e){
	 	e.stopPropogation();

	});
$(document).on('change', '.box-option-edit-border-radius-bottomleft-select',function(e){
	var changed_border_radius=$(".box-option-edit-border-radius-bottomleft-select").val();
	$("."+previous_clicked_classname).css("border-bottom-left-radius",changed_border_radius+"px");	
	 	e.stopPropogation();

	});
$(document).on('click', '.box-option-edit-border-radius-bottomright-select',function(e){
	 	e.stopPropogation();

	});
$(document).on('change', '.box-option-edit-border-radius-bottomright-select',function(e){
	var changed_border_radius=$(".box-option-edit-border-radius-bottomright-select").val();
	$("."+previous_clicked_classname).css("border-bottom-right-radius",changed_border_radius+"px");	
	 	e.stopPropogation();

	});
$(document).on('click', '.box-option-edit-border-style',function(e){
	 	e.stopPropogation();

	});
$(document).on('change', '.box-option-edit-border-style',function(e){
	var border_style_value=$(".box-option-edit-border-style").val();
	alert($(".box-option-edit-border-style").val());
	alert(previous_clicked_classname);
	switch (border_style_value) {
    case "0":
		$("."+previous_clicked_classname).css("border-style","solid");	 
 	    break;
    case "1":
		$("."+previous_clicked_classname).css("border-style","dashed");	 
        break;
    case "2":
		$("."+previous_clicked_classname).css("border-style","double");	 
        break;
    case "3":
		$("."+previous_clicked_classname).css("border-style","none");	 
        break;
    case "4":
		$("."+previous_clicked_classname).css("border-style","groove");	 
        break;
    case "5":
		$("."+previous_clicked_classname).css("border-style","ridge");	 
        break;
    case "6":
		$("."+previous_clicked_classname).css("border-style","inset");
		break;	
	case "7":
		$("."+previous_clicked_classname).css("border-style","outset");
		break; 
	default:alert("switch isnt working border-style");
}
	 	e.stopPropogation();

	});



	$(document).on('click', '.box-option-edit-shadow',function(e){

		$(".box-edit-shadow-options").remove();
		$(".box-edit-color-options").remove();
		$(".box-edit-border-options").remove();
		$(".box-edit-opacity-options").remove();
		var result=$("."+previous_clicked_classname).css("box-shadow").split(/\s+/);

		var text1='<div style="position:absolute;top:50px;left:10px;display:inline;" class="box-edit-shadow-options">Shadow-Distance : <input type="text" name="box_shadow_distance" placeholder="Shadow Distance :  '+result[6]+'" class="box-option-edit-shadow-distance-select" style="width:150px;"></div>	';
		var text2='<div style="position:absolute;top:70px;left:10px;display:inline;" class="box-edit-shadow-options"><br>Shadow Displacement from centre : <br><input type="text" name="box_shadow_horizontal" placeholder="Horizontal Distannce :  '+result[3]+'" class="box-option-edit-shadow-horizontal-select" style="width:120px;margin-right:10px;">\
		<input type="text" name="box_shadow_vertical" placeholder="Vertical Distance :  '+result[4]+'" class="box-option-edit-shadow-vertical-select" style="width:120px;"></div>';
		var text3='<div style="position:absolute;top:140px;left:10px;display:inline;" class="box-edit-shadow-options"><br>Shadow Blur : <input type="text" name="box_shadow_blur" placeholder="Shadow Blur :  '+result[5]+'" class="box-option-edit-shadow-blur-select" style="width:150px;"></div>	';


		$(".box-option-edit2").append(text1,text2,text3);
		e.stopPropogation();

});
	
$(document).on('click', '.box-option-edit-shadow-distance-select',function(e){
	 	e.stopPropogation();

	});
$(document).on('change', '.box-option-edit-shadow-distance-select',function(e){
		var result=$("."+previous_clicked_classname).css("box-shadow").split(/\s+/);

	var changed_shadow=result[0]+" "+result[1]+" "+result[2]+" "+result[3]+" "+result[4]+" "+result[5]+" "+ $(".box-option-edit-shadow-distance-select").val()+"px";
	$("."+previous_clicked_classname).css("box-shadow",changed_shadow);	
	 	e.stopPropogation();

	});
$(document).on('click', '.box-option-edit-shadow-horizontal-select',function(e){
	 	e.stopPropogation();

	});
$(document).on('change', '.box-option-edit-shadow-horizontal-select',function(e){
		var result=$("."+previous_clicked_classname).css("box-shadow").split(/\s+/);

	var changed_shadow=result[0]+" "+result[1]+" "+result[2]+" "+$(".box-option-edit-shadow-horizontal-select").val()+"px "+result[4]+" "+result[5]+" "+result[6];
	$("."+previous_clicked_classname).css("box-shadow",changed_shadow);	
	 	e.stopPropogation();

	});

$(document).on('click', '.box-option-edit-shadow-vertical-select',function(e){
	 	e.stopPropogation();

	});
$(document).on('change', '.box-option-edit-shadow-vertical-select',function(e){
			var result=$("."+previous_clicked_classname).css("box-shadow").split(/\s+/);

	var changed_shadow=result[0]+" "+result[1]+" "+result[2]+" "+result[3]+" "+$(".box-option-edit-shadow-vertical-select").val()+"px "+result[5]+" "+result[6];
	$("."+previous_clicked_classname).css("box-shadow",changed_shadow);	
	 	e.stopPropogation();

	});


$(document).on('click', '.box-option-edit-shadow-blur-select',function(e){
	 	e.stopPropogation();

	});
$(document).on('change', '.box-option-edit-shadow-blur-select',function(e){
			var result=$("."+previous_clicked_classname).css("box-shadow").split(/\s+/);

	var changed_shadow=result[0]+" "+result[1]+" "+result[2]+" "+result[3]+" "+result[4]+" "+$(".box-option-edit-shadow-blur-select").val()+"px "+result[6];
	$("."+previous_clicked_classname).css("box-shadow",changed_shadow);	
	 	e.stopPropogation();

	});









$(document).on('click', '.box-option-edit-opacity',function(e){

$(".box-edit-color-options").remove();
$(".box-edit-shadow-options").remove();
$(".box-edit-border-options").remove();
		$(".box-edit-opacity-options").remove();


var text='<input type="text" name="box_opacity" placeholder="Opacity :  '+$("."+previous_clicked_classname).css("opacity")+'" class="box-option-edit-opacity-select box-edit-opacity-options" style="position:absolute;top:50px;width:100px;right:130px">	';

$(".box-option-edit2").append(text);
e.stopPropogation();

});
$(document).on('click', '.box-option-edit-opacity-select',function(e){
	 	e.stopPropogation();

	});
$(document).on('change', '.box-option-edit-opacity-select',function(e){
	var changed_opacity=$(".box-option-edit-opacity-select").val();
	$("."+previous_clicked_classname).css("opacity",changed_opacity);	
	 	e.stopPropogation();

	});






$(document).on('click', '.box-option-edit-color-border',function(e){

$(".box-edit-shadow-options").remove();
$(".box-edit-border-options").remove();
$(".box-edit-opacity-options").remove();
$(".box-edit-color-options").remove();
var offset=$("."+previous_clicked_classname).offset();

	$(".box-option-edit2").remove();
 	var text='<input type="color" class="box-option-edit-color-border-select box-edit-color-options" style="position:absolute;top:'+ (+offset.top + +"40") +'px;left:'+ (+offset.left - +"50") +'px;">';
 	$("body").append(text);
 	e.stopPropogation();

 });

	$(document).on('click', '.box-option-edit-color-border-select',function(e){
	 	e.stopPropogation();

	});
$(document).on('change', '.box-option-edit-color-border-select',function(){
		text_option_button_data=false;

	var colorvalue=$(".box-option-edit-color-border-select").val();
	$("."+previous_clicked_classname).css("border-bottom-color",colorvalue);
	$("."+previous_clicked_classname).css("border-top-color",colorvalue);
	$("."+previous_clicked_classname).css("border-right-color",colorvalue);
	$("."+previous_clicked_classname).css("border-left-color",colorvalue);

	$(".box-option-edit-color-border-select").remove();

});

$(document).on('click', '.box-option-edit-color-fill',function(e){


$(".box-edit-shadow-options").remove();
$(".box-edit-border-options").remove();
$(".box-edit-opacity-options").remove();
$(".box-edit-color-options").remove();
	var offset=$("."+previous_clicked_classname).offset();


	$(".box-option-edit2").remove();
 	var text='<input type="color" class="box-option-edit-color-fill-select box-edit-color-options" style="position:absolute;top:'+ (+offset.top + +"40") +'px;left:'+ (+offset.left - +"50") +'px;">';
 	$("body").append(text);
 	e.stopPropogation();


 });
$(document).on('click', '.box-option-edit-color-fill-select',function(e){
	 	e.stopPropogation();

});

$(document).on('change', '.box-option-edit-color-fill-select',function(){
	text_option_button_data=false;
	var colorvalue=$(".box-option-edit-color-fill-select").val();
$("."+previous_clicked_classname).css("background-color",colorvalue);
	$(".box-option-edit-color-fill-select").remove();

});





	$(document).on('click', '.box-option-edit',function(e){

	$(".box-option-button").remove();
	$(".box-edit-color-options").remove();
	var offset=$("."+previous_clicked_classname).offset();
	var height=$("."+previous_clicked_classname).innerHeight();


	var button_group='<div class="btn-group box-option-edit2 draggable" style="opacity:0.9;position:absolute;top:'+ (+offset.top + +"20" + +height) +'px;left:'+ (+offset.left - +"100") +'px;">\
  <button type="button" class="btn btn-primary box-option-edit-border " >Border</button>\
  <button type="button" class="btn btn-primary box-option-edit-opacity " >Opacity</button>\
  <button type="button" class="btn btn-primary box-option-edit-shadow " >Shadow</button>\
  <div class="btn-group">\
    <button type="button" class="btn btn-primary dropdown-toggle box-option-edit-color" data-toggle="dropdown" >\
    Color <span class="caret"></span></button>\
    <ul class="dropdown-menu" role="menu">\
      <li><a href="#" class="box-option-edit-color-border">Border-Color</a></li>\
      <li><a href="#" class="box-option-edit-color-fill">Fill-Color</a></li>\
    </ul>\
  </div>\
</div>';
$("body").append(button_group);
e.stopPropogation();


});
	



$(document).on('click', '.rectangular-box',function(e){

		var forclass=($(this).closest('div').attr("class"));
		previous_clicked_classname=forclass.substr(0,forclass.indexOf(' '));
			var offset=$("."+previous_clicked_classname).offset();
			//alert($("."+previous_clicked_classname).innerHeight());
			var height=$("."+previous_clicked_classname).innerHeight();
		$(".box-edit-color-options").remove();

		if(!text_option_button_data){
			text_option_button_data=true;

		var button_group='<div class="btn-group box-option-button draggable" style="opacity:0.9;position:absolute;top:'+ (+offset.top + +"20" + +height) +'px;left:'+ (+offset.left - +"100") +'px;">\
  <button type="button" class="btn btn-primary box-option-edit " >Edit</button>\
  <div class="btn-group">\
    <button type="button" class="btn btn-primary dropdown-toggle  " data-toggle="dropdown" >\
    Animate <span class="caret"></span></button>\
    <ul class="dropdown-menu" role="menu">\
      <li><a href="#" class="animate-option">Animation Types</a></li>\
      <li><a href="#" class="animate-advanced-option">Animation Advanced Options</a></li>\
    </ul>\
  </div>\
  <button type="button" class="btn btn-primary delete-option " >Delete Element</button>\
</div>';
$("body").append(button_group);
$('.box-option-button').draggable({cancel:false});

}
e.stopPropogation();

	});
var isAdvancedOption=false;

$.fn.extend({
    animateCss: function (animationName) {
    	//alert(isAdvancedOption);
        	if(isAdvancedOption)
        {	
        				//alert($("."+previous_clicked_classname).css("-webkit-animation-duration"));

        	$("."+previous_clicked_classname).data("-webkit-animation-duration",$("."+previous_clicked_classname).css("-webkit-animation-duration")); 
			$("."+previous_clicked_classname).data("-webkit-animation-delay",$("."+previous_clicked_classname).css("-webkit-animation-delay")); 
			$("."+previous_clicked_classname).data("-webkit-animation-iteration-count",$("."+previous_clicked_classname).css("-webkit-animation-iteration-count"));
		}
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).data=('animationName',animationName);
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
        	if($(this).hasClass('animated'))
            {$(this).removeClass('animated');}
 			if($(this).hasClass(animationName))
            {$(this).removeClass(animationName);}
        $("."+previous_clicked_classname).data('animation_playing','none');
        });
    }
});




$(document).on('click', '.animate-advanced-option',function(e){
//alert("cd");
$(".box-option-button").remove();
$(".text-option-button").remove();
var offset=$("."+previous_clicked_classname).offset();
var height=$("."+previous_clicked_classname).innerHeight();



isAdvancedOption=true;
$("."+previous_clicked_classname).animateCss($("."+previous_clicked_classname).data('animation_name'));

var text1='<div style="position:absolute;top:'+ (+offset.top + +"20" + +height) +'px;left:'+ (+offset.left - +"100") +'px;display:inline;" class="animation-advanced-options animation-advanced-options-duration">Animation-Duration : <input type="text" name="animate_advaced_duration" placeholder="Animation Duration :  '+$("."+previous_clicked_classname).data("-webkit-animation-duration")+'" class="animation-advanced-options-duration-select" style="width:150px;"></div>	';
var text2='<div style="position:absolute;top:'+ (+offset.top + +"60" + +height) +'px;left:'+ (+offset.left - +"100") +'px;display:inline;" class="animation-advanced-options animation-advanced-options-delay">Animation-Delay : <input type="text" name="animate_advaced_delay" placeholder="Animation Delay :  '+$("."+previous_clicked_classname).data("-webkit-animation-delay")+'" class="animation-advanced-options-delay-select" style="width:150px;"></div>	';
var text3='<div style="position:absolute;top:'+ (+offset.top + +"110" + +height) +'px;left:'+ (+offset.left - +"100") +'px;display:inline;" class="animation-advanced-options animation-advanced-options-iteration">Animation-Iteration-Count (type -1 for infinite) : <input type="text" name="animate_advaced_iteration" placeholder="Animation Iteration :  '+$("."+previous_clicked_classname).data("-webkit-animation-iteration-count")+'" class="animation-advanced-options-iteration-select" style="width:150px;"></div>	';
var text4='<div style="position:absolute;top:'+ (+offset.top + +"20" + +height) +'px;left:'+ (+offset.left - +"100") +'px;display:inline;" class="animation-advanced-options">You have not selected any animation for this element.<br>Select an animation type for advanced options.</div>'
var text5='<div style="position:absolute;top:'+ (+offset.top + +"160" + +height) +'px;left:'+ (+offset.left - +"100") +'px;display:inline;" class="animation-advanced-options animation-advanced-options-once"><input type="checkbox" name="onceAnimation" value="onceAnimation" class="animation-advanced-options-once-select">Animate only first time';


if($("."+previous_clicked_classname).hasClass('isAnnimated'))
$("body").append(text1,text2,text3,text5);
else
$("body").append(text4);

if($("."+previous_clicked_classname).hasClass("animationOnlyOnce"))
$('.animation-advanced-options-once-select').prop('checked', true);

isAdvancedOption=false;

//$("."+previous_clicked_classname).css("-webkit-animation-duration","3s")
e.stopPropogation();


});

$(document).on('click', '.animation-advanced-options-duration-select',function(e){
	 	e.stopPropogation();

});

$(document).on('change', '.animation-advanced-options-duration-select',function(e){

	var duration=$(".animation-advanced-options-duration-select").val();
$("."+previous_clicked_classname).css("-webkit-animation-duration",duration+"s");
		 	e.stopPropogation();

});

$(document).on('click', '.animation-advanced-options-once-select',function(e){
	 	e.stopPropogation();

});

$(document).on('change', '.animation-advanced-options-once-select',function(e){

	if ($('.animation-advanced-options-once-select').is(":checked"))
	{
  		$("."+previous_clicked_classname).addClass("animationOnlyOnce");
  		$("."+previous_clicked_classname).data("hasAnimationHappened",false);

	}
	else
	{
		if($("."+previous_clicked_classname).hasClass("animationOnlyOnce"))
			$("."+previous_clicked_classname).removeClass("animationOnlyOnce");

	}

});

$(document).on('click', '.animation-advanced-options-delay-select',function(e){
	 	e.stopPropogation();

});

$(document).on('change', '.animation-advanced-options-delay-select',function(e){

	var delay=$(".animation-advanced-options-delay-select").val();
$("."+previous_clicked_classname).css("-webkit-animation-delay",delay+"s");
	 	e.stopPropogation();

});

$(document).on('click', '.animation-advanced-options-iteration-select',function(e){
	 	e.stopPropogation();

});

$(document).on('change', '.animation-advanced-options-iteration-select',function(e){

	var iteration=$(".animation-advanced-options-iteration-select").val();
	if(iteration=="-1")
	{
		$("."+previous_clicked_classname).css("-webkit-animation-iteration-count","infinite");
	
	}
	else 
	{
		$("."+previous_clicked_classname).css("-webkit-animation-iteration-count",iteration);

	}

	e.stopPropogation();
});







$(document).on('click', '.animate-option',function(e){
//alert("cd");
$(".box-option-button").remove();
$(".text-option-button").remove();
var offset=$("."+previous_clicked_classname).offset();
var height=$("."+previous_clicked_classname).innerHeight();

var text='<div class="animation-type-options" style="position:absolute;top:'+ (+offset.top + +"20" + +height) +'px;left:'+ (+offset.left - +"100") +'px;width:300px;height:300px;">\
<div style="border:1px solid;border-top-left-radius:10px;border-top-right-radius:10px;height:20%;min-height:50px;vertical-align: middle;text-align: center;font-size:150%;font-weight:bold;">Animate</div>\
<div style="height:80%;overflow: auto">\
<div style="height:25%;width:100%;">\
<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 10%;background-color: #d3d3d3;border-radius:10px;" class="animationType none">None</div>\
<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType bounceIn">Bounce<br>In</div>\
<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType fadeIn">Fade<br>In</div>\
</div>\
<div style="min-height:25%;width:100%;opacity:1">\
<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType zoomIn">Zoom<br>In</div>\
<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType slideInLeft">Slide<br>In Left</div>\
<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType slideInRight">Slide<br>In Right</div>\
</div>\
<div style="height:25%;width:100%;">\
<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType flipInX">Flip<br>In X</div>\
<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType flipInY">Flip<br>In Y</div>\
<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType lightSpeedIn">Light<br>Speed In</div>\
</div>\
<div style="height:25%;width:100%;">\
<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 10%;background-color: #d3d3d3;border-radius:10px;" class="animationType pulse">Pulse</div>\
<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 10%;background-color: #d3d3d3;border-radius:10px;" class="animationType shake">Shake</div>\
<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 10%;background-color: #d3d3d3;border-radius:10px;" class="animationType swing">Swing</div>\
</div>\
<div style="height:25%;width:100%;">\
<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType rubberBand">Rubber<br>Band</div>\
<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 10%;background-color: #d3d3d3;border-radius:10px;" class="animationType wobble">Wobble</div>\
<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 10%;background-color: #d3d3d3;border-radius:10px;" class="animationType jello">Jello</div>\
</div>\
<div style="height:25%;width:100%;">\
<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType rollIn">Roll<br>In</div>\
</div>\
</div>\
</div>';
$("body").append(text);

if($("."+previous_clicked_classname).hasClass('isAnnimated'))
	{
		//alert("Dfsc");
		var name=$("."+previous_clicked_classname).data('animation_name');
		$("."+name).css("background-color","#7ACEF4");


	}	
//$("."+previous_clicked_classname).animateCss('bounce');
//alert("cd");
e.stopPropogation();

});

$(document).on('mouseenter', '.animationType',function(e){
	$(this).css("background-color","#a3a3a3");
	$(this).css("cursor","pointer");


	});
$(document).on('mouseleave', '.animationType',function(e){
		$(this).css("background-color","#d3d3d3");
		if($("."+previous_clicked_classname).hasClass('isAnnimated'))
	{
		//alert("Dfsc");
		var name=$("."+previous_clicked_classname).data('animation_name');
		if($(this).hasClass(name))
		{
			
			$(this).css("background-color","#7ACEF4");
			$(this).data=('played',false);

		}
	}
		if($("."+previous_clicked_classname).hasClass("animated"))
		{	//alert("Dfsc");
			$("."+previous_clicked_classname).removeClass("animated");
			if($("."+previous_clicked_classname).hasClass($("."+previous_clicked_classname).data('animation_playing')))
				("."+previous_clicked_classname).removeClass($("."+previous_clicked_classname).data('animation_playing'));
			$("."+previous_clicked_classname).data('animation_playing','none');
			//alert("dddd");

		}
		//alert("eedd");
	if($("."+previous_clicked_classname).hasClass('isAnnimated'))
	{
		//alert("Dfsc");
		var name=$("."+previous_clicked_classname).data('animation_name');
		if($(this).hasClass(name))
		{
			
			$(this).css("background-color","#7ACEF4");
			$(this).data=('played',false);

		}
			//alert("dddd");
		
		else
		{	//alert("eedd");
			$(this).css("background-color","#d3d3d3");}

	}
	else
	{
		//alert("dddd");
		$(this).css("background-color","#d3d3d3");
	}


	});

$(document).on('mouseenter', '.pulse',function(e){
	$("."+previous_clicked_classname).data('animation_playing','pulse');
	$("."+previous_clicked_classname).animateCss('pulse');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.bounceIn',function(e){
	$("."+previous_clicked_classname).data('animation_playing','bounceIn');
	$("."+previous_clicked_classname).animateCss('bounceIn');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.fadeIn',function(e){
	$("."+previous_clicked_classname).data('animation_playing','fadeIn');
	$("."+previous_clicked_classname).animateCss('fadeIn');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.rollIn',function(e){
	$("."+previous_clicked_classname).data('animation_playing','rollIn');
	$("."+previous_clicked_classname).animateCss('rollIn');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.zoomIn',function(e){
	$("."+previous_clicked_classname).data('animation_playing','zoomIn');
	$("."+previous_clicked_classname).animateCss('zoomIn');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.slideInLeft',function(e){
	$("."+previous_clicked_classname).data('animation_playing','slideInLeft');
	$("."+previous_clicked_classname).animateCss('slideInLeft');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.slideInRight',function(e){
	$("."+previous_clicked_classname).data('animation_playing','slideInRight');
	$("."+previous_clicked_classname).animateCss('slideInRight');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.flipInX',function(e){
	$("."+previous_clicked_classname).data('animation_playing','flipInX');
	$("."+previous_clicked_classname).animateCss('flipInX');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.flipInY',function(e){
	$("."+previous_clicked_classname).data('animation_playing','flipInY');
	$("."+previous_clicked_classname).animateCss('flipInY');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.lightSpeedIn',function(e){
	$("."+previous_clicked_classname).data('animation_playing','lightSpeedIn');
	$("."+previous_clicked_classname).animateCss('lightSpeedIn');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.shake',function(e){
	$("."+previous_clicked_classname).data('animation_playing','shake');
	$("."+previous_clicked_classname).animateCss('shake');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.swing',function(e){
	$("."+previous_clicked_classname).data('animation_playing','swing');
	$("."+previous_clicked_classname).animateCss('swing');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.rubberBand',function(e){
	$("."+previous_clicked_classname).data('animation_playing','rubberBand');
	$("."+previous_clicked_classname).animateCss('rubberBand');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.wobble',function(e){
	$("."+previous_clicked_classname).data('animation_playing','wobble');
	$("."+previous_clicked_classname).animateCss('wobble');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.jello',function(e){
	$("."+previous_clicked_classname).data('animation_playing','jello');
	$("."+previous_clicked_classname).animateCss('jello');
	e.stopPropogation();

	});


$(document).on('click', '.none',function(e){
	$("."+previous_clicked_classname).data('animation_name','none');
	$("."+previous_clicked_classname).addClass('isAnnimated');
	$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");


	e.stopPropogation();

	});

$(document).on('click', '.pulse',function(e){
	$("."+previous_clicked_classname).data('animation_name','pulse');
	$("."+previous_clicked_classname).addClass('isAnnimated');
	$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");


	e.stopPropogation();

	});
$(document).on('click', '.bounceIn',function(e){
	$("."+previous_clicked_classname).data('animation_name','bounceIn');
		$("."+previous_clicked_classname).addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.fadeIn',function(e){
	$("."+previous_clicked_classname).data('animation_name','fadeIn');
		$("."+previous_clicked_classname).addClass('isAnnimated');
	$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.rollIn',function(e){
	$("."+previous_clicked_classname).data('animation_name','rollIn');
		$("."+previous_clicked_classname).addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.zoomIn',function(e){
	$("."+previous_clicked_classname).data('animation_name','zoomIn');
		$("."+previous_clicked_classname).addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.slideInLeft',function(e){
	$("."+previous_clicked_classname).data('animation_name','slideInLeft');
		$("."+previous_clicked_classname).addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.slideInRight',function(e){
	$("."+previous_clicked_classname).data('animation_name','slideInRight');
		$("."+previous_clicked_classname).addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.flipInX',function(e){
	$("."+previous_clicked_classname).data('animation_name','flipInX');
		$("."+previous_clicked_classname).addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.flipInY',function(e){
	$("."+previous_clicked_classname).data('animation_name','flipInY');
		$("."+previous_clicked_classname).addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.lightSpeedIn',function(e){
	$("."+previous_clicked_classname).data('animation_name','lightSpeedIn');
		$("."+previous_clicked_classname).addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.shake',function(e){
	$("."+previous_clicked_classname).data('animation_name','shake');
		$("."+previous_clicked_classname).addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.swing',function(e){
	$("."+previous_clicked_classname).data('animation_name','swing');
		$("."+previous_clicked_classname).addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.rubberBand',function(e){
	$("."+previous_clicked_classname).data('animation_name','rubberBand');
		$("."+previous_clicked_classname).addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.wobble',function(e){
	$("."+previous_clicked_classname).data('animation_name','wobble');
		$("."+previous_clicked_classname).addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.jello',function(e){
	$("."+previous_clicked_classname).data('animation_name','jello');
		$("."+previous_clicked_classname).addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});



$(window).scroll(function() {
			//alert("vs");

		$('.isAnnimated').each(function(){
					//alert("vs");
		if(($(this).hasClass('animationOnlyOnce') && !$(this).data('hasAnimationHappened')) || !$(this).hasClass('animationOnlyOnce'))	
		{		
		//	$("."+previous_clicked_classname).addClass("animationOnlyOnce");
  		//$("."+previous_clicked_classname).data("hasAnimationHappened",false);
			var imagePos = $(this).offset().top;
									//alert(imagePos);

			var topOfWindow = $(window).scrollTop();

			//alert(topOfWindow);
				if ((imagePos < topOfWindow+800)&&(imagePos > topOfWindow)&&(!$(this).data('played'))) {
							//alert("vs");	
						if($(this).data('animation_name')!='none')
					{	var name=$(this).data('animation_name')	;
						$(this).animateCss(name);
							$(this).data('played',true);
							//alert("dassd");
					}
				}
				if((imagePos > topOfWindow+800)||(imagePos < topOfWindow))
									$(this).data('played',false);

				if($(this).hasClass('animationOnlyOnce'))
				{	
					//alert($(this).data('hasAnimationHappened'));
					$(this).data("hasAnimationHappened",true);	
				}

			}

		});
	});

// $(window).scroll(function() {
// 		$('.isAnnimated').each(function(){
// 		var imagePos = $(this).offset().top;

// 		var topOfWindow = $(window).scrollTop();
// 			if (imagePos < topOfWindow+400) {
// 				alert("kk");
// 			}
// 		});
// 	});

	
	$('.Rectangular-Box').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});

	$('.Rectangular-Box').mouseenter(function(){
		

    	$(".text-option-button").remove();
    	$(".text-option-edit2").remove();
			var box='<div class="'+mm+' rectangular-box" contenteditable="true" style=" position:absolute;top:'+y+'px;left:'+x+'px;height:50px;width:75px;border-style: solid;border-width: 2px;opacity:1;box-shadow: 0px 0px 0px 0px"></div>';
	$("body").append(box);
	$("."+mm).draggable().resizable();
	
	});

	$('.Rectangular-Box').mouseleave(function(){
	if($('.Rectangular-Box').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});




		$("#bg").click(function(){
		$("#bg").change(function(){
			$("body").css("background-color",$("#bg").val());
		});
	});
		$(".bgcolor").click(function(){
			$("#bg").trigger("click");
		});


		 
    $("#fileinput1").change(function(){
    	if(this.files && this.files[0]){
    		var reader=new FileReader();
    		reader.onload=imageIsLoaded1;
    		reader.readAsDataURL(this.files[0]);
    	}
    });

		function imageIsLoaded1(e){
			$('body').css('background-image','url("'+e.target.result+'")');
		};
		$("#bgimage").click(function(){
			$("#fileinput1").click();
		});

var x=300,y=300,mn=100;

		$("#imgupload").click(function(){
					$("#fileinput2").click();
				});

		 $("#fileinput2").click(function(){
		 	var special=1;
	   		 $("#fileinput2").change(function(){	
	    			if(this.files && this.files[0] && special>0){
	    			var reader=new FileReader();
	    			reader.onload=function(e){
	    				var imag='<img src="'+e.target.result+'" class="'+mn+'uploadedimage" alt="sorry!image not found" style="cursor:move;width:200px;height:200px;position:absolute;top:'+x+'px;left:'+y+'px">';
						$("body").append(imag);
						$("."+mn+"uploadedimage").resizable({ghost:true}).parent().draggable();
						x=x+100;
						y=y+100;
						mn=mn+1;
						special--;
	    			};
	    			reader.readAsDataURL(this.files[0]);
	    			}
	   		 });
		});

		
$("#urlimage2submit").click(function(){
	var userurl=prompt("Enter URl of Image","");
	if(userurl!=null){
	var imag='<img src="'+userurl+'" class="'+mn+'urlimage" style="cursor:move;position:absolute;top:'+y+'px;left:'+x+'px;width:100px;height:100px;">'
	//'<img src=$("#urlimage2").val() class="'+mm+'" alt="" style="position:absolute;top:'+y+'px;left:'+x+'px;" width="50" height="50">';
	$("body").append(imag);
	$("."+mn+"urlimage").resizable({ghost:true}).parent().draggable();
//$("."+mm).draggable();
	x=x+50;
	y=y+50;
	mn=mn+1;
}
	return;
});

function  getId(url) {
	var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}
var xx=100;
	var yy=200;
	var mp=1000;


$("#youtube").click(function(){
	
	var videourl=prompt("Enter the URL of the video","");
	if(videourl!=null){
	var videoid=getId(videourl);
	var frame='<div class="'+mp+'youtube" style="position:absolute;top:'+xx+'px;left:'+yy+'px;width:420;height:315;"><iframe src="https://www.youtube.com/embed/'+videoid+'" style="width:95%;height:95%;" frameborder="0" allowfullscreen></iframe>'
	$("body").append(frame);
	$("."+mp+"youtube").draggable().resizable();
xx=xx+50;
yy=yy+50;
mp=mp+1;
}
});
$("#fb-video").click(function(){

	var fbvideo=prompt("Enter the embed code you have copied","");
	if(fbvideo!=null){
		var dim='<div class="'+mn+'fb"></div>'
		$("body").append(dim);
		$("."+mn+"fb").html(fbvideo);
	    $("."+mn+"fb").draggable().resizable();
	    mn=mn+1;
	}
	return;
});

});