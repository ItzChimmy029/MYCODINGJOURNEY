# Define the monthly basic salary
basic_salary = 2484245.50

# Calculate the various allowances
hardship_allowance = basic_salary * 0.5
constituency_allowance = basic_salary * 2.0
newspapers_allowance = basic_salary * 0.5
wardrobe_allowance = basic_salary * 0.25
recess_allowance = basic_salary * 0.1
accommodation = basic_salary * 2.0
utilities = basic_salary * 0.3
domestic_staff = basic_salary * 0.7
entertainment = basic_salary * 0.3
personal_assistants = basic_salary * 0.25
vehicle_maintenance_allowance = basic_salary * 0.75
leave_allowance = basic_salary * 0.1
severance_gratuity = basic_salary * 3.0
car_allowance = basic_salary * 4.0

# Calculate the total monthly salary
total_monthly_salary = basic_salary + hardship_allowance + constituency_allowance + newspapers_allowance + wardrobe_allowance + recess_allowance + accommodation + utilities + domestic_staff + entertainment + personal_assistants + vehicle_maintenance_allowance + leave_allowance + severance_gratuity + car_allowance

# Calculate the total annual salary
total_annual_salary = total_monthly_salary * 12

# Calculate the total monthly salary in dollars
exchange_rate = 1490
total_monthly_salary_usd = total_monthly_salary / exchange_rate

# Calculate the total annual salary in dollars
total_annual_salary_usd = total_annual_salary / exchange_rate

# Print the results
print("Remuneration of a Nigerian Senator:")
print("-------------------------------")
print("Total Monthly Salary: ₦{:,.2f}".format(total_monthly_salary))
print("Total Annual Salary: ₦{:,.2f}".format(total_annual_salary))
print("-------------------------------")
print("Total Monthly Salary in USD: ${:,.2f}".format(total_monthly_salary_usd))
print("Total Annual Salary in USD: ${:,.2f}".format(total_annual_salary_usd))