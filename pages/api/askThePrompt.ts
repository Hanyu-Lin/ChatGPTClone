// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import adminDB from "../../firebaseAdmin";
import queryApi from "../../utils/chatQueryApi";
import admin from "firebase-admin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;
  if (!prompt) {
    res.status(400).json({ answer: "Invalid prompt" });
    return;
  }
  if (!chatId) {
    res.status(400).json({ answer: "Invalid chat id" });
    return;
  }
  const response = await queryApi(prompt, model);
  const message: Message = {
    text: response || "Couldn't generate a answer!",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar: "/images/bot.jpg",
    },
  };

  await adminDB
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
