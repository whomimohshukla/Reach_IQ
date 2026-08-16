/**
 * Analytics API Module
 * Replace mock implementations with actual API calls to your backend
 */

import { delay } from './client';

export interface AnalyticsData {
  kpis: {
    totalLeads: number;
    conversionRate: number;
    recoveryRate: number;
    followUpRate: number;
    revenueRecovered: number;
    averageLeadValue: number;
    averageResponseTime: string;
    activeLeads: number;
  };
  leadVolume: Array<{
    date: string;
    count: number;
  }>;
  conversionTrend: Array<{
    date: string;
    conversions: number;
    leads: number;
    rate: number;
  }>;
  revenueRecovery: Array<{
    month: string;
    recovered: number;
    potential: number;
  }>;
  leadStatusDistribution: Array<{
    status: string;
    count: number;
  }>;
  servicePerformance: Array<{
    service: string;
    leads: number;
    conversions: number;
    revenue: number;
  }>;
}

/**
 * Get analytics data
 * Backend: GET /api/v1/analytics
 */
export async function getAnalytics(params?: {
  startDate?: string;
  endDate?: string;
}): Promise<AnalyticsData> {
  await delay();
  
  // Mock analytics data
  return {
    kpis: {
      totalLeads: 247,
      conversionRate: 34.5,
      recoveryRate: 28.3,
      followUpRate: 89.2,
      revenueRecovered: 184500,
      averageLeadValue: 2850,
      averageResponseTime: '2.4 hours',
      activeLeads: 43,
    },
    leadVolume: [
      { date: '2026-08-01', count: 12 },
      { date: '2026-08-02', count: 15 },
      { date: '2026-08-03', count: 8 },
      { date: '2026-08-04', count: 18 },
      { date: '2026-08-05', count: 22 },
      { date: '2026-08-06', count: 19 },
      { date: '2026-08-07', count: 25 },
    ],
    conversionTrend: [
      { date: 'Week 1', conversions: 12, leads: 45, rate: 26.7 },
      { date: 'Week 2', conversions: 18, leads: 52, rate: 34.6 },
      { date: 'Week 3', conversions: 22, leads: 58, rate: 37.9 },
      { date: 'Week 4', conversionss: 28, leads: 62, rate: 45.2 },
    ],
    revenueRecovery: [
      { month: 'Jan', recovered: 125000, potential: 180000 },
      { month: 'Feb', recovered: 142000, potential: 195000 },
      { month: 'Mar', recovered: 158000, potential: 210000 },
      { month: 'Apr', recovered: 171000, potential: 225000 },
      { month: 'May', recovered: 184500, potential: 240000 },
    ],
    leadStatusDistribution: [
      { status: 'NEW', count: 43 },
      { status: 'HOT', count: 28 },
      { status: 'WARM', count: 52 },
      { status: 'COLD', count: 31 },
      { status: 'FOLLOW_UP', count: 38 },
      { status: 'CONVERTED', count: 85 },
      { status: 'LOST', count: 12 },
    ],
    servicePerformance: [
      { service: 'AC Repair', leads: 89, conversions: 34, revenue: 95000 },
      { service: 'AC Service', leads: 124, conversions: 48, revenue: 72000 },
      { service: 'Installation', leads: 34, conversions: 15, revenue: 225000 },
      { service: 'Gas Refill', leads: 67, conversions: 28, revenue: 42000 },
    ],
  };
}

/**
 * Get lead trends
 * Backend: GET /api/v1/analytics/leads
 */
export async function getLeadTrends(period: 'day' | 'week' | 'month'): Promise<any> {
  await delay();
  return {
    period,
    data: [],
  };
}

/**
 * Get revenue analytics
 * Backend: GET /api/v1/analytics/revenue
 */
export async function getRevenueAnalytics(period: 'month' | 'quarter' | 'year'): Promise<any> {
  await delay();
  return {
    period,
    total: 184500,
    recovered: 142000,
    potential: 240000,
  };
}
