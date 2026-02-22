import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function BlogPostPage() {
  return (
    <div className="bg-white min-h-screen">
      <main>
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* HERO */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Image
              src="/assets/blog-hero.jpg"
              alt="Blog hero"
              width={600}
              height={360}
              className="rounded-2xl w-full h-[360px] object-cover shadow-lg"
            />
            <div>
              <span className="bg-[#FE6807] text-white text-xs px-3 py-1 rounded-full font-medium">
                Service Guides
              </span>
              <p className="text-sm text-[#FE6807] mt-3">John Doe • 19 Jan 2022</p>
              <h1 className="text-4xl lg:text-[40px] font-bold mt-3 leading-tight text-[#1C232D]">
                How to collaborate better with your Development team?
              </h1>
              <p className="text-[#556987] mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              {/* Author */}
              <div className="flex items-center gap-3 mt-6">
                <Image
                  src="/assets/testimonial.png"
                  alt="Author"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-[#556987]">12 October 2021</p>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN SECTION */}
          <div className="grid lg:grid-cols-4 gap-12 mt-16">
            {/* SIDEBAR */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <ul className="space-y-4 text-[#556987] text-sm">
                  <li className="font-semibold">Introduction</li>
                  <li className="font-semibold hover:text-[#191BDF] cursor-pointer">Header 1</li>
                  <li className="font-semibold hover:text-[#191BDF] cursor-pointer">Header 2</li>
                  <li className="font-semibold hover:text-[#191BDF] cursor-pointer">Summary</li>
                </ul>

                <div className="mt-8 border-t pt-4 flex items-center justify-center gap-3">
                  <button className="border px-4 py-2 rounded-md text-[12px] text-[#556987] hover:bg-gray-100 transition">
                    <i className="fa fa-copy text-[#556987] text-sm mr-1"></i>
                    Copy Link
                  </button>
                  <div className="flex gap-3">
                    {["facebook-f", "twitter", "instagram"].map((icon) => (
                      <div
                        key={icon}
                        className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100 cursor-pointer"
                      >
                        <i className={`fa-brands fa-${icon} text-sm text-[#556987]`}></i>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="lg:col-span-3 space-y-8">
              <p className="text-[#556987] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non.
                Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus.
              </p>

              <h2 className="text-2xl font-semibold">Header 1</h2>

              <p className="text-[#556987]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non.
              </p>

              {/* Quote */}
              <div className="border-l-4 border-[#FE6807] pl-6 py-4 rounded">
                <p className="text-[#333F51]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non.
                </p>
                <span className="text-sm text-[#556987] block mt-2">— John Doe, CEO &amp; Founder</span>
              </div>

              <p className="text-[#556987]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              {/* Image */}
              <Image
                src="/assets/blog-hero.jpg"
                alt="Blog content"
                width={800}
                height={320}
                className="rounded-xl w-full h-[320px] object-cover"
              />

              <p className="text-[#556987] text-sm">Non massa enim vitae duis mattis.</p>

              <h2 className="text-2xl font-semibold">Header 2</h2>

              <p className="text-[#556987]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <ol className="list-decimal pl-5 text-[#556987] space-y-2">
                <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                <li>Eu turpis posuere semper feugiat volutpat elit.</li>
                <li>Suspendisse maecenas ac donec scelerisque.</li>
              </ol>

              <p className="text-[#556987]">
                Vestibulum placerat magna nulla.{" "}
                <span className="text-[#FE6807] font-medium">Vivamus id pharetra massa.</span>
              </p>

              <div className="mt-8">
                <Link href="/blog" className="text-[#FE6807] font-semibold hover:underline">
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
