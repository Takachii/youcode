let person = { name: "Sara", age: 20, city: "Marrakesh" };
console.log(person);

let key = "name";
let person2 = { name: "Omar" };
console.log(person2[key]);

let car = { brand: "Toyota", 
    specs: { year: 2022, color: "blue" } 
};

console.log(car);

let product = { title: "Book", price: 50 };
console.log("price" in product); // true

const object = { name:"Temp Username", age:24, email:"tempmail@youcode.com", isActive:true };

function isValidProfile(profile) {

    if (typeof profile !== "object")
        return "Invalid profile data !"

    if (typeof profile.name !== "string" || profile.name.length === 0)
        return "Invalid user name !"

    if (typeof profile.email !== "string" || ! profile.email.includes("@") || profile.email.length <= 0)
        return "Invalid user email address !"

    if (typeof profile.age !== "number" || profile.age <= 0)
        return "Invalid user age !"

    if (typeof profile.isActive !== "boolean")
        return "user active data are invalable !"

    return profile.isActive

}

console.log(isValidProfile(object))

const arr = [
    {id:1, name:"Product 1", price: 9.99},
    {id:2, name:"Product 2", price: 19.99},
]

function calculTotalPrice(list) {
    let total=0;
    for (let i=0; i<list.length; i++) total+=list[i].price
    return total
}

console.log(calculTotalPrice(arr))

const products = [
    {id:1, name:"Product 1", price: 9.99, inStock:true},
    {id:2, name:"Product 2", price: 19.99, inStock:false},
    {id:3, name:"Product 3", price: 24.99, inStock:true},
]

function buildInStock(list) {
    let result=[];
    for (let i=0; i<list.length; i++) {
        if (list[i].inStock) result.push(list[i])
    }
    return result
}

console.log(buildInStock(products))

const players = [
    {name:"Player 1", score: 1},
    {name:"Player 2", score: 4},
    {name:"Player 3", score: 3},
    {name:"Player 4", score: 6},
    {name:"Player 5", score: 9},
]

function sortPlayerScore(arr) {

    let result = [];

    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length-1-i; j++) {
            if (arr[j+1] && arr[j].score<arr[j+1].score) {

                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp

            }
        }
    }

    for (let i=0; i<arr.length; i++) result.push(arr[i].name)

    return result

}

console.log(sortPlayerScore(players))