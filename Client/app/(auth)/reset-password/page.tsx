'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Lock, Eye, EyeOff, CheckCircle2, X } from 'lucide-react';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Password strength indicators
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  const isPasswordValid = hasMinLength && hasUpperCase && hasLowerCase && hasNumber;
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isPasswordValid) {
      setError('Please meet all password requirements');
      return;
    }

    if (!passwordsMatch) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    // Mock password reset
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = '/login?reset=success';
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAF7] p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8DF] p-8">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-[#467235]/10 flex items-center justify-center mb-6">
            <Lock className="h-8 w-8 text-[#467235]" />
          </div>

          {/* Header */}
          <h1 className="text-2xl font-bold text-[#172014] mb-2">
            Reset your password
          </h1>
          <p className="text-[#64705F] mb-8">
            Create a new secure password for your account.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password */}
            <div>
              <Label htmlFor="password" className="text-sm font-semibold text-[#172014]">
                New password
              </Label>
              <div className="relative mt-2">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 pr-12 border-[#CBD5C5] focus:border-[#467235] focus:ring-[#467235]"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64705F] hover:text-[#172014]"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              {/* Password Requirements */}
              <div className="mt-3 space-y-2">
                <PasswordRequirement met={hasMinLength} text="At least 8 characters" />
                <PasswordRequirement met={hasUpperCase} text="One uppercase letter" />
                <PasswordRequirement met={hasLowerCase} text="One lowercase letter" />
                <PasswordRequirement met={hasNumber} text="One number" />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <Label htmlFor="confirmPassword" className="text-sm font-semibold text-[#172014]">
                Confirm password
              </Label>
              <div className="relative mt-2">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="h-12 pr-12 border-[#CBD5C5] focus:border-[#467235] focus:ring-[#467235]"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64705F] hover:text-[#172014]"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {confirmPassword && (
                <p className={`mt-2 text-sm ${passwordsMatch ? 'text-[#2E7D32]' : 'text-[#C62828]'}`}>
                  {passwordsMatch ? '✓ Passwords match' : '✗ Passwords do not match'}
                </p>
              )}
            </div>

            {error && (
              <div className="bg-[#C62828]/10 border border-[#C62828]/20 rounded-xl p-3">
                <p className="text-sm text-[#C62828]">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-[#467235] hover:bg-[#365A29] text-white font-semibold"
              disabled={isLoading || !isPasswordValid || !passwordsMatch}
            >
              {isLoading ? 'Resetting...' : 'Reset Password'}
            </Button>
          </form>

          {/* Back to Login */}
          <p className="mt-6 text-center text-sm text-[#64705F]">
            Remember your password?{' '}
            <Link href="/login" className="font-semibold text-[#467235] hover:text-[#365A29]">
              Back to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function PasswordRequirement({ met, text }: { met: boolean; text: string }) {
  return (
    <div className="flex items-center gap-2">
      {met ? (
        <CheckCircle2 className="h-4 w-4 text-[#2E7D32]" />
      ) : (
        <X className="h-4 w-4 text-[#64705F]" />
      )}
      <span className={`text-sm ${met ? 'text-[#2E7D32]' : 'text-[#64705F]'}`}>
        {text}
      </span>
    </div>
  );
}
