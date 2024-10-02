# 1 .assignment write a program in python to use while loop to prompt and #read names of your friends from the standard input devive and write it to a #text file named myfrieds.txt . at least five names should be reada and #written, you may wish to terminate the while loop when the input data is #finished. 


# 2 . open the file created in (1) above and add at least three other names to it using a python program .


# 3 . write aa program in python to read and display the content if file(s) created in (1) and (2) on standard output device .


# to create a function in python , inside the bracket we may have a #parameter at point of definition and arguement when it is called .
#def functionname():

def greeting():
    print("Good morning")

greeting()
greeting()


def sum(a,b):
    y = a+b 
    return(y)
n = sum(7,6)
print(n)


def is_even_number(x):
    if x%2 == 0:
       return(True)
    else:
     return(False)
print(is_even_number(21))

def is_greater(a,b):
    if a>b :
       print(a,"is greater than" ,b)
    elif a==b:
         print(a," is equal to ",b)
    else:
        return(f'{b} is greater than {a}')
print(is_greater(8,8))
print(is_greater(9,5))

# assignment write a code to execute the following program
# def is_prime(x):
    

























