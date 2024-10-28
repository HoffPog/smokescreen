import Image from "next/image";
import React from 'react';
import MyForm from "./form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'EVE Smokescreen'
}

export default function Home() {
  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">



        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

          <h1
            className="text-sky-400"
          >Would be a real shame if you wanted to know someones characterID</h1>

          <MyForm />

        </main>









        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://discord.gg/RNXJm5k7qf"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Smokescreen Discord
          </a>
        </footer>
      </div>
  );
}
