
var b = document.getElementById("carogame");
let check = true;
let board = [];
let checkOver = true;
var luatchoi = +prompt("nhập vào sô quân thẳng hàng để thắng");
// var luatchoi = 6;
function mang1chieu() {
    var drong = +prompt("Nhập kích cỡ bàn cờ: ");
    // var drong = 20;
    for (let i = 0; i < drong; i++) {
        board[i] = [];
        for (let j = 0; j < drong; j++) {
            board[i][j] = "";
        }
    }
}


function mang2chieu() {

    let data = "<table>";
    for (let i = 0; i < board.length; i++) {
        data += "<tr>";
        for (let j = 0; j < board[i].length; j++) {
            data += `<td onclick="play(${i},${j})"> ${board[i][j]}</td>`;
        }
        data += "</tr>"
    }
    data += "</table>";

    b.innerHTML = data;
}

function play(xx, yy) {
    console.log(xx, yy)
    if (checkOver) {
        if (check && board[xx][yy] === "") {
            value = '<span class="do"> O </span>';
            board[xx][yy] = value;
            check = !check;
        } else if (board[xx][yy] === "") {
            value = '<span class="xanh"> X </span>';
            board[xx][yy] = value;
            check = !check;
        }
        mang2chieu();
        kiemtrathang(xx, yy);
    }
}


function kiemtrathang(xx, yy) {

    let trai = 0; let phai = 0;

    for (let k = yy; k >= 0; k--) {
        if (board[xx][yy] === board[xx][k]) {
            trai++;
        } else {
            break;
        }
    }
    for (let l = yy; l < board.length; l++) {
        if (board[xx][yy] === board[xx][l]) {
            phai++;
        } else {
            break;
        }
    }

    if ((trai + phai) == luatchoi + 1) {
        alert(" thắng cuộc");
    }

    let tren = 0; let duoi = 0;
    for (let k = xx; k >= 0; k--) {
        if (board[xx][yy] === board[k][yy]) {
            tren++;
        } else {
            break;
        }
    }
    for (let l = xx; l < board.length; l++) {
        if (board[xx][yy] === board[l][yy]) {
            duoi++;
        } else {
            break;
        }
    }

    if ((tren + duoi) == luatchoi + 1) {
        checkOver = false;
        alert('You Win')

    }
    let traitren = 0; let phaiduoi = 0;
    let m = xx; let n = yy;
    while (m >= 0 && n >= 0) {
        if (board[xx][yy] === board[m][n]) {
            traitren++;
            m--;
            n--;
        } else {
            break;
        }
    }
    let p = xx; let q = yy;
    while (p < board.length && q < board.length) {
        if (board[xx][yy] === board[p][q]) {
            phaiduoi++;
            p++;
            q++;
        } else {
            break;
        }
    }
    if ((traitren + phaiduoi) == luatchoi + 1) {
        checkOver = false;
        alert('You Win')

    }
    let phaitren = 0; let traiduoi = 0;
    let c = xx; let d = yy;
    while (c < board.length && d >= 0) {
        if (board[xx][yy] === board[c][d]) {
            traiduoi++;
            c++;
            d--;
        } else {
            break;
        }
    }
    let e = xx; let f = yy;
    while (f < board.length && e >= 0) {
        if (board[xx][yy] === board[e][f]) {
            phaitren++;
            e--;
            f++;
        } else {
            break;
        }
    }
    if ((phaitren + traiduoi) == luatchoi + 1) {
        checkOver = false;
        alert('You Win')

    }

}
