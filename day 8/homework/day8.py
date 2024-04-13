list = [2, 4, 6, 2, 4, 7, 2, 9]
while 2 in list:
    list.remove(2)
print(list)

family = ["sofo, age: 38" , "demetre, age: 5", "levani, age: 39"]
full_sentence = "My moms name and age is: {}, My brothers name and age  is: {}, My dad name and age is: {}".format(family[0],family[1],family[2])
print(full_sentence)
family = ["sofo, age: 48" , "demetre, age: 15", "levani, age: 49"]
full_sentence = "My moms name and age after 10 years: {}, My brothers name and age after 10 years: {}, My dad name and ageafter 10 years: {}".format(family[0],family[1],family[2])
print(full_sentence)