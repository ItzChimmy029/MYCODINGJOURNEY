dict1 = {"name":"joseph" , "age":"45" , "gender":"male"}
#        (key)  (value)     (  pair ) 

# to print entire content of a dictionary or a value in the dictionary
print(dict1)
print(dict1["name"])

#to print keys , values , items .
print(dict1.keys())
print(dict1.values())
print(dict1.items())
myperson = {"name":"emmanuel","age":"blank","gender":"male","complection":"light skin thing","height":"6'2 ish"}
print(myperson["height"])
print(myperson.values())
print(myperson.items())
print(myperson)

#to change items in a dictionary
myperson["gender"]="contemplating"
myperson.update({"name":"onyeabor"})
print(len(myperson)) 
print(myperson["gender"])
myperson["age"]="guess"
print(myperson)
#
print(myperson.get("gender"))
print("gender" in myperson)

# to remove items in a dictionary
print(myperson.popitem()) 
del myperson["name"]
print(myperson)

#
myperson = dict1.copy()
print(myperson)
myperson = dict(dict1)
print(myperson)
































 



