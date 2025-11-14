# DeepPro - Portfolio Personal

Portfolio web profesional para Nicolás Andrade, consultor especializado en Business Intelligence y Gestión de Proyectos.

## 🚀 Características

- ✨ Diseño minimalista y profesional
- 🎨 Colores corporativos DeepPro (Cyan #00A9CE)
- 📱 Completamente responsive
- ⚡ Optimizado para rendimiento con Astro
- 🎯 SEO optimizado para "Power BI Chile" y "Consultoría BI"
- 🌙 Soporte para modo oscuro
- 💼 Showcase de casos de éxito reales
- 📧 Formulario de contacto funcional

## 🛠️ Stack Tecnológico

- **Framework**: [Astro](https://astro.build) 4.15
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 3.4
- **Deployment**: Vercel (recomendado)
- **Fuentes**: Inter (Google Fonts)

## 📁 Estructura del Proyecto

```
/
├── public/
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── Portfolio.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🚦 Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🎨 Personalización

### Colores

Los colores principales están definidos en `tailwind.config.mjs`:

- `deeppro-cyan`: #00A9CE (color principal)
- `deeppro-dark`: #0A192F (fondo oscuro)
- `deeppro-gray`: #8892B0 (texto secundario)
- `deeppro-light-gray`: #CCD6F6 (texto claro)

### Contenido

El contenido se puede actualizar en los siguientes archivos:

- **Hero**: `src/components/Hero.astro`
- **Sobre Mí**: `src/components/About.astro`
- **Servicios**: `src/components/Services.astro`
- **Casos de Éxito**: `src/components/Portfolio.astro`
- **Contacto**: `src/components/Contact.astro`

## 📧 Configuración del Formulario de Contacto

El formulario actualmente usa `mailto:` para enviar mensajes. Para una solución más profesional, se recomienda integrar:

- [Formspree](https://formspree.io/) - Gratuito hasta 50 envíos/mes
- [Web3Forms](https://web3forms.com/) - Alternativa gratuita
- [EmailJS](https://www.emailjs.com/) - Email directo desde el navegador

## 🌐 Deployment

### Vercel (Recomendado)

1. Sube el proyecto a GitHub
2. Importa el repositorio en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente que es un proyecto Astro
4. Deploy automático en cada push

### Netlify

```bash
npm run build
# Sube la carpeta dist/ a Netlify
```

## 📱 SEO

El sitio está optimizado para:

- "Power BI Chile"
- "Consultoría BI Chile"
- "Business Intelligence Chile"
- "Primavera P6 Chile"
- "Gestión de Proyectos"

## 📄 Licencia

© 2024 Nicolás Andrade - DeepPro. Todos los derechos reservados.

## 📞 Contacto

- **Email**: nicolas.andrade@deeppro.cl
- **Teléfono**: +569 8755 0637
- **Ubicación**: Santiago, Chile

---

Desarrollado con ❤️ usando Astro y Tailwind CSS
