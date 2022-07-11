def Fizz_Buzz(i):
    if (i % 3 == 0) and (i % 5 == 0):
        return "FizzBuzz"
    if i % 3 == 0:
        return "Fizz"
    if i % 5 == 0:
        return "Buzz"
    return i

print(Fizz_Buzz(6))
print(Fizz_Buzz(10))
print(Fizz_Buzz(30))
