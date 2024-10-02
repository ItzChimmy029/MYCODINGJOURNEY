# to impoert text files
# <var> = open(<filename>,<mode>)
# f = open("myfile.txt","r") 
# r = resd 
# y = f.read()
# close the file : f.close
# to read a portion of the file input the number of characters in bracket #after read
# we use "readline()" to read a line to the end , and the next "readline()" # #statement will read the next line 


f  = open("blah.txt","r")
#(f = file object)(file)(mode)
y = f.read(4)
x = readline()
w = readline()
print(y)
print(x)
print(w)
f.close()


p  = open("learning.txt","r")
for x in p:
    print(x)
p.close

c  = open("blah.txt","a")
c.write("how are you.\n")
c.write("hope you are good ?\n")
c.write("because i am good too!\n")
c.close
# note if you open in an already existing file the files content will be #deleted unkess you open in append mode 

# to futher manipulate a file use "import.os" function

import os
os.remove("blah.txt")
#import os
#os.rmdir("name.format")



''' count number of characters in the file ,
how many are numbers , how many punctuation marks , how many capital letters , how amny lines , how many words.
note spaces and tabs count as characters .
'''