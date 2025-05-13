# 🚀 Guía para Iniciar un Proyecto con fb-modules

Este proyecto proporciona una manera rápida y sencilla de comenzar a desarrollar una API utilizando **Node.js**, **Express**, **Sequelize** y el paquete **[fb-modules](https://www.npmjs.com/package/fb-modules)**.  
Con un solo comando podrás generar la estructura base para tu aplicación y comenzar a crear módulos de forma eficiente. 🎉

## ✨ Características Incluidas

Algunas de las características que incluye este proyecto son:

- 📂 **Estructura de carpetas**: Organiza tu código de manera eficiente.
- 🛠️ **Configuración de Sequelize**: Conexión a la base de datos y modelos predefinidos.
- 🌐 **Configuración de Express**: Middleware y rutas básicas.
- 📄 **Configuración de Swagger**: Documentación de la API.
- 🔑 **Configuración de dotenv**: Manejo de variables de entorno.
- 🔄 **Configuración de nodemon**: Reinicio automático del servidor durante el desarrollo.
- 🧩 **fb-modules**: Podrás crear módulos completos para tu API de manera sencilla, que incluyen controladores, rutas, modelos y migraciones. Te recomendamos leer la documentación de [fb-modules](https://www.npmjs.com/package/fb-modules) para entender cómo funciona.

---

## 📋 Requisitos Previos

Asegúrate de tener instalados:

- Node.js v18 o superior – [Descargar Node.js](https://nodejs.org/)
- npm (v6 o superior) o yarn
- Una base de datos MySQL. Si deseas una base de datos diferente a MySQL, puedes cambiar la configuración en el archivo `src/database/sequelize.js`.

---

## 📦 Instalación

Crea un nuevo proyecto de entorno API utilizando el siguiente comando:

```bash
npx create-fb-api <mi-funbase-api>
```

🔄 Reemplaza `mi-funbase-api` con el nombre de tu proyecto.

También puedes clonar el repositorio manualmente o usarlo como plantilla en GitHub:  
[🔗 Funbase API Template](https://github.com/Joregesosa/funbase-api-template)

---

## ⚙️ Uso

Después de crear tu proyecto, navega al directorio del proyecto e inicia el servidor de desarrollo con los siguientes pasos:

1. Encuentra un archivo `.env_example` en la raíz del proyecto, renómbralo a `.env` y configura las variables de entorno necesarias para tu proyecto.

    Las variables de entorno más relevantes son las relacionadas con la base de datos y JWT:

    - `JWT_SECRET`: Clave secreta para la firma de tokens JWT.
    - `DB_HOST`: Host de la base de datos.
    - `DB_USER`: Usuario de la base de datos.
    - `DB_PASSWORD`: Contraseña de la base de datos.
    - `DB_NAME`: Nombre de la base de datos.
    - `DB_PORT`: Puerto de la base de datos.
    - `DB_DIALECT`: Dialecto de la base de datos.

2. Las dependencias necesarias se instalarán automáticamente al crear el proyecto. Si no es así, instálalas manualmente:

    ```bash
    # Navega al directorio del proyecto.
    cd <mi-funbase-api>
    # Instala las dependencias si no se instalaron automáticamente.
    npm install  
    # Para iniciar el servidor de desarrollo.
    npm run dev
    ```

🚀 Esto iniciará el servidor de desarrollo y podrás comenzar a trabajar en tu proyecto.

---

## 🤝 Contribuir

¿Quieres contribuir? ¡Genial! 🎉  
Haz un fork del repositorio, realiza tus cambios y envía un pull request. Todas las contribuciones son bienvenidas. 💡

---

## 📜 Licencia

Este proyecto está licenciado bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles. 📝

---

¡Gracias por usar este proyecto! 💻✨
