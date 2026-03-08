import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PolicyLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function PolicyLayout({ title, children }: PolicyLayoutProps) {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
      </header>
      <main>
        <section className="bg-white pt-10 pb-32">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-[36px] leading-[44px] font-bold text-[#2A3342]">{title}</h1>
            <div className="mt-12 space-y-10 text-[16px] leading-[28px] text-[#556987] font-medium">
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
