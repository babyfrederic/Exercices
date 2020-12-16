                            //algo pair impair//
function verif(){
  let nbr;
  let x = "Réponse:"
  nbr = Number(document.getElementById("myInput").value);
  if(nbr%2 == 0)
  {
       document.getElementById("demo").innerHTML = x + " " + "nombre pair";
  }
  else
  {
       document.getElementById("demo").innerHTML = x + " " + "nombre impair";
  }
}
document.getElementById("myInput1").addEventListener("click", verif);


                            //essai date//
function displayDate() {
       document.getElementById("demo2").innerHTML = Date();
}
document.getElementById("essaidate").addEventListener("click", displayDate);


                            //algo siage//
function tranchage() {
              let age;
              age = Number(document.getElementById("form").value);
              if(age < 18)
       {
                     document.getElementById("demo3").innerHTML =
                     "Programme réservé aux personnes majeures";
       }
              else if(age >= 18 && age < 27)
       {
                     document.getElementById("demo3").innerHTML =
                     "Statut jeune";
       }
              else if(age >= 27 && age < 65)
       {
                     document.getElementById("demo3").innerHTML =
                     "Statut adulte";
       }
              else
       { 
                     document.getElementById("demo3").innerHTML = "Programme réservé aux non retraités";
       }
}
document.getElementById("form1").addEventListener("click", siage);


                            //bouton rafraichir//
function reset() {
       window.location.href = "algoimpair.html"
}
document.getElementById("rafraichir").addEventListener("click", reset);
