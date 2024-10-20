import { Button } from "@/components/ui/button";
import { LinkedinLogo, Phone, XLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header
      id="header"
      className="mx-[4.5rem] my-6 mb-40 flex items-center justify-between"
    >
      <div className="flex items-center gap-4">
        <Image
          width={32}
          height={32}
          src="/dip.png"
          alt="Dipraj Girase photo"
        />
        <p className="text-sm">Dipraj Girase</p>
      </div>
      <div className="flex items-center gap-8">
        <nav>
          <ul className="flex items-center gap-8 text-sm">
            <li>Portfolio</li>
            <li>Skills</li>
            <li>About</li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/amittambulkar/"
            target="_blank"
            className="transition-colors delay-75 ease-in-out hover:text-blue-600"
          >
            <LinkedinLogo size={22} />
          </Link>
          <Link
            href="https://x.com/attambulkar"
            target="_blank"
            className="transition-colors delay-75 ease-in-out hover:text-blue-600"
          >
            <XLogo size={22} />
          </Link>
        </div>
        <div>
          <Link href="https://cal.com/amittambulkar/30min" target="_blank">
            <Button className="flex items-center gap-2">
              Let&apos;s Connect
              <Phone size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
