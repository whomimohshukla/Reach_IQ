'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Eye, EyeOff, Loader2, AlertCircle } from "lucide-react";
import { LogoWithText } from '@/components/Logo';

export default function SignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    acceptTerms: false,
  });

  // Password strength calculation
  const getPasswordStrength = (password: string) => {
    if (!password) return { strength: 0, label: '', color: '' };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    if (strength <= 1) return { strength: 25, label: 'Weak', color: 'bg-red-500' };
    if (strength === 2) return { strength: 50, label: 'Fair', color: 'bg-orange-500' };
    if (strength === 3) return { strength: 75, label: 'Good', color: 'bg-[#467235]' };
    return { strength: 100, label: 'Strong', color: 'bg-green-500' };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (!formData.acceptTerms) {
      newErrors.terms = 'You must accept the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Mock signup
    setTimeout(() => {
      toast.success('Account created successfully! Welcome to LeadFlow');
      router.push('/dashboard');
    }, 1500);
  };

  const handleGoogleSignup = () => {
    setIsLoading(true);
    toast.info('Connecting to Google...');
    setTimeout(() => {
      router.push('/dashboard');
    }, 1000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
            <LogoWithText href="/" />
          <h1 className="text-3xl font-bold text-gray-900 mt-8">
            Create your account
          </h1>
          <p className="text-gray-600 mt-3 text-base">
            Start recovering lost leads with AI-powered insights
          </p>
        </div>

        {/* Signup Card */}
        <div className="bg-white rounded-2xl p-8 shadow-xl" style={{ border: '1px solid rgb(243 244 246)' }}>
          {/* Google Signup */}
          <Button
            type="button"
            variant="outline"
            className="w-full h-12 font-semibold hover:bg-gray-50 transition-all"
            style={{ border: '2px solid rgb(229 231 235)' }}
            onClick={handleGoogleSignup}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            ) : (
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            )}
            {isLoading ? 'Connecting...' : 'Continue with Google'}
          </Button>

          <div className="relative my-6">
            <Separator className="bg-gray-200" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-sm text-gray-500 font-medium">
              or
            </span>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <Label htmlFor="name" className="text-gray-900 font-semibold">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Rajesh Kumar"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`mt-2 h-12 bg-gray-50 rounded-xl font-medium ${
                  errors.name ? 'border-red-500 border-2' : ''
                }`}
                style={{ border: errors.name ? undefined : '1px solid rgb(229 231 235)' }}
                disabled={isLoading}
              />
              {errors.name && (
                <div className="flex items-center gap-2 mt-2 text-red-600">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">{errors.name}</span>
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-900 font-semibold">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="rajesh@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`mt-2 h-12 bg-gray-50 rounded-xl font-medium ${
                  errors.email ? 'border-red-500 border-2' : ''
                }`}
                style={{ border: errors.email ? undefined : '1px solid rgb(229 231 235)' }}
                disabled={isLoading}
              />
              {errors.email && (
                <div className="flex items-center gap-2 mt-2 text-red-600">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">{errors.email}</span>
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-900 font-semibold">Password</Label>
              <div className="relative mt-2">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`h-12 bg-gray-50 rounded-xl font-medium pr-12 ${
                    errors.password ? 'border-red-500 border-2' : ''
                  }`}
                  style={{ border: errors.password ? undefined : '1px solid rgb(229 231 235)' }}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <div className="flex items-center gap-2 mt-2 text-red-600">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">{errors.password}</span>
                </div>
              )}
              {/* Password Strength Indicator */}
              {formData.password && !errors.password && (
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-600">Password Strength</span>
                    <span className={`text-xs font-bold ${
                      passwordStrength.label === 'Weak' ? 'text-red-600' :
                      passwordStrength.label === 'Fair' ? 'text-orange-600' :
                      passwordStrength.label === 'Good' ? 'text-[#467235]' :
                      'text-green-600'
                    }`}>
                      {passwordStrength.label}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${passwordStrength.color} transition-all duration-300`}
                      style={{ width: `${passwordStrength.strength}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => handleInputChange('acceptTerms', checked as boolean)}
                  disabled={isLoading}
                  className={errors.terms ? 'border-red-500' : ''}
                />
                <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed font-medium">
                  I agree to the{' '}
                  <Link href="/terms" className="text-[#467235] hover:text-[#365A29] font-bold">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-[#467235] hover:text-[#365A29] font-bold">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {errors.terms && (
                <div className="flex items-center gap-2 mt-2 text-red-600">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">{errors.terms}</span>
                </div>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-[#467235] hover:bg-[#365A29] text-white font-bold rounded-xl shadow-lg shadow-[#467235]/30 hover:shadow-xl hover:shadow-[#467235]/40 transition-all"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Creating account...
                </>
              ) : (
                'Create account'
              )}
            </Button>
          </form>
        </div>

        {/* Login Link */}
        <p className="text-center text-base text-gray-600 mt-8">
          Already have an account?{' '}
          <Link href="/login" className="text-[#467235] hover:text-[#365A29] font-bold transition-colors">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
