
import React from 'react';

interface MessageInProps {
  msg: string;
}

const MessageIn: React.FC<MessageInProps> = ({ msg }) => {
  return (
    <div className="w-screen">
      <div className="w-fit text-lg px-3 py-2 bg-muted rounded-md my-1">
        {msg}
      </div>
    </div>
  );
}

export default MessageIn;
