/**
 * This program is about Rock-Paper-Scissors game
 *     with a computer opponent.
 *
 * By:      Seti Ngabo
 * Version: 1.0
 * Since:   2022-09-20
 */

import promptSync from 'prompt-sync'

// The program will show the user if he won or lost
const prompt = promptSync()
const rock = 1
const paper = 2
const scissor = 3
const lower = 1
const higher = 3

const randomNumber = Math.floor(Math.random() * higher + lower)
// input
const userString = prompt(
  'Choose one of the following(rock(1), paper(2), or scissors(3)): '
)
const user = parseFloat(userString)
// process & output
if (user === randomNumber) {
  console.log('You tied!')
} else if (user === rock && randomNumber === paper) {
  console.log('You lose, try again.')
} else if (user === rock && randomNumber === scissor) {
  console.log('You won!')
} else if (user === paper && randomNumber === rock) {
  console.log('You won!')
} else if (user === paper && randomNumber === scissor) {
  console.log('You lose, try again.')
} else if (user === scissor && randomNumber === rock) {
  console.log('You lose, try again.')
} else if (user === scissor && randomNumber === paper) {
  console.log('You won!')
} else {
  console.log('\nInvalid input, try again.')
}

console.log('\nDone.')
