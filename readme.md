# Portafolio personal con Flask

Este proyecto es un portafolio personal desarrollado con **Python + Flask**, pensado para presentar mi perfil profesional, experiencia, proyectos y un formulario de contacto funcional. La aplicación combina HTML, CSS, JavaScript y una pequeña capa backend con almacenamiento en SQLite.

## 🌐 Demo en producción

- 🚀 **URL de la app:** [**https://portfolio-personal-4ewx.onrender.com**](https://portfolio-personal-4eux.onrender.com)
- Proyecto desplegado en Render

## 🚀 Descripción
La aplicación renderiza la página principal del portafolio y ofrece una ruta dedicada al formulario de contacto. Los mensajes enviados se validan y se guardan en una base de datos local SQLite, lo que permite mantener un registro simple de consultas o mensajes del sitio.

## ✨ Funcionalidades
- Navbar con enlaces internos a las secciones del sitio
- Sección principal con presentación personal
- Área “Sobre mí” con información profesional y tecnologías
- Sección de experiencia y herramientas
- Galería de proyectos recientes
- Formulario de contacto con validación de campos obligatorios
- Guardado de mensajes en SQLite
- Estructura modular con templates y archivos estáticos

## 🛠️ Tecnologías utilizadas
- **Python**
- **Flask**
- **SQLite**
- **HTML5**
- **CSS3**
- **JavaScript**
- **Bootstrap 5**
- **Bootstrap Icons**
- **Google Fonts**

## 📁 Estructura del proyecto
- `app.py` → Aplicación principal de Flask
- `database.db` → Base de datos SQLite para contacto
- `templates/index.html` → Página principal del portafolio
- `templates/contacto.html` → Formulario de contacto
- `static/contacto.js` → Lógica del formulario
- `static/estilos/style.css` → Estilos generales
- `static/estilos/contac.css` → Estilos del formulario
- `static/estilos/imagenes/` → Recursos visuales del sitio

## ▶️ Cómo ejecutar el proyecto localmente
### 1. Crear entorno virtual
```bash
python -m venv venv
```

### 2. Activar entorno virtual
Windows:
```bash
venv\Scripts\activate
```

### 3. Instalar dependencias
```bash
pip install flask flask-cors
```

### 4. Ejecutar la aplicación
```bash
python app.py
```

### 5. Abrir en el navegador
```bash
http://localhost:5000/
```

También podés acceder al formulario en:
```bash
http://localhost:5000/contacto
```

## 📬 Formulario de contacto
El formulario valida los campos obligatorios (`nombre`, `email` y `mensaje`) y almacena la información en SQLite. Si faltan datos o el envío no es válido, la API responde con un mensaje de error JSON.

## 👨‍💻 Autor
**Ezequiel Ramírez**

## 📌 Nota
Este proyecto fue desarrollado como una demostración funcional y de aprendizaje. En un entorno de producción, se recomienda desplegarlo en un servicio confiable y utilizar una base de datos persistente para garantizar estabilidad, disponibilidad y un mejor rendimiento.

