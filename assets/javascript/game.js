$(document).ready(function () {

    // declaring vars for characters from html //

    // var finnChar = $("#finnH");
    // var jakeChar = $("#jakeD");
    // var iceKingChar = $("#iceKing");
    // var lsPChar = $("#lsP");

    // declar var for all characters in an array of objects //

    var allChars = [
        {
            name: "finn",
            health: 100,
            attack: 15,
            counter: 20,
            img: "assets/images/finn.png"

        },
        {
            name: "jake",
            health: 120,
            attack: 18,
            counter: 35,
            img: "assets/images/jake.png"
        },
        {
            name: "iceking",
            health: 130,
            attack: 10,
            counter: 5,
            img: "assets/images/iceking.png"
        },

        {
            name: "lsp",
            health: 150,
            attack: 20,
            counter: 18,
            img: "assets/images/lsp.png"

        }
    ];

    // listed all possible vars //

    var player;
    var chosenEn;
    var currentAttack = 0;
    var wins = 0;
    // var restartBtn = $("#restart-button");
    // var attackBtn = $("#attack-button");

    // user selecting character on click //

    $(".chars").on("click", function() {
        if (!player) {
            var index = $(this).val();
            parseInt(index);
            player = allChars[index];

            $("#player-health").append(player.health);
            $("#characs").hide();

            var input = $("<input>");
            input.attr("type", "image");
            input.attr("src", player.img);
            input.attr("id", "chosenChar");
            $("#youChar").append(input);

            for (var i = 0; i < allChars.length; i++) {
                if (player.name != allChars[i].name) {
                    var input2 = $("<input>");
                    input2.attr("type", "image");
                    input2.attr("src", allChars[i].img);
                    input2.addClass("enemy");
                    input2.attr("name", allChars[i].name);
                    $("#enemyS").append(input2);
                }
            };
        };
    });

    $("#enemyS").on("click", ".enemy", function() {
        if (!chosenEn) {            
            var nemesis = $(this).val();
            parseInt(nemesis);
            chosenEn = allChars[nemesis];
            $("#opponent-health").append(chosenEn.health);
            // $("#characs").hide();

            var input3 = $("<input>");
            input3.attr("type", "image");
            input3.attr("src", chosenEn.img);
            input3.attr("id", "chosenEn");
            $("#defenderS").append(input3);
            
            for (var j = 0; j < allChars.length; j++) {
                if (nemesis.name!= allChars[j].name) {
                var input4 = $("<input>");
                input4.attr("type", "image");
                input4.attr("src", allChars[j].img);
                input4.addClass("enemy");
                input4.attr("name", allChars[j].name);
            }
            }
        }
    });

    $("#attack-button").on("click", function () {
        playerAtk();
        counterAtk();
        if (wins === 3) {
            playerWin();
        }
    });


    function playerAtk() {
        playerAtk += player.attack;
        opponent.health -= currentAttack;
        $("#opponent-health").text(opponent.health);
        if (opponent.health <= 0 && char.health > 0) {
            playerDead();
        };

    };

    function counterAtk() {
        if (char.health > 0) {
            char.health -= opponent.counter;

        }
        if (char.health <= 0) {
            $("#textBox").append("You Lose!!");

        }
        $("#player-health").text(char.health);
    };

    function playerDead() {
        wins++;
        $(opponent).html("<img src='assets/images/") + opponent.loseImg;
        $(opponent).addClass("defeated");
        $("#fightS").append(opponent);
        $("textBox").append("You defeated one of them! Choose another enemy!");
        opponent = "";

    };

    function playerWin() {
        $("#textBox").text("You have defeated all 3 enemies, you win!");
    };


});