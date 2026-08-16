'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { ArrowLeft, Phone } from 'lucide-react';

export default function VerifyPhonePage() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [resendTimer, setResendTimer] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setError('');

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split('').forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);
    inputRefs.current[5]?.focus();
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join('');
    
    if (otpCode.length !== 6) {
      setError('Please enter the complete 6-digit code');
      return;
    }

    setIsLoading(true);
    setError('');

    // Mock verification
    setTimeout(() => {
      // Simulate success - redirect to onboarding
      window.location.href = '/onboarding';
    }, 1500);
  };

  const handleResend = () => {
    if (resendTimer === 0) {
      setResendTimer(60);
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
      // TODO: Implement actual resend logic
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAF7] p-4">
      <div className="w-full max-w-md">
        <Link 
          href="/signup" 
          className="inline-flex items-center gap-2 text-sm text-[#64705F] hover:text-[#172014] mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to signup
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8DF] p-8">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-[#467235]/10 flex items-center justify-center mb-6">
            <Phone className="h-8 w-8 text-[#467235]" />
          </div>

          {/* Header */}
          <h1 className="text-2xl font-bold text-[#172014] mb-2">
            Verify your phone number
          </h1>
          <p className="text-[#64705F] mb-8">
            We've sent a 6-digit code to <span className="font-semibold text-[#172014]">+91 98765 43210</span>
          </p>

          {/* OTP Form */}
          <form onSubmit={handleVerify} className="space-y-6">
            {/* OTP Input */}
            <div>
              <label className="block text-sm font-semibold text-[#172014] mb-3">
                Enter verification code
              </label>
              <div className="flex gap-3">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className="h-14 text-center text-xl font-bold border-[#CBD5C5] focus:border-[#467235] focus:ring-[#467235]"
                    disabled={isLoading}
                  />
                ))}
              </div>
              {error && (
                <p className="mt-2 text-sm text-[#C62828]">{error}</p>
              )}
            </div>

            {/* Resend Timer */}
            <div className="text-center">
              {resendTimer > 0 ? (
                <p className="text-sm text-[#64705F]">
                  Resend code in <span className="font-semibold text-[#172014]">{resendTimer}s</span>
                </p>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  className="text-sm font-semibold text-[#467235] hover:text-[#365A29] transition-colors"
                >
                  Resend verification code
                </button>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-[#467235] hover:bg-[#365A29] text-white font-semibold"
              disabled={isLoading || otp.join('').length !== 6}
            >
              {isLoading ? 'Verifying...' : 'Verify & Continue'}
            </Button>
          </form>

          {/* Help Text */}
          <p className="mt-6 text-center text-sm text-[#64705F]">
            Didn't receive the code?{' '}
            <Link href="/support" className="font-semibold text-[#467235] hover:text-[#365A29]">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
