#Code to solve a quadratic equation
#Format goes like this ax^2 +bx +c = 0
value_of_a = input("Input the value of a ")
value_of_b = input("Input the value of b ")
value_of_c = input("Input the value of c ")
X1 = (-(value_of_b) + ((value_of_b)^2 - 4*(value_of_a)*(value_of_c))^1/2)/2*(value_of_a)
X2 = (-(value_of_b) - ((value_of_b)^2 - 4*(value_of_a)*(value_of_c))^1/2)/2*(value_of_a)
print(X1,X2)