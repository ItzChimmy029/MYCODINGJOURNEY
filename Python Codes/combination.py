def factorial(n):
    nfact = 1
    for X in range(1 , n+1):
        nfact = nfact * X
    return(nfact)
n = int(input(">>> "))
r = int(input(">>> "))
ncombinationr = factorial(n) / (factorial(r) * factorial(n-r))
print(ncombinationr)