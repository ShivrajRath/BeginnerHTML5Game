var canvasEL = {
	FPS : 30,
	fillStyle : "#000",
	width : 500,
	height : 400
}

var canvas;

var textX = 50;
var textY = 50;

$(function(){

	canvas = $("canvas")[0].getContext("2d");

	setInterval(function(){
		update();
		draw();
	}, 1000/canvasEL.FPS)
});

var clearRect = function(){
	canvas.clearRect(0, 0, canvasEL.width, canvasEL.height);
}

var update = function(){
	if (keydown.left){
		player.x -= 5;
	}
	if (keydown.right){
		player.x +=5;
	}

	player.x = player.x.clamp(0, canvasEL.width - player.width);
}

var draw = function(){
	clearRect();
	player.draw();
}