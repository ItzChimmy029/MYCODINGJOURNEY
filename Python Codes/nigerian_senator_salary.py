###############################################
#NAME : MBAEGBU CHIMDALU JUSTICE.###############
#REG NO : 2022/20931COS.########################
#COURSE CODE : CSC 202.#########################
#DATE : 08/06/2024.#############################
#PURPOSE OF CODE : TO CALCULATE THE TOTAL MONTHLY SALARY AND ANNUAL SALARY OF A NIGERIAN SENATOR###


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
print("The total monthly salary of the senator in naira is ₦ {:,.2f}".format(total_monthly_salary))
print("The total annual salary of the senator in naira is ₦ {:,.2f}".format(total_annual_salary))
print("The total monthly salary of the senator in dollar is $ {:,.2f}".format(total_monthly_salary_usd))
print("The total annual salary of the senator in dollar is $ {:,.2f}".format(total_annual_salary_usd))