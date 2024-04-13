def abbrev_name(name):
    words = name.split()
    first_letter = words[0][0]
    second_letter= words[1][0]
    return "{}.{}".format(first_letter, second_letter)
print(abbrev_name("nika gelenidze"))
