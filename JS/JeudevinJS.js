var button = document.querySelector("#output > button");
			
    button.onclick = function() {
        var aside = this.nextElementSibling; // Le this pointe sur le bouton, et on prend l'élément suivant 
            aside.style.display = (aside.style.display === 'none') ? 'block' : 'none';
    };