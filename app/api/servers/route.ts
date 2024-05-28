// Endpoint para el manejo del chat, por ahora solo es uno solo

import { NextResponse } from "next/server";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const server = await db.server.update({
      where: {
        inviteCode: "b94a113c-a3a5-4241-9628-f9a43a052903",
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

    return NextResponse.json(server);
  } catch (error) {
    console.log("[SERVERS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}