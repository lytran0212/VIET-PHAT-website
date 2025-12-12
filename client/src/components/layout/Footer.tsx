import { Anchor, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Anchor className="h-8 w-8 text-accent" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl leading-none">
                  VIET PHAT
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase opacity-70">
                  Seafood Export
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner in premium Vietnamese seafood. Supplying the finest quality fish and shrimp to the world since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/"><a className="hover:text-accent transition-colors">Home</a></Link></li>
              <li><Link href="/about"><a className="hover:text-accent transition-colors">About Us</a></Link></li>
              <li><Link href="/products"><a className="hover:text-accent transition-colors">Our Products</a></Link></li>
              <li><Link href="/news"><a className="hover:text-accent transition-colors">News</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-accent transition-colors">Contact Us</a></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-accent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-sm opacity-90">123 Fishery Road, Mekong Delta Industrial Zone, Vietnam</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm opacity-90">+84 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm opacity-90">sales@vietphatseafood.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-accent">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs opacity-60">
              Subscribe to get the latest seafood market updates.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} Viet Phat Seafood. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
