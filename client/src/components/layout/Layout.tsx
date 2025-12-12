import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
