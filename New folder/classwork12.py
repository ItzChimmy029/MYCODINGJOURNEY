n = int(input("Enter the number to sum to here >>> "))
sum = 0
for x in range(1,n,3):
#          (from,to,in increments of)
    sum+=x
print(sum)

# continue statement , it sends python back to the start of the loop
for x in range(10):
    if x == 5:
       continue
    print(x)

# assignment write a program in python to sum all integers between 1-n excluding multiples of 5 but if a multiple of 10 include 

# break statement stops the loop 
for c in range(30):
    if c==5:
       break
    print(c)
# pass statement , it passses 
myfriends=["charles","ebuka","franklin","nneka","chinaza"]
for x in myfriends:
    pass

for i in range(1,6,1):
    print(i)
    for j in range(4):
        print(j,end="")
    print()   
# write a program to do matrix summation print matrix a,b,c(a+b) 
       
1,2,3,4
5,6,7,8
9,10,11,12
13,14,15,16


-1,0,1,2
3,4,5,6
7,8,9,10
11,12,13,14


# fix the below shit !!!!!


n = int(input("give me your input range >>> "))
sum = 0
for i in range(n+1):
    if i % 5 == 0:
       continue
    elif i % 10 == 0:
         sum += i 
    else:
        sum += i 
    print("sum of values =",sum)



row = int(input("number of rows >>> "))
column = int(input("number of row >>> "))
for i in range(1,row+1,1):
    for j in range(1,column+1,1):
        A[i][j]= int(input("enter item A>>> "))
for k in range(row+1):
    for m in range(column+1):
        b[i][j]=int(input("Enter item B>>> "))
for p in range(row+1):
    for v in range(column+1):
        C[i][j]=A[i][j]+B[i][j]
print(c)






