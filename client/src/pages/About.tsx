import { motion } from "framer-motion";
import { Users, Target, Award, Globe } from "lucide-react";
import mapImage from "@assets/generated_images/global_export_map.png";

export default function About() {
  return (
    <div className="pt-20 flex flex-col items-center w-full">
      {/* Header */}
      <div className="bg-muted/30 py-16 md:py-24 w-full flex justify-center">
        <div className="w-full max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-4">About Us</h1>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building trust through quality and dedication in the global seafood market.
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <section className="py-20 w-full flex justify-center">
        <div className="w-full max-w-7xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Who We Are</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Viet Phat is currently recognized as a specialist in the field of seafood exporting, trading, and processing in Vietnam. We supply a wide variety of the finest seafood products to customers worldwide, guaranteeing the best possible prices for long-term cooperation.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              With years of experience and deep connections in the local fisheries, we ensure that every product we ship meets the highest international standards of safety and quality.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl max-w-3xl mx-auto"
          >
            <img src={mapImage} alt="Global Operations" className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-center p-8">
              <div className="text-white text-center">
                <p className="font-bold text-2xl">Global Reach</p>
                <p className="opacity-90">Connecting Vietnam to the World</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-primary text-white w-full flex justify-center">
        <div className="w-full max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center w-full max-w-sm">
              <Target className="h-12 w-12 text-accent mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4 font-heading">Our Vision</h3>
              <p className="leading-relaxed opacity-90">
                Our vision is to be a world-class supplier of premium seafood. Through our distinctive growth and expansion, we are steadfast on the path to achieving this target.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center w-full max-w-sm">
              <Award className="h-12 w-12 text-accent mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4 font-heading">Our Commitment</h3>
              <p className="leading-relaxed opacity-90">
                At Viet Phat, we commit to delivering only the finest quality products, satisfying every customer's requirement with our prestige and dedication.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center w-full max-w-sm">
              <Users className="h-12 w-12 text-accent mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4 font-heading">Our Team</h3>
              <p className="leading-relaxed opacity-90">
                We pride ourselves on owning a well-trained and highly experienced team in the seafood industry. Our expertise ensures smooth operations and professional service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
