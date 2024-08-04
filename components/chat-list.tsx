import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CheckIcon } from "@radix-ui/react-icons";


export default function ChatList() {
  return (
    <main className="flex flex-col items-start gap-4 p-4 pb-6 w-fit h-screen">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Messages</h3>
      <Separator className="mt-2" />
      <Input className="bg-secondary" placeholder="Search" />
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="../public/vercel.svg" />
          <AvatarFallback>GU</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="scroll-m-20 text-lg font-regular tracking-tight">Gurtaj Singh</h4>
          <p className="flex items-center gap-2 text-muted-foreground"><CheckIcon className="h-[1.25rem] w-[1.25rem]" /> Hello World!</p>
        </div>
      </div>
    </main>
  )
}
