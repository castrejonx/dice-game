function rollDice() {
    let coins = 0;

    for (let i = 0; i<10; i++) {
        const roll = Math.ceil(Math.random()*6);

        if(roll === 1) {
            alert('Die #' + (i+1) + '\nSorry, you rolled a 1!\n\nYou have ' + coins + ' gold coins.\n\nGAME OVER')
            break;
        }
        if(roll < 5) {
            alert('Die #' + (i+1) + '\nYou rolled a ' + roll + '.\nSorry, you didn\'t win any gold coins.\n\nYou have ' + coins + ' gold coins.');
            continue;
        }
        coins += roll;
        alert('Die #' + (i+1) + '\nYou rolled a ' + roll + '.\nHooray! You won ' + roll + ' gold coins!\n\nYou have ' + coins + ' gold coins.');
    }
}