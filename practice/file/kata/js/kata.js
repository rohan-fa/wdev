//divisors(12); // should return [2,3,4,6]
//divisors(25); // should return [5]
//divisors(13); // should return "13 is prime"

// const divisors = (integer) => {
//     let res = [];

//     for(let i=2; i<= integer; i++){
//         if(i % integer == 0){
//             res.push(i);
//         }
//     }
//     return res.length ? res : integer + ' is prime'
// };
// function divisors(integer) {
// 	var divs = [];
  
//   for(var i = 2; i <= integer; i++) {
//     if(integer % i === 0) {
//     	divs.push(i);
//     }
//   }
  
//   return divs.length ? divs : integer + ' is prime';
// };

//Check to see if a string has the same amount of 'x's and 'o's

// function XO(str){
//     str = str.toLowerCase().split('');
//     return str.filter(x => x=== 'x').length === str.filter(x => x === 'o').length
// }

// console.log(XO("ooxx")) 
// console.log(XO("xooxx")) 

// function filter_list(l){
    

//     return l.filter(x => Number.isInteger(x));
// }

// console.log(filter_list([1,2,'a','b'])) //== [1,2]
// console.log(filter_list([1,'a','b',0,15])) //== [1,0,15]

// function makeNegative(num){
//     if(num > 0){
//         return -num;
//     }else{
//         return num
//     }


// }

// console.log(makeNegative(1));    // return -1
// console.log(makeNegative(-5));   // return -5
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters
// a = 1
// b = 4
// --> [1, 2, 3, 4]

// function between (a,b){
//     arr = []

//     for(let i=a; i <= b; i++){
//         arr.push(i);
//     }
//     return arr
// }
// console.log(between[1,9])

// function solve(arr){
//     res= [];
//     arr.forEach(item => res[item] == (res[item]+1 || 1))
//     return arr.sort((a,b) => res[b] === res[a] ? a-b : res[b] - res[a]) 
    
// }
// console.log(solve([2,3,5,3,7,9,5,3,7]));

function pinATM(pin){
    let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    count = 0; 
    let pinArr = pin.split("");

    for(let i =0; i < pinArr.length; i++){
        if(num.includes(pinArr[i])){
            count += 1
        }else{
            false
        }
    }
    return count == 4 || count ==6;

}
console.log(pinATM("1234")); 
console.log(pinATM("12345")); 
console.log(pinATM("a234")); 

// function validatePIN (pin) {
//     let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//     let count = 0;
//     let pinArr = pin.split('');
//     for (let i of pinArr) {
//       if (num.includes(i)) {
//         count += 1;
//       } else {
//         return false;
//       }
//     }
//     return count == 4 || count == 6;
//   }

  












