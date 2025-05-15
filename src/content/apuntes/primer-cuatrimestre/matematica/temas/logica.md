---
title: Lógica
description: La lógica en matemáticas, como materia, trata del estudio de las reglas del razonamiento válido. Es una herramienta fundamental para analizar, construir y demostrar proposiciones o enunciados matemáticos con claridad y precisión.
pubDate: 2025-12-5
---

# LÓGICA PROPOSICIONAL

## 1. Proposición

Una proposición es una afirmación o enunciado que puede ser clasificado únicamente como verdadero o falso, pero no ambos a la vez. Es la unidad básica en lógica matemática.

### Definición y características

- **Proposición**: Enunciado declarativo al que se le puede asignar un valor de verdad (V o F)
- Generalmente se representan con letras minúsculas: p, q, r, s...
- Una proposición debe tener un significado definido y no ambiguo

### Ejemplos de proposiciones

- "La Tierra gira alrededor del Sol" (Verdadero)
- "2 + 3 = 7" (Falso)
- "Los triángulos tienen tres lados" (Verdadero)
- "Madrid es la capital de España" (Verdadero)

### Expresiones que NO son proposiciones

- **Preguntas**: "¿Qué hora es?" (No tiene valor de verdad)
- **Órdenes**: "Cierra la puerta" (No tiene valor de verdad)
- **Exclamaciones**: "¡Qué día tan bonito!" (No tiene valor de verdad)
- **Expresiones subjetivas**: "El helado de chocolate es delicioso" (Depende de opiniones)
- **Paradojas**: "Esta afirmación es falsa" (Conduce a contradicción)
- **Expresiones ambiguas**: "Él es alto" (Sin contexto para evaluarla)

## 2. Operaciones Lógicas Básicas

### Negación (¬)

- La negación de una proposición p se denota como ¬p o ~p
- Si p es verdadero, entonces ¬p es falso
- Si p es falso, entonces ¬p es verdadero

**Tabla de verdad:**

|  p  | ¬p  |
| :-: | :-: |
|  V  |  F  |
|  F  |  V  |

**Ejemplos:**

- p: "Está lloviendo"
- ¬p: "No está lloviendo"

### Conjunción (∧)

- La conjunción de p y q se denota como p ∧ q
- Se lee "p y q"
- Es verdadera solo cuando ambas proposiciones son verdaderas

**Tabla de verdad:**

|  p  |  q  | p ∧ q |
| :-: | :-: | :---: |
|  V  |  V  |   V   |
|  V  |  F  |   F   |
|  F  |  V  |   F   |
|  F  |  F  |   F   |

**Ejemplos:**

- p: "Estudia matemáticas"
- q: "Estudia física"
- p ∧ q: "Estudia matemáticas y física"

### Disyunción (∨)

- La disyunción de p y q se denota como p ∨ q
- Se lee "p o q"
- Es verdadera cuando al menos una de las proposiciones es verdadera

**Tabla de verdad:**

|  p  |  q  | p ∨ q |
| :-: | :-: | :---: |
|  V  |  V  |   V   |
|  V  |  F  |   V   |
|  F  |  V  |   V   |
|  F  |  F  |   F   |

**Ejemplos:**

- p: "Hace sol"
- q: "Hace calor"
- p ∨ q: "Hace sol o hace calor"

### Implicación (→)

- La implicación de p a q se denota como p → q
- Se lee "si p entonces q" o "p implica q"
- Es falsa solo cuando el antecedente (p) es verdadero y el consecuente (q) es falso

**Tabla de verdad:**

|  p  |  q  | p → q |
| :-: | :-: | :---: |
|  V  |  V  |   V   |
|  V  |  F  |   F   |
|  F  |  V  |   V   |
|  F  |  F  |   V   |

**Ejemplos:**

- p: "Es un cuadrado"
- q: "Tiene cuatro lados"
- p → q: "Si es un cuadrado, entonces tiene cuatro lados"

## 3. Operaciones Compuestas por Varios Conectivos

Las proposiciones pueden combinarse utilizando varios conectivos lógicos para formar expresiones más complejas.

### Prioridad de operadores

El orden de prioridad de los operadores lógicos es:

1. Negación (¬)
2. Conjunción (∧)
3. Disyunción (∨)
4. Implicación (→)
5. Doble implicación (↔)

### Traducción entre lenguaje natural y simbólico

**Del lenguaje natural al simbólico:**

| Expresión natural                     | Expresión simbólica |
| ------------------------------------- | ------------------- |
| No llueve                             | ¬p                  |
| Llueve y hace frío                    | p ∧ q               |
| Llueve o hace frío                    | p ∨ q               |
| Si llueve, entonces hace frío         | p → q               |
| Llueve si y solo si hace frío         | p ↔ q              |
| No es cierto que si llueve, hace frío | ¬(p → q)            |
| Si no llueve, entonces no hace frío   | ¬p → ¬q             |

**Del lenguaje simbólico al natural:**

| Expresión simbólica | Expresión natural   |
| ------------------- | ------------------- |
| ¬p                  | No p                |
| p ∧ q               | p y q               |
| p ∨ q               | p o q               |
| p → q               | Si p, entonces q    |
| p ↔ q              | p si y solo si q    |
| ¬p → q              | Si no p, entonces q |
| p → ¬q              | Si p, entonces no q |

### Ejemplos de traducciones

Si definimos:

- p: "Llueve"
- q: "Hace frío"
- r: "Me quedo en casa"

Entonces:

- "Si llueve y hace frío, me quedo en casa": (p ∧ q) → r
- "Me quedo en casa si llueve o hace frío": (p ∨ q) → r
- "No llueve o hace frío": ¬p ∨ q
- "No es cierto que llueva y haga frío": ¬(p ∧ q)
- "Si no llueve, entonces no hace frío": ¬p → ¬q

## 4. Conceptos Fundamentales en Matemática

### Definición matemática

Una definición matemática es una declaración precisa que asigna significado a un nuevo término matemático en función de términos ya conocidos o previamente definidos.

**Características de una buena definición:**

- Debe ser precisa y no ambigua
- No debe ser circular
- Debe usar términos previamente definidos o conceptos primitivos
- Debe ser necesaria y suficiente

### Conceptos primitivos

Son términos básicos que no se definen formalmente dentro de un sistema matemático dado, sino que se aceptan intuitivamente.

**Ejemplos:**

- En geometría euclidiana: punto, línea, plano
- En teoría de conjuntos: conjunto, pertenencia
- En lógica: proposición, verdad, falsedad

### Axiomas y teoremas

**Axiomas:**

- Son afirmaciones que se aceptan como verdaderas sin demostración
- Forman la base de un sistema matemático
- Deben ser consistentes entre sí (no contradictorios)

**Teoremas:**

- Son afirmaciones que se demuestran a partir de axiomas y/o otros teoremas
- Requieren una demostración formal
- Amplían el conocimiento del sistema matemático

### Partes de un teorema

Un teorema completo generalmente contiene:

1. **Hipótesis**: La condición o suposición inicial
2. **Tesis**: La conclusión que se deriva de la hipótesis
3. **Demostración**: La secuencia lógica que conecta la hipótesis con la tesis

**Tipos de demostraciones:**

- Directa
- Por contradicción (reducción al absurdo)
- Por contraposición
- Por inducción matemática
- Por casos

## 5. Implicación

### Definición y características

La implicación p → q significa "si p, entonces q", donde:

- p es el antecedente
- q es el consecuente

Una implicación es falsa solamente cuando el antecedente es verdadero y el consecuente es falso.

### Proposiciones relacionadas con una implicación

Dada una implicación p → q, se pueden derivar tres proposiciones relacionadas:

1. **Recíproca**: q → p

   - "Si q, entonces p"
   - No tiene la misma tabla de verdad que la original

2. **Contrarrecíproca**: ¬q → ¬p

   - "Si no q, entonces no p"
   - Tiene exactamente la misma tabla de verdad que la original
   - p → q es lógicamente equivalente a ¬q → ¬p

3. **Inversa**: ¬p → ¬q
   - "Si no p, entonces no q"
   - No tiene la misma tabla de verdad que la original
   - Tiene la misma tabla de verdad que la recíproca

### Relación entre los valores de verdad

| Proposición | Nombre           | Relación con la original                        |
| ----------- | ---------------- | ----------------------------------------------- |
| p → q       | Original         | -                                               |
| q → p       | Recíproca        | No equivalente                                  |
| ¬p → ¬q     | Inversa          | No equivalente, pero equivalente a la recíproca |
| ¬q → ¬p     | Contrarrecíproca | Equivalente a la original                       |

**Ejemplo:**

- Original: "Si es cuadrado, entonces tiene cuatro lados" (p → q)
- Recíproca: "Si tiene cuatro lados, entonces es un cuadrado" (q → p)
- Inversa: "Si no es un cuadrado, entonces no tiene cuatro lados" (¬p → ¬q)
- Contrarrecíproca: "Si no tiene cuatro lados, entonces no es un cuadrado" (¬q → ¬p)

La original y la contrarrecíproca son verdaderas, mientras que la recíproca y la inversa pueden ser falsas (existen figuras con cuatro lados que no son cuadrados).

## 6. Doble Implicación

### Definición y características

La doble implicación (también llamada bicondicional o equivalencia lógica) se denota como p ↔ q.

- Se lee "p si y solo si q"
- Es verdadera cuando ambos componentes tienen el mismo valor de verdad
- Es equivalente a (p → q) ∧ (q → p)

### Tabla de verdad

|  p  |  q  | p ↔ q |
| :-: | :-: | :----: |
|  V  |  V  |   V    |
|  V  |  F  |   F    |
|  F  |  V  |   F    |
|  F  |  F  |   V    |

### Ejemplos

- "Un número es par si y solo si es divisible por 2"
- "Un triángulo es equilátero si y solo si sus tres ángulos miden 60 grados"
- "x² = 4 si y solo si x = 2 o x = -2"

## 7. Negación de Proposiciones con Conectivos

### Negación de la negación (doble negación)

- ¬(¬p) = p
- La negación de una negación equivale a la afirmación original

### Negación de la conjunción (Leyes de De Morgan)

- ¬(p ∧ q) = ¬p ∨ ¬q
- "No es cierto que p y q" equivale a "No p o no q"

### Negación de la disyunción (Leyes de De Morgan)

- ¬(p ∨ q) = ¬p ∧ ¬q
- "No es cierto que p o q" equivale a "No p y no q"

### Negación de la implicación

- ¬(p → q) = p ∧ ¬q
- "No es cierto que si p entonces q" equivale a "p y no q"

### Negación de la doble implicación

- ¬(p ↔ q) = (p ∧ ¬q) ∨ (¬p ∧ q)
- "No es cierto que p si y solo si q" equivale a "o bien p y no q, o bien no p y q"

### Ejemplos de aplicación

Si p: "Llueve" y q: "Hace frío", entonces:

- ¬(p ∧ q): "No es cierto que llueva y haga frío"
- ¬p ∨ ¬q: "No llueve o no hace frío"
- ¬(p → q): "Llueve pero no hace frío"
- ¬(p ↔ q): "Llueve y no hace frío, o no llueve y hace frío"

## 8. Función Proposicional

### Definición y características

Una función proposicional es una expresión que contiene una o más variables y que se convierte en una proposición (con valor de verdad definido) cuando se sustituyen las variables por valores específicos.

- Se denota como P(x), Q(x,y), etc.
- Por sí misma no tiene valor de verdad hasta que se especifican valores para las variables
- El dominio de la función es el conjunto de valores posibles para las variables

### Diferencias entre proposición y función proposicional

| Proposición                    | Función Proposicional                                          |
| ------------------------------ | -------------------------------------------------------------- |
| Tiene valor de verdad definido | No tiene valor de verdad hasta asignar valores a las variables |
| No contiene variables libres   | Contiene al menos una variable libre                           |
| Ejemplo: "5 es primo"          | Ejemplo: "x es primo"                                          |

### Determinación del valor de verdad

Para determinar el valor de verdad de una función proposicional:

1. Identificar el dominio de las variables
2. Sustituir las variables por valores específicos del dominio
3. Evaluar el resultado como proposición

**Ejemplo:**

- Función proposicional: P(x) = "x² > x"
- Dominio: Números reales
- Para x = 0: 0² > 0 es falso (0 > 0)
- Para x = 2: 2² > 2 es verdadero (4 > 2)
- Para x = -1: (-1)² > -1 es verdadero (1 > -1)

## 9. Cuantificadores

### Cuantificador universal (∀)

- Se lee "para todo" o "para cualquier"
- Indica que una función proposicional es verdadera para todos los elementos del dominio
- Notación: ∀x P(x) significa "para todo x, P(x) es verdadero"

**Ejemplo:**

- ∀x (x² ≥ 0), donde x es un número real
- "Para todo número real x, el cuadrado de x es mayor o igual a cero"

### Cuantificador existencial (∃)

- Se lee "existe" o "existe al menos uno"
- Indica que una función proposicional es verdadera para al menos un elemento del dominio
- Notación: ∃x P(x) significa "existe al menos un x tal que P(x) es verdadero"

**Ejemplo:**

- ∃x (x² = 2), donde x es un número real
- "Existe al menos un número real x tal que el cuadrado de x es igual a 2"

### Negación de proposiciones con cuantificadores

- Negación del cuantificador universal: ¬(∀x P(x)) = ∃x ¬P(x)

  - "No es cierto que para todo x, P(x)" equivale a "Existe al menos un x tal que no P(x)"

- Negación del cuantificador existencial: ¬(∃x P(x)) = ∀x ¬P(x)
  - "No es cierto que existe un x tal que P(x)" equivale a "Para todo x, no P(x)"

**Ejemplos:**

- ¬(∀x (x² ≥ 0)) = ∃x ¬(x² ≥ 0) = ∃x (x² < 0)

  - "No es cierto que el cuadrado de todo número real sea positivo o cero" equivale a "Existe al menos un número real cuyo cuadrado es negativo"

- ¬(∃x (x² + 1 = 0)) = ∀x ¬(x² + 1 = 0) = ∀x (x² + 1 ≠ 0)
  - "No existe ningún número real cuyo cuadrado más uno sea igual a cero" equivale a "Para todo número real, su cuadrado más uno es distinto de cero"

## 10. Reconocimiento de Tautologías, Contradicciones y Contingencias

### Tautología

- Es una proposición compuesta que es siempre verdadera, independientemente del valor de verdad de sus componentes
- Su tabla de verdad muestra solo valores V en la columna final

**Ejemplos:**

- p ∨ ¬p (principio del tercero excluido)
- (p → q) ↔ (¬q → ¬p) (equivalencia entre una implicación y su contrarrecíproca)
- p → (q → p) (una verdad implica cualquier cosa)

### Contradicción

- Es una proposición compuesta que es siempre falsa, independientemente del valor de verdad de sus componentes
- Su tabla de verdad muestra solo valores F en la columna final

**Ejemplos:**

- p ∧ ¬p (principio de no contradicción)
- (p ↔ q) ∧ (p ↔ ¬q) (no puede ser equivalente a algo y a su negación)
- p ∧ (p → ¬p) (lleva a una contradicción)

### Contingencia

- Es una proposición compuesta que puede ser verdadera o falsa, dependiendo del valor de verdad de sus componentes
- Su tabla de verdad muestra al menos un V y al menos un F en la columna final

**Ejemplos:**

- p → q (depende de los valores de p y q)
- p ∨ q (verdadero excepto cuando ambas son falsas)
- p ∧ q (verdadero solo cuando ambas son verdaderas)

### Análisis mediante tablas de verdad

Para determinar si una proposición es una tautología, contradicción o contingencia:

1. Construir la tabla de verdad completa
2. Evaluar la columna final:
   - Si solo contiene V: tautología
   - Si solo contiene F: contradicción
   - Si contiene V y F: contingencia

**Ejemplo: Analizar p → (p ∨ q)**

|  p  |  q  | p ∨ q | p → (p ∨ q) |
| :-: | :-: | :---: | :---------: |
|  V  |  V  |   V   |      V      |
|  V  |  F  |   V   |      V      |
|  F  |  V  |   V   |      V      |
|  F  |  F  |   F   |      V      |

Como la columna final solo contiene V, la proposición p → (p ∨ q) es una tautología.

## 11. Cuantificadores y Funciones Proposicionales

### Combinación de cuantificadores

- Es posible combinar múltiples cuantificadores para expresar ideas más complejas
- El orden de los cuantificadores es importante cuando se utilizan diferentes tipos

**Ejemplos:**

- ∀x ∀y P(x,y): "Para todo x y para todo y, P(x,y)"
- ∃x ∀y P(x,y): "Existe al menos un x tal que para todo y, P(x,y)"
- ∀x ∃y P(x,y): "Para todo x existe al menos un y tal que P(x,y)"
- ∃x ∃y P(x,y): "Existe al menos un x y existe al menos un y tales que P(x,y)"

### Interpretación de expresiones con cuantificadores

**Ejemplo 1:** ∀x ∃y (y > x)

- Dominio: números reales
- Interpretación: "Para todo número real x, existe al menos un número real y que es mayor que x"
- Esta proposición es verdadera en el dominio de los números reales

**Ejemplo 2:** ∃x ∀y (x ≥ y)

- Dominio: números reales
- Interpretación: "Existe al menos un número real x tal que para todo número real y, x es mayor o igual que y"
- Esta proposición es falsa en el dominio de los números reales (no existe un número mayor o igual que todos los demás)

### Alcance de los cuantificadores

- El alcance de un cuantificador es la parte de la expresión a la que afecta
- Se puede delimitar mediante paréntesis
- Los cuantificadores más a la izquierda tienen un alcance que incluye a los de la derecha

**Ejemplo:**

- En ∀x (∃y P(x,y)), el cuantificador ∀x tiene un alcance que incluye toda la expresión ∃y P(x,y)
- En ∀x ∃y (P(x,y) → Q(x)), el alcance de ∀x incluye toda la expresión, mientras que el de ∃y solo incluye P(x,y) → Q(x)

### Equivalencias lógicas con cuantificadores

- ¬(∀x P(x)) ≡ ∃x ¬P(x)
- ¬(∃x P(x)) ≡ ∀x ¬P(x)
- ∀x ∀y P(x,y) ≡ ∀y ∀x P(x,y)
- ∃x ∃y P(x,y) ≡ ∃y ∃x P(x,y)
- ∀x (P(x) ∧ Q(x)) ≡ (∀x P(x)) ∧ (∀x Q(x))
- ∃x (P(x) ∨ Q(x)) ≡ (∃x P(x)) ∨ (∃x Q(x))

**Nota:** No todas las expresiones con cuantificadores tienen equivalencias sencillas. Por ejemplo:

- ∀x (P(x) ∨ Q(x)) no es equivalente a (∀x P(x)) ∨ (∀x Q(x))
- ∃x (P(x) ∧ Q(x)) no es equivalente a (∃x P(x)) ∧ (∃x Q(x))
