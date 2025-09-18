'use client';

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Users,
  Award,
  Shield,
  Leaf,
  Clock,
  MapPin,
  CheckCircle,
  Heart,
  Target,
  Star,
  Phone,
} from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Davis",
    role: "Founder & Managing Director",
    experience: "12+ years",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=300",
    bio: "Founded GrapeCity with a passion for providing exceptional cleaning services to Hertfordshire families and businesses.",
  },
  {
    name: "Michael Thompson",
    role: "Operations Manager",
    experience: "10+ years",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=300",
    bio: "Coordinates our local teams across Hertfordshire and ensures every client receives exceptional service.",
  },
  {
    name: "Rachel Collins",
    role: "Quality & Training Manager",
    experience: "8+ years",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=300",
    bio: "Develops our training programs and maintains our high standards where ...germs fear us.",
  },
];

const achievements = [
  { year: "2020", milestone: "GrapeCity founded in St Albans" },
  { year: "2021", milestone: "Expanded across Hertfordshire" },
  { year: "2022", milestone: "Reached 500+ satisfied customers" },
  { year: "2023", milestone: "Launched specialised decluttering services" },
  { year: "2024", milestone: "Won 'Best Local Cleaning Service' award" },
  { year: "2025", milestone: "1,000+ properties cleaned monthly" },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for perfection in every clean, treating your space with the same care as our own.",
  },
  {
    icon: Shield,
    title: "Trust",
    description:
      "Fully insured, DBS-checked team members you can trust in your home or office.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "Using environmentally safe products that protect your family and our planet.",
  },
  {
    icon: Heart,
    title: "Care",
    description:
      "We genuinely care about your satisfaction and building lasting relationships.",
  },
];

export function AboutUs() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            About GrapeCity
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Born from a passion for cleanliness and customer service, GrapeCity
            has grown to become Hertfordshire&apos;s most trusted cleaning service.
            Where ...germs fear us, we serve hundreds of homes and businesses
            across St Albans, Hemel Hempstead, Watford, and surrounding areas.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2020 by Sarah Davis, GrapeCity began as a local
                Hertfordshire cleaning service with a simple mission: to provide
                exceptional cleaning services where germs fear us, giving people
                more time to focus on what truly matters.
              </p>
              <p>
                What started with just two team members has grown into a trusted
                local operation with over 25 professionally trained cleaners
                serving more than 1,000 properties monthly across Hertfordshire.
                Our success stems from our unwavering commitment to quality,
                reliability, and customer satisfaction.
              </p>
              <p>
                Today, we&apos;re proud to be Hertfordshire&apos;s most trusted cleaning
                company, maintaining the same personal touch and attention to
                detail that built our local reputation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-gray-600">
                  Professional Cleaners
                </div>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary">1,000+</div>
                <div className="text-sm text-gray-600">Monthly Cleans</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1608012075343-25226e3099f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjBVS3xlbnwxfHx8fDE3NTY3MTEyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="SparkClean professional team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-6 border-none shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center overflow-hidden shadow-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <Badge variant="outline" className="mb-3">
                    {member.experience}
                  </Badge>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {achievement.year}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">
                      {achievement.milestone}
                    </p>
                  </div>
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="mb-20 bg-gray-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Certifications & Recognition
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Award className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="font-medium text-gray-900">Quality Assured</div>
              <div className="text-sm text-gray-600">Local Standards</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="font-medium text-gray-900">Fully Insured</div>
              <div className="text-sm text-gray-600">£1M Public Liability</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="font-medium text-gray-900">DBS Checked</div>
              <div className="text-sm text-gray-600">All Team Members</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Star className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="font-medium text-gray-900">Local Reviews</div>
              <div className="text-sm text-gray-600">5-Star Rated</div>
            </div>
          </div>
        </div>

        {/* Coverage Map */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Hertfordshire Coverage
          </h2>
          <div className="bg-primary/5 p-8 rounded-2xl">
            <div className="text-center mb-8">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Local Hertfordshire Service
              </h3>
              <p className="text-gray-600">
                We proudly serve customers across Hertfordshire and surrounding
                areas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Main Areas</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>St Albans • Hemel Hempstead</div>
                  <div>Watford • Hitchin</div>
                  <div>Stevenage • Welwyn Garden City</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Market Towns
                </h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>Berkhamsted • Tring</div>
                  <div>Harpenden • Hertford</div>
                  <div>Bishop&apos;s Stortford • Ware</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Villages & Suburbs
                </h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>Rickmansworth • Kings Langley</div>
                  <div>London Colney • Park Street</div>
                  <div>Chorleywood • Radlett</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-primary text-primary-foreground p-8 lg:p-12 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Experience the GrapeCity Difference?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Join hundreds of satisfied customers across Hertfordshire who
              trust us with their cleaning needs. Where ...germs fear us. Get
              your personalised quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Get Free Quote
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Call 01707 929 669
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
