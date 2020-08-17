// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// helloWorld function
function sayHello(str) {
    if (typeof str !== 'string') return "Hello, World!"
    if (!isNaN(str)) return "Hello, World!"
    return "Hello, " + str + "!"
}

// isFive function
function isFive(num) {
    return (num == 5)
}

// isEven function
function isEven(num) {
    if (num === null) return false;
    return (num%2 == 0);
}

// isVowel function
function isVowel(chr) {
    let vowels = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    return vowels.includes(chr);
}

// add function
function add(n1, n2) {
    if(isNaN(n1)) return 0
    if(isNaN(n2)) return 0
    return n1 + n2
}