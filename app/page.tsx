"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <>
      <div className="max-x-[1000px] h-screen mx-auto flex justify-center items-center flex-col gap-2">
        <h1 className="text-8xl uppercase font-black text-center mb-4">
          next auth
        </h1>
        <button
          onClick={() => signIn("google")}
          className="bg-gray-300 hover:bg-gray-400 rounded-md p-3"
        >
          Connecter acev Google
        </button>
        <button
          onClick={() => signIn("github")}
          className="bg-gray-300 hover:bg-gray-400 rounded-md p-3"
        >
          Connecter acev Github
        </button>
      </div>
    </>
  );
}
