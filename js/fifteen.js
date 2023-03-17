$(document).ready(function () {
    init();
});



function init() {
    let puzzleArea = $("#puzzlearea");
    let tiles = puzzleArea[0].children;
    let movable = false;

    // initialize each piece
    for (let i = 0; i < tiles.length; i++) {
        let tile = tiles[i];


        // calculate x and y for this piece
        let x = ((i % 4) * 100);
        let y = (Math.floor(i / 4) * 100);

        //console.log(`for ${i}, x = ${x} and y = ${y}`);

        // set basic style and background
        tile.className = "puzzlepiece";
        tile.style.left = x + 'px';
        tile.style.top = y + 'px';
        tile.style.backgroundImage = 'url("img/background.jpg")';
        tile.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

        // store x and y for later
        tile.x = x;
        tile.y = y;
    }

    let puzzlepiece = $(".puzzlepiece");
    let empX = ((15 % 4) * 100);
    let empY = (Math.floor(15 / 4) * 100);

    //change border color and font color of each movable tile on hover
    $(puzzlepiece).mouseover(function () {
        if (empX - this.x == 100 && empY - this.y == 0 || empX - this.x == 0 && empY - this.y == 100
            || empX - this.x == -100 && empY - this.y == 0 || empX - this.x == 0 && empY - this.y == -100
            || empX - this.x == 0 && empY - this.y == 0) {
            movable = true;
            $(this).addClass("movablepiece");

        } else {
            movable = false;
            $(this).removeClass("movablepiece");
        }
    });

    //change position of movable tile when clicked 
    $(puzzlepiece).click(function () {
        let tempX = this.x;
        let tempY = this.y;

        if (movable == true) {
            this.style.left = empX + 'px';
            this.style.top = empY + 'px';
            this.x = empX;
            this.y = empY;
            empX = tempX;
            empY = tempY;
        }
    });

    $("#shufflebutton").click(function () {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        for (let i = 0; i < tiles.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            let temp = tiles[i];
            tiles[i] = tiles[j];
            tiles[j] = temp;
            console.log(tiles);
            let x = ((i % 4) * 100);
            let y = (Math.floor(i / 4) * 100);
            let tempX = tiles[i].x;
            let tempY = tiles[i].y;
            if (empX - tiles[i].x == 100 && empY - tiles[i].y == 0 || empX - tiles[i].x == 0 && empY - tiles[i].y == 100
                || empX - tiles[i].x == -100 && empY - tiles[i].y == 0 || empX - tiles[i].x == 0 && empY - tiles[i].y == -100
                || empX - tiles[i].x == 0 && empY - tiles[i].y == 0) {
            tiles[i].className = "puzzlepiece";
            tiles[i].style.left = x + 'px';
            tiles[i].style.top = y + 'px';
            tiles[i].style.backgroundImage = 'url("img/background.jpg")';
            tiles[i].style.backgroundPosition = -x + 'px ' + (-y) + 'px';
            tiles[i].x = empX;
            tiles[i].y = empY;
            empX = tempX;
            empY = tempY;
         }
        }

        //   tiles.forEach((piece, index) => {
        //     let x = ((i % 4) * 100);
        //     let y = (Math.floor(i / 4) * 100);
        //     this.style.left = empX + 'px';
        //     this.style.top = empY + 'px';

        //   });  


    });

}




