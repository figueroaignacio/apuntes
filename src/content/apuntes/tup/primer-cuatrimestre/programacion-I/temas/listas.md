---
title: Listas
description: Las listas son estructuras de datos fundamentales en Python que permiten almacenar múltiples elementos de forma ordenada. A diferencia de los arrays tradicionales en otros lenguajes, las listas en Python ofrecen mayor flexibilidad ya que pueden contener elementos de diferentes tipos.
pubDate: 2025-5-12
---

## Características principales

- **Colección ordenada**: Cada elemento tiene una posición específica
- **Acceso por índices**: Se accede a los elementos mediante índices que comienzan desde 0
- **Mutabilidad**: Se pueden modificar después de ser creadas
- **Elementos heterogéneos**: Pueden contener diferentes tipos de datos (aunque es recomendable mantener homogeneidad para ciertas operaciones)
- **Dinámicas**: Pueden cambiar de tamaño durante la ejecución del programa

## Componentes fundamentales

### Índice

El índice representa la posición de cada elemento dentro de la lista. En Python, como en la mayoría de lenguajes de programación, los índices comienzan desde 0.

```python
dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]
# Índice 0: "Lunes"
# Índice 1: "Martes"
# Índice 2: "Miércoles"
# Índice 3: "Jueves"
# Índice 4: "Viernes"
```

### Valor

El valor es el dato almacenado en una posición específica de la lista.

## Creación de listas en Python

### Lista vacía

```python
# Método 1
mi_lista = []

# Método 2
mi_lista = list()
```

### Lista con valores iniciales

```python
# Lista de strings
dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]

# Lista de números
numeros = [1, 2, 3, 4, 5]

# Lista con diferentes tipos de datos
mixta = [1, "Hola", 3.14, True]
```

## Operaciones básicas con listas

### Acceder a elementos

```python
dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]

# Acceder al primer elemento (índice 0)
primer_dia = dias[0]  # "Lunes"

# Acceder al tercer elemento (índice 2)
tercer_dia = dias[2]  # "Miércoles"

# Índices negativos (cuentan desde el final)
ultimo_dia = dias[-1]  # "Viernes"
```

### Modificar elementos

```python
numeros = [10, 20, 30, 40, 50]

# Cambiar el valor del tercer elemento
numeros[2] = 35  # La lista ahora es [10, 20, 35, 40, 50]
```

### Agregar elementos

```python
frutas = ["manzana", "banana", "cereza"]

# Agregar un elemento al final
frutas.append("naranja")  # ["manzana", "banana", "cereza", "naranja"]

# Insertar en una posición específica
frutas.insert(1, "pera")  # ["manzana", "pera", "banana", "cereza", "naranja"]

# Extender la lista con otra lista
frutas.extend(["uva", "melón"])  # ["manzana", "pera", "banana", "cereza", "naranja", "uva", "melón"]
```

### Eliminar elementos

```python
colores = ["rojo", "verde", "azul", "amarillo"]

# Eliminar por valor
colores.remove("verde")  # ["rojo", "azul", "amarillo"]

# Eliminar por índice
del colores[1]  # ["rojo", "amarillo"]

# Extraer y eliminar el último elemento
ultimo = colores.pop()  # ultimo = "amarillo", colores = ["rojo"]

# Extraer y eliminar por índice
elemento = colores.pop(0)  # elemento = "rojo", colores = []
```

### Longitud de una lista

```python
animales = ["perro", "gato", "conejo", "tortuga"]
cantidad = len(animales)  # cantidad = 4
```

## Métodos importantes de las listas

| Método             | Descripción                                                             |
| ------------------ | ----------------------------------------------------------------------- |
| `append(x)`        | Agrega un elemento al final de la lista                                 |
| `extend(iterable)` | Extiende la lista agregando elementos de un iterable                    |
| `insert(i, x)`     | Inserta un elemento en una posición determinada                         |
| `remove(x)`        | Elimina la primera aparición del valor especificado                     |
| `pop([i])`         | Elimina y devuelve el elemento en la posición i (por defecto el último) |
| `clear()`          | Elimina todos los elementos de la lista                                 |
| `index(x)`         | Devuelve el índice de la primera aparición del valor                    |
| `count(x)`         | Cuenta cuántas veces aparece un valor en la lista                       |
| `sort()`           | Ordena los elementos de la lista                                        |
| `reverse()`        | Invierte el orden de los elementos                                      |
| `copy()`           | Devuelve una copia superficial de la lista                              |

## Recorrer listas

### Con un bucle for

```python
frutas = ["manzana", "banana", "cereza"]

# Recorrer elementos
for fruta in frutas:
    print(fruta)

# Recorrer con índices
for i in range(len(frutas)):
    print(f"Índice {i}: {frutas[i]}")
```

### Con comprensión de listas

```python
numeros = [1, 2, 3, 4, 5]

# Crear una nueva lista con el cuadrado de cada número
cuadrados = [n**2 for n in numeros]  # [1, 4, 9, 16, 25]

# Con condición
pares = [n for n in numeros if n % 2 == 0]  # [2, 4]
```

## Slicing (rebanado) de listas

```python
letras = ["a", "b", "c", "d", "e", "f", "g"]

# Obtener un subconjunto de la lista
subset1 = letras[2:5]  # ["c", "d", "e"]

# Desde el inicio hasta un índice
subset2 = letras[:3]  # ["a", "b", "c"]

# Desde un índice hasta el final
subset3 = letras[4:]  # ["e", "f", "g"]

# Con saltos
subset4 = letras[1:6:2]  # ["b", "d", "f"]

# Invertir una lista
invertida = letras[::-1]  # ["g", "f", "e", "d", "c", "b", "a"]
```

## Ventajas de usar listas en Python

1. **Versatilidad**: Pueden almacenar cualquier tipo de dato
2. **Facilidad de uso**: Sintaxis sencilla y muchos métodos integrados
3. **Mutabilidad**: Permiten añadir, eliminar y modificar elementos
4. **Indexación**: Acceso rápido a elementos mediante índices
5. **Iterabilidad**: Fáciles de recorrer y procesar

## Ejemplos prácticos

### Cálculo de promedio

```python
calificaciones = [85, 90, 78, 92, 88]
promedio = sum(calificaciones) / len(calificaciones)  # 86.6
```

### Encontrar valores máximos y mínimos

```python
temperaturas = [22, 19, 24, 21, 18, 25, 23]
maxima = max(temperaturas)  # 25
minima = min(temperaturas)  # 18
```

### Filtrado de datos

```python
edades = [15, 22, 18, 25, 30, 17, 21]
mayores_edad = [edad for edad in edades if edad >= 18]  # [22, 18, 25, 30, 21]
```

### Ordenamiento

```python
nombres = ["Carlos", "Ana", "Diana", "Bernardo"]
nombres_ordenados = sorted(nombres)  # ["Ana", "Bernardo", "Carlos", "Diana"]
```

## Conclusión

Las listas en Python son estructuras de datos extremadamente versátiles y potentes que forman la base de muchas aplicaciones. Su flexibilidad y facilidad de uso las convierten en una herramienta esencial para cualquier programador en Python, desde principiantes hasta expertos.
