import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import WaveDivider, { WaveDividerTop } from "@/components/WaveDivider";

const faqItems = [
  "What services are included?",
  "How long does the service take?",
  "Are there additional costs?",
  "Do you offer emergency services?",
  "How can I book the service?",
];

const blogs = [
  { img: "/assets/Frame42.jpg", alt: "Blog post 1" },
  { img: "/assets/Rectangle19.png", alt: "Blog post 2" },
  { img: "/assets/Frame24.jpg", alt: "Blog post 3" },
];

export default async function CategoryServicePage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryName = category
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
              <div className="grid lg:grid-cols-2 items-center gap-16">
                <div className="text-white max-w-[540px]">
                  <div className="inline-flex items-center bg-[#FE6807] text-white text-[12px] font-medium uppercase px-3 py-[4px] rounded-full">
                    WELCOME
                  </div>
                  <h1 className="mt-6 font-extrabold text-[44px] sm:text-[52px] lg:text-[60px] leading-[52px] sm:leading-[60px] lg:leading-[72px] tracking-[-0.02em]">
                    Looking for a {categoryName}<br />near you?
                  </h1>
                  <p className="mt-6 text-[20px] leading-[30px] font-medium text-white/90">
                    Describe your task, budget &amp; timeline to receive FREE quotes from a local {categoryName} near you
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
                <div className="flex justify-center lg:justify-end">
                  <Image src="/assets/serviceloc.png" alt="Gigit App Preview" width={450} height={500} className="w-full max-w-[450px]" />
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
                Top-rated {categoryName} on gigit
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

        {/* RECENT REVIEWS */}
        <section className="bg-white pt-[80px] pb-[140px]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="inline-flex items-center bg-[#FE6807] text-white text-[12px] font-medium uppercase rounded-full px-[8px] py-[2px]">
              REVIEWS
            </div>
            <h2 className="mt-[20px] text-[48px] leading-[60px] font-bold tracking-[-0.02em] text-[#2A3342] max-w-[977px]">
              Recent {categoryName} reviews
            </h2>
            <div className="mt-[60px] flex flex-wrap gap-[40px]">
              {[
                "The service was excellent! Very professional and completed the job on time.",
                "Highly recommend! Great communication and quality work throughout.",
                "Amazing experience. Will definitely use gigit again for future tasks.",
              ].map((review, i) => (
                <div key={i} className="w-[359px] min-h-[404px] bg-[#F7F8F9] rounded-[6px] shadow-sm p-[32px] flex flex-col justify-between">
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

        {/* POPULAR CITIES */}
        <section className="relative overflow-hidden">
          <WaveDividerTop />
          <div className="bg-[#191BDF] text-white pt-[88px] pb-[140px]">
            <div className="max-w-[1140px] mx-auto px-6">
              <div className="inline-flex items-center bg-[#FE6807] text-white text-[12px] font-medium uppercase rounded-full px-[8px] py-[2px]">
                OUR LOCATIONS
              </div>
              <h2 className="mt-[20px] text-[48px] leading-[60px] font-bold tracking-[-0.02em] text-white max-w-[522px]">
                Popular Cities
              </h2>
              <p className="mt-[24px] text-[20px] leading-[30px] font-medium text-white/90 max-w-[1140px]">
                Gigit connects you with verified {categoryName} service providers across Thailand&apos;s major cities and growing urban areas.
              </p>
              <div className="mt-[80px] grid grid-cols-1 md:grid-cols-3 gap-[40px]">
                {[
                  { img: "/assets/icons/image3.jpg", city: "Bangkok" },
                  { img: "/assets/icons/image2.jpg", city: "Chiang Mai" },
                  { img: "/assets/icons/image1.jpg", city: "Phuket" },
                ].map(({ img, city }) => (
                  <div key={city}>
                    <Image src={img} alt={city} width={359} height={384} className="w-[359px] h-[384px] object-cover" />
                    <h3 className="mt-[36px] text-[36px] leading-[44px] font-semibold tracking-[-0.02em] text-white">{city}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <WaveDivider />
        </section>

        {/* PRICE GUIDE */}
        <section className="bg-white pt-[120px] pb-[140px]">
          <div className="max-w-[1140px] mx-auto px-6 text-center">
            <div className="inline-flex items-center bg-[#FE6807] text-white text-[12px] font-medium uppercase rounded-full px-[8px] py-[2px]">
              COST
            </div>
            <h2 className="mt-[20px] text-[48px] leading-[60px] font-bold tracking-[-0.02em] text-[#2A3342]">
              {categoryName} price guide
            </h2>
            <p className="mt-[24px] max-w-[919px] mx-auto text-[20px] leading-[30px] font-medium text-[#556987]">
              The cost of a {categoryName} service depends on the size and type of work, but across Thailand the average total job price varies by region.
            </p>
            <div className="mt-[80px] flex justify-center">
              <div className="w-[260px] h-[260px] bg-[#F6A79A] shadow-lg flex items-center justify-center text-center p-6">
                <span className="text-[14px] text-[#2A3342] font-medium leading-[22px]">
                  Pricing guide for small/medium/large jobs across Thailand&apos;s 5 biggest provinces
                </span>
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
                <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">What is gigit?</h2>
                <p className="mt-5 pt-8 max-w-xl text-base sm:text-lg leading-relaxed text-white/90">
                  gigit is a task marketplace and digital community that securely connects people who need work done, with people who can do the work. Simple!
                </p>
                <p className="mt-7 text-base sm:text-lg font-semibold text-white/95">It&apos;s as easy as…</p>
                <div className="mt-6 space-y-6 w-full">
                  {[
                    { n: 1, title: "Post any task", desc: "Describe your task, set your budget and due date and post to the community." },
                    { n: 2, title: "Review offers", desc: "Receive offers in minutes from verified profiles with transparent ratings & reviews." },
                    { n: 3, title: "Release Payment", desc: "Once you're happy the job is complete, securely release payment through our digital escrow payment process." },
                  ].map(({ n, title, desc }) => (
                    <div key={n} className={`flex items-start gap-4 ${n > 1 ? "pt-3" : ""}`}>
                      <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#FE6807] text-base font-semibold text-white">{n}</div>
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

        {/* FEATURES */}
        <section className="bg-white pt-[120px] pb-[140px]">
          <div className="max-w-[1140px] mx-auto px-6 text-center">
            <div className="inline-flex items-center bg-[#FE6807] text-white text-[12px] font-medium uppercase rounded-full px-[8px] py-[2px]">
              FEATURES
            </div>
            <h2 className="mt-[20px] text-[48px] leading-[60px] font-bold tracking-[-0.02em] text-[#2A3342] max-w-[919px] mx-auto">
              What does a {categoryName} service near me include?
            </h2>
            <p className="mt-[24px] max-w-[919px] mx-auto text-[20px] leading-[30px] font-medium text-[#556987]">
              A professional {categoryName} service typically covers inspection, preparation, execution, and final quality checks. The exact scope depends on the type of work required, but experienced providers ensure safety, efficiency, and long-lasting results.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <WaveDividerTop />
        <section className="bg-[#191BDF] pt-[120px] pb-[160px]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center bg-[#FE6807] text-white text-[12px] font-medium uppercase rounded-full px-[10px] py-[2px]">
              FAQ
            </div>
            <h2 className="mt-[24px] text-[48px] leading-[60px] font-bold tracking-[-0.02em] text-white">
              {categoryName} FAQs
            </h2>
            <p className="mt-[20px] max-w-[827px] mx-auto text-[20px] leading-[30px] font-medium text-white/90">
              Find answers to the most common questions about our {categoryName} service.
            </p>
            <div className="mt-[60px] flex flex-col items-center gap-[24px]">
              {faqItems.map((q) => (
                <div key={q} className="w-full max-w-[750px] min-h-[110px] bg-[#FE6807] rounded-[6px] flex items-center justify-between px-[40px] cursor-pointer">
                  <span className="text-[20px] leading-[30px] font-bold text-white text-left">{q}</span>
                  <Image src="/assets/icons/arrow.png" alt="arrow" width={28} height={28} className="w-[28px] h-[28px] object-contain flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
          <WaveDivider />
        </section>
        <WaveDivider />

        {/* BLOG */}
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center justify-center rounded-full bg-[#FE6807] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
              BLOG
            </div>
            <h2 className="mt-6 font-bold text-3xl sm:text-4xl lg:text-[48px] leading-[44px] sm:leading-[52px] lg:leading-[60px] tracking-[-0.02em] text-[#1C232D]">
              {categoryName} &amp; related services blogs
            </h2>
            <div className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map(({ img, alt }, i) => (
                <article key={i} className="flex flex-col bg-white overflow-hidden min-w-0">
                  <div className="w-full h-[200px] sm:h-[240px] lg:h-[272px] overflow-hidden rounded-md">
                    <Image src={img} alt={alt} width={358} height={272} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-col pt-4">
                    <p className="text-sm text-slate-500">John Doe • 19 Jan 2022</p>
                    <h3 className="mt-2 font-bold text-lg sm:text-xl lg:text-2xl leading-7 lg:leading-[30px] text-[#333F51] break-words">
                      A small business is only as good as its tools and it is totally true.
                    </h3>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Link href="/blog">
                <button className="inline-flex items-center justify-center rounded-md bg-[#FE6807] px-4 py-2 text-sm font-medium text-white hover:bg-[#ff7f2e] transition">
                  View All Posts
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* RELATED PROJECTS */}
        <WaveDividerTop />
        <section className="bg-[#191BDF] text-white">
          <div className="max-w-6xl mx-auto px-6 pt-[100px] pb-[120px]">
            <h2 className="text-[36px] leading-[44px] font-bold tracking-[-0.02em] mb-[32px]">Related Projects</h2>
            <div className="flex items-center justify-between border-b border-white/40 pb-[12px]">
              <h3 className="text-[30px] leading-[38px] font-medium">Find {categoryName} in your city</h3>
              <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="grid grid-cols-3 gap-y-[20px] gap-x-[60px] mt-[32px]">
              {["Bangkok", "Chiang Mai", "Phuket", "Pattaya", "Hua Hin", "Koh Samui", "Chonburi", "Nonthaburi", "Pathum Thani", "Nakhon Ratchasima", "Khon Kaen", "Udon Thani"].map((city) => (
                <Link key={city} href={`/services/${category}/${city.toLowerCase().replace(/\s+/g, "-")}`}>
                  <span className="text-[20px] leading-[30px] font-medium hover:underline cursor-pointer">
                    {categoryName} {city}
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
            <span className="font-semibold">{categoryName}</span>
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
