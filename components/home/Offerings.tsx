import Image from "next/image";

const offerings = [
  {
    title: "Flower Bouquets",
    description: "Handmade bouquets for every special occasion.",
    price: "From ₹699",
    image: "/images/gallery/bouquet1.jpg",
  },
  {
    title: "Custom Crochet Flowers",
    description: "Pick your flowers, colours & style.",
    price: "From ₹499",
    image: "/images/gallery/bouquet2.jpg",
  },
  {
    title: "DIY Patterns",
    description: "Step-by-step patterns to make your own.",
    price: "From ₹199",
    image: "/images/gallery/bouquet3.jpg",
  },
];

export default function Offerings() {
  return (
    <section id="offerings" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10">
      <div className="mb-14 text-left">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#8B9874]">
          What I Offer
        </p>
        <h2 className="font-[var(--font-heading)] text-4xl text-[#4A2529] md:text-5xl">
          Handmade with love,
          <br />
          crafted to last forever.
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {offerings.map((item) => (
          <div
            key={item.title}
            className="group overflow-hidden rounded-[28px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={400}
                className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-7">
              <h3 className="mb-2 font-[var(--font-heading)] text-2xl text-[#4A2529]">
                {item.title}
              </h3>
              <p className="text-[#6B5B53]">{item.description}</p>
              <p className="mt-4 font-[var(--font-heading)] text-xl text-[#C9635A]">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
