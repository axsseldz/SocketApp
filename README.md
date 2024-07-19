# Aplicación de Chat con Sockets (Español)

## Descripción

Esta aplicación de chat permite a los usuarios participar en conversaciones a través de una sala de chat general donde todos los usuarios registrados pueden participar. El proceso de registro admite OAuth utilizando Gmail o GitHub a través de Clerk. Además del chat basado en texto, la aplicación admite videollamadas tanto en grupo como uno a uno, utilizando LiveKit para la funcionalidad de videollamadas. Los usuarios también pueden subir archivos y fotos utilizando UploadThing.

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



#


# Chat Application with Sockets (English)

## Descripción

This chat application allows users to participate in conversations through a general chat room where all registered users can join. The registration process supports OAuth using Gmail or GitHub via Clerk. In addition to text-based chat, the application supports both group and one-on-one video calls, using LiveKit for video call functionality. Users can also upload files and photos using UploadThing.

### Key Features

- **General Chat Room:** All users can participate in a shared chat room.
- **One-on-One Chat:** Users can have private conversations.
- **Group Video Calls:** Users can join video calls with multiple participants.
- **One-on-One Video Calls:** Private video calls between two users.
- **File and Photo Uploads:** Users can upload files and photos.
- **Authentication:** Supports login via Gmail and GitHub using Clerk.
- **Socket.IO Integration:** Real-time chat powered by Socket.IO.
- **Technology Stack:** Next.js, TypeScript, Prisma, PostgreSQL, UploadThing, Clerk, LiveKit.

### Technology Stack

- **App:** Next.js, TypeScript, Prisma, Socket.IO
- **File Uploads:** UploadThing
- **Authentication:** Clerk
- **Video Calls::** LiveKit


# Process to Set Up and Run the Application

## Step 1: Obtain Environment Variables

1. **Clerk**:
   - Sign up at [Clerk](https://clerk.dev) and create an application.
   - Get your `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` from the Clerk dashboard.

2. **Database**:
   - Set up a PostgreSQL database. You can use services like [Heroku](https://www.heroku.com/), [Railway](https://railway.app/), or [DigitalOcean](https://www.digitalocean.com/).
   - Get your `DATABASE_URL` for PostgreSQL connection.

3. **UploadThing**:
   - Sign up at [UploadThing](https://uploadthing.com) and create an application.
   - Obtén tu `UPLOADTHING_SECRET` y `UPLOADTHING_APP_ID` from the UploadThing dashboard.

4. **LiveKit**:
   - Sign up at [LiveKit](https://livekit.io) and create an application.
   - Get your `LIVEKIT_API_KEY`, `LIVEKIT_API_SECRET`, and `NEXT_PUBLIC_LIVEKIT_URL` from the LiveKit dashboard.

## Step 2: Set Up Environment Variables

Create a `.env` file at the root of your project and add the following variables:

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

## Step 3: Run the following commands

1. Install the project dependencies:
   ```bash
   npm install
   ```
2. Initialize Prisma:
   ```bash
   npx prisma init
   ```
3. Generate the Prisma client:
   ```bash
   npx prisma generate
   ```
4. Run the initial database migration:
   ```bash
   npx prisma migrate dev --name init
   ```
5. Start the application in development mode:
   ```bash
   npm run dev
   ```



# App Preview:

**Sign up and Sign in:**
![Alt Text](https://cdn.discordapp.com/attachments/1160427026839257133/1243992721018847303/Screenshot_2024-05-25_at_11.14.01_AM.png?ex=669b57c0&is=669a0640&hm=93d8367504eab0efa8eb6a535f2f71a5b886eca1b6cf76477f54e78489302c00&)

**General Chat (Dark Mode):**
![Alt Text](https://cdn.discordapp.com/attachments/1160427026839257133/1243992720389832815/Screenshot_2024-05-25_at_11.12.51_AM.png?ex=669b57c0&is=669a0640&hm=e5d2c84a568bd009e0d0069b6283cd3190647c89a4fbb735f738be75f12c087e&)

**General Chat (Light Mode):**
![Alt Text](https://cdn.discordapp.com/attachments/1160427026839257133/1243992722176741407/Screenshot_2024-05-25_at_11.14.54_AM.png?ex=669b57c1&is=669a0641&hm=15e31c5f9a38c36e5d82f61b3170b0fdcecb082b62a757ff05ac12ff6c2a7ca3&)

**Chatting with a friend:**
![Alt Text](https://cdn.discordapp.com/attachments/1160427026839257133/1243992721589403648/Screenshot_2024-05-25_at_11.14.41_AM.png?ex=669b57c1&is=669a0641&hm=cf93ffa9a16686356ee96359a2ca14a560934a1649c85e20865f41d4ec2a68be&)

**General Video Call:**
![Alt Text](https://cdn.discordapp.com/attachments/1160427026839257133/1243993884619440269/Screenshot_2024-05-25_at_11.27.01_AM.png?ex=669b58d6&is=669a0756&hm=51729f62dfc240211946b36306b4ee3f615409bc761c0203777e837854eea168&)

**Video Call with a friend:**
![Alt Text](https://cdn.discordapp.com/attachments/1160427026839257133/1243994416167911435/Screenshot_2024-05-25_at_11.29.29_AM.png?ex=669b5955&is=669a07d5&hm=7faaf0284cbea9ec88240e90030ac34c79477045fb73867e19140684ad98db46&)

