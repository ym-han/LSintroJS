// 4 digit num



function lastDigit (num) {
  return num % 10;
}

function digits (num) {
  let ones = lastDigit(num)
  numWithoutOnes = (num - ones)/10

  let tens = lastDigit(numWithoutOnes)
  numWithoutTens = (numWithoutOnes - tens)/10

  let hundreds = lastDigit(numWithoutTens)
  numWithoutHundreds = (numWithoutTens - hundreds)/10

  let thousands = lastDigit(numWithoutHundreds)


  console.log(`The digits are ${ones}, ${tens}, ${hundreds}, and ${thousands} (from last to first)`)
}

digits(5016)