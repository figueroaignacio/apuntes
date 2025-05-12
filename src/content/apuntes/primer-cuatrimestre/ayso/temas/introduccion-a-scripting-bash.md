---
title: Introducción a scripting (Bash)
description: Apunte sobre fundamentos de bash, uso, caracteristicas, etc.
pubDate: 2025-12-5
---

Bash (Bourne Again SHell) es un intérprete de comandos y lenguaje de programación de scripts que sirve como interfaz entre el usuario y el sistema operativo. Es el shell predeterminado en la mayoría de distribuciones Linux y en macOS (hasta Catalina).

## 1. Fundamentos de Bash y la Línea de Comandos

### La Terminal y el Shell

- **Terminal**: Emulador que proporciona una interfaz de texto para interactuar con el shell
- **Shell**: Intérprete de comandos que procesa las instrucciones del usuario
- **Prompt**: Indicador que muestra información como usuario, host y directorio actual

### Comandos Básicos

#### Navegación en el Sistema de Archivos

- `pwd`: Muestra el directorio de trabajo actual
- `ls`: Lista el contenido del directorio
  - `ls -l`: Formato detallado (permisos, propietario, tamaño, fecha)
  - `ls -a`: Muestra archivos ocultos
  - `ls -h`: Muestra tamaños en formato legible (KB, MB, GB)
- `cd [directorio]`: Cambia el directorio de trabajo
  - `cd ..`: Sube un nivel en la jerarquía
  - `cd ~`: Va al directorio home del usuario
  - `cd -`: Regresa al directorio anterior

#### Manipulación de Archivos y Directorios

- `mkdir [nombre]`: Crea un nuevo directorio
- `touch [nombre]`: Crea un archivo vacío o actualiza la fecha de uno existente
- `cp [origen] [destino]`: Copia archivos o directorios
  - `cp -r`: Copia recursivamente (directorios y su contenido)
- `mv [origen] [destino]`: Mueve o renombra archivos o directorios
- `rm [archivo]`: Elimina archivos
  - `rm -r`: Elimina directorios y su contenido
  - `rm -f`: Fuerza la eliminación sin confirmación
- `rmdir [directorio]`: Elimina directorios vacíos

#### Visualización de Contenido

- `cat [archivo]`: Muestra el contenido completo
- `less [archivo]`: Visualiza el contenido de manera paginada
- `head [archivo]`: Muestra las primeras líneas (por defecto 10)
- `tail [archivo]`: Muestra las últimas líneas
  - `tail -f`: Muestra continuamente las últimas líneas (útil para logs)
- `grep [patrón] [archivo]`: Busca patrones en archivos

#### Ayuda y Documentación

- `man [comando]`: Muestra el manual del comando
- `info [comando]`: Documentación alternativa más detallada
- `whatis [comando]`: Descripción breve de un comando
- `comando --help` o `comando -h`: Muestra ayuda resumida

## 2. Gestión de Archivos y Directorios

### Sistema de Archivos en Linux

- **Estructura jerárquica**: Organización en forma de árbol invertido
- **Todo es un archivo**: Dispositivos, directorios y procesos se representan como archivos
- **Directorios principales**:
  - `/`: Raíz del sistema de archivos
  - `/home`: Directorios personales de los usuarios
  - `/etc`: Archivos de configuración del sistema
  - `/bin`, `/usr/bin`: Comandos ejecutables esenciales
  - `/sbin`, `/usr/sbin`: Comandos para administración del sistema
  - `/var`: Datos variables (logs, bases de datos, colas)
  - `/tmp`: Archivos temporales
  - `/opt`: Software adicional
  - `/mnt`, `/media`: Puntos de montaje para dispositivos externos

### Operaciones con Archivos y Directorios

#### Enlace de Archivos

- **Enlaces duros** (`ln [origen] [destino]`): Apuntan al mismo inodo
- **Enlaces simbólicos** (`ln -s [origen] [destino]`): Atajos a archivos o directorios

#### Búsqueda de Archivos

- `find [directorio] -name "[patrón]"`: Busca por nombre
- `find [directorio] -type f -size +100M`: Busca archivos de más de 100MB
- `locate [patrón]`: Búsqueda rápida usando una base de datos indexada
- `which [comando]`: Ubica el ejecutable de un comando

#### Compresión y Archivado

- `tar -cvf [archivo.tar] [directorio]`: Crea un archivo tar
- `tar -xvf [archivo.tar]`: Extrae un archivo tar
- `tar -czvf [archivo.tar.gz] [directorio]`: Crea un archivo comprimido con gzip
- `tar -xzvf [archivo.tar.gz]`: Extrae un archivo tar.gz
- `zip -r [archivo.zip] [directorio]`: Crea un archivo zip
- `unzip [archivo.zip]`: Extrae un archivo zip

#### Redirección y Pipelines

- `comando > archivo`: Redirige la salida estándar a un archivo (sobrescribe)
- `comando >> archivo`: Redirige la salida estándar a un archivo (añade)
- `comando < archivo`: Usa el archivo como entrada estándar
- `comando1 | comando2`: Conecta la salida de comando1 con la entrada de comando2
- `comando 2> archivo`: Redirige la salida de error a un archivo
- `comando &> archivo`: Redirige tanto la salida estándar como la de error

## 3. Permisos de Archivos

### Sistema de Permisos en Linux

- **Tres grupos de permisos**:
  - Usuario propietario (u)
  - Grupo propietario (g)
  - Otros usuarios (o)
- **Tres tipos de permisos**:
  - Lectura (r = 4): Ver contenido de archivos o directorios
  - Escritura (w = 2): Modificar archivos o directorios
  - Ejecución (x = 1): Ejecutar archivos o acceder a directorios

### Visualización y Modificación de Permisos

- `ls -l`: Muestra los permisos en formato simbólico (`-rwxr-xr--`)
- `chmod`: Cambia los permisos de un archivo o directorio
  - **Modo simbólico**: `chmod u+x,g-w,o=r archivo`
  - **Modo numérico**: `chmod 754 archivo` (rwx r-x r--)
- `chown [usuario]:[grupo] archivo`: Cambia el propietario y el grupo
- `chgrp [grupo] archivo`: Cambia solo el grupo

### Permisos Especiales

- **SUID (4000)**: Ejecuta el programa con los permisos del propietario
- **SGID (2000)**: Ejecuta con permisos del grupo o hereda grupo en directorios
- **Sticky Bit (1000)**: Solo el propietario puede borrar archivos (común en `/tmp`)

### Comparación con Permisos en Windows

- **Diferencias principales**:
  - Windows usa Listas de Control de Acceso (ACL) más granulares
  - El modelo de Linux es más simple pero menos flexible
- **Herramientas en Windows**:
  - `icacls`: Gestiona permisos desde la línea de comandos
  - Propiedades > Seguridad: Interfaz gráfica para gestión de permisos

## 4. Gestión de Paquetes en Linux

### Administradores de Paquetes

- **Sistemas basados en Debian (Ubuntu, Mint)**:
  - `apt update`: Actualiza la lista de paquetes disponibles
  - `apt upgrade`: Actualiza los paquetes instalados
  - `apt install [paquete]`: Instala un paquete
  - `apt remove [paquete]`: Desinstala un paquete
  - `apt search [término]`: Busca paquetes
  - `apt show [paquete]`: Muestra información sobre un paquete
- **Sistemas basados en Red Hat (Fedora, CentOS)**:
  - `dnf update` (o `yum update`): Actualiza el sistema
  - `dnf install [paquete]`: Instala un paquete
  - `dnf remove [paquete]`: Desinstala un paquete
  - `dnf search [término]`: Busca paquetes

### Gestión de Software Alternativa

- **snap**: Paquetes universales con dependencias incluidas
  - `snap install [paquete]`: Instala un paquete snap
  - `snap list`: Lista los paquetes snap instalados
- **flatpak**: Similar a snap, enfocado en aplicaciones de escritorio
  - `flatpak install [paquete]`: Instala un paquete flatpak
  - `flatpak list`: Lista los paquetes flatpak instalados
- **Compilación desde código fuente**:
  ```bash
  ./configuremakesudo make install
  ```

## 5. Scripts Básicos en Bash

### Creación de Scripts

1. Crear un archivo con extensión `.sh` (opcional pero recomendable)
2. Comenzar con shebang: `#!/bin/bash`
3. Escribir comandos
4. Guardar y hacer ejecutable: `chmod +x script.sh`
5. Ejecutar: `./script.sh`

### Ejemplo de Script Básico

```bash
#!/bin/bash
# Mi primer script
echo "¡Hola Mundo!"
echo "Fecha actual: $(date)"
echo "Directorio actual: $PWD"
```

### Variables en Bash

- **Definición**: `variable=valor` (sin espacios alrededor del =)
- **Acceso**: `$variable` o `${variable}`
- **Variables predefinidas**:
  - `$HOME`: Directorio home del usuario
  - `$PWD`: Directorio de trabajo actual
  - `$PATH`: Rutas de búsqueda de ejecutables
  - `$USER`: Nombre del usuario actual
  - `$?`: Código de salida del último comando
  - `$0`: Nombre del script
  - `$1`, `$2`, ...: Argumentos posicionales
  - `$#`: Número de argumentos
  - `$@`: Todos los argumentos como palabras separadas

### Ejemplo con Variables

```bash
#!/bin/bash
nombre="Usuario"
echo "Hola $nombre!"

# Solicitar entrada al usuario
echo "¿Cuál es tu nombre?"
read nombre_usuario
echo "Bienvenido, $nombre_usuario!"
```

## 6. Estructuras de Control

### Condicionales

#### If-Else

```bash
#!/bin/bash
if [ $edad -ge 18 ]; then
    echo "Eres mayor de edad"
elif [ $edad -ge 13 ]; then
    echo "Eres adolescente"
else
    echo "Eres menor de edad"
fi
```

#### Operadores de Comparación para Números

- `-eq`: Igual a
- `-ne`: No igual a
- `-gt`: Mayor que
- `-ge`: Mayor o igual que
- `-lt`: Menor que
- `-le`: Menor o igual que

#### Operadores para Cadenas

- `==`: Igual a
- `!=`: No igual a
- `-z`: Cadena vacía
- `-n`: Cadena no vacía

#### Operadores para Archivos

- `-f archivo`: Es un archivo regular
- `-d archivo`: Es un directorio
- `-e archivo`: Existe
- `-r archivo`: Permiso de lectura
- `-w archivo`: Permiso de escritura
- `-x archivo`: Permiso de ejecución

#### Case

```bash
#!/bin/bash
case $opcion in
    start)
        echo "Iniciando servicio"
        ;;
    stop)
        echo "Deteniendo servicio"
        ;;
    restart)
        echo "Reiniciando servicio"
        ;;
    *)
        echo "Opción no válida"
        ;;
esac
```

### Bucles

#### For

```bash
#!/bin/bash
# Iterar sobre valores específicos
for color in rojo verde azul; do
    echo "Color: $color"
done

# Iterar sobre un rango
for i in {1..5}; do
    echo "Número: $i"
done

# Iterar sobre archivos
for archivo in /etc/*.conf; do
    echo "Archivo de configuración: $archivo"
done
```

#### While

```bash
#!/bin/bash
contador=1
while [ $contador -le 5 ]; do
    echo "Iteración $contador"
    ((contador++))
done
```

#### Until

```bash
#!/bin/bash
contador=5
until [ $contador -le 0 ]; do
    echo "Cuenta regresiva: $contador"
    ((contador--))
done
echo "¡Despegue!"
```

## 7. Funciones y Operaciones Avanzadas

### Funciones

```bash
#!/bin/bash
# Definición de función
saludar() {
    echo "Hola, $1!"
    return 0
}

# Llamada a la función
saludar "Mundo"
saludar "Programador"
```

### Operaciones Aritméticas

```bash
#!/bin/bash
# Usando let
let result=10+5
echo "Resultado con let: $result"

# Usando expr (espacios importantes)
result=$(expr 10 + 5)
echo "Resultado con expr: $result"

# Usando doble paréntesis
result=$((10 + 5))
echo "Resultado con paréntesis dobles: $result"

# Operaciones más complejas
result=$(( (10 + 5) * 2 ))
echo "Operación compleja: $result"
```

### Manipulación de Cadenas

```bash
#!/bin/bash
cadena="Hola Mundo"

# Longitud
echo "Longitud: ${#cadena}"

# Subcadena
echo "Subcadena: ${cadena:0:4}"

# Reemplazo
echo "Reemplazo: ${cadena/Mundo/Universo}"

# Conversión a mayúsculas/minúsculas
echo "Mayúsculas: ${cadena^^}"
echo "Minúsculas: ${cadena,,}"
```

## 8. Gestión de Procesos

### Comandos de Gestión

- `ps`: Muestra procesos en ejecución
  - `ps aux`: Lista detallada de todos los procesos
- `top` o `htop`: Monitor de procesos en tiempo real
- `kill [PID]`: Envía señal de terminación a un proceso
  - `kill -9 [PID]`: Fuerza la terminación (SIGKILL)
- `pkill [nombre]`: Termina procesos por nombre
- `pgrep [nombre]`: Obtiene PID de procesos por nombre
- `nice` y `renice`: Ajusta la prioridad de ejecución

### Control de Procesos en Scripts

```bash
#!/bin/bash
# Ejecutar en segundo plano
comando &

# Obtener PID del último proceso en segundo plano
pid=$!
echo "Proceso en segundo plano: $pid"

# Esperar a que termine un proceso
wait $pid
echo "El proceso ha terminado"
```

### Señales

- **SIGHUP (1)**: Terminal cerrada
- **SIGINT (2)**: Interrupción desde teclado (Ctrl+C)
- **SIGKILL (9)**: Terminación forzada
- **SIGTERM (15)**: Terminación
- **SIGSTOP (19)**: Detener proceso (no puede ignorarse)

```bash
#!/bin/bash
# Manejador de señales
trap "echo 'Señal SIGINT recibida'; exit" SIGINT
trap "echo 'Señal SIGTERM recibida'; exit" SIGTERM

echo "PID del script: $$"
echo "Ejecutando bucle infinito. Presiona Ctrl+C para terminar."
while true; do
    sleep 1
done
```

## 9. Herramientas para Edición de Textos

### Editores de Texto

- **nano**: Editor simple, ideal para principiantes
  - Ctrl+O: Guardar
  - Ctrl+X: Salir
  - Ctrl+W: Buscar
  - Ctrl+K: Cortar línea
- **vim**: Editor potente con modo comando y modo inserción
  - `i`: Entrar en modo inserción
  - `Esc`: Volver a modo comando
  - `:w`: Guardar
  - `:q`: Salir
  - `:wq`: Guardar y salir
  - `:q!`: Salir sin guardar
- **emacs**: Editor extensible y personalizable
  - Ctrl+X Ctrl+S: Guardar
  - Ctrl+X Ctrl+C: Salir
  - Alt+X: Ejecutar comando

### Procesamiento de Texto

- **grep**: Búsqueda de patrones
  - `grep -i "texto" archivo`: Busca ignorando mayúsculas/minúsculas
  - `grep -r "texto" directorio`: Búsqueda recursiva en directorio
  - `grep -v "texto" archivo`: Muestra líneas que NO contienen el patrón
- **sed**: Editor de flujo para transformaciones de texto
  - `sed 's/original/reemplazo/' archivo`: Reemplaza la primera ocurrencia en cada línea
  - `sed 's/original/reemplazo/g' archivo`: Reemplaza todas las ocurrencias
  - `sed -i 's/original/reemplazo/g' archivo`: Modifica el archivo in-situ
- **awk**: Procesamiento de texto por campos
  - `awk '{print $1}' archivo`: Imprime el primer campo de cada línea
  - `awk -F: '{print $1}' /etc/passwd`: Usa ":" como separador de campos
  - `awk '$3 > 100 {print $1}' archivo`: Imprime campo 1 si campo 3 > 100

## 10. Automatización de Tareas

### Programación de Tareas

- **cron**: Ejecuta tareas programadas
  - `crontab -e`: Edita la tabla cron del usuario
  - `crontab -l`: Lista las tareas programadas
  - Formato: `minuto hora dia-mes mes dia-semana comando`
  - Ejemplo: `0 9 * * 1-5 /ruta/script.sh` (ejecuta a las 9 AM de lunes a viernes)
- **at**: Programa tareas puntuales
  - `at 10:00` (introduce comandos, termina con Ctrl+D)
  - `atq`: Lista trabajos pendientes
  - `atrm [id]`: Elimina un trabajo programado

### Ejecución Periódica desde Scripts

```bash
#!/bin/bash
while true; do
    echo "Ejecutando tarea..."
    # Comandos a ejecutar

    # Esperar 5 minutos antes de la siguiente ejecución
    sleep 300
done
```

### Monitoreo y Registro

```bash
#!/bin/bash
logfile="/var/log/myscript.log"

# Función para registro
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> $logfile
}

log "Script iniciado"

# Ejecutar tarea y registrar resultado
if comandos_a_ejecutar; then
    log "Tarea completada exitosamente"
else
    log "ERROR: La tarea falló con código $?"
fi

log "Script finalizado"
```

## 11. Introducción a Google Cloud Shell

### ¿Qué es Google Cloud Shell?

- Entorno de desarrollo en la nube basado en Linux
- Acceso mediante navegador web
- Incluye 5GB de almacenamiento persistente
- Preinstalado con herramientas de desarrollo y CLI de Google Cloud

### Acceso y Características

- Acceso desde la consola de Google Cloud Platform (botón de terminal)
- Terminal completa con Bash
- Editor de código integrado
- Conexión a recursos de Google Cloud
- 12 horas de tiempo de actividad por sesión

### Ventajas para Aprender Bash

- No requiere instalación local
- Entorno Linux completo
- Persistencia de archivos entre sesiones
- Acceso desde cualquier dispositivo con navegador

### Limitaciones

- Requiere conexión a Internet
- Sesión se cierra tras 20 minutos de inactividad
- Recursos computacionales limitados

## 12. Ejemplos Prácticos de Scripts

### Script de Backup

```bash
#!/bin/bash
# Script para realizar copias de seguridad

# Configuración
origen="/ruta/datos"
destino="/ruta/backups"
fecha=$(date +%Y%m%d)
nombre_backup="backup_$fecha.tar.gz"

# Crear directorio de destino si no existe
mkdir -p "$destino"

# Crear el archivo de backup
echo "Creando backup de $origen..."
tar -czvf "$destino/$nombre_backup" "$origen"

# Verificar si el backup se creó correctamente
if [ $? -eq 0 ]; then
    echo "Backup creado exitosamente en $destino/$nombre_backup"
    # Mantener solo los últimos 5 backups
    ls -t "$destino"/backup_*.tar.gz | tail -n +6 | xargs -I {} rm {}
    echo "Backups antiguos eliminados. Conservando los 5 más recientes."
else
    echo "Error al crear el backup"
fi
```

### Monitor de Sistema

```bash
#!/bin/bash
# Monitor simple de recursos del sistema

clear
echo "=== Monitor de Sistema ==="
echo "Presiona Ctrl+C para salir"
echo

while true; do
    clear
    echo "=== $(date) ==="
    echo

    # Uso de CPU
    echo "--- Uso de CPU ---"
    top -bn1 | head -n 5
    echo

    # Uso de memoria
    echo "--- Uso de Memoria ---"
    free -h
    echo

    # Espacio en disco
    echo "--- Espacio en Disco ---"
    df -h | grep -v "tmpfs"
    echo

    # Procesos que más CPU usan
    echo "--- Top 5 Procesos (CPU) ---"
    ps aux --sort=-%cpu | head -n 6
    echo

    # Actualizar cada 5 segundos
    sleep 5
done
```

### Procesador de Logs

````bash
#!/bin/bash
# Procesador de archivos de log

# Configuración
archivo_log="/var/log/apache2/access.log"
salida="informe_$(date +%Y%m%d).txt"

# Verificar si existe el archivo
if [ ! -f "$archivo_log" ]; then
    echo "Error: No se encuentra el archivo $archivo_log"
    exit 1
fi

# Crear informe
echo "Generando informe de $archivo_log..."
echo "INFORME DE ACCESO - $(date)" > "$salida"
echo "-------------------------" >> "$salida"

# Número total de solicitudes
total=$(wc -l < "$archivo_log")
echo "Total de solicitudes: $total" >> "$salida"
echo >> "$salida"

# Solicitudes por código de estado HTTP
echo "DISTRIBUCIÓN POR CÓDIGO HTTP:" >> "$salida"
grep -o " [0-9]\{3\} " "$archivo_log" | sort | uniq -c | sort -nr >> "$salida"
echo >> "$salida"

# Top 10 IPs
echo "TOP 10 DIRECCIONES IP:" >> "$salida"
grep -o "^[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}" "$archivo_log" | sort | uniq -c | sort -nr | head -n 10 >> "$salida"
echo >> "$salida"

# Top 10 páginas solicitadas
echo "TOP 10 PÁGINAS SOLICITADAS:" >> "$salida"
grep -o "GET [^ ]*" "$archivo_log" | ## 1. Fundamentos de Bash y la Línea de Comandos

### ¿Qué es Bash?

Bash (Bourne Again SHell) es un intérprete de comandos y lenguaje de programación de scripts que sirve como interfaz entre el usuario y el sistema operativo. Es el shell predeterminado en la mayoría de distribuciones Linux y en macOS (hasta Catalina).

### La Terminal y el Shell

- **Terminal**: Emulador que proporciona una interfaz de texto para interactuar con el shell
- **Shell**: Intérprete de comandos que procesa las instrucciones del usuario
- **Prompt**: Indicador que muestra información como usuario, host y directorio actual

### Comandos Básicos

#### Navegación en el Sistema de Archivos

- `pwd`: Muestra el directorio de trabajo actual
- `ls`: Lista el contenido del directorio
    - `ls -l`: Formato detallado (permisos, propietario, tamaño, fecha)
    - `ls -a`: Muestra archivos ocultos
    - `ls -h`: Muestra tamaños en formato legible (KB, MB, GB)
- `cd [directorio]`: Cambia el directorio de trabajo
    - `cd ..`: Sube un nivel en la jerarquía
    - `cd ~`: Va al directorio home del usuario
    - `cd -`: Regresa al directorio anterior

#### Manipulación de Archivos y Directorios

- `mkdir [nombre]`: Crea un nuevo directorio
- `touch [nombre]`: Crea un archivo vacío o actualiza la fecha de uno existente
- `cp [origen] [destino]`: Copia archivos o directorios
    - `cp -r`: Copia recursivamente (directorios y su contenido)
- `mv [origen] [destino]`: Mueve o renombra archivos o directorios
- `rm [archivo]`: Elimina archivos
    - `rm -r`: Elimina directorios y su contenido
    - `rm -f`: Fuerza la eliminación sin confirmación
- `rmdir [directorio]`: Elimina directorios vacíos

#### Visualización de Contenido

- `cat [archivo]`: Muestra el contenido completo
- `less [archivo]`: Visualiza el contenido de manera paginada
- `head [archivo]`: Muestra las primeras líneas (por defecto 10)
- `tail [archivo]`: Muestra las últimas líneas
    - `tail -f`: Muestra continuamente las últimas líneas (útil para logs)
- `grep [patrón] [archivo]`: Busca patrones en archivos

#### Ayuda y Documentación

- `man [comando]`: Muestra el manual del comando
- `info [comando]`: Documentación alternativa más detallada
- `whatis [comando]`: Descripción breve de un comando
- `comando --help` o `comando -h`: Muestra ayuda resumida

## 2. Gestión de Archivos y Directorios

### Sistema de Archivos en Linux

- **Estructura jerárquica**: Organización en forma de árbol invertido
- **Todo es un archivo**: Dispositivos, directorios y procesos se representan como archivos
- **Directorios principales**:
    - `/`: Raíz del sistema de archivos
    - `/home`: Directorios personales de los usuarios
    - `/etc`: Archivos de configuración del sistema
    - `/bin`, `/usr/bin`: Comandos ejecutables esenciales
    - `/sbin`, `/usr/sbin`: Comandos para administración del sistema
    - `/var`: Datos variables (logs, bases de datos, colas)
    - `/tmp`: Archivos temporales
    - `/opt`: Software adicional
    - `/mnt`, `/media`: Puntos de montaje para dispositivos externos

### Operaciones con Archivos y Directorios

#### Enlace de Archivos

- **Enlaces duros** (`ln [origen] [destino]`): Apuntan al mismo inodo
- **Enlaces simbólicos** (`ln -s [origen] [destino]`): Atajos a archivos o directorios

#### Búsqueda de Archivos

- `find [directorio] -name "[patrón]"`: Busca por nombre
- `find [directorio] -type f -size +100M`: Busca archivos de más de 100MB
- `locate [patrón]`: Búsqueda rápida usando una base de datos indexada
- `which [comando]`: Ubica el ejecutable de un comando

#### Compresión y Archivado

- `tar -cvf [archivo.tar] [directorio]`: Crea un archivo tar
- `tar -xvf [archivo.tar]`: Extrae un archivo tar
- `tar -czvf [archivo.tar.gz] [directorio]`: Crea un archivo comprimido con gzip
- `tar -xzvf [archivo.tar.gz]`: Extrae un archivo tar.gz
- `zip -r [archivo.zip] [directorio]`: Crea un archivo zip
- `unzip [archivo.zip]`: Extrae un archivo zip

#### Redirección y Pipelines

- `comando > archivo`: Redirige la salida estándar a un archivo (sobrescribe)
- `comando >> archivo`: Redirige la salida estándar a un archivo (añade)
- `comando < archivo`: Usa el archivo como entrada estándar
- `comando1 | comando2`: Conecta la salida de comando1 con la entrada de comando2
- `comando 2> archivo`: Redirige la salida de error a un archivo
- `comando &> archivo`: Redirige tanto la salida estándar como la de error

## 3. Permisos de Archivos

### Sistema de Permisos en Linux

- **Tres grupos de permisos**:
    - Usuario propietario (u)
    - Grupo propietario (g)
    - Otros usuarios (o)
- **Tres tipos de permisos**:
    - Lectura (r = 4): Ver contenido de archivos o directorios
    - Escritura (w = 2): Modificar archivos o directorios
    - Ejecución (x = 1): Ejecutar archivos o acceder a directorios

### Visualización y Modificación de Permisos

- `ls -l`: Muestra los permisos en formato simbólico (`-rwxr-xr--`)
- `chmod`: Cambia los permisos de un archivo o directorio
    - **Modo simbólico**: `chmod u+x,g-w,o=r archivo`
    - **Modo numérico**: `chmod 754 archivo` (rwx r-x r--)
- `chown [usuario]:[grupo] archivo`: Cambia el propietario y el grupo
- `chgrp [grupo] archivo`: Cambia solo el grupo

### Permisos Especiales

- **SUID (4000)**: Ejecuta el programa con los permisos del propietario
- **SGID (2000)**: Ejecuta con permisos del grupo o hereda grupo en directorios
- **Sticky Bit (1000)**: Solo el propietario puede borrar archivos (común en `/tmp`)

### Comparación con Permisos en Windows

- **Diferencias principales**:
    - Windows usa Listas de Control de Acceso (ACL) más granulares
    - El modelo de Linux es más simple pero menos flexible
- **Herramientas en Windows**:
    - `icacls`: Gestiona permisos desde la línea de comandos
    - Propiedades > Seguridad: Interfaz gráfica para gestión de permisos

## 4. Gestión de Paquetes en Linux

### Administradores de Paquetes

- **Sistemas basados en Debian (Ubuntu, Mint)**:
    - `apt update`: Actualiza la lista de paquetes disponibles
    - `apt upgrade`: Actualiza los paquetes instalados
    - `apt install [paquete]`: Instala un paquete
    - `apt remove [paquete]`: Desinstala un paquete
    - `apt search [término]`: Busca paquetes
    - `apt show [paquete]`: Muestra información sobre un paquete
- **Sistemas basados en Red Hat (Fedora, CentOS)**:
    - `dnf update` (o `yum update`): Actualiza el sistema
    - `dnf install [paquete]`: Instala un paquete
    - `dnf remove [paquete]`: Desinstala un paquete
    - `dnf search [término]`: Busca paquetes

### Gestión de Software Alternativa

- **snap**: Paquetes universales con dependencias incluidas
    - `snap install [paquete]`: Instala un paquete snap
    - `snap list`: Lista los paquetes snap instalados
- **flatpak**: Similar a snap, enfocado en aplicaciones de escritorio
    - `flatpak install [paquete]`: Instala un paquete flatpak
    - `flatpak list`: Lista los paquetes flatpak instalados
- **Compilación desde código fuente**:

    ```bash
    ./configuremakesudo make install
    ```


## 5. Scripts Básicos en Bash

### Creación de Scripts

1. Crear un archivo con extensión `.sh` (opcional pero recomendable)
2. Comenzar con shebang: `#!/bin/bash`
3. Escribir comandos
4. Guardar y hacer ejecutable: `chmod +x script.sh`
5. Ejecutar: `./script.sh`

### Ejemplo de Script Básico

```bash
#!/bin/bash
# Mi primer script
echo "¡Hola Mundo!"
echo "Fecha actual: $(date)"
echo "Directorio actual: $PWD"
````

### Variables en Bash

- **Definición**: `variable=valor` (sin espacios alrededor del =)
- **Acceso**: `$variable` o `${variable}`
- **Variables predefinidas**:
  - `$HOME`: Directorio home del usuario
  - `$PWD`: Directorio de trabajo actual
  - `$PATH`: Rutas de búsqueda de ejecutables
  - `$USER`: Nombre del usuario actual
  - `$?`: Código de salida del último comando
  - `$0`: Nombre del script
  - `$1`, `$2`, ...: Argumentos posicionales
  - `$#`: Número de argumentos
  - `$@`: Todos los argumentos como palabras separadas

### Ejemplo con Variables

```bash
#!/bin/bash
nombre="Usuario"
echo "Hola $nombre!"

# Solicitar entrada al usuario
echo "¿Cuál es tu nombre?"
read nombre_usuario
echo "Bienvenido, $nombre_usuario!"
```

## 6. Estructuras de Control

### Condicionales

#### If-Else

```bash
#!/bin/bash
if [ $edad -ge 18 ]; then
    echo "Eres mayor de edad"
elif [ $edad -ge 13 ]; then
    echo "Eres adolescente"
else
    echo "Eres menor de edad"
fi
```

#### Operadores de Comparación para Números

- `-eq`: Igual a
- `-ne`: No igual a
- `-gt`: Mayor que
- `-ge`: Mayor o igual que
- `-lt`: Menor que
- `-le`: Menor o igual que

#### Operadores para Cadenas

- `==`: Igual a
- `!=`: No igual a
- `-z`: Cadena vacía
- `-n`: Cadena no vacía

#### Operadores para Archivos

- `-f archivo`: Es un archivo regular
- `-d archivo`: Es un directorio
- `-e archivo`: Existe
- `-r archivo`: Permiso de lectura
- `-w archivo`: Permiso de escritura
- `-x archivo`: Permiso de ejecución

#### Case

```bash
#!/bin/bash
case $opcion in
    start)
        echo "Iniciando servicio"
        ;;
    stop)
        echo "Deteniendo servicio"
        ;;
    restart)
        echo "Reiniciando servicio"
        ;;
    *)
        echo "Opción no válida"
        ;;
esac
```

### Bucles

#### For

```bash
#!/bin/bash
# Iterar sobre valores específicos
for color in rojo verde azul; do
    echo "Color: $color"
done

# Iterar sobre un rango
for i in {1..5}; do
    echo "Número: $i"
done

# Iterar sobre archivos
for archivo in /etc/*.conf; do
    echo "Archivo de configuración: $archivo"
done
```

#### While

```bash
#!/bin/bash
contador=1
while [ $contador -le 5 ]; do
    echo "Iteración $contador"
    ((contador++))
done
```

#### Until

```bash
#!/bin/bash
contador=5
until [ $contador -le 0 ]; do
    echo "Cuenta regresiva: $contador"
    ((contador--))
done
echo "¡Despegue!"
```

## 7. Funciones y Operaciones Avanzadas

### Funciones

```bash
#!/bin/bash
# Definición de función
saludar() {
    echo "Hola, $1!"
    return 0
}

# Llamada a la función
saludar "Mundo"
saludar "Programador"
```

### Operaciones Aritméticas

```bash
#!/bin/bash
# Usando let
let result=10+5
echo "Resultado con let: $result"

# Usando expr (espacios importantes)
result=$(expr 10 + 5)
echo "Resultado con expr: $result"

# Usando doble paréntesis
result=$((10 + 5))
echo "Resultado con paréntesis dobles: $result"

# Operaciones más complejas
result=$(( (10 + 5) * 2 ))
echo "Operación compleja: $result"
```

### Manipulación de Cadenas

```bash
#!/bin/bash
cadena="Hola Mundo"

# Longitud
echo "Longitud: ${#cadena}"

# Subcadena
echo "Subcadena: ${cadena:0:4}"

# Reemplazo
echo "Reemplazo: ${cadena/Mundo/Universo}"

# Conversión a mayúsculas/minúsculas
echo "Mayúsculas: ${cadena^^}"
echo "Minúsculas: ${cadena,,}"
```

## 8. Gestión de Procesos

### Comandos de Gestión

- `ps`: Muestra procesos en ejecución
  - `ps aux`: Lista detallada de todos los procesos
- `top` o `htop`: Monitor de procesos en tiempo real
- `kill [PID]`: Envía señal de terminación a un proceso
  - `kill -9 [PID]`: Fuerza la terminación (SIGKILL)
- `pkill [nombre]`: Termina procesos por nombre
- `pgrep [nombre]`: Obtiene PID de procesos por nombre
- `nice` y `renice`: Ajusta la prioridad de ejecución

### Control de Procesos en Scripts

```bash
#!/bin/bash
# Ejecutar en segundo plano
comando &

# Obtener PID del último proceso en segundo plano
pid=$!
echo "Proceso en segundo plano: $pid"

# Esperar a que termine un proceso
wait $pid
echo "El proceso ha terminado"
```

### Señales

- **SIGHUP (1)**: Terminal cerrada
- **SIGINT (2)**: Interrupción desde teclado (Ctrl+C)
- **SIGKILL (9)**: Terminación forzada
- **SIGTERM (15)**: Terminación
- **SIGSTOP (19)**: Detener proceso (no puede ignorarse)

```bash
#!/bin/bash
# Manejador de señales
trap "echo 'Señal SIGINT recibida'; exit" SIGINT
trap "echo 'Señal SIGTERM recibida'; exit" SIGTERM

echo "PID del script: $$"
echo "Ejecutando bucle infinito. Presiona Ctrl+C para terminar."
while true; do
    sleep 1
done
```

## 9. Herramientas para Edición de Textos

### Editores de Texto

- **nano**: Editor simple, ideal para principiantes
  - Ctrl+O: Guardar
  - Ctrl+X: Salir
  - Ctrl+W: Buscar
  - Ctrl+K: Cortar línea
- **vim**: Editor potente con modo comando y modo inserción
  - `i`: Entrar en modo inserción
  - `Esc`: Volver a modo comando
  - `:w`: Guardar
  - `:q`: Salir
  - `:wq`: Guardar y salir
  - `:q!`: Salir sin guardar
- **emacs**: Editor extensible y personalizable
  - Ctrl+X Ctrl+S: Guardar
  - Ctrl+X Ctrl+C: Salir
  - Alt+X: Ejecutar comando

### Procesamiento de Texto

- **grep**: Búsqueda de patrones
  - `grep -i "texto" archivo`: Busca ignorando mayúsculas/minúsculas
  - `grep -r "texto" directorio`: Búsqueda recursiva en directorio
  - `grep -v "texto" archivo`: Muestra líneas que NO contienen el patrón
- **sed**: Editor de flujo para transformaciones de texto
  - `sed 's/original/reemplazo/' archivo`: Reemplaza la primera ocurrencia en cada línea
  - `sed 's/original/reemplazo/g' archivo`: Reemplaza todas las ocurrencias
  - `sed -i 's/original/reemplazo/g' archivo`: Modifica el archivo in-situ
- **awk**: Procesamiento de texto por campos
  - `awk '{print $1}' archivo`: Imprime el primer campo de cada línea
  - `awk -F: '{print $1}' /etc/passwd`: Usa ":" como separador de campos
  - `awk '$3 > 100 {print $1}' archivo`: Imprime campo 1 si campo 3 > 100

## 10. Automatización de Tareas

### Programación de Tareas

- **cron**: Ejecuta tareas programadas
  - `crontab -e`: Edita la tabla cron del usuario
  - `crontab -l`: Lista las tareas programadas
  - Formato: `minuto hora dia-mes mes dia-semana comando`
  - Ejemplo: `0 9 * * 1-5 /ruta/script.sh` (ejecuta a las 9 AM de lunes a viernes)
- **at**: Programa tareas puntuales
  - `at 10:00` (introduce comandos, termina con Ctrl+D)
  - `atq`: Lista trabajos pendientes
  - `atrm [id]`: Elimina un trabajo programado

### Ejecución Periódica desde Scripts

```bash
#!/bin/bash
while true; do
    echo "Ejecutando tarea..."
    # Comandos a ejecutar

    # Esperar 5 minutos antes de la siguiente ejecución
    sleep 300
done
```

### Monitoreo y Registro

```bash
#!/bin/bash
logfile="/var/log/myscript.log"

# Función para registro
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> $logfile
}

log "Script iniciado"

# Ejecutar tarea y registrar resultado
if comandos_a_ejecutar; then
    log "Tarea completada exitosamente"
else
    log "ERROR: La tarea falló con código $?"
fi

log "Script finalizado"
```

## 11. Introducción a Google Cloud Shell

### ¿Qué es Google Cloud Shell?

- Entorno de desarrollo en la nube basado en Linux
- Acceso mediante navegador web
- Incluye 5GB de almacenamiento persistente
- Preinstalado con herramientas de desarrollo y CLI de Google Cloud

### Acceso y Características

- Acceso desde la consola de Google Cloud Platform (botón de terminal)
- Terminal completa con Bash
- Editor de código integrado
- Conexión a recursos de Google Cloud
- 12 horas de tiempo de actividad por sesión

### Ventajas para Aprender Bash

- No requiere instalación local
- Entorno Linux completo
- Persistencia de archivos entre sesiones
- Acceso desde cualquier dispositivo con navegador

### Limitaciones

- Requiere conexión a Internet
- Sesión se cierra tras 20 minutos de inactividad
- Recursos computacionales limitados

## 12. Ejemplos Prácticos de Scripts

### Script de Backup

```bash
#!/bin/bash
# Script para realizar copias de seguridad

# Configuración
origen="/ruta/datos"
destino="/ruta/backups"
fecha=$(date +%Y%m%d)
nombre_backup="backup_$fecha.tar.gz"

# Crear directorio de destino si no existe
mkdir -p "$destino"

# Crear el archivo de backup
echo "Creando backup de $origen..."
tar -czvf "$destino/$nombre_backup" "$origen"

# Verificar si el backup se creó correctamente
if [ $? -eq 0 ]; then
    echo "Backup creado exitosamente en $destino/$nombre_backup"
    # Mantener solo los últimos 5 backups
    ls -t "$destino"/backup_*.tar.gz | tail -n +6 | xargs -I {} rm {}
    echo "Backups antiguos eliminados. Conservando los 5 más recientes."
else
    echo "Error al crear el backup"
fi
```

### Monitor de Sistema

```bash
#!/bin/bash
# Monitor simple de recursos del sistema

clear
echo "=== Monitor de Sistema ==="
echo "Presiona Ctrl+C para salir"
echo

while true; do
    clear
    echo "=== $(date) ==="
    echo

    # Uso de CPU
    echo "--- Uso de CPU ---"
    top -bn1 | head -n 5
    echo

    # Uso de memoria
    echo "--- Uso de Memoria ---"
    free -h
    echo

    # Espacio en disco
    echo "--- Espacio en Disco ---"
    df -h | grep -v "tmpfs"
    echo

    # Procesos que más CPU usan
    echo "--- Top 5 Procesos (CPU) ---"
    ps aux --sort=-%cpu | head -n 6
    echo

    # Actualizar cada 5 segundos
    sleep 5
done
```

### Procesador de Logs

```bash
#!/bin/bash
# Procesador de archivos de log

# Configuración
archivo_log="/var/log/apache2/access.log"
salida="informe_$(date +%Y%m%d).txt"

# Verificar si existe el archivo
if [ ! -f "$archivo_log" ]; then
    echo "Error: No se encuentra el archivo $archivo_log"
    exit 1
fi

# Crear informe
echo "Generando informe de $archivo_log..."
echo "INFORME DE ACCESO - $(date)" > "$salida"
echo "-------------------------" >> "$salida"

# Número total de solicitudes
total=$(wc -l < "$archivo_log")
echo "Total de solicitudes: $total" >> "$salida"
echo >> "$salida"

# Solicitudes por código de estado HTTP
echo "DISTRIBUCIÓN POR CÓDIGO HTTP:" >> "$salida"
grep -o " [0-9]\{3\} " "$archivo_log" | sort | uniq -c | sort -nr >> "$salida"
echo >> "$salida"

# Top 10 IPs
echo "TOP 10 DIRECCIONES IP:" >> "$salida"
grep -o "^[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}" "$archivo_log" | sort | uniq -c | sort -nr | head -n 10 >> "$salida"
echo >> "$salida"

# Top 10 páginas solicitadas
echo "TOP 10 PÁGINAS SOLICITADAS:" >> "$salida"
grep -o "GET [^ ]*" "$archivo_log" | cut -d " " -f 2 | sort | uniq -c | sort -nr | head -n 10 >> "$salida"

echo "Informe generado en $salida"
```

## Conclusión

El scripting con Bash es una herramienta poderosa para automatizar tareas, gestionar sistemas y aumentar la productividad en entornos Unix/Linux. Desde la simple ejecución de comandos hasta la creación de scripts complejos, Bash ofrece la flexibilidad necesaria para resolver una amplia variedad de problemas.

Dominar los conceptos presentados en este documento permitirá a los estudiantes:

- Interactuar eficientemente con sistemas Linux a través de la línea de comandos
- Automatizar tareas repetitivas y complejas
- Gestionar archivos, procesos y recursos del sistema
- Desarrollar soluciones personalizadas para problemas específicos

La práctica constante y la exploración de nuevos comandos y técnicas son clave para convertirse en un usuario experto de Bash. Recuerda que cada problema resuelto con un script es una oportunidad para mejorar tus habilidades y hacer tu trabajo más eficiente.cut -d " " -f 2 | sort | uniq -c | sort -nr | head -n 10 >> "$salida"

echo "Informe generado en $salida"

```

## Conclusión

El scripting con Bash es una herramienta poderosa para automatizar tareas, gestionar sistemas y aumentar la productividad en entornos Unix/Linux. Desde la simple ejecución de comandos hasta la creación de scripts complejos, Bash ofrece la flexibilidad necesaria para resolver una amplia variedad de problemas.

Dominar los conceptos presentados en este documento permitirá a los estudiantes:

- Interactuar eficientemente con sistemas Linux a través de la línea de comandos
- Automatizar tareas repetitivas y complejas
- Gestionar archivos, procesos y recursos del sistema
- Desarrollar soluciones personalizadas para problemas específicos

La práctica constante y la exploración de nuevos comandos y técnicas son clave para convertirse en un usuario experto de Bash. Recuerda que cada problema resuelto con un script es una oportunidad para mejorar tus habilidades y hacer tu trabajo más eficiente.
```
