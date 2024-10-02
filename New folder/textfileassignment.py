capital_letters = {}
countletter = open('learning.txt') 
for character in countletter:
    if character == character.upper():
       capital_letters.add(character)

print(len(capital_letters))
