/**
 * AI Insights API Module
 * Replace mock implementations with actual API calls to your backend
 */

import { delay } from './client';
import { mockAIInsights } from '@/lib/mock/data';
import type { AIInsight } from '@/types';

/**
 * Get AI insights
 * Backend: GET /api/v1/ai/insights
 */
export async function getAIInsights(filters?: {
  type?: 'REVENUE_OPPORTUNITY' | 'HIGH_INTENT_LEAD' | 'FOLLOW_UP_NEEDED' | 'CONVERSATION_INSIGHT';
  priority?: 'HIGH' | 'MEDIUM' | 'LOW';
}): Promise<AIInsight[]> {
  await delay();
  
  let results = [...mockAIInsights];
  
  if (filters?.type) {
    results = results.filter(i => i.type === filters.type);
  }
  
  if (filters?.priority) {
    results = results.filter(i => i.priority === filters.priority);
  }
  
  return results;
}

/**
 * Get AI lead analysis
 * Backend: GET /api/v1/ai/leads/:leadId/analysis
 */
export async function getLeadAnalysis(leadId: string): Promise<{
  score: number;
  intent: 'HIGH' | 'MEDIUM' | 'LOW';
  urgency: 'HIGH' | 'MEDIUM' | 'LOW';
  sentiment: 'POSITIVE' | 'NEUTRAL' | 'NEGATIVE';
  purchaseLikelihood: number;
  summary: string;
  keyPhrases: string[];
  recommendedAction: string;
  confidence: number;
}> {
  await delay();
  
  return {
    score: 92,
    intent: 'HIGH',
    urgency: 'HIGH',
    sentiment: 'POSITIVE',
    purchaseLikelihood: 89,
    summary: 'Customer shows strong buying intent with specific questions about pricing and availability. Ready to move forward with service booking.',
    keyPhrases: ['how much', 'when available', 'can you come'],
    recommendedAction: 'Follow up within 24 hours to confirm booking and close the deal.',
    confidence: 94,
  };
}

/**
 * Get conversation analysis
 * Backend: GET /api/v1/ai/conversations/:conversationId/analysis
 */
export async function getConversationAnalysis(conversationId: string): Promise<{
  sentiment: 'POSITIVE' | 'NEUTRAL' | 'NEGATIVE';
  intent: string[];
  questions: string[];
  concerns: string[];
  buyingSignals: string[];
  summary: string;
}> {
  await delay();
  
  return {
    sentiment: 'POSITIVE',
    intent: ['Service inquiry', 'Price comparison', 'Availability check'],
    questions: ['How much does AC repair cost?', 'Can technician come tomorrow?'],
    concerns: ['Price concerns', 'Timeline urgency'],
    buyingSignals: ['Asking about availability', 'Requesting quote', 'Timeline discussion'],
    summary: 'Customer is actively seeking service with clear timeline and budget considerations.',
  };
}

/**
 * Get AI reply suggestions
 * Backend: POST /api/v1/ai/suggestions
 */
export async function getAISuggestions(params: {
  conversationId: string;
  context?: string;
}): Promise<{
  suggestions: Array<{
    message: string;
    tone: string;
    confidence: number;
  }>;
}> {
  await delay();
  
  return {
    suggestions: [
      {
        message: 'Our technician is available tomorrow between 2-4 PM. Would that work for you?',
        tone: 'Professional',
        confidence: 92,
      },
      {
        message: 'I can book a slot for you tomorrow afternoon. The service will cost ₹2,500. Shall I proceed?',
        tone: 'Direct',
        confidence: 88,
      },
      {
        message: 'We have availability tomorrow. I'll send you the service details and pricing. When would be a good time?',
        tone: 'Friendly',
        confidence: 85,
      },
    ],
  };
}

/**
 * Get revenue opportunities
 * Backend: GET /api/v1/ai/opportunities
 */
export async function getRevenueOpportunities(): Promise<{
  totalOpportunities: number;
  totalPotentialRevenue: number;
  opportunities: Array<{
    leadId: string;
    customerName: string;
    service: string;
    potentialValue: number;
    reason: string;
    recommendedAction: string;
    confidence: number;
  }>;
}> {
  await delay();
  
  return {
    totalOpportunities: 43,
    totalPotentialRevenue: 284000,
    opportunities: [
      {
        leadId: 'lead-1',
        customerName: 'Rahul Sharma',
        service: 'AC Repair',
        potentialValue: 2500,
        reason: 'High intent, no response for 27 hours',
        recommendedAction: 'Send follow-up with availability confirmation',
        confidence: 92,
      },
      {
        leadId: 'lead-2',
        customerName: 'Priya Verma',
        service: 'Installation',
        potentialValue: 7500,
        reason: 'Asked for quote, awaiting response',
        recommendedAction: 'Follow up with detailed pricing breakdown',
        confidence: 87,
      },
    ],
  };
}
