################################################
#NAME : OSONDU BETHEL .C.###############
#REG NO : 2022/20954COS.########################
#COURSE CODE : CSC 202.#########################
#DATE : 08/06/2024.#############################
#PURPOSE OF CODE : TO IMPORT A MODULE FROM BASIC MATH TO MY MODULE###

A = int(input("Input your value of A : "))
B = int(input("Input your value of B : "))


from basic_maths import sum
print(f'The sum of A and B is {sum(A,B)}')


from basic_maths import diff
print(f'The difference of A and B is {diff(A,B)}')


from basic_maths import multiply
print(f'The product of A and B is {multiply(A,B)}')