let string = "Hello World !    ";

console.log(string[0] + string[1])

console.log(string.slice(0, 5))
console.log(string.slice(6))

console.log(string.includes("Hello"), string.includes("world")) // true, false

console.log(string.toUpperCase())
console.log(string.toLowerCase())

console.log(string.length, string.trim(), string.trim().length)

console.log(string.indexOf("World"))

console.log(string.split(" "))