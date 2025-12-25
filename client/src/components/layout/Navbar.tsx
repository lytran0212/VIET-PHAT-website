import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logoCty from "@assets/logo_cty.png";

export default function Navbar() {
  const [location, navigate] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Only detect active section if on home page
      if (location === "/") {
        const sections = ["home", "about", "products", "news", "contact"];
        const scrollPosition = window.scrollY + 200; // offset for navbar

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location !== "/") {
      navigate("/");
      // Wait for navigation and then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -100; // offset for fixed navbar
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About Us", path: "/about" },
    { id: "products", label: "Our Products", path: "/products" },
    { id: "news", label: "News", path: "/news" },
    { id: "contact", label: "Contact Us", path: "/contact" },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    // If clicking on a section that has dedicated page
    if (location === "/" && link.id !== "home") {
      // On home page, scroll to section
      scrollToSection(link.id);
    } else if (link.path === "/") {
      // Going to home
      navigate("/");
      setActiveSection("home");
      setIsMobileMenuOpen(false);
    } else {
      // Navigate to dedicated page
      navigate(link.path);
      setActiveSection(link.id);
      setIsMobileMenuOpen(false);
    }
  };

  const isLinkActive = (link: typeof navLinks[0]) => {
    // If on home page, check scroll position
    if (location === "/") {
      return activeSection === link.id;
    }
    // Otherwise check URL match
    return location === link.path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-primary">
      {/* White Background Container - extends to edges and top */}
      <div className={cn(
        "bg-white shadow-lg transition-all duration-300",
        isScrolled ? "py-0.5" : "py-1"
      )}>
        <div className="w-full px-4">
          {/* Mobile Toggle - Top Right on Mobile */}
          <button
            className="md:hidden absolute top-0 right-6 z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>

          {/* Centered Logo */}
          <div className={cn(
            "flex justify-center transition-all duration-300 w-full",
            isScrolled ? "mb-0" : "mb-0"
          )}>
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-all duration-300">
                <img
                  src={logoCty}
                  alt="Viet Phat"
                  className={cn(
                    "object-contain transition-all duration-300",
                    isScrolled ? "h-[4rem]" : "h-[6rem]"
                  )}
                />
              </div>
            </Link>
          </div>

          {/* Centered Desktop Nav */}
          <div className={cn(
            "hidden md:flex items-center justify-center gap-6 w-full",
            isScrolled ? "-mt-2" : "-mt-6"
          )}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={cn(
                  "text-sm font-medium transition-all uppercase tracking-wide px-4 py-2 rounded-full text-primary cursor-pointer",
                  isLinkActive(link)
                    ? "font-bold bg-primary/10"
                    : "hover:bg-primary/5"
                )}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick(navLinks[4])}
              className="rounded-full px-6 font-semibold shadow-lg transition-all hover:scale-105 bg-primary text-white hover:bg-primary/90 py-2"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link)}
              className={cn(
                "text-lg font-medium p-2 block rounded-md hover:bg-muted text-left",
                isLinkActive(link) ? "text-primary font-bold bg-muted/50" : "text-foreground"
              )}
            >
              {link.label}
            </button>
          ))}
          <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Phone className="h-4 w-4" /> <span>+84-912-340 640</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Mail className="h-4 w-4" /> <span>info@vietphat-ap.com</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
