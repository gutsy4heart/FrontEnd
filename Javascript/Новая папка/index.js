const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width=800;
canvas.height=400;

ctx.lineWidth = 10;


// ctx.strokeStyle = 'white';
// ctx.strokeRect(20,20,150,110);
// ctx.fillRect(20,20,150,110);


// ctx.strokeStyle = 'white';
// ctx.fillRect(20,20,150,110);
// ctx.fillRect(20,20,150,110);


ctx.strokeStyle = 'white';
ctx.fillStyle = 'white';
// Wall
ctx.strokeRect(75, 140, 150, 110);

// Door
ctx.fillRect(130, 190, 40, 60);

// Roof

ctx.beginPath();
ctx.moveTo(50,140);
ctx.lineTo(150,60);
ctx.lineTo(250,140);
ctx.lineTo(50,140);
ctx.closePath();
ctx.stroke();