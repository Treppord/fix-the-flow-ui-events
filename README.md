# UI Elements

Een korte omschrijving van mijn werk

## Code Beschrijving


## Gebruikte JavaScript Conventies

### Functie 1: Event Listener voor Toetsaanslagen

In deze functie hebben we een eventlistener aan het gehele document toegevoegd die reageert op toetsaanslagen. Als de toets '1' wordt ingedrukt, wordt de CSS-klasse 'change' toegepast op het 'frontend' element. Bij het indrukken van de spatiebalk wordt het 'help' blok getoond of verborgen, afhankelijk van de huidige weergave. Ook wordt de margintop van het 'hide' element aangepast voor visuele consistentie.

```javascript
document.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
  if (e.key === "1") {
    frontend.classList.toggle("change");
  }
  if (e.key === " ") {
    if (help.style.display === "flex") {
      help.style.display = "none";
      hide.style.marginTop = hide.style.marginTop === "0px" ? "" : "0px";
    } else {
      help.style.display = "flex";
      hide.style.marginTop = "";
    }
  }
}
```

### Functie 2: Dubbelklik / Klik / Hover Event op Design Element

Deze functie zorgt ervoor dat wanneer er dubbel wordt geklikt op het 'design' element, de CSS-klasse 'grow' wordt toegepast.

```javascript
let design = document.querySelector("a:nth-of-type(2)");

// Functie die wordt aangeroepen wanneer er dubbel wordt geklikt op het 'design' element.
function growHandler() {
  // Voeg of verwijder de CSS-klasse 'grow' aan het 'design' element.
  design.classList.toggle("grow");
}

// Voeg een event listener toe die luistert naar dubbelklikken op het 'design' element.
design.addEventListener("dblclick", growHandler);
```

