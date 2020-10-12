// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * The variable count is declared inside the function in counter1 and the variable is declared outside the function in counter2. 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter2 is a closure because the function calls for a variable declared outside of it. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter1 would be preferable if you only want the variable to be accessible/defined inside the function and not be reused from other functions.  counter2 would be better in a scenario which wanted to use the variable by multiple functions. 
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {

  /*Code Here*/
  let inningScore = Math.floor(Math.random() * 3);

  return inningScore;

}



/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(inning, inningNumber) {
  let score = {
    homeTeam: 0,
    awayTeam: 0
  }
  /*Code Here*/
  for (let i = 0; i < inningNumber; i++) {

    score.homeTeam += inning();
    score.awayTeam += inning();
  }
  return score;
}
console.log(finalScore(inning, 5));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(inning, inningNumber, finalScore) {

  /* CODE HERE */
  let awayScore = 0;
  let homeScore = 0;

  for (let i = 1; i <= inningNumber; i++) {
    let inningTotal = finalScore(inning, i);

    awayScore += inningTotal.awayTeam;
    homeScore += inningTotal.homeTeam;
    if (i === 1) {
      console.log(`${i}st inning: ${awayScore} - ${homeScore}`);

    } else if (i === 2) {
      console.log(`${i}nd inning: ${awayScore} - ${homeScore}`)
    } else if (i === 3) {
      console.log(`${i}rd inning: ${awayScore} - ${homeScore}`)

    } else {

      console.log(`${i}th inning: ${awayScore} - ${homeScore}`)

    }


  }
  console.log(`Final Score: ${awayScore} - ${homeScore}`);


}

scoreboard(inning, 9, finalScore);