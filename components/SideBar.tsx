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
          <NewChatButton />

          {loding ? (
            <span className="flex flex-col py-5 gap-y-3 justify-center items-center">
              <span className="animate-spin relative flex h-10 w-10 rounded-sm bg-white "></span>
              <p className="text-white font-bold">Loading Chats...</p>
            </span>
          ) : (
            <div>
              {chats?.docs.map((chat) => (
                <ChatRow key={chat.id} id={chat.id} />
              ))}
            </div>
          )}
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
