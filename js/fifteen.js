$(document).ready(function () {
    init();
});



function init() {
    let puzzleArea = $("#puzzlearea");
    let tiles = puzzleArea[0].children;
    let movable = false;
    let finalTile = [];

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

        finalTile.push(tile);
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
        if (movable == true) {
            swap(this);
        }
    });

    function swap(tile) {
        let tempX = tile.x;
        let tempY = tile.y;

        if (movable == true) {
            tile.style.left = empX + 'px';
            tile.style.top = empY + 'px';
            tile.x = empX;
            tile.y = empY;
            empX = tempX;
            empY = tempY;
        }
    }

    $("#shufflebutton").click(function () {
        finalTile = shuffle(finalTile);

        // initialize each piece
        for (let i = 0; i < finalTile.length; i++) {
            let tile = finalTile[i];
            swap(tile);
        }

    });

}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


