'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, MessageSquare, Target, BarChart3, Sparkles, Clock, IndianRupee, Shield, Zap, Users, Bot, Workflow, Bell } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-blue-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl"
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary via-green-600 to-primary flex items-center justify-center shadow-lg shadow-primary/20 relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
              />
              <span className="text-primary-foreground font-bold text-sm relative z-10">LF</span>
            </div>
            <span className="text-lg font-bold">LeadFlow</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {['Product', 'Features', 'Pricing'].map((text, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                <Link href={`/${text.toLowerCase()}`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group">
                  {text}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <Link href="/login">
              <Button variant="ghost" size="sm" className="font-medium">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                Start Free
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container relative">
          <div className="mx-auto max-w-5xl text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center rounded-full border bg-card px-4 py-1.5 text-sm shadow-lg hover:shadow-xl transition-shadow mb-8 cursor-pointer"
            >
              <Sparkles className="h-3.5 w-3.5 mr-2 text-primary animate-pulse" />
              <span className="font-medium">AI-Powered Lead Recovery Platform</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight"
            >
              Recover the{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary via-green-600 to-emerald-500 bg-clip-text text-transparent animate-gradient">
                  <TypeAnimation
                    sequence={[
                      'WhatsApp',
                      2000,
                      'Lost',
                      2000,
                      'Inactive',
                      2000,
                      'Forgotten',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-primary/20 blur-2xl -z-10"
                />
              </span>
              <br />leads you're losing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Stop letting hot leads slip through the cracks. LeadFlow uses AI to find, score, and help you convert customers who{" "}
              <span className="text-foreground font-semibold bg-primary/10 px-2 rounded">were ready to buy</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Link href="/signup">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="h-14 px-8 text-base font-semibold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40 transition-all group relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative z-10">Start Free Trial</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="relative z-10"
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </Link>
              <Link href="/dashboard">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold border-2 hover:bg-accent">
                    View Live Demo
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm"
            >
              {[
                { icon: CheckCircle, text: 'No credit card' },
                { icon: CheckCircle, text: '14-day trial' },
                { icon: CheckCircle, text: '5-min setup' },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <feature.icon className="h-4 w-4 text-primary" />
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-24 mx-auto max-w-6xl"
          >
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative rounded-2xl border-2 bg-card shadow-2xl overflow-hidden group"
            >
              {/* Animated Border Glow */}
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              
              <div className="aspect-video w-full bg-gradient-to-br from-background via-accent/30 to-background relative overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />
                
                {/* Dashboard Content */}
                <div className="absolute inset-0 p-8 space-y-6">
                  {/* Stats Row */}
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { icon: Users, value: "127", label: "Total Leads", color: "from-blue-500 to-blue-600" },
                      { icon: Target, value: "18", label: "Hot Leads", color: "from-red-500 to-red-600" },
                      { icon: Clock, value: "24", label: "Follow-ups", color: "from-orange-500 to-orange-600" },
                      { icon: IndianRupee, value: "₹1.8L", label: "Recovered", color: "from-green-500 to-green-600" },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + i * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-background/90 backdrop-blur-xl rounded-xl p-4 border shadow-lg hover:shadow-xl transition-all cursor-pointer"
                      >
                        <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-lg`}>
                          <stat.icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">{stat.value}</div>
                        <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.6 }}
                    className="bg-background/90 backdrop-blur-xl rounded-xl p-6 border shadow-lg h-48"
                  >
                    <div className="flex items-end justify-between gap-2 h-full">
                      {[40, 65, 55, 80, 70, 90, 85, 95].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 1.8 + i * 0.1, type: "spring", stiffness: 100 }}
                          whileHover={{ opacity: 0.8 }}
                          className="flex-1 bg-gradient-to-t from-primary via-green-500 to-emerald-400 rounded-t-lg cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 border-y bg-accent/30 relative overflow-hidden"
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(var(--primary-rgb),0.05)_50%,transparent_100%)]"
        />
        <div className="container relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: "₹2.8L+", label: "Revenue Recovered" },
              { value: "500+", label: "Leads Converted" },
              { value: "92%", label: "Response Rate" },
              { value: "50+", label: "Happy Businesses" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center cursor-pointer"
              >
                <motion.div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-green-600 to-emerald-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Problem Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Every day, customers slip away
            </h2>
            <p className="text-xl text-muted-foreground">
              See if this sounds familiar...
            </p>
          </motion.div>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto"
          >
            {[
              { icon: MessageSquare, title: 'Customer Inquires', desc: '"How much for AC repair?"', color: 'from-blue-500 to-blue-600', delay: 0 },
              { icon: Target, title: 'Shows Interest', desc: '"Can someone come tomorrow?"', color: 'from-orange-500 to-orange-600', delay: 0.2 },
              { icon: '💬', title: 'Then... Silence', desc: '"Let me confirm..." They never do.', color: 'from-red-500 to-red-600', delay: 0.4 },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -10, scale: 1.02 }}
                className="rounded-2xl border-2 bg-card p-8 text-center shadow-lg hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 shadow-xl`}
                  >
                    {typeof step.icon === 'string' ? (
                      <span className="text-3xl">{step.icon}</span>
                    ) : (
                      <step.icon className="h-8 w-8 text-white" />
                    )}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 mx-auto max-w-4xl"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-background p-12 text-center shadow-xl"
            >
              <p className="text-2xl md:text-3xl font-bold mb-3">
                That conversation was worth ₹2,500.
              </p>
              <p className="text-lg text-muted-foreground">
                It's now buried in your WhatsApp. <span className="text-foreground font-semibold">LeadFlow makes sure you never lose track again.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 bg-accent/30 relative overflow-hidden">
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Everything you need to recover lost leads
            </h2>
            <p className="text-xl text-muted-foreground">
              Powerful AI features designed for service businesses
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
          >
            {[
              { icon: Bot, title: 'AI Lead Scoring', desc: 'Automatically identify your hottest opportunities with intelligent scoring algorithms', color: 'from-purple-500 to-purple-600' },
              { icon: MessageSquare, title: 'Conversation Intelligence', desc: 'Understand intent, urgency, and sentiment in every customer conversation', color: 'from-blue-500 to-blue-600' },
              { icon: Workflow, title: 'Follow-up Automation', desc: 'Never miss the right time to reach out with smart scheduling and reminders', color: 'from-green-500 to-green-600' },
              { icon: Sparkles, title: 'AI Reply Suggestions', desc: 'Get context-aware response recommendations for every lead interaction', color: 'from-orange-500 to-orange-600' },
              { icon: BarChart3, title: 'Revenue Tracking', desc: 'Track exactly how much revenue you recovered from previously lost leads', color: 'from-red-500 to-red-600' },
              { icon: Shield, title: 'Enterprise Security', desc: 'Bank-level encryption and data protection for your business information', color: 'from-cyan-500 to-cyan-600' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -10, scale: 1.02 }}
                className="rounded-2xl border bg-card p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`h-14 w-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl bg-gradient-to-br from-primary via-green-600 to-emerald-500 p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
            >
              {/* Animated Background */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [90, 0, 90],
                }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
              />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Start recovering your lost leads today
                  </h2>
                  <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                    Join 50+ service businesses that are turning more conversations into customers with AI-powered lead recovery
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Link href="/signup">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" variant="secondary" className="h-14 px-8 text-base font-semibold shadow-xl hover:shadow-2xl">
                        Start Free Trial
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/dashboard">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold border-2 border-white/30 text-white hover:bg-white/10">
                        View Live Demo
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 backdrop-blur-sm py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-green-600 flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground font-bold text-sm">LF</span>
                </div>
                <span className="text-lg font-bold">LeadFlow</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Recover the leads you're already paying for.
              </p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Demo'] },
              { title: 'Company', links: ['About', 'Contact'] },
              { title: 'Legal', links: ['Privacy', 'Terms'] },
            ].map((column, i) => (
              <div key={i}>
                <h3 className="font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link href={`/${link.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 LeadFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
