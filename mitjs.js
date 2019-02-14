

function erSynlig(elementId) {
    var elementBoks =
        document.getElementById(elementId).getBoundingClientRect();
    var halvtredsPct = elementBoks.height * 0.5;
    var start = window.innerHeight=halvtredsPct;
    
    if (elementBoks.top <= start && elementBoks.bottom - halvtredsPct > 0) {
        return true;
    } else { 
        return false;
    }
    
}

function aktiverMultimedier(elementIdListe, AVIdListe) {
    for (var i = 0; i < elementIdListe.length; i++) {
        if (erSynlig(elementIdListe[i])) {
            document.getElementById(AVIdListe[i]).play();
        } else {
            document.getElementById(AVIdListe[i]).pause();
        }
    }
}

// Hovedprogramdel

var elementIdListe = ["paris", "istanbul", "firenze", "video"];
var AVIdListe = ["bouncy", "walker", "funky", "video"];

window.addEventListener("scroll", function() {
    aktiverMultimedier(elementIdListe, AVIdListe);
});
