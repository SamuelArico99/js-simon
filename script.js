function generaNumeroRandom(min , max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const numeri = [];

for (let i = 0; i < 5; i++) {

    const numeroRandom = generaNumeroRandom(1,99);
    console.log(numeroRandom)
    numeri.push(numeroRandom);

}



const numbersContainer = document.getElementById('numbers-container');
numbersContainer.innerHTML = numeri;

setTimeout (function () {
    numbersContainer.innerHTML = '';
},30000);

setTimeout (function() {
    const numeriindovinati = [];
    for (let i = 0; i < 5; i++) {

        const userInput = prompt('Inserisci un numero: ');

        if (userInput == numeri[i]) {
            numeriindovinati.push(numeri[i]);
        }

    }
    const numbCont = document.getElementById('numbers-container');
    numbCont.innerHTML = "Hai indovinato "+ numeriindovinati.length + ' numeri<br>';
    numbCont.innerHTML += numeriindovinati;

},30500);

