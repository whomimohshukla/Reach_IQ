'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, MessageSquare, Target, BarChart3, Zap, TrendingUp, Users, Clock, IndianRupee, Sparkles, Award, Shield, Bell, LayoutDashboard, ChevronRight, Menu, X, Mail, Phone, MapPin, Share2, Globe, Heart } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navLinks = [
    { name: "Features", href: "#features", icon: Sparkles },
    { name: "How It Works", href: "#how-it-works", icon: LayoutDashboard },
    { name: "Pricing", href: "/pricing", icon: Award },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Sticky Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-200' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 group z-50">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-[#467235] to-[#365A29] flex items-center justify-center shadow-lg shadow-[#467235]/30 group-hover:shadow-[#467235]/50 transition-all">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6 text-white">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.9"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold text-gray-900 tracking-tight leading-none">
                  LeadFlow
                </span>
                <span className="text-[8px] md:text-[10px] text-gray-500 font-semibold tracking-widest uppercase leading-none">
                  AI Lead Recovery
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((item, i) => (
                <motion.div 
                  key={item.name} 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.1 * i }}
                >
                  <Link 
                    href={item.href} 
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#467235] hover:bg-[#467235]/5 rounded-xl transition-all group"
                  >
                    <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <motion.div 
              className="hidden md:flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/login">
                <Button variant="ghost" className="text-gray-700 hover:text-[#467235] hover:bg-[#467235]/5 font-semibold rounded-xl">
                  Sign in
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-[#467235] to-[#365A29] hover:from-[#365A29] hover:to-[#2A4621] text-white font-semibold shadow-lg shadow-[#467235]/25 hover:shadow-xl hover:shadow-[#467235]/40 transition-all px-6 rounded-xl group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <Link href="/signup" className="md:hidden">
                <Button size="sm" className="bg-gradient-to-r from-[#467235] to-[#365A29] text-white font-semibold shadow-lg">
                  Start Free
                </Button>
              </Link>
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6 text-gray-700" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-80 p-0">
                  <div className="flex flex-col h-full">
                    {/* Mobile Menu Header */}
                    <div className="p-6 border-b border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#467235] to-[#365A29] flex items-center justify-center shadow-lg">
                          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.9"/>
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">LeadFlow</div>
                          <div className="text-xs text-gray-500">AI Lead Recovery</div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Menu Links */}
                    <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
                      {navLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#467235] hover:bg-[#467235]/5 rounded-xl transition-all group"
                        >
                          <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          <span className="font-semibold">{item.name}</span>
                        </Link>
                      ))}
                      <Separator className="my-4" />
                      <Link
                        href="/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#467235] hover:bg-[#467235]/5 rounded-xl transition-all"
                      >
                        <span className="font-semibold">Sign in</span>
                      </Link>
                    </nav>

                    {/* Mobile Menu Footer */}
                    <div className="p-6 border-t border-gray-200">
                      <Link href="/signup" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full bg-gradient-to-r from-[#467235] to-[#365A29] text-white font-semibold shadow-lg">
                          Get Started Free
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 lg:px-8 overflow-hidden bg-white">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#467235] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#467235] rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#467235]/10 mb-8"
              style={{ border: '1px solid rgba(68, 161, 148, 0.2)' }}
            >
              <Sparkles className="w-4 h-4 text-[#467235]" />
              <span className="text-sm font-semibold text-[#467235]">
                Intelligent WhatsApp Lead Management
              </span>
            </motion.div>

            {/* Main Headline with Typing Effect */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-8 leading-[1.1] tracking-tight"
            >
              Turn WhatsApp Chats Into{" "}
              <span className="text-[#467235]">
                <TypeAnimation
                  sequence={[
                    'Revenue',
                    2000,
                    'Customers',
                    2000,
                    'Growth',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              AI automatically scores every lead, identifies buying signals, and reminds you to follow up at the perfect moment. Never let a hot lead go cold again.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link href="/signup">
                <Button 
                  size="lg" 
                  className="bg-[#467235] hover:bg-[#365A29] text-white text-lg h-16 px-10 rounded-xl font-semibold shadow-2xl shadow-[#467235]/25 hover:shadow-[#467235]/40 hover:scale-105 transition-all"
                >
                  Start Free - No Credit Card
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg h-16 px-10 rounded-xl font-semibold hover:bg-gray-50 transition-all group"
                  style={{ border: '2px solid rgb(209 213 219)' }}
                >
                  Watch Demo
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500"
            >
              {[
                { icon: Shield, text: "Enterprise-grade security" },
                { icon: Zap, text: "Setup in 5 minutes" },
                { icon: Users, text: "Trusted by 100+ businesses" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="w-5 h-5 text-[#467235]" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mt-24 max-w-6xl mx-auto"
          >
            <div className="relative">
              {/* Subtle glow effect */}
              <div className="absolute -inset-6 bg-[#467235]/10 blur-3xl rounded-3xl opacity-50" />
              
              {/* Preview Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ border: '1px solid rgb(229 231 235)' }}>
                {/* Browser Bar */}
                <div className="bg-gray-50 px-6 py-4 flex items-center gap-3" style={{ borderBottom: '1px solid rgb(229 231 235)' }}>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-8">
                    <div className="bg-white rounded-lg px-4 py-2 text-sm text-gray-500 font-medium" style={{ border: '1px solid rgb(229 231 235)' }}>
                      app.reachiq.com/dashboard
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="bg-white p-10">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-4 gap-5 mb-8">
                    {[
                      { icon: Users, value: "127", label: "Total Leads", color: "bg-blue-500", bgColor: "bg-blue-50" },
                      { icon: Target, value: "18", label: "Hot Leads", color: "bg-red-500", bgColor: "bg-red-50" },
                      { icon: Clock, value: "24", label: "Follow-ups", color: "bg-orange-500", bgColor: "bg-orange-50" },
                      { icon: IndianRupee, value: "₹1.8L", label: "Revenue", color: "bg-[#467235]", bgColor: "bg-[#467235]/10" },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.95 + i * 0.08, type: "spring" }}
                        className="bg-gray-50 rounded-2xl p-6"
                        style={{ border: '1px solid rgb(243 244 246)' }}
                      >
                        <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center mb-4`}>
                          <stat.icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-500 font-medium">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="bg-gray-50 rounded-2xl p-8"
                    style={{ border: '1px solid rgb(243 244 246)' }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-gray-900">Revenue Growth</h3>
                      <div className="flex items-center gap-2 text-sm text-[#467235] font-semibold px-4 py-2 bg-[#467235]/10 rounded-lg">
                        <TrendingUp className="w-4 h-4" />
                        <span>+34% this month</span>
                      </div>
                    </div>
                    <div className="flex items-end justify-between gap-3 h-40">
                      {[40, 65, 55, 80, 70, 90, 85, 95].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 1.5 + i * 0.08, type: "spring", stiffness: 80 }}
                          className="flex-1 bg-[#467235] rounded-t-xl min-w-[20px] hover:bg-[#365A29] transition-all cursor-pointer"
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50" style={{ borderTop: '1px solid rgb(243 244 246)', borderBottom: '1px solid rgb(243 244 246)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: "₹18.4L+", label: "Revenue Recovered", icon: IndianRupee },
              { value: "850+", label: "Leads Converted", icon: Users },
              { value: "94%", label: "Response Rate", icon: Target },
              { value: "12min", label: "Avg Response Time", icon: Clock },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#467235]/10 text-[#467235] mb-4 group-hover:bg-[#467235] group-hover:text-white transition-all">
                  <stat.icon className="w-7 h-7" />
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-base text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 px-6 lg:px-8 bg-white" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#467235]/10 mb-6"
              style={{ border: '1px solid rgba(68, 161, 148, 0.2)' }}
            >
              <Shield className="w-4 h-4 text-[#467235]" />
              <span className="text-sm font-semibold text-[#467235]">
                Powerful Features
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-gray-900 mb-6"
            >
              Everything you need to close more deals
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Intelligent AI features designed for Indian service businesses
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "AI Lead Scoring",
                description: "Automatically identifies your hottest opportunities based on conversation analysis, intent, and urgency"
              },
              {
                icon: MessageSquare,
                title: "Smart Follow-ups",
                description: "Never miss the perfect moment to reach out with AI-powered timing recommendations and reminders"
              },
              {
                icon: BarChart3,
                title: "Revenue Tracking",
                description: "See exactly how much revenue you recovered from previously lost leads with detailed analytics"
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group bg-white rounded-3xl p-10 hover:shadow-2xl transition-all"
                style={{ border: '1px solid rgb(243 244 246)' }}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#467235] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-[#467235]/25">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 lg:px-8 overflow-hidden bg-[#467235]">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm mb-8" style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <Bell className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">
                Start Your Free Trial Today
              </span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to recover lost revenue?
            </h2>
            <p className="text-2xl text-white/90 mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
              Stop losing leads to delayed follow-ups. Let AI handle the tracking while you focus on closing deals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/signup">
                <Button 
                  size="lg" 
                  className="bg-white text-[#467235] hover:bg-gray-50 text-lg h-16 px-10 rounded-xl font-semibold shadow-2xl hover:scale-105 transition-all"
                >
                  Start Free - No Credit Card
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg h-16 px-10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all"
                  style={{ border: '2px solid rgba(255, 255, 255, 0.3)' }}
                >
                  View Pricing
                </Button>
              </Link>
            </div>

            {/* Value Props */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/90">
              {[
                { icon: Shield, text: "Bank-grade security" },
                { icon: Zap, text: "Live in 5 minutes" },
                { icon: CheckCircle, text: "Money-back guarantee" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-12 md:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Brand Column - Takes more space */}
              <div className="lg:col-span-4">
                <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#467235] to-[#365A29] flex items-center justify-center shadow-lg shadow-[#467235]/30 group-hover:shadow-[#467235]/50 transition-all"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.9"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-gray-900 leading-none">
                      LeadFlow
                    </span>
                    <span className="text-[9px] text-gray-500 font-semibold tracking-widest uppercase">
                      AI Lead Recovery
                    </span>
                  </div>
                </Link>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-sm">
                  AI-powered WhatsApp lead management platform designed specifically for Indian service businesses. Never lose a lead again.
                </p>
                
                {/* Social Links */}
                <div className="flex items-center gap-3">
                  {[
                    { icon: Share2, href: "https://twitter.com", label: "Twitter" },
                    { icon: Globe, href: "https://linkedin.com", label: "LinkedIn" },
                    { icon: Heart, href: "https://instagram.com", label: "Instagram" },
                    { icon: MessageSquare, href: "https://github.com", label: "GitHub" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-[#467235] flex items-center justify-center text-gray-600 hover:text-white transition-all group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Links Columns */}
              <div className="lg:col-span-2">
                <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
                  Product
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: "Features", href: "#features" },
                    { name: "Pricing", href: "/pricing" },
                    { name: "Demo", href: "/dashboard" },
                    { name: "Integrations", href: "#integrations" },
                    { name: "API", href: "#api" },
                  ].map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-gray-600 hover:text-[#467235] transition-colors inline-flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-2">
                <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
                  Company
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: "About Us", href: "#about" },
                    { name: "Blog", href: "#blog" },
                    { name: "Careers", href: "#careers" },
                    { name: "Press Kit", href: "#press" },
                    { name: "Partners", href: "#partners" },
                  ].map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-gray-600 hover:text-[#467235] transition-colors inline-flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-2">
                <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
                  Resources
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: "Documentation", href: "#docs" },
                    { name: "Help Center", href: "#help" },
                    { name: "Community", href: "#community" },
                    { name: "Tutorials", href: "#tutorials" },
                    { name: "Status", href: "#status" },
                  ].map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-gray-600 hover:text-[#467235] transition-colors inline-flex items-center group"
                      >
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-2">
                <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
                  Contact
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-600">
                    <Mail className="w-5 h-5 text-[#467235] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Email</div>
                      <a href="mailto:hello@leadflow.ai" className="text-sm hover:text-[#467235] transition-colors">
                        hello@leadflow.ai
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <Phone className="w-5 h-5 text-[#467235] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Phone</div>
                      <a href="tel:+911234567890" className="text-sm hover:text-[#467235] transition-colors">
                        +91 12345 67890
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-[#467235] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Location</div>
                      <span className="text-sm">
                        Mumbai, India
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Separator />

          {/* Footer Bottom */}
          <div className="py-6 md:py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-1 text-sm text-gray-600">
                <span>&copy; 2026 LeadFlow. All rights reserved.</span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1">
                  Made with <span className="text-red-500">❤️</span> in India 🇮🇳
                </span>
              </div>
              <div className="flex items-center gap-6 text-sm">
                {[
                  { name: "Privacy Policy", href: "#privacy" },
                  { name: "Terms of Service", href: "#terms" },
                  { name: "Cookie Policy", href: "#cookies" },
                ].map((link, i) => (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    className="text-gray-600 hover:text-[#467235] transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
