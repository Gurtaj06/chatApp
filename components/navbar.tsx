import { AvatarIcon, ChatBubbleIcon, GearIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "./mode-toggle";


export default function Navbar() {
  return (
    <main className="flex flex-col items-center justify-between bg-primary-foreground gap-8 p-4 pb-6 w-fit h-screen">
      <div className="flex flex-col items-center gap-8">
        <AvatarIcon className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all mb-4" />
        <ChatBubbleIcon className=" h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
        <ModeToggle />
      </div>
      <GearIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
    </main>
  )
}
