// Факторизация
// Разложение числа на простые множители называется факторизацией числа.
// Напишите программу, которая производит факторизацию переданного числа.


function primeFactors(n){
    let out = [];
    // Print the number of 2s that divide n
    while (n % 2 == 0) {
        out.push(2);
        n = n/2;
    }

    // n must be odd at this point. So we can skip one element
    // (Note i = i +2)
    for (let i = 3; i * i <= n; i = i + 2) {
        // While i divides n, print i and divide n
        while (n % i == 0) {
            out.push(i);
            n = n / i;
        }
    }
    // This condition is to handle the case when n is a prime number
    // greater than 2
    if (n > 2) {
        out.push(n);
    }
    return out;
}


console.log(primeFactors(100));
