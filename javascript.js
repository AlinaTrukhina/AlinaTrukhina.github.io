    //JavaScript for the tablinks
function openPage(pageName,elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  document.getElementById(pageName).style.display = "block";
//  elmnt.style.backgroundColor = color;
}

//Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Color Guessing game
// src="js/color-guessing-game.js"
const COLORS_ARRAY = ['black', 'brown' ,'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow', 'blue'];
let numTries = 0;

function colorGame() {
let guess = '';
let correct = false;

const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
const target = COLORS_ARRAY[targetIndex];
//        console.log(target); previously checked # of color

  do {
     COLORS_ARRAY.sort();
     guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY.join(', ') + '\n\nWhat color am I thinking of?\n');
       if (guess === null) {
         alert('You did not provide a guess.')
         return;
       }
            
     guessNumber = +guess;
     numTries += 1;
     correct = colorCheckGuess(guess, target);

  } while(!correct);
  alert('Congratulations! You guessed correctly! The color was ' + target + ' and the number of guesses was ' + numTries + ' .' );
  document.body.style.background = guess;


  }
    function colorCheckGuess(guess, target) {
        let correct = false;
        guess = guess.toLowerCase();

        if (!COLORS_ARRAY.includes(guess)) {
            alert('Your color is not on the list. Your number of guesses is ' + numTries + ' .');
        }
        else if (guess > target) {
            alert('Your color guess is alphabetically higher than my color. Your number of guesses is ' + numTries + ' .');
        }
        else if (guess < target) {
            alert('Your color guess is alphabetically lower than my color. Your number of guesses is ' + numTries + ' .');
        }
        else {
            correct = true;
        }
        return correct;
    }
    
// Dice game
function rollDice() {
    let goldCoins = 0;

    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You roll a ' + roll + '. \n Roll a 1 = game over \n Roll a 2 = roll again \n Roll 3 or 4 = lose coins \n Roll 5 or 6 = win coins');
        if (roll === 1) {
            alert('Game over, no more rolls! You have won a total of ' + goldCoins + '.');
            break;
        }
        if (roll === 2) {
            alert('You get to roll again.')
            continue;
        }
        if ((roll <= 4) && (goldCoins > 0)) {
            goldCoins -= roll; 
            console.log(goldCoins);
            alert('You lose ' + roll + ' gold coins! You have a total of ' + goldCoins + ' coins.');
            continue;
        }
        
        if (roll < 5) {
            continue;
        }
        goldCoins += roll; 
        alert('Congratulations, you win ' + roll + ' gold coins! You have won a total of ' + goldCoins + ' coins.');
       
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}


// Palindrom Checker - freeCodeCamp Beginner JavaScript challenge

function palindrome() {
  let str = prompt("Enter word(s) to be checked");
  const lowerStr = str.toLowerCase(); //convert to lower case
  const replaced = lowerStr.replace(/[^a-z0-9]/gi, ''); //remove everything but letters and numbers
//	console.log(replaced);
  
  for (let i = 0; i < replaced.length/2; i++) {
    if (replaced[i] === replaced[replaced.length - i - 1]) {
//      console.log(replaced[i]);
    } else {
      alert('No - this is not a palindrome.');
      return false;
    }
  }
    alert('Yes - this is a palindrome.');
    return true;
}
