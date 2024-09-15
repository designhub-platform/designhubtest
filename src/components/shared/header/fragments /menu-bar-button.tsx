"use client";

import { useEffect, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";

export function MenuBarButton() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center md:hidden">
      <Sheet>
        <SheetTrigger className="focus:none">
          <HiOutlineMenuAlt2 size={40} className="text-primary" />
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
}