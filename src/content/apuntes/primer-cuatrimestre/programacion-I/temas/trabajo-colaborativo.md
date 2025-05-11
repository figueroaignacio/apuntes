---
title: Trabajo Colaborativo
description: Resumen sobre Git y GitHub, conceptos, uso, etc.
published: true
toc:
  visible: false
---

## Git y GitHub

### ¿Qué es Git?

Git es un sistema de control de versiones distribuido que permite rastrear cambios en archivos a lo largo del tiempo. Fue creado por Linus Torvalds en 2005 para el desarrollo del kernel de Linux.

### ¿Qué es GitHub?

GitHub es una plataforma en la nube que aloja repositorios Git y agrega funcionalidades para facilitar el trabajo colaborativo, como seguimiento de problemas, solicitudes de cambios, revisión de código y más.

### Diferencias entre Git y GitHub

- **Git**: Es el sistema de control de versiones que se instala localmente en tu computadora.
- **GitHub**: Es un servicio en la nube que utiliza Git y agrega interfaces visuales y herramientas para la colaboración.

---

## Fundamentos de Git

### Conceptos clave

- **Repositorio**: Carpeta donde Git guarda el historial de versiones de un proyecto.
- **Commit**: Captura del estado del proyecto en un momento específico.
- **Branch (Rama)**: Línea independiente de desarrollo.
- **Merge**: Acción de combinar cambios de diferentes ramas.
- **Clone**: Copia local de un repositorio remoto.
- **Push**: Enviar cambios locales al repositorio remoto.
- **Pull**: Traer cambios del repositorio remoto al local.
- **Fork**: Copia de un repositorio de otro usuario en tu cuenta de GitHub.

### Áreas de Git

1. **Working Directory**: Donde trabajas con tus archivos.
2. **Staging Area (Index)**: Área donde preparas los cambios para un commit.
3. **Repository**: Donde se almacenan los commits.

## Flujo de trabajo básico

### Ciclo básico de trabajo individual

1. Modificar archivos en tu directorio de trabajo
2. Preparar (stage) los cambios que quieres comprometer
3. Confirmar (commit) los cambios en el repositorio

### Flujo de trabajo colaborativo típico

1. Clonar el repositorio o actualizar tu copia local (`git pull`)
2. Crear una rama para tus cambios (`git branch` o `git checkout -b`)
3. Hacer cambios y commits en esa rama
4. Subir tu rama al repositorio remoto (`git push`)
5. Crear una Pull Request en GitHub
6. Después de revisión, mezclar (merge) los cambios a la rama principal

## Comandos esenciales de Git

### Configuración inicial

```bash
# Configurar nombre de usuario
git config --global user.name "Tu Nombre"

# Configurar email
git config --global user.email "tu@email.com"

# Ver configuración
git config --list
```

### Crear y clonar repositorios

```bash
# Inicializar un repositorio nuevo
git init

# Clonar un repositorio existente
git clone https://github.com/usuario/repositorio.git
```

### Gestión de cambios

```bash
# Ver estado de archivos
git status

# Añadir archivos al área de staging
git add archivo.txt
git add .  # Añadir todos los archivos

# Crear un commit con los cambios en staging
git commit -m "Mensaje descriptivo del cambio"

# Ver historial de commits
git log
git log --oneline  # Formato resumido
```

### Gestión de ramas

```bash
# Listar ramas
git branch

# Crear una rama nueva
git branch nombre-rama

# Cambiar a una rama
git checkout nombre-rama

# Crear y cambiar a una rama en un solo paso
git checkout -b nombre-rama

# Eliminar una rama
git branch -d nombre-rama
```

### Sincronización con repositorios remotos

```bash
# Añadir un repositorio remoto
git remote add origin https://github.com/usuario/repositorio.git

# Ver repositorios remotos
git remote -v

# Enviar cambios al repositorio remoto
git push origin nombre-rama

# Obtener cambios del repositorio remoto
git pull origin nombre-rama

# Actualizar referencias del repositorio remoto
git fetch
```

### Combinación de cambios

```bash
# Fusionar otra rama a la rama actual
git merge nombre-rama

# Aplicar cambios de otra rama sobre la actual
git rebase nombre-rama
```

### Deshacer cambios

```bash
# Descartar cambios en el directorio de trabajo
git checkout -- archivo.txt

# Quitar archivos del área de staging
git reset HEAD archivo.txt

# Deshacer el último commit (manteniendo los cambios)
git reset --soft HEAD~1

# Deshacer el último commit (descartando los cambios)
git reset --hard HEAD~1

# Crear un nuevo commit que revierte otro commit
git revert hash-del-commit
```

## Trabajo colaborativo en GitHub

### Pull Requests

- **Propósito**: Proponer cambios y solicitar que alguien revise y fusione tus cambios en la rama principal.
- **Proceso**:
  1. Hacer push de tu rama a GitHub
  2. En GitHub, ir al repositorio y hacer clic en "Pull Request"
  3. Seleccionar la rama base y la rama con tus cambios
  4. Describir los cambios y crear la Pull Request
  5. Otros pueden revisar, comentar y aprobar tus cambios
  6. Después de la aprobación, se fusionan los cambios

### Issues

- **Propósito**: Rastrear tareas, mejoras, y bugs del proyecto.
- **Características**:
  - Pueden asignarse a contribuidores
  - Pueden etiquetarse para organización
  - Permiten discusiones sobre problemas específicos
  - Se pueden vincular a Pull Requests

### Forks

- **Propósito**: Crear una copia personal de un repositorio de otro usuario.
- **Uso común**:
  1. Hacer fork del repositorio original
  2. Clonar tu fork localmente
  3. Crear una rama para tus cambios
  4. Hacer cambios y push a tu fork
  5. Crear Pull Request al repositorio original

## Resolución de conflictos

### ¿Qué es un conflicto?

Un conflicto ocurre cuando Git no puede fusionar automáticamente los cambios porque las mismas líneas de código han sido modificadas de formas diferentes en las ramas que intentas combinar.

### Identificación de conflictos

Git indicará los conflictos en los archivos. Los marcadores de conflicto se verán así:

```
<<<<<<< HEAD
// Tu versión del código
=======
// La otra versión del código
>>>>>>> nombre-de-rama
```

### Pasos para resolver conflictos

1. Identificar los archivos con conflictos (`git status`)
2. Abrir los archivos y editar manualmente para resolver los conflictos
3. Eliminar los marcadores de conflicto y dejar el código como quieres que quede
4. Añadir los archivos resueltos (`git add archivo-con-conflicto`)
5. Completar el merge o rebase (`git commit` o `git rebase --continue`)

## Buenas prácticas

### Para commits

- Haz commits pequeños y frecuentes con un propósito específico
- Escribe mensajes descriptivos siguiendo convenciones (ej: "Añade función de login")
- Separa cambios lógicamente distintos en commits diferentes

### Para ramas

- Usa una rama `main` o `master` estable
- Crea ramas para características, correcciones o experimentos
- Elimina ramas después de fusionarlas
- Nombra las ramas de forma descriptiva (ej: `feature/login-page`, `fix/navbar-bug`)

### Para equipos

- Define un flujo de trabajo claro (ej: GitFlow, GitHub Flow)
- Escribe documentación clara en el README
- Usa Pull Requests para revisión de código
- Mantén actualizada tu copia local con `git pull` frecuentes
- Comunica los cambios importantes al equipo

### Comandos avanzados

- `git stash`: Guarda cambios temporalmente
- `git cherry-pick`: Aplica commits específicos a tu rama actual
- `git bisect`: Encuentra en qué commit se introdujo un bug
- `git reflog`: Historial de referencias
- `git submodule`: Gestiona subproyectos dentro de un repositorio
