
import React from 'react';

interface MessageInProps {
  msg: string;
}

const MessageOut: React.FC<MessageInProps> = ({ msg }) => {
  return (
    <div className="w-screen flex justify-end my-1">
      <div className="w-fit text-lg px-3 py-2 bg-accent rounded-md">
        {msg}
      </div>
    </div>
  )
}

export default MessageOut;
