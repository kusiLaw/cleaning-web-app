import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle, Shield, Clock } from "lucide-react";
import Link  from 'next/link';


export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-secondary to-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-primary mb-4">
              <div className="h-5 w-5 bg-primary rounded-full"></div>
              <span className="text-sm font-medium">
                Hertfordshire&apos;s Trusted Cleaning Partner
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Revitalising Homes,
                <span className="text-primary"> Empowering Businesses</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                GrapeCity Ltd is Hertfordshire&apos;s trusted partner for
                comprehensive cleaning and decluttering solutions. We go beyond
                basic cleaning, transforming residential havens, commercial
                workplaces, and business offices into pristine, healthy, and
                organised environments.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Fully Insured & Vetted</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>Local Community Trust</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Reliable Service</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
                // onClick={() => { window.location.href = "/booking"; }}
              >
                Get Free Quote
              </Button>
              <Link href="tel:01707929669"
                className=" border border-primary rounded-lg  text-primary hover:bg-secondary px-8 py-2 text-center text-lg"
              >
                Call 01707 929 669
              </Link>
            </div>
          </div>
         
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1648475235027-21cd0ed83671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGhvdXNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2NzEwNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Clean modern home interior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating testimonial card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <div className="h-5 w-5 bg-primary rounded-full"></div>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    Sarah M.
                  </div>
                  <div className="text-xs text-muted-foreground">St Albans</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {`"Exceptional service! GrapeCity transformed our office space.
                Highly professional and reliable!"`}
              </p>
              <div className="flex text-primary mt-2">{"★".repeat(5)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}