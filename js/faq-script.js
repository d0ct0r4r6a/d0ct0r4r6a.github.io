//Accordion
var action ="click";
var speed = "500";

$(document).ready(function(){
	//Question script
	$('li.q').on(action,function(){
		//Get next element
		$(this).next()
			.slideToggle(speed)
				//Select all answers
				.siblings('li.a')
					.slideUp();
		//Get icon in active question
		var icon = $(this).children();
		//Remove the 'rotate' class for icons except the active
		//$('i').toggleClass('fa-arrow-right');
		icon.toggleClass('fa-arrow-down');
		$('i').not(icon).removeClass('fa-arrow-down');
		
	});
});