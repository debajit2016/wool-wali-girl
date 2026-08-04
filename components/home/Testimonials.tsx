import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    quote:
      "The bouquet looked even prettier than the photos. So unique and made my day extra special!",
    name: "Priya, Bangalore",
  },
  {
    quote:
      "I ordered a custom bouquet for my sister and she absolutely loved it. Highly recommended!",
    name: "Riya, Kolkata",
  },
  {
    quote:
      "Such beautiful craftsmanship and amazing service. Will order again for sure!",
    name: "Ananya, Delhi",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="bg-[#4E3A24] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <h2 className="mb-10 font-[var(--font-heading)] text-4xl text-[#FAF0E2] md:text-5xl">
            Loved by Many
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl bg-[#F6E2C9] p-6 shadow-lg"
              >
                <div className="mb-3 flex gap-1 text-[#E8AE3F]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <p className="text-sm leading-6 text-[#5C2E1F]">
                  {t.quote}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-[#B08B4F]">
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto hidden max-w-xs rotate-[3deg] rounded-lg bg-white p-3 shadow-2xl lg:block">
          <Image
            src="/images/gallery/bouquet4.jpg"
            alt="A finished crochet bouquet, ready for delivery"
            width={400}
            height={480}
            className="rounded-md object-cover"
          />
          <div className="absolute -bottom-4 -right-4 rotate-[-4deg] rounded-md bg-[#FAF0E2] px-4 py-2 shadow-lg">
            <p className="font-[var(--font-heading)] text-[#5C2E1F]">
              Thank you! ♥
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
