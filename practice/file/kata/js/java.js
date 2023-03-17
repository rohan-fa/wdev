// // const people = [
// //     {
// //         name: "Ethen",
// //         age: 35,
// //         occupation: "Web Developer"
// //     },
// //     {
// //         name: "Farzana",
// //         age: 15,
// //         occupation: "Mobile Developer"
// //     },
// //     {
// //         name: "Alex",
// //         age: 35,
// //         occupation: "Developer"
// //     },
// // ];

// // //map is a conversation function
// // const name = people.map((person) => {
// //     return person.name;
// // }); 
// // const ageGreaterThanThirty = people.filter((person) => {
// //     return person.age <40;
// // });
// // const ageMultiply = people.reduce((total, person) => {
// //     return total + person.age;
// // }, 0); 

// // console.log(ageMultiply);
// //forEach


// //map

// //filer

// //reduce

// //some

// //every 

// //find 

// //findIndex

// //  const getCount = (str) => {
// //     let vowelCount = 0;

// //     for (const letter of str) {
// //         if (letter.match(/[aeiou]/g)){
// //             vowelCount++ ;
// //         }
// //     }
// //     return vowelCount;
// //  }
// //  console.log(getCount("asdbmoooifhueuh"));

// // const nonConsecutive = (arr) => {
// //     for (let i=0; i< arr.length - 1; i++){

// //         const curr = arr[i];
// //         const next = arr[i+1];

// //         if ( curr + 1 !== next){
// //             return next;
// //         }
// //     }
// //     return null; 
// // };
// // console.log(nonConsecutive([1,3,2,3,2]));
// // console.log(nonConsecutive([1,2,3,5,6]));
// // //------------------------------------------------------
// // // const noOdd = (value) => {
// // //     return value.filter(val => val % 2 === 0);  //each element will apply this function
// // // };
// // // console.log(noOdd([6,4,5,3,2]));
// // // console.log(noOdd([1,1,5,3,2]));

// // const noOddStuffs = (value) => {
// //     const arr = []; 

// //     for (let i = 0; i < value.length; i++){
// //         if( value[i] % 2 ===0 ){
// //             arr.push(value[i]);
// //         }
// //     }
// //     return arr;
// // };
// // console.log(noOddStuffs([6,4,5,3,2]));
// // console.log(noOddStuffs([1,1,5,3,2]));

// // function countSheeps(arrayOfSheep) {
// //   let num = 0;
  
// //   for(let i=0; i < arrayOfSheep.length; i++){
// //     if( arrayOfSheep[i] === true){
// //         num++;
// //     }
// //   }
// //   return num;
// // }
// // console.log(countSheeps([true,  true,  true,  false,
// //     true,  true,  true,  true ,
// //     true,  false, true,  false,
// //     true,  false, false, true ,
// //     true,  true,  true,  true ,
// //     false, false, true,  true]));
//     //Write a function that produces an array with the numbers 0 to N-1 in it.

//     //For example, the following code will result in an array containing the numbers 0 to 4:
    
    
//     //arr(5) // => [0,1,2,3,4]

//     //-----------------------------------------------------------------------
//     //Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// //     a = "xyaabbbccccdefww"
// // b = "xxxxyyyyabklmopq"
// // // longest(a, b) -> "abcdefklmopqwxy"

// // // a = "abcdefghijklmnopqrstuvwxyz"
// // // longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// // const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('');

// // console.log(longest('wadwdvgbhjasdo'));

// const characters = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         mass: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },
// ];

// //**FILTER */

// // //1. Get characters with mass greater then 100
// // const greater100char = characters.filter(character => character.mass > 100);  //characters means refence

// // console.log(greater100char);

// // //2. shorter characters with height less than 200

// // const shoterchar = characters.filter(character => character.height < 200);

// // console.log(shoterchar);

// // //3. Get all male characters

// // const malechar = characters.filter(male => male.gender === 'male');

// // console.log(malechar);

// // //4.Get all the female characters

// // const allFemale = characters.filter(f => f.gender === 'female');

// // console.log(allFemale);

// //**MAP */

// // //1.Get array of all names
// // const getName = characters.map(x => x.name);

// // console.log(getName);
// // //2. Get array of all heights
// // const getHei = characters.map(x => x.height);

// // console.log(getHei);
// // //3. Get array of objects with just name and heigjt properties 
// // const nameAndProperties = characters.map(x => x.name && x.height);
// // console.log(nameAndProperties);

// // const nameAndPro = characters.map(x => ({name: x.name, height: x.height}));

// // console.log(nameAndPro);
// // //4. Get array of all first names

// // const firstName = charact ers.map(x => x.name.split(' ')[0]);

// // console.log(firstName);

// //**SOME */.  it gives the output on true or false 

// // //1. Is there at leat one male cjharacter? 
// // const oneMale = characters.some(x => x.gender === 'male');

// // console.log(oneMale);
// // //2. Is there ar leasrt one characrer with blue eyes? 

// // const blueEyes = characters.some(x => x.eye_color === 'blue');

// // console.log(blueEyes);

// // //3. Is there at least one character taleer than 200?

// // const heiTaller = characters.some(x => x.height > 210);

// // console.log(heiTaller);

// // //4. Is there at least one character that has mass less than 50? 

// // const massLess = characters.some(x => x.mass < 50);

// // console.log(massLess);

// //**SORT */

// //1. sort by mass

// // const massSort = characters.sort((a,b) => b.mass - a.mass);

// // console.log(massSort);

// // // //2. sort by name
// // const sortName = characters.sort((a,b) => {
// //     if(a.name < b.name) return -1;
// //     return 1;
// // });
// // console.log(sortName);

// // // //3. sort by weight
// // const weightSort = characters.sort((a,b) => a.height - b.height);
// // console.log(weightSort); 
// // // //4.sort bny gender

// // const genderSort = characters.sort((a,b) => {
// //     if (a.gender === 'female') return 1;
// //     return -1;
// // });

// // console.log(genderSort);

// //**Reduce */

// //1. GET total mass of all characters

// const allMass = characters.
// //2. Get total height of all characters

// //3. Get total number iof charaters by eue color

// //4. Get total number in characters in all the character names

//make it to string : 

// const makeTOString = num => `${num}`;

// console.log(makeTOString(243));

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]

// function sortArray(array) {
//     // Return a sorted array.
//     return array.sort();
// }
// console.log(sortArray([1,7,4,5,0]))

// var array = [5, 3, 2, 8, 1, 4],
//     indices = [];

// array
//     .filter((v, i) => v % 2 && indices.push(i))
    
//     .sort((a, b) => a - b)
    
//     .forEach((v, i) => array[indices[i]] = v);

//     console.log(array)

// function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


// function findShortest (s) {
    
//     let word = s.split(' ');
//     let smallest = word[0];
//     for(let i= 0; i < word.length; i++){
//         if( word[i].length < smallest.length){
//         smallest = word[i];
//         }
//     }
//     return smallest.length 

// }
// console.log(findShortest('d', 'sjkdf', 'sdfaaaaa'));

// "This is an example!" ==> "sihT si na !elpmaxe"

// function reverseWords(str){
//     return str.split(' ').map(str => str.split('').reverse().join('')).join(" ");
// }

// console.log(reverseWords("this is it"));

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// function createPhoneNumber(numbers){
//     return numbers.join("").replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));



// function mathProcess(arr){
//     return arr.map(num => num*num*num)
// }
// let arr = [2, 4, 5]
// console.log(mathProcess(arr));

// numbers.average(); // must return 3
// array = [1, 2, 3, 4, 5, 2222, 7, 8, 9, 0]

// function aveSum() {
//     total = 0;
//     count = 0;

//     array.forEach((item, index) => {
//         total += item; 
//         count ++;
//     })
//     return total/count;
// }
// console.log(aveSum(array));

// numbers.sum(); // must return 15

// function numSum(){
//     total = 0;

//     array.forEach((item) => {
//         total += item;
//     })
//     return total;
// }

// console.log(numSum(array))
// numbers.even(); // must return [2, 4]

// let odd = array.filter(n => n % 2 === 0)

// console.log(odd);

// Write a function that accepts a starting and ending IPv4 address, and returns the number of IP addresses
// from start to end, excluding the end IP address. All input to the ipsBetween function will be valid IPv4 
// addresses in the form of strings. The ending address will be at least one address higher than the starting 
// address.

// array = [1, 3, 44, 5, 67, 8];

// function revArray(){
//     let revArr = [...array].reverse();
//     return revArr;
// }
// console.log(revArray());
// console.log(array);

// pigIt('Pig latin is cool');

// function pigIt(str) {
//     let newArray = [],
//         words = str.split(' ')
//     words.forEach(x => {
//         let wordArray = x.split('')
//         wordArray.push(wordArray[0], 'ay'), wordArray.shift()
        
//         if (x === '!' || x === '?' || x === '.'){
//             newArray.push(x)
//         }else{
//             newArray.push(wordArray.join(""))
//         }
//     })    
//     return newArray.join(" ");
    
    
// }

// console.log(pigIt('Pig latin is cool')); 

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

    // const arr = ([false, 0,1,0, 'a', 5555,7,9,43,5,78]);

    // function sortArr(){
    //     let sortZero = arr.sort((a,b) => b-a);
    //     return sortZero;
    // }
    // console.log(sortArr());


    // moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// function duplicateCount(text){
//     let newText = text.split('');

//     let newArr = [];

//     for(let i=0; i< newText.length; i++){
//         if( newText[i] === newText[i+1] && !newArr.includes(newText[i])){
//             newArr.push(newText[i])
//         }
//     }
//     return newArr.length
// }
// console.log(duplicateCount("abcde") );
// console.log(duplicateCount("Indivisddddddddddffffffibilities") );
// console.log(duplicateCount("abdddde") );

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// let check = (a, x) => {
//     return a.includes(x);
// }

// console.log(check(5));

// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

//If we list all the natural numbers below 10 that are multiples of 3 or 5, 
//we get 3, 5, 6 and 9. The sum of these multiples is 23.

// function solution(num){
//     let sum = 0;
    
//     for(let i = 0; i< num; i++){
//         if(i %3 == 0 || i %5 ==0){
//             sum +=1
//         }
//    }
//    return sum;
//}
//console.log(solution(2399));

//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// (81-1-1-81)

// function squareDigit(num){
//     //convert the result to a number.    '23435' => 23424
//     return Number(
//         num.toString() //num => '5555' 
//         .split('') //['5','5','5','5']
//         .map(val => val*val)  //  '5'*'5' ===25 type conversion now we have ['25', '25', '25']
//         .join('')//'252525'
//         );
// }
// console.log(squareDigit(8));


// Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid 
//consecutive numbers.

// function order(words){
//     return words.split(' ').sort((a,b) => a.split('').find(Number) - b.split('')).join(' ')
// }
// console.log(order())

//console.log(Math.pow(2,3))
// Implement a function that accepts 3 integer values a, b, c. The function should return 
// if a triangle can be built with the sides of given length and false in any other case.

// function triangle(a,b,c){
//     if(a + b >c && a+c >b && c+b >a){
//         return true;
//     }else{
//        return false;
//     }
// }
// console.log(triangle(1,2,2))

// const array1 = [1, 3, 4, 5];

// const initialValue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

// console.log(sumWithInitial);

// const getMax = (a, b) => Math.max(a, b);

// //callback is invoked for each element in the array starting at index 0
// [1, 100].reduce(getMax, 50);  //100

// [50].reduce(getMax, 10); //50
// //callback is invoked once for element at index 1
// [1, 100].reduce(getMax); //100

// //callback is not invoked 
// [50].reduce(getMax); //50
// [].reduce(getMax, 1); //1
// [].reduce(getMax); //TypeError

// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index){
//     const returns = accumulator + currentValue;

//     console.log(
//         `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, return: ${returns}`
//     );
//     return returns;
// }
// array.reduce(reducer);
// first 15, currentvalue 16, index 1, 31
//first 31, currentvalue 17, index 2, 48
//first 48, currentvalue 18, index 3, 

//[15, 16, 17, 18, 19].reduce((accumulator, currentValue) => accumulator + currentValue, 10);

//first 10, currentValue 15, index 0 return : 25
//first 25, currentValue 16, index1 , return: 41
// const objects = [{ x:1}, { x: 2}, {x:3}];
// const sum = objects.reduce(
//     (accumulator, currentValue) => accumulator + currentValue.x, 0,
// );
// console.log(sum); //6
// const flattened = [
//     [0, 1],
//     [2, 3],
//     [4, 6],
// ]

// let f =flattened.reduce((accumulator, currentValue) => 
//     accumulator.concat(currentValue), [],
// );
// console.log(f);

// counting instances of values in an object

// const friends = [
//     {
//       name: "Anna",
//       books: ["Bible", "Harry Potter"],
//       age: 21,
//     },
//     {
//       name: "Bob",
//       books: ["War and peace", "Romeo and Juliet"],
//       age: 26,
//     },
//     {
//       name: "Alice",
//       books: ["The Lord of the Rings", "The Shining"],
//       age: 18,
//     },
//   ];

// let allBooks = friends.reduce((accumulator, currentValue)=>
//   [...accumulator, ...currentValue.books], ['alphabet'],
// );
// console.log(allBooks);

//Removing duplicate items in an array

// const Array = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

// const removeDuplicate = Array.reduce((accumulator, currentValue) => {
//     if(!accumulator.includes(currentValue)){             // 
//         return [...accumulator, currentValue];
//     }
//     return accumulator;
// },[]);
// console.log(removeDuplicate);

// const number = [-5, 6, 2, 0];

// const doublePositiveNumber = number.reduce((accumulator, currentValue) => {
//     if(currentValue > 0){
//         const double = currentValue*2;
//         return [...accumulator, double]
         
//     }
//     return accumulator
// },[]);
// console.log(doublePositiveNumber);

// const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

// const removingDupe = myArray.reduce((accumulator, currentValue)=> {
//     if(!accumulator.includes(currentValue)){
//         return [...accumulator, currentValue]
//     }
//     return accumulator;
// },[]);
// console.log(removingDupe)
//``````````````~~~~~~~~~~~~~~~~~~~PUSH!~~~~~~~~~~~~~~~~~~~

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('me');
// console.log(count);
// console.log(animals)

//marging two arrays

// const vegetables = ["parsnip", "potato"];
// const moreVegs = ["celery", "beetroot"];

// //marge the second array to the first array

// vegetables.push(...moreVegs);
// console.log(vegetables);
// const arrayLike = {
//     length: 3,
//     unrelated: "foo",
//     2: 4,
//   };
// const object = arrayLike.push(arrayLike, 2, 4);

// console.log(object);

//~~~~~~~~~~~ sort ~~~~~~~~~~~~~~~

// const month = ['March', 'Jan', 'Feb', 'Dec'];

// month.sort();
// console.log(month);

// const array1 = [1, 30, 4, 21, 100000];

// array1.sort();
// console.log(array1);

// //functionless sort()
// //arrow function sort((a,b)=> {})
// //compare function sort(compareFn)
// //Inline compare function sort(function(a,b){})

// function compareFn(a,b){
//     if(a is less than b by some ordering criterion){
//         return -1;
//     }
//     if(a is greater than b by the ordering criterion){
//         return 1;
//     }
//     // a must be equal to b
//     return 0
// }

//to compare number instead of string
// function compareNumber(a,b){
//     return a-b;
// }

//Creating displaying sorting an array
// const stringArray = ["Blue", "Humpback", "Beluga"];
// const numberArray = [40, 1, 5, 200];
// const numericStringArray = ["80", "9", "700"];
// const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];


// // console.log(stringArray.join());
// // console.log(stringArray.sort());

// // console.log(numberArray.join());
// // console.log(numberArray.sort());
// // console.log(numberArray.sort((a,b) => a-b));

// console.log(numericStringArray.join(''));
// console.log(numericStringArray.sort());
// console.log(numericStringArray.join());

// const items = [
//     { name: "Edward", value: 21 },
//     { name: "Sharpe", value: 37 },
//     { name: "And", value: 45 },
//     { name: "The", value: -12 },
//     { name: "Magnetic", value: 13 },
//     { name: "Zeros", value: 37 },
// ];

// //sort value
// items.sort((a,b) => a.value - b.value);

// //sort by name
// items.sort((a,b)=> {
//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();
//     if(nameA < nameB){
//         return -1;
//     }
//     if(nameA > nameB){
//         return 1;
//     }
// });
// console.log(items)

//sorting with map 

//arrau to be sorted 

// const data = ["delta", "alpha", "charlie", "bravo"];

// //temporary array holds objects with position and sort-value 

// const mapped = data.map((v,i) => {
//     return {i, value: (v)}
// });

// mapped.sort((a,b)=> {
//     if(a.value > b.value){
//         return 1;
//     }
//     if(a.value < b.value){
//         return -1;
//     }
//     return 0;
// })
// console.log(mapped);

// const numbers = [3, 1, 4, 1, 5];

// const sorted = [...numbers].sort((a,b) => a - b);

// sorted[0] = 10;
// console.log(sorted[0])

// const students = [
//     { name: "Alex", grade: 15 },
//     { name: "Devlin", grade: 15 },
//     { name: "Eagle", grade: 13 },
//     { name: "Sam", grade: 14 },
// ];
// const data = students.map((v,i)=> {
//     return {i, value: (v)}
// });
// students.sort((a,b) => a.grade - b.grade);
// console.log(students)

// const array1 = [2, 30, 4, 21, 100000];

// const oddOrEven = array1.reduce((accumulator, currentValue)=> accumulator+currentValue,0) %2 === 0 ? 'even' : 'odd';

// console.log(oddOrEven);
//object destructuring : 
// const person = {
//     name: "Rohan",
//     age: 33,
//     gender: "female"
// }
// // let name1 = person.name;
// // let age = person.age;
// // let gender = person.gender;

// //console.log(name1);

// //ES6
// let {name, age, gender} = person;
// console.log(name)
































