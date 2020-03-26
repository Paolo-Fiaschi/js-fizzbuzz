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

// senza variante d'appoggio, stampo il log modificato per ogni condizione

var fizzbuzz = "FizzBuzz";
var fizz = "Fizz";
var buzz = "Buzz";
var result;


  for (var i = 1; i <= 100; i++) {

    result = document.getElementById("list").innerHTML;
    document.getElementById("list").innerHTML = result + "<li>" + i + "</li>" + "<li>" + fizzbuzz + "</li>" + "<li>" + buzz + "</li>" + "<li>" + fizz + "</li>";


    if (i % 3 === 0 && i % 5 === 0) {
      console.log(fizzbuzz);
      document.getElementById("list").innerHTML = result + "<li>" + fizzbuzz + "</li>";
        
    }else if (i % 3 === 0) {
       console.log(fizz);
       document.getElementById("list").innerHTML = result + "<li>" + fizz + "</li>";

    } else if (i % 5 === 0) {
      console.log(buzz);
      document.getElementById("list").innerHTML = result + "<li>" + buzz + "</li>";

    }else{
      
        console.log(i);
        document.getElementById("list").innerHTML = result + "<li>" + i + "</li>";

    }

  }
