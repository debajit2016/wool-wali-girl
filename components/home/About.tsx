import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="px-6 py-10 lg:px-10">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 rounded-[36px] bg-[#F5E6D3] px-8 py-14 md:grid-cols-[0.8fr_1fr] md:px-14">
        <div className="relative mx-auto w-full max-w-[320px] rotate-[-2deg] rounded-[24px] bg-white p-3 shadow-xl">
          <Image
            src="/images/logo/logo.png"
            alt="The maker behind Wool Wali Girl"
            width={400}
            height={400}
            className="rounded-2xl object-cover"
          />
        </div>

        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#8B9874]">
            About Me
          </p>
          <h2 className="font-[var(--font-heading)] text-4xl text-[#4A2529] md:text-5xl">
            Hi! I&apos;m the hands and heart behind Wool Wali Girl.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6B5B53]">
            I turn yarn into everlasting flowers that never fade — perfect
            for every occasion and every emotion. Every piece is handmade
            with patience, passion and lots of love.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#3F4630] px-7 py-3.5 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#4d5639]"
          >
            Know My Story
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
