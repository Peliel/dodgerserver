function Player() {
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, player.r, 0, Math.PI * 2, true);
    ctx.fillStyle = player.c;
    ctx.fill();
    ctx.closePath();
}