'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  TrendingDown,
  IndianRupee,
  Users,
  Target,
  Calendar,
  MessageSquare,
  Percent,
  Clock
} from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export default function AnalyticsPage() {
  // Mock analytics data
  const stats = {
    totalRevenue: 184500,
    revenueGrowth: 23.5,
    totalLeads: 127,
    leadsGrowth: 12.3,
    conversionRate: 34,
    conversionGrowth: 5.2,
    avgResponseTime: 12,
    responseGrowth: -8.5,
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-2 text-base">
            Track your business performance and growth metrics
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="font-semibold h-12 px-6" style={{ border: '2px solid rgb(229 231 235)' }}>
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 Days
          </Button>
          <Button className="bg-[#44A194] hover:bg-[#3a8c81] text-white h-12 px-6 shadow-lg shadow-[#44A194]/25 font-semibold">
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: 'Total Revenue',
            value: formatCurrency(stats.totalRevenue),
            change: stats.revenueGrowth,
            icon: IndianRupee,
            color: 'bg-[#44A194]',
            bgColor: 'bg-[#44A194]/10'
          },
          {
            label: 'Total Leads',
            value: stats.totalLeads,
            change: stats.leadsGrowth,
            icon: Users,
            color: 'bg-blue-500',
            bgColor: 'bg-blue-50'
          },
          {
            label: 'Conversion Rate',
            value: `${stats.conversionRate}%`,
            change: stats.conversionGrowth,
            icon: Target,
            color: 'bg-green-500',
            bgColor: 'bg-green-50'
          },
          {
            label: 'Avg Response Time',
            value: `${stats.avgResponseTime}m`,
            change: stats.responseGrowth,
            icon: Clock,
            color: 'bg-orange-500',
            bgColor: 'bg-orange-50'
          },
        ].map((stat, i) => (
          <Card key={i} className="p-7 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
            <div className="flex items-center justify-between mb-5">
              <div className={`h-14 w-14 rounded-2xl ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon className={`h-7 w-7 ${stat.color.replace('bg-', 'text-')}`} />
              </div>
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold ${
                stat.change > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}>
                {stat.change > 0 ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                {Math.abs(stat.change)}%
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 font-semibold">
              {stat.label}
            </div>
          </Card>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Revenue Chart */}
        <Card className="p-8 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Revenue Trend</h2>
              <p className="text-gray-600 text-sm font-medium mt-1">Monthly revenue over time</p>
            </div>
            <div className={`h-10 w-10 rounded-xl bg-[#44A194]/10 flex items-center justify-center`}>
              <IndianRupee className="h-5 w-5 text-[#44A194]" />
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {[45, 52, 48, 65, 70, 68, 85, 92, 88, 95, 100, 98].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-[#44A194] rounded-t-lg hover:bg-[#3a8c81] transition-all cursor-pointer"
                  style={{ height: `${height}%` }}
                />
                <div className="text-xs text-gray-500 mt-2 font-medium">{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Leads Chart */}
        <Card className="p-8 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Leads by Status</h2>
              <p className="text-gray-600 text-sm font-medium mt-1">Current lead distribution</p>
            </div>
            <div className={`h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center`}>
              <Target className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Hot', value: 18, total: 127, color: 'bg-red-500' },
              { label: 'Warm', value: 24, total: 127, color: 'bg-orange-500' },
              { label: 'Cold', value: 15, total: 127, color: 'bg-blue-500' },
              { label: 'Follow-up', value: 27, total: 127, color: 'bg-purple-500' },
              { label: 'Converted', value: 43, total: 127, color: 'bg-green-500' },
            ].map((item, i) => {
              const percentage = Math.round((item.value / item.total) * 100);
              return (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-gray-900">{item.label}</span>
                    <span className="text-sm font-bold text-gray-600">{item.value} ({percentage}%)</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color} transition-all`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Conversion Funnel */}
        <Card className="p-8 bg-white lg:col-span-2" style={{ border: '1px solid rgb(243 244 246)' }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Conversion Funnel</h2>
              <p className="text-gray-600 text-sm font-medium mt-1">Lead to customer journey</p>
            </div>
            <div className={`h-10 w-10 rounded-xl bg-green-50 flex items-center justify-center`}>
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
          </div>
          <div className="space-y-4">
            {[
              { stage: 'Total Leads', count: 127, percentage: 100, color: 'bg-blue-500' },
              { stage: 'Engaged', count: 89, percentage: 70, color: 'bg-purple-500' },
              { stage: 'Qualified', count: 67, percentage: 53, color: 'bg-orange-500' },
              { stage: 'Converted', count: 43, percentage: 34, color: 'bg-green-500' },
            ].map((stage, i) => (
              <div key={i} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base font-bold text-gray-900">{stage.stage}</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900">{stage.count}</span>
                    <span className="text-sm text-gray-500 ml-2 font-semibold">({stage.percentage}%)</span>
                  </div>
                </div>
                <div className="h-14 bg-gray-50 rounded-xl overflow-hidden" style={{ border: '1px solid rgb(243 244 246)' }}>
                  <div 
                    className={`h-full ${stage.color} transition-all flex items-center px-4`}
                    style={{ width: `${stage.percentage}%` }}
                  >
                    <span className="text-white font-bold text-sm">{stage.percentage}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Top Services */}
        <Card className="p-8 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Top Services</h2>
              <p className="text-gray-600 text-xs font-medium mt-1">Most requested</p>
            </div>
            <div className={`h-10 w-10 rounded-xl bg-[#44A194]/10 flex items-center justify-center`}>
              <MessageSquare className="h-5 w-5 text-[#44A194]" />
            </div>
          </div>
          <div className="space-y-4">
            {[
              { name: 'AC Repair', count: 45, revenue: 67500 },
              { name: 'Installation', count: 32, revenue: 240000 },
              { name: 'Maintenance', count: 28, revenue: 25200 },
              { name: 'Gas Refill', count: 22, revenue: 26400 },
            ].map((service, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-900 text-sm">{service.name}</span>
                  <span className="text-xs font-bold text-[#44A194]">{service.count} leads</span>
                </div>
                <div className="text-lg font-bold text-gray-900">{formatCurrency(service.revenue)}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
