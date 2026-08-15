'use client';

import { useQuery } from '@tanstack/react-query';
import { getDashboardStats } from '@/lib/api/dashboard';
import { getLeads } from '@/lib/api/leads';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Calendar, Target, IndianRupee, ArrowRight, Flame, Sparkles, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const organizationId = 'org-1';

  const { data: stats, isLoading: statsLoading, error: statsError } = useQuery({
    queryKey: ['dashboard-stats', organizationId],
    queryFn: () => getDashboardStats(organizationId),
  });

  const { data: leadsData, isLoading: leadsLoading, error: leadsError } = useQuery({
    queryKey: ['dashboard-leads', organizationId],
    queryFn: () => getLeads({ organizationId, status: 'HOT', limit: 5 }),
  });

  // Error State
  if (statsError || leadsError) {
    return (
      <div className="p-8 space-y-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <Card className="p-8 max-w-md text-center bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Unable to Load Dashboard</h3>
            <p className="text-gray-600 mb-6">
              {(statsError as Error)?.message || (leadsError as Error)?.message || 'Something went wrong. Please try again.'}
            </p>
            <Button 
              onClick={() => window.location.reload()} 
              className="bg-[#44A194] hover:bg-[#3a8c81] text-white font-semibold"
            >
              Reload Page
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  // Loading State
  if (statsLoading) {
    return (
      <div className="p-8 space-y-8">
        <div className="animate-pulse space-y-8">
          <div className="h-10 w-96 bg-gray-200 rounded-lg" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-40 bg-gray-200 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Good morning, <span className="text-[#44A194]">ABC Cooling Services</span>
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Here's what needs your attention today
        </p>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Users, label: 'Total Leads', value: stats?.totalLeads || 0, change: '+12%', color: 'bg-blue-500', bgColor: 'bg-blue-50' },
          { icon: Flame, label: 'Hot Leads', value: stats?.hotLeads || 0, change: 'Urgent', color: 'bg-red-500', bgColor: 'bg-red-50' },
          { icon: Calendar, label: 'Follow-ups Needed', value: stats?.followUpsNeeded || 0, change: 'Pending', color: 'bg-orange-500', bgColor: 'bg-orange-50' },
          { icon: IndianRupee, label: 'Revenue Recovered', value: formatCurrency(stats?.revenueRecovered || 0), change: '+₹42K', color: 'bg-[#44A194]', bgColor: 'bg-[#44A194]/10' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <Card className="p-7 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
              <div className={`absolute inset-0 ${stat.color.replace('bg-', 'bg-')} opacity-0 group-hover:opacity-5 transition-opacity`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className={`h-14 w-14 rounded-2xl ${stat.color} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="h-7 w-7 text-white" />
                  </div>
                  <span className={`text-sm font-bold px-3 py-1.5 rounded-lg ${
                    stat.change.includes('+') ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-4xl font-bold mb-2 text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* AI Revenue Opportunity Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="p-10 bg-[#44A194]/5 hover:shadow-2xl transition-all" style={{ border: '2px solid rgba(68, 161, 148, 0.2)' }}>
          <div className="flex items-start justify-between gap-8">
            <div className="flex items-start gap-6 flex-1">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="h-16 w-16 rounded-2xl bg-[#44A194] flex items-center justify-center flex-shrink-0 shadow-xl shadow-[#44A194]/30"
              >
                <Target className="h-8 w-8 text-white" />
              </motion.div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-5 w-5 text-[#44A194] animate-pulse" />
                  <h3 className="text-2xl font-bold text-gray-900">AI Revenue Opportunity</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  We found <span className="font-bold text-gray-900">43 inactive leads</span> worth approximately{' '}
                  <span className="font-bold text-[#44A194]">₹2.84 lakh</span>. These leads showed high buying intent but haven't been contacted in over 24 hours.
                </p>
                <div className="flex items-center gap-6 mt-5 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-semibold">High confidence (87%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                    <span className="font-semibold">Action needed today</span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/ai">
              <Button size="lg" className="bg-[#44A194] hover:bg-[#3a8c81] text-white shadow-xl shadow-[#44A194]/25 hover:shadow-2xl hover:shadow-[#44A194]/35 transition-all group px-8 py-6 text-base h-auto">
                Review Leads
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Card>
      </motion.div>

      {/* Leads Needing Attention */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Leads Needing Attention</h2>
            <p className="text-gray-600 mt-2 text-base">High-value opportunities requiring follow-up</p>
          </div>
          <Link href="/leads?status=HOT">
            <Button variant="outline" className="gap-2 h-12 px-6 font-semibold hover:bg-[#44A194]/10 hover:text-[#44A194] transition-all" style={{ border: '2px solid rgb(229 231 235)' }}>
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <Card className="overflow-hidden bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
          {leadsLoading ? (
            <div className="p-6 space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-28 bg-gray-100 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : leadsError ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Failed to Load Leads</h3>
              <p className="text-gray-600 mb-4">{(leadsError as Error)?.message || 'Unable to fetch leads'}</p>
              <Button 
                onClick={() => window.location.reload()} 
                variant="outline"
                className="font-semibold"
              >
                Try Again
              </Button>
            </div>
          ) : leadsData?.leads && leadsData.leads.length > 0 ? (
            <div>
              {leadsData.leads.map((lead, i) => (
                <motion.div
                  key={lead.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  style={{ borderTop: i > 0 ? '1px solid rgb(243 244 246)' : 'none' }}
                >
                  <Link href={`/leads/${lead.id}`} className="flex items-center justify-between p-7 hover:bg-gray-50 transition-colors group">
                    <div className="flex items-center gap-6 flex-1">
                      <div className="h-16 w-16 rounded-2xl bg-[#44A194]/10 flex items-center justify-center text-lg font-bold text-[#44A194]" style={{ border: '2px solid rgba(68, 161, 148, 0.2)' }}>
                        {lead.customer.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-bold text-xl text-gray-900">
                            {lead.customer.name}
                          </span>
                          {lead.status === 'HOT' && (
                            <Flame className="h-5 w-5 text-red-500 animate-pulse" />
                          )}
                          <Badge className={`${
                            lead.status === 'HOT' ? 'bg-red-500 hover:bg-red-600' :
                            lead.status === 'WARM' ? 'bg-orange-500 hover:bg-orange-600' :
                            'bg-blue-500 hover:bg-blue-600'
                          } text-white font-semibold px-3 py-1`}>
                            {lead.status}
                          </Badge>
                          <Badge variant="outline" className="font-bold px-3 py-1" style={{ border: '1px solid rgb(229 231 235)' }}>
                            Score: {lead.score}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1 font-medium">
                          <div>{lead.service} • {formatCurrency(lead.potentialValue)}</div>
                          <div>{lead.customer.phone} • {lead.customer.location}</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-[#44A194] mb-1 group-hover:text-[#3a8c81] transition-colors">
                        Follow up today
                      </div>
                      {lead.lastContact && (
                        <div className="text-xs text-gray-500 font-medium">
                          Last contact: {new Date(lead.lastContact).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="p-16 text-center">
              <Target className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">No hot leads at the moment</p>
            </div>
          )}
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 sm:grid-cols-3">
        {[
          { label: 'Conversion Rate', value: `${stats?.conversionRate || 0}%`, icon: TrendingUp, color: 'text-green-500', bgColor: 'bg-green-50' },
          { label: 'Avg Lead Value', value: formatCurrency(stats?.avgLeadValue || 0), icon: IndianRupee, color: 'text-[#44A194]', bgColor: 'bg-[#44A194]/10' },
          { label: 'Avg Response Time', value: `${stats?.avgResponseTime || 0}m`, icon: Calendar, color: 'text-blue-500', bgColor: 'bg-blue-50' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Card className="p-7 hover:shadow-xl transition-all bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold mb-2 text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">
                    {stat.label}
                  </div>
                </div>
                <div className={`h-14 w-14 rounded-2xl ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`h-7 w-7 ${stat.color}`} />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


