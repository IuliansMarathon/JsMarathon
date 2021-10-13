
const player1 = {
    name: 'Scorpion',
    hp: 25,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [ 
        'ak-47',
    ],
    attack: function() {
        console.log(this.name + ' - Fight...');
    }
}

const player2 = {
    name: 'SubZero',
    hp: 75,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: [ 
        'm4a1-s'
    ],
    attack: function() {
        console.log(this.name + ' - Fight...');
    }
}

function createPlayer (playerClass, playerName) {
    const $player = document.createElement('div');
    const $progressbar = document.createElement('div')
    const $character = document.createElement('div');
    const $life = document.createElement('div');
    const $name = document.createElement('div');
    const $img = document.createElement('img');
    const $arenas = document.querySelector('.arenas');

    $img.src = playerName.img;
    $player.classList.add(playerClass);
    $progressbar.classList.add('progressbar');
    $character.classList.add('character');
    $life.classList.add('life');
    $name.classList.add('name');
    $arenas.appendChild($player);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    $life.style.width = `${playerName.hp}%`;
    $name.innerText = playerName.name;
}

createPlayer('player1', player1);
createPlayer('player2', player2);
