import ChatList from "@/components/chat-list";
import ChatRoom from "@/components/chat-room";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-row bg-background">
      <ChatRoom />
    </div>
  );
}
