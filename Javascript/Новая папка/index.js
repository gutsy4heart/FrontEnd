const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width=800;
canvas.height=400;

ctx.lineWidth = 10;

ctx.strokeStyle = 'white'
ctx.fillStyle = 'white'

// Radian - 

const mouthWidth = Math.PI / 4;
const mouthWidthHalf = mouthWidth / 2;
// ctx.fillStyle= 'red';
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(200, 200, 50, - mouthWidthHalf, Math.PI - mouthWidthHalf, true);
ctx.closePath();
ctx.fill();

// ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(200, 200, 50, mouthWidthHalf, Math.PI + mouthWidthHalf);
ctx.closePath();
ctx.fill();

