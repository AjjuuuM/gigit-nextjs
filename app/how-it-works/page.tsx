import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider, { WaveDividerTop } from "@/components/WaveDivider";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER + HERO */}
      <header className="bg-[#191BDF] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />

          {/* HERO */}
          <section className="bg-[#191BDF] text-white relative overflow-hidden pt-20 pb-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 items-center gap-16">
                {/* Left */}
                <div>
                  <div className="inline-flex items-center bg-[#FE6807] text-white text-[12px] font-medium uppercase px-3 py-[4px] rounded-full">
                    WELCOME
                  </div>
                  <h1 className="mt-6 font-extrabold text-[40px] sm:text-[52px] lg:text-[60px] leading-[48px] sm:leading-[60px] lg:leading-[72px] tracking-[-0.02em]">
                    Post a task.<br />
                    Receive offers.<br />
                    Get the job done.
                  </h1>
                  <p className="mt-6 text-[20px] leading-[30px] font-medium text-white/90 max-w-[520px]">
                    gigit helps people and businesses outsource tasks and jobs to make their life easier!
                  </p>
                </div>

                {/* Right */}
                <div className="flex justify-center lg:justify-end">
                  <Image
                    src="/assets/catwise.png"
                    alt="Gigit App Preview"
                    width={450}
                    height={500}
                    className="w-full max-w-[450px]"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </header>

      <WaveDivider />

      <main>
        {/* WHO WE ARE */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center bg-[#FE6807] text-white text-[12px] font-medium px-3 py-[2px] rounded-full">
                  ABOUT US
                </div>
                <h2 className="mt-6 font-bold text-[36px] sm:text-[40px] lg:text-[44px] leading-[48px] tracking-[-0.02em] text-[#2A3342]">
                  Who we are
                </h2>
                <div className="mt-6 space-y-6 text-[18px] leading-[28px] text-[#556987] font-medium">
                  <p>Gigit was created around a simple belief: everyday skills should create real earning opportunities, and everyday problems should be easier to solve.</p>
                  <p>We focus on practical impact. Not just big projects — but the everyday tasks that keep homes running, businesses moving, and schedules under control.</p>
                  <p>We call the people who complete these jobs gigit heroes. They bring skills, effort, and reliability to tasks that make a real difference in someone else&apos;s day.</p>
                  <p>Gigit exists to make local help more accessible, flexible work more available, and task-based earning more respected.</p>
                </div>
              </div>

              {/* Right */}
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/assets/whoweare.jpg"
                  alt="Who we are"
                  width={520}
                  height={400}
                  className="w-full max-w-[520px] rounded-[12px] shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* WAVE */}
        <WaveDividerTop />

        {/* WHAT IS GIGIT (BLUE) */}
        <section className="bg-[#191BDF] text-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:gap-16 lg:grid-cols-2">
              {/* Left: Mobile image */}
              <div className="order-2 lg:order-1 flex justify-start -ml-8 lg:-ml-56">
                <div className="w-[420px] sm:w-[480px] lg:w-[540px] xl:w-[600px]">
                  <Image
                    src="/assets/Group1.png"
                    alt="Gigit mobile app"
                    width={600}
                    height={700}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              {/* Right */}
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
                <p className="mt-7 text-base sm:text-lg font-semibold text-white/95">It&apos;s as easy as…</p>
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

        {/* FEATURES SECTION */}
        <section className="bg-[#F7F8F9] py-24">
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
            {/* Left Column */}
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

            {/* Center Phone */}
            <div className="flex justify-center">
              <Image
                src="/assets/iphoneservice.png"
                alt="Mobile Preview"
                width={261}
                height={500}
                className="w-[261px] h-auto"
              />
            </div>

            {/* Right Column */}
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

        {/* APP DOWNLOAD */}
        <section id="become-hero" className="bg-[#FE6807] text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
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
                    <Image src="/assets/AppStore.png" alt="App Store" width={150} height={50} className="h-[50px] w-auto hover:opacity-90 transition" />
                  </Link>
                  <Link href="#">
                    <Image src="/assets/GooglePlay.png" alt="Google Play" width={150} height={50} className="h-[50px] w-auto hover:opacity-90 transition" />
                  </Link>
                </div>
              </div>
              <div className="relative flex justify-center lg:justify-end min-h-[320px]">
                <Image src="/assets/Group33.png" alt="" width={160} height={160} className="pointer-events-none select-none absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 opacity-90 z-0" aria-hidden />
                <Image src="/assets/Frame33-2.png" alt="" width={192} height={192} className="pointer-events-none select-none absolute bottom-0 right-0 w-40 h-40 sm:w-48 sm:h-48 opacity-90 z-0" aria-hidden />
                <Image src="/assets/iPhone2.png" alt="Gigit app" width={400} height={600} className="relative z-10 w-full" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
