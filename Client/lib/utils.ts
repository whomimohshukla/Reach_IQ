import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format currency in Indian Rupees
 */
export function formatCurrency(amount: number): string {
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(2)}L`;
  }
  if (amount >= 1000) {
    return `₹${(amount / 1000).toFixed(1)}K`;
  }
  return `₹${amount.toLocaleString('en-IN')}`;
}

/**
 * Format date relative to now
 */
export function formatRelativeTime(date: string | Date): string {
  const now = new Date();
  const then = new Date(date);
  const diffMs = now.getTime() - then.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return then.toLocaleDateString();
}

/**
 * Get lead status color
 */
export function getLeadStatusColor(status: string): string {
  switch (status) {
    case 'HOT':
      return 'text-red-600 bg-red-500/10';
    case 'WARM':
      return 'text-orange-600 bg-orange-500/10';
    case 'COLD':
      return 'text-gray-600 bg-gray-500/10';
    case 'NEW':
      return 'text-blue-600 bg-blue-500/10';
    case 'FOLLOW_UP':
      return 'text-yellow-600 bg-yellow-500/10';
    case 'CONVERTED':
      return 'text-green-600 bg-green-500/10';
    case 'LOST':
      return 'text-gray-600 bg-gray-500/10';
    default:
      return 'text-gray-600 bg-gray-500/10';
  }
}
