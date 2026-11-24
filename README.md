
# Dragon Ball Explorer

Aplicación web inspirada en el universo de **Dragon Ball Z**, desarrollada para explorar personajes, planetas y transformaciones. Permite descubrir información del universo Dragon Ball mediante una interfaz interactiva, filtros dinámicos y un sistema de favoritos persistente. [Preview](https://dragonball-explorer.vercel.app/dashboard/characters)

##  Tecnologías utilizadas

-   **Next.js:** framework de React y App Router.
    
-   **React:** construcción de interfaces mediante componentes.
    
-   **TypeScript:** tipado estático y mayor seguridad en el código.
    
-   **Tailwind CSS:** estilos y diseño responsive.
    
-   **Redux Toolkit:** gestión del estado global.
    
-   **React Redux:** integración de Redux con React.
    
-   **LocalStorage:** persistencia de los personajes favoritos.
    
-   **Lucide React:** iconografía.
    
-   **Dragon Ball API:** obtención de datos del universo Dragon Ball.
    

## Funcionalidades

### Personajes

-   Listado de personajes del universo Dragon Ball.
    
-   Visualización de información y detalles individuales.
    
-   Búsqueda de personajes por nombre.
    
-   Filtros por raza, género y afiliación.
    
-   Ordenamiento por abecedario.
    
-   Acceso a las transformaciones de cada personaje.
    
-   Posibilidad de agregar y quitar personajes de favoritos.
    

### Planetas

-   Listado de planetas obtenidos desde la API.
    
-   Visualización de información individual de cada planeta.
    
-   Página de detalles para consultar sus características.
    
-   Información sobre los habitantes de cada planeta.
    

### Transformaciones

-   Exploración de las diferentes transformaciones.
    
-   Información sobre cada transformación.
    
-   Filtros para encontrar transformaciones según el personaje.
    
-   Visualización de sus características y niveles de poder cuando están disponibles.
    

### Favoritos

-   Sistema para guardar personajes favoritos.
    
-   Gestión centralizada mediante Redux Toolkit.
    
-   Persistencia de favoritos utilizando LocalStorage.
    
-   Recuperación de los favoritos al recargar la página.
    
-   Eliminación individual de favoritos.
    
-   Opción para limpiar toda la lista.
    

### Búsqueda y filtros

-   Búsqueda dinámica.
    
-   Filtros combinables según las características de los elementos.
    
-   Ordenamiento de resultados.
    
-   Actualización de los resultados sin necesidad de recargar la página.
    
-   Limpieza de filtros para volver al listado original.
    

### Diseño responsive

-   Interfaz adaptable a diferentes tamaños de pantalla.
    
-   Diseño pensado para escritorio, tablets y dispositivos móviles.
    
-   Sidebar de navegación para acceder a las diferentes secciones.
    
-   Componentes reutilizables para mantener una interfaz consistente.
    

## Conceptos y herramientas aplicados

Durante el desarrollo se trabajaron diferentes conceptos del ecosistema React y Next.js:

### Next.js y renderizado

-   App Router y organización de rutas.
    
-   Server Components y Client Components.
    
-   Renderizado del lado del servidor (SSR).
    
-   Generación estática (SSG).
    
-   Generación de rutas dinámicas.
    
-   `generateStaticParams` para generar páginas estáticas de rutas dinámicas.
    
-   `generateMetadata` para metadatos dinámicos.
    
-   Configuración de metadata para mejorar la información de las páginas.
    
-   Manejo de estados de carga y páginas no encontradas.
    
-   Uso de `Suspense`  para escenarios de renderizado dinámico.
    
-   Estrategias de caché y revalidación de datos.
    

### Consumo de APIs

-   Consumo de una API REST mediante Fetch API.
    
-   Funciones reutilizables para obtener datos.
    
-   Manejo de respuestas y errores.
     
-   Tipado de respuestas mediante interfaces de TypeScript.
    
-   Separación de la lógica de acceso a datos de los componentes visuales.
    

### React y TypeScript

-   Componentes reutilizables.

-   Props e interfaces.
    
-   Hooks de React (`useState`, `useEffect`).
    
-   Custom Hooks.
    
-   Manejo de eventos.
    
-   Renderizado condicional.
    
-   Métodos de arrays (`map`, `filter`, `some`, `sort`).
    
-   Type Guards y uniones de tipos.
    
-   Organización y reutilización de lógica.
    

### Redux Toolkit y persistencia

-   Configuración de un Store global.
    
-   Creación de Slices y Reducers.
    
-   Uso de `createSlice` y `PayloadAction`.
    
-   Acciones para agregar, eliminar y limpiar favoritos.
    
-   Selectores para consultar el estado global.
    
-   Hooks tipados para Redux.
    
-   Sincronización entre Redux y LocalStorage.
    
-   Persistencia y recuperación de datos al recargar la aplicación.
    

### Estilos y experiencia de usuario

-   Tailwind CSS.
    
-   Diseño responsive.
    
-   CSS Grid y Flexbox.
    
-   Componentes reutilizables.
    
-   Transiciones y efectos visuales.
    
-   Organización de estilos y layouts.
    
## API

Los datos se obtienen desde:

[Dragon Ball API](https://web.dragonball-api.com/)


## Instalación y ejecución

Clonar el repositorio:

```bash
git clone https://github.com/facudaddese/api-dbz.git
```

Ingresar al directorio:

```bash
cd api-dbz
```

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

