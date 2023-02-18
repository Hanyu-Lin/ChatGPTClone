"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import NewChatButton from "./NewChatButton";
import { useCollection } from "react-firebase-hooks/firestore";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
function SideBar() {
  const { data: session } = useSession();

  const [chats, loding, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "desc")
      )
  );
  return (
    <div className="flex flex-col p-2 h-screen">
      <div className="flex-1">
        <div>
          {/* new chat button */}
          <NewChatButton />

          <div>{/* select models */}</div>
          {/* the chat list, all the rows*/}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <button className=" logOutButton" onClick={() => signOut()}>
          <ArrowRightOnRectangleIcon className=" h-5 w-5" />
          <p>Log Out</p>
        </button>
      )}
    </div>
  );
}

export default SideBar;
