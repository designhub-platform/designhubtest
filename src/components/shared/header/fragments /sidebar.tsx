import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ImageIcon, LayoutDashboard, MessageSquare } from "lucide-react";
import { MdOutlineCardMembership } from "react-icons/md";

import { cn } from "@/lib/utils";
//import { GoHome } from "react-icons/go";

const routes = [
  {
    label: "Início",
    icon: Home,
    href: "/",
    color: "text-primary",
  },
  {
    label: "Conteúdos Gratuitos",
    icon: LayoutDashboard,
    href: "/signin",
    color: "text-primary",
  },
  {
    label: "Como funciona?",
    icon: MessageSquare,
    href: "/como-funciona",
    color: "text-primary",
  },

  {
    label: "Planos",
    icon: MdOutlineCardMembership,
    color: "text-primary",
    href: "/planos",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col space-y-4 bg-gradient-to-br  from-indigo-50  via-white to-cyan-100 p-8  py-4 text-white">
      <div className="flex-1  px-3 py-2">
        <div className="flex items-center text-primary">
          <Image
            alt="Logo"
            src="/book.png"
            width="30"
            height="30"
            className="mr-2 rounded-sm"
          />
          <p className="text-2xl  font-medium">Redação IA</p>
        </div>

        <div className="space-y-1 pt-12">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "group flex w-full cursor-pointer justify-start rounded-lg p-3 text-base font-medium transition hover:bg-white/10 hover:text-blue1",
                pathname === route.href
                  ? "bg-white/10 text-blue1"
                  : "text-primary"
              )}
            >
              <div className="flex flex-1 items-center">
                <route.icon
                  className={cn(
                    "mr-3 h-5 w-5 hover:text-blue1",
                    pathname === route.href ? "text-blue1" : route.color
                  )}
                />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}