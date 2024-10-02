# This python program solves quadratic equation with almighty formla
a = int(input("Enter value of a-> "))
b = int(input("Enter value of b-> "))
c = int(input("Enter value of c-> "))
X1 = (- (b) + (b**2 - 4*a*c)**0.5) / 2*a
X2 = (-(b) - (b**2 - 4*a*c)**0.5) / 2*a
print (X1,X2)