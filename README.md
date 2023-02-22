  MILESTONE 1
  1. Creo un input dove chiedo il nome del passeggero e conservo il suo value in una variabile passegerName
  2. Creo un input dove chiedo quanti chilometri vuole percorrere e conservo il suo valore in una variabile kilometers
  3. Creo un select per far seleziore all'utente a che fascia di età appartiene e conservo il suo valore in una variabile ageRange
  4. Creo un button e una variabile calculatePriceBtn per selezionare l'elemento
  5. Creo una variabile price che continene il prezzo intero ottenuto dal prezzo di 0.21€ al km * kilometers
  6. Alla pressione del button calcolo il prezzo in base a :
    - Mi assicuro che entrambi i campi contengano un numero non negativo
    - Se ageRange === minorenne applico sconto del 20% con la seguente formula price = price - price * 0.2
    - Altrimenti se ageRange === over 65 applico sconto del 40% con la seguente formula price = price - price * 0.4
    - Altrimenti il price sarà già il prezzo finale ( caso in cui entriamo se ageRange === maggiorenne )
  7. Stampo in console il prezzo formattato con massimo due decimali usando tofixed(2)

    MILESTONE 2
  1. Racchiudo i 2 input, il select e il button in un form
  2. Creo l'interfaccia grafica
  3. Alla pressione del button "Genera" oltre alle istruzioni indicate nel MILESTONE 1, aggiungo un addEventListener() che risponde al 'click' e mostra un altra card che contiene il recap del costo e dei dati inseriti
