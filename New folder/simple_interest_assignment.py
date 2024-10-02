# This program solves simple interest
principal = int(input("What is the principal ? "))
time = int(input("How long will it last ? "))
rate = int(input("At what rate will the interest be added ?"))
simple_interest = principal*time*rate/100
print(f'The simple interest for ${principal} in {time}years at the rate of {rate}% is {simple_interest}')
