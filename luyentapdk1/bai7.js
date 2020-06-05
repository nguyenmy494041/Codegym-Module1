
function tongtiencuoc(){
let a = document.getElementById("goinoi").value;
let m = document.getElementById("phutnoi").value;
let b = document.getElementById("goingoai").value;
let n = document.getElementById("phutngoai").value;
let c = document.getElementById("SMSnoi").value;
let p = document.getElementById("noi").value;
let d = document.getElementById("SMSngoai").value;
let q = document.getElementById("ngoai").value;
let e = document.getElementById("goiquocte").value;
let r = document.getElementById("phutquocte").value;
let f = document.getElementById("SMSquocte").value;
let t = document.getElementById("quocte").value;
let tongtien = a*m+b*n+c*p+d*q+e*r+f*t;
document.getElementById("hienthi").innerHTML= "Tổng cước phí phải trả là "+tongtien + " VND";}