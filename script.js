$(document).ready(function() {
    var i, numDivs, div;
    numDivs = 4;
    div = createGrid(numDivs);

    $("#reset").click(clearBoard);
    



});

function moveIn() {
    if($(this).css('background-color') == 'rgba(0, 0, 0, 0)') {
        $(this).css("background-color", "rgb("+randInt(255)+", "+randInt(255)+", "+randInt(255)+")");
    } else {
         alert($(this).css('background-color'));
    }
}



function randInt(max) {
       return Math.floor(Math.random()*max);
}

function clearBoard() {
    var numDivs;
    $('.sketch').css('background-color','transparent');
    $('#container').empty();
    numDivs = prompt('Enter number of squares per side:');
    
    createGrid(numDivs);
}


function createGrid(numDivs) {
    var div = '';
        for (i = 0; i < (numDivs*numDivs); i += 1) {
        if (i % numDivs !== 0) {
            div += "<div class='sketch'></div>";
        } else {
            div += "<div class='newline'></div><div class='sketch'></div>";
        }
    }
    $(div).appendTo('#container');
    $('.sketch').css('padding', 360/(numDivs*2));
    $('.sketch').hover(moveIn);
}


