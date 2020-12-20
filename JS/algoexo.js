//algo pair impair//
function verif(){
    let nbr;
    let x = "Réponse:"
    nbr = Number(document.getElementById("myInput").value);
    if(nbr%2 == 0)
    {
        document.getElementById("demo").innerHTML = x + " " + nbr +" " + "nombre pair";
    }
    else
    {
        document.getElementById("demo").innerHTML = x + " "+ nbr +" " + "nombre impair";
    }
    }
    document.getElementById("myinput1").addEventListener("click", verif);

//algo tranche age//
function tranchage() 
    {
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
    document.getElementById("form1").addEventListener("click", tranchage);
            
    function multiplie()
    {
       var xx = 0;
       var yy = 0;
       xx = Number(document.getElementById("myInput3").value
       yy = Number(document.getElementById("myInput4").value
       
      
       While (xx <= 10) 
       {

            While (yy<10) 
            {       
                document.getElementById("demo4").innerHTML = "X " + xx +" Y "+ yy + " = " + xx * yy ;
                yy++ +1;
            }
        xx= xx++ +1;
        yy =0;
        document.getElementById("demo4").innerHTML = "X " + xx + " Y " + yy + " = " + xx * yy 
        }
        document.getElementById("demo4").innerHTML = "fin de prog ";
    }
    document.getElementById("demo4").addEventListener("click", multiplie);


    function multi()
    {
       var xx = 0;
       var yy = 0;
       nbrxx = Number(document.getElementById("myInput3").value
       nbryy = Number(document.getElementById("myInput4").value
    xx = nbrxx;
    yy = nbryy;
       While (xx <= 10) 
       {

            While (yy<10) 
            {       
                document.getElementById("demo4").innerHTML = "X " + xx +" Y "+ yy + " = " + xx * yy ;
                yy++ +1;
            }
        xx++ +1;
        yy =0;
        document.getElementById("demo4").innerHTML = "X " + xx + " Y " + yy + " = " + xx * yy 
        }
        document.getElementById("demo4").innerHTML = "fin de prog ";
    }
    document.getElementById("demo4").addEventListener("click", multi);
}
//bouton effacer//
function reset() 
    {
        window.location.href = "algoexo.html"
    }
    document.getElementById("refresh").addEventListener("click", reset);
