'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#F8FAF7]">
        {/* Navigation */}
        <nav className="bg-white border-b border-[#E2E8DF]">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#467235] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.8"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-[#172014]">LeadFlow</span>
            </Link>
          </div>
        </nav>

        {/* Success Message */}
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
          <div className="max-w-lg text-center">
            <div className="w-20 h-20 rounded-full bg-[#2E7D32]/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-[#2E7D32]" />
            </div>
            <h1 className="text-3xl font-bold text-[#172014] mb-4">
              Message Sent Successfully!
            </h1>
            <p className="text-lg text-[#64705F] mb-8">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/">
                <Button className="bg-[#467235] hover:bg-[#365A29]">
                  Back to Home
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={() => setIsSubmitted(false)}
                className="border-[#CBD5C5]"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAF7]">
      {/* Navigation */}
      <nav className="bg-white border-b border-[#E2E8DF]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#467235] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.8"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-[#172014]">LeadFlow</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <Link href="/features" className="text-sm font-semibold text-[#64705F] hover:text-[#172014]">
                Features
              </Link>
              <Link href="/pricing" className="text-sm font-semibold text-[#64705F] hover:text-[#172014]">
                Pricing
              </Link>
              <Link href="/login">
                <Button variant="outline" className="border-[#CBD5C5]">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-[#467235] hover:bg-[#365A29]">
                  Start Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#172014] mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-[#64705F]">
              Have questions? We're here to help. Send us a message and we'll respond within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8DF]">
                <div className="w-12 h-12 rounded-xl bg-[#467235]/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-[#467235]" />
                </div>
                <h3 className="text-lg font-bold text-[#172014] mb-2">Email Us</h3>
                <p className="text-[#64705F] mb-2">For general inquiries</p>
                <a href="mailto:hello@leadflow.in" className="text-[#467235] font-semibold hover:text-[#365A29]">
                  hello@leadflow.in
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#E2E8DF]">
                <div className="w-12 h-12 rounded-xl bg-[#467235]/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-[#467235]" />
                </div>
                <h3 className="text-lg font-bold text-[#172014] mb-2">Call Us</h3>
                <p className="text-[#64705F] mb-2">Mon-Fri, 9am-6pm IST</p>
                <a href="tel:+911234567890" className="text-[#467235] font-semibold hover:text-[#365A29]">
                  +91 12345 67890
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#E2E8DF]">
                <div className="w-12 h-12 rounded-xl bg-[#467235]/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#467235]" />
                </div>
                <h3 className="text-lg font-bold text-[#172014] mb-2">Visit Us</h3>
                <p className="text-[#64705F]">
                  Mumbai, Maharashtra<br />
                  India
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-[#E2E8DF]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-semibold text-[#172014]">
                        Your name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Rajesh Kumar"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 h-12 border-[#CBD5C5] focus:border-[#467235] focus:ring-[#467235]"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold text-[#172014]">
                        Email address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="rajesh@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 h-12 border-[#CBD5C5] focus:border-[#467235] focus:ring-[#467235]"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-semibold text-[#172014]">
                        Phone number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 h-12 border-[#CBD5C5] focus:border-[#467235] focus:ring-[#467235]"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-sm font-semibold text-[#172014]">
                        Company name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="ABC Cooling Services"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-2 h-12 border-[#CBD5C5] focus:border-[#467235] focus:ring-[#467235]"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-[#172014]">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 min-h-[150px] border-[#CBD5C5] focus:border-[#467235] focus:ring-[#467235]"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-[#467235] hover:bg-[#365A29]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E2E8DF] py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-[#64705F] text-sm">
          <p>© 2026 LeadFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
