---
title: Sistema Binario
description: El sistema binario es un sistema de numeración que utiliza solo dos dígitos, 0 y 1. Es la base del funcionamiento de todos los dispositivos electrónicos y computadoras, porque estos solo pueden entender dos estados encendido (1) y apagado (0).
pubDate: 2025-12-5
---

## 1. Sistemas Analógicos y Digitales

**Sistemas analógicos:**

- Procesan señales continuas que pueden tomar infinitos valores dentro de un rango
- La información se representa mediante magnitudes físicas que varían de forma continua
- Ejemplos: voltaje, presión, temperatura, desplazamiento

**Sistemas digitales:**

- Procesan señales discretas que solo pueden tomar un número finito de valores
- La información se representa mediante dígitos, usualmente binarios (0 y 1)
- Las señales se encuentran cuantificadas en tiempo y amplitud

**Diferencias fundamentales:**

- Los sistemas analógicos operan con variables continuas; los digitales con variables discretas
- Los sistemas digitales son más precisos, flexibles y menos susceptibles al ruido
- Los sistemas analógicos son más susceptibles a degradación y errores acumulativos

### Ejemplos

**Sistemas analógicos:**

- Reloj de manecillas (movimiento continuo)
- Termómetro de mercurio
- Micrófono tradicional
- Amplificador de audio analógico
- Instrumentos musicales acústicos

**Sistemas digitales:**

- Reloj digital (cambios discretos)
- Termómetro digital
- Computadoras y dispositivos electrónicos
- Reproductor de CD/DVD
- Sistemas de transmisión digital

**Sistemas híbridos:**

- Muchos sistemas modernos combinan elementos analógicos y digitales
- Ejemplo: cámaras digitales (sensor analógico + procesamiento digital)
- Conversor Analógico-Digital (ADC): transforma señales analógicas en digitales
- Conversor Digital-Analógico (DAC): transforma señales digitales en analógicas

## 2. Sistemas Numéricos - Conversión de una Base a Otra

### Sistema Decimal, Binario, Octal y Hexadecimal

**Sistema decimal (base 10):**

- Utiliza 10 símbolos: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
- Es el sistema de numeración cotidiano
- Cada posición representa una potencia de 10
- Ejemplo: 425₁₀ = 4×10² + 2×10¹ + 5×10⁰ = 400 + 20 + 5

**Sistema binario (base 2):**

- Utiliza 2 símbolos: 0, 1
- Es el sistema usado por computadoras y dispositivos digitales
- Cada posición representa una potencia de 2
- Ejemplo: 1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11₁₀

**Sistema octal (base 8):**

- Utiliza 8 símbolos: 0, 1, 2, 3, 4, 5, 6, 7
- Cada posición representa una potencia de 8
- Ejemplo: 52₈ = 5×8¹ + 2×8⁰ = 40 + 2 = 42₁₀

**Sistema hexadecimal (base 16):**

- Utiliza 16 símbolos: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F donde A=10, B=11, C=12, D=13, E=14, F=15
- Cada posición representa una potencia de 16
- Ejemplo: 2F₁₆ = 2×16¹ + 15×16⁰ = 32 + 15 = 47₁₀

### Pasaje de Sistema Decimal a Binario y de Binario a Decimal

**Decimal a binario:**

- Método de divisiones sucesivas:
  1. Dividir el número decimal entre 2
  2. Anotar el resto (0 o 1)
  3. Dividir el cociente entre 2
  4. Repetir hasta que el cociente sea 0
  5. Leer los restos de abajo hacia arriba

Ejemplo: Convertir 25₁₀ a binario

```
25 ÷ 2 = 12 resto 1
12 ÷ 2 = 6  resto 0
6  ÷ 2 = 3  resto 0
3  ÷ 2 = 1  resto 1
1  ÷ 2 = 0  resto 1
```

Resultado: 25₁₀ = 11001₂

**Binario a decimal:**

- Multiplicar cada dígito por su valor posicional (potencia de 2) y sumar

Ejemplo: Convertir 10110₂ a decimal

```
1×2⁴ + 0×2³ + 1×2² + 1×2¹ + 0×2⁰ = 16 + 0 + 4 + 2 + 0 = 22₁₀
```

### Pasaje de Sistema Octal a Decimal y Viceversa

**Octal a decimal:**

- Multiplicar cada dígito por su valor posicional (potencia de 8) y sumar

Ejemplo: Convertir 347₈ a decimal

```
3×8² + 4×8¹ + 7×8⁰ = 3×64 + 4×8 + 7×1 = 192 + 32 + 7 = 231₁₀
```

**Decimal a octal:**

- Método de divisiones sucesivas por 8:
  1. Dividir el número decimal entre 8
  2. Anotar el resto (0-7)
  3. Dividir el cociente entre 8
  4. Repetir hasta que el cociente sea 0
  5. Leer los restos de abajo hacia arriba

Ejemplo: Convertir 78₁₀ a octal

```
78 ÷ 8 = 9 resto 6
9  ÷ 8 = 1 resto 1
1  ÷ 8 = 0 resto 1
```

Resultado: 78₁₀ = 116₈

### Pasaje de Sistema Hexadecimal a Decimal y Viceversa

**Hexadecimal a decimal:**

- Multiplicar cada dígito por su valor posicional (potencia de 16) y sumar

Ejemplo: Convertir 1A3₁₆ a decimal

```
1×16² + 10×16¹ + 3×16⁰ = 1×256 + 10×16 + 3×1 = 256 + 160 + 3 = 419₁₀
```

**Decimal a hexadecimal:**

- Método de divisiones sucesivas por 16:
  1. Dividir el número decimal entre 16
  2. Anotar el resto (0-15, usando A-F para 10-15)
  3. Dividir el cociente entre 16
  4. Repetir hasta que el cociente sea 0
  5. Leer los restos de abajo hacia arriba

Ejemplo: Convertir 423₁₀ a hexadecimal

```
423 ÷ 16 = 26 resto 7
26  ÷ 16 = 1  resto 10 (A)
1   ÷ 16 = 0  resto 1
```

Resultado: 423₁₀ = 1A7₁₆

## 3. Conversión de Sistema Binario hacia Otras Dos Bases

### Pasaje de Sistema Binario a Octal

- Agrupar los bits de derecha a izquierda en grupos de 3
- Convertir cada grupo de 3 bits a su equivalente octal (0-7)

Ejemplo: Convertir 10110111₂ a octal

```
Agrupando: 010 110 111
Conversión: 2   6   7
```

Resultado: 10110111₂ = 267₈

Tabla de equivalencias:

```
000 = 0    100 = 4
001 = 1    101 = 5
010 = 2    110 = 6
011 = 3    111 = 7
```

### Pasaje de Sistema Binario a Hexadecimal

- Agrupar los bits de derecha a izquierda en grupos de 4
- Convertir cada grupo de 4 bits a su equivalente hexadecimal (0-F)

Ejemplo: Convertir 10110111₂ a hexadecimal

```
Agrupando: 0101 1011 (añadimos ceros a la izquierda si es necesario)
Conversión: 5    B
```

Resultado: 10110111₂ = 5B₁₆

Tabla de equivalencias:

```
0000 = 0    1000 = 8
0001 = 1    1001 = 9
0010 = 2    1010 = A
0011 = 3    1011 = B
0100 = 4    1100 = C
0101 = 5    1101 = D
0110 = 6    1110 = E
0111 = 7    1111 = F
```

## 4. Operaciones Básicas con Números Binarios

### Suma de Números Binarios

Las reglas para la suma binaria son:

- 0 + 0 = 0
- 0 + 1 = 1
- 1 + 0 = 1
- 1 + 1 = 0 con acarreo de 1

Ejemplo: Sumar 1011₂ + 101₂

```
  1011
+  101
------
 10000
```

Resultado: 1011₂ + 101₂ = 10000₂ = 16₁₀

Proceso detallado:

1. 1 + 1 = 0 con acarreo de 1
2. 1 + 0 + 1 (acarreo) = 0 con acarreo de 1
3. 0 + 1 + 1 (acarreo) = 0 con acarreo de 1
4. 1 + 0 + 1 (acarreo) = 0 con acarreo de 1
5. El último acarreo forma el bit más significativo: 1

### Resta de Números Binarios

Las reglas para la resta binaria directa son:

- 0 - 0 = 0
- 1 - 0 = 1
- 1 - 1 = 0
- 0 - 1 = 1 con préstamo de 1

Ejemplo: Restar 1011₂ - 101₂

```
  1011
-  101
------
   110
```

Resultado: 1011₂ - 101₂ = 110₂ = 6₁₀

Proceso detallado:

1. 1 - 1 = 0
2. 1 - 0 = 1
3. 0 - 1 requiere préstamo: 10 - 1 = 1, y se pide préstamo al bit siguiente
4. 1 - 1 (después del préstamo anterior) = 0

### Multiplicación de Números Binarios

La multiplicación binaria sigue los mismos principios que la decimal:

- 0 × 0 = 0
- 0 × 1 = 0
- 1 × 0 = 0
- 1 × 1 = 1

Ejemplo: Multiplicar 101₂ × 11₂

```
    101
  ×  11
  -----
    101
   101
  -----
   1111
```

Resultado: 101₂ × 11₂ = 1111₂ = 15₁₀

Proceso:

1. 1 × 101 = 101
2. 1 × 101 = 101 (desplazado una posición a la izquierda)
3. Sumar los resultados parciales: 101 + 1010 = 1111

## 5. Complemento a Uno y a Dos

### Complemento a Uno

El complemento a uno de un número binario se obtiene invirtiendo todos sus bits:

- 0 se convierte en 1
- 1 se convierte en 0

Ejemplo: Complemento a uno de 10110₂

```
Original:    10110
Complemento: 01001
```

Propiedades:

- Si N es un número de n bits, entonces N + (complemento a 1 de N) = 2ⁿ - 1 (todos unos)
- El complemento a uno del complemento a uno de un número es el número original

### Complemento a Dos

El complemento a dos de un número binario se obtiene:

1. Hallando el complemento a uno (invirtiendo todos los bits)
2. Sumando 1 al resultado

Ejemplo: Complemento a dos de 10110₂

```
Original:            10110
Complemento a uno:   01001
Sumar 1:            +    1
Complemento a dos:   01010
```

Propiedades:

- Si N es un número de n bits, entonces N + (complemento a 2 de N) = 2ⁿ
- El complemento a dos del complemento a dos de un número es el número original
- El complemento a dos de 0 es 0

### Resta Mediante Suma

La resta binaria puede realizarse mediante la suma del complemento a dos:

Para calcular A - B:

1. Encontrar el complemento a dos de B
2. Sumar A + (complemento a dos de B)
3. Ignorar cualquier acarreo final

Ejemplo: Calcular 1011₂ - 101₂ mediante suma de complementos

```
B = 101
Complemento a uno de B: 010
Complemento a dos de B: 011

A + complemento a dos de B:
  1011
+ 0011
------
  1110
```

Resultado: 1011₂ - 101₂ = 110₂ = 6₁₀

Esta técnica es importante porque permite a los circuitos digitales realizar restas utilizando únicamente operaciones de suma.

## 6. Representación de Números Binarios Negativos

### Bit de Signo

Una forma simple de representar números negativos en binario es utilizar el bit más significativo como bit de signo:

- 0: número positivo
- 1: número negativo

Ejemplo: Representación con bit de signo para números de 4 bits

```
0101 = +5
1101 = -5 (el valor absoluto es 101 = 5)
```

Limitaciones:

- Existen dos representaciones para el cero: +0 (0000) y -0 (1000)
- Las operaciones aritméticas requieren lógica adicional para manejar el signo

### Representación de Números Negativos

Existen tres sistemas principales para representar números negativos en binario:

**1. Signo-Magnitud:**

- El bit más significativo es el bit de signo (0 positivo, 1 negativo)
- Los bits restantes representan el valor absoluto del número
- Ejemplo (con 4 bits): +5 = 0101, -5 = 1101

**2. Complemento a Uno:**

- Los números positivos se representan igual que en binario natural
- Los números negativos se representan como el complemento a uno del valor absoluto
- Ejemplo (con 4 bits): +5 = 0101, -5 = 1010 (complemento a uno de 0101)

**3. Complemento a Dos (más común):**

- Los números positivos se representan igual que en binario natural
- Los números negativos se representan como el complemento a dos del valor absoluto
- Ejemplo (con 4 bits): +5 = 0101, -5 = 1011 (complemento a dos de 0101)

**Ventajas del complemento a dos:**

- Representación única del cero (solo existe +0)
- Operaciones aritméticas más simples (la resta se realiza mediante suma)
- Se utiliza prácticamente en todos los sistemas de computación modernos

**Rango de representación (con n bits):**

- Signo-Magnitud: -2^(n-1)+1 a +2^(n-1)-1
- Complemento a Uno: -2^(n-1)+1 a +2^(n-1)-1
- Complemento a Dos: -2^(n-1) a +2^(n-1)-1

Ejemplo: Rango con 4 bits en complemento a dos:

- Números representables: -8 a +7
- -8 = 1000
- -7 = 1001
- ...
- -1 = 1111
- 0 = 0000
- +1 = 0001
- ...
- +7 = 0111
