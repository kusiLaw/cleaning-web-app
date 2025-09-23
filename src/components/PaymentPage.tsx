import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { CreditCard, Shield, Lock, CheckCircle, ArrowLeft } from "lucide-react";

interface BookingData {
  service: string;
  date: string;
  time: string;
  address: string;
  postcode: string;
  phone: string;
  email: string;
  location: string;
  notes: string;
}

export function PaymentPage() {
  const navigate = useRouter();
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
    billingAddress: "",
    billingPostcode: "",
    saveCard: false
  });
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Get booking data from session storage
    const savedBookingData = sessionStorage.getItem('bookingData');
    if (savedBookingData) {
      setBookingData(JSON.parse(savedBookingData));
    } else {
      // Redirect to booking if no data found
      navigate.replace('/booking');
    }
  }, [navigate]);

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate Stripe payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Mock delay
      
      // Clear booking data from session storage
      sessionStorage.removeItem('bookingData');
      
      // Show success message
      alert(`Payment successful! Booking confirmed for ${bookingData?.date} at ${bookingData?.time}. You'll receive confirmation details shortly.`);
      
      // Redirect to home
      navigate.replace('/');
    } catch (error) {
      alert('Payment failed. Please try again or contact support.');
    } finally {
      setIsProcessing(false);
    }
  };

  const updatePaymentData = (field: string, value: string) => {
    setPaymentData(prev => ({ ...prev, [field]: value }));
  };

  const formatCardNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const formatted = numbers.replace(/(\d{4})(?=\d)/g, '$1 ');
    return formatted.substring(0, 19); // Max 16 digits + 3 spaces
  };

  const formatExpiryDate = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length >= 2) {
      return numbers.substring(0, 2) + '/' + numbers.substring(2, 4);
    }
    return numbers;
  };

  type ServiceKey =
    | "home-standard"
    | "home-deep"
    | "office-small"
    | "office-large"
    | "end-tenancy"
    | "maintenance";

  interface ServiceDetails {
    name: string;
    price: number;
  }

  const serviceMap: Record<ServiceKey, ServiceDetails> = {
    "home-standard": { name: "Residential Cleaning - Standard", price: 85 },
    "home-deep": { name: "Residential Deep Clean", price: 160 },
    "office-small": { name: "Office Cleaning - Small", price: 65 },
    "office-large": { name: "Office Cleaning - Large", price: 130 },
    "end-tenancy": { name: "End of Tenancy Clean", price: 190 },
    "maintenance": { name: "Regular Maintenance", price: 70 }
  };

  const getServiceDetails = (service: string): ServiceDetails => {
    if (service in serviceMap) {
      return serviceMap[service as ServiceKey];
    }
    return { name: "Cleaning Service", price: 85 };
  };

  if (!bookingData) {
    return (
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p>Loading booking details...</p>
        </div>
      </div>
    );
  }

  const serviceDetails = getServiceDetails(bookingData.service);
  const discount = 15; // First-time customer discount
  const subtotal = serviceDetails.price;
  const vat = Math.round((subtotal - discount) * 0.2 * 100) / 100; // 20% VAT
  const total = subtotal - discount + vat;

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <Button 
            onClick={() => navigate.replace('/booking')} 
            variant="ghost" 
            className="mb-6 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Booking
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Secure Payment with Stripe
            </h1>
            <p className="text-lg text-gray-600">
              Complete your booking with our secure payment system powered by Stripe.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Payment Form */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  {/* Card Number */}
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number *</Label>
                    <div className="relative">
                      <Input
                        id="cardNumber"
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={paymentData.cardNumber}
                        onChange={(e) => updatePaymentData("cardNumber", formatCardNumber(e.target.value))}
                        maxLength={19}
                        required
                        className="pl-10"
                      />
                      <CreditCard className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Expiry Date */}
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date *</Label>
                      <Input
                        id="expiryDate"
                        type="text"
                        placeholder="MM/YY"
                        value={paymentData.expiryDate}
                        onChange={(e) => updatePaymentData("expiryDate", formatExpiryDate(e.target.value))}
                        maxLength={5}
                        required
                      />
                    </div>

                    {/* CVV */}
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input
                        id="cvv"
                        type="text"
                        placeholder="123"
                        value={paymentData.cvv}
                        onChange={(e) => updatePaymentData("cvv", e.target.value.replace(/\D/g, ''))}
                        maxLength={4}
                        required
                      />
                    </div>
                  </div>

                  {/* Name on Card */}
                  <div className="space-y-2">
                    <Label htmlFor="nameOnCard">Name on Card *</Label>
                    <Input
                      id="nameOnCard"
                      type="text"
                      placeholder="John Doe"
                      value={paymentData.nameOnCard}
                      onChange={(e) => updatePaymentData("nameOnCard", e.target.value)}
                      required
                    />
                  </div>

                  {/* Billing Address */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 space-y-2">
                      <Label htmlFor="billingAddress">Billing Address *</Label>
                      <Input
                        id="billingAddress"
                        type="text"
                        placeholder="123 Main Street, City"
                        value={paymentData.billingAddress}
                        onChange={(e) => updatePaymentData("billingAddress", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billingPostcode">Postcode *</Label>
                      <Input
                        id="billingPostcode"
                        type="text"
                        placeholder="SW1A 1AA"
                        value={paymentData.billingPostcode}
                        onChange={(e) => updatePaymentData("billingPostcode", e.target.value.toUpperCase())}
                        maxLength={8}
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg"
                    size="lg"
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing Payment...' : `Pay £${total.toFixed(2)}`}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By completing your purchase, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Order Summary & Security */}
            <div className="space-y-6">
              {/* Booking Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service:</span>
                      <span className="font-medium">{serviceDetails.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">{new Date(bookingData.date).toLocaleDateString('en-GB')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium">{bookingData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">{bookingData.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Address:</span>
                      <span className="font-medium text-right">{bookingData.address}, {bookingData.postcode}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Price Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Price Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>{serviceDetails.name}</span>
                    <span>£{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>First-time Customer Discount</span>
                    <span>-£{discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>VAT (20%)</span>
                    <span>£{vat.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>£{total.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Security Features */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Secure Payment with Stripe
                  </h3>
                  <div className="space-y-3 text-sm text-green-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>256-bit SSL encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>PCI DSS Level 1 compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>100% money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>24/7 fraud monitoring</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3">
                <Badge variant="outline" className="justify-center p-3 bg-white text-center">
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="h-6 w-6 text-blue-600" />
                    <span className="text-xs font-medium">Stripe Secured</span>
                  </div>
                </Badge>
                <Badge variant="outline" className="justify-center p-3 bg-white text-center">
                  <div className="flex flex-col items-center gap-1">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-xs font-medium">Insured & Bonded</span>
                  </div>
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}