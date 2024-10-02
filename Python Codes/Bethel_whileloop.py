#To find the sum of all even numbers between a range of 0 to 100
sum = 0
n = 2
while n < 100:
    sum = sum + n
    n = n + 2
print("Summation of all even numbers < 100 = " ,sum)


#To find the sum of all odd numbers between a range of 0 to 100
sum = 0
n = 1
while n < 100:
   sum = sum + n
   n = n + 2
print("Summation of all odd numbers < 100 = ",sum)


#To find the sum of all numbers excluding the multiples of 5 between a range of 0 to 100
sum = 0
n = 1
while n < 100:
   if n % 5 != 0:
     sum = sum + n
   n = n + 1
print("Summation of all numbers excluding the multiples of 5 between 0 to 100 = ",sum)

