# დავალება 1
def smash(words):
    return ' '.join(words)

words = ["Hello", "world", "this", "is", "great"]
sentence = smash(words)
print(sentence)

# დავალება 2
def difference_in_ages(ages):
    if not ages:
        return (None, None, None)

    youngest = min(ages)
    oldest = max(ages)
    difference = oldest - youngest

    return (youngest, oldest, difference)

ages = [5, 12, 43, 2, 67, 23, 0]
result = difference_in_ages(ages)
print(result)

# დავალება 3
def get_sum(a, b):
    if a == b:
        return a

    if a > b:
        a, b = b, a

    n = b - a + 1
    sum_ab = n * (a + b) // 2

    return sum_ab

result = get_sum(1, 5)
print(result)

result = get_sum(5, 1)
print(result)

result = get_sum(-2, 2)
print(result)

result = get_sum(5, 5)
print(result)

# დავალება 4
def best_friend(s, first, second):
    length = len(s)
    for i in range(length - 1):
        if s[i] == first:
            if s[i + 1] != second:
                return False
    if s and s[-1] == first:
        return False
    return True

print(best_friend("he headed to the store", "h", "e"))
print(best_friend("abcdee", "e", "e"))
print(best_friend("i found an ounce with my hound", "o", "u"))
print(best_friend("we found your dynamite", "d", "y"))
print(best_friend("vvv", "v", "v"))
print(best_friend("vv", "v", "v"))
print(best_friend("v", "v", "v"))
print(best_friend("", "v", "v"))

# დავალება 5


# დავალება 6
def find_short(s):
    words = s.split()
    shortest_length = float('inf')
    for word in words:
        word_length = len(word)
        if word_length < shortest_length:
            shortest_length = word_length
    return shortest_length

# დავალება 7
def find(s):
    n = len(s)
    for i in range(1, n + 1):
        first_number_str = s[:i]
        first_number = int(first_number_str)
        sequence = [first_number]
        current_number = first_number
        while len(''.join(map(str, sequence))) < n:
            current_number += 1
            sequence.append(current_number)
        if ''.join(map(str, sequence)) == s:
            return first_number
    return -1

print(find("123"))
print(find("91011"))
print(find("17181920"))
print(find("9899100"))
print(find("91"))
print(find("121122123"))
print(find("1235"))
print(find("101"))
