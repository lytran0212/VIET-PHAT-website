import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

// Fish Images
import barramundiImg from "@assets/generated_images/fresh_barramundi_fish.png";
import tilapiaImg from "@assets/generated_images/fresh_tilapia_fish.png";
import pangasiusImg from "@assets/generated_images/fresh_pangasius_fish.png";
import yellowfinImg from "@assets/generated_images/fresh_yellowfin_tuna.png";
import skipjackImg from "@assets/generated_images/fresh_skipjack_tuna.png";
import roundScadImg from "@assets/generated_images/fresh_round_scad.png";
import indianMackerelImg from "@assets/generated_images/fresh_indian_mackerel.png";
import yellowtailScadImg from "@assets/generated_images/fresh_yellowtail_scad.png";
import blackPomfretImg from "@assets/generated_images/fresh_black_pomfret.png";
import redMulletImg from "@assets/generated_images/fresh_red_mullet.png";
import grouperImg from "@assets/generated_images/fresh_grouper_fish.png";
import emperorfishImg from "@assets/generated_images/fresh_emperorfish.png";
import parrotfishImg from "@assets/generated_images/fresh_parrotfish.png";
import redSnapperImg from "@assets/generated_images/fresh_red_snapper.png";

import shrimpImage from "@assets/generated_images/fresh_raw_shrimp.png";

const fishProducts = [
  {
    id: "01",
    name: "Barramundi",
    image: barramundiImg,
    specs: [
      { label: "WR", value: "300/500, 500/800, 800/1000, 1000/3000 gr/pc" },
      { label: "WGGS", value: "300/500, 500/800, 800/1000, 1000/3000 gr/pc" },
      { label: "FILLET", value: "100/200, 200/300, 300/500, 500/800, 800/1000 gr/pc" },
      { label: "PORTION", value: "50/80, 80/120, 120/170, 170/230 gr/pc" }
    ]
  },
  {
    id: "02",
    name: "Tilapia",
    image: tilapiaImg,
    specs: [
      { label: "WR", value: "200/300, 300/500, 500/800, 800/1200 gr/pc" },
      { label: "WGGS", value: "200/300, 300/500, 500/800, 800/1200 gr/pc" },
      { label: "MOON-CUT", value: "Fin Off, Tail Off sizes 100/200, 200/300, 300/500 gr/pc" },
      { label: "FILLET", value: "50/80, 80/120, 120/170, 170/230 gr/pc" }
    ]
  },
  {
    id: "03",
    name: "Pangasius",
    image: pangasiusImg,
    specs: [
      { label: "WR", value: "500/800, 800/1200, 1200/UP gr/pc" },
      { label: "HGT (Chunk)", value: "300/500, 500/800, 800/1200 gr/pc" },
      { label: "STEAK", value: "thickness 20-30 mm" },
      { label: "FILLET", value: "120/170, 170/220, 220/Up gr/pc" },
      { label: "FINGER", value: "dimensions 90 x 20 x 15 mm" },
      { label: "BURGER", value: "dimensions 90 x 90 x 15 mm" }
    ]
  },
  {
    id: "04",
    name: "Yellowfin Tuna",
    image: yellowfinImg,
    specs: [
      { label: "LOIN", value: "2/3, 3/5, 5/7, 7/UP kg/pc" },
      { label: "STEAK", value: "4/6, 6/8, 8/12 oz/pc" },
      { label: "SAKU", value: "200/300, 300/500 gr/pc" }
    ]
  },
  {
    id: "05",
    name: "Skipjack Tuna",
    image: skipjackImg,
    specs: [
      { label: "Whole Round", value: "1/2, 2/3 kg/pc" },
      { label: "Whole Gutted", value: "1/2, 2/3 kg/pc" }
    ]
  },
  {
    id: "06",
    name: "Round Scad",
    image: roundScadImg,
    specs: [
      { label: "Whole Round", value: "6/8, 8/10, 10/12, 12/14, 14/18 pcs/kg" },
      { label: "Whole Gutted", value: "6/8, 8/10, 10/12, 12/14, 14/18 pcs/kg" }
    ]
  },
  {
    id: "07",
    name: "Indian Mackerel",
    image: indianMackerelImg,
    specs: [
      { label: "Whole Round", value: "6/8, 8/10, 10/12, 12/14, 14/18 pcs/kg" },
      { label: "Whole Gutted", value: "6/8, 8/10, 10/12, 12/14, 14/18 pcs/kg" }
    ]
  },
  {
    id: "08",
    name: "Yellowtail Scad",
    image: yellowtailScadImg,
    specs: [
      { label: "Whole Round", value: "4/6, 6/8, 8/12 pcs/kg" },
      { label: "Whole Gutted", value: "4/6, 6/8, 8/12 pcs/kg" }
    ]
  },
  {
    id: "09",
    name: "Black Pomfret",
    image: blackPomfretImg,
    specs: [
      { label: "Whole Round", value: "100/200, 200/300, 300/500, 500/1000, 1000/Up gr/pc" },
      { label: "Whole Gutted", value: "100/200, 200/300, 300/500, 500/1000, 1000/Up gr/pc" }
    ]
  },
  {
    id: "10",
    name: "Red Mullet",
    image: redMulletImg,
    specs: [
      { label: "WR", value: "50/100, 100/200, 200/300 gr/pc" },
      { label: "WGGS", value: "50/100, 100/200, 200/300 gr/pc" },
      { label: "FILLET", value: "20/40, 40/80, 80/120 gr/pc" }
    ]
  },
  {
    id: "11",
    name: "Grouper",
    image: grouperImg,
    specs: [
      { label: "WR", value: "300/500, 500/800, 800/1000, 1000/3000 gr/pc" },
      { label: "WGGS", value: "300/500, 500/800, 800/1000, 1000/3000 gr/pc" },
      { label: "FILLET", value: "100/200, 200/300, 300/500, 500/800, 800/Up gr/pc" },
      { label: "PORTION", value: "50/80, 80/120, 120/170, 170/220 gr/pc" }
    ]
  },
  {
    id: "12",
    name: "Emperorfish",
    image: emperorfishImg,
    specs: [
      { label: "WR", value: "300/500, 500/800, 800/1000, 1000/3000 gr/pc" },
      { label: "WGGS", value: "300/500, 500/800, 800/1000, 1000/3000 gr/pc" },
      { label: "FILLET", value: "100/200, 200/300, 300/500, 500/800, 800/Up gr/pc" },
      { label: "PORTION", value: "50/80, 80/120, 120/170, 170/220 gr/pc" }
    ]
  },
  {
    id: "13",
    name: "Parrotfish",
    image: parrotfishImg,
    specs: [
      { label: "WR", value: "300/500, 500/800, 800/1000, 1000/3000 gr/pc" },
      { label: "WGGS", value: "300/500, 500/800, 800/1000, 1000/3000 gr/pc" },
      { label: "FILLET", value: "100/200, 200/300, 300/500, 500/800, 800/Up gr/pc" },
      { label: "PORTION", value: "50/80, 80/120, 120/170, 170/220 gr/pc" }
    ]
  },
  {
    id: "14",
    name: "Red Snapper",
    image: redSnapperImg,
    specs: [
      { label: "WR", value: "300/500, 500/800, 800/1000, 1000/3000 gr/pc" },
      { label: "WGGS", value: "300/500, 500/800, 800/1000, 1000/3000 gr/pc" },
      { label: "FILLET", value: "100/200, 200/300, 300/500, 500/800, 800/Up gr/pc" },
      { label: "PORTION", value: "50/80, 80/120, 120/170, 170/220 gr/pc" }
    ]
  }
];

export default function Products() {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-primary py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"></div>
        <div className="container px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Our Products</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Our main export strengths are Frozen Fish and Shrimp. We offer diverse specifications tailored to customer requirements.
          </p>
        </div>
      </div>

      <div className="container px-4 py-16">
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
            <div className="grid gap-12">
              {fishProducts.map((product) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg border border-border/50 overflow-hidden"
                >
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Image Section */}
                    <div className="md:col-span-1 bg-muted/20 relative min-h-[300px] md:min-h-full flex items-center justify-center p-6">
                      <div className="absolute top-6 left-6 z-10">
                        <span className="text-6xl font-bold text-primary/10 font-heading leading-none">
                          {product.id}
                        </span>
                      </div>
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-auto object-contain max-h-[250px] drop-shadow-xl transition-transform hover:scale-105 duration-500" 
                      />
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-2 p-8 flex flex-col justify-center">
                      <h2 className="text-3xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
                        {product.name}
                        <div className="h-1 w-12 bg-accent rounded-full mt-1"></div>
                      </h2>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {product.specs.map((spec, index) => (
                          <div key={index} className="bg-blue-50/50 p-4 rounded-lg border border-blue-100/50 hover:bg-blue-50 transition-colors">
                            <span className="block text-accent font-bold text-sm mb-1 uppercase tracking-wide">
                              {spec.label}
                            </span>
                            <span className="text-foreground/90 font-medium">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="shrimp" className="space-y-8 animate-in fade-in-50 duration-500">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
                <img src={shrimpImage} alt="Shrimp Products" className="w-full h-auto object-cover" />
              </div>
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-heading font-bold text-accent mb-4">Premium Frozen Shrimp</h2>
                <p className="text-muted-foreground mb-8">
                  From Black Tiger to Vannamei, our shrimp products are processed with care to maintain their natural sweetness and firm texture.
                </p>
                
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-8 bg-accent rounded-full"></span>
                  Specifications
                </h3>
                <Card className="border-none shadow-md overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted">
                      <TableRow>
                        <TableHead className="font-bold text-primary">Abbreviation</TableHead>
                        <TableHead className="font-bold text-primary">Description</TableHead>
                        <TableHead className="font-bold text-primary">Sizes (pcs/lb)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-bold text-accent">HOSO</TableCell>
                        <TableCell className="font-medium">Head On Shell On</TableCell>
                        <TableCell className="text-sm text-muted-foreground">6/8, 8/12, 13/15, 16/20, 21/25, 26/30, 31/40, 41/50, 51/60</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold text-accent">HLSO</TableCell>
                        <TableCell className="font-medium">Headless Shell On</TableCell>
                         <TableCell className="text-sm text-muted-foreground">8/12, 13/15, 16/20, 21/25, 26/30, 31/40, 41/50, 51/60, 61/70</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold text-accent">EZP</TableCell>
                        <TableCell className="font-medium">Easy Peel</TableCell>
                         <TableCell className="text-sm text-muted-foreground">8/12, 13/15, 16/20, 21/25, 26/30, 31/40, 41/50, 51/60, 61/70</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold text-accent">PDTO</TableCell>
                        <TableCell className="font-medium">Peeled Deveined Tail On</TableCell>
                         <TableCell className="text-sm text-muted-foreground">13/15, 16/20, 21/25, 26/30, 31/40, 41/50, 51/60, 61/70, 71/90</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold text-accent">PD</TableCell>
                        <TableCell className="font-medium">Peeled Deveined</TableCell>
                         <TableCell className="text-sm text-muted-foreground">16/20, 21/25, 26/30, 31/40, 41/50, 51/60, 61/70, 71/90, 91/120</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>

                <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-bold mb-2 text-primary">Packing Options</h3>
                  <p className="text-sm text-muted-foreground">
                    All products can be packed according to specific customer requirements.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                     {["Bulk", "IWP", "IVP", "Block", "Retail Pack"].map((item) => (
                      <div key={item} className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-primary font-medium shadow-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
