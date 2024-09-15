"use client";


import type { ReactNode } from "react";
import Link from "next/link";


import { useSignInModal } from "./sign-in-modal";
import useScroll from "@/hooks/use-scroll";
import { User } from "@supabase/supabase-js";

export interface Session {
  user: User;
}

interface PreviousWritingRootProps {
  children: ReactNode;
  session: Session | null;
}

export function HeaderRoot({ children, session }: PreviousWritingRootProps) {
  const { SignInModal, setShowSignInModal } = useSignInModal();

  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <header
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "border-b border-gray-200  bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          {children}

          <div>
            {session ? (
              <Link
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                href="/home"
              >
                Corrija sua redação
              </Link>
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Corrija sua redação
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
}