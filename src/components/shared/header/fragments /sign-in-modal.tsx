import type { Dispatch, SetStateAction } from "react";
import { useCallback, useMemo, useState } from "react";
import Image from "next/image";

//import { signIn } from "next-auth/react";

import Modal from "@/components/ui/modal";

import { FaDiscord, FaFacebook, FaSpotify } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { SignInButton } from "./sign-in-button";


const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [signInClicked, setSignInClicked] = useState(false);

  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <Image
            src="/book.png"
            alt="Precedent logo"
            width="30"
            height="30"
            className="mr-2 rounded-sm"
          />
          <h3 className="font-display text-2xl font-bold">Quase lá...</h3>
          <p className="text-sm text-gray-500">
            Isto é estritamente para fins de demonstração - apenas seu e-mail e
            foto de perfil serão armazenados.
          </p>
        </div>

        <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
          {/*   <button
            disabled={signInClicked}
            className={`${
              signInClicked
                ? "cursor-not-allowed border-gray-200 bg-gray-100 disabled:cursor-not-allowed"
                : "border border-gray-200 bg-white text-black hover:bg-gray-50"
            } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            onClick={() => {
              setSignInClicked(true);
              // signIn("google");
            }}
          >
            {signInClicked ? (
              <LoadingDots color="#808080" />
            ) : (
              <>
                <FcGoogle className="h-7 w-7" />
                <p className="tex">Entrar com Google</p>
                <SignInButton provider="google" icon={FcGoogle} />
              </>
            )}
          </button>
 */}
          <SignInButton provider="google" icon={FcGoogle} />
          <SignInButton provider="spotify" icon={FaSpotify} color="#1DB954" />
          <SignInButton provider="facebook" icon={FaFacebook} color="#006AFF" />
          <SignInButton provider="discord" icon={FaDiscord} color="##7289DA" />
          <SignInButton provider="twitter" icon={FaXTwitter} color="#14171A" />
        </div>
      </div>
    </Modal>
  );
};

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const SignInModalCallback = useCallback(() => {
    return (
      <SignInModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    );
  }, [showSignInModal, setShowSignInModal]);

  return useMemo(
    () => ({ setShowSignInModal, SignInModal: SignInModalCallback }),
    [setShowSignInModal, SignInModalCallback]
  );
}