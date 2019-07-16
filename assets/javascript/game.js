// app starts w/ player pick//
// player vs enemy: set health, power//
// list events in regards to play: click //


// declaring objects for characters //
var chars = [{
    name: "finn",
    health: 100,
    attack: 15,
},
{
    name: "jake",
    health: 120,
    attack: 18,
},
{
    name: "iceking",
    health: 130,
    attack: 10,
},
{
    name: "lsp",
    health: 150,
    attack: 20,

}]


var player = {};
var chosenChar
$(".chars").on("click", function(){

    
    console.log($(this).attr("name"));
    for(var i = 0; i < chars.length; i++){

        if ($(this).attr("name") === chars[i].name){
            player.health = chars[i].health;
            printToScreen();

            console.log(chars[i].health);
            console.log(chars[i].attack);

        }
    

        console.log(chars[i].name);
        
    }
})

// let player = {
//     health: 180,
//     power: 20,

// }

let enemy = {
    health: 120,
    power: 20
}

const attack = () => {
    let playerAtk = Math.floor(Math.random() * player.power);
    enemy.health -= playerAtk;
    printToScreen();

}

const printToScreen = () => {
    document.getElementById('player-health').innerText = player.health;
    document.getElementById('enemy-health').innerText = enemy.health;

}
