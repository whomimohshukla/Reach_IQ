'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2, AlertCircle, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{email?: string; password?: string}>({});

  const validateForm = () => {
    const newErrors: {email?: string; password?: string} = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    setErrors({});

    // Mock login - simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Welcome back! Logged in successfully');
      router.push('/dashboard');
    }, 1500);
  };

  const handleGoogleLogin = () => {
    toast.info('Redirecting to Google authentication...');
    setTimeout(() => {
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-8 group">
            <div className="h-12 w-12 rounded-xl bg-[#44A194] flex items-center justify-center shadow-lg shadow-[#44A194]/25 group-hover:shadow-[#44A194]/40 transition-all">
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-white">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.8"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-2xl font-bold text-gray-900 leading-none">ReachIQ</span>
              <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">Smart Lead Recovery</span>
            </div>
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Welcome back
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Log in to your account to continue
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl p-8 shadow-xl" style={{ border: '1px solid rgb(229 231 235)' }}>
          {/* Google Login */}
          <Button
            type="button"
            variant="outline"
            className="w-full h-12 font-semibold hover:bg-gray-50 transition-all"
            style={{ border: '2px solid rgb(229 231 235)' }}
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </Button>

          <div className="relative my-6">
            <Separator className="bg-gray-200" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-sm text-gray-500 font-medium">
              or
            </span>
          </div>

          {/* Email Login Form */}
          <form onSubmit={handleEmailLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-gray-900">Email</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({...errors, email: undefined});
                  }}
                  className={`pl-12 h-12 bg-gray-50 rounded-xl font-medium ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                  style={{ border: errors.email ? '2px solid #ef4444' : '1px solid rgb(229 231 235)' }}
                  disabled={isLoading}
                />
              </div>
              {errors.email && (
                <div className="flex items-center gap-2 text-sm text-red-600 mt-2">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-semibold text-gray-900">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-[#44A194] hover:text-[#3a8c81] font-semibold transition-colors"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({...errors, password: undefined});
                  }}
                  className={`pl-12 pr-12 h-12 bg-gray-50 rounded-xl font-medium ${errors.password ? 'border-red-500 focus:ring-red-500' : ''}`}
                  style={{ border: errors.password ? '2px solid #ef4444' : '1px solid rgb(229 231 235)' }}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && (
                <div className="flex items-center gap-2 text-sm text-red-600 mt-2">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errors.password}</span>
                </div>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-[#44A194] hover:bg-[#3a8c81] text-white font-semibold text-base shadow-lg shadow-[#44A194]/25 hover:shadow-xl hover:shadow-[#44A194]/35 transition-all rounded-xl"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Logging in...
                </>
              ) : (
                'Log in'
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/verify-phone" className="text-sm text-[#44A194] hover:text-[#3a8c81] font-semibold transition-colors">
              Login with phone number →
            </Link>
          </div>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 mt-8">
          Don't have an account?{' '}
          <Link href="/signup" className="text-[#44A194] hover:text-[#3a8c81] font-bold transition-colors">
            Sign up for free
          </Link>
        </p>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <Link href="/privacy" className="hover:text-[#44A194] transition-colors">Privacy</Link>
          {' · '}
          <Link href="/terms" className="hover:text-[#44A194] transition-colors">Terms</Link>
          {' · '}
          <Link href="/help" className="hover:text-[#44A194] transition-colors">Help</Link>
        </div>
      </div>
    </div>
  );
}
