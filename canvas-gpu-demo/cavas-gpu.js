// function draw() {
// 	var canvas = document.getElementById('canvasGPU');
// 	if (!canvas.getContext) return;
// 	var ctx = canvas.getContext("2d");
// 	ctx.fillStyle = "rgb(200,0,0)";
// 	//绘制矩形
// 	ctx.fillRect(10, 10, 55, 50);

// 	ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
// 	ctx.fillRect(30, 30, 55, 50);
// }
// draw();

// ======================================太阳系===================================
let sun;
let earth;
let moon;
let ctx;

function initSun() {
	sun = new Image();
	earth = new Image();
	moon = new Image();
	sun.src = "./img/sun.png";
	earth.src = "./img/earth.png";
	moon.src = "./img/moon.png";

	let canvas = document.querySelector("#canvasGPU");
	ctx = canvas.getContext("2d");

	sun.onload = function () {
		drawSun()
	}

}
// initSun();

function drawSun() {
	ctx.clearRect(0, 0, 300, 300); //清空所有的内容
	/*绘制 太阳*/
	ctx.drawImage(sun, 0, 0, 300, 300);

	ctx.save();
	ctx.translate(150, 150);

	//绘制earth轨道
	ctx.beginPath();
	ctx.strokeStyle = "rgba(255,255,0,0.5)";
	ctx.arc(0, 0, 100, 0, 2 * Math.PI)
	ctx.stroke()

	let time = new Date();
	//绘制地球
	ctx.rotate(2 * Math.PI / 60 * time.getSeconds() + 2 * Math.PI / 60000 * time.getMilliseconds())
	ctx.translate(100, 0);
	ctx.drawImage(earth, -12, -12)

	//绘制月球轨道
	ctx.beginPath();
	ctx.strokeStyle = "rgba(255,255,255,.3)";
	ctx.arc(0, 0, 40, 0, 2 * Math.PI);
	ctx.stroke();

	//绘制月球
	ctx.rotate(2 * Math.PI / 6 * time.getSeconds() + 2 * Math.PI / 6000 * time.getMilliseconds());
	ctx.translate(40, 0);
	ctx.drawImage(moon, -3.5, -3.5);
	ctx.restore();

	requestAnimationFrame(drawSun);
}

// ======================================时钟===================================

// init();

function init() {
	let canvas = document.querySelector("#solar");
	let ctx = canvas.getContext("2d");
	draw(ctx);
}

function draw(ctx) {
	requestAnimationFrame(function step() {
		setInterval(() => {
			console.count("shifou zuse ?===")
			drawDial(ctx); //绘制表盘
			drawAllHands(ctx); //绘制时分秒针
			requestAnimationFrame(step);
		}, 2000);
	});
}
/*绘制时分秒针*/
function drawAllHands(ctx) {
	let time = new Date();

	let s = time.getSeconds();
	let m = time.getMinutes();
	let h = time.getHours();

	let pi = Math.PI;
	let secondAngle = pi / 180 * 6 * s; //计算出来s针的弧度
	let minuteAngle = pi / 180 * 6 * m + secondAngle / 60; //计算出来分针的弧度
	let hourAngle = pi / 180 * 30 * h + minuteAngle / 12; //计算出来时针的弧度

	drawHand(hourAngle, 60, 6, "red", ctx); //绘制时针
	drawHand(minuteAngle, 106, 4, "green", ctx); //绘制分针
	drawHand(secondAngle, 129, 2, "blue", ctx); //绘制秒针
}
/*绘制时针、或分针、或秒针
 * 参数1：要绘制的针的角度
 * 参数2：要绘制的针的长度
 * 参数3：要绘制的针的宽度
 * 参数4：要绘制的针的颜色
 * 参数4：ctx
 * */
function drawHand(angle, len, width, color, ctx) {
	ctx.save();
	ctx.translate(150, 150); //把坐标轴的远点平移到原来的中心
	ctx.rotate(-Math.PI / 2 + angle); //旋转坐标轴。 x轴就是针的角度
	ctx.beginPath();
	ctx.moveTo(-4, 0);
	ctx.lineTo(len, 0); // 沿着x轴绘制针
	ctx.lineWidth = width;
	ctx.strokeStyle = color;
	ctx.lineCap = "round";
	ctx.stroke();
	ctx.closePath();
	ctx.restore();
}

/*绘制表盘*/
function drawDial(ctx) {
	let pi = Math.PI;

	ctx.clearRect(0, 0, 300, 300); //清除所有内容
	ctx.save();

	ctx.translate(150, 150); //一定坐标原点到原来的中心
	ctx.beginPath();
	ctx.arc(0, 0, 148, 0, 2 * pi); //绘制圆周
	ctx.stroke();
	ctx.closePath();

	for (let i = 0; i < 60; i++) { //绘制刻度。
		ctx.save();
		ctx.rotate(-pi / 2 + i * pi / 30); //旋转坐标轴。坐标轴x的正方形从 向上开始算起
		ctx.beginPath();
		ctx.moveTo(110, 0);
		ctx.lineTo(140, 0);
		ctx.lineWidth = i % 5 ? 2 : 4;
		ctx.strokeStyle = i % 5 ? "blue" : "red";
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
	}
	ctx.restore();
}

// ===========================================
let aa = window.performance.now()
requestAnimationFrame((timestamp) => {
	console.log("requestAnimationFrame", timestamp, aa);
});
let now1 = Date.now();
// 利用while阻塞js那条线程两秒钟
// while ((Date.now() - now1) / 1000 < 2) {
// 	console.log(1);
// }
console.log('end');
// 1
// ...too many 1
// 1
// end
// requestAnimationFrame