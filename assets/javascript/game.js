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
        loseImg: "finnlose.png",
    },
    {
        name: "jake",
        health: 120,
        attack: 18,
        counter: 35,
        loseImg: "jakelose.png",
    },
    {
        name: "iceking",
        health: 130,
        attack: 10,
        counter: 5,
        loseImg: "icekinglose.png",
    },
    {
        name: "lsp",
        health: 150,
        attack: 20,
        counter: 18,
        loseImg: "lsplose.png"

    }]

    // listed all possible vars //

    var player = "";
    var chosenChar = "";
    var opponent = "";
    var chosenEn = "";
    var currentAttack = 0;
    var wins = 0;
    var restartBtn = $("#restart-button");
    var attackBtn = $("#attack-button");

    // user selecting character on click //

    $(".chars").on("click", function () {

        // if ()

        for (var i = 0; i < allChars.length; i++) {

            if ($(this).attr("name") === allChars[i].name) {
                player.health = allChars[i].health;
                printToScreen();

                console.log(allChars[i].health);
                console.log(allChars[i].attack);

            }

            console.log(allChars[i].name);

        }

    });

    $(".chars").on("click", function () {

        console.log($(this).attr("name"));

        for (var j = 0; j < allChars.length; j++) {

            if ($(this).attr("name") === allChars[j].name) {
                enemy.health = allChars[j].health;
                printToScreen();

                console.log(allChars[j].health);
                console.log(allChars[j].attack);
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