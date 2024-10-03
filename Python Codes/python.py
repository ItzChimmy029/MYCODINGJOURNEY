################################################
#NAME : MBAEGBU CHIMDALU JUSTICE.###############
#REG NO : 2022/20931COS.########################
#COURSE CODE : CSC 202.#########################
#DATE : 08/06/2024.#############################
#PURPOSE OF CODE : TO SOLVE FOR COMBINATION#####



def factorial(n):
    nfact = 1
    for X in range(1 , n+1):
        nfact = nfact * X
    return(nfact)
n = int(input(">>> "))
r = int(input(">>> "))
ncombinationr = factorial(n) / (factorial(r) * factorial(n-r))
print(ncombinationr)





'''
# This python program solves quadratic equation with almighty formla
a = int(input("Enter value of a-> "))
b = int(input("Enter value of b-> "))
c = int(input("Enter value of c-> "))
X1 = (- (b) + (b**2 - 4*a*c)**0.5) / 2*a
X2 = (-(b) - (b**2 - 4*a*c)**0.5) / 2*a
print (X1,X2)
'''