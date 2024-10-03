#To write a python program for an airline company called COAL CITY airways
passenger_name = input("What's the name of the passenger ? ")
standard_airfare_price = 100000
age_of_passenger = int(input("What's the age of the passenger ? "))

if age_of_passenger <= 5:
    print(f'{passenger_name},you are to pay nothing')
elif age_of_passenger > 5 and age_of_passenger <  13:
    discount_amount1 = (0.5 * standard_airfare_price)
    amount_payable1 = standard_airfare_price - discount_amount1
    print("The amount to be paid is ₦ {:,.2f}".format(amount_payable1))
elif age_of_passenger >= 12:
    amount_payable2 = standard_airfare_price
    print("The amount to be paid is ₦ {:,.2f}".format(amount_payable2))
