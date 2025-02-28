// Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
// For example, "madam" is a palindrome.


// First way to solve this problem
function CheckStringPalindrome(stringValue) {
    let value = stringValue;
    let Newvalue = value.split('').reverse().join('');
    if (value === Newvalue) {
        console.log("Yes, It is a Palindrome");
    } else {
        console.log("No, It is not a Palindrome");
    }

}

CheckStringPalindrome("madam"); // true
CheckStringPalindrome("hello"); // false


// Second Way to solve this problem
function CheckStringPalindrome(stringValue) {
    const len = stringValue.length;

    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (stringValue[i] !== stringValue[len - i - 1]) {
            console.log("No, It is not a Palindrome");
            return;
        }
    }

    console.log("Yes, It is a Palindrome");
}

CheckStringPalindrome("madam");
CheckStringPalindrome("hello");
