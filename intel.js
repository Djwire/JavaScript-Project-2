//String Manipulation Functions

function reverseString(str) {
    return str.split('').reverse().join('')
}


console.log(reverseString("hello"))

function countCharacters(str) {
    return str.length;
}


console.log(countCharacters("hello world"))

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


console.log(capitalizeWords("hello world"))


//Array Functions

function findMaximum(arr) {
    return Math.max(...arr)
}

console.log(findMaximum([1, 2, 3, 4, 5]))

function findMinimum(arr) {
    return Math.min(...arr)
}


console.log(findMinimum([1, 2, 3, 4, 5]))

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}


console.log(sumArray([1, 2, 3, 4, 5]))

function filterArray(arr, condition) {
    return arr.filter(condition);
}


console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 === 0))


// Mathematicial Functions

function factorial(n) {
    if (n === 0 || n === 1) return 1
    return n * factorial(n - 1)
}

console.log(factorial(5))

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }
    return true
}

console.log(isPrime(7))
console.log(isPrime(10))

function fibonacciSequence(n) {
    const sequence = []
    let a = 0, b = 1
    for (let i = 0; i < n; i++) {
        sequence.push(a)
        [a, b] = [b, a + b]
    }
    return sequence
}

console.log(fibonacciSequence(10))
