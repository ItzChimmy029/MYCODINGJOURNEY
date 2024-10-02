newfriend = input("add name: ")
with open('myfriends.txt', 'w') as f:
    for friend in newfriend:
        f.write(friend + '\n')