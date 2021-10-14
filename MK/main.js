const player1 = {
    name: 'SCORPION',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [
        'ak-47'
    ],
    attack: function() {
        console.log(this.name + ' Fight...');
    }
}

const player2 = {
    name: 'SCONYA',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: [
        'ak-47'
    ],
    attack: function() {
        console.log(this.name + ' Fight...');
    }
}

const $arenas = document.querySelector('.arenas');

function createPlayer(playerClass, playerName) {

    const $player = document.createElement('div');
    $player.classList.add(playerClass);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.innerText = playerName.hp;
    $life.style.width = `${playerName.hp}%`;

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = playerName.name;

    const $img = document.createElement('img');
    $img.src = playerName.img;
    $img.alt = playerName.name;

    $arenas.appendChild($player);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

}

createPlayer('player1', player1)
createPlayer('player2', player2)
