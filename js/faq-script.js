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
		var icon = $(this).children('i');
		//Remove the 'rotate' class for icons except the active
		icon.toggleClass('fa-arrow-down');
	});
});