class Nhanvat {
    image;
    top;
    left;
    size;
    speed;
    constructor(image, top, left, size, speed) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
        this.speed = speed;
    }
    getHeroElement() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }
    moveRight() {
        this.left += this.speed;
    }

}
function start(nhanvat) {
    if (nhanvat.left < window.innerWidth - 2 * nhanvat.size) {
        nhanvat.moveRight();
        document.getElementById('game').innerHTML = nhanvat.getHeroElement();
        setTimeout(function () { start(nhanvat) }, 1000);
    }

}