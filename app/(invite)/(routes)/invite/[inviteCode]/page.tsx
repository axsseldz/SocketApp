import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";

interface InviteCodePageProps {
  params: {
    inviteCode: string;
  };
};

const InviteCodePage = async ({
  params
}: InviteCodePageProps) => {
  // Acceder a la informacion del usuario actual logeado
  const profile = await currentProfile();

  // Sino esta logeado, usuario es redirigido a la pagina para ingresar
  if (!profile) {
    return redirectToSignIn();
  }

  // Sino hay invitacion valida se regresa a la pagina inicial
  if (!params.inviteCode) {
    return redirect("/");
  }

  // Llamada API para el primer chat del usuario
  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: params.inviteCode,
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  });

  // Si tiene chats se le envia a ese mismo
  if (existingServer) {
    return redirect(`/servers/${existingServer.id}`);
  }

  // Si se le fue enviado un link de invitacion se agrega a dicho chat
  const server = await db.server.update({
    where: {
      inviteCode: params.inviteCode,
    },
    data: {
      members: {
        create: [
          {
            profileId: profile.id,
          }
        ]
      }
    }
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return null;
}

export default InviteCodePage;