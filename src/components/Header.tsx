import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <header className="py-4">
        <Link href="/" className="flex justify-center items-center text-3xl h-full">
        ☕ <h1 className="text-4xl">The Coffee Feed</h1> ☕
        </Link>
      </header>
      <hr />
    </>
  );
}
