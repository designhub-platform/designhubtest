import Image from "next/image";
import Link from "next/link";

export function HeaderContent() {
  return (
    <Link href="/" className="font-display flex items-center text-2xl">
      <Image
        src="/book.png"
        alt="Precedent logo"
        width="30"
        height="30"
        className="mr-2 rounded-sm"
      ></Image>
      <p>Design Hub</p>
    </Link>
  );
}