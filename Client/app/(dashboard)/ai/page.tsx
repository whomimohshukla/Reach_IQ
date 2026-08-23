'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles,
  Target,
  TrendingUp,
  Clock,
  MessageSquare,
  IndianRupee,
  Zap,
  ArrowRight,
  Flame
} from 'lucide-react';
import Link from 'next/link';
import { formatCurrency } from '@/lib/utils';
import { mockAIInsights, mockLeads } from '@/lib/mock/data';

export default function AIPage() {
  const highValueLeads = mockLeads
    .filter(lead => lead.intent === 'HIGH' && lead.score >= 80)
    .slice(0, 5);

  const totalPotentialRevenue = highValueLeads.reduce((sum, lead) => sum + lead.potentialValue, 0);

  return (
    <div className="min-h-full space-y-8 p-4 md:p-8">
      {/* Header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius)] bg-primary shadow-lg shadow-primary/30">
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">AI Insights</h1>
          </div>
          <p className="text-base text-muted-foreground">
            Intelligent recommendations powered by machine learning
          </p>
        </div>
        <Button className="h-12 bg-primary px-6 text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90">
          <Zap className="h-4 w-4 mr-2" />
          Refresh Insights
        </Button>
      </div>

      {/* Main Revenue Opportunity Banner */}
      <Card className="border-primary/30 bg-primary/10 p-6 md:p-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div className="flex min-w-0 flex-1 items-start gap-5 md:gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[var(--radius)] bg-primary shadow-xl shadow-primary/40 md:h-20 md:w-20">
              <Target className="h-8 w-8 text-primary-foreground md:h-10 md:w-10" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">High Priority Opportunity</h2>
                <Badge className="bg-red-500 text-white font-bold px-4 py-2 text-base">
                  <Flame className="h-4 w-4 mr-1" />
                  Urgent
                </Badge>
              </div>
              <p className="mb-4 text-base leading-relaxed text-foreground/80 md:text-lg">
                We identified <span className="font-bold text-foreground">{highValueLeads.length} high-intent leads</span> worth{' '}
                <span className="font-bold text-primary">{formatCurrency(totalPotentialRevenue)}</span> that require immediate attention.
                These customers showed clear buying signals but haven&apos;t received follow-up in over 24 hours.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-bold text-foreground/80">92% Confidence</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-orange-500" />
                  <span className="font-bold text-foreground/80">Act within 6 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="font-bold text-foreground/80">67% conversion rate</span>
                </div>
              </div>
            </div>
          </div>
          <Link href="/leads?status=HOT">
            <Button size="lg" className="h-14 bg-primary px-8 text-base font-bold text-primary-foreground shadow-xl shadow-primary/30 hover:bg-primary/90">
              Review Leads
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Card>

      {/* AI Insights Cards */}
      <div className="grid gap-6 lg:grid-cols-3">
        {mockAIInsights.map((insight) => (
          <Card key={insight.id} className="border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start justify-between mb-5">
              <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${
                insight.priority === 'HIGH' ? 'bg-red-50' :
                insight.priority === 'MEDIUM' ? 'bg-orange-50' :
                'bg-blue-50'
              }`}>
                {insight.type === 'REVENUE_OPPORTUNITY' ? (
                  <IndianRupee className={`h-6 w-6 ${
                    insight.priority === 'HIGH' ? 'text-red-600' :
                    insight.priority === 'MEDIUM' ? 'text-orange-600' :
                    'text-blue-600'
                  }`} />
                ) : insight.type === 'HIGH_INTENT' ? (
                  <Flame className="h-6 w-6 text-red-600" />
                ) : (
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                )}
              </div>
              <Badge className={`${
                insight.priority === 'HIGH' ? 'bg-red-500' :
                insight.priority === 'MEDIUM' ? 'bg-orange-500' :
                'bg-blue-500'
              } text-white font-bold px-3 py-1`}>
                {insight.priority}
              </Badge>
            </div>

            <h3 className="mb-3 text-xl font-bold text-foreground">
              {insight.title}
            </h3>
            <p className="mb-5 text-sm font-medium leading-relaxed text-muted-foreground">
              {insight.description}
            </p>

            {insight.potentialValue && (
              <div className="p-4 bg-[#467235]/10 rounded-xl mb-5" style={{ border: '1px solid rgba(68, 161, 148, 0.2)' }}>
                <div className="mb-1 text-sm font-semibold text-muted-foreground">Potential Revenue</div>
                <div className="text-2xl font-bold text-primary">
                  {formatCurrency(insight.potentialValue)}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-5" style={{ borderTop: '1px solid rgb(243 244 246)' }}>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="font-bold text-gray-600">{insight.confidence}% confidence</span>
              </div>
              <Button size="sm" className="h-9 bg-primary px-4 font-semibold text-primary-foreground hover:bg-primary/90">
                Take Action
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* High-Value Leads Section */}
      <Card className="border-border bg-card p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">High-Value Leads Requiring Action</h2>
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              Leads with highest conversion probability
            </p>
          </div>
          <Link href="/leads?status=HOT">
            <Button variant="outline" className="gap-2 h-11 px-6 font-semibold hover:bg-[#467235]/10 hover:text-[#467235]" style={{ border: '2px solid rgb(229 231 235)' }}>
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          {highValueLeads.map((lead) => (
            <Link key={lead.id} href={`/leads/${lead.id}`}>
              <div className="group rounded-[var(--radius)] bg-muted p-5 transition-all hover:bg-accent md:p-6">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-5 flex-1">
                    <div className="h-16 w-16 rounded-2xl bg-[#467235]/10 flex items-center justify-center text-base font-bold text-[#467235]" style={{ border: '2px solid rgba(68, 161, 148, 0.2)' }}>
                      {lead.customer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                          {lead.customer.name}
                        </h3>
                        <Badge className="bg-red-500 text-white font-semibold px-3 py-1">
                          HOT
                        </Badge>
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 rounded-lg">
                          <span className="text-sm font-bold text-green-700">Score: {lead.score}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-muted-foreground md:gap-5">
                        <span>{lead.service}</span>
                        <span>•</span>
                        <span>{lead.customer.location}</span>
                        <span>•</span>
                        <span className="font-bold text-[#467235]">{formatCurrency(lead.potentialValue)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="mb-1 text-sm font-semibold text-muted-foreground">AI Recommendation</div>
                      <div className="text-sm font-bold text-primary">Follow up within 2 hours</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-[#467235] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="mt-4 pt-4 flex items-start gap-3" style={{ borderTop: '1px solid rgb(229 231 235)' }}>
                  <div className="h-6 w-6 rounded-lg bg-[#467235] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-sm font-medium text-foreground/80">
                    Customer showed high buying intent. Mentioned specific requirements and asked about pricing.
                    Best time to contact: Morning (10-11 AM). Conversion probability: 87%.
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Card>

      {/* AI Performance Stats */}
      <div className="grid gap-6 sm:grid-cols-3">
        {[
          {
            label: 'AI Predictions Made',
            value: '1,247',
            icon: Sparkles,
            color: 'text-[#467235]',
            bgColor: 'bg-[#467235]/10'
          },
          {
            label: 'Accuracy Rate',
            value: '87%',
            icon: Target,
            color: 'text-green-600',
            bgColor: 'bg-green-50'
          },
          {
            label: 'Revenue Generated',
            value: formatCurrency(184500),
            icon: TrendingUp,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50'
          },
        ].map((stat, i) => (
          <Card key={i} className="border-border bg-card p-7">
            <div className="flex items-center justify-between">
              <div>
                <div className="mb-2 text-sm font-semibold text-muted-foreground">{stat.label}</div>
                <div className="text-4xl font-bold text-foreground">{stat.value}</div>
              </div>
              <div className={`h-14 w-14 rounded-2xl ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon className={`h-7 w-7 ${stat.color}`} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
