'use strict';

// Riferimenti agli elementi HTML
const passengerNameElement = document.getElementById('passengerName');
const kilometersElement = document.getElementById('kilomenters');
const ageRangeElement = document.getElementById('age');
const generateBtn = document.getElementById('generate-btn');
const bottomCardTitle = document.getElementById('title');
const bottomCard = document.getElementById('bottom-card');
const cancelBtn = document.getElementById('cancel-btn')

// Variaibli
const costForKm = 0.21;
let price = 0;
let tipoDiBiglietto = "Biglietto Standard";

// Azione al click del button generate
generateBtn.addEventListener('click',
    function () {
        // Verifico che i campi non siano vuoti
        if (passengerNameElement.value === "" || kilometersElement.value === "") {
            // Mostro l'alert se i campi sono vuoti
            alert('Tutti i campi sono richiesti');
        } else {
            // Calcolo il prezzo senza sconto
            const tempPrice = kilometersElement.value * costForKm;

            // Considero tutti i possibili casi con uno switch e assegno i valori corrispondenti
            switch (ageRangeElement.value) {
                case 'minorenne':
                    price = tempPrice - tempPrice * 0.2;
                    tipoDiBiglietto = "Biglietto minorenni"
                    break;
                case 'over65':
                    price = tempPrice - tempPrice * 0.4;
                    tipoDiBiglietto = "Biglietto over 65"
                    break;

                // Copre il caso in cui ageRangeElement.value === maggiorenne
                default:
                    price = tempPrice;
            }

            // Stampo in console il prezzo con 2 decimali
            console.log(price.toFixed(2));

            // Mostro il titolo e il contenuto della seconda card
            bottomCardTitle.classList.remove('hidden');
            bottomCard.classList.remove('hidden');

            // Assegno i corrispondenti valori agli elementi HTML
            document.getElementById('name').innerHTML = passengerNameElement.value;
            document.getElementById('price').innerHTML = price.toFixed(2) + "€";
            document.getElementById('ticketType').innerHTML = tipoDiBiglietto;
        }
    }
)

// Azione al click del button cancel
cancelBtn.addEventListener('click',
    function () {
            // Nascondo il titolo e il contenuto della seconda card
            bottomCardTitle.classList.add('hidden');
            bottomCard.classList.add('hidden');
    }
)