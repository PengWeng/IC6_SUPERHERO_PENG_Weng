$(document).ready(function(){
	//When the page opens, show only the first character in the list.
	$('img:first').addClass('shown');


	// //Set the h1.name to the text for the first superher
	
	$('.name').text('BATMAN');






	//Setup a listener on the button.next	
	$('.next').click(function(){
		$('img:first').removeClass('shown');
		$('img:first').next().addClass('shown');
		$('.name').next().text('CAPTAIN AMERICA');
		
		//Try animating the name to fade out and slide upwards on each click
		$('.name').slideUp(100).fadeTo('fast',0); 


	});




	//Update the h1.name for each new hero



	//When you hit the :last-child then click "next", go back to the :first-child
	//if {}


	
	

});