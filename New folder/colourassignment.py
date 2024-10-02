colour = input("Name a colour >> ")
colours = {"white": "white signifies purity", "blue": "blue signifies power", "yellow": "yellow signifies warning", "red": "red signifies danger", "black": "black signifies evil"}
if colour == "white":
    print(colours["white"])
elif colour == "blue":
    print(colours["blue"])
elif colour == "yellow":
    print(colours["yellow"])
elif colour == "black":
    print(colours["black"])
elif colour == "red":
    print(colours["red"])
else:
    print("sorry , there's currently no info on the significance of this colour")
