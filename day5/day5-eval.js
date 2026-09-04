const name1 = "  sara amrani  ";
const birthYear1 = 2005;
const name2 = "OMAR ALAOUI";
const birthYear2 = 2003;
const name3 = "Nadia Idrissi";
const birthYear3 = 2004;

// Step 1

console.log("=== Student ID Badge Formatter ===")
console.log(name1, birthYear1, "|", name2, birthYear2, "|", name3, birthYear3)

// Step 2

function cleanName(name) { return name.trim().toLowerCase() }

console.log("Cleaned name 1:", cleanName(name1))
console.log("Cleaned name 2:", cleanName(name2))
console.log("Cleaned name 3:", cleanName(name3))

// Step 3

function capitalizeName(name) {

    let CName = cleanName(name);
    let Space = CName.indexOf(" ")
    let First = CName[0].toUpperCase()
    let FirstFull = First + CName.slice(1, Space)
    let Last = CName.slice(CName.indexOf(" ") + 1, CName.indexOf(" ") + 2).toUpperCase()
    let LastFull = Last + CName.slice(Space + 2)

    return FirstFull + " " + LastFull

}

console.log("Capitalized name 1:", capitalizeName(name1))
console.log("Capitalized name 2:", capitalizeName(name2))
console.log("Capitalized name 3:", capitalizeName(name3))

// Step 4

function getInitials(name) {

    let CName = capitalizeName(name);
    return CName[0] + CName[CName.indexOf(" ") + 1]

}

console.log("Initials 1:", getInitials(name1))
console.log("Initials 2:", getInitials(name2))
console.log("Initials 3:", getInitials(name3))

// Step 5

function buildBadgeCode(initials, birthYear) { return `YC-${getInitials(initials)}-${String(birthYear).slice(2)}` }

console.log("Badge code 1:", buildBadgeCode(name1, birthYear1))
console.log("Badge code 2:", buildBadgeCode(name2, birthYear2))
console.log("Badge code 3:", buildBadgeCode(name3, birthYear3))

// Step 6

function generateBadge(rawName, birthYear) { return capitalizeName(rawName) + " - Badge: " + buildBadgeCode(rawName, birthYear) }

console.log(generateBadge(name1, birthYear1))
console.log(generateBadge(name2, birthYear2))
console.log(generateBadge(name3, birthYear3))

// Bonus Section
// Bonus Step 1

function isValidName(name) { return name.length >= 4 }

console.log("Name 1 valid:", isValidName(name1))
console.log("Name 2 valid:", isValidName(name2))
console.log("Name 3 valid:", isValidName(name3))

// Bonus Step 2

function countVowelsInName(name) {

    let count = 0;
    let vowels = "aeiou"
    let CName = cleanName(name)

    for (let i=0; i<CName.length; i++) {
        if (vowels.includes(CName[i])) count++
    }

    return count

}

console.log("Vowels in name 1:", countVowelsInName(name1))
console.log("Vowels in name 2:", countVowelsInName(name2))
console.log("Vowels in name 3:", countVowelsInName(name3))

// Fin