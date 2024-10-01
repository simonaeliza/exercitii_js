// function numaraDeLa1La100() {
//   let i = 1;
//   while (i <= 100) {
//     console.log(i);
//     i++;
//   }
// }
// numaraDeLa1La100();

// function numaraDeLa1La100CuFor() {
//   for (let i = 1; i <= 100; i++) {
//     console.log(i);
//   }
// }

// numaraDeLa1La100CuFor();

// function afiseazaElementeDinArray(numbers) {
//   const numarElementeArray = numbers.length;
//   for (i = 0; i <= numarElementeArray - 1; i++) {
//     console.log("La pozitia " + i + " se afla valoarea " + numbers[i]);
//   }
// }

// afiseazaElementeDinArray([1, 4, 5]);

// afiseazaElementeDinArray([15, 16, 8, 4]);

// console.log("-----------------");

// function cautaElementulCelMaiMic(numbers) {
//   let min = numbers[0];
//   for (let i = 1; i <= numbers.length - 1; i++) {
//     if (numbers[i] < min) {
//       min = numbers[i];
//     }
//   }
//   console.log("Cel mai mic element este: " + min);
// }

// cautaElementulCelMaiMic([2, 14, 57, 15, 36]);

// function calculeazaSumaElementelor(numbers) {
//   let sum = 0;
//   for (let i = 0; i <= numbers.length - 1; i++) {
//     sum = sum + numbers[i];
//   }
//   console.log("Suma este: " + sum);
// }

// calculeazaSumaElementelor([10, 18, 2, 5, 11]);


/* Exercitii loops  */
 
// Ex 1

  let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma += i;
}
  console.log("Suma numerelor este: " + suma);

// Ex 2

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// ex 5

for (let number = 1; number <= 50; number++) {
  if (number % 2 === 0) {
    console.log(number);
  }
}