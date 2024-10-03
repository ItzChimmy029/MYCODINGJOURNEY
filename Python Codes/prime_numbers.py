###############################################
#NAME : MBAEGBU CHIMDALU JUSTICE.###############
#REG NO : 2022/20931COS.########################
#COURSE CODE : CSC 202.#########################
#DATE : 08/06/2024.#############################
#PURPOSE OF CODE : TO FIND PRIME NUMBERS###

def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True


def find_primes_in_range(start, end):
    primes = []
    for num in range(start, end + 1):
        if is_prime(num):
            primes.append(num)
    return primes


def main():
    start_range = int(input("Enter the start of the range: "))
    end_range = int(input("Enter the end of the range: "))

    print(f"Prime numbers between {start_range} and {end_range} are:")
    primes = find_primes_in_range(start_range, end_range)
    if primes:
        print(*primes)
    else:
        print("No prime numbers found in the given range.")


if __name__ == "__main__":
    main()