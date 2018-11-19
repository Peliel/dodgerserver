class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.fillStyle = "#EE0000";
        ctx.fill();
        ctx.closePath();
    }

    x() {
        return this.x;
    }

    y() {
        return this.y;
    }

    r() {
        return this.r;
    }
}