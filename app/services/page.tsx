import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const popularServices = [
  { name: "Cleaning", img: "/assets/service1.png" },
  { name: "Handyman", img: "/assets/service2.png" },
  { name: "Massage", img: "/assets/service3.png" },
  { name: "Laundry", img: "/assets/service4.png" },
  { name: "Air Conditioner Cleaning", img: "/assets/service5.png" },
  { name: "Air Conditioner Technician", img: "/assets/service6.png" },
  { name: "Plumbing", img: "/assets/service7.png" },
  { name: "Tutoring", img: "/assets/service8.png" },
];

const allServices = [
  ["Service 1", "Service 4", "Service 7", "Service 10", "Service 13", "Service 16", "Service 19", "Service 22"],
  ["Service 2", "Service 5", "Service 8", "Service 11", "Service 14", "Service 17", "Service 20", "Service 23"],
  ["Service 3", "Service 6", "Service 9", "Service 12", "Service 15", "Service 18", "Service 21", "Service 24"],
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER + HERO */}
      <header className="bg-[#191BDF] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />

          {/* HERO */}
          <section className="bg-[#191BDF] text-white pt-16 pb-24 sm:pb-32 lg:pb-40 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center relative">
                {/* Left */}
                <div>
                  <div className="inline-flex items-center rounded-full bg-[#FE6807] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    SERVICES
                  </div>
                  <h1 className="mt-6 font-extrabold text-[40px] sm:text-[52px] lg:text-[60px] leading-[48px] sm:leading-[60px] lg:leading-[72px]">
                    Discover what<br />
                    you can get done<br />
                    with gigit
                  </h1>
                  <p className="mt-6 text-[20px] leading-[30px] font-medium text-white/90">
                    View our full range of services.
                  </p>
                </div>

                {/* Right */}
                <div className="relative hidden lg:flex justify-center lg:justify-end">
                  <Image
                    src="/assets/serviceloc.png"
                    alt="Office workspace"
                    width={520}
                    height={400}
                    className="relative z-10 rounded-[20px] w-full max-w-[520px]"
                  />
                </div>
              </div>
              {/* Mobile hero image anchored to bottom */}
              <div className="lg:hidden absolute bottom-6 left-1/2 -translate-x-1/2 w-[78%] max-w-[340px] z-10">
                <Image
                  src="/assets/serviceloc.png"
                  alt="Office workspace"
                  width={520}
                  height={400}
                  className="w-full h-auto rounded-[16px]"
                />
              </div>
            </div>

            {/* Wave inside hero */}
            <div className="absolute bottom-0 left-0 w-full">
              <Image src="/assets/BGWave.png" alt="Wave" width={1440} height={80} className="w-full" />
            </div>
          </section>
        </div>
      </header>

      <main>
        {/* POPULAR SERVICES */}
        <section className="bg-white pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-[#FE6807] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                IN DEMAND SERVICES
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2A3342]">
                Popular Services
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#556987] max-w-3xl mx-auto">
                Browse through our most popular categories and find the perfect person for your task
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
              {popularServices.map(({ name, img }) => (
                <Link key={name} href={`/services/${name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="flex flex-col items-center cursor-pointer group">
                    <div className="w-full aspect-[261/174] rounded-[7px] overflow-hidden">
                      <Image
                        src={img}
                        alt={name}
                        width={261}
                        height={174}
                        className="block h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="mt-3 text-center text-sm font-medium text-[#333F51]">{name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ALL SERVICES */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="mt-16 font-medium text-[30px] leading-[38px] text-[#2A3342]">
              All Services
            </h3>
            <div className="mt-4 h-[1px] w-full bg-[#D9D9D9]"></div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4">
              {allServices.map((col, ci) => (
                <div key={ci} className="space-y-4">
                  {col.map((service) => (
                    <p key={service} className="font-medium text-[20px] leading-[30px] text-[#556987] hover:text-[#191BDF] cursor-pointer transition">
                      {service}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
