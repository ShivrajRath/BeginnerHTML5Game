var player = {
	color: "#00A",
	x: 220,
	y: 270,
	height: 32,
	width: 32,
	draw: function(){
		canvas.fillStyle = this.color;
		canvas.fillRect(this.x, this.y, this.width, this.height);
	}
}