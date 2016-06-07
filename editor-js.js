$(document).ready(function(){

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
		
			var text_large_heading_text='<div class="'+mm+'" contenteditable="true" style="position:absolute;top:'+y+'px;left:'+x+'px;"><h2>\
  This is a heading</h2></div>';
	$("body").append(text_large_heading_text);
		$("."+mm).draggable({cancel: "h2"} );

	//$("."+mm).draggable();

	
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
		
			var text_small_heading_text='<div class="'+mm+' draggable" contenteditable="true" style="position:absolute;top:'+y+'px;left:'+x+'px;"><h4>\
  This is a heading</h4></div>';
	$("body").append(text_small_heading_text);
		$("."+mm).draggable({cancel: "h4"} );

	
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

	$('.text-large-paragraph').mouseenter(function(){
		
			var text_large_paragraph_text='<div class="'+mm+'" contenteditable="true" style="position:absolute;top:'+y+'px;left:'+x+'px;font-size:110%"><p>\
  This is a paragraph</p></div>';
	$("body").append(text_large_paragraph_text);
	$("."+mm).draggable({cancel: "p"} );
	
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
		alert($('.0').html());

	});

	$('.text-small-paragraph').mouseenter(function(){
		
			var text_small_paragraph_text='<div class="'+mm+'" contenteditable="true" style="position:absolute;top:'+y+'px;left:'+x+'px;font-size:80%"><p>\
  This is a paragraph</p></div>';
	$("body").append(text_small_paragraph_text);
		$("."+mm).draggable({cancel: "p"} );

	
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
  	//	alert($('.text-option-button').data('clicked'));
  //	   if(text_option_button_data)
  //	   { text_option_button_data=false	;}
  //	alert("DFASfc");
    if(text_option_button_data){
    	$(".text-option-button").remove();
    	$(".text-option-edit2").remove();
    	
    	text_option_button_data=false	;

}
  }
});
			var text_option_button_data=false;


$(document).on('click', 'p',function(e){
		//alert("ADca");
		//var pos=$('this').position();
		//alert(pos.top);
		if(!text_option_button_data){
			text_option_button_data=true;
		//	alert(text_option_button_data);
		var button_group='<div class="btn-group text-option-button draggable" style="opacity:0.9;position:absolute;top:300px;right:'+(400)+'px;">\
  <button type="button" class="btn btn-primary text-option-edit draggable">Edit</button>\
  <div class="btn-group">\
    <button type="button" class="btn btn-primary dropdown-toggle text-option-animate draggable" data-toggle="dropdown" >\
    Animate <span class="caret"></span></button>\
    <ul class="dropdown-menu" role="menu">\
      <li><a href="#">Tablet</a></li>\
      <li><a href="#">Smartphone</a></li>\
    </ul>\
  </div>\
</div>';
$("body").append(button_group);
$('.btn-group').draggable({cancel:false});
//$('.text-option-move').draggable({cancel:false});
	//$(".0").draggable( "option", "handle", ".text-option-move2" );

//$(".text-option-move2").draggable();

e.stopPropogation();
}

	});
$(document).on('click', 'h2',function(e){
		//alert("ADca");
		//var pos=$('this').position();
		//alert(pos.top);
		if(!text_option_button_data){
			text_option_button_data=true;
		//	alert(text_option_button_data);
		var button_group='<div class="btn-group text-option-button draggable" style="opacity:0.9;position:absolute;top:300px;right:'+(400)+'px;">\
  <button type="button" class="btn btn-primary text-option-edit draggable">Edit</button>\
  <div class="btn-group">\
    <button type="button" class="btn btn-primary dropdown-toggle text-option-animate draggable" data-toggle="dropdown" >\
    Animate <span class="caret"></span></button>\
    <ul class="dropdown-menu" role="menu">\
      <li><a href="#">Tablet</a></li>\
      <li><a href="#">Smartphone</a></li>\
    </ul>\
  </div>\
</div>';
$("body").append(button_group);
$('.btn-group').draggable({cancel:false});
//$('.text-option-move').draggable({cancel:false});
	//$(".0").draggable( "option", "handle", ".text-option-move2" );

//$(".text-option-move2").draggable();

e.stopPropogation();
}

	});
$(document).on('click', 'h4',function(e){
		//alert("ADca");
		//var pos=$('this').position();
		//alert(pos.top);
		if(!text_option_button_data){
			text_option_button_data=true;
		//	alert(text_option_button_data);
		var button_group='<div class="btn-group text-option-button draggable" style="opacity:0.9;position:absolute;top:300px;right:'+(400)+'px;">\
  <button type="button" class="btn btn-primary text-option-edit draggable">Edit</button>\
  <div class="btn-group">\
    <button type="button" class="btn btn-primary dropdown-toggle text-option-animate draggable" data-toggle="dropdown" >\
    Animate <span class="caret"></span></button>\
    <ul class="dropdown-menu" role="menu">\
      <li><a href="#">Tablet</a></li>\
      <li><a href="#">Smartphone</a></li>\
    </ul>\
  </div>\
</div>';
$("body").append(button_group);
$('.btn-group').draggable({cancel:false});
//$('.text-option-move').draggable({cancel:false});
	//$(".0").draggable( "option", "handle", ".text-option-move2" );

//$(".text-option-move2").draggable();

e.stopPropogation();
}

	});


   // $(function() {$(".draggable").draggable();});
 // $('.dropdown-toggle').dropdown();
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
 	var text='<input type="color" class="text-option-Font-color-select" style="position:absolute;top:'+(300)+'px;right:'+(400)+'px;">';
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
	//alert("DFASfc");
	var button_group='<div class="btn-group text-option-edit2" style="opacity:0.9;position:absolute;top:'+(300)+'px;right:'+(400)+'px;">\
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

//function font_family(font_name)
//{
//	alert("fa");
//	document.execCommand('fontName',false,font_name);
	
//}















	$('.Bullet').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm+1;
	});

	$('.Bullet').mouseenter(function(){
		
			var Bullet_text='<div class="'+mm+'" contenteditable="true" style="position:absolute;top:'+y+'px;left:'+x+'px;"><ul>\
  <li>First item</li>\
  <li>Second item</li>\
  <li>Third item</li>\
</ul></div>';
	$("body").append(Bullet_text);
	
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
	
	
	


});