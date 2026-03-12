# 🎄 Generador de QR — Edición Navidad

Landing page para generar códigos QR a partir de URLs.  
Estética **Coca-Cola vintage navideña** con animaciones CSS y Santa Claus interactivo.

---

## ✨ Features

| Feature | Detalle |
|---|---|
| Generación QR | 100% cliente, sin backend, instantáneo |
| Descarga PNG | Un click, nombre de archivo inteligente |
| Copiar URL | Clipboard API con feedback visual |
| Countdown 60s | Anillo animado + advertencia urgente |
| Auto-reset | A los 60s la página vuelve al estado inicial |
| Nieve animada | 16 copos CSS, sin JavaScript pesado |
| Santa Claus | SVG animado, guiña el ojo cada 6s |
| Responsive | Mobile-first, funciona en cualquier pantalla |

---

## 🛠 Stack

```
Frontend:     Next.js 14 (App Router)
Estilos:      Tailwind CSS + CSS custom (globals.css)
QR:           qrcode (npm, client-side only)
Tipografía:   Pacifico (Google Fonts via next/font)
Hosting:      Vercel (zero-config)
```

---

## 📁 Estructura del Proyecto

```
qr-generator/
├── app/
│   ├── layout.js          # Root layout + Pacifico font
│   ├── page.js            # Página principal (server component)
│   └── globals.css        # Design system, animaciones, tema Coca-Cola
├── components/
│   ├── QRGenerator.jsx    # Lógica QR + countdown + acciones (client)
│   ├── SantaClaus.jsx     # SVG animado estilo Coca-Cola vintage
│   └── SnowParticles.jsx  # 16 copos de nieve CSS
├── public/                # Assets estáticos (agregar favicon aquí)
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

---

## 💻 Setup Local

### Requisitos
- Node.js **18+**
- npm / yarn / pnpm

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/qr-generator.git
cd qr-generator

# 2. Instalar dependencias
npm install

# 3. Levantar servidor de desarrollo
npm run dev
```

Abrir **http://localhost:3000** en el navegador.

### Scripts disponibles

```bash
npm run dev     # Servidor de desarrollo con hot-reload
npm run build   # Build de producción
npm run start   # Servidor de producción (después de build)
npm run lint    # Chequeo de código con ESLint
```

---

## 🐙 GitHub — Crear Repositorio

### Paso 1: Crear repo en GitHub.com

1. Ir a [github.com/new](https://github.com/new)
2. **Repository name:** `qr-generator` (o el nombre que quieras)
3. **Visibility:** Public o Private
4. ❌ NO marcar "Add a README file" (ya tenemos uno)
5. Click **"Create repository"**

### Paso 2: Subir el código

```bash
# Dentro de la carpeta del proyecto:

# Inicializar git
git init

# Agregar todos los archivos
git add .

# Primer commit
git commit -m "🎄 Initial commit: QR Generator Navidad"

# Conectar con GitHub (reemplazá TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/qr-generator.git

# Subir
git push -u origin main
```

### Paso 3: Verificar

Ir a `https://github.com/TU_USUARIO/qr-generator` y confirmar que los archivos están.

### Flujo de trabajo para cambios futuros

```bash
git add .
git commit -m "✨ descripción del cambio"
git push
```

---

## 🚀 Deploy en Vercel

### Opción A — Deploy automático desde GitHub (recomendado)

1. Ir a [vercel.com](https://vercel.com) → **Sign up / Login** con tu cuenta de GitHub
2. Click **"Add New Project"**
3. Click **"Import Git Repository"** y seleccioná `qr-generator`
4. Vercel detecta automáticamente que es Next.js
5. Dejar toda la configuración por defecto
6. Click **"Deploy"**
7. En ~60 segundos tenés tu URL pública 🎉

**A partir de ahora, cada `git push` despliega automáticamente.**

---

### Opción B — Deploy con Vercel CLI

```bash
# 1. Instalar Vercel CLI globalmente
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy desde la carpeta del proyecto
vercel

# 4. Seguir las instrucciones interactivas:
#    - ¿Vincular a proyecto existente? → N
#    - ¿Nombre del proyecto? → qr-generator (Enter)
#    - ¿Directorio del código? → ./ (Enter)
#    - Override settings? → N

# 5. Para deploy de producción
vercel --prod
```

### Variables de entorno

Este proyecto **no requiere variables de entorno**.  
Todo corre en el cliente (browser).

---

## 🎨 Personalización

### Colores (en `app/globals.css`)

```css
:root {
  --coca-red:   #E3001B;   /* Rojo principal */
  --coca-dark:  #C8102E;   /* Rojo oscuro / fondo */
  --coca-deep:  #A50010;   /* Rojo profundo / sombras */
  --coca-light: #FF2A3C;   /* Rojo claro / hover */
}
```

### Tiempo del countdown (en `components/QRGenerator.jsx`)

```js
const TOTAL_SECS = 60   // ← cambiá este número
```

### Tamaño del QR generado

```js
const dataUrl = await QRCode.toDataURL(url, {
  width: 320,   // ← en px
  ...
})
```

---

## 🔮 Mejoras Futuras

| Prioridad | Feature | Descripción |
|---|---|---|
| 🔴 Alta | Favicon navideño | SVG de Santa o QR como favicon |
| 🔴 Alta | OG Image | Meta tags para compartir en redes |
| 🟡 Media | Personalizar QR | Color, logo central, nivel de error |
| 🟡 Media | Historial local | Últimos 5 QRs en localStorage |
| 🟡 Media | Formato SVG | Descargar como SVG además de PNG |
| 🟢 Baja | Analytics | Vercel Analytics (1 línea de código) |
| 🟢 Baja | i18n | Inglés / Español toggle |
| 🟢 Baja | Dark mode | Modo oscuro alternativo |
| 🔵 Pro | QR con logo | Embeber logo/imagen en el centro del QR |
| 🔵 Pro | Short URL | Integrar bit.ly/tinyurl antes de generar QR |
| 🔵 Pro | Share page | URL única compartible con el QR ya generado |

---

## 🧠 Arquitectura de Decisiones

| Decisión | Elección | Motivo |
|---|---|---|
| QR generación | Client-side | Más rápido, sin costos de servidor, sin latencia |
| Animaciones | CSS puro | Sin dependencias, mejor performance |
| Santa Claus | SVG inline | Escalable, animable con CSS, sin assets externos |
| Font | Pacifico via next/font | Cargada con estrategia `swap`, sin layout shift |
| Framework | Next.js App Router | SSR listo para SEO, deploy trivial en Vercel |

---

## 📄 Licencia

MIT — Libre para uso personal y comercial.
