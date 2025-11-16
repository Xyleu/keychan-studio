import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Download, Heart, Clock, TrendingUp, Calendar } from "lucide-react";
import { useState } from "react";

const Collections = () => {
  const [filter, setFilter] = useState<"today" | "week" | "all">("week");

  // Mock data for model cards
  const models = [
    { id: 1, title: "Cosmic Cat", creator: "ArtisanAlex", likes: 342, image: "placeholder" },
    { id: 2, title: "Dragon Badge", creator: "PixelPro", likes: 289, image: "placeholder" },
    { id: 3, title: "Retro Logo", creator: "VintageVibe", likes: 456, image: "placeholder" },
    { id: 4, title: "Tech Symbol", creator: "FutureFab", likes: 187, image: "placeholder" },
    { id: 5, title: "Nature Spirit", creator: "EcoArtist", likes: 523, image: "placeholder" },
    { id: 6, title: "Gaming Icon", creator: "PixelMaster", likes: 678, image: "placeholder" },
    { id: 7, title: "Abstract Wave", creator: "ModernMaker", likes: 234, image: "placeholder" },
    { id: 8, title: "Space Explorer", creator: "CosmicCraft", likes: 412, image: "placeholder" },
    { id: 9, title: "Music Note", creator: "SoundSmith", likes: 298, image: "placeholder" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 px-6 pb-12">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-4xl font-bold mb-2">Trending Keychains</h1>
              <p className="text-muted-foreground">Discover amazing 3D keychain designs from our community</p>
            </div>
            
            {/* Time Filter */}
            <div className="flex gap-2 glass rounded-lg p-1">
              <Button
                size="sm"
                variant={filter === "today" ? "default" : "ghost"}
                onClick={() => setFilter("today")}
                className={filter === "today" ? "bg-primary hover:bg-primary/90" : ""}
              >
                <Clock className="w-4 h-4 mr-1" />
                Today
              </Button>
              <Button
                size="sm"
                variant={filter === "week" ? "default" : "ghost"}
                onClick={() => setFilter("week")}
                className={filter === "week" ? "bg-primary hover:bg-primary/90" : ""}
              >
                <Calendar className="w-4 h-4 mr-1" />
                Week
              </Button>
              <Button
                size="sm"
                variant={filter === "all" ? "default" : "ghost"}
                onClick={() => setFilter("all")}
                className={filter === "all" ? "bg-primary hover:bg-primary/90" : ""}
              >
                <TrendingUp className="w-4 h-4 mr-1" />
                All Time
              </Button>
            </div>
          </div>

          {/* Grid of Model Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model) => (
              <div
                key={model.id}
                className="glass glass-hover rounded-xl overflow-hidden group cursor-pointer border border-glass-border"
              >
                {/* Model Preview */}
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-32 h-32 rounded-full bg-primary/20 blur-3xl absolute"></div>
                  <span className="text-6xl font-bold text-primary/20 relative z-10">3D</span>
                </div>

                {/* Card Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{model.title}</h3>
                      <p className="text-sm text-muted-foreground">by {model.creator}</p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full hover:bg-primary/10 hover:text-primary"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 fill-primary text-primary" />
                      <span>{model.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
