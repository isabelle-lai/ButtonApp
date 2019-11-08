var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var x1 = 50;
var y1 = 50;
var width1 = 50;
var height1 = 50;
var x2 = 150;
var y2 = 150;
var width2 = 50;
var height2 = 50;
var filled1 = false;
var filled2 = false;

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if (filled1){
		ctx.beginPath();
		ctx.fillRect(x1, y1, width1, height1);
		ctx.lineWidth = "1";
		ctx.stroke();
		$('#status1').html("Empty");
	}
	else{
		ctx.beginPath();
		ctx.rect(x1, y1, width1, height1);
		ctx.lineWidth = "1";
		ctx.stroke();
		$('#status1').html("Fill");
	}
	if (filled2){
		ctx.beginPath();
		ctx.lineWidth="1";
		ctx.fillRect(x2, y2, width2, height2);
		ctx.stroke();
		$('#status2').html("Empty");
	}
	else{
		ctx.beginPath();
		ctx.lineWidth="1";
		ctx.rect(x2, y2, width2, height2);
		ctx.stroke();
		$('#status2').html("Fill");
	}
}

$(document).ready (
	function(){
		draw();
    }
);

$("#left1").click(function() {
	x1 = x1 - 5;
	draw();
});

$("#right1").click(function() {
	x1 = x1 + 5;
	draw();
});
$("#left2").click(function() {
	x2 = x2 - 5;
	draw();
});

$("#right2").click(function() {
	x2 = x2 + 5;
	draw();
});

$("#bigger1").click(function() {
	width1 += 5;
	height1 += 5;
	draw();
});

$("#smaller1").click(function() {
	width1 -= 5;
	height1 -= 5;
	draw();
});

$("#bigger2").click(function() {
	width2 += 5;
	height2 += 5;
	draw();
});

$("#smaller2").click(function() {
	width2 -= 5;
	height2 -= 5;
	draw();
});

$("#status1").click(function() {
	if (filled1){
		filled1 = false;
	}
	else{
		filled1 = true;
	}
	draw();
});

$("#status2").click(function() {
	if (filled2){
		filled2 = false;
	}
	else{
		filled2 = true;
	}
	draw();
});

