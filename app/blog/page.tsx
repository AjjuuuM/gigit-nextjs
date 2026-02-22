import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const blogPosts = [
  { img: "/assets/blog/img1.jpg", category: "Service Guides", excerpt: "We've all experienced the chaos of multiple spreadsheets, tracking and insight tools." },
  { img: "/assets/blog/img2.jpg", category: "Service Guides", excerpt: "We've all experienced the chaos of multiple spreadsheets." },
  { img: "/assets/blog/img3.jpg", category: "Home Maintenance", excerpt: "We've all experienced the chaos of multiple spreadsheets and insight tools." },
  { img: "/assets/blog/img4.jpg", category: "Home Maintenance", excerpt: "We've all experienced the chaos of multiple spreadsheets." },
  { img: "/assets/blog/img5.jpg", category: "Tips & Tricks", excerpt: "We've all experienced the chaos of multiple spreadsheets." },
  { img: "/assets/blog/img6.jpg", category: "News", excerpt: "We've all experienced the chaos of multiple spreadsheets." },
];

const tabs = ["All Topics", "Service Guides", "Home Maintenance", "Tips & Tricks", "News"];

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">
      <main>
        <section className="bg-[#F7F8F9] py-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Badge */}
            <div className="text-center mb-6">
              <span className="bg-[#FE6807] text-white text-xs font-medium px-5 py-1.5 rounded-full">
                BLOG
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-center text-4xl md:text-5xl font-bold text-[#1C232D] leading-tight max-w-4xl mx-auto">
              Our blogs help you get more done with less stress and better results
            </h1>

            {/* Subtext */}
            <p className="text-center text-lg text-[#556987] mt-6 max-w-3xl mx-auto">
              Practical guides, service tips, and step-by-step advice to help you complete tasks faster and more confidently.
            </p>

            {/* Search */}
            <div className="flex justify-center mt-8">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-white border border-gray-200 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#191BDF]"
                />
                <svg
                  className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-4 mt-10 text-sm font-semibold">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  className={
                    i === 0
                      ? "bg-[#FE6807] text-white px-5 py-2 rounded-lg"
                      : "text-[#8896AB] hover:text-[#191BDF] transition"
                  }
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 gap-12 mt-14">
              {blogPosts.map((post, i) => (
                <div key={i}>
                  <div className="rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src={post.img}
                      alt={`Blog post ${i + 1}`}
                      width={600}
                      height={312}
                      className="w-full h-[312px] object-cover"
                    />
                  </div>
                  <div className="mt-6">
                    <span className="bg-[#FE6807] text-white text-xs px-4 py-1 rounded-full">
                      {post.category}
                    </span>
                    <p className="text-sm text-[#556987] mt-4">John Doe • 19 Jan 2022</p>
                    <h3 className="text-2xl font-bold text-[#333F51] mt-3 leading-snug">
                      A small business is only as good as its tools and it is totally true.
                    </h3>
                    <p className="text-[#8896AB] mt-4 text-base leading-relaxed">{post.excerpt}</p>
                    <Link
                      href="/blog/sample-post"
                      className="text-[#FE6807] font-semibold mt-5 inline-block hover:underline"
                    >
                      Read Post →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* View More */}
            <div className="text-center mt-14">
              <button className="bg-[#FE6807] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                View more ↓
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
