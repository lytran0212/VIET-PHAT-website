import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import fishImage from "@assets/generated_images/fresh_fish_fillets.png";
import shrimpImage from "@assets/generated_images/fresh_raw_shrimp.png";

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
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={fishImage} alt="Fish Products" className="w-full h-auto object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">Premium Frozen Fish</h2>
                <p className="text-muted-foreground mb-8">
                  We process a wide range of fish species with precise cuts to meet international culinary standards. Our processing ensures texture and flavor are perfectly preserved.
                </p>
                
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-8 bg-primary rounded-full"></span>
                  Specifications
                </h3>
                <Card className="border-none shadow-md overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted">
                      <TableRow>
                        <TableHead className="font-bold text-primary">Abbreviation</TableHead>
                        <TableHead className="font-bold text-primary">Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-bold">WR</TableCell>
                        <TableCell>Whole Round</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold">WGGS</TableCell>
                        <TableCell>Whole Gutted Gilled Scaled</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold">HGT</TableCell>
                        <TableCell>Headless Gutted Tail-off</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold">Other Cuts</TableCell>
                        <TableCell>Butterfly, Fillet, Portion, Chunk, Loin, Steak</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Value Added Products</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Mince", "Finger", "Burger", "Cube", "Strip"].map((item) => (
                      <Badge key={item} variant="secondary" className="text-sm py-1 px-3 bg-blue-100 text-primary hover:bg-blue-200">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
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
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-bold">HOSO</TableCell>
                        <TableCell>Head On Shell On</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold">HLSO</TableCell>
                        <TableCell>Headless Shell On</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold">EZP</TableCell>
                        <TableCell>Easy Peel</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold">PDTO</TableCell>
                        <TableCell>Peeled Deveined Tail On</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold">PD</TableCell>
                        <TableCell>Peeled Deveined</TableCell>
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
                     {["Bulk", "IWP (Individually Wrapped)", "IVP (Vacuum Packed)", "Block", "Retail Pack"].map((item) => (
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
