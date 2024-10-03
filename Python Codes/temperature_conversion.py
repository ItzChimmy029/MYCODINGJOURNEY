################################################
#NAME : MBAEGBU CHIMDALU JUSTICE ###############
#REG NO : 2022/20931COS.########################
#COURSE CODE : CSC 202.#########################
#DATE : 03/07/2024.#############################
#PURPOSE OF CODE : TEMPERATURE CONVERSION.######
################################################

def temp_converter(n, x):
    if x == 'C':
        # Convert from Fahrenheit to Celsius
        return (n - 32) * 5 / 9
    elif x == 'F':
        # Convert from Celsius to Fahrenheit
        return (n * 9 / 5) + 32
    else:
        return "Invalid input"

def main():
    # Calling the temp_converter function with the given arguments
    print(f'The equivalence of 0°C to °F is {temp_converter(0, "F")}°F')  # Should convert 0°C to °F
    print(f'The equivalence of 212°F to °C is {temp_converter(212, "C")}°C')  # Should convert 212°F to °C

# Call the main function
main()
