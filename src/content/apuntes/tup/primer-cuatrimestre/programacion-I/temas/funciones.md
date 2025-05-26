---
title: Funciones
description: Una función es un bloque de código reutilizable diseñado para realizar una tarea específica. Es uno de los conceptos fundamentales en programación y representa el principio de modularidad, dividir un programa grande en componentes más pequeños y manejables.
pubDate: 2025-5-26
---

## Nos permiten

- Organizar el código de manera clara y estructurada
- Evitar la repetición de código
- Facilitar el mantenimiento y debugging
- Descomponer problemas complejos en partes más simples

## Sintaxis básica

```python
def nombre_funcion(parametros):
    """Documentación opcional de la función"""
    # Cuerpo de la función
    return valor_retorno  # Opcional
```

### Ejemplo simple:

```python
def saludar():
    print("¡Hola mundo!")

# Llamar la función
saludar()  # Output: ¡Hola mundo!
```

## Parámetros y Argumentos

### Parámetros

Son las variables que se definen en la declaración de la función.

### Argumentos

Son los valores reales que se pasan a la función cuando se llama.

```python
def saludar_persona(nombre):  # 'nombre' es un parámetro
    print(f"¡Hola {nombre}!")

saludar_persona("Ana")  # "Ana" es un argumento
```

### Tipos de parámetros

#### 1. Parámetros posicionales

```python
def sumar(a, b):
    return a + b

resultado = sumar(5, 3)  # a=5, b=3
print(resultado)  # Output: 8
```

#### 2. Parámetros con valores por defecto

```python
def saludar(nombre, saludo="Hola"):
    print(f"{saludo}, {nombre}!")

saludar("Carlos")           # Output: Hola, Carlos!
saludar("María", "Buenos días")  # Output: Buenos días, María!
```

#### 3. Parámetros nombrados (keyword arguments)

```python
def presentar(nombre, edad, ciudad):
    print(f"Soy {nombre}, tengo {edad} años y vivo en {ciudad}")

# Usando argumentos nombrados
presentar(edad=25, ciudad="Madrid", nombre="Luis")
```

#### 4. \*args (argumentos variables posicionales)

```python
def sumar_varios(*numeros):
    total = 0
    for num in numeros:
        total += num
    return total

print(sumar_varios(1, 2, 3, 4, 5))  # Output: 15
```

#### 5. \*\*kwargs (argumentos variables nombrados)

```python
def mostrar_info(**datos):
    for clave, valor in datos.items():
        print(f"{clave}: {valor}")

mostrar_info(nombre="Pedro", edad=30, profesion="Ingeniero")
```

## Valores de retorno

Las funciones pueden devolver valores usando la palabra clave `return`.

```python
def calcular_area_rectangulo(largo, ancho):
    area = largo * ancho
    return area

# Uso de la función
mi_area = calcular_area_rectangulo(5, 3)
print(f"El área es: {mi_area}")  # Output: El área es: 15
```

### Retorno múltiple

```python
def operaciones_basicas(a, b):
    suma = a + b
    resta = a - b
    multiplicacion = a * b
    return suma, resta, multiplicacion

s, r, m = operaciones_basicas(10, 5)
print(f"Suma: {s}, Resta: {r}, Multiplicación: {m}")
```

## Scope (Alcance) de variables

### Variables locales

```python
def mi_funcion():
    variable_local = "Solo existe dentro de la función"
    print(variable_local)

mi_funcion()
# print(variable_local)  # Error: variable no definida fuera de la función
```

### Variables globales

```python
variable_global = "Soy global"

def usar_global():
    print(variable_global)  # Puede acceder a la variable global

def modificar_global():
    global variable_global
    variable_global = "He sido modificada"

usar_global()        # Output: Soy global
modificar_global()
usar_global()        # Output: He sido modificada
```

## Ejemplos prácticos

### 1. Calculadora simple

```python
def calculadora(num1, num2, operacion):
    """Realiza operaciones matemáticas básicas"""
    if operacion == "+":
        return num1 + num2
    elif operacion == "-":
        return num1 - num2
    elif operacion == "*":
        return num1 * num2
    elif operacion == "/":
        if num2 != 0:
            return num1 / num2
        else:
            return "Error: División por cero"
    else:
        return "Operación no válida"

# Uso
print(calculadora(10, 5, "+"))   # Output: 15
print(calculadora(10, 3, "/"))   # Output: 3.333...
```

### 2. Validador de números

```python
def es_par(numero):
    """Determina si un número es par"""
    return numero % 2 == 0

def clasificar_numero(num):
    """Clasifica un número como par/impar y positivo/negativo/cero"""
    if num == 0:
        return "El número es cero"
    elif num > 0:
        tipo = "positivo"
    else:
        tipo = "negativo"

    paridad = "par" if es_par(num) else "impar"
    return f"El número es {tipo} y {paridad}"

# Uso
print(clasificar_numero(8))   # Output: El número es positivo y par
print(clasificar_numero(-7))  # Output: El número es negativo y impar
```

### 3. Procesador de listas

```python
def procesar_numeros(lista_numeros, operacion="suma"):
    """Procesa una lista de números según la operación especificada"""
    if not lista_numeros:
        return 0

    if operacion == "suma":
        return sum(lista_numeros)
    elif operacion == "promedio":
        return sum(lista_numeros) / len(lista_numeros)
    elif operacion == "maximo":
        return max(lista_numeros)
    elif operacion == "minimo":
        return min(lista_numeros)
    else:
        return "Operación no válida"

# Uso
numeros = [1, 5, 3, 9, 2, 8]
print(f"Suma: {procesar_numeros(numeros, 'suma')}")
print(f"Promedio: {procesar_numeros(numeros, 'promedio')}")
print(f"Máximo: {procesar_numeros(numeros, 'maximo')}")
```

## Funciones Lambda (anónimas)

Las funciones lambda son funciones pequeñas y anónimas que se pueden definir en una sola línea.

```python
# Función normal
def cuadrado(x):
    return x ** 2

# Función lambda equivalente
cuadrado_lambda = lambda x: x ** 2

print(cuadrado(5))        # Output: 25
print(cuadrado_lambda(5)) # Output: 25

# Uso común con map(), filter(), sorted()
numeros = [1, 2, 3, 4, 5]
cuadrados = list(map(lambda x: x**2, numeros))
print(cuadrados)  # Output: [1, 4, 9, 16, 25]
```

## Documentación de funciones (Docstrings)

```python
def calcular_imc(peso, altura):
    """
    Calcula el Índice de Masa Corporal (IMC).

    Args:
        peso (float): Peso en kilogramos
        altura (float): Altura en metros

    Returns:
        float: El IMC calculado

    Example:
        >>> calcular_imc(70, 1.75)
        22.86
    """
    return peso / (altura ** 2)

# Acceder a la documentación
print(calcular_imc.__doc__)
help(calcular_imc)
```

## Buenas prácticas

1. **Nombres descriptivos**: Usa nombres que describan claramente qué hace la función
2. **Una tarea por función**: Cada función debe tener una responsabilidad específica
3. **Documentación**: Incluye docstrings para explicar el propósito de la función
4. **Parámetros con valores por defecto**: Úsalos cuando sea apropiado para mayor flexibilidad
5. **Manejo de errores**: Considera casos especiales y maneja errores apropiadamente

```python
def dividir_seguro(dividendo, divisor):
    """División segura que maneja la división por cero"""
    try:
        if divisor == 0:
            raise ValueError("El divisor no puede ser cero")
        return dividendo / divisor
    except ValueError as e:
        print(f"Error: {e}")
        return None
```
