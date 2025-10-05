import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { CreditCard, Shield, Lock, CheckCircle } from "lucide-react";

interface PaymentSectionProps {
  onComplete?: () => void;
}

export function PaymentSection({ onComplete }: PaymentSectionProps) {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
    billingAddress: "",
    paymentMethod: "card"
  });

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock payment processing
    alert("Payment processed successfully! (This is a demo - no actual payment was charged)");
  };

  const updatePaymentData = (field: string, value: string) => {
    setPaymentData(prev => ({ ...prev, [field]: value }));
  };

  const formatCardNumber = (value: string) => {
    // Remove all spaces and non-digits
    const numbers = value.replace(/\D/g, '');
    // Add spaces every 4 digits
    const formatted = numbers.replace(/(\d{4})(?=\d)/g, '$1 ');
    return formatted;
  };

  const formatExpiryDate = (value: string) => {
    // Remove all non-digits
    const numbers = value.replace(/\D/g, '');
    // Add slash after 2 digits
    if (numbers.length >= 2) {
      return numbers.substring(0, 2) + '/' + numbers.substring(2, 4);
    }
    return numbers;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Secure Payment
            </h2>
            <p className="text-lg text-gray-600">
              Complete your booking with our secure payment system. 
              Pay now or choose to pay after service completion.
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
                  {/* Payment Method */}
                  <div className="space-y-4">
                    <Label>Payment Method</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        className={`p-4 border-2 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                          paymentData.paymentMethod === 'card' 
                            ? 'border-blue-600 bg-blue-50 text-blue-600' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => updatePaymentData("paymentMethod", "card")}
                      >
                        <CreditCard className="h-4 w-4" />
                        Credit Card
                      </button>
                      <button
                        type="button"
                        className={`p-4 border-2 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                          paymentData.paymentMethod === 'later' 
                            ? 'border-blue-600 bg-blue-50 text-blue-600' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => updatePaymentData("paymentMethod", "later")}
                      >
                        <CheckCircle className="h-4 w-4" />
                        Pay Later
                      </button>
                    </div>
                  </div>

                  {paymentData.paymentMethod === 'card' && (
                    <>
                      {/* Card Number */}
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input
                          id="cardNumber"
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          value={paymentData.cardNumber}
                          onChange={(e) => updatePaymentData("cardNumber", formatCardNumber(e.target.value))}
                          maxLength={19}
                          required
                        />
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
                      <div className="space-y-2">
                        <Label htmlFor="billingAddress">Billing Address *</Label>
                        <Input
                          id="billingAddress"
                          type="text"
                          placeholder="123 Main St, City, State 12345"
                          value={paymentData.billingAddress}
                          onChange={(e) => updatePaymentData("billingAddress", e.target.value)}
                          required
                        />
                      </div>
                    </>
                  )}

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg"
                    size="lg"
                  >
                    {paymentData.paymentMethod === 'card' ? 'Complete Payment' : 'Confirm Booking (Pay Later)'}
                  </Button>

                  {paymentData.paymentMethod === 'later' && (
                    <p className="text-sm text-gray-500 text-center">
                      You can pay cash or card when our team arrives for your cleaning service.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Order Summary & Security */}
            <div className="space-y-6">
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Home Cleaning - Standard</span>
                    <span>$95.00</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>First-time Customer Discount</span>
                    <span>-$15.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Tax (8.5%)</span>
                    <span>$6.80</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>$86.80</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Features */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Your Payment is Secure
                  </h3>
                  <div className="space-y-3 text-sm text-green-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>SSL encrypted payment processing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>PCI DSS compliant security</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Money-back guarantee</span>
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
                <Badge variant="outline" className="justify-center p-3 bg-white">
                  <Shield className="h-4 w-4 mr-2" />
                  SSL Secured
                </Badge>
                <Badge variant="outline" className="justify-center p-3 bg-white">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Insured & Bonded
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}