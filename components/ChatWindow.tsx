"use client";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect, useRef } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";

type Props = {
  chatId: string;
};
function ChatWindow({ chatId }: Props) {
  const { data: session } = useSession();
  const chatWindowRef = useRef(document.createElement("div") as HTMLDivElement);
  const [messages] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createdAt", "asc")
      )
  );
  useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }),
    [messages];

  return (
    <div
      ref={chatWindowRef}
      className=" flex-1 overflow-y-auto overflow-x-hidden"
    >
      {messages?.empty && (
        <div>
          <p className="mt-10 text-bold text-center text-white">
            Enter a prompt.
          </p>
        </div>
      )}
      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()}></Message>
      ))}
    </div>
  );
}

export default ChatWindow;
