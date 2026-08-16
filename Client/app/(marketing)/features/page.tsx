import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  MessageSquare, 
  Calendar, 
  TrendingUp, 
  Users, 
  BarChart3,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  Clock,
  IndianRupee
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Lead Scoring',
    description: 'Automatically score every conversation based on buying intent, urgency, and likelihood to convert.',
    benefits: [
      'Real-time lead scoring',
      'Intent detection',
      'Urgency analysis',
      'Purchase prediction'
    ],
    color: 'text-[#467235] bg-[#467235]/10'
  },
  {
    icon: MessageSquare,
    title: 'Conversation Intelligence',
    description: 'Understand every WhatsApp conversation with AI-powered analysis and sentiment detection.',
    benefits: [
      'Sentiment analysis',
      'Key phrase extraction',
      'Question identification',
      'Context understanding'
    ],
    color: 'text-[#2563EB] bg-[#2563EB]/10'
  },
  {
    icon: Calendar,
    title: 'Follow-up Automation',
    description: 'Never miss a lead. Automatically schedule and send follow-ups at the perfect time.',
    benefits: [
      'Smart scheduling',
      'Automated reminders',
      'Custom timing rules',
      'Multi-step sequences'
    ],
    color: 'text-[#B7791F] bg-[#B7791F]/10'
  },
  {
    icon: Sparkles,
    title: 'AI Reply Suggestions',
    description: 'Get intelligent reply suggestions for every customer message to respond faster and better.',
    benefits: [
      'Context-aware replies',
      'Professional tone',
      'Instant suggestions',
      'Customizable templates'
    ],
    color: 'text-[#467235] bg-[#467235]/10'
  },
  {
    icon: IndianRupee,
    title: 'Revenue Recovery',
    description: 'Identify and recover lost revenue from inactive leads with AI-powered recommendations.',
    benefits: [
      'Revenue opportunity detection',
      'Lost lead identification',
      'Recovery recommendations',
      'ROI tracking'
    ],
    color: 'text-[#2E7D32] bg-[#2E7D32]/10'
  },
  {
    icon: Users,
    title: 'Lead Management',
    description: 'Centralized dashboard to track, manage, and convert all your WhatsApp leads in one place.',
    benefits: [
      'Unified lead view',
      'Status tracking',
      'Custom filters',
      'Bulk actions'
    ],
    color: 'text-[#2563EB] bg-[#2563EB]/10'
  },
  {
    icon: Target,
    title: 'Booking Management',
    description: 'Convert conversations to bookings and manage your entire service schedule efficiently.',
    benefits: [
      'Easy booking creation',
      'Calendar integration',
      'Technician assignment',
      'Status tracking'
    ],
    color: 'text-[#B7791F] bg-[#B7791F]/10'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Detailed analytics on lead performance, conversion rates, and revenue recovery.',
    benefits: [
      'Real-time dashboards',
      'Conversion tracking',
      'Performance metrics',
      'Custom reports'
    ],
    color: 'text-[#467235] bg-[#467235]/10'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Integration',
    description: 'Seamless integration with WhatsApp Business for automatic message capture and sync.',
    benefits: [
      'Two-way sync',
      'Message templates',
      'Media support',
      'Status tracking'
    ],
    color: 'text-[#2E7D32] bg-[#2E7D32]/10'
  },
  {
    icon: Shield,
    title: 'Team Management',
    description: 'Collaborate with your team with role-based access and permissions.',
    benefits: [
      'Role-based access',
      'Activity tracking',
      'Team performance',
      'Secure permissions'
    ],
    color: 'text-[#2563EB] bg-[#2563EB]/10'
  },
  {
    icon: Zap,
    title: 'Real-time Notifications',
    description: 'Stay updated with instant notifications for hot leads and important events.',
    benefits: [
      'Hot lead alerts',
      'Follow-up reminders',
      'Booking notifications',
      'Team updates'
    ],
    color: 'text-[#B7791F] bg-[#B7791F]/10'
  },
  {
    icon: Clock,
    title: 'Smart Timing',
    description: 'AI determines the best time to follow up based on customer behavior patterns.',
    benefits: [
      'Optimal timing',
      'Pattern recognition',
      'Response prediction',
      'Engagement optimization'
    ],
    color: 'text-[#467235] bg-[#467235]/10'
  },
];

export default function FeaturesPage() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#467235]/10 text-[#467235] text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4" />
            All Features
          </div>
          <h1 className="text-5xl font-bold text-[#172014] mb-6">
            Everything you need to recover lost leads
          </h1>
          <p className="text-xl text-[#64705F] mb-8">
            Powerful features designed specifically for service businesses to capture, analyze, and convert WhatsApp leads.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-[#E2E8DF] hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#172014] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#64705F] mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-[#467235] mt-0.5 flex-shrink-0" />
                        <span className="text-[#33402F]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#467235]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to recover your lost leads?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start converting more WhatsApp conversations into customers today.
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
