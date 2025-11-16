import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const CustomizationPanel = () => {
  const [baseThickness, setBaseThickness] = useState([5]);
  const [textHeight, setTextHeight] = useState([2]);
  const [text, setText] = useState("");
  const [fontStyle, setFontStyle] = useState("arial");
  const [hasHole, setHasHole] = useState(true);
  const [holeX, setHoleX] = useState([50]);
  const [holeY, setHoleY] = useState([50]);
  const [previewColor, setPreviewColor] = useState("#40E0D0");
  const [isGenerating, setIsGenerating] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File size must be less than 10MB");
        return;
      }
      if (!file.type.startsWith("image/")) {
        toast.error("Please upload an image file");
        return;
      }
      setUploadedImage(file);
      toast.success(`Image "${file.name}" uploaded successfully`);
    }
  };

  const handleGenerate = async () => {
    if (!uploadedImage) {
      toast.error("Please upload an image first");
      return;
    }

    setIsGenerating(true);

    try {
      const formData = new FormData();
      formData.append('image', uploadedImage);
      formData.append('params', JSON.stringify({
        baseThickness: baseThickness[0],
        textHeight: textHeight[0],
        text,
        fontStyle,
        hasHole,
        holeX: holeX[0],
        holeY: holeY[0],
      }));

      const { data, error } = await supabase.functions.invoke('generate-3d-model', {
        body: formData,
      });

      if (error) throw error;

      console.log('Generated STL:', data);
      toast.success("3D model generated successfully!");
      
      // TODO: Display the 3D model in the viewport
      // TODO: Enable STL download

    } catch (error) {
      console.error('Generation error:', error);
      toast.error(error instanceof Error ? error.message : "Failed to generate 3D model");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="h-full bg-white border-l border-border p-6 overflow-y-auto">
      <div className="space-y-8">
        {/* Step 1: Upload Image */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Step 1: Upload Your Image</h3>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            onChange={handleFileChange}
            className="hidden"
          />
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-muted rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
          >
            <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
            {uploadedImage ? (
              <>
                <p className="text-sm text-foreground font-medium mb-1">{uploadedImage.name}</p>
                <p className="text-xs text-muted-foreground">Click to change</p>
              </>
            ) : (
              <>
                <p className="text-sm text-muted-foreground mb-1">Click to upload</p>
                <p className="text-xs text-muted-foreground">PNG or JPG (Max 10MB)</p>
              </>
            )}
          </div>
        </div>

        {/* Step 2: Add Text */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Step 2: Add Text (Optional)</h3>
          <Input
            placeholder="Enter text..."
            className="mb-3"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Select value={fontStyle} onValueChange={setFontStyle}>
            <SelectTrigger>
              <SelectValue placeholder="Select font" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="arial">Arial</SelectItem>
              <SelectItem value="helvetica">Helvetica</SelectItem>
              <SelectItem value="times">Times New Roman</SelectItem>
              <SelectItem value="courier">Courier</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Step 3: Customize Keychain */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4">Step 3: Customize Your Keychain</h3>
          
          {/* Base Thickness */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <Label className="text-sm font-medium">Base Thickness</Label>
              <span className="text-sm text-primary font-medium">{baseThickness[0]}mm</span>
            </div>
            <Slider
              value={baseThickness}
              onValueChange={setBaseThickness}
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

          {/* Text Height */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label className="text-sm font-medium">Text Height</Label>
              <span className="text-sm text-primary font-medium">{textHeight[0]}mm</span>
            </div>
            <Slider
              value={textHeight}
              onValueChange={setTextHeight}
              min={0.5}
              max={5}
              step={0.1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>0.5mm</span>
              <span>5mm</span>
            </div>
          </div>
        </div>

        {/* Step 4: Add Keychain Hole */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Step 4: Add Keychain Hole</h3>
          <div className="flex items-center justify-between mb-4">
            <Label htmlFor="hole-toggle" className="text-sm font-medium">Add Hole</Label>
            <Switch
              id="hole-toggle"
              checked={hasHole}
              onCheckedChange={setHasHole}
            />
          </div>

          {hasHole && (
            <>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-sm font-medium">Horizontal (X)</Label>
                  <span className="text-sm text-primary font-medium">{holeX[0]}%</span>
                </div>
                <Slider
                  value={holeX}
                  onValueChange={setHoleX}
                  min={0}
                  max={100}
                  step={5}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-sm font-medium">Vertical (Y)</Label>
                  <span className="text-sm text-primary font-medium">{holeY[0]}%</span>
                </div>
                <Slider
                  value={holeY}
                  onValueChange={setHoleY}
                  min={0}
                  max={100}
                  step={5}
                  className="w-full"
                />
              </div>
            </>
          )}
        </div>

        {/* Step 5: Preview Color */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Step 5: Preview Color</h3>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={previewColor}
              onChange={(e) => setPreviewColor(e.target.value)}
              className="w-12 h-12 rounded-lg cursor-pointer border-2 border-border"
            />
            <span className="text-sm text-muted-foreground font-mono">{previewColor}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Preview only - STL file has no color</p>
        </div>

        {/* Generate Button */}
        <Button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            "Generate 3D Model"
          )}
        </Button>
      </div>
    </div>
  );
};
