import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Zap,
  Shield,
  CheckCircle,
  Award
} from "lucide-react";

export function Footer() {


  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Zap className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">GrapeCity</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professional cleaning services for Hertfordshire homes and businesses. 
              Trusted, reliable solutions where ...germs fear us. Serving St Albans, 
              Hemel Hempstead, Watford, and surrounding areas.
            </p>
            
            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Shield className="h-4 w-4 text-primary" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Background Checked</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Award className="h-4 w-4 text-primary" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Zap className="h-4 w-4 text-primary" />
                <span>Hertfordshire Local</span>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">01707 929 669</p>
                  <p className="text-sm text-gray-300">Local Hertfordshire number</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">clean@grapecity.co.uk</p>
                  <p className="text-sm text-gray-300">Get a quote via email</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Hertfordshire</p>
                  <p className="text-sm text-gray-300">St Albans, Hemel Hempstead, Watford</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Mon-Sat: 8AM-6PM</p>
                  <p className="text-sm text-gray-300">Sun: 10AM-4PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-primary transition-colors">
                Residential Cleaning
              </a>
              <a href="#" className="block text-gray-300 hover:text-primary transition-colors">
                Commercial & Office Cleaning
              </a>
              <a href="#" className="block text-gray-300 hover:text-primary transition-colors">
                Specialised Decluttering & Organisation
              </a>
              <a href="#" className="block text-gray-300 hover:text-primary transition-colors">
                Deep Cleaning
              </a>
              <a href="#" className="block text-gray-300 hover:text-primary transition-colors">
                Regular Maintenance
              </a>
              <a href="#" className="block text-gray-300 hover:text-primary transition-colors">
                End of Tenancy Cleaning
              </a>
            </div>

            <div className="pt-4">
              <h5 className="font-semibold mb-3">Quick Links</h5>
              <div className="space-y-2">
                <a href="/about" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                  About Us
                </a>
                <a href="/services" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                  Services & Pricing
                </a>
                <a href="/portfolio" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                  Portfolio
                </a>
                <a href="/contact" className="block text-gray-300 hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            
            {/* Newsletter */}
            {/* <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                Get cleaning tips, special offers, and updates delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Subscribe
                </Button>
              </form>
            </div> */}

            {/* Social media */}
            <div className="space-y-4">
              <h5 className="font-semibold">Follow Us</h5>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Emergency contact */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h5 className="font-semibold text-primary mb-2">Same-Day Service?</h5>
              <p className="text-sm text-gray-300 mb-3">
                Need urgent cleaning? Call us now!
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Call 01707 929 669
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © 2025 GrapeCity. All rights reserved. | Licensed & Insured Cleaning Service
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Accessibility
            </a>
            <a href="/admin" className="hover:text-primary transition-colors">
              Admin
            </a>
          </div>
        </div>

        {/* Legal disclaimers */}
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-xs text-gray-500 text-center max-w-4xl mx-auto leading-relaxed">
            GrapeCity is a fully licensed and insured cleaning service serving Hertfordshire and surrounding areas. All team members are background-checked 
            and trained professionals. Pricing may vary based on property size, condition, and specific requirements. 
            Satisfaction guarantee applies to all services. Payment processing is secure and PCI compliant. 
            For insurance claims or service issues, please contact customer support within 24 hours.
          </p>
        </div>
      </div>
    </footer>
  );
}