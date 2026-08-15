/**
 * Mock API Client
 * This simulates API calls with mock data.
 * Replace these functions with actual API calls to your Node.js/Express backend.
 */

// Simulate network delay
const delay = (ms: number = 500) => new Promise(resolve => setTimeout(resolve, ms));

export class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'APIError';
  }
}

// Future API configuration
export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1',
  timeout: 30000,
};

// Mock API client - replace with actual fetch/axios calls
export const apiClient = {
  get: async <T>(endpoint: string): Promise<T> => {
    await delay();
    // TODO: Replace with actual API call
    // return fetch(`${API_CONFIG.baseURL}${endpoint}`).then(res => res.json())
    throw new Error(`Mock API: GET ${endpoint} not implemented`);
  },
  
  post: async <T>(endpoint: string, data: unknown): Promise<T> => {
    await delay();
    // TODO: Replace with actual API call
    throw new Error(`Mock API: POST ${endpoint} not implemented`);
  },
  
  patch: async <T>(endpoint: string, data: unknown): Promise<T> => {
    await delay();
    // TODO: Replace with actual API call
    throw new Error(`Mock API: PATCH ${endpoint} not implemented`);
  },
  
  delete: async <T>(endpoint: string): Promise<T> => {
    await delay();
    // TODO: Replace with actual API call
    throw new Error(`Mock API: DELETE ${endpoint} not implemented`);
  },
};

export { delay };
