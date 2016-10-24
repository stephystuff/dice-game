(function diceGame() {

console.log('start');
    // Use document.querySelector('...') to find HTML elements
    // The argument into the function is a CSS selector!
    // Any HTML element has an `innerText` property that you can
    // access (or change) for the contents of that element.

    document.querySelector('button').addEventListener('click', function buttonClicked() {

        var dieNumOne = document.querySelector('.dice aside:first-child').innerText;
        console.log(dieNumOne);

        var dieNumTwo = document.querySelector('.dice aside:last-child').innerText;
        console.log(dieNumTwo);

        document.querySelector('.dice aside:first-child').innerText = diceGame.diceRoll();
        document.querySelector('.dice aside:last-child').innerText = diceGame.diceRoll();

    });

    var diceGame = {
      startDate: new Date(),
      rounds: [],
      diceRoll: function diceRoll() {
        return Math.ceil(Math.random() * 6);
      }
    }


    console.log( diceGame.diceRoll() );
})();
