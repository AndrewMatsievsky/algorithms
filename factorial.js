function factorial(input) {
    return input > 0 ? BigInt(input * factorial(input - 1)) : 1;
}

console.log(factorial(25).toString())