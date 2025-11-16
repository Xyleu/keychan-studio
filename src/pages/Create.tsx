import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Upload, Download, Box } from "lucide-react";
import { useState } from "react";

const Create = () => {
  const [thickness, setThickness] = useState([5]);
  const [hasHole, setHasHole] = useState(true);
  const [holePosition, setHolePosition] = useState([50]);
  const [color, setColor] = useState("#40E0D0");

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 px-6 pb-6">
        <div className="container mx-auto">
          <div className="flex gap-6 h-[calc(100vh-7rem)]">
            {/* Left Panel - Tools */}
            <aside className="w-80 glass rounded-xl p-6 border border-glass-border overflow-y-auto">
              <h2 className="text-2xl font-bold mb-6">Tools</h2>
              
              {/* Upload Area */}
              <div className="mb-8">
                <Label className="text-sm font-semibold mb-3 block">Upload Image</Label>
                <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer glass-hover">
                  <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">Drag & drop your image</p>
                  <p className="text-xs text-muted-foreground">or click to browse</p>
                </div>
              </div>

              {/* Thickness Slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <Label className="text-sm font-semibold">Thickness</Label>
                  <span className="text-sm text-primary font-medium">{thickness[0]}mm</span>
                </div>
                <Slider
                  value={thickness}
                  onValueChange={setThickness}
                  min={1}
                  max={10}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1mm</span>
                  <span>10mm</span>
                </div>
              </div>

              {/* Keychain Hole Toggle */}
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <Label htmlFor="hole-toggle" className="text-sm font-semibold">Keychain Hole</Label>
                  <Switch
                    id="hole-toggle"
                    checked={hasHole}
                    onCheckedChange={setHasHole}
                  />
                </div>
              </div>

              {/* Hole Position */}
              {hasHole && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-sm font-semibold">Hole Position</Label>
                    <span className="text-sm text-primary font-medium">{holePosition[0]}%</span>
                  </div>
                  <Slider
                    value={holePosition}
                    onValueChange={setHolePosition}
                    min={0}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </div>
              )}

              {/* Color Picker */}
              <div className="mb-8">
                <Label className="text-sm font-semibold mb-3 block">Preview Color</Label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-12 h-12 rounded-lg cursor-pointer border-2 border-glass-border"
                  />
                  <span className="text-sm text-muted-foreground font-mono">{color}</span>
                </div>
              </div>
            </aside>

            {/* Center - 3D Viewport */}
            <main className="flex-1 glass rounded-xl border border-glass-border overflow-hidden flex flex-col">
              <div className="p-4 border-b border-glass-border flex items-center justify-between">
                <h2 className="text-lg font-semibold">3D Preview</h2>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold cosmic-glow">
                  <Download className="w-4 h-4 mr-2" />
                  Export .STL
                </Button>
              </div>
              
              <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-card/50 to-card">
                <div className="text-center">
                  <Box className="w-32 h-32 text-primary/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">Upload an image to preview your 3D keychain</p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
