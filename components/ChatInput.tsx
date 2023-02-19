"use client";
import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
type Props = {
  chatId: string;
};
function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();
  const model = "text-davinci-003";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;
    const input = prompt.trim();
    setPrompt("");

    const message = createMessage(input);
    addToDatabase(message);
    const notification = toast.loading("Generating...");
    await fetch("/api/askThePrompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId: chatId,
        model: model,
        session: session,
      }),
    }).then((response) => {
      console.log(response);
      toast.success("Finished", { id: notification });
    });
  };
  async function addToDatabase(message: Message) {
    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );
  }
  function createMessage(input: string): Message {
    return {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image!,
      },
    };
  }
  return (
    <div className="bg-gray-700/70 rounded-md text-white">
      <form className="flex p-5 space-x-5" onSubmit={handleSubmit}>
        <input
          className="focus:outline-none bg-transparent flex-1"
          type="text"
          placeholder="Enter a prompt"
          value={prompt}
          onInput={(e) => setPrompt(e.currentTarget.value)}
        />
        <button className="sendButton" disabled={!prompt} type="submit">
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45 "></PaperAirplaneIcon>
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
