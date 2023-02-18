import React from "react";
import ChatInput from "../../../components/ChatInput";
import ChatWindow from "../../../components/ChatWindow";

type Props = {
  params: {
    id: string;
  };
};
function ChatPage({ params: { id } }: Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Message window */}
      <ChatWindow chatId={id}></ChatWindow>

      {/* input area */}
      <ChatInput chatId={id}></ChatInput>
    </div>
  );
}

export default ChatPage;
