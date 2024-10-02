#To find the sum of all even numbers between a range of 0 to 40
sum = 0
n = 2
while n < 40:
    sum = sum + n
    n = n + 2
print("Summation of all even numbers < 40 = " ,sum)



#To find the sum of all odd numbers between a range of 0 to 40
sum = 0
n = 1
while n < 40:
   sum = sum + n
   n = n + 2
print("Summation of all odd numbers < 40 = ",sum)


#To find the sum of all numbers excluding the multiples of 5 between a range of 0 to 40
sum = 0
n = 1
while n < 40:
   if n % 5 != 0:
     sum = sum + n
   n = n + 1
print("Summation of all numbers excluding the multiples of 5 between 0 to 40 = ",sum)

