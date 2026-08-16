import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, 
  Brain, 
  Target, 
  Calendar, 
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Connect WhatsApp',
    description: 'Connect your WhatsApp Business account in under 2 minutes. We automatically capture all customer conversations.',
    icon: MessageCircle,
    color: 'text-[#467235] bg-[#467235]/10'
  },
  {
    number: '02',
    title: 'AI Analyzes Conversations',
    description: 'Our AI reads every message to understand customer intent, urgency, and buying signals in real-time.',
    icon: Brain,
    color: 'text-[#2563EB] bg-[#2563EB]/10'
  },
  {
    number: '03',
    title: 'Identify Hot Leads',
    description: 'Leads are automatically scored and prioritized. You see exactly which customers are ready to buy.',
    icon: Target,
    color: 'text-[#B7791F] bg-[#B7791F]/10'
  },
  {
    number: '04',
    title: 'Smart Follow-ups',
    description: 'Get reminders and AI-suggested messages for inactive leads. Never let a potential customer slip away.',
    icon: Calendar,
    color: 'text-[#467235] bg-[#467235]/10'
  },
  {
    number: '05',
    title: 'Track Conversions & Revenue',
    description: 'See exactly how many leads you recovered and how much revenue LeadFlow brought to your business.',
    icon: TrendingUp,
    color: 'text-[#2E7D32] bg-[#2E7D32]/10'
  },
];

const useCases = [
  {
    business: 'AC Service Business',
    scenario: 'Customer asks: "How much for AC repair?"',
    problem: 'You reply with pricing. Customer says "I'll check and get back." Then: silence.',
    solution: 'LeadFlow detects high buying intent, scores the lead 92/100, and reminds you to follow up the next day.',
    result: '₹2,500 service booking recovered'
  },
  {
    business: 'Plumbing Services',
    scenario: 'Customer: "Can someone come tomorrow for leak repair?"',
    problem: 'You say "Yes, available tomorrow." Customer reads but doesn\'t confirm.',
    solution: 'LeadFlow identifies urgency, marks as hot lead, suggests: "Shall I book you for 2 PM tomorrow?"',
    result: '₹1,800 emergency service converted'
  },
  {
    business: 'Electrical Services',
    scenario: 'Customer: "Need electrical work. Send quotation."',
    problem: 'You send quote. No response. Lead is forgotten.',
    solution: 'LeadFlow tracks inactive leads, alerts you after 48 hours with AI-suggested follow-up message.',
    result: '₹15,000 rewiring project won'
  },
];

export default function HowItWorksPage() {
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

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#172014] mb-6">
            How LeadFlow Works
          </h1>
          <p className="text-xl text-[#64705F]">
            Five simple steps to start recovering lost leads and growing your service business.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-[#E2E8DF] hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-4`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="text-4xl font-bold text-[#E2E8DF] text-center">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl font-bold text-[#172014] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-lg text-[#64705F]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#172014] mb-4">
              Real-world Examples
            </h2>
            <p className="text-xl text-[#64705F]">
              See how service businesses use LeadFlow to recover lost revenue
            </p>
          </div>

          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-[#F8FAF7] rounded-2xl p-8 border border-[#E2E8DF]"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="px-3 py-1 rounded-full bg-[#467235]/10 text-[#467235] text-sm font-semibold">
                    {useCase.business}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm font-semibold text-[#64705F] mb-2">Scenario</div>
                    <p className="text-sm text-[#33402F] mb-3">{useCase.scenario}</p>
                    <div className="text-sm font-semibold text-[#C62828] mb-2">The Problem</div>
                    <p className="text-sm text-[#64705F]">{useCase.problem}</p>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-[#467235] mb-2">LeadFlow Solution</div>
                    <p className="text-sm text-[#33402F]">{useCase.solution}</p>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-[#2E7D32] mb-2">Result</div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#2E7D32]" />
                      <span className="text-lg font-bold text-[#2E7D32]">{useCase.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#467235]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start recovering lost leads today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join service businesses already growing with LeadFlow
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-[#467235] hover:bg-[#F8FAF7] h-12 px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E2E8DF] py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-[#64705F] text-sm">
          <p>© 2026 LeadFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
