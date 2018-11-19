canvas = document.querySelector("canvas"), ctx = canvas.getContext("2d");
canvas.width = W = window.innerWidth;
canvas.height = H = window.innerHeight;
canvas.style.cursor = "context-menu";

let mouseX, mouseY;
let x = W / 2, y = H / 2;

let mouseUp = true, dead = false, startScreen = true;

let close, unhide, warn;

let circPoses = [[rnd(W), rnd(H)], 
                [rnd(W), rnd(H)], 
                [rnd(W), rnd(H)], 
                [rnd(W), rnd(H)], 
                [rnd(W), rnd(H)]];
let circDirs = [[circDir(), circDir()], 
                [circDir(), circDir()], 
                [circDir(), circDir()], 
                [circDir(), circDir()], 
                [circDir(), circDir()]];

let rectPoses = [[rnd(W), rnd(H)], 
                [rnd(W), rnd(H)], 
                [rnd(W), rnd(H)], 
                [rnd(W), rnd(H)], 
                [rnd(W), rnd(H)]];
let rectDirs = [[rectDir(), rectDir()], 
                [rectDir(), rectDir()], 
                [rectDir(), rectDir()], 
                [rectDir(), rectDir()], 
                [rectDir(), rectDir()]];

let missileDirs = 0

let circs = [null, null, null, null, null];
let rects = [null, null, null, null, null];


let wall = {
    l: 0 - W / 2, 
    r: W, 
    u: 0 - H / 2, 
    d: H
};

let player = {
    r: 15, 
    c: "#9933FF"
};

let time = 0;

canvas.addEventListener("mouseleave", die);
canvas.addEventListener("mousemove", move);
canvas.addEventListener("mousedown", start);
canvas.addEventListener("mouseup", show);

function draw() {
    ctx.fillStyle = "#555";
    ctx.fillRect(0, 0, W, H);
    Player();
    for (let circ = 0; circ < circs.length; circ++) {
        circs[circ] = new Circle(circPoses[circ][0], circPoses[circ][1], 15);
        circPoses[circ][0] += circDirs[circ][0];
        circPoses[circ][1] += circDirs[circ][1];
        if (mouseX + player.r > circs[circ].x - circs[circ].r && mouseX - player.r < circs[circ].x + circs[circ].r && mouseY + player.r > circs[circ].y - circs[circ].r && mouseY - player.r < circs[circ].y + circs[circ].r) {
            if (mouseUp) {
                die();
            }
        }
        if (circs[circ].x + circDirs[circ][0] > wall.r - circs[circ].r || circs[circ].x + circDirs[circ][0] < wall.l + W / 2 + circs[circ].r) {
            circDirs[circ][0] = -circDirs[circ][0];
        }
        if (circs[circ].y + circDirs[circ][1] > H - circs[circ].r || circs[circ].y + circDirs[circ][1] < circs[circ].r) {
            circDirs[circ][1] = -circDirs[circ][1];
        }
    }
    for (let rect = 0; rect < rects.length; rect++) {
        rects[rect] = new Rect(rectPoses[rect][0], rectPoses[rect][1], 30, 30);
        rectPoses[rect][0] += rectDirs[rect][0];
        rectPoses[rect][1] += rectDirs[rect][1];
        if (mouseX + player.r > rects[rect].x && mouseX - player.r < rects[rect].x + rects[rect].w && mouseY + player.r > rects[rect].y && mouseY - player.r < rects[rect].y + rects[rect].h) {
            if (mouseUp) {
                die();
            }
        }
        if (rects[rect].x + rectDirs[rect][0] > wall.r - rects[rect].w || rects[rect].x + rectDirs[rect][0] < wall.l + W / 2) {
            rectDirs[rect][0] = -rectDirs[rect][0];
        }
        if (rects[rect].y + rectDirs[rect][1] > H - rects[rect].h || rects[rect].y + rectDirs[rect][1] < 0) {
            rectDirs[rect][1] = -rectDirs[rect][1];
        }
    }
    Wall(wall.l);
    Wall(wall.r);
    if (mouseX - player.r < wall.l + W / 2 || mouseX + player.r > wall.r) {
        if (mouseUp) {
            die();
        }
    }

    time += 1;
    if (!startScreen) {
        ctx.textAlign = "center";
        ctx.font = "bold 30px Calibri";
        ctx.fillStyle = "white";
        ctx.fillText(time / 100 + "s", W / 2, 50);
    }

    if (startScreen) {
        ctx.textAlign = "center";
        ctx.font = "bold 50px Calibri";
        ctx.fillStyle = "white";
        ctx.fillText("Press the mouse button to start the game", W / 2, H / 2);
    }
}

setInterval(function() {
    if (dead && !startScreen) {
        ctx.textAlign = "center";
        ctx.font = "bold 50px Calibri";
        ctx.fillStyle = "white";
        ctx.fillText("Left-click to restart the game", W / 2, H / 2);
    }
}, 100);

draw();
let mainloop;