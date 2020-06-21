function GPTB2(tsa, tsb, tsc) {
    this.a = tsa;
    this.b = tsb;
    this.c = tsc;
    this.Tinhdeta = function () {
        return this.b * this.b - 4 * this.a * this.c;
    }
    this.giai = function () {
        if (this.a == 0) {
            if (this.b == 0) {
                if (this.c == 0) {
                    document.write("Phương trình vô số nghiệm" + "<br>");
                }
                else {
                    document.write("Phương trình vô nghiệm" + "<br>");
                }
            }
            else {
                let x = - this.c / this.b;
                document.write("Phương trình có 1 nghiệm x = " + x + "<br>");
            }
        }
        else {
            this.Tinhnghiem();
        }
    }
    this.Tinhnghiem = function () {
        this.Tinhdeta();
        if (this.Tinhdeta() < 0) {
            document.write("Phương trình vô nghiệm" + "<br>");
        }
        else if (this.Tinhdeta() == 0) {
            let x = - this.b / (2 * this.a);
            document.write("Phương trình có nghiệm kép x = " + x + "<br>");
        }
        else {
            let x1 = (-this.b + Math.sqrt(this.Tinhdeta())) / (2 * this.a);
            let x2 = (-this.b - Math.sqrt(this.Tinhdeta())) / (2 * this.a);
            document.write("Phương trình có hai nghiệm là x1 = " + x1 + ";  x2 = " + x2 + "<br>")
        }
    }
}