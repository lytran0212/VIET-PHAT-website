import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  company: z.string().min(1, { message: "Company name is required." }),
  productInterest: z.string().min(1, { message: "Please select a product." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      productInterest: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting Viet Phat. We will respond shortly.",
    });
    form.reset();
  }

  return (
    <div className="pt-20">
      <div className="bg-primary text-white py-16">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            Start Your Long-term Cooperation with Viet Phat Today.
          </p>
        </div>
      </div>

      <div className="container px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-8">Get In Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Our Address</h3>
                  <p className="text-muted-foreground w-3/4">
                    123 Fishery Road, Mekong Delta Industrial Zone, Can Tho City, Vietnam
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone / WhatsApp / Zalo</h3>
                  <p className="text-muted-foreground">
                    +84 123 456 789
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-muted-foreground">
                    sales@vietphatseafood.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-muted/30 rounded-xl border border-border">
              <h3 className="font-bold text-lg mb-2">Business Hours</h3>
              <p className="text-muted-foreground text-sm">Monday - Friday: 8:00 AM - 5:00 PM (GMT+7)</p>
              <p className="text-muted-foreground text-sm">Saturday: 8:00 AM - 12:00 PM</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-border/50">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-accent" />
              Send us a Message
            </h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company Ltd." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="productInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interested In</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Product" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="fish">Frozen Fish</SelectItem>
                            <SelectItem value="shrimp">Frozen Shrimp</SelectItem>
                            <SelectItem value="both">Both Fish & Shrimp</SelectItem>
                            <SelectItem value="other">Other Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your requirements (specs, quantity, destination)..." 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-12 text-lg shadow-lg">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
