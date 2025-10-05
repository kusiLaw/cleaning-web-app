'use client';
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription } from "./ui/alert";
import {

  Send,
  CheckCircle,

  Loader2,
} from "lucide-react";
// import { projectId, publicAnonKey } from "../utils/supabase/client";



export function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    serviceType: "",
    location: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // try {
    //   const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-6f8a46e8/contact`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${publicAnonKey}`
    //     },
    //     body: JSON.stringify(formData)
    //   });

    // const result = await response.json();

    // if (!response.ok) {
    //   throw new Error(result.error || 'Failed to submit contact form');
    // }

    //   setIsSubmitted(true);
    //   // Reset form after 5 seconds
    //   setTimeout(() => {
    //     setIsSubmitted(false);
    //     setFormData({
    //       name: "",
    //       email: "",
    //       phone: "",
    //       subject: "",
    //       serviceType: "",
    //       location: "",
    //       message: ""
    //     });
    //   }, 5000);
    // } catch (err: any) {
    //   console.error('Contact form submission error:', err);
    //   setError(`Failed to submit message: ${err.message}`);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  const updateFormData = (field: string, value: string) => {
    // setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="lg:col-span-2 overflow-hidden  rounded-2xl">
      <Card className="shadow-2xl border border-gray-50 ">
        <CardHeader className="bgprimary flx justify-center items-center my-auto pt-8 border-b border-primary text-primary-foreground overflow-hidden">
          <CardTitle className="text-3xl font-bold text-foreground flex items-center gap-2">
            Message Us
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-600">
                Thank you for contacting us. We&apos;ll get back to you within
                24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 ">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    className="border border-gray-300"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    className="border border-gray-300"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="border border-gray-300"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    placeholder="07123 456789"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Your Location *</Label>
                  <Select
                    value={formData.location}
                    onValueChange={(value) => updateFormData("location", value)}
                  >
                    <SelectTrigger className="border border-gray-300">
                      <SelectValue placeholder="Select your area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="st-albans">St Albans</SelectItem>
                      <SelectItem value="hemel-hempstead">
                        Hemel Hempstead
                      </SelectItem>
                      <SelectItem value="watford">Watford</SelectItem>
                      <SelectItem value="hitchin">Hitchin</SelectItem>
                      <SelectItem value="stevenage">Stevenage</SelectItem>
                      <SelectItem value="welwyn-garden-city">
                        Welwyn Garden City
                      </SelectItem>
                      <SelectItem value="berkhamsted">Berkhamsted</SelectItem>
                      <SelectItem value="tring">Tring</SelectItem>
                      <SelectItem value="rickmansworth">
                        Rickmansworth
                      </SelectItem>
                      <SelectItem value="kings-langley">
                        Kings Langley
                      </SelectItem>
                      <SelectItem value="other-herts">
                        Other Hertfordshire
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Interest</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) =>
                      updateFormData("serviceType", value)
                    }
                  >
                    <SelectTrigger className="border border-gray-300">
                      <SelectValue placeholder="What service interests you?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">
                        Residential Cleaning
                      </SelectItem>
                      <SelectItem value="commercial">
                        Commercial & Office Cleaning
                      </SelectItem>
                      <SelectItem value="decluttering">
                        Specialised Decluttering & Organisation
                      </SelectItem>
                      <SelectItem value="deep">Deep Cleaning</SelectItem>
                      <SelectItem value="maintenance">
                        Regular Maintenance
                      </SelectItem>
                      <SelectItem value="endtenancy">
                        End of Tenancy Cleaning
                      </SelectItem>
                      <SelectItem value="quote">
                        General Quote Request
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) => updateFormData("subject", value)}
                  >
                    <SelectTrigger className="border border-gray-300">
                      <SelectValue placeholder="What's this about?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quote">Request Quote</SelectItem>
                      <SelectItem value="booking">New Booking</SelectItem>
                      <SelectItem value="support">Customer Support</SelectItem>
                      <SelectItem value="complaint">
                        Service Complaint
                      </SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="partnership">
                        Business Partnership
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  className="border border-gray-300"
                  value={formData.message}
                  onChange={(e) => updateFormData("message", e.target.value)}
                  placeholder="Please provide details about your cleaning requirements, property size, preferred dates, or any specific questions you have..."
                  rows={50}
                  cols={50}
                  required
                />
              </div>
              <div className="flex justify-center py-8">
                <Button
                  type="submit"
                  className="w-full bg-foreground hover:bg-primary text-white py-4 maxw-xl mx-auto"
                  size="lg"
                  disabled={isSubmitting}
                >
                  <Send className="h-6 w-6" />
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
