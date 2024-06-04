# 1. შექმენით ორი ცვლადი სადაც შეინახავთ int ტიპის მნიშვნელობებს და print() ის გამოყენებით გააკეთეთ ყველა მათემატიკური ოპერაცია: გამრავლება, გაყოფა, მიმატება და გამოკლება.

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiplay(x, y):
    return x * y

def divide(x, y):
    return x * y

num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

addition = add(num1, num2)
subtraction = subtract(num1, num2)
multiplaytion = multiplay(num1, num2)
dividetion = divide(num1, num2)

print("addition =", addition)
print("subtraction =", subtraction)
print("multiplaytion =", multiplaytion)
print("dividetion =", dividetion)



# 2. შექმენით ცვლადები 10 წიგნისთვის ( სახელი ცალკე, ფასი ცალკე, 5 წიგნს გაუკეთეთ 10%იანი ფასდაკლება, 5 წიგნს გაუკეთეთ 20%იანი ფასდაკლება)

book1 = "Book 1"
book2 = "Book 2"
book3 = "Book 3"
book4 = "Book 4"
book5 = "Book 5"
book6 = "Book 6"
book7 = "Book 7"
book8 = "Book 8"
book9 = "Book 9"
book10 = "Book 10"

price1 = 20.99
price2 = 15.49
price3 = 25.99
price4 = 18.75
price5 = 22.50
price6 = 19.99
price7 = 17.25
price8 = 24.50
price9 = 21.75
price10 = 27.99

discounted_price1 = price1 * 0.9
discounted_price2 = price2 * 0.9
discounted_price3 = price3 * 0.9
discounted_price4 = price4 * 0.9
discounted_price5 = price5 * 0.9

discounted_price6 = price6 * 0.8
discounted_price7 = price7 * 0.8
discounted_price8 = price8 * 0.8
discounted_price9 = price9 * 0.8
discounted_price10 = price10 * 0.8

print(book1 + ":", discounted_price1, "GEL")
print(book2 + ":", discounted_price2, "GEL")
print(book3 + ":", discounted_price3, "GEL")
print(book4 + ":", discounted_price4, "GEL")
print(book5 + ":", discounted_price5, "GEL")
print(book6 + ":", discounted_price6, "GEL")
print(book7 + ":", discounted_price7, "GEL")
print(book8 + ":", discounted_price8, "GEL")
print(book9 + ":", discounted_price9, "GEL")
print(book10 + ":", discounted_price10, "GEL")




# 3. შემოიტანეთ თქვენი ოჯახის წევრების ასაკი და დაუპრინტეთ თუ რამდენი წლისები იქნებიან 25 წლის შემდეგ.

mom = int(input("Enter your mom age: "))
dad = int(input("Enter your dad age: "))
brother_or_sister = int(input("Enter your brothet/sister age: "))

print("Mom will be", mom + 25, " years old")
print("Dad will be", dad + 25, "years old")
print("brother or sister will be", brother_or_sister + 25, "years old")



# 4. მომხმარებელს შემოატანინეთ თავისი სახელი, გვარი, ასაკი, საცხოვრებელი ადგილი, პროფესია, ჰობი და კიდევ დამატებითი ინფორმაცია, შემდეგ ამ შემოტანილი ინფორმაციით ააწყვეთ ერთი დიდი წინადადება და დაბეჭდეთ ტერმინალში.

name = input("Enter your name: ")
surname = input("Enter your surname: ")
age = input("Enter your age: ")

print("Hello", name, surname + ",", "your age is", age + ",", "right?", ":)")

# 5. მომხმარებელს შემოატანინეთ რიცხვი და დაბეჭდეთ ლუწია თუ კენტი.

num = int(input("Enter number: "))

if num / 2:
    print("ლუწია")
else:
    print("კენტია")