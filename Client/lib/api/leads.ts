/**
 * Leads API
 * Mock implementation - replace with actual API calls
 */

import type { Lead, LeadStatus } from '@/types';
import { mockLeads } from '@/lib/mock/data';
import { delay } from './client';

export interface GetLeadsParams {
  organizationId: string;
  status?: LeadStatus;
  search?: string;
  page?: number;
  limit?: number;
}

export interface GetLeadsResponse {
  leads: Lead[];
  total: number;
  page: number;
  limit: number;
}

// GET /api/v1/leads
export async function getLeads(params: GetLeadsParams): Promise<GetLeadsResponse> {
  await delay(300);
  
  // Mock filtering
  let filtered = mockLeads.filter(
    lead => lead.organizationId === params.organizationId
  );
  
  if (params.status) {
    filtered = filtered.filter(lead => lead.status === params.status);
  }
  
  if (params.search) {
    const search = params.search.toLowerCase();
    filtered = filtered.filter(
      lead =>
        lead.customer.name.toLowerCase().includes(search) ||
        lead.service.toLowerCase().includes(search) ||
        lead.customer.phone.includes(search)
    );
  }
  
  const page = params.page || 1;
  const limit = params.limit || 10;
  const start = (page - 1) * limit;
  const end = start + limit;
  
  return {
    leads: filtered.slice(start, end),
    total: filtered.length,
    page,
    limit,
  };
}

// GET /api/v1/leads/:id
export async function getLead(id: string): Promise<Lead | null> {
  await delay(200);
  return mockLeads.find(lead => lead.id === id) || null;
}

// POST /api/v1/leads
export async function createLead(data: Partial<Lead>): Promise<Lead> {
  await delay(400);
  // Mock creation
  const newLead: Lead = {
    id: `lead-${Date.now()}`,
    ...data,
  } as Lead;
  return newLead;
}

// PATCH /api/v1/leads/:id
export async function updateLead(id: string, data: Partial<Lead>): Promise<Lead> {
  await delay(300);
  const lead = mockLeads.find(l => l.id === id);
  if (!lead) throw new Error('Lead not found');
  return { ...lead, ...data };
}

// DELETE /api/v1/leads/:id
export async function deleteLead(id: string): Promise<void> {
  await delay(300);
}

// PATCH /api/v1/leads/:id/status
export async function updateLeadStatus(
  id: string,
  status: LeadStatus
): Promise<Lead> {
  await delay(300);
  const lead = mockLeads.find(l => l.id === id);
  if (!lead) throw new Error('Lead not found');
  return { ...lead, status };
}
