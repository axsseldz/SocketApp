// Pagina principal del chat

import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

interface ServerIdPageProps {
  params: {
    serverId: string;
  }
};

const ServerIdPage = async ({
  params
}: ServerIdPageProps) => {
  const profile = await currentProfile();


  // Si no hay usuario mandarlo a la pagina de signin
  if (!profile) {
    return redirectToSignIn();
  }

  // Si hay usuario, encontrar el chat al que pertenece
  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: profile.id,
        }
      }
    },
    include: {
      channels: {
        where: {
          name: "general"
        },
        orderBy: {
          createdAt: "asc"
        }
      }
    }
  })


  const initialChannel = server?.channels[0];

  // Si no hay chats regresar null
  if (initialChannel?.name !== "general") {
    return null;
  }

  // Si hay chat, mostrar el chat general al iniciar sesion
  return redirect(`/servers/${params.serverId}/channels/${initialChannel?.id}`)
}

export default ServerIdPage;