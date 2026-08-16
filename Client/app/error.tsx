'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAF7] p-4">
      <div className="text-center max-w-md">
        {/* Error Icon */}
        <div className="w-20 h-20 rounded-full bg-[#C62828]/10 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="h-10 w-10 text-[#C62828]" />
        </div>

        {/* Content */}
        <h1 className="text-3xl font-bold text-[#172014] mb-3">
          Something went wrong
        </h1>
        <p className="text-[#64705F] mb-8">
          We encountered an unexpected error. Don't worry, our team has been notified and we're working on it.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            onClick={reset}
            className="bg-[#467235] hover:bg-[#365A29] w-full sm:w-auto"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
          <Link href="/dashboard">
            <Button 
              variant="outline"
              className="border-[#CBD5C5] w-full sm:w-auto"
            >
              <Home className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-[#C62828]/5 border border-[#C62828]/20 rounded-xl text-left">
            <div className="text-xs font-semibold text-[#C62828] mb-2">Error Details (Dev Only):</div>
            <pre className="text-xs text-[#64705F] overflow-auto">
              {error.message}
            </pre>
          </div>
        )}

        {/* Help Text */}
        <p className="mt-8 text-sm text-[#64705F]">
          If the problem persists,{' '}
          <Link href="/support" className="font-semibold text-[#467235] hover:text-[#365A29]">
            contact support
          </Link>
        </p>
      </div>
    </div>
  );
}
