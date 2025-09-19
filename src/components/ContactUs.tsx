
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 

  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  
} from "lucide-react";
import { ContactUsForm } from "./ContactUsForm";
// import { projectId, publicAnonKey } from "../utils/supabase/client";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    details: "01707 929 669",
    subtext: "Local Hertfordshire number",
    description: "Speak directly with our customer service team for immediate assistance.",
    availability: "Mon-Sat: 8AM-6PM, Sun: 10AM-4PM"
  },
  {
    icon: Mail,
    title: "Email Support", 
    details: "clean@grapecity.co.uk",
    subtext: "Same-day response",
    description: "Send us an email and we'll get back to you within the same working day.",
    availability: "Monitored daily"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: "Available via phone",
    subtext: "Quick messaging",
    description: "Send us a WhatsApp message for quick responses and updates.",
    availability: "Mon-Sat: 8AM-6PM"
  },
  {
    icon: MapPin,
    title: "Local Coverage",
    details: "Hertfordshire areas",
    subtext: "St Albans, Hemel, Watford",
    description: "Local cleaning teams serving Hertfordshire and surrounding areas.",
    availability: "Full Hertfordshire coverage"
  }
];

const officeLocations = [
  {
    city: "St Albans Area",
    address: "Serving St Albans, London Colney, Park Street, and surrounding areas",
    phone: "01707 929 669",
    hours: "Mon-Sat: 8AM-6PM"
  },
  {
    city: "Hemel Hempstead Area",
    address: "Serving Hemel Hempstead, Berkhamsted, Tring, and surrounding areas", 
    phone: "01707 929 669",
    hours: "Mon-Sat: 8AM-6PM"
  },
  {
    city: "Watford Area",
    address: "Serving Watford, Rickmansworth, Kings Langley, and surrounding areas",
    phone: "01707 929 669", 
    hours: "Mon-Sat: 8AM-6PM"
  },
  {
    city: "Other Hertfordshire",
    address: "Also serving Hitchin, Stevenage, Welwyn Garden City, and other Herts towns",
    phone: "01707 929 669",
    hours: "Mon-Sat: 8AM-6PM"
  }
];

export function ContactUs() {

 
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Contact GrapeCity
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our friendly team for quotes, bookings, or any
            questions about our cleaning services. We&apos;re here to help
            across Hertfordshire where ...germs fear us.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card
                key={index}
                className="text-center shadow-lg hover:shadow-xl transition-shadow border-gray-50"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <div className="text-primary font-medium mb-1">
                    {method.details}
                  </div>
                  <div className="text-sm text-gray-500 mb-3">
                    {method.subtext}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {method.description}
                  </p>
                  <div className="text-xs text-gray-500">
                    {method.availability}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <ContactUsForm />

          {/* Sidebar */}
          <div className="space-y-6 border-0">
            {/* Office Locations */}
            <Card className="shadow-lg border border-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Our Offices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {officeLocations.map((office, index) => (
                  <div
                    key={index}
                    className="pb-4 border-b border-gray-50 last:border-b-0"
                  >
                    <h4 className="font-semibold text-gray-900">
                      {office.city}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {office.address}
                    </p>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="h-3 w-3" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-3 w-3" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Cleaning?
                </h3>
                <p className="text-sm text-red-700 mb-4">
                  Need same-day or emergency cleaning service? Call our priority
                  line:
                </p>
                <div className="text-lg font-bold text-red-800 mb-4">
                  01707 929 669
                </div>
                <p className="text-xs text-red-600">
                  Available 24/7 for genuine emergencies. Additional charges may
                  apply for same-day bookings.
                </p>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-lg border border-gray-50">
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-foreground text-white rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-foreground text-white rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-foreground text-white rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-foreground text-white rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Stay updated with cleaning tips, special offers, and company
                  news.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}