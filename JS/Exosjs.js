// JS des Exercices)
// JS Exo5
let inputa = document.getElementById("myInputx");
fact =1 ;
inputa.addEventListener("click", ()=>{
    let nbr=  Number(document.getElementById("formx").value);
    let reponsefacto = document.getElementById("demox");
while (nbr > 1) {
    
    facoriel =+ factoriel * nbr ;
    nbr = nbr - 1;
    reponsefacto.innerHTML += ("Factoriel  "+ factoriel +" de "+nbr);
    }
}
function reset() 
    {
        window.location.href="../file/Exo5.html";
    }
    document.getElementById("effacer").addEventListener("click", reset) 

