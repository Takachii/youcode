function findWordIndex(text, word) { return text.indexOf(word) }

console.log(findWordIndex("Today is good day in youcode !", "youcode"))

function countVowels(text) {

    let count = 0;
    let baseVowels = "jhdksa";

    for (let i=0; i<text.length; i++) {
        baseVowels.includes(text[i].toLowerCase()) ? count++ : count
    }

    return count;

}

console.log(countVowels("youcode"))
console.log(countVowels("YOUCODE"))

const countLetter = (text, letter) => {
    
    let count = 0;

    for (let i=0; i<text.length; i++) {
        if ( text[i].toLowerCase() ===  letter.toLowerCase() ) count++
    }

    return count;

}

console.log(countLetter("Youcode", "O"))

function reverseString(text) {

    let result = "";

    for (let i = text.length - 1 ; i >= 0; i--) {
        result += text[i]
    }

    return result;

}

console.log(reverseString("Hello Youcode"))