// Riferimenti agli elementi HTML
const passengerNameElement = document.getElementById('passengerName')
const kilometersElement = document.getElementById('kilomenters')
const ageRangeElement = document.getElementById('age')
const generateBtn = document.getElementById('generate-btn')

// Variaibli
const costForKm = 0.21
let price = 0

// Azione al click del button
generateBtn.addEventListener('click',
    function () {
        // Verifico che i campi non siano vuoti
        if (passengerNameElement.value === "" || kilometersElement.value === "") {
            // Mostro l'alert se i campi sono vuoti
            alert('Tutti i campi sono richiesti')
        } else {
            // Calcolo il prezzo senza sconto
            const tempPrice = kilometersElement.value * costForKm

            // Considero tutti i possibili casi con uno switch
            switch (ageRangeElement.value) {
                case 'minorenne':
                    price = tempPrice - tempPrice * 0.2
                    break;
                case 'over65':
                    price = tempPrice - tempPrice * 0.4
                    break;

                // Copre il caso in cui ageRangeElement.value === maggiorenne
                default:
                    price = tempPrice
            }

            // Stampo in console il prezzo con 2 decimali
            console.log(price.toFixed(2))
        }
    }
)

