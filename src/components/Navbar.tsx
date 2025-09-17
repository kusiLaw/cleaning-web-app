"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./ui/sheet";
import { Menu, Phone, Mail, MapPin } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Our Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 text-foreground bg-opacity/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            {/* <Image
              width={40}
              height={40}
              src={"/grapecity.png"}
              alt="GrapeCity Logo"
              className="h-10 w-auto"
            /> */}
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">
                GrapeCity
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                ...germs fear us
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.path
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>01707 929 669</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Serving Hertfordshire</span>
              </div>
            </div>
            <Link href="/booking">
              <Button className="bg-foreground text-white hover:bg-primary/90 textprimary-foreground">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-3">
            <Link href="/booking">
              <Button
                size="sm"
                className="bg-foreground text-white hover:bg-primary/90 "
              >
                Book Now
              </Button>
            </Link>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-8 w-8 size-4 " />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle> </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-6 mt-4 px-6">
                  {/* Mobile Logo */}
                  

                  {/* Mobile Navigation */}
                  <div className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-left py-2 px-3 rounded-lg transition-colors ${
                          pathname === item.path
                            ? "bg-secondary text-primary font-medium"
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Contact Info */}
                  <div className="pt-4 border-t space-y-3 px-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">01707 929 669</div>
                        <div className="text-sm">
                          07351 730459 / 07552 129276
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">clean@grapecity.co.uk</div>
                        <div className="text-sm">Get a free quote</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Hertfordshire Service</div>
                        <div className="text-sm">
                          St Albans, Watford, Stevenage & more
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <div className="pt-4">
                    <Link
                      href="/booking"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        size="lg"
                      >
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}