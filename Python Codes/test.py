# Function to input a 4 by 4 matrix from the user
def input_matrix():
    matrix = []
    for i in range(4):
        row = []
        row_input = input(f"Enter row {i + 1} of the matrix (4 numbers separated by spaces): ").split()
        while len(row_input) != 4:
            print("Invalid input. Please enter 4 numbers separated by spaces.")
            row_input = input(f"Enter row {i + 1} of the matrix (4 numbers separated by spaces): ").split()
        for j in row_input:
            row.append(int(j))
        matrix.append(row)
    return matrix

# Input the matrixes and add them to a list
matrixes = []
while True:
    matrixes.append(input_matrix())
    cont = input("Do you want to input another matrix? (yes/no) ").lower()
    if cont != 'yes':
        break

# Initialize the result matrix with all zeros
result = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

# Implement the matrix addition
for i in range(4):
    for j in range(4):
        for matrix in matrixes:
            result[i][j] += matrix[i][j]

# Print the result matrix
for row in result:
    print(row)