/**
 * Conversations API
 * Mock implementation - replace with actual API calls
 */

import type { Conversation, Message } from '@/types';
import { mockConversations } from '@/lib/mock/data';
import { delay } from './client';

// GET /api/v1/conversations
export async function getConversations(organizationId: string): Promise<Conversation[]> {
  await delay(300);
  return mockConversations.filter(c => c.organizationId === organizationId);
}

// GET /api/v1/conversations/:id
export async function getConversation(id: string): Promise<Conversation | null> {
  await delay(200);
  return mockConversations.find(c => c.id === id) || null;
}

// POST /api/v1/messages
export async function sendMessage(data: {
  conversationId: string;
  content: string;
}): Promise<Message> {
  await delay(400);
  const newMessage: Message = {
    id: `msg-${Date.now()}`,
    conversationId: data.conversationId,
    senderId: 'user-1',
    senderType: 'BUSINESS',
    content: data.content,
    status: 'SENT',
    timestamp: new Date().toISOString(),
    isRead: false,
  };
  return newMessage;
}
