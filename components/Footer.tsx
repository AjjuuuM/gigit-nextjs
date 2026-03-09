import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#191BDF] text-white pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-8 pb-8">
          {/* Column 1 */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/logo.png"
                alt="Gigit logo"
                width={32}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="mt-3 max-w-[217px] text-[18px] leading-[28px] text-white">
              Get anything done,<br />
              right when you need it.
            </p>
          </div>

          {/* Column 2 */}
          <div className="lg:col-span-3">
            <h3 className="text-[16px] font-semibold text-white">About us</h3>
            <ul className="mt-4 space-y-3 text-[16px] leading-6 font-medium text-white/90">
              <li><Link href="/how-it-works" className="hover:text-white">Who we are</Link></li>
              <li><Link href="/contact-us" className="hover:text-white">Contact us</Link></li>
              <li><Link href="/#become-hero" className="hover:text-white">Become a gigit hero</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white">Policies</h3>
            <ul className="mt-4 space-y-3 text-[16px] leading-6 font-medium text-white/90">
              <li><Link href="/terms-conditions" className="hover:text-white">Terms &amp; Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/cancellation-policy" className="hover:text-white">Cancellation Policy</Link></li>
              <li><Link href="/community-guidelines" className="hover:text-white">Community Guidelines</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="lg:col-span-3 w-fit flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <Link href="#">
                <Image
                  src="/assets/GooglePlay.png"
                  alt="Get it on Google Play"
                  width={156}
                  height={46}
                  className="h-[46px] w-[156px]"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/assets/AppStore.png"
                  alt="Download on the App Store"
                  width={156}
                  height={46}
                  className="h-[46px] w-[156px]"
                />
              </Link>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex items-center gap-4 text-white text-[18px]">
              <Link href="#" className="hover:opacity-80 transition">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 text-center">
          <p className="text-[14px] leading-[20px] font-medium text-white">
            © 2028 gigit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
