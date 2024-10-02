alist = [7 , 18 , 3 , 5 ,1 ,13]
alist.sort()
print(alist)
alist.sort(reverse=True)
print(alist)
print(13 in alist)
alist.remove(5)
print(alist)
print(alist.pop())
print(alist)
blist = [6 , 4 , 9 , 34 , "the"]
masterlist = [ ]
masterlist.extend(alist)
masterlist.extend(blist)
print(masterlist)
masterlist = alist + blist
print(masterlist)

#to count how many times an item appears in a list
blist = [6 , 4 , 9 , 34 , "the"]
print(blist.count(3))

#tuples are unchangeable but items in atuple are changeable
tup1 = (6 , 7 , 8 , 3)
print(tup1)
print(type(tup1))
print(tup1[2])

#to change a tuple to a list
mylist = list(tup1)
print(mylist)

dayofweek = ("sunday" , "monday" , "tuesday" , "wednesday")
color = ("blue" , "yellow" , "red" , "black" , "white")
tup1 = (6  ,3  ,2 , 5)
tup2 = (2, 1 ,99 ,4, -1)
tup3 = tup1 + tup2
print(tup3)
print(len(color + dayofweek))

set1 = {4 , 7 ,3, 2}
print(type(set1))
print(len(set1))


#use union opperator to join two sets
set2 = {77 , 2 , 8 ,5}
set3 = set1.union(set2)
print(set3)
set1.update(set2)
print(set1)

#to change a set to a list
set4 = list(set2)


friend=["chinaza", "Bob", "deborah"]
friend.remove("deborah")

print(friend)






