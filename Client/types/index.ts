// Core Types for LeadFlow

export type UserRole = 'OWNER' | 'ADMIN' | 'MANAGER' | 'AGENT' | 'VIEWER';

export type LeadStatus = 'NEW' | 'HOT' | 'WARM' | 'COLD' | 'FOLLOW_UP' | 'CONVERTED' | 'LOST';

export type LeadSource = 'WHATSAPP' | 'PHONE' | 'EMAIL' | 'WALK_IN' | 'REFERRAL' | 'OTHER';

export type BookingStatus = 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' | 'RESCHEDULED';

export type FollowUpStatus = 'SCHEDULED' | 'SENT' | 'FAILED' | 'CANCELLED';

export type MessageStatus = 'SENDING' | 'SENT' | 'DELIVERED' | 'READ' | 'FAILED';

export type WhatsAppConnectionStatus = 'NOT_CONNECTED' | 'CONNECTING' | 'CONNECTED' | 'ERROR' | 'DISCONNECTED';

export interface Organization {
  id: string;
  name: string;
  businessType: string;
  location: string;
  phone: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  organizationId: string;
  avatar?: string;
  lastActive: string;
  status: 'ACTIVE' | 'INACTIVE';
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  location?: string;
  organizationId: string;
  createdAt: string;
  lastContact?: string;
}

export interface Lead {
  id: string;
  customerId: string;
  customer: Customer;
  service: string;
  status: LeadStatus;
  score: number;
  potentialValue: number;
  source: LeadSource;
  lastContact?: string;
  nextFollowUp?: string;
  organizationId: string;
  createdAt: string;
  updatedAt: string;
  intent?: 'HIGH' | 'MEDIUM' | 'LOW';
  urgency?: 'HIGH' | 'MEDIUM' | 'LOW';
  sentiment?: 'POSITIVE' | 'NEUTRAL' | 'NEGATIVE';
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderType: 'CUSTOMER' | 'BUSINESS' | 'SYSTEM';
  content: string;
  status: MessageStatus;
  timestamp: string;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  leadId: string;
  lead: Lead;
  customer: Customer;
  messages: Message[];
  aiSummary?: string;
  aiScore?: number;
  aiIntent?: 'HIGH' | 'MEDIUM' | 'LOW';
  aiSuggestion?: string;
  organizationId: string;
  createdAt: string;
  updatedAt: string;
  lastMessageAt: string;
}

export interface FollowUp {
  id: string;
  leadId: string;
  lead: Lead;
  customer: Customer;
  message: string;
  scheduledTime: string;
  status: FollowUpStatus;
  reason?: string;
  organizationId: string;
  createdAt: string;
  sentAt?: string;
}

export interface Booking {
  id: string;
  leadId: string;
  lead: Lead;
  customer: Customer;
  service: string;
  scheduledDate: string;
  scheduledTime: string;
  technicianId?: string;
  technician?: User;
  amount: number;
  status: BookingStatus;
  notes?: string;
  organizationId: string;
  createdAt: string;
  completedAt?: string;
}

export interface DashboardStats {
  totalLeads: number;
  hotLeads: number;
  followUpsNeeded: number;
  recoveredLeads: number;
  revenueRecovered: number;
  conversionRate: number;
  avgLeadValue: number;
  avgResponseTime: number;
}

export interface AIInsight {
  id: string;
  type: 'REVENUE_OPPORTUNITY' | 'HIGH_INTENT' | 'FOLLOW_UP_RECOMMENDATION' | 'CONVERSATION_INSIGHT';
  title: string;
  description: string;
  leads?: Lead[];
  potentialValue?: number;
  confidence: number;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  createdAt: string;
}

export interface WhatsAppConnection {
  status: WhatsAppConnectionStatus;
  phone?: string;
  businessName?: string;
  messagesProcessed: number;
  webhookStatus: 'ACTIVE' | 'INACTIVE';
  lastActivity?: string;
  isDevelopment: boolean;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'SUCCESS' | 'WARNING' | 'ERROR' | 'INFO';
  isRead: boolean;
  createdAt: string;
  link?: string;
}

export interface TeamMember extends User {
  invitedBy?: string;
  invitedAt?: string;
}

export interface APIKey {
  id: string;
  name: string;
  key: string;
  maskedKey: string;
  createdAt: string;
  lastUsed?: string;
  expiresAt?: string;
}
