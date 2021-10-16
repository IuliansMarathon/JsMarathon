const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $fightButton = document.querySelector('.button2');


$fightButton.style.display = 'none';

const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    attack: function(name) {
        console.log(name + ' ' + 'Fight...');
    },
}

const player2 = {
    player: 2,
    name: 'SONYA',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    attack: function(name) {
        console.log(name + ' ' + 'Fight...');
    },
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if(className) {
        $tag.classList.add(className);
    }

    return $tag;
}


function createPlayer(playerObj) {

    const $player = createElement('div', 'player' + playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player
}

function fightAgain() {
    const $winTitle = document.querySelector('.loseTitle');
    $winTitle.remove();

    player1.hp = 100;
    player2.hp = 100;

    // const $characterLoser = document.querySelectorAll('.character > .character-loser');
    // console.log($characterLoser);
    // $characterLoser.remove();



    const $playerLife1 = document.querySelector('.player1' + ' .life');
    $playerLife1.style.width = player1.hp + '%';

    const $playerLife2 = document.querySelector('.player2' + ' .life');
    $playerLife2.style.width = player1.hp + '%';

    // $randomButton.disabled = true //! Так не интересно

    $fightButton.style.display = 'none';
    $randomButton.style.display = 'block';
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.ceil(Math.random() * 20);
    $playerLife.style.width = player.hp + '%';

    if(player.hp <= 0) {
        player.hp = 0;
        $playerLife.style.width = 0;
        $randomButton.style.display = 'none';
        $fightButton.style.display = 'block';
    }

    console.log(player.name + ' ' + player.hp);
}

function winner() {
    // const $playerCharacter1 = document.querySelector('.player1 > .character');
    // const $playerCharacter2 = document.querySelector('.player2 > .character');

    if(player1.hp > 0) {
        $arenas.appendChild(playerWins(player1.name));
        // $playerCharacter2.classList.add('character-loser');
    } else if (player2.hp > 0) {
        $arenas.appendChild(playerWins(player2.name));
        // $playerCharacter1.classList.add('character-loser');
    } else {
        $arenas.appendChild(nobodyWins());
        // $playerCharacter1.classList.add('character-loser');
        // $playerCharacter2.classList.add('character-loser');
    }
}

function playerWins(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' wins';

    return $loseTitle;
}

function nobodyWins() {
    const $nobodyWins = createElement('div', 'loseTitle');
    $nobodyWins.innerText = 'nobody wins';

    return $nobodyWins;
}

function finishChangeHp() {
    changeHP(player1);
    changeHP(player2);
    if(player1.hp <= 0 || player2.hp <=0) {
        winner();
    }
}

$fightButton.addEventListener('click', function() {
    fightAgain();
})

$randomButton.addEventListener('click', function() {
    console.log('####');
    finishChangeHp();
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

