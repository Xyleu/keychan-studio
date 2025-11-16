import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Sparkles, Box, Download } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            {/* Cosmic glow effect */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 blur-3xl">
              <div className="w-96 h-96 rounded-full bg-primary"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Transform 2D into 3D instantly</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Turn your 2D art into
                <br />
                <span className="text-primary">physical 3D Keychains</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Upload, Extrude, and Export in seconds. Create stunning 3D printable keychain models from any 2D image.
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <Link to="/create">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 cosmic-glow">
                    Start Creating
                  </Button>
                </Link>
                <Link to="/collections">
                  <Button size="lg" variant="outline" className="border-glass-border glass-hover">
                    Browse Collections
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* 3D Visual Placeholder */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="glass glass-hover rounded-2xl p-12 border border-primary/20">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl">
                <Box className="w-32 h-32 text-primary opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass glass-hover p-8 rounded-xl text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Upload</h3>
              <p className="text-muted-foreground">Drag and drop any 2D image to get started instantly</p>
            </div>

            <div className="glass glass-hover p-8 rounded-xl text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Box className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3D Conversion</h3>
              <p className="text-muted-foreground">Adjust thickness and customize your keychain design</p>
            </div>

            <div className="glass glass-hover p-8 rounded-xl text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Export STL</h3>
              <p className="text-muted-foreground">Download print-ready files for any 3D printer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
