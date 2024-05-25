# Aplicación de Chat con Sockets y Videollamadas

## Descripción

Esta aplicación de chat permite a los usuarios participar en conversaciones a través de una sala de chat general donde todos los usuarios registrados pueden participar. El proceso de registro admite OAuth utilizando Gmail o GitHub a través de Clerk. Actualmente, el acceso al chat está restringido a enlaces de invitación. Además del chat basado en texto, la aplicación admite videollamadas tanto en grupo como uno a uno, utilizando LiveKit para la funcionalidad de videollamadas. Los usuarios también pueden subir archivos y fotos utilizando UploadThing.

### Características Principales

- **Sala de Chat General:** Todos los usuarios pueden participar en una sala de chat compartida.
- **Chat Uno a Uno:** Los usuarios pueden tener conversaciones privadas.
- **Videollamadas en Grupo:** Los usuarios pueden unirse a videollamadas con múltiples participantes.
- **Videollamadas Uno a Uno:** Videollamadas privadas entre dos usuarios.
- **Carga de Archivos y Fotos:** Los usuarios pueden subir archivos y fotos.
- **Autenticación:** Admite inicio de sesión a través de Gmail y GitHub utilizando Clerk.
- **Integración con Socket.IO:** Chat en tiempo real impulsado por Socket.IO.
- **Stack Tecnológico:** Next.js, TypeScript, Prisma, PostgreSQL, UploadThing, Clerk, LiveKit.

### Stack Tecnológico

- **App:** Next.js, TypeScript, Prisma, Socket.IO
- **Subida de Archivos:** UploadThing
- **Autenticación:** Clerk
- **Videollamadas:** LiveKit



# Proceso para Configurar y Ejecutar la Aplicación

## Paso 1: Obtener las Variables de Entorno

1. **Clerk**:
   - Regístrate en [Clerk](https://clerk.dev) y crea una aplicación.
   - Obtén tu `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` y `CLERK_SECRET_KEY` desde el dashboard de Clerk.

2. **Base de Datos**:
   - Configura una base de datos PostgreSQL. Puedes usar servicios como [Heroku](https://www.heroku.com/), [Railway](https://railway.app/), o [DigitalOcean](https://www.digitalocean.com/).
   - Obtén tu `DATABASE_URL` para la conexión con PostgreSQL.

3. **UploadThing**:
   - Regístrate en [UploadThing](https://uploadthing.com) y crea una aplicación.
   - Obtén tu `UPLOADTHING_SECRET` y `UPLOADTHING_APP_ID` desde el dashboard de UploadThing.

4. **LiveKit**:
   - Regístrate en [LiveKit](https://livekit.io) y crea una aplicación.
   - Obtén tu `LIVEKIT_API_KEY`, `LIVEKIT_API_SECRET`, y `NEXT_PUBLIC_LIVEKIT_URL` desde el dashboard de LiveKit.

## Paso 2: Configurar las Variables de Entorno

Crea un archivo `.env` en la raíz de tu proyecto y agrega las siguientes variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=tu_clerk_publishable_key
CLERK_SECRET_KEY=tu_clerk_secret_key

DATABASE_URL=tu_database_url
UPLOADTHING_SECRET=tu_uploadthing_secret
UPLOADTHING_APP_ID=tu_uploadthing_app_id

LIVEKIT_API_KEY=tu_livekit_api_key
LIVEKIT_API_SECRET=tu_livekit_api_secret
NEXT_PUBLIC_LIVEKIT_URL=tu_livekit_url
```

## Paso 3: Ejecuta los siguientes comandos

1. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```
2. Inicializa Prisma:
   ```bash
   npx prisma init
   ```
3. Genera el cliente de Prisma::
   ```bash
   npx prisma generate
   ```
4. Ejecuta la migración inicial de la base de datos:
   ```bash
   npx prisma migrate dev --name init
   ```
5. Inicia la aplicación en modo de desarrollo:
   ```bash
   npm run dev
   ```
