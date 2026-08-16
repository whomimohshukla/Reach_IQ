/**
 * WhatsApp API Module
 * Replace mock implementations with actual API calls to your backend
 */

import { delay } from './client';
import { mockWhatsAppConnection } from '@/lib/mock/data';
import type { WhatsAppConnection } from '@/types';

/**
 * Get WhatsApp connection status
 * Backend: GET /api/v1/whatsapp/status
 */
export async function getWhatsAppStatus(): Promise<WhatsAppConnection> {
  await delay();
  return mockWhatsAppConnection;
}

/**
 * Connect WhatsApp account
 * Backend: POST /api/v1/whatsapp/connect
 */
export async function connectWhatsApp(data: {
  phoneNumber: string;
  businessName: string;
}): Promise<{
  qrCode?: string;
  connectionId: string;
  status: 'PENDING' | 'CONNECTED';
}> {
  await delay();
  
  return {
    connectionId: 'conn-' + Date.now(),
    status: 'PENDING',
    qrCode: 'mock-qr-code-data',
  };
}

/**
 * Disconnect WhatsApp account
 * Backend: POST /api/v1/whatsapp/disconnect
 */
export async function disconnectWhatsApp(): Promise<{ success: boolean }> {
  await delay();
  return { success: true };
}

/**
 * Send test message
 * Backend: POST /api/v1/whatsapp/test
 */
export async function sendTestMessage(phoneNumber: string): Promise<{
  success: boolean;
  messageId: string;
}> {
  await delay();
  
  return {
    success: true,
    messageId: 'msg-' + Date.now(),
  };
}

/**
 * Get WhatsApp webhook status
 * Backend: GET /api/v1/whatsapp/webhook
 */
export async function getWebhookStatus(): Promise<{
  configured: boolean;
  url: string;
  lastActivity: string;
}> {
  await delay();
  
  return {
    configured: true,
    url: 'https://api.leadflow.in/webhook/whatsapp',
    lastActivity: new Date().toISOString(),
  };
}

/**
 * Sync WhatsApp messages
 * Backend: POST /api/v1/whatsapp/sync
 */
export async function syncWhatsAppMessages(): Promise<{
  success: boolean;
  messagesSynced: number;
}> {
  await delay();
  
  return {
    success: true,
    messagesSynced: 42,
  };
}
