//Danique heeft hier ook een beetje met mijn code geholpen//

//huidskleur ophalen//
var huidskleur1Knop = document.querySelector(".huid1");
var huidskleur2Knop = document.querySelector(".huid2");
var huidskleur3Knop = document.querySelector(".huid3");
var huidskleur4Knop = document.querySelector(".huid4");

var huidpop = document.querySelector(".huidpop");

//mond ophalen//
var mond1Knop = document.querySelector(".mond");
var mond2Knop = document.querySelector(".mond1");
var mond3Knop = document.querySelector(".mond2");

var mondpop = document.querySelector(".mondpop");

//ogen ophalen//
var ogen1Knop = document.querySelector(".ogen");
var ogen2Knop = document.querySelector(".ogen1");
var ogen3Knop = document.querySelector(".ogen2");

var ogenpop = document.querySelector(".ogenpop");

//haarkleur ophalen//
var haarkleur1Knop = document.querySelector(".haar");
var haarkleur2Knop = document.querySelector(".haar1");
var haarkleur3Knop = document.querySelector(".haar2");
var haarkleur4Knop = document.querySelector(".haar3");
var haarkleur5Knop = document.querySelector(".haar4");
var haarkleur6Knop = document.querySelector(".haar5");
var haarkleur7Knop = document.querySelector(".haar6");
var haarkleur8Knop = document.querySelector(".haar7");
var haarkleur9Knop = document.querySelector(".haar8");


var haarpop = document.querySelector(".haarpop");

//shirt ophalen//
var shirt1Knop = document.querySelector(".shirt");
var shirt2Knop = document.querySelector(".shirt1");
var shirt3Knop = document.querySelector(".shirt2");

var shirtpop = document.querySelector(".shirtpop");

//broek ophalen//
var broek1Knop = document.querySelector(".broek");
var broek2Knop = document.querySelector(".broek1");
var broek3Knop = document.querySelector(".broek2");

var broekpop = document.querySelector(".broekpop");

//schoenen ophalen//
var schoenen1Knop = document.querySelector(".schoenen");
var schoenen2Knop = document.querySelector(".schoenen1");
var schoenen3Knop = document.querySelector(".schoenen2");

var schoenpop = document.querySelector(".schoenenpop");

//audio linken//
var reset = document.querySelector(".sound");

//button linken//
var resetKnop = document.querySelector(".knop");

//functie huidskleur veranderen//
function functieHuid(keuze){
    //keuze maken//
    if (keuze == 1){
        huidpop.src = "img/huidskleur-1_Tekengebied 1.png";
    }
    if (keuze == 2){
        huidpop.src = "img/huidskleur3_Tekengebied 1.png";
    }if (keuze == 3){
        huidpop.src = "img/huidskleur1_Tekengebied 1.png";
    }if (keuze == 4){
        huidpop.src = "img/huidskleur4_Tekengebied 1.png";
    }
}

//functie mond veranderen//
function functieMond(keuze){
    //keuze maken//
    if (keuze == 1){
        mondpop.src = "img/mond1.png";
    }
    if (keuze == 2){
        mondpop.src = "img/mond2.png";
    }
    if (keuze == 3){
        mondpop.src = "img/mond3.png";
    }
}

//functie ogen veranderen//
function functieOgen(keuze){
    //keuze maken//
    if (keuze == 1){
        ogenpop.src = "img/ogen1.png";
    }
    if (keuze == 2){
        ogenpop.src = "img/ogen2.png";
    }
    if (keuze == 3){
        ogenpop.src = "img/ogen3.png";
    }
}

//functie haarkleur veranderen//
function functieHaar(keuze){
    //keuze maken//
    if (keuze == 1){
        haarpop.src = "img/haar1_Tekengebied 1.png";
    }
    if (keuze == 2){
        haarpop.src = "img/haar2_Tekengebied 1.png";
    }if (keuze == 3){
        haarpop.src = "img/haar3_Tekengebied 1.png";
    }if (keuze == 4){
        haarpop.src = "img/haar4_Tekengebied 1.png";
    }
    if (keuze == 5){
        haarpop.src = "img/haar5_Tekengebied 1.png";
    }
    if (keuze == 6){
        haarpop.src = "img/haar6_Tekengebied 1.png";
    }if (keuze == 7){
        haarpop.src = "img/haar7_Tekengebied 1.png";
    }if (keuze == 8){
        haarpop.src = "img/haar8_Tekengebied 1.png";
    }if (keuze == 9){
        haarpop.src = "img/haar9_Tekengebied 1.png";
    }
}

//functie shirt veranderen//
function functieShirt(keuze){
    //keuze maken//
    if (keuze == 1){
        shirtpop.src = "img/shirt1_Tekengebied 1.png";
    }
    if (keuze == 2){
        shirtpop.src = "img/shirt2_Tekengebied 1.png";
    }
    if (keuze == 3){
        shirtpop.src = "img/shirt3_Tekengebied 1.png";
    }
}

//functie broek veranderen//
function functieBroek(keuze){
    //keuze maken//
    if (keuze == 1){
        broekpop.src = "img/broek1_Tekengebied 1.png";
    }
    if (keuze == 2){
        broekpop.src = "img/broek2_Tekengebied 1.png";
    }
    if (keuze == 3){
        broekpop.src = "img/broek3_Tekengebied 1.png";
    }
}

//functie schoenen veranderen//
function functieSchoen(keuze){
    //keuze maken//
    if (keuze == 1){
        schoenpop.src = "img/schoenen1.png";
    }
    if (keuze == 2){
        schoenpop.src = "img/schoenen2.png";
    }
    if (keuze == 3){
        schoenpop.src = "img/schoenen3.png";
    }
}


//knoppen aan juiste huid item//
huidskleur1Knop.addEventListener("click", function(){functieHuid(1)});
huidskleur2Knop.addEventListener("click", function(){functieHuid(2)});
huidskleur3Knop.addEventListener("click", function(){functieHuid(3)});
huidskleur4Knop.addEventListener("click", function(){functieHuid(4)});

//knoppen aan juiste mond item//
mond1Knop.addEventListener("click", function(){functieMond(1)});
mond2Knop.addEventListener("click", function(){functieMond(2)});
mond3Knop.addEventListener("click", function(){functieMond(3)});

//knoppen aan juiste ogen item//
ogen1Knop.addEventListener("click", function(){functieOgen(1)});
ogen2Knop.addEventListener("click", function(){functieOgen(2)});
ogen3Knop.addEventListener("click", function(){functieOgen(3)});

//knoppen aan juiste haar item//
haarkleur1Knop.addEventListener("click", function(){functieHaar(1)});
haarkleur2Knop.addEventListener("click", function(){functieHaar(2)});
haarkleur3Knop.addEventListener("click", function(){functieHaar(3)});
haarkleur4Knop.addEventListener("click", function(){functieHaar(4)});
haarkleur5Knop.addEventListener("click", function(){functieHaar(5)});
haarkleur6Knop.addEventListener("click", function(){functieHaar(6)});
haarkleur7Knop.addEventListener("click", function(){functieHaar(7)});
haarkleur8Knop.addEventListener("click", function(){functieHaar(8)});
haarkleur9Knop.addEventListener("click", function(){functieHaar(9)});

//knoppen aan juiste shirt item//
shirt1Knop.addEventListener("click", function(){functieShirt(1)});
shirt2Knop.addEventListener("click", function(){functieShirt(2)});
shirt3Knop.addEventListener("click", function(){functieShirt(3)});

//knoppen aan juiste broek item//
broek1Knop.addEventListener("click", function(){functieBroek(1)});
broek2Knop.addEventListener("click", function(){functieBroek(2)});
broek3Knop.addEventListener("click", function(){functieBroek(3)});

//knoppen aan juiste broek item//
schoenen1Knop.addEventListener("click", function(){functieSchoen(1)});
schoenen2Knop.addEventListener("click", function(){functieSchoen(2)});
schoenen3Knop.addEventListener("click", function(){functieSchoen(3)});

//button koppelen aan functie//
resetKnop.addEventListener("click", functieReset)
resetKnop.addEventListener("click", reset)

//audio toevoegen en wit poppetje weer krijgen//
function functieReset(){
    reset.play()
    huidpop.src = "img/niks.png";
    mondpop.src = "img/niks.png";
    ogenpop.src = "img/niks.png";
    haarpop.src = "img/niks.png";
    shirtpop.src = "img/niks.png";
    broekpop.src = "img/niks.png";
    schoenpop.src = "img/niks.png";
}