/* 
Code: Guess the random number
*/

// function whose generator random number
function generateNumber(min: number = 0, max: number = 100): number {
  min = Math.floor(min)
  max = Math.ceil(max)
  return Math.ceil(Math.random() * (max - min) + min)
}

const generatedNumber: number = generateNumber(50, 60)

// Let this is input Value
const inputNumber = 55

// check the condition where the number matches or lower or greater
function checkInput( inputNumber: number): any {
  if (inputNumber < generatedNumber)
    return `Your guess is wrong. Value is greater than ${inputNumber}.`
  if (inputNumber > generatedNumber)
    return `Your guess is wrong. Value is less than ${inputNumber}.`
  if (inputNumber == generatedNumber)
    return `Your guess is correct. Value is ${inputNumber}.`
}

console.log(checkInput(inputNumber))


