---
title: "Estructuras Condicionales"
description: "Apunte sobre las estructuras condicionales, para que funcionan y sus conceptos básicos."
pubDate: 2025-12-5
---

## ¿Que son las estructuras condicionales?

Las estructuras condicionales permiten que nuestros programas tomen decisiones y ejecuten diferentes bloques de código dependiendo de si ciertas condiciones son verdaderas o falsas.

## ¿Qué son las estructuras condicionales?

Son construcciones que permiten alterar el flujo de ejecución de un programa según se cumpla o no una condición. Básicamente, permiten que el programa "tome decisiones".

## Instrucción if

La instrucción `if` es la estructura condicional más básica. Ejecuta un bloque de código solo si la condición especificada es verdadera.

```python
# Ejemplo básico de if
edad = int(input("Ingrese su edad: "))

if edad >= 18:
    print("Eres mayor de edad")
```

## Instrucción if-else

La estructura `if-else` permite ejecutar un bloque de código cuando la condición es verdadera y otro bloque cuando es falsa.

```python
# Ejemplo de if-else
numero = int(input("Ingrese un número: "))

if numero % 2 == 0:
    print("El número es par")
else:
    print("El número es impar")
```

## Instrucción if-elif-else

La estructura `if-elif-else` permite evaluar múltiples condiciones en secuencia.

```python
# Ejemplo de if-elif-else
calificacion = float(input("Ingrese su calificación (0-10): "))

if calificacion >= 9:
    print("Excelente")
elif calificacion >= 7:
    print("Bueno")
elif calificacion >= 6:
    print("Aprobado")
else:
    print("Reprobado")
```

## Condiciones anidadas

Es posible colocar estructuras condicionales dentro de otras estructuras condicionales.

```python
# Ejemplo de condiciones anidadas
edad = int(input("Ingrese su edad: "))
tiene_licencia = input("¿Tiene licencia de conducir? (s/n): ").lower() == 's'

if edad >= 18:
    if tiene_licencia:
        print("Puede conducir legalmente")
    else:
        print("Es mayor de edad pero necesita obtener una licencia")
else:
    print("No puede conducir, es menor de edad")
```

## Operadores de comparación

Los operadores de comparación se utilizan para formar condiciones:

- `==`: Igual a
- `!=`: Diferente de
- `>`: Mayor que
- `<`: Menor que
- `>=`: Mayor o igual que
- `<=`: Menor o igual que

```python
# Ejemplo con operadores de comparación
precio = float(input("Ingrese el precio del producto: "))

if precio > 1000:
    descuento = precio * 0.10
    precio_final = precio - descuento
    print(f"Se aplicó un descuento de ${descuento:.2f}")
    print(f"Precio final: ${precio_final:.2f}")
else:
    print(f"No hay descuento disponible. Precio final: ${precio:.2f}")
```

## Operadores lógicos

Los operadores lógicos permiten combinar múltiples condiciones:

- `and`: Verdadero si ambas condiciones son verdaderas
- `or`: Verdadero si al menos una condición es verdadera
- `not`: Invierte el valor de la condición

```python
# Ejemplo con operadores lógicos
edad = int(input("Ingrese su edad: "))
tiene_carnet = input("¿Tiene carnet de estudiante? (s/n): ").lower() == 's'

if edad <= 18 or tiene_carnet:
    print("Tiene descuento en la entrada")
else:
    print("Debe pagar el precio completo")
```

## Operador ternario

Python ofrece una forma concisa de escribir condiciones simples en una sola línea.

```python
# Ejemplo de operador ternario
edad = int(input("Ingrese su edad: "))
mensaje = "Mayor de edad" if edad >= 18 else "Menor de edad"
print(mensaje)
```

## Ejemplos prácticos

### Ejemplo 1: Verificar si un año es bisiesto

```python
# Un año es bisiesto si es divisible por 4,
# excepto si es divisible por 100 pero no por 400
año = int(input("Ingrese un año: "))

if (año % 4 == 0 and año % 100 != 0) or (año % 400 == 0):
    print(f"{año} es un año bisiesto")
else:
    print(f"{año} no es un año bisiesto")
```

### Ejemplo 2: Calculadora simple

```python
num1 = float(input("Ingrese el primer número: "))
num2 = float(input("Ingrese el segundo número: "))
operacion = input("Ingrese la operación (+, -, *, /): ")

if operacion == '+':
    resultado = num1 + num2
    print(f"Suma: {resultado}")
elif operacion == '-':
    resultado = num1 - num2
    print(f"Resta: {resultado}")
elif operacion == '*':
    resultado = num1 * num2
    print(f"Multiplicación: {resultado}")
elif operacion == '/':
    if num2 != 0:
        resultado = num1 / num2
        print(f"División: {resultado}")
    else:
        print("Error: No se puede dividir por cero")
else:
    print("Operación no válida")
```

### Ejemplo 3: Categoría de IMC

```python
peso = float(input("Ingrese su peso en kg: "))
altura = float(input("Ingrese su altura en metros: "))

imc = peso / (altura ** 2)

if imc < 18.5:
    categoria = "Bajo peso"
elif imc < 25:
    categoria = "Peso normal"
elif imc < 30:
    categoria = "Sobrepeso"
else:
    categoria = "Obesidad"

print(f"Su IMC es {imc:.2f}")
print(f"Categoría: {categoria}")
```

### Ejemplo 4: Validación de entrada

```python
usuario = input("Ingrese su nombre de usuario: ")
contraseña = input("Ingrese su contraseña: ")

if not usuario:
    print("Error: El nombre de usuario no puede estar vacío")
elif len(contraseña) < 8:
    print("Error: La contraseña debe tener al menos 8 caracteres")
else:
    print("Datos válidos. Procesando registro...")
```

### Ejemplo 5: Descuento por compra

```python
monto_compra = float(input("Ingrese el monto de la compra: $"))

if monto_compra < 100:
    descuento = 0
elif monto_compra < 500:
    descuento = 0.05  # 5%
elif monto_compra < 1000:
    descuento = 0.10  # 10%
else:
    descuento = 0.15  # 15%

monto_descuento = monto_compra * descuento
total_pagar = monto_compra - monto_descuento

print(f"Monto original: ${monto_compra:.2f}")
print(f"Descuento aplicado: {descuento*100}% (${monto_descuento:.2f})")
print(f"Total a pagar: ${total_pagar:.2f}")
```

## Consejos para usar estructuras condicionales

- Mantén tus condiciones simples y legibles
- Usa paréntesis para agrupar condiciones complejas
- Recuerda que Python utiliza la indentación para definir bloques de código
- Prueba tus condiciones con diferentes valores para verificar su comportamiento
- Considera todas las posibilidades, incluidos los casos límite
