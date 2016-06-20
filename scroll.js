$.fn.extend({
    animateCss: function (animationName) {
        	
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).data=('animationName',animationName);
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
        	if($(this).hasClass('animated'))
            {$(this).removeClass('animated');}
 			if($(this).hasClass(animationName))
            {$(this).removeClass(animationName);}
       
        });
    }
});




$(window).scroll(function() {

		$('.isAnnimated').each(function(){

		if(($(this).hasClass('animationOnlyOnce') && !$(this).hasClass('animationHasHappened')) || !$(this).hasClass('animationOnlyOnce'))	
		{		
		

			var imagePos = $(this).offset().top;


			var topOfWindow = $(window).scrollTop();
			var windowHeight=$(window).height();

				if ((imPos < topOfWindow+windowHeight-($(this).innerHeight()))&&(imagePos > topOfWindow)&&(!$(this).hasClass('played'))) {

					// 	if($(this).data('animation_name')!='none')
					// {	var name=$(this).data('animation_name')	;
					// 	$(this).animateCss(name);
					// 		$(this).addClass('played');

					// }
					if($(this).hasClass('pulseSelected'))
						$(this).animateCss("pulse");

					if($(this).hasClass('bounceInSelected'))
						$(this).animateCss("bounceIn");

					if($(this).hasClass('fadeInSelected'))
						$(this).animateCss("fadeIn");

					if($(this).hasClass('zoomInSelected'))
						$(this).animateCss("zoomIn");

					if($(this).hasClass('rollInSelected'))
						$(this).animateCss("rollIn");
					
					if($(this).hasClass('slideInLeftSelected'))
						$(this).animateCss("slideInLeft");

					if($(this).hasClass('slideInRightSelected'))
						$(this).animateCss("slideInRight");

					if($(this).hasClass('flipInXSelected'))
						$(this).animateCss("flipInX");
					
					if($(this).hasClass('flipInYSelected'))
						$(this).animateCss("flipInY");

					if($(this).hasClass('lightSpeedInSelected'))
						$(this).animateCss("lightSpeedIn");

					if($(this).hasClass('shakeSelected'))
						$(this).animateCss("shake");
					
					if($(this).hasClass('swingSelected'))
						$(this).animateCss("swing");

					if($(this).hasClass('rubberBandSelected'))
						$(this).animateCss("rubberBand");
					
					if($(this).hasClass('wobbleSelected'))
						$(this).animateCss("wobble");

					if($(this).hasClass('jelloSelected'))
						$(this).animateCss("jello");


				}
				if((imagePos > topOfWindow+windowHeight-($(this).innerHeight()))||(imagePos < topOfWindow))
									$(this).removeClass('played');

				if($(this).hasClass('animationOnlyOnce'))
				{	

					$(this).addClass("animationHasHappened");	
				}

			}

		});
	});