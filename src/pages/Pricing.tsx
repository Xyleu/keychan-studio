import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "5 keychains per month",
        "Basic 3D conversion",
        "Standard quality export",
        "Community access",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$12",
      period: "per month",
      features: [
        "Unlimited keychains",
        "Advanced customization",
        "High-quality export",
        "Priority support",
        "Commercial license",
        "Early feature access",
      ],
      cta: "Start Pro Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      features: [
        "Everything in Pro",
        "Custom branding",
        "API access",
        "Dedicated support",
        "Team collaboration",
        "Volume discounts",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-12 px-6 pb-12">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your keychain creation needs
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-xl p-8 border ${
                  plan.highlighted
                    ? "border-primary shadow-xl ring-2 ring-primary/20"
                    : "border-border shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                </div>

                <Button
                  className={`w-full mb-8 ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : ""
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
