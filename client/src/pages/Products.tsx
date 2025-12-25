import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Fish Images (use URLs to avoid import-analysis issues with folder names containing spaces/Unicode)
const barramundiImg = "/generated_images/ảnh cá/04- BARRAMUNDI.png";
const blackTilapiaImg = "/generated_images/ảnh cá/01- BLACK TILAPIA.png";
const redTilapiaImg = "/generated_images/ảnh cá/02- RED TILAPIA.png";
const pangasiusImg = "/generated_images/ảnh cá/03- PANGASIUS.png";
const pompanoImg = "/generated_images/ảnh cá/05- POMPANO.png";
const yellowStripTrevallyImg = "/generated_images/ảnh cá/07- YELLOW STRIP TREVALLY.png";
const yellowfinImg = "/generated_images/ảnh cá/06- YELLOWFIN TUNA.png";
const roundScadImg = "/generated_images/ảnh cá/09- ROUND SCAD.png";
const indianMackerelImg = "/generated_images/ảnh cá/08- INDIAN MACKEREL.png";
const yellowtailScadImg = "/generated_images/ảnh cá/10- YELLOWTAIL SCAD.png";
const horseMackerelImg = "/generated_images/ảnh cá/11- HORSE MACKEREL.png";
const threadfinBreamImg = "/generated_images/ảnh cá/12- THREADFIN BREAM.png";
const blackPomfretImg = "/generated_images/ảnh cá/13- BLACK POMFRET.png";
const redMulletImg = "/generated_images/ảnh cá/14- RED MULLET.png";
const grouperImg = "/generated_images/ảnh cá/15- GROUPER.png";
const emperorfishImg = "/generated_images/ảnh cá/16- EMPERORFISH.png";
const parrotfishImg = "/generated_images/ảnh cá/18- PARROTFISH.png";
const redSnapperImg = "/generated_images/ảnh cá/17- RED SNAPPER.png";

// Shrimp Images
import hosoImg from "@assets/generated_images/hoso_shrimp.png";
import hlsoImg from "@assets/generated_images/hlso_shrimp.png";
import ezpImg from "@assets/generated_images/ezp_shrimp.png";
import pdtoImg from "@assets/generated_images/pdto_shrimp.png";
import pdImg from "@assets/generated_images/pd_shrimp.png";

const fishProducts = [
  {
    name: "Barramundi",
    image: barramundiImg,
    specs: ["WR: 300/500, 500/800, 800/1000, 1000/3000 gr/pc", "WGGS: 300/500, 500/800, 800/1000, 1000/3000 gr/pc", "FILLET: 100/200, 200/300, 300/500, 500/800, 800/1000 gr/pc", "PORTION: 50/80, 80/120, 120/170, 170/230 gr/pc"]
  },
  {
    name: "Black Tilapia",
    image: blackTilapiaImg,
    specs: ["WR: 200/300, 300/500, 500/800, 800/1200 gr/pc", "WGGS: 200/300, 300/500, 500/800, 800/1200 gr/pc", "MOON-CUT: Fin Off, Tail Off sizes 100/200, 200/300, 300/500 gr/pc", "FILLET: 50/80, 80/120, 120/170, 170/230 gr/pc"]
  },
  {
    name: "Red Tilapia",
    image: redTilapiaImg,
    specs: ["WR: 200/300, 300/500, 500/800, 800/1200 gr/pc", "WGGS: 200/300, 300/500, 500/800, 800/1200 gr/pc", "MOON-CUT: Fin Off, Tail Off sizes 100/200, 200/300, 300/500 gr/pc", "FILLET: 50/80, 80/120, 120/170, 170/230 gr/pc"]
  },
  {
    name: "Pangasius",
    image: pangasiusImg,
    specs: ["WR: 500/800, 800/1200, 1200/UP gr/pc", "HGT (Chunk): 300/500, 500/800, 800/1200 gr/pc", "STEAK: thickness 20-30 mm", "FILLET: 120/170, 170/220, 220/Up gr/pc", "FINGER: dimensions 90 x 20 x 15 mm", "BURGER: dimensions 90 x 90 x 15 mm"]
  },
  {
    name: "Pompano",
    image: pompanoImg,
    specs: ["Whole Round: 100/200, 200/300, 300/500, 500/1000, 1000/Up gr/pc", "Whole Gutted: 100/200, 200/300, 300/500, 500/1000, 1000/Up gr/pc"]
  },
  {
    name: "Yellow Strip Trevally",
    image: yellowStripTrevallyImg,
    specs: ["Whole Round: 10/14, 14/18, 18/25 pcs/kg", "Whole Gutted: 10/14, 14/18, 18/25 pcs/kg", "Butterfly: 10/14, 14/18, 18/25 pcs/kg"]
  },
  {
    name: "Yellowfin Tuna",
    image: yellowfinImg,
    specs: ["LOIN: 2/3, 3/5, 5/7, 7/UP kg/pc", "STEAK: 4/6, 6/8, 8/12 oz/pc", "SAKU: 200/300, 300/500 gr/pc"]
  },
 
  {
    name: "Round Scad",
    image: roundScadImg,
    specs: ["Whole Round: 6/8, 8/10, 10/12, 12/14, 14/18 pcs/kg", "Whole Gutted: 6/8, 8/10, 10/12, 12/14, 14/18 pcs/kg"]
  },
  {
    name: "Indian Mackerel",
    image: indianMackerelImg,
    specs: ["Whole Round: 6/8, 8/10, 10/12, 12/14, 14/18 pcs/kg", "Whole Gutted: 6/8, 8/10, 10/12, 12/14, 14/18 pcs/kg"]
  },
  {
    name: "Yellowtail Scad",
    image: yellowtailScadImg,
    specs: ["Whole Round: 4/6, 6/8, 8/12 pcs/kg", "Whole Gutted: 4/6, 6/8, 8/12 pcs/kg"]
  },
  {
    name: "Horse Mackerel",
    image: horseMackerelImg,
    specs: ["Whole Round: 4/6, 6/8, 8/12 pcs/kg", "Whole Gutted: 4/6, 6/8, 8/12 pcs/kg"]
  },
  {
    name: "Threadfin Bream",
    image: threadfinBreamImg,
    specs: ["WR: 50/100, 100/200, 200/300 gr/pc", "WGGS: 50/100, 100/200, 200/300 gr/pc", "FILLET: 20/40, 40/80, 80/120 gr/pc"]
  },
  {
    name: "Black Pomfret",
    image: blackPomfretImg,
    specs: ["Whole Round: 100/200, 200/300, 300/500, 500/1000, 1000/Up gr/pc", "Whole Gutted: 100/200, 200/300, 300/500, 500/1000, 1000/Up gr/pc"]
  },
  {
    name: "Red Mullet",
    image: redMulletImg,
    specs: ["WR: 50/100, 100/200, 200/300 gr/pc", "WGGS: 50/100, 100/200, 200/300 gr/pc", "FILLET: 20/40, 40/80, 80/120 gr/pc"]
  },
  {
    name: "Grouper",
    image: grouperImg,
    specs: ["WR: 300/500, 500/800, 800/1000, 1000/3000 gr/pc", "WGGS: 300/500, 500/800, 800/1000, 1000/3000 gr/pc", "FILLET: 100/200, 200/300, 300/500, 500/800, 800/Up gr/pc", "PORTION: 50/80, 80/120, 120/170, 170/220 gr/pc"]
  },
  {
    name: "Emperorfish",
    image: emperorfishImg,
    specs: ["WR: 300/500, 500/800, 800/1000, 1000/3000 gr/pc", "WGGS: 300/500, 500/800, 800/1000, 1000/3000 gr/pc", "FILLET: 100/200, 200/300, 300/500, 500/800, 800/Up gr/pc", "PORTION: 50/80, 80/120, 120/170, 170/220 gr/pc"]
  },
  {
    name: "Parrotfish",
    image: parrotfishImg,
    specs: ["WR: 300/500, 500/800, 800/1000, 1000/3000 gr/pc", "WGGS: 300/500, 500/800, 800/1000, 1000/3000 gr/pc", "FILLET: 100/200, 200/300, 300/500, 500/800, 800/Up gr/pc", "PORTION: 50/80, 80/120, 120/170, 170/220 gr/pc"]
  },
  {
    name: "Red Snapper",
    image: redSnapperImg,
    specs: ["WR: 300/500, 500/800, 800/1000, 1000/3000 gr/pc", "WGGS: 300/500, 500/800, 800/1000, 1000/3000 gr/pc", "FILLET: 100/200, 200/300, 300/500, 500/800, 800/Up gr/pc", "PORTION: 50/80, 80/120, 120/170, 170/220 gr/pc"]
  }
];

const shrimpProducts = [
  {
    name: "HOSO",
    fullName: "Head On Shell On",
    image: hosoImg,
    specs: ["6/8, 8/12, 13/15, 16/20, 21/25, 26/30, 31/40, 41/50, 51/60 pcs/lb"]
  },
  {
    name: "HLSO",
    fullName: "Headless Shell On",
    image: hlsoImg,
    specs: ["8/12, 13/15, 16/20, 21/25, 26/30, 31/40, 41/50, 51/60, 61/70 pcs/lb"]
  },
  {
    name: "EZP",
    fullName: "Easy Peel",
    image: ezpImg,
    specs: ["8/12, 13/15, 16/20, 21/25, 26/30, 31/40, 41/50, 51/60, 61/70 pcs/lb"]
  },
  {
    name: "PDTO",
    fullName: "Peeled Deveined Tail On",
    image: pdtoImg,
    specs: ["13/15, 16/20, 21/25, 26/30, 31/40, 41/50, 51/60, 61/70, 71/90 pcs/lb"]
  },
  {
    name: "PD",
    fullName: "Peeled Deveined",
    image: pdImg,
    specs: ["16/20, 21/25, 26/30, 31/40, 41/50, 51/60, 61/70, 71/90, 91/120 pcs/lb"]
  }
];

export default function Products() {
  return (
    <div className="pt-20 flex flex-col items-center w-full">
      {/* Header */}
      <div className="bg-primary py-20 text-white relative overflow-hidden w-full flex justify-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"></div>
        <div className="w-full max-w-7xl px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Our Products</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Our main export strengths are Frozen Fish and Shrimp. We offer diverse specifications tailored to customer requirements.
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl px-6 md:px-8 lg:px-12 py-16">
        <Tabs defaultValue="fish" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-2 h-14 bg-muted/50 p-1">
              <TabsTrigger value="fish" className="text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md transition-all">
                Fish Products
              </TabsTrigger>
              <TabsTrigger value="shrimp" className="text-lg font-medium data-[state=active]:bg-white data-[state=active]:text-accent data-[state=active]:shadow-sm rounded-md transition-all">
                Shrimp Products
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="fish" className="space-y-8 animate-in fade-in-50 duration-500">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Fish Products Catalog
              </h2>
              <p className="text-muted-foreground">
                Explore our complete range of frozen fish products, each with detailed specifications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fishProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl shadow-lg border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {/* Product Name */}
                  <div className="p-6 pb-3 text-center bg-gradient-to-b from-blue-50/50 to-white">
                    <h3 className="text-2xl font-heading font-bold text-primary">{product.name}</h3>
                  </div>

                  {/* Product Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-b from-blue-50/30 to-white p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay with Product's specs */}
                    <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center">
                      <h4 className="text-white font-bold text-lg mb-3 text-center">Product's specs</h4>
                      <div className="space-y-2 max-h-full overflow-y-auto">
                        {product.specs.map((spec, idx) => (
                          <p key={idx} className="text-white/90 text-sm leading-relaxed">
                            • {spec}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="p-6 pt-3 text-center bg-gradient-to-t from-blue-50/30 to-white">
                    <p className="text-muted-foreground text-sm">
                      Different sizes and cuts available <Link href="/contact" className="text-accent hover:underline font-medium">contact</Link>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="shrimp" className="space-y-8 animate-in fade-in-50 duration-500">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent mb-4">
                Shrimp Products Catalog
              </h2>
              <p className="text-muted-foreground">
                From Black Tiger to Vannamei, our shrimp products are processed with care to maintain their natural sweetness and firm texture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {shrimpProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl shadow-lg border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {/* Product Name */}
                  <div className="p-6 pb-3 text-center bg-gradient-to-b from-orange-50/50 to-white">
                    <h3 className="text-2xl font-heading font-bold text-primary">{product.name}</h3>
                    <Badge variant="outline" className="border-accent text-accent mt-2">
                      {product.fullName}
                    </Badge>
                  </div>

                  {/* Product Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-b from-orange-50/30 to-white p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay with Product's specs */}
                    <div className="absolute inset-0 bg-accent/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center">
                      <h4 className="text-white font-bold text-lg mb-3 text-center">Product's specs</h4>
                      <div className="space-y-2">
                        {product.specs.map((spec, idx) => (
                          <p key={idx} className="text-white/90 text-sm leading-relaxed">
                            • {spec}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="p-6 pt-3 text-center bg-gradient-to-t from-orange-50/30 to-white">
                    <p className="text-muted-foreground text-sm">
                      Different sizes available <Link href="/contact" className="text-accent hover:underline font-medium">contact</Link>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-orange-50/50 p-8 rounded-xl border border-orange-100 text-center">
              <h3 className="text-xl font-bold mb-4 text-primary">Packing Options</h3>
              <p className="text-muted-foreground mb-6">
                All products can be packed according to specific customer requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Bulk", "IWP", "IVP", "Block", "Retail Pack"].map((item) => (
                  <div key={item} className="bg-white border border-orange-200 rounded-full px-6 py-2 text-sm text-primary font-bold shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
