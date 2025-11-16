import { Navbar } from "@/components/Navbar";
import { ViewportCanvas } from "@/components/ViewportCanvas";
import { CustomizationPanel } from "@/components/CustomizationPanel";

const Home = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Left/Center: 3D Viewport (70%) */}
        <div className="flex-1 p-6">
          <ViewportCanvas />
        </div>

        {/* Right: Customization Panel (30%) */}
        <div className="w-[400px] flex-shrink-0">
          <CustomizationPanel />
        </div>
      </div>
    </div>
  );
};

export default Home;
