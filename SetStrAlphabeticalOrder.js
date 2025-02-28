// Write a JavaScript program to set a string in alphabetical order.
// Example string: 'tanay'
// Expected Output: 'aanty'


function SetString(value) {
    let newValue = value.split("").sort().join("")
    console.log(newValue)
}
SetString("tanay")