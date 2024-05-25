import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

import { ModeToggle } from "@/components/mode-toggle";
import { currentProfile } from "@/lib/current-profile"


export const NavigationSidebar = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  return (
    <div className="pl-3 pt-3 pb-5 flex items-center justify-between">
      <UserButton
        afterSignOutUrl="/"
        appearance={{
          elements: {
            avatarBox: "h-[48px] w-[48px]"
          }
        }}
      />
      <ModeToggle />
    </div>
  )
}