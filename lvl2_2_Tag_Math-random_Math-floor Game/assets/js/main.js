let user = prompt("Schätze einen Wert zwischen 1-10")

let CompNum = Math.floor(Math.random() * 10 + 1)

if (user == CompNum) {
    console.log("Du hast richtig geschätzt! Glückwunsch!")
} else {
    console.log("leider daneben, die antwort ist " + CompNum)
}
