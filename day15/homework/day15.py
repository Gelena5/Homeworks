#N1 What is thse funcion used used to display text Python?
print("The text display function in Python is called print")

#N2 In Python, which data type is used to store a whole number?
age = 16
print(type(age))

#N3 Which of the following data types is used to store text in Python?
name = "nika"
print(type(name))

#N4 What is the result of the expression 10 + 5 * 2 in Python?
print(10 + 5 * 2)

#N5 Which of the following is the correct way to assign the value 42 to a variable named answer in Python?
y = 42
print(y)

#N6 What is the process of identifying and fixing errors in a program called?
#x = y - Error
x = "y"
print(x)

#N7 Which is commonly used in Python for naming variables and functions, where words are separated by underscore?
name = "gigi"
print(name)

#N8 What is the primary purpose of adding comments to your Python code?
# Writing a code explanation so that the code is not confusing and helps my partner (or anyone who sees the code) understand the code

#N9 How can you take user input in Python?
name = input("your name: ")
print(name)

#N10 Which of the following is not a built-in data type in Python?

#N11 What function can be used to check the data type of a variable in Python?
last_name = "Gelenidze"
print(type(last_name))

#N12 How can you convert an integer to a string in Python?
age = 45
str_age = str(age)
print(str_age)
print(type(age))
print(type(str_age))

#N13 What is the term for converting one data type into another in Python?
x = 15
y = "nika"
print(x, y)
print(str(x) + y)

#N14 Which operator is used to check if two values are equal in Python?
print(1 == 1)

#N15 What is the result of the logical AND operation between True and False in Python?
print(1 == 1) #True
print(1 == 2) #False

#N16 What will the expression (5 > 3) and (10 < 20) evaluate to in Python?
print((5 > 3) and (10 < 20)) #True

#N17 In Python, what is used to make decisions and execute different code blocks based on conditions?
if 2 > 1:
    print(":)")
else:
    print(":(")

#N18 Which type of loop is used to iterate over a sequence (e.g., a list or string) in Python?
for x in range (1, 10, 2):
    print(x)

#N19 What type of loop is used when you want to repeat a block of code as long as a condition is true?
x = 0
while 2 > 1:
    print(":)")
    x += 1
    if x >= 1:
        break

#N20 What does the range() function in Python return?
x = []
for i in range(1, 10, 2):
    x.append(i)
print(x)

#N21 Which keyword is used to start an "if" statement in Python?
if 1 == 1:
    print(":)")
else:
    print(":(")

#N22 What is the purpose of the "else" statement in Python's "if-else" construct?
if 1 == 2:
    print(":)")
else:
    print(":(")

#N23 Which data structure is used to store an ordered collection of items in Python?
list = [1, 2, 3, 4]
print(list)

#N24 In Python, which index represents the first element of a sequence?
list = [1, 2, 3, 4]
print(list, [2])

#N25 How can you access the third element of a list in Python?
list = [0, 1, 2, 3, 4, ]
print(list[3])

#N26 What does slicing allow you to do with a sequence in Python?
list = [0, 1, 2, 3, 4, ]
print(list[1:3])

#N27 How can you extract a subsequence of a list from index 2 to index 5 (5 must be included) in Python?
list = [0, 1, 2, 3, 4, ]
print(list[2:5])

#N28 What does the "step" value in slicing indicate? 
for x in range (0, 20, 2):
                      #^step
    print(x)

#N29 What is a reusable block of code in Python that performs a specific task called?
def x():
    print(":D")
x()
x()
x()

#N30 In Python, what are the values passed to a function called?
def x(q):
   #  ^ argument
    print(q)
x(q = 10)

#N31 Which string method is used to convert a string to uppercase in Python?
last_name = "Gelenidze"
last_name = last_name.upper()
print(last_name)

#N32 What list method is used to add an element to the end of a list in Python?
names = ["nika", "ladi", "luka", "saba", "dato"]
names.append("ladi")
print(names)

#N33 In Python, which keyword is used to define a new function?
def num(x):
    print(x)
num(x = 10)

#N34 What keyword is used to return a value from a function in Python?
def num_func(x):
    return x
num_func(x = 10)