import { BottomMenu } from "@/components/shared/bottom-menu";
import { unstable_setRequestLocale } from "next-intl/server";

//import { AppHeader } from "@/components/shared/header";
//import { cn } from "@/lib/utils";

interface PagesLayoutProps {
 children: React.ReactNode;
  params: { locale: string }
}

export default async function PagesLayout({ children,params }: PagesLayoutProps) {
  unstable_setRequestLocale(params.locale)
 return (
  <>
   <main className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br  from-indigo-50 via-white to-cyan-100 py-32">
    {children}
   </main>
   <BottomMenu />
  </>
 );
}
