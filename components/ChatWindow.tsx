"use client";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";

type Props = {
  chatId: string;
};
function ChatWindow({ chatId }: Props) {
  const { data: session } = useSession();
  const [message] = useCollection(
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
  return (
    <div className=" flex-1 overflow-y-auto overflow-x-hidden">
      {message?.empty && (
        <div>
          <p className="mt-10 text-bold text-center text-white">
            Enter a prompt.
          </p>
        </div>
      )}
      {message?.docs.map((message) => (
        <Message key={message.id} message={message.data()}></Message>
      ))}
    </div>
  );
}

export default ChatWindow;
