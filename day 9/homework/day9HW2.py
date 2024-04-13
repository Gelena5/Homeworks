def triangle(left_side, right_side, bottom_side):
    if left_side + right_side > bottom_side and left_side + bottom_side > left_side and right_side + bottom_side > right_side:
        print("ასეთი სამკუთხედი იარსებებს")
    else:
        print("ასეთი სამკუთხედი ვერ იარსებებს")


triangle(right_side = float(input("First side: ")), left_side = float(input("Second side: ")), bottom_side = float(input("Third side: ")))
