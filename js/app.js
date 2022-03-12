'use strict';

//Score variable for loops
let finalScore = 0;

// //Question 1 ---------------------------------------------------------------------
function questionOne() {
  let question1 = prompt('Do I have a degree with a minor in web design?').toLowerCase();

  if (question1 === 'y' || question1 === 'yes') {
    //console.log('I do indeed have a degree with a minor in web design. Unfortunately it didn\'t give me coding experience.');
    alert('I do indeed have a degree with a minor in web design. Unfortunately it didn\'t give me coding experience.');
    finalScore++;
  } else {
    //console.log('Well, I actually do have a degre with a minor in web design!');
    alert('Well, I actually do have a degre with a minor in web design!');
  }
}

questionOne();

// //Question 2 ---------------------------------------------------------------------
function questionTwo() {
  let question2 = prompt('Is my favorite drink chocolate milk?').toLowerCase();

  if (question2 === 'y' || question2 === 'yes') {
    //console.log('Heck yeah! Chocolate milk is the best! :D');
    alert('Heck yeah! Chocolate milk is the best! :D');
    finalScore++;
  } else {
    //console.log('Oof, there\'s no way I wouldn\'t like chocolate milk :( ');
    alert('Oof, there\'s no way I wouldn\'t like chocolate milk :( ')
  }
}

questionTwo();

// //Question 3 ---------------------------------------------------------------------
function questionThree() {
  let question3 = prompt('Is my favorite game Guild Wars 2?').toLowerCase();

  if (question3 === 'y' || question3 === 'yes') {
    //console.log('Yes! Guild Wars 2 has been my favorite game for 2 weeks now.');
    alert('Yes! Guild Wars 2 has been my favorite game for 2 weeks now.');
    finalScore++;
  } else {
    //console.log('Wrong! It actually is my favorite game for the past 2 weeks');
    alert('Wrong! It actually is my favorite game for the past 2 weeks');
  }
}

questionThree();

// //Question 4 ---------------------------------------------------------------------
function questionFour() {
  let question4 = prompt('Did I live in Japan for 5 years?').toLowerCase();

  if (question4 === 'y' || question4 === 'yes') {
    //console.log('That\'s right! I spend 5 years living in Okinawa, Japan.');
    alert('That\'s right! I spend 5 years living in Okinawa, Japan.');
    finalScore++;
  } else {
    //console.log('No, no! I did spend 5 years in Japan.');
    alert('No, no! I did spend 5 years in Japan.');
  }
}

questionFour();

// //Question 5 ---------------------------------------------------------------------
function questionFive() {
  let question5 = prompt('Do I like Kpop?').toLowerCase();

  if (question5 === 'y' || question5 === 'yes') {
    //console.log('Yeah, I think it\s pretty good. It\'s got some positive vibes.');
    alert('Yeah, I think it\s pretty good. It\'s got some positive vibes.');
    finalScore++;
  } else {
    //console.log('I actually do. It\s got some positive vibes.');
    alert('I actually do. It\s got some positive vibes.');
  }
}

questionFive();

//Name greeting ---------------------------------------------------------------------
function greetUser() {
  let nameQuestion = prompt('Please tell me your name :)');
  alert(`Thank you for visiting my About me web page, ${nameQuestion}. Please stay awhile and enjoy the beverages and cookies.`)
}

greetUser();

//Number guessing game ---------------------------------------------------------------------
function guessingGame() {
  let numGuesses = 0;
  let answer = Math.floor((Math.random() * 10) + 1);

  while (numGuesses < 4) {
    let guess = prompt('Pick a number between 1 and 10');
    guess = parseInt(guess);

    if (isNaN(guess)) {
      alert('Please enter a number.')
    }

    if (guess > answer) {
      alert(`The guess was too high. Try again~`)
    } else if (guess < answer) {
      alert('The guess was too low. Try again~');
    } else if (guess === answer) {
      alert(`Nice job. The answer was ${answer}.`);
      finalScore++
      break;
    }
    numGuesses++;

    if (numGuesses === 4) {
      alert(`Unfortunate.. You ran out of turns. The answer was ${answer}`)
    }
  }
}

guessingGame();

//Guessing answer game -------------------------------------------------------
function favFood() {
  let myArray = ['sushi', 'ramen', 'takoyaki', 'dango'];

  let guessLimit = 0;

  while (guessLimit < 6) {
    let arrayGuess = prompt('What is one of my favorite japanese foods?').toLowerCase();
    let correct = false;

    for (let i = 0; i < myArray.length; i++) {
      if (arrayGuess === myArray[i]) {
        i = myArray.length;
        guessLimit = 6;
        correct = true;
        //  consider setting a break here
      } else if (arrayGuess !== myArray[i]) {
        //  consider removing this since it is an empty code block
      }
    }
    if (correct) {
      alert(`That\'s correct! I like ${myArray[0]}, ${myArray[1]}, ${myArray[2]}, ${myArray[3]}`);
      finalScore++;
    } else {
      alert('Not quite~ Try again');
    }

    guessLimit++
    if (guessLimit === 6) {
      alert(`Better luck next time. You ran out of guesses. I like ${myArray[0]}, ${myArray[1]}, ${myArray[2]}, ${myArray[3]}`)
    }
  }
}

favFood();

alert(`Lastly, you were being scored on the number of correct answers. Final Score: ${finalScore}`);

//alert(`That was correct! I like ${myArray[0]}, ${myArray[1]}, ${myArray[2]}, ${myArray[3]}, `)
// myArray.include 