---
title: Introducción a la arquitectura de computadoras
description: Apunte sobre fundamentos la arquitectura de computadoras.
published: true
toc:
  visible: true
---

## 1. Fundamentos de la Arquitectura de Computadoras

### ¿Qué es la Arquitectura de Computadoras?

La arquitectura de computadoras estudia la estructura, organización y funcionamiento interno de los sistemas computacionales. Es el puente entre el hardware y el software, permitiendo entender cómo cada línea de código se transforma en acciones concretas ejecutadas por la máquina.

### Importancia para programadores

- Permite escribir **código más eficiente** al entender las limitaciones del hardware
- Facilita la **resolución de problemas complejos** con conocimiento de bajo nivel
- Mejora la comprensión de la **optimización de recursos**
- Proporciona bases sólidas para desarrollo de **sistemas embebidos y aplicaciones críticas**

## 2. Componentes Fundamentales del Hardware

### Unidad Central de Procesamiento (CPU)

- **Cerebro de la computadora**: Ejecuta instrucciones y realiza cálculos
- **Componentes principales**:
  - **Unidad Aritmético-Lógica (ALU)**: Realiza operaciones matemáticas y lógicas
  - **Unidad de Control**: Coordina todas las operaciones de la CPU
  - **Registros**: Memoria ultrarrápida para almacenar datos temporales
- **Características principales**: Velocidad (GHz), arquitectura (x86, ARM, RISC-V), núcleos

### Memoria

- **Memoria RAM (Random Access Memory)**
  - Almacena temporalmente datos e instrucciones durante la ejecución
  - Volátil: pierde su contenido al apagar el sistema
  - Velocidad, latencia y capacidad son factores críticos
- **Memoria Caché**
  - Memoria ultrarrápida entre CPU y RAM
  - Organizada en niveles (L1, L2, L3)
  - Reduce tiempos de acceso a datos frecuentes

### Dispositivos de Almacenamiento

- **Almacenamiento primario vs secundario**
- **Tipos**:
  - Discos duros (HDD): Magnéticos, mayor capacidad, menor velocidad
  - Unidades de estado sólido (SSD): Sin partes móviles, rápidos, durables
  - Memorias flash, tarjetas SD, discos ópticos

### Buses del Sistema

- **Canales de comunicación** entre componentes
- **Tipos principales**:
  - Bus de datos: Transfiere datos entre componentes
  - Bus de direcciones: Identifica ubicaciones de memoria
  - Bus de control: Coordina operaciones del sistema

### Dispositivos de Entrada/Salida

- **Periféricos** para interactuar con la computadora
- **Ejemplos**:
  - Entrada: Teclado, mouse, escáner, cámara
  - Salida: Monitor, impresora, parlantes
  - Entrada/Salida: Pantallas táctiles, discos externos, interfaces de red

## 3. Sistema Binario y Representación de Datos

### Fundamentos del Sistema Binario

- **Base del funcionamiento** de toda computadora
- Sistema numérico de **base 2 (solo utiliza 0 y 1)**
- **¿Por qué binario?**
  - Simplicidad en implementación electrónica (voltaje alto/bajo)
  - Menor susceptibilidad a errores
  - Compatible con álgebra booleana

### Conversiones numéricas

- **Decimal a binario**: División sucesiva por 2
- **Binario a decimal**: Suma de potencias de 2
- **Sistemas hexadecimal y octal** como representaciones compactas

### Representación de Datos

- **Números enteros**: Complemento a 2 para negativos
- **Números decimales**: Punto flotante (IEEE 754)
- **Caracteres**: ASCII, Unicode
- **Imágenes, audio y video**: Representación binaria de señales

## 4. Ciclo de Instrucción de la CPU

### Fases del Ciclo

1. **Fetch (Búsqueda)**: La CPU obtiene la instrucción desde memoria
2. **Decode (Decodificación)**: Interpreta qué operación debe realizar
3. **Execute (Ejecución)**: Realiza la operación indicada
4. **Store (Almacenamiento)**: Guarda los resultados

### Contador de Programa (PC)

- Registro especial que **mantiene la dirección de la siguiente instrucción**
- Se incrementa automáticamente durante el ciclo

### Registro de Instrucción (IR)

- Almacena **temporalmente la instrucción en curso**
- Permite su decodificación y ejecución

## 5. Lenguaje Ensamblador y Código Máquina

### Código Máquina

- **Lenguaje nativo** de la CPU
- Secuencias de **unos y ceros** (instrucciones binarias)
- **Específico** para cada arquitectura de procesador
- **Ejemplo**: `10110000 01100001` (puede representar "mover el valor 97 al registro A")

### Lenguaje Ensamblador

- Representación **simbólica del código máquina**
- Utiliza **mnemónicos** para instrucciones y registros
- **Ventajas**: Mayor legibilidad manteniendo control de bajo nivel
- **Ejemplo**: `MOV AL, 61h` (equivalente al código máquina anterior)

### Proceso de Ensamblado

- **Traductor (ensamblador)** convierte código ensamblador a código máquina
- **Relación 1:1** entre instrucciones de ensamblador y código máquina
- Permite **etiquetas y directivas** para facilitar la programación

## 6. Configuraciones de Hardware según Necesidades

### Servidores

- **Prioridades**: Fiabilidad, disponibilidad, procesamiento paralelo
- **Componentes clave**:
  - CPUs multi-núcleo o múltiples CPUs
  - Gran cantidad de RAM ECC (con corrección de errores)
  - Almacenamiento redundante (RAID)
  - Sistemas de alimentación ininterrumpida

### Estaciones de Desarrollo de Software

- **Prioridades**: Multitarea, compilación rápida, virtualización
- **Componentes clave**:
  - CPU con buen rendimiento single y multi-hilo
  - 16GB+ de RAM
  - SSD rápido para sistema operativo y proyectos
  - Monitor de alta resolución o múltiples monitores

### Equipos de Diseño Gráfico y Edición de Video

- **Prioridades**: Procesamiento gráfico, almacenamiento rápido, precisión de color
- **Componentes clave**:
  - GPU potente con mucha memoria VRAM
  - CPU con buenos núcleos para renderizado
  - 32GB+ de RAM
  - Almacenamiento NVMe rápido y de gran capacidad
  - Monitor calibrado profesionalmente

### Computadoras para Gaming

- **Prioridades**: Rendimiento gráfico, respuesta rápida, refrigeración
- **Componentes clave**:
  - GPU de alto rendimiento
  - CPU con alta frecuencia
  - 16GB+ de RAM rápida
  - SSD para tiempos de carga mínimos
  - Monitor de alta tasa de refresco

## 7. Evolución y Tendencias Actuales

### Ley de Moore y sus Limitaciones

- La densidad de transistores se ha duplicado aproximadamente cada 2 años
- Limitaciones físicas y térmicas están ralentizando esta progresión

### Arquitecturas Modernas

- **Multiprocesamiento**: Múltiples núcleos, procesadores
- **Arquitecturas RISC vs CISC**: Compromiso entre simplicidad y complejidad
- **Computación en la nube**: Virtualización y recursos distribuidos
- **Sistemas embebidos e IoT**: Arquitecturas especializadas de bajo consumo

### Tecnologías Emergentes

- **Computación cuántica**: Utiliza principios de la mecánica cuántica
- **Computación neuromórfica**: Inspirada en el cerebro humano
- **Aceleradores especializados**: TPUs, NPUs para inteligencia artificial

## Conclusión

La arquitectura de computadoras proporciona los fundamentos esenciales para entender cómo funcionan realmente estos sistemas. Para los programadores, este conocimiento es invaluable ya que permite:

- Optimizar código para arquitecturas específicas
- Comprender las limitaciones y capacidades reales del hardware
- Resolver problemas complejos con mayor eficacia
- Anticipar el comportamiento de los sistemas en diferentes escenarios

Dominar estos conceptos representa una ventaja competitiva significativa en el desarrollo de software eficiente, confiable y de alto rendimiento.
