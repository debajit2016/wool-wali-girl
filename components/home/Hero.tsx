import Image from "next/image";
import { CameraIcon, ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { StarIcon, HeartIcon, TruckIcon } from "@heroicons/react/24/solid";

const badges = [
  { icon: StarIcon, label: "100+", sub: "Happy Customers" },
  { icon: HeartIcon, label: "Made with", sub: "Love" },
  { icon: TruckIcon, label: "Pan India", sub: "Delivery" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-[1300px] items-center gap-12 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10 lg:py-20"
    >
      {/* Left Content */}
      <div className="max-w-xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#B08B4F]">
          Handmade Crochet, Made to Order
        </p>

        <h1 className="font-[var(--font-heading)] text-5xl leading-[1.1] text-[#4E2A1E] md:text-6xl">
          Bringing blooms
          <br />
          <span className="text-[#C96E42] italic">to life,</span>
          <br />
          one stitch
          <br />
          at a time.
        </h1>

        <p className="mt-7 max-w-lg text-lg leading-8 text-[#7A5D4A]">
          Handmade crochet flower bouquets, custom pieces, DIY patterns and
          thoughtful gifts — stitched with love.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="https://www.instagram.com/wool_wali_girl/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 whitespace-nowrap rounded-full bg-[#C96E42] px-7 py-3.5 font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#b35f38] hover:shadow-xl"
          >
            <CameraIcon className="h-5 w-5 shrink-0" />
            Order on Instagram
          </a>

          <a
            href="https://wa.me/918876977638?text=Hi!%20I%20would%20like%20to%20order%20a%20crochet%20bouquet."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-[#C96E42] px-7 py-3.5 font-medium text-[#C96E42] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C96E42]/10"
          >
            <ChatBubbleOvalLeftIcon className="h-5 w-5 shrink-0" />
            Chat on WhatsApp
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
          {badges.map((b) => (
            <div key={b.sub} className="flex items-center gap-2.5">
              <b.icon className="h-5 w-5 shrink-0 text-[#B08B4F]" />
              <p className="whitespace-nowrap text-sm leading-tight text-[#5C2E1F]">
                <span className="block font-medium">{b.label}</span>
                <span className="text-[#7A5D4A]">{b.sub}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="relative mx-auto w-full max-w-[460px] lg:mx-0 lg:ml-auto">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] shadow-2xl">
          <Image
            src="/images/hero/hero.jpg"
            alt="Handmade crochet flower bouquet"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 460px"
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-5 left-6 rotate-[-3deg] rounded-lg bg-[#FAF0E2] px-5 py-3 shadow-xl">
          <p className="font-[var(--font-heading)] text-lg text-[#5C2E1F]">
            Handmade
          </p>
          <p className="text-xs text-[#7A5D4A]">with love ♥</p>
        </div>
      </div>
    </section>
  );
}
