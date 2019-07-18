$(document).ready(function () {

    // declaring vars for characters from html //

    var finnChar = $("#finnH");
    var jakeChar = $("#jakeD");
    var iceKingChar = $("#iceKing");
    var lsPChar = $("#lsP");

    // declar var for all characters in an array of objects //

    var allChars = {
        finn: {
            health: 100,
            attack: 15,
            counter: 20,
            loseImg: "finnlose.png",

        },
        jake: {
            health: 120,
            attack: 18,
            counter: 35,
            loseImg: "jakelose.png",
        },
        iceking: {

            health: 130,
            attack: 10,
            counter: 5,
            loseImg: "icekinglose.png",
        },

        lsp: {
            health: 150,
            attack: 20,
            counter: 18,
            loseImg: "lsplose.png"

        }

    };

    // listed all possible vars //

    var player = "";
    var opponent = "";
    var chosenEn = "";
    var currentAttack = 0;
    var wins = 0;
    var restartBtn = $("#restart-button");
    var attackBtn = $("#attack-button");

    // user selecting character on click //

    $(".chars").on("click", function () {

        if (!player) {
            player = allChars[$(this).val()];

            chosenChar();
            $("#yourChar").append(this);
            $("#player-health").append(char.health);
            $(this).attr("class", "player-class");


    //     };
       
        $("#enemyS").on("click", ".chars", function chooseOp() {
            if (!chosenEn) {
                chosenEn = this;

                opponent = allChars[$(this.val)];
                $(this).removeClass("chars");
                $("#enemyS").append(this);
                $("opponent-health").append(opponent.health);


            }
        });

        function chosenChar() {
            $(".enemyS").append(finnChar, jakeChar, iceKingChar, lsPChar);

        };

            $("#attack-button").on("click", function() {
                playerAtk();
                counterAtk():
                if (wins === 3) {
                    playerWin();
                }
            });


        function playerAtk() {
            playerAtk += player.attack;
            opponent.health -= currentAttack;
            $("#opponent-health").text(opponent.health);
            if(opponent.health) <= 0 && char.health > 0) {
                playerDead();
            }
            )




        }

        // for (var i = 0; i < allChars.length; i++) {

        //     if ($(this).attr("name") === allChars[i].name) {

        //         printToScreen();

        //     console.log(allChars[i].health);
        //     console.log(allChars[i].attack);

        // }

        // console.log(allChars[i].name);

        
        
        // const attack = () => {
            //     let playerAtk = Math.floor(Math.random() * player.power);
    //     enemy.health -= playerAtk;
    //     printToScreen();
    
    // }
    
    const printToScreen = () => {
        document.getElementById('player-health').innerText = player.health;
        document.getElementById('enemy-health').innerText = enemy.health;
        
    };

});

