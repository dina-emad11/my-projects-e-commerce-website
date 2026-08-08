let num1 = Number(prompt("Enter the first number"));
let num2 = Number(prompt("Enter the second number"));
 let sum = num1 + num2;
 let result = (sum === 10) ? true : false;
 console.log(result);

 function convertToInnteger(str){
    return parseInt(str);
 }
 console.log(convertToInnteger("42"));

 function sumTwoNumbers(a, b){
    return +a + +b;
 }
 let total = sumTwoNumbers("5","7");
 console.log(total);

 function printOddNumbers(start, end){
    for(let i=start + 1; i< end; i++){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
 }
 printOddNumbers(1, 10);
