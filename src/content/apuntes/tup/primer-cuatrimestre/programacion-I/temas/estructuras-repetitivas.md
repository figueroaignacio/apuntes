---
title: Estructuras Repetitivas
description: Las estructuras repetitivas, también conocidas como bucles o ciclos, permiten ejecutar un bloque de código múltiples veces. Python ofrece principalmente dos tipos de bucles, for y while, además de varias construcciones avanzadas para manejar iteraciones de manera eficiente.
pubDate: 2025-12-5
---

## Bucle for

El bucle `for` en Python es utilizado para iterar sobre una secuencia (como listas, tuplas, diccionarios, conjuntos o cadenas) o cualquier objeto iterable.

### Sintaxis básica

```python
for elemento in secuencia:
    # Bloque de código que se ejecutará para cada elemento
```

### Ejemplos

#### Iterar sobre una lista

```python
frutas = ["manzana", "banana", "cereza"]
for fruta in frutas:
    print(fruta)
```

Salida:

```
manzana
banana
cereza
```

#### Iterar sobre un rango

```python
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)
```

#### Iterar con índices usando enumerate

```python
frutas = ["manzana", "banana", "cereza"]
for indice, fruta in enumerate(frutas):
    print(f"Índice {indice}: {fruta}")
```

Salida:

```
Índice 0: manzana
Índice 1: banana
Índice 2: cereza
```

#### Iterar sobre diccionarios

```python
persona = {"nombre": "Ana", "edad": 25, "ciudad": "Madrid"}

# Iterar sobre claves
for clave in persona:
    print(clave)

# Iterar sobre valores
for valor in persona.values():
    print(valor)

# Iterar sobre pares clave-valor
for clave, valor in persona.items():
    print(f"{clave}: {valor}")
```

#### Iterar sobre una cadena

```python
palabra = "Python"
for letra in palabra:
    print(letra)
```

#### Bucles for anidados

```python
matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for fila in matriz:
    for elemento in fila:
        print(elemento, end=" ")
    print()  # Nueva línea después de cada fila
```

Salida:

```
1 2 3
4 5 6
7 8 9
```

## Bucle while

El bucle `while` ejecuta un bloque de código mientras una condición especificada sea verdadera.

### Sintaxis básica

```python
while condición:
    # Bloque de código que se ejecutará mientras la condición sea True
```

### Ejemplos

#### Bucle simple con contador

```python
contador = 0
while contador < 5:
    print(contador)
    contador += 1  # Importante: actualizar la condición para evitar bucles infinitos
```

#### Bucle con entrada del usuario

```python
respuesta = ""
while respuesta.lower() != "salir":
    respuesta = input("Escribe 'salir' para terminar: ")
    print(f"Has escrito: {respuesta}")
```

#### Bucle infinito con break

```python
while True:
    respuesta = input("Escribe 'salir' para terminar: ")
    if respuesta.lower() == "salir":
        break
    print(f"Has escrito: {respuesta}")
```

## Instrucciones de control

Python proporciona instrucciones especiales para controlar el flujo de los bucles.

### break

La instrucción `break` termina la ejecución del bucle más cercano.

```python
for i in range(10):
    if i == 5:
        break  # Sale del bucle cuando i es 5
    print(i)
```

Salida:

```
0
1
2
3
4
```

### continue

La instrucción `continue` salta a la siguiente iteración del bucle.

```python
for i in range(10):
    if i % 2 == 0:
        continue  # Salta los números pares
    print(i)
```

Salida:

```
1
3
5
7
9
```

### else en bucles

En Python, los bucles pueden tener una cláusula `else` que se ejecuta cuando el bucle termina normalmente (sin usar `break`).

```python
for i in range(5):
    print(i)
else:
    print("Bucle completado sin interrupciones")

# Comparar con:
for i in range(5):
    print(i)
    if i == 3:
        break
else:
    print("Este mensaje no se imprimirá porque el bucle fue interrumpido")
```

## Comprensiones de listas

Las comprensiones de listas ofrecen una sintaxis concisa para crear listas basadas en listas existentes u otros iterables.

### Sintaxis básica

```python
nueva_lista = [expresión for elemento in iterable if condición]
```

### Ejemplos

#### Comprensión simple

```python
# Crear una lista con los cuadrados de los números del 0 al 9
cuadrados = [x**2 for x in range(10)]
print(cuadrados)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

#### Con condición

```python
# Cuadrados de números pares solamente
cuadrados_pares = [x**2 for x in range(10) if x % 2 == 0]
print(cuadrados_pares)  # [0, 4, 16, 36, 64]
```

#### Anidada

```python
# Crear pares de coordenadas
coordenadas = [(x, y) for x in range(3) for y in range(2)]
print(coordenadas)  # [(0, 0), (0, 1), (1, 0), (1, 1), (2, 0), (2, 1)]
```

### Comprensiones de diccionarios

```python
# Crear diccionario de número -> cuadrado
dict_cuadrados = {x: x**2 for x in range(5)}
print(dict_cuadrados)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
```

### Comprensiones de conjuntos

```python
# Crear conjunto con las primeras letras
nombres = ["Ana", "Carlos", "Ana", "Beatriz", "Carlos"]
primeras_letras = {nombre[0] for nombre in nombres}
print(primeras_letras)  # {'A', 'C', 'B'}
```

## Funciones de iteración

Python proporciona varias funciones útiles para trabajar con iterables.

### zip()

Combina dos o más iterables elemento por elemento.

```python
nombres = ["Ana", "Carlos", "David"]
edades = [25, 30, 35]
for nombre, edad in zip(nombres, edades):
    print(f"{nombre} tiene {edad} años")
```

### map()

Aplica una función a cada elemento de un iterable.

```python
numeros = [1, 2, 3, 4, 5]
cuadrados = map(lambda x: x**2, numeros)
print(list(cuadrados))  # [1, 4, 9, 16, 25]
```

### filter()

Filtra elementos de un iterable basado en una función.

```python
numeros = [1, 2, 3, 4, 5, 6]
pares = filter(lambda x: x % 2 == 0, numeros)
print(list(pares))  # [2, 4, 6]
```

## Patrones comunes

### Contar ocurrencias

```python
texto = "mississippi"
contador = {}
for letra in texto:
    if letra in contador:
        contador[letra] += 1
    else:
        contador[letra] = 1
print(contador)  # {'m': 1, 'i': 4, 's': 4, 'p': 2}

# Método más eficiente usando defaultdict
from collections import defaultdict
contador = defaultdict(int)
for letra in texto:
    contador[letra] += 1
print(dict(contador))
```

### Acumular resultados

```python
numeros = [1, 2, 3, 4, 5]
suma = 0
for num in numeros:
    suma += num
print(suma)  # 15

# Alternativa con sum()
print(sum(numeros))  # 15
```

### Encontrar máximo/mínimo

```python
numeros = [34, 12, 93, 54, 23]
maximo = numeros[0]
for num in numeros[1:]:
    if num > maximo:
        maximo = num
print(maximo)  # 93

# Alternativa con max()
print(max(numeros))  # 93
```

### Encontrar un elemento

```python
numeros = [34, 12, 93, 54, 23]
buscar = 93
encontrado = False
for num in numeros:
    if num == buscar:
        encontrado = True
        break
print(f"¿Encontrado? {encontrado}")  # ¿Encontrado? True

# Alternativa con in
print(f"¿Encontrado? {buscar in numeros}")  # ¿Encontrado? True
```

## Ejercicios prácticos

### Ejercicio 1: Tabla de multiplicar

Escribe un programa que imprima la tabla de multiplicar del 1 al 10 para un número dado.

```python
def tabla_multiplicar(numero):
    print(f"Tabla de multiplicar del {numero}:")
    for i in range(1, 11):
        print(f"{numero} x {i} = {numero * i}")

tabla_multiplicar(7)
```

### Ejercicio 2: Factorial

Calcula el factorial de un número usando un bucle.

```python
def factorial(n):
    resultado = 1
    for i in range(1, n + 1):
        resultado *= i
    return resultado

print(factorial(5))  # 120
```

### Ejercicio 3: Números de Fibonacci

Genera los primeros n números de la secuencia de Fibonacci.

```python
def fibonacci(n):
    secuencia = []
    a, b = 0, 1
    for _ in range(n):
        secuencia.append(a)
        a, b = b, a + b
    return secuencia

print(fibonacci(10))  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### Ejercicio 4: Contar vocales

Cuenta el número de vocales en una cadena de texto.

```python
def contar_vocales(texto):
    vocales = "aeiouAEIOU"
    contador = 0
    for letra in texto:
        if letra in vocales:
            contador += 1
    return contador

print(contar_vocales("Hola Mundo"))  # 4
```

### Ejercicio 5: Números primos

Verifica si un número es primo.

```python
def es_primo(numero):
    if numero <= 1:
        return False
    if numero <= 3:
        return True
    if numero % 2 == 0 or numero % 3 == 0:
        return False
    i = 5
    while i * i <= numero:
        if numero % i == 0 or numero % (i + 2) == 0:
            return False
        i += 6
    return True

# Imprimir los números primos del 1 al 20
for num in range(1, 21):
    if es_primo(num):
        print(f"{num} es primo")
```

---

## Resumen

Las estructuras repetitivas en Python son herramientas poderosas que permiten automatizar tareas repetitivas y procesar datos de manera eficiente. Los bucles `for` son ideales para iterar sobre secuencias conocidas, mientras que los bucles `while` son más apropiados cuando la condición de terminación no está relacionada con una secuencia o no se conoce de antemano.

Las comprensiones de listas y otras construcciones avanzadas permiten escribir código más conciso y expresivo, haciendo que Python sea especialmente adecuado para procesar datos y realizar operaciones iterativas.

Recuerda siempre evitar bucles infinitos asegurándote de que la condición de terminación eventualmente se evalúe como falsa, y considera usar las funciones integradas de Python para operaciones comunes en lugar de escribir bucles personalizados cuando sea posible.
