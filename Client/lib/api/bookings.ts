/**
 * Bookings API Module
 * Replace mock implementations with actual API calls to your backend
 */

import { delay } from './client';
import { mockBookings } from '@/lib/mock/data';
import type { Booking } from '@/types';

/**
 * Get all bookings
 * Backend: GET /api/v1/bookings
 */
export async function getBookings(filters?: {
  status?: 'SCHEDULED' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
  date?: string;
}): Promise<Booking[]> {
  await delay();
  
  let results = [...mockBookings];
  
  if (filters?.status) {
    results = results.filter(b => b.status === filters.status);
  }
  
  if (filters?.date) {
    results = results.filter(b => 
      b.scheduledDate.startsWith(filters.date!)
    );
  }
  
  return results;
}

/**
 * Get single booking
 * Backend: GET /api/v1/bookings/:id
 */
export async function getBooking(id: string): Promise<Booking> {
  await delay();
  
  const booking = mockBookings.find(b => b.id === id);
  if (!booking) {
    throw new Error('Booking not found');
  }
  
  return booking;
}

/**
 * Create new booking
 * Backend: POST /api/v1/bookings
 */
export async function createBooking(data: {
  customerId: string;
  service: string;
  scheduledDate: string;
  timeSlot: string;
  technician: string;
  amount: number;
}): Promise<Booking> {
  await delay();
  
  const newBooking: Booking = {
    id: `booking-${Date.now()}`,
    customerId: data.customerId,
    service: data.service,
    scheduledDate: data.scheduledDate,
    timeSlot: data.timeSlot,
    technician: data.technician,
    amount: data.amount,
    status: 'SCHEDULED',
    createdAt: new Date().toISOString(),
    conversationId: 'conv-1', // Mock
    organizationId: 'org-1', // Mock
  };
  
  return newBooking;
}

/**
 * Update booking
 * Backend: PATCH /api/v1/bookings/:id
 */
export async function updateBooking(
  id: string,
  data: Partial<Booking>
): Promise<Booking> {
  await delay();
  
  const booking = mockBookings.find(b => b.id === id);
  if (!booking) {
    throw new Error('Booking not found');
  }
  
  return {
    ...booking,
    ...data,
  };
}

/**
 * Mark booking as completed
 * Backend: PATCH /api/v1/bookings/:id/complete
 */
export async function completeBooking(id: string): Promise<Booking> {
  await delay();
  
  const booking = mockBookings.find(b => b.id === id);
  if (!booking) {
    throw new Error('Booking not found');
  }
  
  return {
    ...booking,
    status: 'COMPLETED',
  };
}

/**
 * Cancel booking
 * Backend: PATCH /api/v1/bookings/:id/cancel
 */
export async function cancelBooking(id: string, reason?: string): Promise<Booking> {
  await delay();
  
  const booking = mockBookings.find(b => b.id === id);
  if (!booking) {
    throw new Error('Booking not found');
  }
  
  return {
    ...booking,
    status: 'CANCELLED',
  };
}
