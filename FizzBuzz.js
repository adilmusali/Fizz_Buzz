function Fizz_Buzz(i){
    if (i % 3 == 0 && i % 5 == 0)
    {
        return "FizzBuzz"
    }
    if (i % 3 == 0)
    {
        return "Fizz"
    }
    if(i % 5 == 0)
    {
        return "Buzz"
    }
    return i
}

console.log(Fizz_Buzz(6))
console.log(Fizz_Buzz(10))
console.log(Fizz_Buzz(30))
