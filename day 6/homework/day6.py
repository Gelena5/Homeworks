#ბილეთი ღირს 25 ლარი,
#აგრამ ბავშვებისთვის უფასოა,
#გვყავს 13 ადამიანი, აქედან 10 დიდი და 3 ბავშვი, 
#გამოთვალეთ ჯამში რამდენი ლარი დასჭირდებათ 

ticket = 25
adult = 10
child = 3

print("The price of the ticket is 25 GEL, but it will FREE for children")
print(" ")

while ticket==25:
    print("The total price of sold ticket is", ticket * adult, "GEL")
    if ticket*adult <= 325:
        break

print(" ")
print("Welcome to opera")