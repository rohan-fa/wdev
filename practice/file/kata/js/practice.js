////Check to see if a string has the same amount of 'x's and 'o's

function X0(str){
    str = str.toLowerCase().split('');
    return str.filter(r => r === 'x').length === str.filter(e => e === 'o').length;
     
}

console.log(X0("ooxx")) 
console.log(X0("xooxx"))