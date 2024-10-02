# TO FIND THE SUM OF NUMBERS FOR A NUMBER OF TIMES
total_sum = 0
for i in range(5):
    number = float(input("Enter any number : "))
    total_sum += number
print(f'The total sum is {total_sum}')


for num in range(1, 101):
    output = ""
    if num % 3 == 0:
        output += "Fizz"
    if num % 5 == 0:
        output += "Buzz"
    print(output or num)  # Prints output if not empty, otherwise prints the number


# CHESSBOARD
size = 8
board = []  # Create an empty list to store the rows

for row in range(size):
    board_row = []  # Create an empty list for the current row
    for col in range(size):
        if (row + col) % 2 == 0:
            board_row.append(" ")  # Add a space for even sums
        else:
            board_row.append("#")  # Add a hash for odd sums
    board.append("".join(board_row))  # Join the row list and add to the board

# Print the board
for row in board:
    print(row)
    
    
    
# TRIANGLE
pattern = ""  # Initialize an empty string for the pattern
for i in range(1, 8):  # Loop from 1 to 7
    pattern += "#"  # Add one "#" each time
    print(pattern)  # Print the current pattern