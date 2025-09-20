'use client'
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription } from "./ui/alert";
import { Calendar, Clock, MapPin, Phone, Mail, Loader2, CheckCircle } from "lucide-react";
// import { projectId, publicAnonKey } from "../utils/supabase/client";

interface BookingFormProps {
  onPayment?: () => void;
}

export function BookingForm({ onPayment }: BookingFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    service: "",
    date: "",
    time: "",
    address: "",
    city: "",
    postcode: "",
    phone: "",
    email: "",
    location: "",
    notes: "",
    paymentMethod: "pay_after_service"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingReference, setBookingReference] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    // e.preventDefault();
    // setIsSubmitting(true);
    // setError("");

    // try {
    //   const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-6f8a46e8/booking`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${publicAnonKey}`
    //     },
    //     body: JSON.stringify(formData)
    //   });

    //   const result = await response.json();

    //   if (!response.ok) {
    //     throw new Error(result.error || 'Failed to submit booking');
    //   }

    //   setBookingReference(result.booking_reference);
    //   setIsSubmitted(true);

    //   if (onPayment && formData.paymentMethod === "pay_now") {
    //     // If payment is required and user wants to pay now
    //     setTimeout(() => onPayment(), 2000);
    //   }

    // } catch (err: any) {
    //   console.error('Booking submission error:', err);
    //   setError(`Failed to submit booking: ${err.message}`);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Book Your UK Cleaning Service
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Schedule your cleaning appointment across England, Scotland, or
              Wales. Get your free, personalized quote and book your preferred
              time slot.
            </p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="bg- border-b border-primary font-bold  text-foreground rounded-t-lg">
              <CardTitle className="text-2xl text-center">
                 Book a Cleaning Service
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
            
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Booking Submitted!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Your booking reference is:{" "}
                    <strong>{bookingReference}</strong>
                  </p>
                  <p className="text-gray-600">
                    We&apos;ll contact you within 2 hours to confirm your appointment
                    details.
                  </p>
                  {formData.paymentMethod === "pay_now" && onPayment && (
                    <p className="text-sm text-blue-600 mt-4">
                      Redirecting to payment in a moment...
                    </p>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  {/* Personal Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        className="border border-gray-300"
                        value={formData.firstName}
                        onChange={(e) =>
                          updateFormData("firstName", e.target.value)
                        }
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        className="border border-gray-300"
                        value={formData.lastName}
                        onChange={(e) =>
                          updateFormData("lastName", e.target.value)
                        }
                        placeholder="Smith"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Service Selection */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="service"
                        className="flex items-center gap-2"
                      >
                        <Calendar className="h-4 w-4" />
                        Service Type *
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          updateFormData("service", value)
                        }
                      >
                        <SelectTrigger className="border border-gray-300">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="home-standard">
                            Residential Cleaning - Standard (£65-95)
                          </SelectItem>
                          <SelectItem value="home-deep">
                            Residential Deep Clean (£120-200)
                          </SelectItem>
                          <SelectItem value="office-small">
                            Office Cleaning - Small (£45-80)
                          </SelectItem>
                          <SelectItem value="office-large">
                            Office Cleaning - Large (£95-160)
                          </SelectItem>
                          <SelectItem value="end-tenancy">
                            End of Tenancy Clean (£140-240)
                          </SelectItem>
                          <SelectItem value="maintenance">
                            Regular Maintenance (Save 20%)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Date */}
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Preferred Date *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        className="border border-gray-300"
                        value={formData.date}
                        onChange={(e) => updateFormData("date", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        required
                      />
                    </div>

                    {/* Time */}
                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Preferred Time *
                      </Label>
                      <Select
                        value={formData.time}
                        onValueChange={(value) => updateFormData("time", value)}
                      >
                        <SelectTrigger className="border border-gray-300">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="8:00">8:00 AM</SelectItem>
                          <SelectItem value="9:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="13:00">1:00 PM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="location"
                        className="flex items-center gap-2"
                      >
                        <MapPin className="h-4 w-4" />
                        UK Location *
                      </Label>
                      <Select
                        value={formData.location}
                        onValueChange={(value) =>
                          updateFormData("location", value)
                        }
                      >
                        <SelectTrigger className="border border-gray-300">
                          <SelectValue placeholder="Select your area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="london">London</SelectItem>
                          <SelectItem value="manchester">Manchester</SelectItem>
                          <SelectItem value="birmingham">Birmingham</SelectItem>
                          <SelectItem value="leeds">Leeds</SelectItem>
                          <SelectItem value="liverpool">Liverpool</SelectItem>
                          <SelectItem value="edinburgh">Edinburgh</SelectItem>
                          <SelectItem value="glasgow">Glasgow</SelectItem>
                          <SelectItem value="cardiff">Cardiff</SelectItem>
                          <SelectItem value="bristol">Bristol</SelectItem>
                          <SelectItem value="newcastle">Newcastle</SelectItem>
                          <SelectItem value="other">
                            Other UK Location
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {/* Address */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="address"
                        className="flex items-center gap-2"
                      >
                        <MapPin className="h-4 w-4" />
                        Property Address *
                      </Label>
                      <Input
                        id="address"
                        type="text"
                        className="border border-gray-300"
                        placeholder="123 High Street"
                        value={formData.address}
                        onChange={(e) =>
                          updateFormData("address", e.target.value)
                        }
                        required
                      />
                    </div>

                    {/* City */}
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        type="text"
                        className="border border-gray-300"
                        placeholder="London"
                        value={formData.city}
                        onChange={(e) => updateFormData("city", e.target.value)}
                        required
                      />
                    </div>

                    {/* Postcode */}
                    <div className="space-y-2">
                      <Label htmlFor="postcode">UK Postcode *</Label>
                      <Input
                        id="postcode"
                        type="text"
                        className="border border-gray-300"
                        placeholder="SW1A 1AA"
                        value={formData.postcode}
                        onChange={(e) =>
                          updateFormData(
                            "postcode",
                            e.target.value.toUpperCase()
                          )
                        }
                        maxLength={8}
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="border border-gray-300"
                      placeholder="07123 456789"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="border border-gray-300"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      required
                    />
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-2">
                    <Label>Payment Preference</Label>
                    <Select
                      value={formData.paymentMethod}
                      onValueChange={(value) =>
                        updateFormData("paymentMethod", value)
                      }
                    >
                      <SelectTrigger className="border border-gray-300">
                        <SelectValue placeholder="Choose payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pay_after_service">
                          Pay After Service (Recommended)
                        </SelectItem>
                        <SelectItem value="pay_now">Pay Now Online</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-gray-500">
                      {formData.paymentMethod === "pay_after_service"
                        ? "Pay conveniently after your cleaning is completed to your satisfaction."
                        : "Secure online payment with instant booking confirmation."}
                    </p>
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes">
                      Special Instructions (Optional)
                    </Label>
                    <Textarea
                      id="notes"
                      className="border border-gray-300"
                      placeholder="Any specific areas to focus on, pets, allergies, or special requests..."
                      value={formData.notes}
                      onChange={(e) => updateFormData("notes", e.target.value)}
                      rows={3}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-foreground hover:bg-primary text-white py-4 text-lg"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting Booking...
                        </>
                      ) : formData.paymentMethod === "pay_now" && onPayment ? (
                        "Continue to Payment"
                      ) : (
                        "Submit Booking Request"
                      )}
                    </Button>
                    <p className="text-sm text-gray-500 text-center mt-3">
                      * Free UK-wide quotes. We&apos;ll contact you within 2
                      hours to confirm details.
                    </p>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Trust indicators */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 lg:mt-20 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-gray-600">
                Satisfaction Guaranteed
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-sm text-gray-600">UK Properties Served</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-gray-600">UK Cities Covered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}