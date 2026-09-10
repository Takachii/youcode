// Project Youcode Fin SAS 1 (Railway Manager): Hamza Elamyn

var prompt = require('prompt-sync')({ sigint: true });

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

const tickets = [];

function menuPrincipal()
{

    console.log();
    console.log("=================================");
    console.log("        RAILWAY MANAGER");
    console.log("=================================");
    console.log();

    console.log("1. Afficher les trajets");
    console.log("2. Acheter un ticket");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticket");
    console.log("5. Rechercher un ticket");
    console.log("6. Filtrer les trajets");
    console.log("7. Trier les trajets");
    console.log("8. (BONUS) Afficher total de tickets");
    console.log("9. (BONUS) Afficher total chiffre d'affaires");
    console.log("10. (BONUS) Afficher trajet le plus vendu");
    
    console.log("0. Quitter");
    console.log();

    while(true) {
        
        let input = prompt("Votre choix : ").trim();
        if (input === "0") break;
        else if (input === "1") {
            listTrips(trips);
            break;
        } else if (input === "2") {
            buyTicket();
            break;
        } else if (input === "3") {
            listTickets(tickets);
            break;
        } else if (input === "4") {
            deleteTicket()
            break;
        } else if (input === "5") {
            findTicket();
            break;
        } else if (input === "6") {
            filterCity();
            break;
        } else if (input === "7") {
            sortTrips();
            break;
        } else if (input === "8") {
            getTotalTickets();
            break;
        } else if (input === "9") {
            getTotalTicketsPrice();
            break;
        } else if (input === "10") {
            getTopTicketSells();
            break;
        }

    }

}

function listTrips(arr) 
{

    console.log();
    console.log("=== TRAJETS DISPONIBLES ===");

    for (let i=0; i<arr.length; i++) {
        console.log(`\n#${i+1} ${arr[i].departure} → ${arr[i].destination}`);
        console.log(`Départ : ${arr[i].departureTime}`);
        console.log(`Arrivée : ${arr[i].arrivalTime}`);
        console.log(`Prix : ${arr[i].price} DH`);
        console.log(`Places disponibles : ${arr[i].availableSeats}`);
    }

    menuPrincipal();

}

function getTripFromID(id)
{
    for (let value of trips) if (value.id === id) return value;
    return false;
}

function buyTicket() 
{

    let ticketID, ticketName;

    while(true) {
        ticketName = prompt("Nom du passager : ").trim().toLowerCase();
        ticketName = ticketName[0].toUpperCase() + ticketName.slice(1).toLowerCase()
        if (ticketName.length === 0) console.log("Veuillez écrire le nom correctement !");
        break;
    }
    
    while(true) {

        ticketID = Number(prompt("Identifiant du trajet : "));
    
        if (ticketID <= 0 )  {
            console.log("Veuillez saisir un numéro valide.");
        } else {
            break;
        }

    }

    let tripObject = getTripFromID(ticketID);

    if (!tripObject || typeof tripObject !== "object") {
        console.log();
        console.log("Trajet introuvable.");
        menuPrincipal();
    } 

    if (tripObject.availableSeats <= 0) { 
        console.log();
        console.log("Train complet.");
        menuPrincipal();
    }

    tripObject.availableSeats-=1;

    let myTicketID = tickets.length + 1;
    
    tickets.push({
        id: myTicketID,
        passengerName: ticketName,
        tripId: ticketID,
        seatNumber: 50 - tripObject.availableSeats,
        price: tripObject.price
    })

    console.log();
    console.log("Ticket acheté avec succès.");
    console.log();

    for (let value of tickets) {
        if (value.id === myTicketID) {
            console.log(`Ticket #${value.id}`);
            console.log(`Passager : ${value.passengerName}`);
            console.log(`Trajet : ${tripObject.departure} → ${tripObject.destination}`);
            console.log(`Place : ${value.seatNumber}`);
            console.log(`Prix : ${value.price} DH`);
        }
    }

    menuPrincipal();

}

function listTickets(list)
{
    console.log();
    console.log("=== TICKETS ===");

    for (let value of list) {
        let tripObject = getTripFromID(value.tripId);
        if (tripObject) {
            console.log();
            console.log(`Ticket #${value.id}`);
            console.log(`Passager : ${value.passengerName}`);
            console.log(`Trajet : ${tripObject.departure} → ${tripObject.destination}`);
            console.log(`Place : ${value.seatNumber}`);
            console.log(`Prix : ${value.price} DH`);
        }
    }

    if (list.length === 0) {
        console.log();
        console.log("Aucun ticket enregistré.");
    }

    menuPrincipal();

}

function getTicketFromID(id)
{
    for (let value of tickets) if (value.id === id) return value;
    return false
}

function getTicketIndexFromID(id)
{
    for (let i=0; i<tickets.length; i++) if (tickets[i].id === id) return i;
    return -1;
}

function deleteTicket()
{

    console.log();

    let ticketID;
    while(true) {
        ticketID = Number(prompt("Identifiant du ticket : "));
        break;
    }

    let ticketObject = getTicketFromID(ticketID);
    if (!ticketObject) {
        console.log();
        console.log("Ticket introuvable.");
        menuPrincipal();
    }

    let tripObject = getTripFromID(ticketObject.tripId);
    if (tripObject) tripObject.availableSeats+=1;

    let ticketIndex = getTicketIndexFromID(ticketID);
    if (ticketIndex === -1) {
        console.log();
        console.log("Ticket introuvable.");
        menuPrincipal();
    }

    tickets.splice(ticketIndex, 1);

    console.log();
    console.log("Ticket annulé avec succès.");
    menuPrincipal();

}

function findTicket()
{
    
    let passagerName;
    while(true) {
        passagerName = prompt("Nom du passager : ").trim().toLowerCase();
        if (passagerName.length === 0) continue;
        passagerName = passagerName[0].toUpperCase() + passagerName.slice(1).toLowerCase()
        break;
    }

    for (let value of tickets) {
        if (value.passengerName === passagerName) {
            let tripObject = getTripFromID(value.tripId);
            if (tripObject) {
                console.log();
                console.log(`Ticket #${value.id}`);
                console.log(`Passager : ${value.passengerName}`);
                console.log(`Trajet : ${tripObject.departure} → ${tripObject.destination}`);
                console.log(`Place : ${value.seatNumber}`);
                console.log(`Prix : ${value.price} DH`);
            }
        }
    }

    menuPrincipal();

}

function filterCity()
{

    let cityName;
    while(true) {
        cityName = prompt("Ville de départ : ").trim().toLowerCase();
        if (cityName.length === 0) continue;
        cityName = cityName[0].toUpperCase() + cityName.slice(1).toLowerCase()
        break;
    }

    console.log();

    for (let value of trips) {
        if (value.departure===cityName) console.log(`${value.departure} → ${value.destination} : ${value.price} DH`);
    }

    menuPrincipal();

}

function sortTrips()
{

    let result=[];
    for (let value of trips) result.push(value);
    
    for (let i=0; i<result.length; i++) {
        for (let j=0; j<result.length - i - 1; j++) {
            if (result[j].price > result[j+1].price) {
                let temp = result[j];
                result[j] = result[j+1];
                result[j+1] = temp;
            }
        }
    }

    console.log();
    for (let value of result) console.log(`${value.departure} → ${value.destination} : ${value.price} DH`);

    menuPrincipal();

}

// Bonus Statistiques

function getTotalTickets() 
{
    console.log();
    console.log("Nombre total de tickets :", tickets.length);
    menuPrincipal();
}

function getTotalTicketsPrice()
{
    let total=0;
    for (let value of tickets) total+=value.price;
    console.log();
    console.log(`Chiffre d'affaires total : ${total} DH`);
    menuPrincipal();
}

function getTotalTicketsFromTripID(id)
{
    let total=0;
    for (let value of tickets) if (value.tripId === id) total++;
    return total;
}

function getTopTicketSells()
{

    let top = 0;
    let ticketObject=[];

    for (let value of tickets) {
        if (getTotalTicketsFromTripID(value.tripId) > top) {
            top = getTotalTicketsFromTripID(value.tripId);
            ticketObject = [];
            ticketObject.push(value);
        } else if (getTotalTicketsFromTripID(value.tripId) === top) {
            ticketObject.push(value);
        }
    }

    console.log("Trajet le plus vendu :\n")
    
    let cachePrints=[];

    for (let value of ticketObject) {
        
        let cachePrintFound=false;

        for (let data of cachePrints) {
            if (data === value.tripId) {
                cachePrintFound = true;
            }
        }

        cachePrints.push(value.tripId);

        if (!cachePrintFound) {
            let tripObject = getTripFromID(value.tripId);
            console.log(`${tripObject.departure} → ${tripObject.destination}`);
        }
        
    }

    console.log();
    console.log(ticketObject.length, "tickets vendus");

    menuPrincipal();

}

menuPrincipal();