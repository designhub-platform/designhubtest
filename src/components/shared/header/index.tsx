//import { createClient } from "@/lib/supabase/server";

import { Header } from "./fragments ";

//import { redirect } from "next/navigation";
//import type { User } from "@supabase/supabase-js";

export async function AppHeader() {
  //const supabase = createClient();

 // const { data, error } = await supabase.auth.getUser();
/* 
  if (error || !data?.user) {
    redirect("/");
  } */


  const data = null
  
  return (
    <Header.Root session={data}>
      <Header.MenuBarButton />
      <Header.Content />
      <Header.DesktopMenuBar />
    </Header.Root>
  );
}