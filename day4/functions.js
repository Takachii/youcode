function sayHello() {
    console.log("Hello World!")
}

sayHello()

function simpleCalcule(type, a, b) {
    
    let result = 0;

    if (!type || typeof type !== "string") {
        console.log("Please select type of this calculate !")
        return false
    }
    
    switch(type) {
        case "add":
            result = a + b;
            break
        case "del":
            result = a - b;
            break
        case "square":
            result = a * b;
            break
    }

    console.log(`Result of type: (${type}) =`, result)

}

// simpleCalcule(1, 4) || here should get error `Please select type of this calculate !`
simpleCalcule("add", 1, 4)

const showProducts = (id, name, count, price) => {
    console.log(id, name, count, price)
}

showProducts("id: "+1, "Name: "+"Item 1", "X"+12, "$"+19.99)