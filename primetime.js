
//Part 2: Prime Time

// here we will generate all primes number from 1 to 500 just for test
const maxNumber = 500;
//initially we start with 1 and 2 as prime numbers
console.log("1")
console.log("2")
n=3;
while(n <= maxNumber ){
    let prime = true;

    for(let i=2 ;i< n/2 ; i++) {
        if (n % i == 0){
          prime = false;
          break;
          }
    }
    if (prime) {console.log(n)}
    n++;
}


// find primary number that comes after an arbitrary number, n.

const targetN = 168 ;
// let's find the prime number that comes after it
let primeN = targetN ;
let find = false ; 
while(!find) {
    let prim = true;
    for(let i=3 ; i<= primeN/2 ; i++){
        if( primeN%i == 0){
          prim = false;
          break;
        }
        }
     // if we find a prime here we break by setting find to true  
    if(prim){
        console.log(`prime number that comes after ${targetN} is ${primeN}`);
         find = true;
        }
    primeN++;    
}
