def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

def find_primes(start, end):
    prime_numbers = []
    for num in range(start, end + 1):
        if is_prime(num):
            prime_numbers.append(num)
    return prime_numbers

start_range = int(input("Enter the start of the range: "))
end_range = int(input("Enter the end of the range: "))

print("Prime numbers between", start_range, "and", end_range, "are:")
print(find_primes(start_range, end_range))