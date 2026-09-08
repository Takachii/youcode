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

function countLetterText(text) {

    let cache = "";

    for (let i=0; i<text.length; i++) {

        if (!cache.includes(text[i])) {

            let count = 0
            cache += text[i]
  
            for (let j=0; j<text.length; j++) 
                text[j] === text[i] ? count++ : count

            console.log(text[i], count)

        }

    }

}

countLetterText("Hello Youcode SAS")

function countVowels(text) {

    let count = 0;
    let vowels = "aeiou";

    for (i=0; i < text.length; i++) {
        if (!vowels.include(text[i])) continue;
        count++
    }

    return count

}

function reversWord(text) {
    
    let result = "";

    for (let i = text.length - 1 ; i >= 0; i--) {
        result += text[i];
    }

    return result

}

function countNonVowel(text) {
    
    let count = 0;
    let vowels = "aeiou";

    for (let i = 0; i < text.length; i++)
        if (!vowels.includes(text[i])) count++

    return count

}

let text = "Hello Word Im in Youcode My Level is SAS";

function reversWord(word) {

    let result = "";

    for (let i = word.length - 1 ; i >= 0; i--) {
        result += word[i];
    }

    return result

}

function isPalindromic(word) { return word === reversWord(word) }

function countLogestPalindromic(text) {

    let count = 0;
    let arr = text.trim().toLowerCase().split(" ")
    let high = "";

    for (let i=0; i<arr.length; i++)
        if (isPalindromic(arr[i])) {
            if (arr[i].length > high.length) {
                high=arr[i];
            }
        }

    return high.length > 0 ? high : "Invalid Find Logest Palindromic !";

}

console.log(countLogestPalindromic(text))