var x=500;
var y=400;
var mm=-1;


$('.vert-menu').click(function(){
		$(this).data=('clicked',true);
		x=x+50;
		y=y+50;
		mm=mm-1;
	});

	$('.vert-menu').mouseenter(function(){
		
			var vert_menu='<div class="'+mm+' draggable"  style="font-family:verdana; font-weight: normal; font-size: 15px; position:absolute;top:'+y+'px;left:'+x+'px;"><h4 contenteditable=tRuE style="display:block; height:90%; width:95%;font-weight: normal;overflow:auto;">\
  This is a heading</h4></div>';
	$("body").append(vert_menu);
		$("."+mm).draggable({cancel: "h4"} ).resizable();

	
	});

	$('.vert-menu').mouseleave(function(){
	if($('.vert-menu').data('clicked'))
	{
		$(this).data=('clicked',false);
	}
	else{
	
		$("."+mm).remove();

	
	}
	});

