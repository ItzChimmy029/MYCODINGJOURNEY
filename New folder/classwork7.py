x = [1 , 18 , 7.5 , True , "awesome"]
x[3] = "emma"
print(x)

# items in a tuple can't be changed
tup1 = (4 , 5 , 6 ,777)
# tup1[3] = "alex" will not run!!!
print(tup1[3])

#"0" and false , "1" and True are considered the same in a set , list or tuple
z = {0 , 45 , 7.3 , False}
print(z)
# to join two sets use the update or union function
A = {1,2,3,5}
B = {7,8,9}
A.update(B)
print(A)
C = A.union(B)
print(C) 
# to remove items in a set
B.remove(8)
print(B)
B.discard(9)
print(B)

# use the pop function to remove items at random
x = {1,2,3,4,5}
y = x.pop()
print(y)
print(x)

# use the clear function to clear a set or list
x.clear()
print(x)
k = {4,6,8,9,2}
print(k)

# 
F = {1,2,3,5,9}
E = {7,8,9,5,2}

# use .intersection_update()to find itersection while updating the first set
F.intersection_update(E)
D = F.symmetric_difference(E)

# use .intersection when creating a new set/variable of intersection of other sets
c = F.intersection(E)
print(F)
print(E)
print(c)

#dictionary
Car = {"model":"Nissan" , "Type":"suv" , "year":"2013"}
print(Car["Type"]) 
print(Car["model"])

friends