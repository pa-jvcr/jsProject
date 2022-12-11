'use strict'

let number = 5
const leftBorderWidth = 1

number = 10
console.log(number)

const obj = {
  a: 50,
}

obj.a = 10
console.log(obj)

//snake_case
//UPPER_CNAKE_CASE
//KEBAB-case
//PascalCase

// alert('Hello')

// const result = confirm('How are you?')
// console.log(result)

// const answer = prompt('Do you speak English?', 'Yes') // +prompt - this is number
// console.log(answer)

const answers = []

answers[0] = prompt('What is your name?', '')
answers[1] = prompt('What is your name2?', '')
answers[2] = prompt('What is your name3?', '')

document.write(answers)
