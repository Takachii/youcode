for (i=0; i<=2; i++) {
    console.log(i);
}

for (i=0; i>=-2; i--) {
    console.log(i);
}

for (i=0; i<=4; i++) {
    if (i === 1) break;
    console.log(i)
}

for (i=0; i<=4; i++) {
    if (i === 1) return "Item slot found!";
    console.log(i)
}

for (i=0; i<=4; i++) {
    if (i === 1) continue;
    console.log(i)
}

for (i=1; i<=2; i++) {
    for (j=1; j<=2; j++) {
        console.log(i, j)
    }
}