# Chocolates Indemini Baez - Sitio Web de Pedidos

## Descripción del Proyecto

Sitio web interactivo para una chocolatería artesanal que permite explorar productos, ver detalles y realizar pedidos con sistema de carrito de compras y gestión de inventario en tiempo real.

## Características Principales

### Catálogo de Productos
- 4 productos disponibles con precios desde $1.00 hasta $15.99
- Grid responsive con tarjetas interactivas
- Sistema de modales con información detallada

### Gestión de Inventario
- Control de stock en tiempo real
- Indicadores visuales: En Stock, Casi Agotado, Sin Stock
- Límite automático de cantidad según disponibilidad

### Carrito de Compras
- Añadir productos con cantidades personalizadas
- Cálculo automático de subtotales y total general
- Actualización en tiempo real

### Formulario de Contacto
- Validación de campos (nombre, email, teléfono)
- Mensajes de error específicos
- Feedback visual de errores

## Tecnologías Utilizadas

- HTML5 - Estructura
- CSS3 - Diseño y animaciones
- JavaScript ES6+ - Lógica de negocio
- jQuery 3.6.0 - Manipulación DOM

## Estructura de Archivos
```
proyecto/
├── index.html
├── imagenes/
│   ├── portada.jpg
│   ├── bombones.jpg
│   ├── 255wuf_u_400x400.jpg
│   └── cajabombones.jpg
└── README.md
```

## Instalación

1. Clonar el repositorio
2. Asegurarse de tener las imágenes en la carpeta `imagenes/`
3. Abrir `index.html` en el navegador

No requiere servidor web ni instalación adicional.

## Uso

1. Navegar por el catálogo de productos
2. Click en un producto para ver detalles
3. Seleccionar producto y cantidad
4. Añadir al carrito
5. Completar formulario de contacto
6. Enviar pedido

## Validaciones Implementadas

- Nombre: solo letras y espacios
- Email: formato válido
- Teléfono: campo requerido
- Stock: control automático de disponibilidad

## Responsive Design

- Desktop: >768px
- Mobile/Tablet: ≤768px con diseño adaptable

## Solución de Problemas

**Imágenes no cargan:** Verificar nombres de archivos y carpeta `imagenes/`

**Carrito no actualiza:** Revisar consola (F12) y conexión a CDN de jQuery

**Formulario no valida:** Verificar que jQuery está cargado correctamente

## Futuras Mejoras

- Integración con backend
- Sistema de pagos online
- Base de datos para stock
- Panel de administración
- Integración con WhatsApp/Email
