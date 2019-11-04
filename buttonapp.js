var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var x1 = 50;
var y1 = 50;
var width1 = 100;
var height1 = 100;
var x2 = 150;
var y2 = 150;
var width2 = 100;
var height2 = 100;

function draw(){
	ctx.strokeRect(x1, y1, width1, height1);
	ctx.strokeRect(x2, y2, width2, height2);
}

$(document).ready (
	function(){
		draw();
    }
);
