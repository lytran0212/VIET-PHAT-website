import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

export default function News() {
  // Mock data for news
  const newsItems = [
    {
      id: 1,
      title: "Viet Phat Expands Processing Capacity",
      date: "October 15, 2024",
      category: "Company News",
      excerpt: "We are proud to announce the opening of our new processing line, increasing our daily capacity by 40% to meet global demand.",
      image: "https://images.unsplash.com/photo-1534951009808-766178b47a8e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Market Update: Shrimp Prices Q4 2024",
      date: "November 02, 2024",
      category: "Market Insights",
      excerpt: "An analysis of the current trends in the international shrimp market and what to expect for the upcoming holiday season.",
      image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Sustainable Fishing Certification Achieved",
      date: "September 10, 2024",
      category: "Sustainability",
      excerpt: "Viet Phat has successfully renewed its commitment to sustainable fishing practices, ensuring long-term ecological balance.",
      image: "https://images.unsplash.com/photo-1615141982880-1313d4433ba7?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-20 flex flex-col items-center w-full">
      <div className="bg-muted/30 py-16 w-full flex justify-center">
        <div className="w-full max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">News & Updates</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest company news and seafood market insights.
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {newsItems.map((news) => (
            <Card key={news.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-border/50 w-full max-w-sm">
              <div className="h-48 overflow-hidden">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100">
                    {news.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {news.date}
                  </div>
                </div>
                <CardTitle className="text-xl font-heading line-clamp-2">{news.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3 text-base">
                  {news.excerpt}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-accent font-semibold text-sm cursor-pointer hover:underline">Read More &rarr;</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
