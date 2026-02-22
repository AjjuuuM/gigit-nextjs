import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import WaveDivider, { WaveDividerTop } from "@/components/WaveDivider";

export default async function ServiceLocationPage({
  params,
}: {
  params: Promise<{ category: string; location: string }>;
}) {
  const { category, location } = await params;
  const categoryName = category
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const locationName = location
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const districts = [
    "District 1", "District 2", "District 3", "District 4",
    "District 5", "District 6", "District 7", "District 8",
    "District 9", "District 10", "District 11", "District 12",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER + HERO */}
      <header className="bg-[#191BDF] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
          <section className="relative overflow-hidden pt-20 pb-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16">
                <div className="text-white max-w-[540px]">
                  <div className="inline-flex items-center bg-[#FE6807] text-white text-[12px] font-medium uppercase px-3 py-[4px] rounded-full">
                    WELCOME
                  </div>
                  <h1 className="mt-6 font-extrabold text-[44px] sm:text-[52px] lg:text-[60px] leading-[52px] sm:leading-[60px] lg:leading-[72px] tracking-[-0.02em]">
                    Find a verified {categoryName} in {locationName} in minutes
                  </h1>
                  <p className="mt-6 text-[20px] leading-[30px] font-medium text-white/90">
                    Finding a reliable {categoryName} in {locationName} shouldn&apos;t be a full-time job. At Gigit, we&apos;ve simplified the process by vetting local professionals across {locationName}, ensuring you get high-quality results without the usual stress.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Image src="/assets/serviceloc.png" alt="Service location" width={450} height={500} className="w-full max-w-[450px]" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </header>

      <WaveDivider />

      <main>
        {/* BENEFITS / WHY HIRE */}
        <section className="bg-white py-[100px]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-bold text-[48px] leading-[60px] tracking-[-0.02em] text-[#2A3342] max-w-[846px] mx-auto">
              Benefits of hiring a {categoryName} on gigit
            </h2>
            <div className="mt-[60px] grid grid-cols-1 md:grid-cols-3 gap-24 items-start">
              {[
                { icon: "/assets/icons/4.png", title: "Set your own budget" },
                { icon: "/assets/icons/2.png", title: "Escrow payments" },
                { icon: "/assets/icons/5.png", title: "Verified pros" },
              ].map(({ icon, title }) => (
                <div key={title} className="flex flex-col items-center">
                  <div className="w-[64px] h-[64px] bg-[#FE6807] rounded-[6px] flex items-center justify-center">
                    <Image src={icon} alt="" width={32} height={32} className="w-[32px] h-[32px] object-contain" />
                  </div>
                  <h3 className="mt-[24px] text-[24px] leading-[32px] font-bold text-[#2A3342]">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POPULAR DISTRICTS */}
        <section className="relative overflow-hidden">
          <WaveDividerTop />
          <div className="bg-[#191BDF] text-white pt-[88px] pb-[140px]">
            <div className="max-w-[1140px] mx-auto px-6">
              <div className="inline-flex items-center bg-[#FE6807] text-white text-[12px] font-medium uppercase rounded-full px-[8px] py-[2px]">
                OUR LOCATIONS
              </div>
              <h2 className="mt-[20px] text-[48px] leading-[60px] font-bold tracking-[-0.02em] text-white max-w-[522px]">
                Popular Districts
              </h2>
              <p className="mt-[24px] text-[20px] leading-[30px] font-medium text-white/90 max-w-[1140px]">
                Gigit bridges the gap between you and skilled {categoryName} service providers throughout {locationName}&apos;s busiest urban hubs. Simply list your project to start receiving bids from local experts.
              </p>
              <div className="mt-[80px] grid grid-cols-1 md:grid-cols-3 gap-[40px]">
                {[
                  { img: "/assets/icons/image3.jpg", name: "Chutuchak" },
                  { img: "/assets/icons/image2.jpg", name: "Bang Sue" },
                  { img: "/assets/icons/image1.jpg", name: "Sukhumvit" },
                ].map(({ img, name }) => (
                  <div key={name} className="flex flex-col items-center">
                    <Image src={img} alt={name} width={359} height={384} className="w-[359px] h-[384px] object-cover" />
                    <h3 className="mt-[36px] text-[36px] leading-[44px] font-semibold tracking-[-0.02em] text-white text-center">{name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <WaveDivider />
        </section>

        {/* RECENT REVIEWS */}
        <section className="bg-white pt-[80px] pb-[140px]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="inline-flex items-center bg-[#FE6807] text-white text-[12px] font-medium uppercase rounded-full px-[8px] py-[2px]">
              REVIEWS
            </div>
            <h2 className="mt-[20px] text-[48px] leading-[60px] font-bold tracking-[-0.02em] text-[#2A3342] max-w-[977px]">
              What our customers are saying
            </h2>
            <div className="mt-[60px] flex flex-wrap gap-[40px]">
              {[
                "The service was excellent! Very professional and completed the job on time.",
                "Highly recommend! Great communication and quality work throughout.",
                "Amazing experience. Will definitely use gigit again for future tasks.",
              ].map((review, i) => (
                <div key={i} className="w-[359px] h-[404px] bg-[#F7F8F9] rounded-[6px] shadow-sm p-[32px] flex flex-col justify-between">
                  <div>
                    <div className="flex gap-[4px] text-[#FFC107] text-[18px]">★★★★★</div>
                    <p className="mt-[24px] text-[18px] leading-[28px] font-medium text-[#556987]">{review}</p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <Image src="/assets/testimonial.png" alt="User" width={48} height={48} className="w-[48px] h-[48px] rounded-full object-cover" />
                    <span className="text-[18px] leading-[28px] font-medium text-[#333F51]">Happy Customer</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COST SECTION */}
        <WaveDividerTop />
        <section className="bg-[#191BDF] text-white pt-24 pb-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center bg-[#FE6807] text-white text-[12px] font-medium uppercase px-3 py-[4px] rounded-full mb-6">
              COST
            </div>
            <h2 className="font-bold text-[36px] sm:text-[42px] lg:text-[48px] leading-[44px] sm:leading-[52px] lg:leading-[60px] tracking-[-0.02em] text-white max-w-[900px] mx-auto">
              What is the cost of a {categoryName} service?
            </h2>
            <p className="mt-6 text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px] font-medium text-white/90 max-w-[800px] mx-auto">
              The cost for a {categoryName} varies depending on the type of work and size of the work being done but typically the range is around:
            </p>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12">
              {[
                { label: "Small job", price: "฿500–1,500" },
                { label: "Medium job", price: "฿1,500–5,000" },
                { label: "Large job", price: "฿5,000+" },
              ].map(({ label, price }) => (
                <div key={label}>
                  <h3 className="font-bold text-[32px] sm:text-[36px] leading-[44px] tracking-[-0.02em]">{price}</h3>
                  <p className="mt-2 text-[16px] font-medium text-white/80">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <WaveDivider />

        {/* FEATURES */}
        <section className="bg-white py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center bg-[#FE6807] text-white text-[12px] font-medium px-3 py-[3px] rounded-full">
              FEATURES
            </div>
            <h2 className="mt-6 text-[36px] leading-[44px] font-bold text-[#2A3342] tracking-[-0.02em]">
              Built for Safe &amp; Reliable Task Hiring
            </h2>
            <p className="mt-4 text-[20px] leading-[30px] font-medium text-[#556987] max-w-2xl mx-auto">
              Everything you need to hire and work with confidence.
            </p>
          </div>
          <div className="mt-24 max-w-6xl mx-auto px-6 grid grid-cols-3 items-center gap-x-10">
            {/* Left column */}
            <div className="space-y-24">
              {[
                { icon: "/assets/icons/1.png", title: "Verified\nProfiles", desc: "Know who you're hiring with verified accounts" },
                { icon: "/assets/icons/2.png", title: "Ratings &\nReviews", desc: "See real feedback before choosing a worker" },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#FE6807] rounded-xl">
                    <Image src={icon} alt="" width={24} height={24} className="w-6 h-6" />
                  </div>
                  <h3 className="mt-6 text-[24px] leading-[32px] font-bold text-[#2A3342] whitespace-pre-line">{title}</h3>
                  <p className="mt-3 text-[16px] leading-[24px] font-medium text-[#556987]">{desc}</p>
                </div>
              ))}
            </div>
            {/* Center phone */}
            <div className="flex justify-center">
              <Image src="/assets/iphoneservice.png" alt="Mobile Preview" width={261} height={500} className="w-[261px] h-auto" />
            </div>
            {/* Right column */}
            <div className="space-y-24">
              {[
                { icon: "/assets/icons/3.png", title: "Escrow\nPayments", desc: "No upfront risk – payment released after customer approval." },
                { icon: "/assets/icons/4.png", title: "Set your\nbudget", desc: "Set your own budget and compare offers to choose the best value" },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#FE6807] rounded-xl">
                    <Image src={icon} alt="" width={24} height={24} className="w-6 h-6" />
                  </div>
                  <h3 className="mt-6 text-[24px] leading-[32px] font-bold text-[#2A3342] whitespace-pre-line">{title}</h3>
                  <p className="mt-3 text-[16px] leading-[24px] font-medium text-[#556987]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED PROJECTS */}
        <section className="bg-[#191BDF] text-white">
          <div className="max-w-6xl mx-auto px-6 pt-[100px] pb-[120px]">
            <h2 className="text-[36px] leading-[44px] font-bold tracking-[-0.02em] mb-[32px]">Related Projects</h2>
            <div className="flex items-center justify-between border-b border-white/40 pb-[12px]">
              <h3 className="text-[30px] leading-[38px] font-medium">Find {categoryName} in your District</h3>
              <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="grid grid-cols-3 gap-y-[20px] gap-x-[60px] mt-[32px]">
              {districts.map((d) => (
                <Link key={d} href={`/services/${category}/${location}/${d.toLowerCase().replace(/\s+/g, "-")}`}>
                  <span className="text-[20px] leading-[30px] font-medium hover:underline cursor-pointer">
                    {categoryName} {d}, {locationName}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-[80px]">
              <div className="flex items-center justify-between border-b border-white/40 pb-[12px]">
                <h3 className="text-[30px] leading-[38px] font-medium">Other Services</h3>
                <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="grid grid-cols-3 gap-y-[20px] gap-x-[60px] mt-[32px]">
                {["Cleaning", "Handyman", "Massage", "Laundry", "Plumbing", "Tutoring", "Air Conditioner Cleaning", "Air Conditioner Technician", "Delivery", "Moving", "Painting", "Gardening"].map((s) => (
                  <Link key={s} href={`/services/${s.toLowerCase().replace(/\s+/g, "-")}`}>
                    <span className="text-[20px] leading-[30px] font-medium hover:underline cursor-pointer">{s}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* APP DOWNLOAD */}
        <section className="bg-[#FE6807] text-white">
          <div className="max-w-[1200px] mx-auto px-6 pt-[88px] text-center">
            <div className="inline-flex items-center justify-center bg-[#191BDF] text-white text-[12px] font-medium rounded-full px-[12px] py-[2px] uppercase">
              FREE TO JOIN
            </div>
            <h2 className="mt-[24px] text-[48px] leading-[60px] font-bold tracking-[-0.02em] text-white">Get anything done</h2>
            <p className="mt-[24px] max-w-[748px] mx-auto text-[20px] leading-[30px] font-medium text-white">
              Post any job. Set your budget. Get it done. Or, turn your spare time into extra cash by joining our team of local earners.
            </p>
            <p className="mt-[24px] text-[20px] leading-[30px] font-bold text-white">Click below to download on your app store</p>
            <div className="mt-[28px] flex justify-center gap-[16px] flex-wrap">
              <Link href="#">
                <Image src="/assets/AppStore.png" alt="App Store" width={150} height={46} className="h-[46px] w-auto hover:opacity-90 transition" />
              </Link>
              <Link href="#">
                <Image src="/assets/GooglePlay.png" alt="Google Play" width={150} height={46} className="h-[46px] w-auto hover:opacity-90 transition" />
              </Link>
            </div>
            <div className="mt-[60px] flex justify-center">
              <Image src="/assets/iPhone1.png" alt="App Preview" width={720} height={500} className="w-full max-w-[720px] object-contain" />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER with breadcrumb */}
      <footer className="bg-[#191BDF] text-white pt-14 pb-6">
        <div className="w-full text-center mb-10">
          <p className="text-[20px] leading-[30px] font-medium text-white">
            <Link href="/" className="hover:opacity-80 transition">Home</Link>
            <span className="mx-2">{">"}</span>
            <Link href="/services" className="hover:opacity-80 transition">Services</Link>
            <span className="mx-2">{">"}</span>
            <Link href={`/services/${category}`} className="hover:opacity-80 transition">{categoryName}</Link>
            <span className="mx-2">{">"}</span>
            <span className="font-semibold">{locationName}</span>
          </p>
          <div className="w-full h-[1px] bg-white mt-1"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-8 pb-8">
            <div className="lg:col-span-3">
              <Image src="/assets/logo.png" alt="Gigit logo" width={32} height={32} className="h-8 w-auto object-contain" />
              <p className="mt-3 max-w-[217px] text-[18px] leading-[28px] text-white">Get anything done,<br />right when you need it.</p>
            </div>
            <div className="lg:col-span-3">
              <h3 className="text-[16px] font-semibold text-white">About us</h3>
              <ul className="mt-4 space-y-3 text-[16px] leading-6 font-medium text-white/90">
                <li><Link href="/how-it-works" className="hover:text-white">Who we are</Link></li>
                <li><Link href="/contact-us" className="hover:text-white">Contact us</Link></li>
                <li><Link href="/#become-hero" className="hover:text-white">Become a gigit hero</Link></li>
                <li><Link href="/services" className="hover:text-white">Sitemap</Link></li>
              </ul>
            </div>
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
            <div className="lg:col-span-3 w-fit flex flex-col justify-between">
              <div className="flex flex-col gap-3">
                <Link href="#"><Image src="/assets/GooglePlay.png" alt="Google Play" width={156} height={46} className="h-[46px] w-[156px]" /></Link>
                <Link href="#"><Image src="/assets/AppStore.png" alt="App Store" width={156} height={46} className="h-[46px] w-[156px]" /></Link>
              </div>
              <div className="mt-10 flex items-center gap-4 text-white text-[18px]">
                {["facebook-f", "twitter", "instagram", "github", "linkedin-in"].map((icon) => (
                  <Link key={icon} href="#" className="hover:opacity-80 transition">
                    <i className={`fa-brands fa-${icon}`}></i>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white mt-1"></div>
        <div className="pt-6 text-center">
          <p className="text-[14px] leading-[20px] font-medium text-white">© 2028 gigit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
