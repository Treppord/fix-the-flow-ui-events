# UI Elements

Een korte omschrijving van mijn werk

## Code Beschrijving

### Opdrachtanalyse en Interactie Implementatie

#### Opdracht Realisatie

Voor deze opdracht moet ik 10 acties realiseren, ontwerpen en uiteindelijk live zetten. Hierbij moet ik een aantal stappen volgen:

1. Bedenk een interactie en kies het relevante UI-event.
2. Bepaal de stappen voor ontwerpen, bouwen, integreren en testen.

#### Muis Acties

Er zijn verschillende muisacties die je kan gebruiken:

- click
- dblclick
- mouseover
- mouseout
- mouseenter
- mouseleave
- mousedown
- mouseup
- mousemove
- contextmenu
- mousewheel and DOMMouseScroll

Hiermee kun je diverse interacties activeren.

#### Toetsenbord Acties

Voor toetsenbordacties gebruik ik keydown, keypress en keyup. Ik analyseer nieuwe acties met muis- en toetsenbordtriggers en kijk ook naar animaties.

#### Analysefase en UI Events

Tijdens de analysefase ga ik dieper in op de gebruikersbehoeften en manieren om de interactie met de website te verbeteren.

#### UI Events

User Interface (UI) events omvatten gebeurtenissen als reactie op gebruikersinteracties. Enkele voorbeelden:

1. *click event*
   - Activeert bij muisklik, handig voor linkopeningen of formulieren indienen.

2. *Hover event*
   - Vindt plaats bij muisbewegingen over een element, geschikt voor interactieve effecten zoals informatie tonen.

3. *Mouse event*
   - Geactiveerd door muisbewegingen en acties, zoals klikken, bewegen en scrollen.

4. *Key event*
   - Geactiveerd bij toetsaanslagen, handig voor detecteren van specifieke keystrokes.

#### Inleiding tot Keyboard Events

Er zijn 3 belangrijke keyboard events: keydown, keypress en keyup. Gebruik van deze events met addEventListener op het relevante element.

#### Mouse Event Implementatie

Voor mouse events gebruik ik event objects om informatie over de gebeurtenis op te halen, zoals coördinaten en gebruikte muisknop.

### Aandachtspunten

Het bouwen van de applicatie moet rekening houden met gebruikersbehoeften. Een gebruiksvriendelijke ervaring en toegankelijkheid voor alle gebruikers zijn cruciaal. Dit omvat het vereenvoudigen van taken, toevoegen van snelkoppelingen en zorgen voor toegankelijke interacties.

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
```

// Voeg een event listener toe die luistert naar dubbelklikken op het 'design' element.
design.addEventListener("dblclick", growHandler);
```

