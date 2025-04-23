# ChatGPT Frontend

Este es el frontend de la aplicación ChatGPT, desarrollado con React, Vite y Tailwind CSS. Proporciona una interfaz de usuario intuitiva para interactuar con la API de ChatGPT.

## Tecnologías utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario
- **Vite**: Herramienta de construcción que proporciona un entorno de desarrollo más rápido
- **Tailwind CSS**: Framework de CSS utilitario para diseño responsive
- **Axios**: Cliente HTTP para realizar peticiones a la API
- **React Icons**: Biblioteca de iconos para React

## Estructura del proyecto

```
frontend/
├── public/
│   └── robot.svg               # Ícono de la aplicación
├── src/
│   ├── components/
│   │   ├── ChatPrompt.jsx      # Componente principal del chat
│   │   └── Header.jsx          # Componente de cabecera
│   ├── App.css                 # Estilos específicos de la aplicación
│   ├── App.jsx                 # Componente principal
│   ├── index.css               # Estilos globales y configuración de Tailwind
│   └── main.jsx                # Punto de entrada de React
├── .gitignore                  # Archivos a ignorar por git
├── index.html                  # Plantilla HTML
├── package.json                # Dependencias y scripts
├── postcss.config.js           # Configuración de PostCSS
├── README.md                   # Este archivo
├── tailwind.config.js          # Configuración de Tailwind CSS
└── vite.config.js              # Configuración de Vite
```

## Requisitos previos

- Node.js (v14 o superior)
- npm o yarn

## Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/devmiguelgomez/chatgptfront.git
   cd chat-gpt-app/chatgptback
   ```


3. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución

### Modo desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

### Construir para producción:
```bash
npm run build
```

### Previsualizar la versión de producción:
```bash
npm run preview
```

## Características

- **Interfaz de chat intuitiva**: Diseño similar a aplicaciones de mensajería populares
- **Indicadores de carga**: Muestra cuándo el sistema está procesando una solicitud
- **Diseño responsive**: Funciona en dispositivos móviles y de escritorio
- **Envío con Enter**: Permite enviar mensajes presionando Enter (Shift+Enter para nueva línea)
- **Formateo de texto automático**: Muestra correctamente textos con múltiples párrafos
- **Scroll automático**: Se desplaza automáticamente a los nuevos mensajes
- **Tema visual atractivo**: Diseño con gradientes y efectos visuales modernos

## Personalización

### Colores y tema

Puedes modificar los colores y el tema editando el archivo `tailwind.config.js`. El proyecto utiliza una combinación de colores púrpura e índigo que puedes ajustar según tus preferencias.

### Comportamiento del chat

El componente principal `ChatPrompt.jsx` controla la funcionalidad del chat. Puedes modificar:

- El número máximo de tokens en la respuesta
- El comportamiento de auto-scroll
- El formateo de los mensajes
- Los efectos visuales de carga

## Conexión con el backend

El frontend está configurado para conectarse a un backend desplegado en Vercel:

```javascript
const res = await axios.post('https://chatgptback.vercel.app/api/chat', { prompt })
```

Para desarrollo local, modifica la URL en `ChatPrompt.jsx` o utiliza el proxy configurado en `vite.config.js`.

## Estilos

El proyecto utiliza Tailwind CSS para los estilos, con algunas personalizaciones adicionales en:

- `src/index.css`: Configuración global de Tailwind y estilos base
- `src/App.css`: Animaciones y estilos específicos de la aplicación

## Despliegue

Este frontend puede desplegarse en plataformas como:

- **Vercel**: Compatible con Vite, despliegue automático
- **Netlify**: Despliegue sencillo con soporte para SPA
- **GitHub Pages**: Requiere configuración adicional

## Mejores prácticas implementadas

- **Componentes reutilizables**: Estructura modular para facilitar mantenimiento
- **Estados y efectos optimizados**: Uso adecuado de hooks de React
- **UI/UX mejorada**: Animaciones sutiles, feedback visual para acciones
- **Manejo de errores**: Feedback al usuario cuando ocurren problemas
- **Renderizado condicional**: Diferentes vistas según el estado de la aplicación
