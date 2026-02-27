import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider, { WaveDividerTop } from "@/components/WaveDivider";

const services = [
  { name: "Cleaning", img: "/assets/service1.png" },
  { name: "Handyman", img: "/assets/service2.png" },
  { name: "Massage", img: "/assets/service3.png" },
  { name: "Laundry", img: "/assets/service4.png" },
  { name: "Air Conditioner Cleaning", img: "/assets/service5.png" },
  { name: "Air Conditioner Technician", img: "/assets/service6.png" },
  { name: "Plumbing", img: "/assets/service7.png" },
  { name: "Tutoring", img: "/assets/service8.png" },
];

const testimonials = Array(6).fill({
  text: '"I was amazed at how quickly someone came to help with my home cleaning. The service was professional and my apartment looked spotless in no time!"',
  name: "Macauley Herring",
});

const blogs = [
  { img: "/assets/Frame42.jpg", alt: "Blog post - office interior" },
  { img: "/assets/Rectangle19.png", alt: "Blog post" },
  { img: "/assets/Frame24.jpg", alt: "Blog post - workspace" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR + HERO */}
      <header className="bg-[#191BDF] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />

          {/* HERO */}
          <section className="pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-0">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FE6807] px-4 py-1 text-xs font-semibold tracking-wide uppercase text-white">
                <span>Welcome</span>
              </div>
              <h1 className="mt-4 font-extrabold text-[40px] sm:text-[50px] lg:text-[60px] leading-[48px] sm:leading-[60px] lg:leading-[72px] tracking-[-0.02em] text-white">
                Get <span className="text-[#FE6807]">anything</span> done,
                <br className="hidden sm:block" />
                right when you need it
              </h1>
              <p className="mt-6 max-w-[715px] mx-auto text-[20px] font-medium leading-[30px] text-white text-center">
                Need help with any task? Tell us what you need done, set your own<br />
                budget, and we will match you with trusted local pros in minutes.
              </p>
            </div>

            {/* Hero Image */}
            <div className="mt-10 flex justify-center">
              <div className="relative w-full max-w-3xl">
                <Image
                  src="/assets/iPhone1.png"
                  alt="Gigit mobile app preview"
                  width={900}
                  height={600}
                  className="mx-auto w-full max-w-4xl"
                />
              </div>
            </div>
          </section>
        </div>
      </header>

      <main>
        {/* WHY USE GIGIT */}
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center bg-[#FE6807] text-white text-[12px] font-semibold uppercase px-2 py-[2px] rounded-full">
                <span>Why us?</span>
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2A3342] tracking-[-0.02em]">
                Why use gigit?
              </h2>
              <p className="mt-5 max-w-[920px] mx-auto text-[20px] leading-[30px] font-medium text-[#556987] text-center">
                From fixing a sink to assembling furniture, running errands, designing a logo, or even
                breaking up with your boyfriend or girlfriend – post any task and get it done.
              </p>
            </div>

            <div className="mt-20 max-w-6xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-10">
                {[
                  { n: 1, title: "Set your own budget", desc: "You're in control, set your budget and choose the best offer." },
                  { n: 2, title: "Find help in minutes", desc: "Post once and start getting offers from verified pros within minutes." },
                  { n: 3, title: "Escrow payments", desc: "No upfront risk – payment is released only after customer approval." },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="relative">
                    <div className="absolute -top-0 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-[#FE6807] text-white text-[20px] font-semibold shadow-md">
                      {n}
                    </div>
                    <div className="mt-6 bg-[#F7F8F9] rounded-[6px] shadow-[0px_1px_2px_rgba(85,105,135,0.10)] px-12 py-12 text-center">
                      <h3 className="text-[20px] leading-[30px] font-bold text-[#2A3342]">{title}</h3>
                      <p className="mt-4 text-[16px] leading-[24px] font-medium text-[#556987]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WAVE */}
        <section className="pt-12">
          <WaveDividerTop />
        </section>

        {/* WHAT IS GIGIT (BLUE) */}
        <section className="bg-[#191BDF] text-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:gap-16 lg:grid-cols-2">
              {/* Left: Mobile image */}
              <div className="order-2 lg:order-1 flex justify-center lg:justify-start lg:-ml-56">
                <div className="w-full max-w-[420px] sm:max-w-[480px] lg:w-[540px] xl:w-[600px]">
                  <Image
                    src="/assets/Group1.png"
                    alt="Gigit mobile app"
                    width={600}
                    height={700}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              {/* Right: Content */}
              <div className="order-1 lg:order-2 flex flex-col items-start text-left">
                <div className="inline-flex items-center rounded-full bg-[#FE6807] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                  MOBILE APP
                </div>
                <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  What is gigit?
                </h2>
                <p className="mt-5 pt-8 max-w-xl text-base sm:text-lg leading-relaxed text-white/90">
                  gigit is a task marketplace and digital community that securely
                  connects people who need work done, with people who can do the
                  work. Simple!
                </p>
                <p className="mt-7 text-base sm:text-lg font-semibold text-white/95">
                  It&apos;s as easy as…
                </p>
                <div className="mt-6 space-y-6 w-full">
                  {[
                    { n: 1, title: "Post any task", desc: "Describe your task, set your budget and due date and post to the community." },
                    { n: 2, title: "Review offers", desc: "Receive offers in minutes from verified profiles with transparent ratings & reviews." },
                    { n: 3, title: "Release Payment", desc: "Once you're happy the job is complete, securely release payment through our digital escrow payment process." },
                  ].map(({ n, title, desc }) => (
                    <div key={n} className={`flex items-start gap-4 ${n > 1 ? "pt-3" : ""}`}>
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

        {/* WAVE */}
        <WaveDivider />

        {/* POPULAR SERVICES */}
        <section className="bg-white">
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
              {services.map(({ name, img }) => (
                <div key={name} className="flex flex-col items-center">
                  <div className="w-full aspect-[261/174] rounded-[7px] overflow-hidden">
                    <Image
                      src={img}
                      alt={name}
                      width={261}
                      height={174}
                      className="block h-full w-full object-cover object-center"
                    />
                  </div>
                  <p className="mt-3 text-center text-sm font-medium text-[#333F51]">{name}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/services">
                <button className="inline-flex items-center justify-center rounded-lg bg-[#FE6807] px-8 py-3 text-sm font-semibold text-white hover:bg-[#ff7f2e] transition">
                  View All Services
                </button>
              </Link>
            </div>
          </div>

          {/* WAVE */}
          <div className="pt-12">
            <WaveDividerTop />
          </div>

          {/* TESTIMONIALS */}
          <section className="bg-[#191BDF] text-white pb-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center justify-center rounded-full bg-[#FE6807] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                  REVIEWS
                </div>
                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                  What our users say
                </h2>
                <p className="mt-3 text-sm sm:text-base text-white">
                  Hear from people who have used gigit to simplify their lives and earn extra income.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1180px] mx-auto">
                {testimonials.map((t, i) => (
                  <article
                    key={i}
                    className="rounded-xl bg-white border border-[#191BDF]/25 p-6 sm:p-8 flex flex-col min-w-0 min-h-[320px] sm:min-h-[380px] lg:min-h-[404px]"
                  >
                    <p className="text-[#2A3342] font-medium text-base sm:text-xl lg:text-2xl leading-7 lg:leading-8 flex-1 break-words">
                      {t.text}
                    </p>
                    <div className="mt-6 flex items-center justify-between gap-3 flex-shrink-0">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm sm:text-base font-semibold text-[#2A3342]">{t.name}</p>
                        <div className="flex items-center gap-0.5 mt-1 text-yellow-500">
                          {[...Array(5)].map((_, j) => (
                            <i key={j} className="fa-solid fa-star text-sm"></i>
                          ))}
                        </div>
                      </div>
                      <Image
                        src="/assets/testimonial.png"
                        alt={t.name}
                        width={44}
                        height={44}
                        className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </section>

        {/* BLOG SECTION */}
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <div className="inline-flex items-center justify-center rounded-full bg-[#FE6807] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                BLOG
              </div>
              <h2 className="mt-6 font-bold text-3xl sm:text-4xl lg:text-[48px] leading-[44px] sm:leading-[52px] lg:leading-[60px] tracking-[-0.02em] text-[#1C232D]">
                Service &amp; related services blogs
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map(({ img, alt }, i) => (
                <article key={i} className="flex flex-col bg-white overflow-hidden min-w-0">
                  <div className="w-full h-[200px] sm:h-[240px] lg:h-[272px] overflow-hidden rounded-md">
                    <Image
                      src={img}
                      alt={alt}
                      width={358}
                      height={272}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col pt-4">
                    <p className="text-sm text-slate-500 font-normal">John Doe • 19 Jan 2022</p>
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

        {/* APP DOWNLOAD (ORANGE) */}
        <section id="become-hero" className="bg-[#FE6807] text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center justify-center bg-[#191BDF] text-white text-[12px] leading-[18px] font-medium uppercase rounded-[36px] h-[22px] px-[8px]">
                  FREE TO JOIN
                </div>
                <h2 className="mt-4 text-[48px] leading-[60px] font-bold tracking-[-0.02em] text-white">
                  Get anything done
                </h2>
                <p className="mt-6 text-[20px] leading-[30px] font-medium text-white max-w-[554px]">
                  Post any job. Set your budget. Get it done. Or, turn your spare time into extra cash by joining our team of local earners.
                </p>
                <p className="mt-8 text-[20px] leading-[30px] font-bold text-white">
                  Click below to download on your app store
                </p>
                <div className="mt-[28px] flex flex-wrap items-center gap-4">
                  <Link href="#">
                    <Image src="/assets/AppStore.png" alt="Download on the App Store" width={150} height={50} className="h-[50px] w-auto hover:opacity-90 transition" />
                  </Link>
                  <Link href="#">
                    <Image src="/assets/GooglePlay.png" alt="Get it on Google Play" width={150} height={50} className="h-[50px] w-auto hover:opacity-90 transition" />
                  </Link>
                </div>
              </div>

              {/* Right: Phone mockup */}
              <div className="relative flex justify-center lg:justify-end min-h-[320px]">
                <Image
                  src="/assets/Group33.png"
                  alt=""
                  width={160}
                  height={160}
                  className="pointer-events-none select-none absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 opacity-90 z-0"
                  aria-hidden
                />
                <Image
                  src="/assets/Frame33-2.png"
                  alt=""
                  width={192}
                  height={192}
                  className="pointer-events-none select-none absolute bottom-0 right-0 w-40 h-40 sm:w-48 sm:h-48 opacity-90 z-0"
                  aria-hidden
                />
                <Image
                  src="/assets/iPhone2.png"
                  alt="Gigit app"
                  width={400}
                  height={600}
                  className="relative z-10 w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
