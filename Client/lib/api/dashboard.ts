/**
 * Dashboard API
 * Mock implementation - replace with actual API calls
 */

import type { DashboardStats } from '@/types';
import { mockDashboardStats } from '@/lib/mock/data';
import { delay } from './client';

// GET /api/v1/dashboard/stats
export async function getDashboardStats(organizationId: string): Promise<DashboardStats> {
  await delay(300);
  return mockDashboardStats;
}
