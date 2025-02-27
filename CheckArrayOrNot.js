// In this challenge program, you have to check if the given argument is an array or not.
// To do this, you should use the Array method .isArray because if you use typeof, 
// it will return "object" for arrays, which is not specific enough.
// Therefore, it is recommended to use the isArray method to get the correct result.


const IsArray = (value) => {
    return Array.isArray(value)
}

console.log(IsArray([]))
console.log(IsArray({}))