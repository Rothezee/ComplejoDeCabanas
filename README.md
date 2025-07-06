# Complejo de Cabañas

Una aplicación web moderna para la gestión y reserva de cabañas, construida con React, TypeScript, Tailwind CSS y Supabase.

## Características

- 🏠 **Catálogo de Cabañas**: Visualización elegante de cabañas disponibles con imágenes, descripciones y precios
- 📅 **Sistema de Reservas**: Formulario completo de reservas con selección de fechas y validación
- 🌐 **Recorridos Virtuales**: Tours virtuales 360° de las cabañas
- 📱 **Diseño Responsivo**: Optimizado para todos los dispositivos
- 🎨 **Interfaz Moderna**: Diseño elegante con animaciones y micro-interacciones
- 🔒 **Validación de Formularios**: Validación completa del lado del cliente
- 💳 **Cálculo de Precios**: Cálculo automático de precios con tasas incluidas

## Tecnologías Utilizadas

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Iconos**: Lucide React
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form + Zod
- **Build Tool**: Vite

## Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd complejo-de-cabanas
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```

4. Configura tu proyecto de Supabase y actualiza las variables en `.env`:
```
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
```

5. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── ui/              # Componentes de interfaz reutilizables
│   ├── layout/          # Componentes de layout (Header, Footer)
│   ├── sections/        # Secciones de la página principal
│   └── booking/         # Componentes relacionados con reservas
├── lib/                 # Utilidades y configuración
├── types/               # Definiciones de tipos TypeScript
└── App.tsx             # Componente principal
```

## Funcionalidades Principales

### 1. Catálogo de Cabañas
- Grid responsivo de cabañas disponibles
- Información detallada: precio, capacidad, amenidades
- Imágenes de alta calidad
- Filtros y búsqueda (próximamente)

### 2. Sistema de Reservas
- Formulario completo con validación
- Selección de fechas con restricciones
- Cálculo automático de precios
- Resumen de reserva en tiempo real

### 3. Recorridos Virtuales
- Tours 360° interactivos
- Controles de navegación
- Lista de tours disponibles
- Estadísticas de visualización

### 4. Servicios
- Grid de servicios disponibles
- Iconos descriptivos
- Información detallada de cada servicio

## Base de Datos

La aplicación utiliza Supabase con las siguientes tablas principales:

- `cabins`: Información de las cabañas
- `reservations`: Reservas de los huéspedes
- `amenities`: Amenidades disponibles
- `cabin_amenities`: Relación entre cabañas y amenidades

## Próximas Funcionalidades

- [ ] Autenticación de usuarios
- [ ] Panel de administración
- [ ] Sistema de pagos integrado
- [ ] Notificaciones por email
- [ ] Calendario de disponibilidad
- [ ] Reviews y calificaciones
- [ ] Integración con mapas
- [ ] Chat en vivo

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.