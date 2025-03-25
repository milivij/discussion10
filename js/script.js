let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1
    document.getElementById("host-name").textContent = "Mili Vij";
    document.getElementById("collaborator-name").textContent = "Nicky Ngyuen";
    document.getElementById("collaborator-2-name").textContent = "No third collaborator";

//Question 2
    button.addEventListener("click", function () {
        instruction_button.style .display = instruction_button.style.display === "none";
        });


//Question 3

let firstNameInput = document.getElementById("first_name");
let lastNameInput = document.getElementById("last_name");

firstNameInput.addEventListener("input", function () {
    if( firstNameInput.ariaValueMax.toLowerCase() === "john") {
        lastNameInput.value = "Doe";
    }
     else{
     lastNameInput.value = "";
     }
});


//Question 4
 const usernameInput = document.getElementById("user_name");
 const usernameAlert = document.getElementById("username-alert");
usernameInput.addEventListener("input", function () {
    const enteredUsername = usernameInput.value.trim();
    let usernameExists = false;

    for (let username of pokemonList) {
        if (username.toLowerCase() === enteredUsername.toLowerCase()) {
            usernameExists = true;
            break;
        }
        
    if (usernameExists == true) {
        usernameAlert.textContent = "Username already exists";
    }
    else {
        usernameAlert.textContent = "Unique Username created";
    }
}


//Question 5
let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirm_password");
const passwordAlert = document.getElementById("password-alert");

let passwordmatch = false
firstNameInput.addEventListener("input", function () {
    if(password.ariaValueMax === confirmpassword.ariaValueMax) { 
        passwordmatch = true;
        break;
    }
    else{
        passwordmatch = false;
    }

    if (passwordmatch == true) {
        passwordAlert.textContent = "Password Matches";
    }
    else {
        passwordAlert.textContent = "Password does not match";
    }
}


//Question 6


//Question 7


//Question 8


//Extra challenge: reset button

