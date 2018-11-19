function Wall(x, y = 0, w = W / 2, h = H) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fillStyle = "#000";
    ctx.fill();
    ctx.closePath();
}