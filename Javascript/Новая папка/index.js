const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 400;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;



const sector = (color, x, y, radius, startAngle = 0, endAngle = 0, cc = false) => {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.arc(x, y,radius,startAngle,endAngle, cc);
	ctx.lineTo(x, y);
	ctx.closePath();
	ctx.fill();
}

const pacman = (color, x, y, size, mouthWidth) => {
	sector(color, x, y,size, -mouthWidth / 2, Math.PI, true);
	sector(color, x, y,size, mouthWidth / 2, Math.PI);
}

let x = 100;
let y = 100;
let mouthWidth = Math.PI / 2;
let speed = 4;
let mouthSpeed = Math.PI / 180 * 2;

const FPS = 60;
let lastTimestamp = performance.now();

const draw = (timeStamp) => {
	requestAnimationFrame(draw);
	
	if ((timeStamp - lastTimestamp) < (1000 / FPS)) return;
	
	lastTimestamp = timeStamp;
	
	// If you need to draw tail of movement
	ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
	ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	
	// If you need just clear whole screen
	// ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	
	x += speed;
	mouthWidth -= mouthSpeed;
	
	if (x > CANVAS_WIDTH - 64 || x < 64) speed = -speed;
	if (mouthWidth < 0 || mouthWidth > Math.PI / 2) mouthSpeed = -mouthSpeed;
	
	pacman('yellow', x, y, 64, mouthWidth);
}

requestAnimationFrame(draw);