'use strict'

let question1 = prompt('Do I have a degree with a minor in web design?').toLowerCase();

if(question1 === 'y' || question1 === 'yes'){
  alert('I do indeed have a degree with a minor in web design. Unfortunately it didn\'t give me coding experience.');
} else {
  alert('Well, I actually do have a degre with a minor in web design!');
}

let question2 = prompt('Is my favorite drink chocolate mile?').toLowerCase();

if(question2 === 'y' || question2 === 'yes'){
  alert('Heck yeah! Chocolate milk is the best! :D');
} else {
  alert('Oof, there\'s no way I wouldn\'t like chocolate milk :( ')
}

let question3 = prompt('Is my favorite game Guild Wars 2?').toLowerCase();

if(question3 === 'y' || question3 === 'yes'){
  alert('Yes! Guild Wars 2 has been my favorite game for 2 weeks now.');
} else {
  alert('Wrong! It actually is my favorite game for the past 2 weeks');
}

let question4 = prompt('Did I live in Japan for 5 years?').toLowerCase();

if(question4 === 'y' || question4 === 'yes'){
  alert('That\'s right! I spend 5 years living in Okinawa, Japan.');
} else {
  alert('No, no! I did spend 5 years in Japan.');
}

let question5 = prompt('Do I like Kpop?').toLowerCase();

if(question5 === 'y' || question5 === 'yes'){
  alert('Yeah, I think it\s pretty good. It\'s got some positive vibes.')
} else {
  alert('I actually do. It\s got some positive vibes.')
}

let nameQuestion = prompt('Please tell me your name :)');
  alert(`Thank you for visiting my About me web page, ${nameQuestion}. Please stay awhile and enjoy the beverages and cookies.`)