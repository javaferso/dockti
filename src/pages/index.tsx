import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Contacto from "@/components/sections/Contacto";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
      </main>
      <section className="min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Contacto</h2>
          <form className="space-y-4">
            
          </form>
        </div>
      </section>
    </div>
  );
}
