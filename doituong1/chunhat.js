function Rectangle(cdai, crong) {
    this.cdai = cdai;
    this.crong = crong;
    this.setCdai = function (chieudai) {
        return this.cdai = chieudai;
    }
    this.setCrong = function (chieurong) {
        return this.crong = chieurong;
    }
    this.Chuvi = function () {
        return (this.cdai + this.crong) * 2;
    }
    this.Area = function () {
        return this.crong * this.cdai;
    }
    this.Draw = function (color) {
        let c = document.getElementById('myCanvas');
        let ctx = c.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(10, 10, this.cdai, this.crong);
    }
}