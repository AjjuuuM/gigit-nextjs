import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-5">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/logo.png"
          alt="Gigit logo"
          width={48}
          height={48}
          className="h-12 w-auto rounded-full bg-white/10 p-1"
        />
      </Link>

      <div className="hidden md:flex items-center gap-10 text-[16px] font-medium text-white">
        <Link
          href="/services"
          className="transition duration-300 hover:text-[#FF7A00]"
        >
          Services
        </Link>
        <Link
          href="/how-it-works"
          className="transition duration-300 hover:text-[#FF7A00]"
        >
          Who we are
        </Link>
        <Link
          href="/#become-hero"
          className="transition duration-300 hover:text-[#FF7A00]"
        >
          Become a Hero
        </Link>
      </div>

      <div className="flex items-center">
        <button className="inline-flex items-center justify-center rounded-full bg-[#FE6807] px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide text-white shadow-soft hover:bg-[#ff7f2e] transition">
          TH / EN
        </button>
      </div>
    </nav>
  );
}
