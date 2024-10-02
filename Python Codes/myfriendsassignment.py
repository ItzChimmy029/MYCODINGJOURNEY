friends = []

while True:
    friend = input("list names of friends or finish to stop>>> ")
    if friend == 'finished':
        break
    friends.append(friend)

with open('myfriends.txt', 'w') as f:
    for friend in friends:
        f.write(friend + '\n')




