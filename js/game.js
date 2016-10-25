(function diceGame() {

console.log('start');
    // Use document.querySelector('...') to find HTML elements
    // The argument into the function is a CSS selector!
    // Any HTML element has an `innerText` property that you can
    // access (or change) for the contents of that element.

    document.querySelector('button').addEventListener('click', function buttonClicked() {

        // var dieNumOne = document.querySelector('.dice aside:first-child').innerText;
        // console.log(dieNumOne);
        //
        // var dieNumTwo = document.querySelector('.dice aside:last-child').innerText;
        // console.log(dieNumTwo);

        var diceRollOne = diceGame.diceRoll();
        var diceRollTwo = diceGame.diceRoll();

        document.querySelector('.dice aside:first-child').innerText = diceRollOne;
        document.querySelector('.dice aside:last-child').innerText = diceRollTwo;

        if ((diceRollOne + diceRollTwo) === 7 || (diceRollOne + diceRollTwo) === 11) {
          document.querySelector('.result').innerText = 'Winner';
          var finish = new Date();
          document.querySelector('.message').innerText = '(It took you ' + ( diceGame.rounds.length + 1 ) + ' times and ' + ( (finish.getTime() - diceGame.startDate.getTime() ) / 1000) + ' seconds)';
        }
        else {
          document.querySelector('.result').innerText = 'Try Again';
        }

        diceGame.rounds.push (diceRollOne + diceRollTwo);
          console.log(diceGame.rounds);

    });

    var diceGame = {
      startDate: new Date(),
      rounds: [],
      diceRoll: function diceRoll() {
        return Math.ceil(Math.random() * 6);
      }
    }



document.querySelector('.game-start').innerText = 'Game started' + diceGame.startDate;
})();
