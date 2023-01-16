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

