import Image from "next/image";
import { CameraIcon } from "@heroicons/react/24/outline";

export default function CTABanner() {
  return (
    <section id="contact" className="px-6 pb-6 lg:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-8 rounded-[32px] bg-[#F3D9BC] px-8 py-14 text-center shadow-inner md:flex-row md:justify-between md:text-left">
        <div className="max-w-xl">
          <h2 className="font-[var(--font-heading)] text-3xl text-[#4E2A1E] md:text-4xl">
            Let&apos;s create something beautiful together.
          </h2>
          <p className="mt-3 text-[#7A5D4A]">
            Every bouquet is handmade, stitched with love and crafted just
            for you.
          </p>
          <a
            href="https://www.instagram.com/wool_wali_girl/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-[#C96E42] px-7 py-3.5 font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#b35f38] hover:shadow-xl"
          >
            <CameraIcon className="h-5 w-5" />
            Start Your Custom Order
          </a>
        </div>

        <Image
          src="/images/logo/logo.png"
          alt="Wool Wali Girl"
          width={140}
          height={140}
          className="hidden rounded-full shadow-lg md:block"
        />
      </div>
    </section>
  );
}
