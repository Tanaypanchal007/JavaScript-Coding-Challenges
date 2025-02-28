// In This Program we have to reverse the number.
// For Example: If the given number is 1234567890 then the output should be 0987654321.
// There are two ways to solve this problem.


// First Way to solve this problem 
function NumberReverse(num) {
    let value = num
    let newValue = value.toString().split('').reverse().join('')
    let FinalValue = Number(newValue)
    console.log(FinalValue)
}

NumberReverse(1234567890);

// Second Way to solve this problem

function NumberReverse(num) {
    let value = num
    let newValue = 0
    while (value > 0) {
        let rem = value % 10
        newValue = newValue * 10 + rem
        value = parseInt(value / 10)
    }
    return newValue


}
console.log(NumberReverse(12345))