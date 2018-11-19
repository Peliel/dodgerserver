class Rect {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();
    }

    x() {
        return this.x;
    }

    y() {
        return this.y;
    }

    w() {
        return this.w;
    }

    h() {
        return this.h;
    }
}