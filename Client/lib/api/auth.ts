/**
 * Authentication API Module
 * Replace mock implementations with actual API calls to your backend
 */

import { delay } from './client';
import type { User } from '@/types';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  phone?: string;
  businessName?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

/**
 * Login with email and password
 * Backend: POST /api/v1/auth/login
 */
export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  await delay();
  
  // Mock authentication
  const mockUser: User = {
    id: 'user-1',
    name: 'Rajesh Kumar',
    email: credentials.email,
    phone: '+91 98765 43210',
    role: 'OWNER',
    organizationId: 'org-1',
    status: 'ACTIVE',
    lastActive: new Date().toISOString(),
  };
  
  return {
    user: mockUser,
    token: 'mock-jwt-token',
    refreshToken: 'mock-refresh-token',
  };
}

/**
 * Signup new user
 * Backend: POST /api/v1/auth/signup
 */
export async function signup(data: SignupData): Promise<AuthResponse> {
  await delay();
  
  // Mock signup
  const mockUser: User = {
    id: 'user-' + Date.now(),
    name: data.name,
    email: data.email,
    phone: data.phone || '',
    role: 'OWNER',
    organizationId: 'org-' + Date.now(),
    status: 'ACTIVE',
    lastActive: new Date().toISOString(),
  };
  
  return {
    user: mockUser,
    token: 'mock-jwt-token',
    refreshToken: 'mock-refresh-token',
  };
}

/**
 * Logout
 * Backend: POST /api/v1/auth/logout
 */
export async function logout(): Promise<{ success: boolean }> {
  await delay();
  return { success: true };
}

/**
 * Request password reset
 * Backend: POST /api/v1/auth/forgot-password
 */
export async function forgotPassword(email: string): Promise<{ success: boolean }> {
  await delay();
  return { success: true };
}

/**
 * Reset password
 * Backend: POST /api/v1/auth/reset-password
 */
export async function resetPassword(token: string, newPassword: string): Promise<{ success: boolean }> {
  await delay();
  return { success: true };
}

/**
 * Send OTP to phone
 * Backend: POST /api/v1/auth/send-otp
 */
export async function sendOTP(phoneNumber: string): Promise<{ success: boolean; expiresIn: number }> {
  await delay();
  return { success: true, expiresIn: 300 }; // 5 minutes
}

/**
 * Verify OTP
 * Backend: POST /api/v1/auth/verify-otp
 */
export async function verifyOTP(phoneNumber: string, otp: string): Promise<AuthResponse> {
  await delay();
  
  const mockUser: User = {
    id: 'user-' + Date.now(),
    name: 'New User',
    email: '',
    phone: phoneNumber,
    role: 'OWNER',
    organizationId: 'org-' + Date.now(),
    status: 'ACTIVE',
    lastActive: new Date().toISOString(),
  };
  
  return {
    user: mockUser,
    token: 'mock-jwt-token',
    refreshToken: 'mock-refresh-token',
  };
}

/**
 * Refresh access token
 * Backend: POST /api/v1/auth/refresh
 */
export async function refreshToken(refreshToken: string): Promise<{ token: string }> {
  await delay();
  return { token: 'new-mock-jwt-token' };
}

/**
 * Get current user
 * Backend: GET /api/v1/auth/me
 */
export async function getCurrentUser(): Promise<User> {
  await delay();
  
  return {
    id: 'user-1',
    name: 'Rajesh Kumar',
    email: 'rajesh@abccooling.com',
    phone: '+91 98765 43210',
    role: 'OWNER',
    organizationId: 'org-1',
    status: 'ACTIVE',
    lastActive: new Date().toISOString(),
  };
}
