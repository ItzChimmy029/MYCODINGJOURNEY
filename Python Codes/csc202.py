#Ask the user to input the pay items using the input functions
employee_id = input("What's the employee's ID ? ")
employee_name = input("What's the employee's name ? ")
basic_salary = int(input("What's the basic salary of the employee ? "))
housing_allowance = int(input("What's the housing allowance of the employee ? "))
transport_allowance = int(input("What's the transport allowance of the employee ? "))
overtime_allowance = int(input("What's the overtime allolwance of the employee ? "))

#We then calculate the Gross Pay of the employee
gross_pay = (basic_salary + housing_allowance + transport_allowance + overtime_allowance)

#We then calculate the Gross Deduction of the employee
personal_income_tax = (0.15 * gross_pay)
pension_contribution = (0.15 * gross_pay)
national_housing_fund = (0.025 * basic_salary)
national_health_insurance_scheme = (0.05 * basic_salary)
gross_deduction = (personal_income_tax + pension_contribution + national_housing_fund + national_health_insurance_scheme)

#We then calculate the Net Pay
net_pay = (gross_pay - gross_deduction)

#We now display thSe results
print(f"The employee's ID is {employee_id}")
print(f"The employee's name is {employee_name}")
print("The basic salary of the employee is ₦ {:,.2f}".format(basic_salary))
print("The housing allowance of the employee is ₦ {:,.2f}".format(housing_allowance))
print("The transport allowance of the employee is ₦ {:,.2f}".format(transport_allowance))
print("The overtime allowance of the employee is ₦ {:,.2f}".format(overtime_allowance))
print("The gross pay of the employee is ₦ {:,.2f}".format(gross_pay))
print("The personal income tax of the employee is ₦ {:,.2f}".format(personal_income_tax))
print("The pension contribution of the employee is ₦ {:,.2f}".format(pension_contribution))
print("The national housing fund of the employee is ₦ {:,.2f}".format(national_housing_fund))
print("The national health insurance scheme of the employee is ₦ {:,.2f}".format(national_health_insurance_scheme))
print("The gross deduction of the employee is ₦ {:,.2f}".format(gross_deduction))
print("The net pay of the employee is ₦ {:,.2f}".format(net_pay))