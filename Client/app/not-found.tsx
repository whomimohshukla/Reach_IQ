import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAF7] p-4">
      <div className="text-center max-w-md">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-[120px] font-bold text-[#467235]/10 leading-none">404</div>
        </div>

        {/* Content */}
        <h1 className="text-3xl font-bold text-[#172014] mb-3">
          Page not found
        </h1>
        <p className="text-[#64705F] mb-8">
          Sorry, we couldn't find the page you're looking for. The page might have been moved or doesn't exist.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/dashboard">
            <Button className="bg-[#467235] hover:bg-[#365A29] w-full sm:w-auto">
              <Home className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="border-[#CBD5C5] w-full sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Help Text */}
        <p className="mt-8 text-sm text-[#64705F]">
          Need help?{' '}
          <Link href="/support" className="font-semibold text-[#467235] hover:text-[#365A29]">
            Contact support
          </Link>
        </p>
      </div>
    </div>
  );
}
