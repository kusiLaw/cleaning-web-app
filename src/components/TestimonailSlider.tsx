"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "St Albans Resident",
    rating: 5,
    text: "GrapeCity transformed our home! The attention to detail is incredible, and the team is so professional. I've been using their fortnightly service for 8 months now.",
    service: "Regular Home Cleaning",
    image:
      "https://images.unsplash.com/photo-1610208033812-c0d714ad9b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwdGVzdGltb25pYWx8ZW58MXx8fHwxNzU2NzEwNDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "James Wilson",
    location: "Watford Business Owner",
    rating: 5,
    text: "Our office has never looked better! The team comes in after hours and everything is spotless when we arrive. Exceptional service and very reliable.",
    service: "Commercial Cleaning",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150",
  },
  {
    name: "Emma Thompson",
    location: "Hemel Hempstead Mom of 3",
    rating: 5,
    text: "Life-saver! With three children, keeping the house clean was overwhelming. GrapeCity gives me my weekends back. The decluttering service was amazing!",
    service: "Decluttering & Regular Cleaning",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150",
  },
  {
    name: "Robert Davies",
    location: "Stevenage Estate Agent",
    rating: 5,
    text: "I recommend GrapeCity to all my clients for end-of-tenancy cleaning. They always deliver exceptional results that help properties show perfectly. Very professional team.",
    service: "End-of-Tenancy Cleaning",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150",
  },
  {
    name: "Claire Anderson",
    location: "Hatfield Professional",
    rating: 5,
    text: "The booking process was so easy, and the team arrived exactly on time. My flat looks incredible, and I love that they use eco-friendly products. Highly recommend!",
    service: "One-time Deep Clean",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150",
  },
];

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (


        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial card */}
            <Card className="shadow-xl border-0 bg-white">
              <CardContent className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Customer photo */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-lg">
                      <ImageWithFallback
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Testimonial content */}
                  <div className="flex-1 text-center lg:text-left">
                    <Quote className="h-8 w-8 text-primary mb-4 mx-auto lg:mx-0" />

                    <blockquote className="text-lg lg:text-xl text-foreground mb-6 leading-relaxed">
                      {`"${testimonials[currentIndex].text}"`}
                    </blockquote>

                    {/* Rating */}
                    <div className="flex justify-center lg:justify-start mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-primary fill-current"
                          />
                        )
                      )}
                    </div>

                    {/* Customer info */}
                    <div className="space-y-2">
                      <div className="font-semibold text-foreground text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonials[currentIndex].location}
                      </div>
                      <div className="text-sm text-primary font-medium">
                        Service: {testimonials[currentIndex].service}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation buttons */}
            <div className="flex justify-center lg:justify-between items-center mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="hidden lg:flex border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {/* Dots indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="hidden lg:flex border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile navigation */}
            <div className="flex justify-center gap-4 mt-6 lg:hidden">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-blue-600 text-primary hover:bg-blue-50"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-blue-600 text-primary hover:bg-blue-50"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">Customer Retention</div>
            </div>
          </div>
        </div>

  );
}
