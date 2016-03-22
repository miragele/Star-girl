/**
 * Created by le on 2016/3/10.
 */
var can;
var ctx;
var w;
var h;
var girlPic = new Image();
var starPic = new Image();
var stars = [];
var num = 36;
var lastTime;
var deltaTime;
var switchy=false;
var life=0;
function init() {
    can = document.getElementById("canvas");
    ctx = can.getContext("2d");
    w = can.width;
    h = can.height;
    document.addEventListener("mousemove", mousemove, false);
    girlPic.src = "src/girl.jpg";
    starPic.src = "src/star.png";
    for (var i = 0; i < num; i++) {
        var obj = new starObj();
        stars.push(obj);
        stars[i].init();
    }
    lastTime = Date.now();
    gameloop();
}
document.body.onload = init();
function gameloop() {
    window.requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    drawBackground();
    drawGirl();
    drawStars();
    aliveUpdate();
}
function drawBackground() {
    ctx.fillStyle = "#393350";
    ctx.fillRect(0, 0, w, h);
}
function drawGirl() {
    ctx.drawImage(girlPic, 100, 150, 600, 300)
}
function mousemove(e) {
    if (e.offsetX || e.offsetY) {
        var px = e.offsetX == undefined ? e.layerX : e.offsetX;
        var py = e.offsetY == undefined ? e.layerY : e.offsetY;
        if (px>100&&px<700&&py>150&&py<450){
            switchy=true;
        }else{
            switchy=false;
        }
    }
}