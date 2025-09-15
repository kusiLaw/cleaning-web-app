import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Home, Building2, FolderOpen, Calendar, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description:
      "Tailored regular cleaning (weekly, fortnightly, monthly) to suit your lifestyle and budget. Thorough one-off deep cleans, spring cleans, and end-of-tenancy cleans.",
    features: [
      "Attention to detail in all rooms",
      "High-quality, eco-friendly products",
      "Trusted, fully-vetted cleaners",
      "Flexible scheduling",
    ],
    badge: "Most Popular",
    badgeColor: "bg-primary",
  },
  {
    icon: Building2,
    title: "Commercial & Office Cleaning",
    description:
      "Customised cleaning programs designed for your specific business needs and hours. Creating professional, hygienic environments for employees and clients.",
    features: [
      "Daily, nightly, or weekly servicing",
      "Comprehensive office services",
      "Minimal business disruption",
      "Sanitizing high-touch points",
    ],
    badge: "Business",
    badgeColor: "bg-yellow-tertiary",
  },
  {
    icon: FolderOpen,
    title: "Decluttering & Organisation",
    description:
      "Compassionate and practical support to help you reclaim your space and reduce overwhelm. Systematic approach with sustainable storage solutions.",
    features: [
      "Cluttered rooms & cupboards",
      "Home offices, garages, lofts",
      "Sort, categorise, organise",
      "Discretion and sensitivity",
    ],
    badge: "Specialised",
    badgeColor: "bg-destructive",
  },
  {
    icon: Calendar,
    title: "Regular Maintenance",
    description:
      "Consistent, high-standard cleaning services with flexible scheduling to maintain your pristine environment long-term.",
    features: [
      "Weekly/Fortnightly/Monthly",
      "Same trusted cleaner",
      "Reliable scheduling",
      "Quality guarantee",
    ],
    badge: "Reliable",
    badgeColor: "bg-foreground",
  },
];

interface ServicesProps {
  onBookNow?: () => void;
}

export function Services({ onBookNow }: ServicesProps) {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Portfolio of Services
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            GrapeCity Ltd offers comprehensive cleaning and decluttering
            solutions across Hertfordshire. We transform residential havens,
            commercial workplaces, and business offices into pristine, healthy,
            and organised environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="relative group hover:shadow-lg transition-shadow duration-300 border-border"
              >
                <CardContent className="p-6">
                  {/* Badge */}
                  <Badge
                    className={`absolute -top-3 left-6 ${service.badgeColor} text-white`}
                  >
                    {service.badge}
                  </Badge>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/80 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Choose GrapeCity */}
        <div className="mt-20 bg-secondary p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Why Choose GrapeCity?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Hertfordshire Strong
              </h4>
              <p className="text-sm text-muted-foreground">
                We&apos;re not just in Hertfordshire; we&apos;re part of it.
                Deep local community roots and understanding.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Uncompromising Quality
              </h4>
              <p className="text-sm text-muted-foreground">
                Consistent, high-standard results every time. Built on
                dependability and doing the job right.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Fully Insured & Vetted
              </h4>
              <p className="text-sm text-muted-foreground">
                Rigorously background-checked, fully insured staff trained to
                our exacting standards.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-secondary rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to experience the GrapeCity difference?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact us for a free, no-obligation consultation and quote
              tailored to your residential, commercial, or decluttering needs in
              Hertfordshire.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
              <button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors mr4"
                onClick={onBookNow}
              >
                Get Free Quote
              </button>
              <button className="border border-primary text-primary hover:bg-secondary px-8 py-3 rounded-lg font-medium transition-colors">
                Call 01707 929 669
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}