import Image from "next/image";

const photos = [
  "/images/gallery/bouquet1.jpg",
  "/images/gallery/bouquet2.jpg",
  "/images/gallery/bouquet3.jpg",
  "/images/gallery/bouquet4.jpg",
  "/images/gallery/bouquet1.jpg",
  "/images/gallery/bouquet2.jpg",
  "/images/gallery/bouquet3.jpg",
];

export default function LatestCreations() {
  return (
    <section id="gallery" className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-[var(--font-heading)] text-4xl text-[#4E2A1E] md:text-5xl">
          Latest Creations
        </h2>
        <a
          href="https://www.instagram.com/wool_wali_girl/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-[#5C2E1F] transition hover:text-[#C96E42]"
        >
          Follow @wool_wali_girl
          <span aria-hidden>→</span>
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {photos.map((src, i) => (
          <div
            key={i}
            className="aspect-square overflow-hidden rounded-2xl shadow-md transition duration-500 hover:-translate-y-1 hover:shadow-xl"
          >
            <Image
              src={src}
              alt="A handmade crochet flower creation"
              width={300}
              height={300}
              className="h-full w-full object-cover transition duration-700 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
