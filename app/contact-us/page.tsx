import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ContactUsPage() {
  return (
    <div className="bg-white min-h-screen">
      <main>
        <section className="bg-[#F7F8F9] pt-24 pb-28">
          <div className="max-w-6xl mx-auto px-6">
            {/* Badge */}
            <div className="inline-flex items-center bg-[#FE6807] text-white text-xs font-medium uppercase rounded-full px-3 py-1">
              CONTACT US
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-[48px] leading-[60px] font-bold text-[#2A3342] tracking-[-0.02em]">
              Let&apos;s stay connected
            </h2>

            {/* Subtext */}
            <p className="mt-4 max-w-[750px] text-[20px] leading-[30px] font-medium text-[#556987]">
              It&apos;s easy to stay connected with gigit. Contact us on Line or follow us on our social media channels.
            </p>

            {/* Content Grid */}
            <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div className="flex flex-col justify-center space-y-14">
                {/* LINE */}
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-[#FE6807] flex items-center justify-center">
                    <Image
                      src="/assets/icons/vector.png"
                      alt="Line Icon"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-[30px] leading-[38px] font-bold text-[#2A3342]">Line</h4>
                    <p className="mt-2 text-[20px] leading-[30px] font-medium text-[#556987]">@gigit</p>
                  </div>
                </div>

                {/* SOCIALS */}
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-[#FE6807] flex items-center justify-center">
                    <Image
                      src="/assets/icons/outline.png"
                      alt="Social Icon"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-[30px] leading-[38px] font-bold text-[#2A3342]">Socials</h4>
                    <div className="mt-4 flex items-center gap-9 text-[#FE6807] text-xl">
                      {["facebook-f", "twitter", "instagram", "linkedin-in"].map((icon) => (
                        <Link key={icon} href="#" className="hover:opacity-80 transition">
                          <i className={`fa-brands fa-${icon}`}></i>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Map */}
              <div>
                <div className="rounded-xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
                  <Image
                    src="/assets/map.png"
                    alt="Map"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
