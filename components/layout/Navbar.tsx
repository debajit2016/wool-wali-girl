import Image from "next/image";
import { CameraIcon } from "@heroicons/react/24/outline";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Offerings", href: "#offerings" },
  { label: "Gallery", href: "#gallery" },
  { label: "How to Order", href: "#how-to-order" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 px-5">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between rounded-full border border-[#E9DCC8] bg-white/80 px-5 py-2.5 shadow-lg backdrop-blur-md">
        <a href="#home" className="flex items-center gap-2.5">
          <Image
            src="/images/logo/logo.png"
            alt="Wool Wali Girl"
            width={44}
            height={44}
            priority
            className="rounded-full"
          />
          <div className="leading-tight">
            <p className="font-[var(--font-heading)] text-lg text-[#5C2E1F]">
              Wool Wali Girl
            </p>
          </div>
        </a>

        <ul className="hidden gap-7 lg:flex">
          {links.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium text-[#5C2E1F]/80 transition duration-300 hover:text-[#C96E42]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://www.instagram.com/wool_wali_girl/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[#4E3A24] px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5c452c] lg:flex"
        >
          <CameraIcon className="h-4 w-4 shrink-0" />
          DM on Instagram
        </a>
      </nav>
    </header>
  );
}
