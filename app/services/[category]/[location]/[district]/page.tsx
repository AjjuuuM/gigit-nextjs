import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import WaveDivider, { WaveDividerTop } from "@/components/WaveDivider";

const reviews = [
  "The service was excellent! Very professional and completed the job on time.",
  "Highly recommend! Great communication and quality work throughout.",
  "Amazing experience. Will definitely use gigit again for future tasks.",
  "Fantastic work, very thorough and efficient. Highly satisfied with the results.",
  "Great value for money. The professional was punctual and did a great job.",
  "Very happy with the service. Will definitely book again through gigit.",
];

const nearbyLocations = [
  "District A", "District B", "District C",
  "District D", "District E", "District F",
  "District G", "District H", "District I",
  "District J", "District K", "District L",
];

const otherServices = [
  "Cleaning", "Handyman", "Massage", "Laundry",
  "Plumbing", "Tutoring", "Air Conditioner Cleaning", "Air Conditioner Technician",
  "Delivery", "Moving", "Painting", "Gardening",
];

export default async function ServiceDistrictPage({
  params,
}: {
  params: Promise<{ category: string; location: string; district: string }>;
}) {
  const { category, location, district } = await params;

  const categoryName = category
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  const locationName = location
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  const districtName = district
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

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
                    Find a verified {categoryName} in {districtName}, {locationName} in minutes
                  </h1>
                  <p className="mt-6 text-[20px] leading-[30px] font-medium text-white/90">
                    Describe your task, budget &amp; timeline to receive FREE quotes from a local {categoryName} in {districtName}.
                  </p>
                  <div className="mt-8 space-y-4">
                    {["Verified local professionals", "Set your own budget", "Escrow payment protection", "Ratings & reviews"].map((kw) => (
                      <div key={kw} className="flex items-center gap-3">
                        <Image src="/assets/icons/Checkbox.png" alt="" width={28} height={28} className="w-7 h-7" />
                        <span className="text-[20px] leading-[30px] font-medium">{kw}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image src="/assets/serviceloc.png" alt="Service" width={450} height={500} className="max-w-[450px] w-full" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </header>

      <WaveDivider />

      <main>
        {/* WHY HIRE */}
        <section className="bg-white py-[100px]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-bold text-[48px] leading-[60px] tracking-[-0.02em] text-[#2A3342] max-w-[846px] mx-auto">
              Why hire a {categoryName} through gigit?
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

        {/* TOP RATED */}
        <section className="relative overflow-hidden">
          <WaveDividerTop />
          <div className="bg-[#191BDF] text-white pt-[80px] pb-[120px]">
            <div className="max-w-6xl mx-auto px-6">
              <div className="inline-flex items-center bg-[#FE6807] text-white text-[12px] font-medium uppercase rounded-full px-[8px] py-[2px]">
                OUR PROFESSIONALS
              </div>
              <h2 className="mt-[20px] text-[48px] leading-[60px] font-bold tracking-[-0.02em] text-white max-w-[837px]">
                Top-rated {categoryName} in {districtName}, {locationName}
              </h2>
              <div className="mt-[60px] grid grid-cols-1 md:grid-cols-3 gap-[40px]">
                {[
                  { img: "/assets/icons/image3.jpg", name: "Sarah Johnson" },
                  { img: "/assets/icons/image2.jpg", name: "Michael Chen" },
                  { img: "/assets/icons/image1.jpg", name: "Emma Williams" },
                ].map(({ img, name }) => (
                  <div key={name} className="text-left">
                    <Image src={img} alt={name} width={359} height={384} className="w-full h-[384px] object-cover" />
                    <h3 className="mt-[20px] text-[30px] leading-[38px] font-semibold text-white">{name}</h3>
                    <p className="mt-[8px] text-[18px] leading-[28px] font-medium text-white/90">{categoryName}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <WaveDivider />
        </section>

        {/* RECENT REVIEWS - 6 cards in 3-col grid */}
        <section className="bg-white pt-[80px] pb-[140px]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="inline-flex items-center bg-[#FE6807] text-white text-[12px] font-medium uppercase rounded-full px-[8px] py-[2px]">
              REVIEWS
            </div>
            <h2 className="mt-[20px] text-[48px] leading-[60px] font-bold tracking-[-0.02em] text-[#2A3342] max-w-[977px]">
              Recent {categoryName} reviews
            </h2>
            <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px]">
              {reviews.map((review, i) => (
                <div key={i} className="w-[359px] h-[404px] bg-[#F7F8F9] rounded-[6px] shadow-sm p-[32px] flex flex-col justify-between">
                  <div>
                    <div className="flex gap-[4px] text-[#FFC107] text-[18px]">{"★★★★★"}</div>
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

        {/* FEATURES / WHY HIRE - 2-col with checkmarks */}
        <section className="bg-white pt-[100px] pb-[200px]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-center">
              <div className="inline-flex items-center bg-[#FE6807] text-white text-[12px] font-medium uppercase rounded-full px-[8px] py-[2px]">
                FEATURES
              </div>
            </div>
            <h2 className="mt-[24px] text-center text-[48px] leading-[60px] font-bold tracking-[-0.02em] text-[#2A3342]">
              Why hire {categoryName} service through gigit?
            </h2>
            <div className="mt-[60px] grid lg:grid-cols-2 gap-[80px] items-start">
              <div className="max-w-[586px]">
                <p className="text-[18px] leading-[28px] font-medium text-[#556987]">
                  Gigit makes it easy to find trusted {categoryName} professionals in {districtName}. Our platform connects you with verified local experts who are ready to help with any task, big or small. With transparent pricing, secure payments, and real reviews, you can hire with confidence every time.
                </p>
              </div>
              <div className="space-y-[48px]">
                {[
                  { title: "Flexible Pricing", desc: "You set your own budget, you agree the price upfront before making any payment" },
                  { title: "Escrow Payments", desc: "Release payment to the worker only when you are 100% satisfied the job has been done" },
                  { title: "Clear Ratings & Reviews", desc: "Our transparent rating and review system makes it easy to find the right person" },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-[16px] items-start">
                    <div className="w-[45px] h-[38px] bg-[#FE6807] rounded-[6px] flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[24px] leading-[32px] font-bold text-[#FE6807]">{title}</h4>
                      <p className="mt-[8px] text-[16px] leading-[24px] font-medium text-[#FE6807]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS GIGIT */}
        <WaveDividerTop />
        <section className="bg-[#191BDF] text-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:gap-16 lg:grid-cols-2">
              <div className="order-2 lg:order-1 flex justify-start -ml-8 lg:-ml-56">
                <div className="w-[420px] sm:w-[480px] lg:w-[540px] xl:w-[600px]">
                  <Image src="/assets/Group1.png" alt="Gigit mobile app" width={600} height={700} className="w-full h-auto object-contain" />
                </div>
              </div>
              <div className="order-1 lg:order-2 flex flex-col items-start text-left">
                <div className="inline-flex items-center rounded-full bg-[#FE6807] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                  MOBILE APP
                </div>
                <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  What is gigit?
                </h2>
                <p className="mt-5 pt-8 max-w-xl text-base sm:text-lg leading-relaxed text-white/90">
                  gigit is a task marketplace and digital community that securely connects people who need work done, with people who can do the work. Simple!
                </p>
                <p className="mt-7 text-base sm:text-lg font-semibold text-white/95">
                  It&apos;s as easy as&hellip;
                </p>
                <div className="mt-6 space-y-6 w-full">
                  {[
                    { n: 1, title: "Post any task", desc: "Describe your task, set your budget and due date and post to the community." },
                    { n: 2, title: "Review offers", desc: "Receive offers in minutes from verified profiles with transparent ratings & reviews." },
                    { n: 3, title: "Release Payment", desc: "Once you're happy the job is complete, securely release payment through our digital escrow payment process." },
                  ].map(({ n, title, desc }) => (
                    <div key={n} className={`flex items-start gap-4${n > 1 ? " pt-3" : ""}`}>
                      <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#FE6807] text-base font-semibold text-white">
                        {n}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-white">{title}</h3>
                        <p className="mt-2 text-sm sm:text-base leading-relaxed text-white/80">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <WaveDivider />

        {/* FEATURES CHECKLIST */}
        <section className="bg-white pt-[120px] pb-[140px]">
          <div className="max-w-[1140px] mx-auto px-6 text-center">
            <div className="inline-flex items-center bg-[#FE6807] text-white text-[12px] font-medium uppercase rounded-full px-[8px] py-[2px]">
              FEATURES
            </div>
            <h2 className="mt-[20px] text-[48px] leading-[60px] font-bold tracking-[-0.02em] text-[#2A3342] max-w-[919px] mx-auto">
              Your standard {categoryName} checklist
            </h2>
            <p className="mt-[24px] max-w-[919px] mx-auto text-[20px] leading-[30px] font-medium text-[#556987]">
              A professional {categoryName} service typically covers inspection, preparation, execution, and final quality checks. The exact scope depends on the type of work required, but experienced providers ensure safety, efficiency, and long-lasting results.
            </p>
          </div>
        </section>

        {/* RELATED PROJECTS */}
        <section className="bg-[#191BDF] text-white">
          <div className="max-w-6xl mx-auto px-6 pt-[100px] pb-[120px]">
            <h2 className="text-[36px] leading-[44px] font-bold tracking-[-0.02em] mb-[32px]">
              Related Projects
            </h2>
            <div className="flex items-center justify-between border-b border-white/40 pb-[12px]">
              <h3 className="text-[30px] leading-[38px] font-medium">Nearby Locations</h3>
              <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="grid grid-cols-3 gap-y-[20px] gap-x-[60px] mt-[32px]">
              {nearbyLocations.map((loc) => (
                <Link key={loc} href={`/services/${category}/${location}/${loc.toLowerCase().replace(/\s+/g, "-")}`}>
                  <span className="text-[20px] leading-[30px] font-medium hover:underline cursor-pointer">
                    {categoryName} {loc}, {locationName}
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
                {otherServices.map((s) => (
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
          <div className="max-w-[1200px] mx-auto px-6 pt-[88px] pb-[120px] text-center">
            <div className="inline-flex items-center justify-center bg-[#191BDF] text-white text-[12px] font-medium rounded-full px-[12px] py-[2px] uppercase">
              FREE TO JOIN
            </div>
            <h2 className="mt-[24px] text-[48px] leading-[60px] font-bold tracking-[-0.02em] text-white">
              Get anything done
            </h2>
            <p className="mt-[24px] max-w-[748px] mx-auto text-[20px] leading-[30px] font-medium text-white">
              Post any job. Set your budget. Get it done. Or, turn your spare time into extra cash by joining our team of local earners.
            </p>
            <p className="mt-[24px] text-[20px] leading-[30px] font-bold text-white">
              Click below to download on your app store
            </p>
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
          <p className="text-[20px] leading-[30px] font-medium text-white whitespace-nowrap">
            <Link href="/" className="hover:opacity-80 transition">Home</Link>
            <span className="mx-2">{">"}</span>
            <Link href="/services" className="hover:opacity-80 transition">Services</Link>
            <span className="mx-2">{">"}</span>
            <Link href={`/services/${category}`} className="hover:opacity-80 transition">{categoryName}</Link>
            <span className="mx-2">{">"}</span>
            <span className="font-semibold">{districtName}</span>
          </p>
          <div className="w-full h-[1px] bg-white mt-2"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-8 pb-8">
            <div className="lg:col-span-3">
              <Image src="/assets/logo.png" alt="Gigit logo" width={32} height={32} className="h-8 w-auto object-contain" />
              <p className="mt-3 max-w-[217px] text-[18px] leading-[28px] text-white">
                Get anything done,<br />right when you need it.
              </p>
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
                <Link href="#">
                  <Image src="/assets/GooglePlay.png" alt="Google Play" width={156} height={46} className="h-[46px] w-[156px]" />
                </Link>
                <Link href="#">
                  <Image src="/assets/AppStore.png" alt="App Store" width={156} height={46} className="h-[46px] w-[156px]" />
                </Link>
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
          <p className="text-[14px] leading-[20px] font-medium text-white">
            © 2028 gigit. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
