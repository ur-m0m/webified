$(document).ready(function(){


var x=400;
var y=300;
	var body_has_bgimage=false;	
		$("#bg").change(function(){
			$("body").css("background-color",$("#bg").val());
		});
	
		$(".bgcolor").click(function(){
			$("#bg").trigger("click");
		});

var bgoinputopacity_seen=0;

$(document).on('click',function(e){
	
	var click_x=e.pageX,click_y=e.pageY;
		$(".editbg").remove();
	if(!$(e.target).closest(".imagediv").length && !$(e.target).closest(".icondiv").length && !$(e.target).is(".fbviddiv") && !$(e.target).is(".youtubeviddiv") && !$(e.target).closest("p").length && !$(e.target).closest("h2").length && !$(e.target).closest("h4").length && !$(e.target).closest(".list").length && !$(e.target).closest(".rectangular-box").length && body_has_bgimage){
		var bgoptions='<div class="btn-group editbg" style="position:absolute;left:'+click_x+'px;top:'+click_y+'px;">'+		
		'<button class="btn btn-primary position-bgimage">Background Position</button>'+
		'<div class="dropdown">'+
		'<button class="btn btn-primary dropdown-toggle attach-bgimage" data-toggle="dropdown">Background Attachment<span class="caret"></span></button>'+
		'<ul class="dropdown-menu" role="menu">'+
		'<li><a href="#" class="fixed-bg">Fixed</a></li>'+
		'<li><a href="#" class="scroll-bg">Default</a></li>'+	
		'</ul></div>'+	
		'<div class="dropdown">'+
		'<button class="btn btn-primary dropdown-toggle size-bgimage" data-toggle="dropdown">Background Size<span class="caret"></span></button>'+
		'<ul class="dropdown-menu" role="menu">'+
		'<li><a href="#" class="cover-bgsize">Cover</a></li>'+
		'<li><a href="#" class="contain-bgsize">Contain</a></li>'+
		'<li><a href="#" class="auto-bgsize">Default</a></li>'+
		'<li><a href="#" class="input-bgsize">Give Input</a></li>'+
		'</ul></div>'+/**/
		'<div class="dropdown">'+
		'<button class="btn btn-primary dropdown-toggle repeat-bgimage" data-toggle="dropdown">background Repeat<span class="caret"></span></button>'+
		'<ul class="dropdown-menu" role="menu">'+
		'<li><a href="#" class="repeat-both">Repeat-x&y</a></li>'+
		'<li><a href="#" class="repeat-x">Repeat-x</a></li>'+
		'<li><a href="#" class="repeat-y">Repeat-y</a></li>'+
		'<li><a href="#" class="no-repeat">No repeat</a></li>'+
		'</ul>'+
		'</div>'+
		'<button class="btn btn-primary delete-bgimage"><i class="fa fa-trash-o"></i>  Delete Image</button>'+
		'</div>';
		$("body").append(bgoptions);
	}
});
$(document).on('click','.attach-bgimage',function(e){
	e.stopPropogation();
});
$(document).on('click','.fixed-bg',function(e){
	$("body").css('background-attachment','fixed');
	e.preventDefault();e.stopPropogation();
});
$(document).on('click','.scroll-bg',function(e){
	$("body").css('background-attachment','scroll');
	e.preventDefault();e.stopPropogation();
});
$(document).on('click','.size-bgimage',function(e){
	e.stopPropogation();
});
$(document).on('click','.cover-bgsize',function(e){
	$("body").css('background-size','cover');
	e.preventDefault();e.stopPropogation();
});
$(document).on('click','.contain-bgsize',function(e){
	$("body").css('background-size','contain');
	e.preventDefault();e.stopPropogation();
});
$(document).on('click','.auto-bgsize',function(e){
	$("body").css('background-size','auto');
	e.preventDefault();e.stopPropogation();
});/**/
var dialog0=$(".modal-input-for-bg-sizes").dialog({
	autoOpen:false,
	show:{
		effect:"blind",
		duration:1000
	},
	hide:{
		effect:'explode',
		duration:1000
	},
	width:350,
	height:350,
	modal:true,
	buttons:{
		//"OK":size_the_bgimage,
		Cancel:function(){
			dialog0.dialog("close");
		}
	},
	close:function(){
		form0[0].reset();
	}
});
var form0=dialog0.find("form").on('submit',function(e){
	e.preventDefault();
	size_the_bgimage();
});

$(document).on('click','.input-bgsize',function(e){
	//var input_manual='<div class="for-input_manual"><p>Type in x and y,for the size of background image would be x% of total width and y% of total height</p>'+
	dialog0.dialog("open");
	e.preventDefault();e.stopPropogation();
});
function size_the_bgimage(){
	$("body").css('background-size',$(".x-input-for-bg-size").val()+'% '+$(".y-input-for-bg-size").val()+'%');
	dialog0.dialog("close");
}

$(document).on('click','.delete-bgimage',function(e){
	$("body").css('background-image','');
	$('.editbg').remove();
	body_has_bgimage=false;
	e.stopPropogation();
});
$(document).on('click','.repeat-bgimage',function(e){
	e.stopPropogation();
});
		 
$(document).on('click','.repeat-both',function(e){
	$("body").css('background-repeat','repeat');
	e.preventDefault();e.stopPropogation();
});
$(document).on('click','.repeat-x',function(e){
	$("body").css('background-repeat','repeat-x');
	e.preventDefault();e.stopPropogation();
});
$(document).on('click','.repeat-y',function(e){
	$("body").css('background-repeat','repeat-y');
	e.preventDefault();e.stopPropogation();
});
$(document).on('click','.no-repeat',function(e){
	$("body").css('background-repeat','no-repeat');
	e.preventDefault();e.stopPropogation();
});
//var  appendedoptionsforbgpos_seen=false;
/*var dialog9=$(".modal-input-for-bg-pos").dialog({
	autoOpen:false,
	width:350,
	height:350,
	modal:true,
	buttons:{
		"OK":pos_the_bgimage,
		Cancel:function(){
			dialog9.dialog("close");
		}
	},
	close:function(){
		form9[0].reset();
	}
});
var form9=dialog9.find("form").on('submit',function(e){
	e.preventDefault();
	pos_the_bgimage();
});
$(document).on('click','.position-bgimage',function(e){
	/*if(!appendedoptionsforbgpos_seen){
		var appended_options_pos='<div class="just-for-stoppropogation" style="background:black;color:white;"><p>Type in x and y,for the position of background-image would be x% from left and y% from top.</p>'+
		'<label>% from left:</label><input type="number" value="0" placeholder="ex: 50" min="0" max="100" class="left-percentbgimage" style="color:black;"><br>'+
		'<label>% from top:</label><input type="number" value="0" placeholder="ex: 50" min="0" max="100" class="top-percentbgimage" style="color:black;"></div>';
		$(".editbg").append(appended_options_pos);
		 appendedoptionsforbgpos_seen=true;
	}
	dialog9.dialog("open");	 	
	e.stopPropogation();
});
function pos_the_bgimage{
	$("body").css('background-position',$(".left-percentbgimage").val()+'% '+$(".top-percentbgimage").val()+'%');
	dialog9.dialog("close");	
}*/
var dialog9=$(".modal-input-for-bg-pos").dialog({
	autoOpen:false,
	show:{
		effect:"blind",
		duration:1000
	},
	hide:{
		effect:'explode',
		duration:1000
	},
	width:350,
	height:350,
	modal:true,
	buttons:{
		//"OK":pos_the_bgimage,
		Cancel:function(){
			dialog9.dialog("close");
		}
	},
	close:function(){
		form9[0].reset();
	}
});
var form9=dialog9.find("form").on('submit',function(e){
	e.preventDefault();
	pos_the_bgimage();
});

$(document).on('click','.position-bgimage',function(e){
	//var input_manual='<div class="for-input_manual"><p>Type in x and y,for the size of background image would be x% of total width and y% of total height</p>'+
	dialog9.dialog("open");
	e.stopPropogation();
});
function pos_the_bgimage(){
	$("body").css('background-position',$(".x-input-for-bg-pos").val()+'% '+$(".y-input-for-bg-pos").val()+'%');
	dialog9.dialog("close");
}
/*$(document).on('click','.left-percentbgimage',function(e){
	e.stopPropogation();
});
$(document).on('change','.left-percentbgimage',function(e){
	$("body").css('background-position',$('.left-percentbgimage').val()+'% '+$('.top-percentbgimage').val()+'%');
});
$(document).on('click','.just-for-stoppropogation',function(e){
	e.stopPropogation();
});*/
/*$(document).on('click','.top-percentbgimage',function(e){
	e.stopPropogation();
});
$(document).on('change','.top-percentbgimage',function(e){
	$("body").css('background-position',$('.left-percentbgimage').val()+'%'+' '+$('.top-percentbgimage').val()+'%');

});*/


    $("#fileinput1").change(function(){
    	if(this.files && this.files[0]){
    		var reader=new FileReader();
    		reader.onload=imageIsLoadedforbg;
    		reader.readAsDataURL(this.files[0]);
    	}
    });

		function imageIsLoadedforbg(e){
			$('body').css('background-image','url("'+e.target.result+'")');
			body_has_bgimage=true;
		}
		$("#bgimage").click(function(){
			$("#fileinput1").click();
		});

/*$("#urlbgimage").click(function(){
	var urlbg=prompt("Enter a URL","");
	if(urlbg!=null && urlbg!=""){
		$("body").css('background-image','url("'+urlbg+'")');
		body_has_bgimage=true;
	}
});*/

$("#urlbgimage").click(function(){
	dialog1.dialog("open");
});	

var dialog1=$(".modal-input-for-bgimage").dialog({
	autoOpen:false,
	show:{
		effect:"blind",
		duration:1000
	},
	hide:{
		effect:'explode',
		duration:1000
	},
	height:250,
	width:350,
	modal:true,
	buttons:{
		//"OK": addurlbgimage,
		Cancel:function(){
			dialog1.dialog("close");
		}
	},
	close:function(){
		form1[0].reset();
	}
});
var form1=dialog1.find("form").on('submit',function(e){
	e.preventDefault();
	addurlbgimage();
});
function addurlbgimage(){
	$("body").css('background','url("'+$(".url-input-for-bg-image").val()+'")');
	dialog1.dialog("close");
	body_has_bgimage=true;
}

	
		$("#imgupload").click(function(){
					$("#fileinput2").click();
				});

	   		 $("#fileinput2").change(function(){	
	    			for(var i=0;i<this.files.length;i++){
	    			var reader=new FileReader();
	    			reader.onload=imageisloaded;
	    			reader.readAsDataURL(this.files[i]);
	    			}
	   		 });
		function imageisloaded(e){
	    				var imag='<div class="imagediv" style="cursor:move;width:200px;height:200px;position:absolute;top:'+x+'px;left:'+y+'px">'+	
	    				'<a href="#" class="imageanchor"><img src="'+e.target.result+'" class="image" alt="sorry!image not found" style="width:100%;height:100%;opacity:1;"></a>'+	
	    				'<a class="duplicate-anchor" href="#"></a>'+
	   					'<div class="btn-group editimage" style="display:none;">'+
	    				'<button class="btn btn-primary opacity-image">Change Opacity<span class="caret"></span></button>'+
	    				'<div class="dropdown shape-imagedrop">'+
						'<button class="btn btn-primary dropdown-toggle shape-image" data-toggle="dropdown">Shape<span class="caret"></span></button>'+
						'<ul class="dropdown-menu" role="menu">'+
						'<li><a href="#" class="roundedim">Rounded</a></li>'+
						'<li><a href="#" class="circleim">Circle</a></li>'+
						'<li><a href="#" class="thumbnailim">Thumbnail</a></li>'+
						'<li><a href="#" class="normalim">Normal</a></li>'+
						'</ul></div>'+
						'<div class="dropdown animate-drop">'+
						'<button class="btn btn-primary dropdown-toggle animateadd" data-toggle="dropdown">Animate<span class="caret"></span></button>'+
						'<ul class="dropdown-menu scrollable-menu" role="menu">'+
						'<li><a href="#" class="animate_type">Animation Types</a></li>'+
						'<li><a href="#" class="advance_animate">Advanced Animation Options</a></li>'+	
						'</ul></div>'+
						'<button class="btn btn-primary link-image">Hyperlink<span class="caret"></span></button>'+
	    				'<button class="btn btn-primary delete-image"><i class="fa fa-trash-o"></i>  Delete Image</button>'+
	    				'</div>'+
	    				'</div>';
						$("body").append(imag);
						$(".imagediv").draggable().resizable();
						x=x+100;
						y=y+100;
	    			}

		$("#urlimage2submit").click(function(){
			dialog2.dialog("open");
		});
		var dialog2=$(".modal-input-for-generalimage").dialog({
			autoOpen:false,
			show:{
				effect:"blind",
				duration:1000
			},
			hide:{
				effect:'explode',
				duration:1000
			},
			height:300,
			width:350,
			modal:true,
			buttons:{
				"OK":function(e){
					//e.preventDefault();			
					addurlgeneralimage();
				},
				Cancel:function(){
					dialog2.dialog("close");
				}
			},
			close:function(){
				form2[0].reset();
			}
		});
		var form2=dialog2.find("form").on('submit',function(e){
			e.preventDefault();
			addurlgeneralimage();
		});
		function addurlgeneralimage(){
			var imag='<div class="imagediv" style="cursor:move;position:absolute;top:'+y+'px;left:'+x+'px;width:100px;height:100px;"><a href="#" style="cursor:move;" class="imageanchor"><img class="image" alt="Sorry!Image not found" src="'+$(".-input-for-general-image").val()+'" style="width:100%;height:100%;"></a>'+
			'<a class="duplicate-anchor" href="#" style="cursor:move;"></a>'+
			'<div class="btn-group editimage" style="display:none;">'+
			'<button class="btn btn-primary opacity-image">Change Opacity<span class="caret"></span></button>'+
			'<div class="dropdown shape-imagedrop">'+
			'<button class="btn btn-primary dropdown-toggle shape-image" data-toggle="dropdown">Shape<span class="caret"></span></button>'+
			'<ul class="dropdown-menu" role="menu">'+
			'<li><a href="#" class="roundedim">Rounded</a></li>'+
			'<li><a href="#" class="circleim">Circle</a></li>'+
			'<li><a href="#" class="thumbnailim">Thumbnail</a></li>'+
			'<li><a href="#" class="normalim">Normal</a></li>'+
			'</ul></div>'+
			'<div class="dropdown animate-drop">'+
			'<button class="btn btn-primary dropdown-toggle animateadd" data-toggle="dropdown">Animate<span class="caret"></span></button>'+
			'<ul class="dropdown-menu" role="menu">'+
			'<li><a href="#" class="animate_type">Animation Types</a></li>'+
			'<li><a href="#" class="advance_animate">Advanced Animation Options</a></li>'+	
			'</ul></div>'+
			'<button class="btn btn-primary link-image">Hyperlink<span class="caret"></span></button>'+
			'<button class="btn btn-primary delete-image"><i class="fa fa-trash-o"></i>  Delete Image</button>'+
			'</div>'+
			'</div>';
			$("body").append(imag);
			$(".imagediv").draggable().resizable();
			x=x+50;
			y=y+50;
			dialog2.dialog("close");
			return;
		}			


		//latest
		var opacity_input_seen=0;

		$(document).on('click','.imagediv',function(e){

			$(".just_clicked_animate").removeClass("just_clicked_animate");
			$(this).addClass("just_clicked_animate");
	
				$(".editimage").slideUp();
				$(this).children(".editimage").slideDown();
				if(opacity_input_seen==1){
					$(".opacity-image-quantity").remove();
					opacity_input_seen=0;
				}$(".editbg").remove();
			e.preventDefault();
			//e.stopPropogation();
		});
		$(document).on('click','.delete-image',function(){
			$(this).parent().parent().remove();
		});
		$(document).on('click','.opacity-image',function(e){
			if(opacity_input_seen==0){
			var inputOpacity='<input type="number" class="opacity-image-quantity" min="0" max="10" value="'+$(this).parent().siblings().children('.image').css('opacity')*10+'">';
			$(".editimage").append(inputOpacity);
			opacity_input_seen=1;
			}
			e.stopPropogation();
		});
		$(document).on('click','.opacity-image-quantity',function(e){
			e.stopPropogation();
		});
		$(document).on('change','.opacity-image-quantity',function(e){
			$(this).parent().siblings().children('.image').css('opacity',$(this).val()/10);
		});
		$(document).on('click',function(e){
					if(!$(e.target).closest(".imagediv").length){
						$(".editimage").slideUp();
					}
		});

$(document).on('click','.shape-image',function(e){
	if(opacity_input_seen==1){
		$(".opacity-image-quantity").remove();
		opacity_input_seen=0;
	}	
	e.stopPropogation();
});
$(document).on('click','.animateadd',function(e){
	if(opacity_input_seen==1){
		$(".opacity-image-quantity").remove();
		opacity_input_seen=0;
	}
	e.stopPropogation();
});
var dialogl1=$(".modal_inputs_for_hyper").dialog({
	autoOpen:false,
	show:{
		effect:"blind",
		duration:1000
	},
	hide:{
		effect:'explode',
		duration:1000
	},
	width:350,
	height:350,
	modal:true,
	buttons:{
		Cancel:function(){
			dialogl1.dialog("close");
		}		
	},	
	close:function(){
		forml1[0].reset();
		$('.duplicate-anchor').removeClass('just_clicked_for_hyper');
	}
});
var forml1=dialogl1.find("form").on('submit',function(e){
	e.preventDefault();
	link_to_image();
});
$(document).on('click','.link-image',function(e){
	dialogl1.dialog("open");
	$(this).parent().siblings('.duplicate-anchor').addClass('just_clicked_for_hyper');
	e.stopPropogation();
});

function link_to_image(){
	if($('.url-for-hyperimage').val()!=""){
		$('.just_clicked_for_hyper').attr('href',$('.url-for-hyperimage').val());
	}	
	$('.just_clicked_for_hyper').attr('target',$('input[name="target"]:checked').val());
		
	$('.duplicate-anchor').removeClass('just_clicked_for_hyper');
	dialogl1.dialog("close");
}

$(document).on('mouseenter',".roundedim",function(){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-thumbnail');
	}
	$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-rounded');
}).on('mouseleave','.roundedim',function(){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-thumbnail');
	}	
	if(!$(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-rounded');
	}	
});
$(document).on('click',".roundedim",function(e){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('clicked-img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('clicked-img-thumbnail');
	}
	$(this).parent().parent().parent().parent().siblings().children('.image').addClass('clicked-img-rounded');
	e.preventDefault();e.stopPropogation();
});
$(document).on('mouseenter',".circleim",function(){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-thumbnail');
	}
	$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-circle');
}).on('mouseleave','.circleim',function(){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-thumbnail');
	}
	if(!$(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-circle');
	}
});
$(document).on('click',".circleim",function(e){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('clicked-img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('clicked-img-thumbnail');
	}	
	$(this).parent().parent().parent().parent().siblings().children('.image').addClass('clicked-img-circle');
	e.preventDefault();e.stopPropogation();
});
$(document).on('mouseenter',".thumbnailim",function(){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-circle');
	}
	$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-thumbnail');
}).on('mouseleave','.thumbnailim',function(){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-circle');
	}
	if(!$(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-thumbnail');
	}
});
$(document).on('click',".thumbnailim",function(e){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('clicked-img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('clicked-img-circle');
	}	
	$(this).parent().parent().parent().parent().siblings().children('.image').addClass('clicked-img-thumbnail');
	e.preventDefault();e.stopPropogation();
});

$(document).on('mouseenter',".normalim",function(e){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded') ){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('img-thumbnail');
	}
}).on('mouseleave','.normalim',function(e){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-circle');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').addClass('img-thumbnail');
	}
});
$(document).on('click',".normalim",function(e){
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-rounded')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('clicked-img-rounded');
	}
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-circle')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('clicked-img-circle');
	}	
	if($(this).parent().parent().parent().parent().siblings().children('.image').hasClass('clicked-img-thumbnail')){
		$(this).parent().parent().parent().parent().siblings().children('.image').removeClass('clicked-img-thumbnail');
	}
	e.preventDefault();e.stopPropogation();
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
	var mn=1;

var dialog3=$(".modal-input-for-youtube").dialog({
	autoOpen:false,
	show:{
		effect:"blind",
		duration:1000
	},
	hide:{
		effect:'explode',
		duration:1000
	},
	height:300,
	width:350,
	modal:true,
	buttons:{
		"OK":addurlyoutube,
		Cancel:function(){
			dialog3.dialog("close");
		}
	},
	close:function(){
		form3[0].reset();
	}
});
var form3=$(".modal-input-for-youtube").find("form");
form3.on('submit',function(e){
	e.preventDefault();
	addurlyoutube();
});

$("#youtube").click(function(){
	dialog3.dialog("open");
});

function addurlyoutube(){	
		var videoid=getId($(".url-input-for-youtube").val());
		var frame='<div class="youtubeviddiv" style="position:absolute;top:'+xx+'px;left:'+yy+'px;width:420;height:315;">'+
		'<iframe class="youtubevid" src="https://www.youtube.com/embed/'+videoid+'" style="width:90%;height:90%;" frameborder="0" allowfullscreen></iframe>'+
		'<div class="btn-group animated rollIn edityoutubevid" style="display:none;">'+
		'<button class="btn btn-primary delete-youtubevid"><i class="fa fa-trash-o"></i>  Delete Video</button>'+
		//'<button class="btn btn-primary change-youtubevid">Change Video</button>'+
		'</div>'+
		'</div>';
		$("body").append(frame);
		$(".youtubeviddiv").draggable().resizable();
		xx=xx+50;
		yy=yy+50;
		dialog3.dialog("close");
}

$(document).on('click',".youtubeviddiv",function(){
	$(".edityoutubevid").slideUp();
	$(this).children(".edityoutubevid").slideDown();
});
$(document).on('click',".delete-youtubevid",function(){
	$(this).parent().parent().remove();
});

/*var dialog4=$(".modal-input-for-change-youtube").dialog({
	autoOpen:false,
	height:300,
	width:350,
	modal:true,
	buttons:{
		"OK":addurlchangeyoutube,
		Cancel:function(){
			dialog4.dialog("close");
		}
	},
	close:function(){
		form4.reset();
	}
});
var form4=dialog4.find("form").on('submit',function(e){
	e.preventDefault();
	addurlchangeyoutube();
});


$(document).on('click',".change-youtubevid",function(e){
	dialog4.dialog("open");
	e.stopPropogation();
});
function addurlchangeyoutube(){
	var newvideoid=getId($(".url-input-for-change-youtube").val());
	//$(this).parent().siblings().attr('src',"https://www.youtube.com/embed/"+newvideoid);
	
	dialog4.dialog("close");
}*/
$(document).on('click',function(e){
	if(!$(e.target).is(".youtubeviddiv")){
		$(".edityoutubevid").slideUp();
	}
});


var fb_num=1;
$("#fb-video").click(function(){
		dialog5.dialog("open");
});
var dialog5=$(".modal-input-for-fb").dialog({
	autoOpen:false,
	show:{
		effect:"blind",
		duration:1000
	},
	hide:{
		effect:'explode',
		duration:1000
	},
	height:300,
	width:350,
	modal:true,
	buttons:{
		"OK":addfbvideo,
		Cancel:function(){
			dialog5.dialog("close");
		}
	},
	close:function(){
		form5[0].reset();
	}
});
var form5=dialog5.find("form").on('submit',function(e){
	e.preventDefault();
	addfbvideo();
});
function addfbvideo(){
		var dim='<div class="'+fb_num+'fb fbviddiv"></div>';
		$("body").append(dim);
		$("."+fb_num+"fb").html($(".url-input-for-fb").val()+'<br><br><div class="btn-group editfbvid" style="display:none;">'+
			//'<button class="btn btn-primary change-fbvid">Change Video</button>'+
			'<button class="btn btn-primary animated rotateIn delete-fbvid"><i class="fa fa-trash-o"></i>  Delete Video</button></div>');
	    $("."+fb_num+"fb").draggable();
	    $("."+fb_num+"fb").css('position','absolute');
	    fb_num++;
	    dialog5.dialog("close");
}

$(document).on('click',".fbviddiv",function(){
	$(".editfbvid").fadeOut();
	$(this).children(".editfbvid").fadeIn();
});
$(document).on('click',".delete-fbvid",function(){
	$(this).parent().parent().remove();
});
/*$(document).on('click',".change-fbvid",function(e){
	var newfbvideo=prompt("Enter the embed code of video","");
	if(newfbvideo!=null){
		newfbvideo=newfbvideo+'<br><br>'+
			'<div class="btn-group editfbvid" style="display:none;" >'+
			'<button class="btn btn-primary change-fbvid">Change Video</button>'+
			'<button class="btn btn-primary delete-fbvid"><i class="fa fa-trash-o"></i>  Delete Video</button>'+
			'</div>';
		$(this).parent().parent().html(newfbvideo);
	}
	e.stopPropogation();
});*/
$(document).on('click',function(e){
	if(!$(e.target).is(".fbviddiv")){
		$(".editfbvid").fadeOut();
	}
});
	
var dialogicon=$(".modal_input_for_icon").dialog({
	autoOpen:false,
	show:{
		effect:"blind",
		duration:1000
	},
	hide:{
		effect:'explode',
		duration:1000
	},
	modal:true,
	buttons:{
		"OK":addicon,
		Cancel:function(){
			dialogicon.dialog("close");
		}
	},
	close:function(){
		formicon[0].reset();
		$(".text_for_fa").show();
		$(".text_for_mi").hide();
	}
});
var formicon=$(".modal_input_for_icon").find("form");

formicon.on('submit',function(e){
	e.preventDefault();
	addicon();
});
$(".add_fa_for_social").click(function(){
	dialogicon.dialog("open");	
});

$("input[name='type_of_icon'][value='fa']").click(function(){
	$(".text_for_fa").show();
	$(".text_for_mi").hide();
});
$("input[name='type_of_icon'][value='material']").click(function(){
	$(".text_for_mi").show();
	$(".text_for_fa").hide();
});

function addicon(){
	
	if($("input[name='type_of_icon']:checked").val()=="fa" && $(".text_for_fa").val()!=""){
		var iconvar='<div class="icondiv" style="height:auto;width:auto; position:absolute; top:'+x+'px; left:'+y+'px;"><a href="#" class="iconanchor"><i class="iconic '+$(".text_for_fa").val()+'" style="font-size:30px;color:black;"></i></a>'+
	'<a class="duplicate-icon-anchor" href="#"></a>'+
	'<div class="btn-group editicon" style="display:none;">'+
	'<button class="btn btn-primary sizencolor-icon">Size and Color<span class="caret"></span></button>'+	
	'<div class="dropdown animate-drop">'+
	'<button class="btn btn-primary dropdown-toggle animateadd" data-toggle="dropdown">Animate<span class="caret"></span></button>'+
	'<ul class="dropdown-menu" role="menu">'+
	'<li><a href="#" class="animate_type">Animation Types</a></li>'+
	'<li><a href="#" class="advance_animate">Advanced Animation Options</a></li>'+	
	'</ul></div>'+
	'<button class="btn btn-primary link-icon">Hyperlink<span class="caret"></span></button>'+
	'<button class="btn btn-primary delete-icon"><i class="fa fa-trash-o"></i>  Delete Icon</button>'+
	'</div>'+
	'</div>';

	$("body").append(iconvar);
	$('.icondiv').css('width','50px');
	$('.icondiv').css('height','50px');
	$('.icondiv').draggable();
	}

	if($("input[name='type_of_icon']:checked").val()=="material" && $(".text_for_mi").val()!=""){
		var iconvar='<div class="icondiv" style="height:auto;width:auto; position:absolute; top:'+x+'px; left:'+y+'px;"><a href="#" class="iconanchor"><i class="iconic material-icons" style="color:black;font-size:30px;">'+$(".text_for_mi").val()+'</i></a>'+
	'<a class="duplicate-icon-anchor" href="#"></a>'+
	'<div class="btn-group editicon" style="display:none;">'+
	'<button class="btn btn-primary sizencolor-icon">Size and Color<span class="caret"></span></button>'+
	'<div class="dropdown animate-drop">'+
	'<button class="btn btn-primary dropdown-toggle animateadd" data-toggle="dropdown">Animate<span class="caret"></span></button>'+
	'<ul class="dropdown-menu" role="menu">'+
	'<li><a href="#" class="animate_type">Animation Types</a></li>'+
	'<li><a href="#" class="advance_animate">Advanced Animation Options</a></li>'+	
	'</ul></div>'+
	'<button class="btn btn-primary link-icon">Hyperlink<span class="caret"></span></button>'+
	'<button class="btn btn-primary delete-icon"><i class="fa fa-trash-o"></i>  Delete Icon</button>'+
	'</div>'+
	'</div>';

	$("body").append(iconvar);
	$('.icondiv').css('width','50px');
	$('.icondiv').css('height','50px');
	$('.icondiv').draggable();
	}
	dialogicon.dialog("close");
	return;
}
$(document).on('click','.icondiv',function(e){
	
	$(".just_clicked_animate").removeClass("just_clicked_animate");
	$(this).addClass("just_clicked_animate");

	$('.editicon').fadeOut();
	$(this).children('.editicon').fadeIn();
	$(".editbg").remove();
	e.preventDefault();
	//e.stopPropogation();
});
$(document).on('click','.delete-icon',function(){
	$(this).parent().parent().remove();
});	
$(document).on('click','.animate-icon',function(){
	e.stopPropogation();
});
$(document).on('click',function(e){
	if(!$(e.target).closest('.icondiv').length){
		$('.editicon').fadeOut();
	}
});
var dialogsnc=$(".modal_input_for_snc_icon").dialog({
	autoOpen:false,
	width:350,
	height:400,
	show:{
		effect:"blind",
		duration:1000
	},
	hide:{
		effect:'explode',
		duration:1000
	},
	modal:true,
	buttons:{
		"OK":sncicon,
		Cancel:function(){
			dialogsnc.dialog("close");
		}
	},
	close:function(){
		formsnc[0].reset();
		$('.iconanchor').removeClass('justclickedic');	
	}
});
var formsnc=$(".modal_input_for_snc_icon").find("form");
formsnc.on('submit',function(e){
	e.preventDefault();
	sncicon();
});
$(document).on('click','.sizencolor-icon',function(){
	dialogsnc.dialog("open");
	$(this).parent().siblings('.iconanchor').addClass('justclickedic');
});
function sncicon(){
	//if($(".size_for_icon").val()!=""){
		$('.justclickedic').children().css('font-size',$(".size_for_icon").val()+"px");
	//}
	$('.justclickedic').children().css('color',$(".color_for_icon").val());
	$('.iconanchor').removeClass('justclickedic');	
	dialogsnc.dialog("close");
}

var dialogl3=$(".modal_inputs_for_icon_hyper").dialog({
	autoOpen:false,
	show:{
		effect:"blind",
		duration:1000
	},
	hide:{
		effect:'explode',
		duration:1000
	},
	width:350,
	height:350,
	modal:true,
	buttons:{
		//"OK":function(e){
			//e.preventDefault();
			//link_to_urlimage();
		//}
		Cancel:function(){
			dialogl3.dialog("close");
		}
	},
	close:function(){
		forml3[0].reset();
		$('.duplicate-icon-anchor').removeClass('just_clicked_for_hyperic');
	}
});
var forml3=dialogl3.find("form").on('submit',function(e){
	e.preventDefault();
	link_to_icon();
});
$(document).on('click','.link-icon',function(e){
	$(this).parent().siblings('.duplicate-icon-anchor').addClass('just_clicked_for_hyperic');
	dialogl3.dialog("open");
	e.stopPropogation();
});
function link_to_icon(){
	if($('.url-for-hypericon').val()!=""){
		$('.just_clicked_for_hyperic').attr('href',$('.url-for-hypericon').val());
	}
	$('.just_clicked_for_hyperic').attr('target',$('input[name="target_icon"]:checked').val());
	$('.duplicate-icon-anchor').removeClass('just_clicked_for_hyperic');
	dialogl3.dialog("close");
}

/*$(".click_here_for_link").click(function(){
	var len=$('.imageanchor').length,i=0;		
		while(i<len){
			$($('.imageanchor')[i]).attr('href',$($('.imageanchor')[i]).siblings('.duplicate-anchor').attr('href'));
			$($('.imageanchor')[i]).attr('target',$($('.imageanchor')[i]).siblings('.duplicate-anchor').attr('target'));
			i++;
		}
		var lengt=$('.iconanchor').length,k=0;
		while(k<lengt){
			$($('.iconanchor')[k]).attr({
				'href':$('.duplicate-icon-anchor').eq(k).attr('href'),
				'target':$('.duplicate-icon-anchor').eq(k).attr('target')
			});
			k++;
		}
});*/

//Animations for Image and Icon.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var isAdvancedOption=false;
$.fn.extend({
    animateCss: function (animationName) {
    	//alert(isAdvancedOption);
        	if(isAdvancedOption)
        {	
        				//alert($(".just_clicked_animate").css("-webkit-animation-duration"));

        	/*$(".just_clicked_animate").data("-webkit-animation-duration",$(".just_clicked_animate").css("-webkit-animation-duration")); 
			$(".just_clicked_animate").data("-webkit-animation-delay",$(".just_clicked_animate").css("-webkit-animation-delay")); 
			$(".just_clicked_animate").data("-webkit-animation-iteration-count",$(".just_clicked_animate").css("-webkit-animation-iteration-count"));*/

			$(".just_clicked_animate").data("-webkit-animation-duration",$(".just_clicked_animate").css("-webkit-animation-duration")); 
			$(".just_clicked_animate").data("-webkit-animation-delay",$(".just_clicked_animate").css("-webkit-animation-delay")); 
			$(".just_clicked_animate").data("-webkit-animation-iteration-count",$(".just_clicked_animate").css("-webkit-animation-iteration-count"));

		}
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).data=('animationName',animationName);
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
        	if($(this).hasClass('animated'))
            {$(this).removeClass('animated');}
 			if($(this).hasClass(animationName))
            {$(this).removeClass(animationName);}
       // $(".just_clicked_animate").data('animation_playing','none');
        $(".just_clicked_animate").data('animation_playing','none');
        });
    }
});

$(document).on('click', '.advance_animate',function(e){
//alert("cd");
$(".box-option-button").remove();
$(".text-option-button").remove();
$(".editicon").fadeOut();
$(".editimage").slideUp();
var offset=$(".just_clicked_animate").offset();
var height=$(".just_clicked_animate").innerHeight();

isAdvancedOption=true;
$(".just_clicked_animate").animateCss($(".just_clicked_animate").data('animation_name'));

var text1='<div style="position:absolute;top:'+ (+offset.top + +"20" + +height) +'px;left:'+ (+offset.left - +"100") +'px;display:inline;" class="animation-advanced-options animation-advanced-options-duration">Animation-Duration : <input type="text" name="animate_advaced_duration" placeholder="Animation Duration :  '+$(".just_clicked_animate").data("-webkit-animation-duration")+'" class="animation-advanced-options-duration-select" style="width:150px;"></div>	';
var text2='<div style="position:absolute;top:'+ (+offset.top + +"60" + +height) +'px;left:'+ (+offset.left - +"100") +'px;display:inline;" class="animation-advanced-options animation-advanced-options-delay">Animation-Delay : <input type="text" name="animate_advaced_delay" placeholder="Animation Delay :  '+$(".just_clicked_animate").data("-webkit-animation-delay")+'" class="animation-advanced-options-delay-select" style="width:150px;"></div>	';
var text3='<div style="position:absolute;top:'+ (+offset.top + +"110" + +height) +'px;left:'+ (+offset.left - +"100") +'px;display:inline;" class="animation-advanced-options animation-advanced-options-iteration">Animation-Iteration-Count (type -1 for infinite) : <input type="text" name="animate_advaced_iteration" placeholder="Animation Iteration :  '+$(".just_clicked_animate").data("-webkit-animation-iteration-count")+'" class="animation-advanced-options-iteration-select" style="width:150px;"></div>	';
var text4='<div style="position:absolute;top:'+ (+offset.top + +"20" + +height) +'px;left:'+ (+offset.left - +"100") +'px;display:inline;" class="animation-advanced-options">You have not selected any animation for this element.<br>Select an animation type for advanced options.</div>'
var text5='<div style="position:absolute;top:'+ (+offset.top + +"160" + +height) +'px;left:'+ (+offset.left - +"100") +'px;display:inline;" class="animation-advanced-options animation-advanced-options-once"><input type="checkbox" name="onceAnimation" value="onceAnimation" class="animation-advanced-options-once-select">Animate only first time';


if($(".just_clicked_animate").hasClass('isAnnimated'))
$("body").append(text1,text2,text3,text5);
else
$("body").append(text4);

if($(".just_clicked_animate").hasClass("animationOnlyOnce"))
$('.animation-advanced-options-once-select').prop('checked', true);

isAdvancedOption=false;

//$(".just_clicked_animate").css("-webkit-animation-duration","3s")
e.preventDefault();e.stopPropogation();
});
$(document).on('click',function(e){
	if(!$(e.target).closest('.animation-advanced-options').length && !$(e.target).closest(".just_clicked_animate").length){
		$('.animation-advanced-options').remove();
		isAdvancedOption=false;
	}

});

$(document).on('click', '.animation-advanced-options-duration-select',function(e){
	 	e.stopPropogation();

});

$(document).on('change', '.animation-advanced-options-duration-select',function(e){

	var duration=$(".animation-advanced-options-duration-select").val();
$(".just_clicked_animate").css("-webkit-animation-duration",duration+"s");
		 	e.stopPropogation();

});

$(document).on('click', '.animation-advanced-options-once-select',function(e){
	 	e.stopPropogation();

});

$(document).on('change', '.animation-advanced-options-once-select',function(e){

	if ($('.animation-advanced-options-once-select').is(":checked"))
	{
  		$(".just_clicked_animate").addClass("animationOnlyOnce");
  		$(".just_clicked_animate").data("hasAnimationHappened",false);

	}
	else
	{
		if($(".just_clicked_animate").hasClass("animationOnlyOnce"))
			$(".just_clicked_animate").removeClass("animationOnlyOnce");

	}

});

$(document).on('click', '.animation-advanced-options-delay-select',function(e){
	 	e.stopPropogation();

});

$(document).on('change', '.animation-advanced-options-delay-select',function(e){

	var delay=$(".animation-advanced-options-delay-select").val();
$(".just_clicked_animate").css("-webkit-animation-delay",delay+"s");
	 	e.stopPropogation();

});

$(document).on('click', '.animation-advanced-options-iteration-select',function(e){
	 	e.stopPropogation();

});

$(document).on('change', '.animation-advanced-options-iteration-select',function(e){

	var iteration=$(".animation-advanced-options-iteration-select").val();
	if(iteration=="-1")
	{
		$(".just_clicked_animate").css("-webkit-animation-iteration-count","infinite");
	
	}
	else 
	{
		$(".just_clicked_animate").css("-webkit-animation-iteration-count",iteration);

	}

	e.stopPropogation();
});

$(document).on('click', '.animate_type',function(e){
//alert("cd");
$(".box-option-button").remove();
$(".text-option-button").remove();
$(".editicon").fadeOut();
$(".editimage").slideUp();
var offset=$(".just_clicked_animate").offset();
var height=$(".just_clicked_animate").innerHeight();

var text='<div class="animation-type-options" style="position:absolute;top:'+ (+offset.top + +"20" + +height) +'px;left:'+ (+offset.left - +"100") +'px;width:300px;height:300px;">'+
'<div style="border:1px solid;border-top-left-radius:10px;border-top-right-radius:10px;height:20%;min-height:50px;vertical-align: middle;text-align: center;font-size:150%;font-weight:bold;">Animate</div>'+
'<div style="height:80%;overflow: auto">'+
'<div style="height:25%;width:100%;">'+
'<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 10%;background-color: #d3d3d3;border-radius:10px;" class="animationType none">None</div>'+
'<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType bounceIn">Bounce<br>In</div>'+
'<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType fadeIn">Fade<br>In</div>'+
'</div>'+
'<div style="min-height:25%;width:100%;opacity:1">'+
'<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType zoomIn">Zoom<br>In</div>'+
'<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType slideInLeft">Slide<br>In Left</div>'+
'<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType slideInRight">Slide<br>In Right</div>'+
'</div>'+
'<div style="height:25%;width:100%;">'+
'<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType flipInX">Flip<br>In X</div>'+
'<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType flipInY">Flip<br>In Y</div>'+
'<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType lightSpeedIn">Light<br>Speed In</div>'+
'</div>'+
'<div style="height:25%;width:100%;">'+
'<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 10%;background-color: #d3d3d3;border-radius:10px;" class="animationType pulse">Pulse</div>'+
'<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 10%;background-color: #d3d3d3;border-radius:10px;" class="animationType shake">Shake</div>'+
'<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 10%;background-color: #d3d3d3;border-radius:10px;" class="animationType swing">Swing</div>'+
'</div>'+
'<div style="height:25%;width:100%;">'+
'<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType rubberBand">Rubber<br>Band</div>'+
'<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 10%;background-color: #d3d3d3;border-radius:10px;" class="animationType wobble">Wobble</div>'+
'<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 10%;background-color: #d3d3d3;border-radius:10px;" class="animationType jello">Jello</div>'+
'</div>'+
'<div style="height:25%;width:100%;">'+
'<div style="display: inline-block;border:1px solid; vertical-align: middle;text-align: center;margin: 2%;width: 27%;padding-bottom: 5%;background-color: #d3d3d3;border-radius:10px;" class="animationType rollIn">Roll<br>In</div>'+
'</div>'+
'</div>'+
'</div>';
$("body").append(text);

if($(".just_clicked_animate").hasClass('isAnnimated'))
	{
		//alert("Dfsc");
		var name=$(".just_clicked_animate").data('animation_name');
		$("."+name).css("background-color","#7ACEF4");


	}	
//$(".just_clicked_animate").animateCss('bounce');
//alert("cd");
e.preventDefault();
e.stopPropogation();
});

$(document).on('click',function(e){
	if(!$(e.target).closest('.animation-type-options').length && !$(e.target).closest('.just_clicked_animate').length){
		text_option_button_data=false;
		$('.animation-type-options').remove();
	}
});

$(document).on('mouseenter', '.animationType',function(e){
	$(this).css("background-color","#a3a3a3");
	$(this).css("cursor","pointer");


	});
$(document).on('mouseleave', '.animationType',function(e){
		$(this).css("background-color","#d3d3d3");
		if($(".just_clicked_animate").hasClass('isAnnimated'))
	{
		var name=$(".just_clicked_animate").data('animation_name');
		if($(this).hasClass(name))
		{
			$(this).css("background-color","#7ACEF4");
			$(this).data=('played',false);

		}
	}
		if($(".just_clicked_animate").hasClass("animated"))
		{	//alert("Dfsc");
			$(".just_clicked_animate").removeClass("animated");
			if($(".just_clicked_animate").hasClass($(".just_clicked_animate").data('animation_playing')))
				$(".just_clicked_animate").removeClass($(".just_clicked_animate").data('animation_playing'));
			$(".just_clicked_animate").data('animation_playing','none');
			//alert("dddd");

		}
		//alert("eedd");
	if($(".just_clicked_animate").hasClass('isAnnimated'))
	{
		//alert("Dfsc");
		var name=$(".just_clicked_animate").data('animation_name');
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
	$(".just_clicked_animate").data('animation_playing','pulse');
	$(".just_clicked_animate").animateCss('pulse');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.bounceIn',function(e){
	$(".just_clicked_animate").data('animation_playing','bounceIn');
	$(".just_clicked_animate").animateCss('bounceIn');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.fadeIn',function(e){
	$(".just_clicked_animate").data('animation_playing','fadeIn');
	$(".just_clicked_animate").animateCss('fadeIn');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.rollIn',function(e){
	$(".just_clicked_animate").data('animation_playing','rollIn');
	$(".just_clicked_animate").animateCss('rollIn');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.zoomIn',function(e){
	$(".just_clicked_animate").data('animation_playing','zoomIn');
	$(".just_clicked_animate").animateCss('zoomIn');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.slideInLeft',function(e){
	$(".just_clicked_animate").data('animation_playing','slideInLeft');
	$(".just_clicked_animate").animateCss('slideInLeft');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.slideInRight',function(e){
	$(".just_clicked_animate").data('animation_playing','slideInRight');
	$(".just_clicked_animate").animateCss('slideInRight');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.flipInX',function(e){
	$(".just_clicked_animate").data('animation_playing','flipInX');
	$(".just_clicked_animate").animateCss('flipInX');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.flipInY',function(e){
	$(".just_clicked_animate").data('animation_playing','flipInY');
	$(".just_clicked_animate").animateCss('flipInY');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.lightSpeedIn',function(e){
	$(".just_clicked_animate").data('animation_playing','lightSpeedIn');
	$(".just_clicked_animate").animateCss('lightSpeedIn');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.shake',function(e){
	$(".just_clicked_animate").data('animation_playing','shake');
	$(".just_clicked_animate").animateCss('shake');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.swing',function(e){
	$(".just_clicked_animate").data('animation_playing','swing');
	$(".just_clicked_animate").animateCss('swing');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.rubberBand',function(e){
	$(".just_clicked_animate").data('animation_playing','rubberBand');
	$(".just_clicked_animate").animateCss('rubberBand');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.wobble',function(e){
	$(".just_clicked_animate").data('animation_playing','wobble');
	$(".just_clicked_animate").animateCss('wobble');
	e.stopPropogation();

	});
$(document).on('mouseenter', '.jello',function(e){
	$(".just_clicked_animate").data('animation_playing','jello');
	$(".just_clicked_animate").animateCss('jello');
	e.stopPropogation();

	});

$(document).on('click', '.none',function(e){
	$(".just_clicked_animate").data('animation_name','none');
	$(".just_clicked_animate").addClass('isAnnimated');
	$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");


	e.stopPropogation();

	});

$(document).on('click', '.pulse',function(e){
	$(".just_clicked_animate").data('animation_name','pulse');
	$(".just_clicked_animate").addClass('isAnnimated');
	$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");


	e.stopPropogation();

	});
$(document).on('click', '.bounceIn',function(e){
	$(".just_clicked_animate").data('animation_name','bounceIn');
		$(".just_clicked_animate").addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.fadeIn',function(e){
	$(".just_clicked_animate").data('animation_name','fadeIn');
		$(".just_clicked_animate").addClass('isAnnimated');
	$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.rollIn',function(e){
	$(".just_clicked_animate").data('animation_name','rollIn');
		$(".just_clicked_animate").addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.zoomIn',function(e){
	$(".just_clicked_animate").data('animation_name','zoomIn');
		$(".just_clicked_animate").addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.slideInLeft',function(e){
	$(".just_clicked_animate").data('animation_name','slideInLeft');
		$(".just_clicked_animate").addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.slideInRight',function(e){
	$(".just_clicked_animate").data('animation_name','slideInRight');
		$(".just_clicked_animate").addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.flipInX',function(e){
	$(".just_clicked_animate").data('animation_name','flipInX');
		$(".just_clicked_animate").addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.flipInY',function(e){
	$(".just_clicked_animate").data('animation_name','flipInY');
		$(".just_clicked_animate").addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.lightSpeedIn',function(e){
	$(".just_clicked_animate").data('animation_name','lightSpeedIn');
		$(".just_clicked_animate").addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.shake',function(e){
	$(".just_clicked_animate").data('animation_name','shake');
		$(".just_clicked_animate").addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.swing',function(e){
	$(".just_clicked_animate").data('animation_name','swing');
		$(".just_clicked_animate").addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.rubberBand',function(e){
	$(".just_clicked_animate").data('animation_name','rubberBand');
		$(".just_clicked_animate").addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.wobble',function(e){
	$(".just_clicked_animate").data('animation_name','wobble');
		$(".just_clicked_animate").addClass('isAnnimated');
		$('.animationType').css("background-color","#d3d3d3");
	$(this).css("background-color","#7ACEF4");

	e.stopPropogation();

	});
$(document).on('click', '.jello',function(e){
	$(".just_clicked_animate").data('animation_name','jello');
		$(".just_clicked_animate").addClass('isAnnimated');
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
		//	$(".just_clicked_animate").addClass("animationOnlyOnce");
  		//$(".just_clicked_animate").data("hasAnimationHappened",false);
			var imPos = $(this).offset().top;
									//alert(imagePos);

			var topOfWindow = $(window).scrollTop();
			//alert($(window).height());
			var windowHeight=$(window).height();
			//alert(topOfWindow);
				if ((imPos < topOfWindow+windowHeight-($(this).innerHeight()))&&(imPos > topOfWindow)&&(!$(this).data('played'))) {
							//alert("vs");	
						if($(this).data('animation_name')!='none')
					{	var name=$(this).data('animation_name')	;
						$(this).animateCss(name);
							$(this).data('played',true);
							//alert("dassd");
					}
				}
				if((imPos > topOfWindow+800)||(imPos < topOfWindow))
									$(this).data('played',false);

				if($(this).hasClass('animationOnlyOnce'))
				{	
					//alert($(this).data('hasAnimationHappened'));
					$(this).data("hasAnimationHappened",true);	
				}

			}

		});
	});


});

function info(){
	alert("info");
document.getElementById("modal").innerHTML="<p class='modal-content'><span class='modal-title'>Webified</span><br><span class='modal-heading'>Are you Sure?</span><br>This page WILL be deleted now and you will be redirected to home page<br><br><span onclick='delFinal();' cursor='auto' style=' text-decoration:none; width:150px; display:inline-block;color:green;font-size: 25px' class='glyphicon glyphicon-ok'></span><span onclick='removeBox()' style='display: inline-block;color:red;width:150px; font-size:25px' class='glyphicon glyphicon-remove'></span><br><br></p></div>";
}