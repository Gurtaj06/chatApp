"use client"

import { DotFilledIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import MessageIn from "./inMessage";
import MessageOut from "./outMessage";

export default function ChatRoom() {
  const [messages, setMessages] = useState<{ msg: string; type: 'in' | 'out' }[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:8080/hello")
        const data = await res.text()

        console.log(data)
      }
      catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])
  const handleSend = () => {
    if (currentMessage.trim() === "") return;

    // Add the message to the list (assuming it's an outgoing message)
    setMessages([...messages, { msg: currentMessage, type: 'out' }]);

    // Reset the input
    setCurrentMessage("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(event.target.value);
  }


  return (
    <main className="flex flex-col justify-between items-start gap-4 p-4 pb-6 w-fit h-screen">

      {/*Header*/}

      <div className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="../public/vercel.svg" />
          <AvatarFallback>GU</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="scroll-m-20 text-lg font-regular tracking-tight">Gurtaj Singh</h4>
          <p className="flex items-center"><DotFilledIcon className="h-[1.25rem] w-[1.25rem] text-emerald-400" /> Online</p>
        </div>
      </div>


      {/*Main Chat Room*/}
      <ScrollArea className="h-full">
        {messages.map((message, index) =>
          message.type === 'in' ? (
            <MessageIn key={index} msg={message.msg} />
          ) : (
            <MessageOut key={index} msg={message.msg} />
          )
        )}
      </ScrollArea>

      <div className="w-full flex items-center gap-4">
        <Input
          className="bg-secondary p-6"
          placeholder="Type a message"
          value={currentMessage}
          onChange={handleInputChange}
        />
        <Button className="p-6" onClick={handleSend}>Send</Button>
      </div>
    </main >
  )
}
