"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
function Login() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <Image
        src="/images/ChatGPT-Logo.png"
        width={300}
        height={300}
        alt="ChatGPT Logo"
        priority={true}
      />
      <button
        className="font-bold animate-bounce text-3xl"
        onClick={() => signIn("google")}
      >
        Sign In
      </button>
    </div>
  );
}

export default Login;
