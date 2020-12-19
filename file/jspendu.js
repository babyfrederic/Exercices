let lettres ="abcdefghijklmnopqrstuvwxyz".split("");
let mots = ["baby", "perdu", "stage","joli","cheval","terre","simple"]
let buttons = document.querySelector("#buttons");
let motADeviner = mots[Math.floor(Math.random() * mots.length)]

let lettreRestant = motADeviner.split("")
let lettreTrouver = []

let perdu = 0

let imagePendu = document.querySelector(".imagePendu")

let elementMot = document.querySelector(".mot")
elementMot.innerHTML = motADeviner.split("").map(e => "_ ").join("")

console.log(motADeviner)

for( let i =0 ; i<lettres.length ; i ++){   
    let lettre = document.createElement("button");
    lettre.innerText = lettres[i]
    buttons.appendChild(lettre);
    lettre.className ="buttonPerso";
    lettre.onclick = () => {
        lettre.className ="buttonClick";
        if (lettreRestant.indexOf(lettres[i]) != -1) {
            lettreTrouver.push(lettres[i])
            elementMot.innerHTML = motADeviner.split("").map(e => {
                if (lettreTrouver.indexOf(e) != -1) return e
                else return "_ " 
            }).join("")
            lettreRestant = lettreRestant.filter((e) => e != lettres[i])
        } else {
            console.log(perdu)
            if (perdu + 1 < 10) {
                perdu += 1
                imagePendu.style.backgroundPosition = "-" + perdu * 250 + "px"
                console.log()
            } else {
                alert("Vous avez perdu, il fallait trouver : "+ motADeviner)
            }
        }
    }
}


