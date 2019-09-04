// // for (let i = 0; i < 100; i++) {
// //     if(i % 2 === 0 && i % 10 !== 0) {
// //         document.write(100 - i + '<br>');
// //     }

// // }

// // let i = 0;
// // while (i < 100) {
// //     document.write(i + '<br>');
// //     i++;
// // }

// // let i = 0;
// // do {
// //     document.write(i + '<br>');
// //     i++;
// // } while (i < 100);

// // let num = parseFloat(prompt('Enter number: '));
// // while (isNaN(num)) {
// //     alert('You entered not a number');
// //     num = parseFloat(prompt('Enter number: '));
// // }

// // let num;
// // do {
// //     if (num !== undefined) {
// //         alert('You entered not a number');
// //     }
// //     num = parseFloat(prompt('Enter numer: '));
// // } while (isNaN(num))

// let fruits = ['apple', 'banana', 'grapes'];
// console.log(fruits);
// fruits[3] = 'kiwi';
// console.log(fruits);
// fruits.push('mellon');
// console.log(fruits);
// fruits[5] = 'fig';
// console.log(fruits);
// console.log(fruits.length);
// fruits[9] = 'cherry';
// console.log(fruits);



// // for (let i = 0; i < fruits.length; i++){
// //     if (fruits[i] !== undefined) {
// //         console.log(fruits[i]);
// //     }
// // }

// // fruits.forEach(function(element) {
// //     console.log('hello, ' + element);
// // })

// // fruits.forEach( fruit => console.log('Yummy ' + fruit));



// // function pickIt(arr){
// //   var odd=[],even=[];
// //   //coding here
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] % 2 === 0) {
// //       even.push(arr[i]);
// //     } else {
// //       odd.push(arr[i]);
// //     }
// //   }
// //   return [odd,even];
// // }

// console.log('*' * 3);




// function padIt(str,n){
//   if (n % 2 === 0) {
//     let evenStars = [];
//     let counter = 0;
//     while (counter < n / 2) {
//       evenStars.push('*');
//       counter++
//     }
//     return(evenStars.join() + str + evenStars.join())
//   }
// }


// let arr = ['a','b','c'];
// console.log(...arr);


//


// let arr = [1, 2, 3, 4];
// console.log('arr - ' + arr);
// myArr = maps(arr);
// console.log('myArr - ' + myArr)

// function maps(x) {
//   //let newArray = [];
//   x.forEach(function(el) {
//       el = el * 2;
//       console.log('el - ' + el);
//   });
//   console.log('x - ' + x)
//   return x;
// }


// let arr = 'GCAT';
// console.log('arr - ' + arr);
// console.log('arr length = ' + arr.length);
// newArr = DNAtoRNA(arr)
// console.log('newArr - ' + newArr);


// function DNAtoRNA(dna) {
//   let rna = [];
//   for (let i = 0; i < dna.length; i++) {
//       (dna[i] !== 'T') ? rna.push(dna[i]) : rna.push('U');
//   }
//   console.log('rna - ' + rna.join(''))  ;
//   return rna.join('')
// }

// let arr = ['a','b','c'];
// console.log('arr - ' + arr.join(''));


let arr = [34, 7, 1, 15, 10, 88, 2];
console.log(arr);
newArr = arr.sort((a, b) => a - b);

console.log(newArr);

// function compareNumbers(a, b) {
//     return (a - b);
// }