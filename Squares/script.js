

$(document).ready(function(){
	/*Loop to start the original grid*/
	for(var i=0;i<16;i++){
		for(var j=0;j<16;j++){
			$("#container").append("<div class='square'></div>");

		}
		$("#container").append("<div class='row'></div>");

	}
	/*Changes color of squares to red when hovered over*/
	$(".square").hover(function(){
$(this).css("background-color","red");

});
});
$(function() {
	 /*This function clears the current grid and prompts user
	 for a height and width since this is a square grid only
	 	one input is neccessary.*/
$("button").click(function clear(){
$(".square").remove();
var input=parseInt(prompt("Enter a new grid width and height"),10);
/*Loop to create new grid with user inputed dimensions.*/
	for(var i=0;i<input;i++){
		for(var j=0;j<input;j++){
			$("#container").append("<div class='square'></div>");

		}
		$("#container").append("<div class='row'></div>");

	}
	$(".square").hover(function(){
$(this).css("background-color","red");

});
});
});
