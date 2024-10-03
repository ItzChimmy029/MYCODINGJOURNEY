# Constants
monthly_basic_salary = 2484245.50 # Monthly basic salary in Naira
exchange_rate = 1490 # Naira to dollar exchange rate

# Allowance as percentage of monthly basic salary
hardship_allowance = 0.5 * monthly_basic_salary
constituency_allowance = 2 * monthly_basic_salary
newspaper_allowance = 0.5 * monthly_basic_salary
wardrobe_allowance = 0.25 * monthly_basic_salary
recess_allowance = 0.1 * monthly_basic_salary
accommodation = 2 * monthly_basic_salary
utilities = 0.3 * monthly_basic_salary
domestic_stuff = 0.7 * monthly_basic_salary
entertainment = 0.3 * monthly_basic_salary
personal_assistants = 0.25 * monthly_basic_salary
vehicle_maintenance_allowance = 0.75 * monthly_basic_salary
leave_allowance = 0.1 * monthly_basic_salary
severance_gratuity = 3 * monthly_basic_salary
car_allowance = 4 * monthly_basic_salary

# Sum of the allowances as percentage of monthly basic salary
total_monthly_salary = ( monthly_basic_salary + hardship_allowance + constituency_allowance + newspaper_allowance + wardrobe_allowance + recess_allowance + accommodation + utilities + domestic_stuff + entertainment + personal_assistants + vehicle_maintenance_allowance + leave_allowance + severance_gratuity + car_allowance )

# Now we find the total annual salary
total_annual_salary = 12 * total_monthly_salary

# Convert to dollars
total_monthly_salary_usd = total_monthly_salary / exchange_rate
total_annual_salary_usd = total_annual_salary / exchange_rate

# Display results
print(f'The total monthly salary of the senator in naira is ₦ {total_monthly_salary}')
print(f'The total annual salary of the senator in naira is ₦ {total_annual_salary}')
print(f'The total monthly salary of the senator in dollar is  $ {total_monthly_salary_usd}')
print(f'The total annual salary of the senator in naira is  $ {total_annual_salary_usd}')























basic_salary = 2484245.50

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
vehicle_maintenance = basic_salary * 0.75
leave_allowance = basic_salary * 0.1
severance_gratuity = basic_salary * 3.0
car_allowance = basic_salary * 4.0

total_monthly_salary = basic_salary + hardship_allowance + constituency_allowance + newspapers_allowance + wardrobe_allowance + recess_allowance + accommodation + utilities + domestic_staff + entertainment + personal_assistants + vehicle_maintenance + leave_allowance + severance_gratuity + car_allowance

total_annual_salary = total_monthly_salary * 12

exchange_rate = 1490
total_monthly_salary_usd = total_monthly_salary / exchange_rate
total_annual_salary_usd = total_annual_salary / exchange_rate

print("Total Monthly Salary: ₦", total_monthly_salary)
print("Total Annual Salary: ₦", total_annual_salary)
print("Total Monthly Salary in USD: $", total_monthly_salary_usd)
print("Total Annual Salary in USD: $", total_annual_salary_usd)


