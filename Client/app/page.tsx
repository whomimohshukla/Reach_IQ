'use client';

import Link from 'next/link';
import { ArrowRight, BarChart3, Check, ChevronRight, Clock3, MessageCircle, Menu, Sparkles, Target } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LogoWithText } from '@/components/Logo';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '/pricing' },
];

const conversations = [
  { initials: 'AM', name: 'Aarav Mehta', message: 'Need AC installation for...', time: '2m', score: 92, tone: 'hot' },
  { initials: 'PS', name: 'Priya Shah', message: 'Can you share the quotation?', time: '18m', score: 78, tone: 'warm' },
  { initials: 'RK', name: 'Rohan Kapoor', message: 'Will get back to you soon', time: '1h', score: 54, tone: 'cool' },
];

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="workspace-grid min-h-screen overflow-hidden">
      <nav className="sticky top-0 z-30 mx-auto flex max-w-[1240px] items-center justify-between border-b border-border bg-background/80 px-6 py-5 backdrop-blur-xl md:px-10">
        <LogoWithText href="/" />
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => <Link key={link.label} href={link.href} className="border-b border-transparent px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground">{link.label}</Link>)}
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground lg:flex"><i className="h-2 w-2 rounded-full bg-primary" /> WhatsApp connected</span>
          <Link href="/login" className="hidden border border-border px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary sm:block">Sign in</Link>
          <Link href="/signup"><Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">Start free <ArrowRight className="ml-2 h-3.5 w-3.5" /></Button></Link>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}><SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />}><Menu className="h-5 w-5" /></SheetTrigger><SheetContent side="right" className="w-80 bg-card"><div className="flex flex-col gap-5 pt-10">{navLinks.map((link) => <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="border-b border-border pb-4 text-sm">{link.label}</Link>)}<Link href="/login" className="text-sm text-muted-foreground">Sign in</Link></div></SheetContent></Sheet>
        </div>
      </nav>

      <section className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 pb-24 pt-20 md:grid-cols-[0.92fr_1.08fr] md:px-10 md:pb-32 md:pt-28">
        <div>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-[#f07856]">WhatsApp lead recovery / 01</p>
          <h1 className="max-w-2xl text-[clamp(4rem,8vw,7.8rem)] font-semibold leading-[0.86] tracking-[-0.09em]">Turn chats<br /><span className="text-foreground">into customers.</span></h1>
          <p className="mt-9 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">LeadFlow reads every WhatsApp conversation, finds buying intent, and tells your team exactly who to follow up with next.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4"><Link href="/signup"><Button size="lg" className="h-13 bg-primary px-6 text-primary-foreground hover:bg-primary/90">Start recovering leads <ArrowRight className="ml-2 h-4 w-4" /></Button></Link><Link href="#how-it-works" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">See how it works <ChevronRight className="h-4 w-4" /></Link></div>
          <div className="mt-9 flex flex-wrap gap-5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"><span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" /> 5 minute setup</span><span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" /> No credit card</span></div>
        </div>

        <div className="relative border border-border bg-card/70 p-4 md:p-5">
          <div className="flex items-center justify-between border-b border-border pb-4"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center bg-primary text-primary-foreground"><MessageCircle className="h-5 w-5" /></span><div><p className="text-sm font-semibold">LeadFlow inbox</p><p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">Live WhatsApp pipeline</p></div></div><span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-primary"><i className="h-1.5 w-1.5 rounded-full bg-primary" /> Syncing</span></div>
          <div className="grid gap-4 py-5 sm:grid-cols-[1fr_1.2fr]">
            <div className="space-y-2">{conversations.map((conversation, index) => <div key={conversation.name} className={`border p-3 ${index === 0 ? 'border-primary bg-primary/10' : 'border-border bg-background/60'}`}><div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center bg-secondary font-mono text-[10px] text-primary">{conversation.initials}</span><div className="min-w-0 flex-1"><p className="truncate text-xs font-semibold">{conversation.name}</p><p className="truncate text-[10px] text-muted-foreground">{conversation.message}</p></div><span className="font-mono text-[9px] text-muted-foreground">{conversation.time}</span></div><div className="mt-3 flex items-center justify-between"><span className={`font-mono text-[9px] uppercase tracking-[0.12em] ${conversation.tone === 'hot' ? 'text-[#f07856]' : conversation.tone === 'warm' ? 'text-[#e5b85b]' : 'text-muted-foreground'}`}>{conversation.tone} lead</span><span className="font-mono text-[10px] text-primary">{conversation.score}</span></div></div>)}</div>
            <div className="border border-primary/50 bg-primary p-5 text-primary-foreground"><div className="flex items-center justify-between"><span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#f07856]">AI recommendation</span><Sparkles className="h-4 w-4 text-primary-foreground" /></div><p className="mt-6 text-xl font-semibold leading-tight">Follow up with Aarav now.</p><p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">He asked about installation pricing and has a 92% conversion score.</p><button className="mt-8 flex w-full items-center justify-between border border-primary-foreground/50 px-3 py-3 text-left text-xs text-primary-foreground hover:bg-primary-foreground/10">Open conversation <ArrowRight className="h-4 w-4" /></button></div>
          </div>
          <div className="grid grid-cols-3 gap-2 border-t border-border pt-4">{[['43', 'hot leads'], ['87%', 'AI accuracy'], ['₹2.84L', 'opportunity']].map(([value, label]) => <div key={label}><p className="text-lg font-semibold tracking-[-0.04em]">{value}</p><p className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">{label}</p></div>)}</div>
        </div>
      </section>

      <section id="features" className="border-y border-border bg-card/40"><div className="mx-auto grid max-w-[1240px] gap-px bg-border md:grid-cols-3">{[{ icon: Target, title: 'Know who is ready', body: 'AI scores every WhatsApp lead by intent, urgency, and value.' }, { icon: Clock3, title: 'Follow up on time', body: 'Smart reminders keep promising conversations from going cold.' }, { icon: BarChart3, title: 'Recover more revenue', body: 'See the pipeline clearly and turn missed messages into growth.' }].map((feature) => <div key={feature.title} className="bg-background p-8 md:p-10"><feature.icon className="mb-10 h-5 w-5 text-primary" /><h2 className="text-xl font-semibold tracking-[-0.04em]">{feature.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.body}</p></div>)}</div></section>

      <section id="how-it-works" className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32"><div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]"><div><p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#f07856]">A calmer pipeline / 02</p><h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight tracking-[-0.06em] md:text-6xl">Every lead gets the next right move.</h2></div><div className="grid gap-8 sm:grid-cols-2"><div className="border-l border-primary pl-5"><span className="font-mono text-xs text-primary">01</span><h3 className="mt-5 text-xl font-semibold">Connect WhatsApp</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Bring your existing conversations into one focused workspace.</p></div><div className="border-l border-primary pl-5"><span className="font-mono text-xs text-primary">02</span><h3 className="mt-5 text-xl font-semibold">Act on intent</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">LeadFlow highlights what matters and helps your team respond with context.</p></div></div></div></section>

      <footer className="border-t border-border"><div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10"><div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center bg-primary text-sm text-primary-foreground">L</span><span className="text-sm font-semibold">LeadFlow</span></div><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Smart WhatsApp lead recovery</p><div className="flex gap-5 text-xs text-muted-foreground"><Link href="/privacy" className="hover:text-primary">Privacy</Link><Link href="/terms" className="hover:text-primary">Terms</Link><Link href="/contact" className="hover:text-primary">Contact</Link></div></div></footer>
    </main>
  );
}
