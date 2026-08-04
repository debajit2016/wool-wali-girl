export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918876977638?text=Hi!%20I%20would%20like%20to%20order%20a%20crochet%20bouquet."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#1EBE5D]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7 text-white"
      >
        <path d="M12.04 2C6.51 2 2.03 6.48 2.03 12c0 1.77.46 3.49 1.34 5L2 22l5.14-1.35A9.96 9.96 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2Zm5.83 14.23c-.24.68-1.41 1.3-1.95 1.38-.5.07-1.14.1-1.84-.13-.43-.14-.98-.32-1.69-.63-2.98-1.29-4.91-4.29-5.06-4.49-.15-.2-1.21-1.61-1.21-3.07 0-1.46.76-2.18 1.03-2.48.27-.3.59-.37.79-.37.2 0 .4 0 .58.01.19.01.44-.07.69.53.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.44.5-.15.15-.31.31-.13.61.18.3.81 1.34 1.74 2.17 1.2 1.07 2.2 1.4 2.5 1.56.3.15.47.13.64-.08.17-.2.73-.85.93-1.14.2-.29.4-.24.68-.14.28.1 1.77.83 2.07.98.3.15.5.22.57.34.07.12.07.68-.17 1.36Z" />
      </svg>
    </a>
  );
}
