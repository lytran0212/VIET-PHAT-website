import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Fish, Ship, Globe } from "lucide-react";
import heroImage from "@assets/generated_images/seafood_hero_banner.png";
import fishImage from "@assets/generated_images/fresh_fish_fillets.png";
import shrimpImage from "@assets/generated_images/fresh_raw_shrimp.png";
import factoryImage from "@assets/generated_images/seafood_processing_factory.png";
import featureFish from "@assets/Gemini_Generated_Image_raijkpraijkpraij@2x_1765543017417.png";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="container relative z-10 px-4 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-accent font-bold tracking-widest text-sm md:text-base mb-4 uppercase">
              Welcome to Viet Phat Seafood
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight mb-6">
              Your Trusted Partner in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-300">
                Premium Vietnamese Seafood
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl font-light">
              We specialize in exporting, trading, and processing the finest quality seafood, delivering the taste of the ocean directly to your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/products">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-6 text-lg rounded-full shadow-lg shadow-accent/20">
                  Explore Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white/30 bg-white/10 hover:bg-white text-white hover:text-primary backdrop-blur-sm font-bold px-8 py-6 text-lg rounded-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Freshness Feature Section (Fish Layer Effect) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                Freshness <br />
                <span className="text-accent">Redefined</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Experience the difference of seafood that is processed at the peak of freshness. Our state-of-the-art facilities ensure that every catch retains its natural flavor and texture.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Caught and processed within hours",
                  "Strict temperature control",
                  "International safety standards certified"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/products">
                <Button variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                  View Our Standards
                </Button>
              </Link>
            </motion.div>

            {/* Visual Effect Layer */}
            <div className="relative h-[400px] w-full flex items-center justify-center">
              {/* Feature Fish Image */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute w-full max-w-[500px] z-20"
              >
                 <img 
                  src={featureFish} 
                  alt="Fresh Seafood Selection" 
                  className="w-full h-auto object-contain drop-shadow-2xl" 
                />
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-4 h-4 bg-accent rounded-full z-30 animate-pulse" />
              <div className="absolute bottom-20 left-10 w-6 h-6 border-2 border-primary/20 rounded-full z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img src={factoryImage} alt="Processing Facility" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-primary/5 rounded-2xl -z-0" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full -z-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Quality You Can Trust
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Viet Phat is currently recognized as a specialist in the field of seafood exporting, trading, and processing in Vietnam. We supply a wide variety of the finest seafood products to customers worldwide, guaranteeing the best possible prices for long-term cooperation.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Premium Quality Guarantee",
                  "Sustainable Sourcing",
                  "Global Export Standards",
                  "Competitive Pricing"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button variant="link" className="text-accent p-0 font-bold text-lg group">
                  Learn more about us <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Core Products
            </h2>
            <p className="text-muted-foreground">
              We specialize in the finest selection of fish and shrimp, processed to your exact specifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <div className="h-64 overflow-hidden">
                <img src={fishImage} alt="Premium Fish" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3 text-secondary">
                  <Fish className="h-6 w-6" />
                  <span className="font-bold uppercase tracking-wider text-sm">Premium Fish</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Frozen Fish Varieties</h3>
                <p className="text-muted-foreground mb-6">
                  Available in WR, WGGS, HGT, Fillet, Portion, and Steak cuts. Sourced from pristine waters.
                </p>
                <Link href="/products">
                  <Button className="w-full bg-primary text-white group-hover:bg-accent transition-colors">
                    View Specifications
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <div className="h-64 overflow-hidden">
                <img src={shrimpImage} alt="Premium Shrimp" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3 text-accent">
                  <Globe className="h-6 w-6" />
                  <span className="font-bold uppercase tracking-wider text-sm">Premium Shrimp</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Export Quality Shrimp</h3>
                <p className="text-muted-foreground mb-6">
                  Black Tiger & Vannamei available in HOSO, HLSO, PDTO, and PD. Freshness locked in.
                </p>
                <Link href="/products">
                  <Button className="w-full bg-primary text-white group-hover:bg-accent transition-colors">
                    View Specifications
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container relative z-10 px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Ready to Start a Partnership?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Start your long-term cooperation with Viet Phat today. We are ready to meet your seafood needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-accent hover:text-white font-bold text-lg px-10 py-6 rounded-full shadow-2xl transition-all hover:scale-105">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
