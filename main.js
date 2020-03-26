//  Fizz Buzz test:
//  Scrivi un programma che stampi i numeri da 1 a 100,
//  ma per i multipli di 3 stampi “Fizz” al posto del numero
//  e per i multipli di 5 stampi “Buzz”.
//  Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.

// --------------------------------------------------------------



// stampare tutti i numeri da 1 a 100

// se il numero diviso 3 dà un intero stampa fizz

// se il numero diviso 5 dà un intero stampa buzz

// se il numero diviso  3 e 5 dà un intero stampa fizzbuzz

// Usando una variabile d'appoggio, la associo ad ogni valore di ciascuna condizione per poi stampare un unico log alla fine

var result;
var stamp;

for (var i = 1; i <= 100; i++) {

    result = i;
    stamp = document.getElementById("lista").innerHTML;

    if (i % 3 === 0 && i % 5 === 0) {
        result = "FizzBuzz";

    }else if (i % 3 === 0) {

       result = "Fizz";

    } else if (i % 5 === 0) {

        result = "Buzz";

    }

    console.log(result);

    document.getElementById("lista").innerHTML = stamp + "<li>" + result + "</li>";
  }


