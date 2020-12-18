//algo pair impair//
// Pour effectuer un add event listener c'est à dire que tu écoute l'evenement du click dans ce cas tu dois ecouter le click du bouton donc le recupérer puis tu fait ecouter levenement
// donc le "click" puis tu active la fonction dans le cas présent c'est ()=> une fonction anonyme est fléché () => {} donne fonction () {}
let input = document.getElementById("myInput1");

input.addEventListener("click", ()=>{
    let nbr=  Number(document.getElementById("myInput").value);
 
    let demo = document.getElementById("demo");
  
       if(nbr%2 == 0)
    {
         demo.innerText += nbr + " " + "nombre pair";
    }
    else
    {
         demo.innerText += nbr + " " + "nombre impair";
    }
    })
 

//algo tranche age//

let form = document.getElementById("form1");
form.addEventListener("click", () => { 
    
        let age = Number(document.getElementById("form").value);
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
    
    })
            
    // function multi()
    

    let multip = document.getElementById('multi');
    multip.addEventListener('click', ()=>{
        let a = Number(document.getElementById("myinput3").value);
        let b = Number(document.getElementById("myinput4").value);
        let reponse = document.getElementById("demo4");
   //   let reponsetotal = document.getElementById("demo5");

        
        for(var i=1;i<=b;i++)  {
            let resultat = a*i;
    // let resultattotal = resultattotal + resultat; 
            reponse.innerHTML += (" "+a+" x "+i+" = "+resultat);   
         }
    // reponsetotal.innerHTML += (" total  = "+resultattotal);  
    })
//bouton effacer//
function reset() 
    {
        window.location.href="algoexo.html";
    }
    
