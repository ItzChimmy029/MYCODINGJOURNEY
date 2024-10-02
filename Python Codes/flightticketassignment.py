name = input("Full Name> ")
age = int(input("Age> "))
price = 100000
infant_price = "free ticket"
child_price = price/2
adult_price = price
if age <= 6:
    print(f'{name} is an infant so he/she will be given ${infant_price}')
elif age >6 and age<=13:
    print(f'{name} is a child so he/she will pay for ${child_price} a ticket')
elif age >13:
    print(f'{name} is an adult so he/she will pay ${adult_price} for a ticket')