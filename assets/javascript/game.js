$(document).ready(function () {

// declaring vars for characters from html //

var finnChar = $("#finnH");
    var jakeChar = $("#jakeD");
    var iceKingChar = $("#iceKing");
    var lsPChar = $("#lsP");

// declar var for all characters in an array of objects //

var allChars = [{
    name: "finn",
    health: 100,
    attack: 15,
    counter: 20,
},
{
    name: "jake",
    health: 120,
    attack: 18,
    counter: 35,
},
{
    name: "iceking",
    health: 130,
    attack: 10,
    counter: 5,
},
{
    name: "lsp",
    health: 150,
    attack: 20,
    counter: 18,

}]

// user selecting character on click //
var player = {};
var chosenChar;

var chosenChar = "";
var opponent = "";
var currentE = "";
var currentAttack = 0;
var wins = 0;
var restartBtn = $("<button>Restart</button>");
var attackBtn = $('#attack-button" ATTACK!');



$(".chars").on("click", function () {

    console.log($(this).attr("name")); // logging the chars name list //

    for (var i = 0; i < chars.length; i++) {

        if ($(this).attr("name") === chars[i].name) {
            player.health = chars[i].health;
            printToScreen();

            console.log(chars[i].health);
            console.log(chars[i].attack);

        }

        console.log(chars[i].name);

    }
});

var enemy = {};
var chosenEn;

$(".chars").on("click", function() {

    console.log($(this).attr("name"));

    for (var j = 0; j < chars.length; j++) {

        if($(this).attr("name") === chars[j].name) {
            enemy.health = chars[j].health;
            printToScreen();

            console.log(chars[j].health);
            console.log(chars[j].attack);
        }
    }



});



// const attack = () => {
//     let playerAtk = Math.floor(Math.random() * player.power);
//     enemy.health -= playerAtk;
//     printToScreen();

// }

const printToScreen = () => {
    document.getElementById('player-health').innerText = player.health;
    document.getElementById('enemy-health').innerText = enemy.health;

}


});