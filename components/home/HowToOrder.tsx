import {
  CameraIcon,
  PencilSquareIcon,
  HeartIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    icon: CameraIcon,
    title: "DM / Chat",
    description: "Reach out on Instagram or WhatsApp with your idea.",
  },
  {
    icon: PencilSquareIcon,
    title: "Discuss & Customize",
    description: "We discuss your preferences, colours, budget and timeline.",
  },
  {
    icon: HeartIcon,
    title: "Handmade with Love",
    description: "Your order is crafted carefully, just for you.",
  },
  {
    icon: ArchiveBoxIcon,
    title: "Packed & Delivered",
    description: "Thoughtfully packed and delivered to your doorstep.",
  },
];

export default function HowToOrder() {
  return (
    <section
      id="how-to-order"
      className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10"
    >
      <h2 className="mb-16 text-center font-[var(--font-heading)] text-4xl text-[#4A2529] md:text-5xl">
        How to Order
      </h2>

      <div className="grid gap-12 md:grid-cols-4">
        {steps.map((step, i) => (
          <div key={step.title} className="relative text-center">
            {i < steps.length - 1 && (
              <div className="absolute right-[-1.5rem] top-9 hidden h-px w-12 border-t border-dashed border-[#D9C9B8] md:block" />
            )}
            <div className="mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#F6DAD3]">
              <step.icon className="h-8 w-8 text-[#C9635A]" />
            </div>
            <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#8B9874]">
              Step {i + 1}
            </p>
            <h3 className="mb-2 font-[var(--font-heading)] text-xl text-[#4A2529]">
              {step.title}
            </h3>
            <p className="mx-auto max-w-[220px] text-sm leading-6 text-[#6B5B53]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
