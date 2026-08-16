'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { ArrowLeft, Mail, CheckCircle2 } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    // Mock password reset request
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAF7] p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8DF] p-8 text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 rounded-2xl bg-[#2E7D32]/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-8 w-8 text-[#2E7D32]" />
            </div>

            {/* Success Message */}
            <h1 className="text-2xl font-bold text-[#172014] mb-2">
              Check your email
            </h1>
            <p className="text-[#64705F] mb-8">
              We've sent a password reset link to <span className="font-semibold text-[#172014]">{email}</span>
            </p>

            {/* Instructions */}
            <div className="bg-[#EEF4EA] rounded-xl p-4 mb-6 text-left">
              <p className="text-sm text-[#33402F] mb-2">
                <strong>What's next?</strong>
              </p>
              <ol className="text-sm text-[#64705F] space-y-1 list-decimal list-inside">
                <li>Check your email inbox</li>
                <li>Click the reset link (valid for 1 hour)</li>
                <li>Create a new password</li>
              </ol>
            </div>

            {/* Actions */}
            <Link href="/login">
              <Button className="w-full h-12 bg-[#467235] hover:bg-[#365A29] text-white font-semibold mb-4">
                Back to Login
              </Button>
            </Link>

            <p className="text-sm text-[#64705F]">
              Didn't receive the email?{' '}
              <button
                onClick={() => setIsSubmitted(false)}
                className="font-semibold text-[#467235] hover:text-[#365A29]"
              >
                Try again
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAF7] p-4">
      <div className="w-full max-w-md">
        <Link 
          href="/login" 
          className="inline-flex items-center gap-2 text-sm text-[#64705F] hover:text-[#172014] mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8DF] p-8">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-[#467235]/10 flex items-center justify-center mb-6">
            <Mail className="h-8 w-8 text-[#467235]" />
          </div>

          {/* Header */}
          <h1 className="text-2xl font-bold text-[#172014] mb-2">
            Forgot your password?
          </h1>
          <p className="text-[#64705F] mb-8">
            No worries! Enter your email and we'll send you a link to reset your password.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <Label htmlFor="email" className="text-sm font-semibold text-[#172014]">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 h-12 border-[#CBD5C5] focus:border-[#467235] focus:ring-[#467235]"
                disabled={isLoading}
              />
              {error && (
                <p className="mt-2 text-sm text-[#C62828]">{error}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-[#467235] hover:bg-[#365A29] text-white font-semibold"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </form>

          {/* Help Text */}
          <p className="mt-6 text-center text-sm text-[#64705F]">
            Need help?{' '}
            <Link href="/support" className="font-semibold text-[#467235] hover:text-[#365A29]">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
