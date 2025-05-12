---
title: Estructuras Secuenciales
description: "Apunte sobre las estructuras secuenciales, y su importancia en la programación"
pubDate: 2025-12-5
---

## ¿Que son las estructuras secuenciales?

Las estructuras secuenciales son la forma más básica de programación. En ellas, las instrucciones se ejecutan una tras otra, en orden, desde el principio hasta el final.

## ¿Qué es una estructura secuencial?

Una estructura secuencial es un conjunto de instrucciones que se ejecutan en orden, una después de otra, sin saltos ni repeticiones. Cada línea de código se ejecuta exactamente una vez, y el programa fluye de arriba hacia abajo.

## Características principales

- Las instrucciones se ejecutan en orden lineal
- No hay decisiones ni repeticiones
- Con las mismas entradas, siempre se obtienen las mismas salidas
- El flujo del programa es predecible

## El modelo Entrada-Proceso-Salida

Las estructuras secuenciales típicamente siguen el modelo:

1. **Entrada**: Recibir datos del usuario o fuente externa
2. **Proceso**: Realizar operaciones con esos datos
3. **Salida**: Mostrar los resultados

## Ejemplos en Python

### Ejemplo 1: Cálculo del área de un rectángulo

```python
# Entrada
base = float(input("Ingrese la base del rectángulo: "))
altura = float(input("Ingrese la altura del rectángulo: "))

# Proceso
area = base * altura

# Salida
print(f"El área del rectángulo es: {area}")
```

### Ejemplo 2: Conversión de temperatura

```python
# Entrada
celsius = float(input("Ingrese la temperatura en grados Celsius: "))

# Proceso
fahrenheit = (celsius * 9/5) + 32

# Salida
print(f"{celsius}°C equivalen a {fahrenheit}°F")
```

### Ejemplo 3: Cálculo del promedio

```python
# Entrada
nota1 = float(input("Ingrese la primera nota: "))
nota2 = float(input("Ingrese la segunda nota: "))
nota3 = float(input("Ingrese la tercera nota: "))

# Proceso
promedio = (nota1 + nota2 + nota3) / 3

# Salida
print(f"El promedio es: {promedio:.2f}")
```

### Ejemplo 4: Operaciones matemáticas básicas

```python
# Entrada
num1 = float(input("Ingrese el primer número: "))
num2 = float(input("Ingrese el segundo número: "))

# Proceso
suma = num1 + num2
resta = num1 - num2
multiplicacion = num1 * num2
division = num1 / num2 if num2 != 0 else "No es posible dividir por cero"

# Salida
print(f"Suma: {suma}")
print(f"Resta: {resta}")
print(f"Multiplicación: {multiplicacion}")
print(f"División: {division}")
```

### Ejemplo 5: Cálculo de salario

```python
# Entrada
horas_trabajadas = float(input("Ingrese las horas trabajadas: "))
valor_hora = float(input("Ingrese el valor por hora: "))

# Proceso
salario = horas_trabajadas * valor_hora

# Salida
print(f"El salario es: ${salario:.2f}")
```

### Ejemplo 6: Conversión de monedas

```python
# Entrada
pesos = float(input("Ingrese la cantidad en pesos: "))
tasa_cambio = float(input("Ingrese la tasa de cambio a dólares: "))

# Proceso
dolares = pesos / tasa_cambio

# Salida
print(f"{pesos} pesos equivalen a {dolares:.2f} dólares")
```

## ¿Cuándo usar estructuras secuenciales?

Las estructuras secuenciales son ideales para:

- Cálculos directos y simples
- Conversiones de unidades
- Entrada y salida básica de información
- Operaciones que siempre se realizan en el mismo orden
- Procesamiento básico de datos

## Consejos para escribir buenas estructuras secuenciales

- Usa nombres de variables descriptivos
- Incluye comentarios cuando sea necesario
- Organiza el código en secciones lógicas
- Verifica que los datos de entrada sean válidos
- Presenta los resultados con formato apropiado
