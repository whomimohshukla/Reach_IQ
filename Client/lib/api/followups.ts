/**
 * Follow-ups API Module
 * Replace mock implementations with actual API calls to your backend
 */

import { delay } from './client';
import { mockFollowUps } from '@/lib/mock/data';
import type { FollowUp } from '@/types';

/**
 * Get all follow-ups
 * Backend: GET /api/v1/followups
 */
export async function getFollowUps(filters?: {
  status?: 'SCHEDULED' | 'SENT' | 'FAILED' | 'CANCELLED';
  customerId?: string;
}): Promise<FollowUp[]> {
  await delay();
  
  let results = [...mockFollowUps];
  
  if (filters?.status) {
    results = results.filter(f => f.status === filters.status);
  }
  
  if (filters?.customerId) {
    results = results.filter(f => f.customerId === filters.customerId);
  }
  
  return results;
}

/**
 * Get single follow-up
 * Backend: GET /api/v1/followups/:id
 */
export async function getFollowUp(id: string): Promise<FollowUp> {
  await delay();
  
  const followUp = mockFollowUps.find(f => f.id === id);
  if (!followUp) {
    throw new Error('Follow-up not found');
  }
  
  return followUp;
}

/**
 * Create new follow-up
 * Backend: POST /api/v1/followups
 */
export async function createFollowUp(data: {
  customerId: string;
  message: string;
  scheduledFor: string;
  reason: string;
}): Promise<FollowUp> {
  await delay();
  
  const newFollowUp: FollowUp = {
    id: `followup-${Date.now()}`,
    customerId: data.customerId,
    message: data.message,
    scheduledFor: data.scheduledFor,
    reason: data.reason,
    status: 'SCHEDULED',
    createdAt: new Date().toISOString(),
  };
  
  return newFollowUp;
}

/**
 * Update follow-up
 * Backend: PATCH /api/v1/followups/:id
 */
export async function updateFollowUp(
  id: string,
  data: Partial<FollowUp>
): Promise<FollowUp> {
  await delay();
  
  const followUp = mockFollowUps.find(f => f.id === id);
  if (!followUp) {
    throw new Error('Follow-up not found');
  }
  
  return {
    ...followUp,
    ...data,
  };
}

/**
 * Cancel follow-up
 * Backend: PATCH /api/v1/followups/:id/cancel
 */
export async function cancelFollowUp(id: string): Promise<FollowUp> {
  await delay();
  
  const followUp = mockFollowUps.find(f => f.id === id);
  if (!followUp) {
    throw new Error('Follow-up not found');
  }
  
  return {
    ...followUp,
    status: 'CANCELLED',
  };
}

/**
 * Send follow-up immediately
 * Backend: POST /api/v1/followups/:id/send
 */
export async function sendFollowUpNow(id: string): Promise<FollowUp> {
  await delay();
  
  const followUp = mockFollowUps.find(f => f.id === id);
  if (!followUp) {
    throw new Error('Follow-up not found');
  }
  
  return {
    ...followUp,
    status: 'SENT',
    sentAt: new Date().toISOString(),
  };
}
