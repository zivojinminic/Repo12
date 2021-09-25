// Only change code below this line
function sumFibonacci(num){
    var fib = 0;
    var fib2 = 1;
    var sum = 0;
    while(fib2 <= num){
        if(num == 1) {
            sum = 1;
        } else if (fib2 % 2 !== 0) {
            sum += fib2;
        }
        fib2 += fib;
        fib = fib2 - fib;
    }
    return sum;
}
// Only change code above this line

console.log(sumFibonacci(1)); // Change this line
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;