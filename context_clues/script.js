var FRIEND_NAMES = ['Adam', 'Barbara', 'Charlie', 'Davis', 'Eric'];
var LOCATION_NAMES = ['Study', 'Dining Room', 'Billiard Room', 'Library', 'Conservatory', 'Kitchen', 'Foyer', 'Hall', 'Lounge', 'Bathroom'];
var WEAPON_NAMES = ['Acid', 'Axe', 'Battleaxe', 'Candlestick', 'Chainsaw', 'Cinderblock', 'Doberman', 'Jack', 'Knife', 'Lead Pipe', 'Laser', 'Machine Gun', 'Machete', 'Poison', 'Revolver', 'Rifle', 'Rope', 'Sword', 'Shotgun', 'Wrench']

document.addEventListener("DOMContentLoaded", function() {
    for (var i = 0; i < 100; i++) {
        var h3 = document.createElement('h3');
        var h3Text = `Accusation${i + 1}`;
        var h3TextNode = document.createTextNode(h3Text);
        h3.appendChild(h3TextNode);
        h3.addEventListener('click', handleAccusation(i));
        document.body.appendChild(h3);
    }

    //when functions are created they get a snapshot
    function handleAccusation(i) {
        return function() {
            alert(`Accusation${i + 1}: I accuse ${FRIEND_NAMES[i % 5]}, with the ${WEAPON_NAMES[i % 20]} in the ${LOCATION_NAMES[i % 10]}!`);
        }
    }
})
