import { Link, useLocation } from "react-router-dom";
import { Layers3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <nav className="bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Layers3 className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">KEYCHAN</span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
              Sign In / Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
