// Description: Write a function that takes a string and returns an object containing the count for each letter in the string.
// Example: Occurrence("Tanay") => {T: 1, a: 2, n: 1, y: 1}


function Occurrence(word) {
    var str = {}
    word.split('').forEach(function (elem) {
        str.hasOwnProperty(elem) ? str[elem]++ : str[elem] = 1;
    })
    console.log(str);
    return str;
}

Occurrence("aaaaabbbcc");