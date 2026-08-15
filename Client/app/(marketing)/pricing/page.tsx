'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: 499,
    period: "month",
    description: "Perfect for small businesses getting started",
    features: [
      "100 leads per month",
      "1 WhatsApp number",
      "Basic AI lead scoring",
      "Email support",
      "Basic analytics",
      "Mobile app access",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Business",
    price: 1499,
    period: "month",
    description: "For growing businesses scaling operations",
    features: [
      "500 leads per month",
      "3 WhatsApp numbers",
      "Advanced AI lead scoring",
      "AI reply suggestions",
      "Priority support",
      "Advanced analytics",
      "Team collaboration (5 users)",
      "Custom follow-up workflows",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Professional",
    price: 3999,
    period: "month",
    description: "For established businesses with high volume",
    features: [
      "Unlimited leads",
      "Unlimited WhatsApp numbers",
      "Advanced AI with custom models",
      "Dedicated account manager",
      "24/7 priority support",
      "Custom integrations",
      "Unlimited team members",
      "White-label options",
      "Advanced automation",
      "Custom reporting",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-xl sticky top-0 z-50" style={{ borderBottom: '1px solid rgb(243 244 246)' }}>
        <div className="container flex h-20 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#44A194] flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.8"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-none">ReachIQ</span>
              <span className="text-[9px] text-gray-500 font-medium tracking-wider uppercase">Smart Lead Recovery</span>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="font-semibold">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-[#44A194] hover:bg-[#3a8c81] text-white font-semibold">Start Free</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center rounded-full px-5 py-2 text-sm mb-6 bg-[#44A194]/10" style={{ border: '1px solid rgba(68, 161, 148, 0.2)' }}>
              <Sparkles className="h-4 w-4 mr-2 text-[#44A194]" />
              <span className="font-semibold text-[#44A194]">Simple, transparent pricing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900">
              Choose the right plan for your{" "}
              <span className="text-[#44A194]">business</span>
            </h1>
            <p className="text-xl text-gray-600">
              Start with 14 days free. No credit card required. Cancel anytime.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-3 mt-8 p-1 rounded-full bg-gray-100" style={{ border: '1px solid rgb(229 231 235)' }}>
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-[#44A194] text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all relative ${
                  billingPeriod === 'yearly'
                    ? 'bg-[#44A194] text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className={`p-8 h-full flex flex-col relative bg-white ${
                  plan.popular 
                    ? 'shadow-2xl shadow-[#44A194]/20' 
                    : 'hover:shadow-xl'
                }`} style={{ border: plan.popular ? '2px solid #44A194' : '1px solid rgb(243 244 246)' }}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-[#44A194] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-6">
                      {plan.description}
                    </p>
                    
                    <div className="mb-8">
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-bold text-gray-900">
                          ₹{billingPeriod === 'yearly' ? Math.floor(plan.price * 0.8) : plan.price}
                        </span>
                        <span className="text-gray-600">
                          /{billingPeriod === 'monthly' ? 'mo' : 'mo'}
                        </span>
                      </div>
                      {billingPeriod === 'yearly' && (
                        <p className="text-sm text-green-600 mt-1 font-semibold">
                          Save ₹{plan.price * 12 * 0.2}/year
                        </p>
                      )}
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 + j * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <Check className="h-5 w-5 text-[#44A194] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <Link href={plan.name === 'Professional' ? '/contact' : '/signup'} className="w-full">
                    <Button 
                      className={`w-full font-semibold ${
                        plan.popular 
                          ? 'bg-[#44A194] hover:bg-[#3a8c81] text-white shadow-xl' 
                          : 'hover:bg-[#44A194]/10 hover:text-[#44A194]'
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                      size="lg"
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-24"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can I change plans later?",
                  a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, debit cards, and UPI payments. Bank transfers available for annual plans."
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes! All plans come with a 14-day free trial. No credit card required to start."
                },
                {
                  q: "What happens to my data if I cancel?",
                  a: "Your data is securely stored for 30 days after cancellation. You can export it anytime during this period."
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all cursor-pointer bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
                    <h3 className="font-bold mb-2 text-gray-900">{faq.q}</h3>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <Card className="p-12 bg-[#44A194]/5 hover:shadow-2xl transition-all" style={{ border: '2px solid rgba(68, 161, 148, 0.2)' }}>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Still have questions?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Our team is here to help you choose the right plan and get started with ReachIQ
              </p>
              <Link href="/contact">
                <Button size="lg" className="shadow-xl bg-[#44A194] hover:bg-[#3a8c81] text-white font-semibold">
                  Contact Sales
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12" style={{ borderTop: '1px solid rgb(243 244 246)' }}>
        <div className="container px-6">
          <div className="grid gap-8 md:grid-cols-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-[#44A194] flex items-center justify-center shadow-lg">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.8"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-gray-900 leading-none">ReachIQ</span>
                  <span className="text-[8px] text-gray-500 font-medium tracking-wider uppercase">Smart Lead Recovery</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                AI-powered lead recovery for service businesses
              </p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Demo'] },
              { title: 'Company', links: ['About', 'Contact'] },
              { title: 'Legal', links: ['Privacy', 'Terms'] },
            ].map((column, i) => (
              <div key={i}>
                <h3 className="font-bold mb-4 text-gray-900">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link href={`/${link.toLowerCase()}`} className="text-sm text-gray-600 hover:text-[#44A194] transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 text-center text-sm text-gray-500" style={{ borderTop: '1px solid rgb(229 231 235)' }}>
            <p>&copy; 2026 ReachIQ. All rights reserved. Made in India 🇮🇳</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
