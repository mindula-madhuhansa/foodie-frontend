import Footer from "@/components/footer";
import Header from "@/components/header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col max-w-screen-2xl mx-auto w-full p-6 lg:p-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
