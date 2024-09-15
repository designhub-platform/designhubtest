"use client";

import type { Provider } from "@supabase/supabase-js";
import type { ElementType } from "react";
import { Button } from "@/components/ui/button";

import { useFormStatus } from "react-dom";
import { IconType } from "react-icons/lib";
import LoadingDots from "@/components/ui/icons/loading-dots";
import { createClient } from "@/lib/supabase/server";

type Props = {
  type?: "signin" | "signup";
  provider: Provider;
  icon: IconType | ElementType;
  color?: string;
};

export const SignInButton: React.FC<Props> = ({
  type,
  provider,
  icon: Icon,
  color,
}) => {
  //const [signInClicked, setSignInClicked] = useState(false);
  const supabase = createClient();

  const handleSignIn = async () => {
    let options = {};

    // Verifica se o provedor é 'google' e adiciona as opções específicas
    if (provider === "google") {
      options = {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      };
    }

    const {} = await supabase.auth.signInWithOAuth({
      provider: provider,
      options,
    });
  };

  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      className={`${
        pending
          ? "border-gray-200 bg-gray-100"
          : "border border-gray-200 bg-white text-black hover:bg-gray-50"
      } disabled:cursor-not-allowed flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
      type="submit"
      onClick={() => {
        void handleSignIn();
        // setSignInClicked(true);
      }}
    >
      {pending ? (
        <LoadingDots color="#808080" />
      ) : (
        <>
          <div className="flex gap-2">
            <Icon color={color} className="w-4" />
            <p>
              {type === "signup"
                ? `Criar com ${provider}`
                : `Entrar com ${provider}`}
            </p>
          </div>
        </>
      )}
    </Button>
  );
};