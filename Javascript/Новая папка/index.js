const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;
ctx.lineWidth = 10;

const mouthWidth = Math.PI / 4;

const sector = (color, x, y, startAngle = 0, endAngle = 0, cc = false) => {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.arc(x, y,50,startAngle,endAngle, cc);
	ctx.lineTo(x, y);
	ctx.closePath();
	ctx.fill();
}

const pacman = (color, x, y, mouthWidth) => {
	sector(color, x, y,-mouthWidth / 2, Math.PI, true);
	sector(color, x, y,mouthWidth / 2, Math.PI);
}

pacman('red', 50, 50, mouthWidth);
pacman('yellow', 250, 250, mouthWidth);