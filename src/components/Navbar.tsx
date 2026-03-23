"use client";

import { useMessages } from "@/hooks/useMessages";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { unreadCount } = useMessages();

  return (
    <nav className="w-full px-6 md:px-10 py-6 relative">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          AutoMarket
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 text-gray-600 items-center">

          <Link href="/annonces" className="hover:text-black">
            Annonces
          </Link>

          <Link href="/location" className="hover:text-black">
            Location
          </Link>

          {/*  Nouveau lien */}
          <Link href="/pieces" className="hover:text-black">
            Commander une Pièce
          </Link>

          {/* Messages + badge */}
          <div className="relative">
            <Link href="/messages" className="hover:text-black">
              Messages
            </Link>

            {unreadCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </div>

        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex gap-4 items-center">

          <Link href="/auth/register" className="text-gray-600">
            S'inscrire
          </Link>

          <Link
            href="/auth/login"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            Se connecter
          </Link>

        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md mt-4 rounded-xl p-6 flex flex-col gap-4 md:hidden z-50">

          <Link href="/annonces" onClick={() => setOpen(false)}>
            Annonces
          </Link>

          <Link href="/location" onClick={() => setOpen(false)}>
            Location
          </Link>

          {/*  Pièces mobile */}
          <Link href="/pieces" onClick={() => setOpen(false)}>
            Commander une Pièce
          </Link>

          {/* Messages mobile */}
          <Link
            href="/messages"
            onClick={() => setOpen(false)}
            className="flex justify-between items-center"
          >
            Messages

            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </Link>

          <hr />

          <Link
            href="/auth/register"
            onClick={() => setOpen(false)}
            className="text-gray-600"
          >
            S'inscrire
          </Link>

          <Link
            href="/auth/login"
            onClick={() => setOpen(false)}
            className="bg-indigo-600 text-white py-2 rounded-lg text-center"
          >
            Se connecter
          </Link>

        </div>
      )}
    </nav>
  );
}
