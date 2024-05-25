# Aplicación de Chat con Sockets 

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



# App Preview:

**Sign up y Sign in:**
![Alt Text](https://media.discordapp.net/attachments/1160427026839257133/1243992721018847303/Screenshot_2024-05-25_at_11.14.01_AM.png?ex=66537e00&is=66522c80&hm=c9bfd55d3393c09daff0939adb58dbadcb560aadf3e506571ca4b4e121356d89&=&format=webp&quality=lossless&width=1978&height=1064)

**Chat General (Dark Mode):**
![Alt Text](https://media.discordapp.net/attachments/1160427026839257133/1243992720389832815/Screenshot_2024-05-25_at_11.12.51_AM.png?ex=66537e00&is=66522c80&hm=abac1bac0eb8d256c75702c13772f2f2ed18263de84beee6cb563e750a81f014&=&format=webp&quality=lossless&width=1964&height=1064)

**Chat General (Light Mode):**
![Alt Text](https://media.discordapp.net/attachments/1160427026839257133/1243992722176741407/Screenshot_2024-05-25_at_11.14.54_AM.png?ex=66537e01&is=66522c81&hm=1f1989ba3849a8a4ceed4e73e92690d9e8d70ec4ab7370b17bc6de85a2925aa5&=&format=webp&quality=lossless&width=1972&height=1064)

**Chat Uno a Uno:**
![Alt Text](https://media.discordapp.net/attachments/1160427026839257133/1243992721589403648/Screenshot_2024-05-25_at_11.14.41_AM.png?ex=66537e01&is=66522c81&hm=a740c3467838321dbf7ee982873e1a2064ebbbab07d6328ff59c183cfbc52b15&=&format=webp&quality=lossless&width=1974&height=1064)

**Video General:**
![Alt Text](https://media.discordapp.net/attachments/1160427026839257133/1243993884619440269/Screenshot_2024-05-25_at_11.27.01_AM.png?ex=66537f16&is=66522d96&hm=90460683ff483db0d3df71b34c70fd37c5c076d8641b52e38f097370662e5b5d&=&format=webp&quality=lossless&width=1974&height=1064)

**Video Uno a Uno:**
![Alt Text](https://media.discordapp.net/attachments/1160427026839257133/1243994416167911435/Screenshot_2024-05-25_at_11.29.29_AM.png?ex=66537f95&is=66522e15&hm=a9fded6f05d66df4e60137b7999e326577148d0ad026f3766830ebf91068eda8&=&format=webp&quality=lossless&width=1100&height=594)




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
