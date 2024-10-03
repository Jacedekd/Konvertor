while True: 
    try:
        inputNumber = float(input("Vvedite desitichnoe chislo "))
        break
    except ValueError:
        print("Error")


integerPart = int(inputNumber)
integerBinaryArray = []

if integerPart == 0:
    integerBinaryArray.append(0)
else: 
    while integerPart > 0:
        integerBinaryArray.insert(0, integerPart % 2)
        integerPart //= 2




fractionalPart = inputNumber - int(inputNumber)
fractionalBinaryArray = []

if fractionalPart != 0:
    for i in range(10):
        fractionalPart *= 2
        fractionalBinaryArray.append(int(fractionalPart))
        fractionalPart -= int(fractionalPart)

print(''.join(map(str, integerBinaryArray)) + "." + ''.join(map(str, fractionalBinaryArray)) if fractionalBinaryArray else ''.join(map(str, integerBinaryArray)))