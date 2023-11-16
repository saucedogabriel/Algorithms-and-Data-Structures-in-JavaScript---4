// 1. Realizar un algoritmo que muestre por pantalla todos los números pares que hay entre 1 y 50. No utilizar la funcion nativa de javascript %, emplear funciones definidas en el programa en su lugar.
// 1.2 Agregar después de listar los números divisibles por dos, los divisibles por tres y luego por cinco.

//EJERCICIO 1
//Divisible por 2: 
const esDivisblePorDos = () => {
    let numerosDivisiblesPorDos = [];
    for(let i = 1; i <= 50; i++){
        if (Number.isInteger(i / 2)){
            numerosDivisiblesPorDos.push(i);
            console.log(`El numero ${i} Es par`);
        }
    }
    console.log(numerosDivisiblesPorDos);
    return numerosDivisiblesPorDos;
}

// esDivisblePorDos();

// Divisible por 3:
const esDivisblePorTres = () => {
    let numerosDivisiblesPorTres = [];
    for(let i = 1; i <= 50; i++){
        if (Number.isInteger(i / 3)){
            numerosDivisiblesPorTres.push(i);
            console.log(`El numero ${i} Es impar`);
        }
    }
    console.log(numerosDivisiblesPorTres);
    return numerosDivisiblesPorTres;
}

// esDivisblePorTres();

//Divisible por 5:
const esDivisblePorCinco = () => {
    let numerosDivisiblesPorCinco = [];
    for(let i = 1; i <= 50; i++){
        if (Number.isInteger(i / 5)){
            numerosDivisiblesPorCinco.push(i);
            console.log(`El numero ${i} Es impar`);
        }
    }
    console.log(numerosDivisiblesPorCinco);
    return numerosDivisiblesPorCinco;
}

// esDivisblePorCinco();


// 2. Realizar un algoritmo que permita al usuario ingresar un número por teclado y muestre por pantalla si el número es primo.
// 2.1 Mostrar por pantalla los primeros veinte números primos.

// EJERCICIO 2
// Numero Primo :
const esPrimo = () => {
    let numero = parseInt(prompt('Ingrese un numero'));
    let acc =  0;

    for (let i = 0; i <= numero; i++) {
        // console.log(i);
        if(Number.isInteger(numero / i)){
            acc++;
        }
    }

    if (acc == 2) {
        console.log(`El numero ${numero} es primo`);
    } else {
        console.log(`El numero ${numero} NO es primo`);
    }
}

// esPrimo();

// Los primeros veinte números primos:
const veinteNumerosPrimos = () => {
    let numerosPrimos = [];
    let primerosVeinte = [];
    let acc = 0;

        for (let i = 0; i <= 100; i++) { 
            const numeroPrimo = () => {
                for (let j = 0; j <= i; j++) {
                    // console.log(j);
                    if (Number.isInteger(i / j)) {
                        acc++;
                    }
                }
            }
            numeroPrimo();
            if (acc == 2) {
                numerosPrimos.push(i);
            }
            acc = 0;
        }
    // console.log(numerosPrimos);
    for (let a = 0; a < 20; a++) {
        primerosVeinte.push(numerosPrimos[a]);
    }
    console.log(primerosVeinte);
}

// veinteNumerosPrimos();


// 3. Una tienda tiene la siguiente promoción de descuento: si la compra resulta entre $1000 y $2000, se realiza un descuento del 10%, entre $2000 y $4000 del 20% y si es superior a $4000 25%. La caja registradora va registrando productos hasta que se ingresa el número 0 para terminar la compra.

//EJERCICIO3
const pedirProductos = () => {
    let total = 0;
    for(let i = 0; i < 5; i++) {
        let valorProducto = parseInt(prompt(`-Ingresar el valor del producto
-Ingrese 0 para terminar`));
        total += valorProducto;
    }
    alert(`El valor total es de ${total}`);
}

// pedirProductos();


//4. Desarrolla un programa que implemente la famosa actividad de programación denominada "FizzBuzz". El programa debe imprimir en la consola una serie de números del 1 al 100, pero con ciertas condiciones especiales:

// Si el número es divisible por 3, en lugar de imprimir el número, imprime "Fizz".
// Si el número es divisible por 5, en lugar de imprimir el número, imprime "Buzz".
// Si el número es divisible por ambos 3 y 5, en lugar de imprimir el número, imprime "FizzBuzz".
// En todos los demás casos, imprime simplemente el número.

//EJERCICIO 4
const fizzBuzz = () => {
    for (let i = 0; i <= 100; i++) {
        if ( i % 3 == 0 && i % 5 == 0) {
            console.log(`fizzbuzz ${i}`);
        }else if (i % 3 == 0) {
            console.log(`fizz ${i}`);
        }else if (i % 5 == 0){
            console.log(`buzz ${i}`);
        } else {
            console.log(`${i}`);
        }
    }
}

fizzBuzz();


