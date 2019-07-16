let player = {
    health: 180,
    power: 20,

}

let opponent = {
    health: 120,
    power: 20
}

cont attack = () => {
    let playerAtk = Math.random();
    console.log(playerAtk);
}

const printToScreen = () => {
    document.getElementById('player-health').innerText = player.health;
    document.getElementById('enemy-health').innerText = enemy.health;

}
