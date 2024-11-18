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

const sector = (color, fillAngle = 0, turnAngle = 0) =>{
    const fillAngleHalf = fillAngle /2;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(200, 200, 50, fillAngleHalf,Math.PI + fillAngleHalf);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(200, 200, 50, -fillAngleHalf, Math.PI- fillAngleHalf, true );
    ctx.closePath();
    ctx.fill();

}
sector('red', Math.PI / 2);
