import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  ChatBubbleBottomCenterTextIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(id));
  }, [pathname]);
  return (
    <div>
      <Link
        href={`/chat/${id}`}
        className={`chatRow justify-center $ ${active && "bg-gray-700/30"}`}
      >
        <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-white" />
        <p className="flex-1 hiden md:inline-flex truncate ">New Chat</p>
        <TrashIcon className="h-5 w-5 text-gray-500 hover:text-red-500/80" />
      </Link>
    </div>
  );
}

export default ChatRow;
