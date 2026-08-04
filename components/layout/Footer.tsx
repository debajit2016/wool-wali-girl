export default function Footer() {
  return (
    <footer className="bg-[#4E3A24] px-6 py-6 text-sm text-[#FAF0E2]/80 lg:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
        <p>© 2026 Wool Wali Girl. All rights reserved.</p>
        <p>
          Made with love in Assam, India <span className="text-[#C96E42]">♥</span>
        </p>
        <div className="flex gap-4">
          <a href="#" className="transition hover:text-white">
            Terms &amp; Conditions
          </a>
          <a href="#" className="transition hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
