import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, Calendar, Users, CheckCircle } from "lucide-react";

const portfolioProjects = [
  {
    title: "Luxury London Penthouse",
    location: "Kensington, London",
    type: "Deep Clean & Maintenance",
    duration: "Ongoing since 2023",
    size: "4-bedroom, 3-bathroom",
    image: "https://images.unsplash.com/photo-1570825248127-5160e96657b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSyUyMGhvdXNlJTIwY2xlYW5pbmclMjBwb3J0Zm9saW98ZW58MXx8fHwxNzU2NzExMjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Marble surfaces", "Designer furniture", "Art collection care", "Weekly maintenance"],
    testimonial: "SparkClean has maintained our penthouse immaculately for over a year. Their attention to detail with our expensive furnishings is exceptional.",
    client: "Private Residence"
  },
  {
    title: "Tech Startup Headquarters", 
    location: "Shoreditch, London",
    type: "Commercial Cleaning",
    duration: "6 months",
    size: "3,000 sq ft office",
    image: "https://images.unsplash.com/photo-1594473371340-9c2f5a08fc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMb25kb24lMjBvZmZpY2UlMjBjbGVhbmluZ3xlbnwxfHx8fDE3NTY3MTEyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Open plan office", "Kitchen facilities", "Meeting rooms", "After-hours service"],
    testimonial: "Professional, reliable, and never disrupts our work. The office is spotless every morning when we arrive.",
    client: "TechFlow Solutions Ltd"
  },
  {
    title: "Victorian Family Home",
    location: "Edinburgh, Scotland", 
    type: "Move-in Deep Clean",
    duration: "2-day intensive",
    size: "5-bedroom Victorian house",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Period features", "Original floors", "Multiple fireplaces", "Garden areas"],
    testimonial: "Transformed our new home before we moved in. Every room was pristine and ready for our family.",
    client: "The Morrison Family"
  },
  {
    title: "Modern Manchester Apartment",
    location: "Deansgate, Manchester",
    type: "Regular Maintenance", 
    duration: "18 months",
    size: "2-bedroom apartment",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Floor-to-ceiling windows", "Modern appliances", "Balcony cleaning", "Bi-weekly service"],
    testimonial: "Consistent quality service. My apartment always looks show-home ready for unexpected visitors.",
    client: "Private Client"
  },
  {
    title: "Birmingham Office Complex",
    location: "Birmingham City Centre",
    type: "Contract Cleaning",
    duration: "2 years ongoing",
    size: "15,000 sq ft multi-floor",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Multiple office suites", "Reception areas", "Communal spaces", "Daily service"],
    testimonial: "SparkClean manages all our cleaning needs across multiple floors. Excellent value and service quality.",
    client: "Midlands Business Center"
  },
  {
    title: "Welsh Countryside Estate",
    location: "Brecon Beacons, Wales",
    type: "Holiday Home Maintenance",
    duration: "Seasonal service",
    size: "Large country house + grounds",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Aga cleaning", "Log burner maintenance", "Outdoor furniture", "Pre-arrival preparation"],
    testimonial: "Our holiday home is always ready when we arrive. SparkClean takes care of everything perfectly.",
    client: "Holiday Home Owner"
  }
];

export function Portfolio() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the exceptional cleaning results we&apos;ve delivered
            across the UK. From luxury London penthouses to family homes in
            Scotland, see why thousands trust SparkClean.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg text-center shadow-sm">
            <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
            <div className="text-gray-600">Properties Cleaned</div>
          </div>
          <div className="bg-white p-6 rounded-lg text-center shadow-sm">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="bg-white p-6 rounded-lg text-center shadow-sm">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600">UK Cities Served</div>
          </div>
          <div className="bg-white p-6 rounded-lg text-center shadow-sm">
            <div className="text-3xl font-bold text-primary mb-2">5 Years</div>
            <div className="text-gray-600">Average Client Relationship</div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[3/4] lg:aspect-[16/9]  relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-destructive text-white">
                    {project.type}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{project.size}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <blockquote className="text-sm text-gray-700 italic mb-2">
                      {`"${project.testimonial}"`}
                    </blockquote>
                    <cite className="text-xs text-gray-500 font-medium">
                      - {project.client}
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary text-white p-8 lg:p-12 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Join Our Portfolio?
            </h3>
            <p className="text-lg mb-8 text-blue-100">
              Let us transform your space with the same attention to detail and
              professionalism showcased in our portfolio. Get your free,
              no-obligation quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Get Free Quote
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors">
                Call 0800 123 4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}