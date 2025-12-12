import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Anchor, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Our Products" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-4 text-primary"
          : "bg-transparent py-6 text-white"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <Anchor className={cn("h-8 w-8", isScrolled ? "text-primary" : "text-white")} />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-2xl leading-none tracking-tight">
                VIET PHAT
              </span>
              <span className="text-[10px] font-medium tracking-widest uppercase opacity-80">
                Seafood Export
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent uppercase tracking-wide",
                  location === link.href
                    ? "text-accent font-bold"
                    : isScrolled
                    ? "text-foreground"
                    : "text-white/90"
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <Button
              className={cn(
                "rounded-full px-6 font-semibold shadow-lg transition-all hover:scale-105",
                isScrolled ? "bg-primary text-white" : "bg-white text-primary hover:bg-white/90"
              )}
            >
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-white")} />
          ) : (
            <Menu className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-lg font-medium p-2 block rounded-md hover:bg-muted",
                  location === link.href ? "text-primary font-bold bg-muted/50" : "text-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Phone className="h-4 w-4" /> <span>+84 123 456 789</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Mail className="h-4 w-4" /> <span>sales@vietphatseafood.com</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
