function CapitalizeWord(word) {
    let newString = word.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
    let finalString = newString.join(" ")
    console.log(finalString)
}
CapitalizeWord("hello tanay!") // Hello Tanay!