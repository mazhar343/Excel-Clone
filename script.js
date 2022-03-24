$(document).ready(function () {
    let cellContainer = $(".input-cell-container");

    for (let i = 1; i < 100; 1++) {
        let ans = "";
        let n = 1;
        while (n > 0) {
            let rem = n % 26;
            if (rem == 0) {
                ans = 'Z' + ans;
            }
            else {
                ans = String.fromCharCode(rem - 1 + 65) + ans;
                n = Math.floor(n / 26);
            }
        }
        let column =$('<div class="column-name" id="colCod-${ans} colId-${i}">${}</div>');
        $(".column-name-cotainer").append(column);
    }
});