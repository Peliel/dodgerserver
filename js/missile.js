class Warning {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        ctx.beginPath();
        ctx.font = "bold " + this.size + " Calibri";
        ctx.fillStyle = "red";
        ctx.fillText("!", this.x, this.y);
        ctx.closePath();
    }

    x() {
        return this.x;
    }

    y() {
        return this.y;
    }
}

class Missile {
    constructor(x, y, w, h, r) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        ctx.beginPath();
        ctx.rect(this.x, this.y - this.r, this.w, this.h);
        ctx.arc(this.x + this.w, this.y, this.r, Math.PI * 1.5, Math.PI * 0.5, false);
        ctx.fillStyle = "#990000";
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

class Smoke {
    constructor() {

    }
}