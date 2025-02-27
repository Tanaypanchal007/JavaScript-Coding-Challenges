// Function to reverse each word in a given string
function Reverse(newString) {

    // Step 1: Split the input string into an array of words
    var NewString = newString.split(" ");

    // Step 2: Reverse each word individually
    var some = NewString.map(function (word) {
        // Split each word into characters, reverse the characters, and join them back into a word
        return word.split("").reverse().join("");
    });

    // Step 3: Join the reversed words back into a single string with spaces between words
    var finalString = some.join(" ");

    // Step 4: Output the final reversed string
    console.log(finalString);
}

// Call the function with a sample string
Reverse("Tanay Kaise Ho Bhai");
