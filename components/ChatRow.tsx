"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useSession } from "next-auth/react";

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const { data: session } = useSession();
  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(id));
  }, [pathname]);

  const removeChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    router.replace("/");
  };
  return (
    <div>
      <Link
        href={`/chat/${id}`}
        className={`chatRow justify-center $ ${active && "bg-gray-700/30"}`}
      >
        <ChatBubbleLeftIcon className="h-5 w-5 text-white" />
        <p className="flex-1 hiden md:inline-flex truncate ">New Chat</p>
        <TrashIcon
          onClick={removeChat}
          className="h-5 w-5 text-gray-500 hover:text-red-500/80"
        />
      </Link>
    </div>
  );
}

export default ChatRow;
