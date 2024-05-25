"use client";

import { useSocket } from "@/components/providers/socket-provider";
import { Badge } from "@/components/ui/badge";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge
        variant="outline"
        className="bg-[#ef3c3c] text-white border-none"
      >
        Socket off
      </Badge>
    )
  }

  return (
    <Badge
      variant="outline"
      className="bg-[#5ce0ccd1] text-white border-none"
    >
      Socket on
    </Badge>
  )
}