# 1
def litres(time):
    time = time // 2
    return time

# 2
def paperwork(n, m):
    if n < 0 or m < 0:
        return 0
    return n * m

# 3
def grow(arr):
    result = 1
    for num in arr:
        result *= num
    return result

# 4
def fake_bin(x):
    result = ''.join('0' if int(char) < 5 else '1' for char in x)
    return result

# 5
def count_by(x, n):
    return [x * i for i in range(1, n + 1)]

# 6
def accum(st):
    return '-'.join((char.upper() + char.lower() * index) for index, char in enumerate(st))


# 7
def remove_smallest(numbers):
    if not numbers:
        return []
    else:
        min_index = numbers.index(min(numbers))
        return numbers[:min_index] + numbers[min_index+1:]

# 8
def solution(number):
    if number < 0:
        return 0

    total = 0
    for i in range(3, number):
        if i % 3 == 0 or i % 5 == 0:
            total += i
    return total

# 9
def likes(names):
    num_likes = len(names)

    if num_likes == 0:
        return "no one likes this"
    elif num_likes == 1:
        return f"{names[0]} likes this"
    elif num_likes == 2:
        return f"{names[0]} and {names[1]} like this"
    elif num_likes == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    else:
        return f"{names[0]}, {names[1]} and {num_likes - 2} others like this"


# 10
def is_pangram(st):
    st_lower = st.lower()
    
    letters = set()
    
    for char in st_lower:
        if char.isalpha():
            letters.add(char)
    
    return len(letters) == 26

