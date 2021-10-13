//! TASK 0

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

//! TASK 1 

function createPlayer(player, name) {

    const $arenas = document.querySelector('.arenas');
    
    const $player1 = document.createElement('div');
    $player1.classList.add(player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = `100%`;

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = name;

    const $img = document.createElement('img');
    $img.classList.add('img');
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';

    $arenas.appendChild($player1);
    $player1.appendChild($progressbar);
    $player1.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
}

createPlayer('player1', 'SCORPION');

//! TASK 2

function createPlayer(player, name, hp) {

    const $arenas = document.querySelector('.arenas');
    
    const $player1 = document.createElement('div');
    $player1.classList.add(player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = `100%`;
    $life.innerText = hp;

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = name;

    const $img = document.createElement('img');
    $img.classList.add('img');
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif';
    $img.alt = name;

    $arenas.appendChild($player1);
    $player1.appendChild($progressbar);
    $player1.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
}

createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);


//! TASK 3(*)

function createPlayer (playerClass, playerName) {

    const $arenas = document.querySelector('.arenas');

    const $player = document.createElement('div');
    $player.classList.add(playerClass);

    const $progressbar = document.createElement('div')
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = `${playerName.hp}%`;

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = playerName.name;

    const $img = document.createElement('img');
    $img.src = playerName.img;
    
    
    $arenas.appendChild($player);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
}

createPlayer('player1', player1);
createPlayer('player2', player2);
