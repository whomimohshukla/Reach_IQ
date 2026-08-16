'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from '@/components/ui/dropdown-menu';
import { 
  User, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Building2,
  ChevronDown 
} from 'lucide-react';

interface UserMenuProps {
  user: {
    name: string;
    email: string;
    role: string;
  };
  organization?: {
    name: string;
  };
}

export function UserMenu({ user, organization }: UserMenuProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    
    // Mock logout - replace with actual API call
    setTimeout(() => {
      // Clear any auth tokens
      localStorage.removeItem('auth-token');
      
      // Redirect to login
      router.push('/login');
    }, 500);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-[#F8FAF7] dark:hover:bg-[#192118] transition-colors outline-none">
        <div className="h-9 w-9 rounded-full bg-[#467235] flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-[#467235]/25">
          {getInitials(user.name)}
        </div>
        <div className="flex-1 text-left min-w-0">
          <div className="text-sm font-semibold text-[#172014] dark:text-white truncate">
            {user.name}
          </div>
          <div className="text-xs text-[#64705F] dark:text-[#AAB5A5] capitalize">
            {user.role.toLowerCase()}
          </div>
        </div>
        <ChevronDown className="h-4 w-4 text-[#64705F] dark:text-[#AAB5A5]" />
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="w-64 bg-white dark:bg-[#192118] border-[#E2E8DF] dark:border-[#2C3828]"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-semibold text-[#172014] dark:text-white">
                {user.name}
              </p>
              <p className="text-xs text-[#64705F] dark:text-[#AAB5A5]">
                {user.email}
              </p>
              {organization && (
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-[#E2E8DF] dark:border-[#2C3828]">
                  <Building2 className="h-3.5 w-3.5 text-[#467235]" />
                  <span className="text-xs font-medium text-[#172014] dark:text-white">
                    {organization.name}
                  </span>
                </div>
              )}
            </div>
          </DropdownMenuLabel>
          
          <DropdownMenuSeparator className="bg-[#E2E8DF] dark:bg-[#2C3828]" />
          
          <DropdownMenuItem asChild>
            <Link 
              href="/settings" 
              className="flex items-center gap-3 cursor-pointer text-[#172014] dark:text-white hover:bg-[#F8FAF7] dark:hover:bg-[#202A1E]"
            >
              <User className="h-4 w-4 text-[#64705F] dark:text-[#AAB5A5]" />
              <span>My Profile</span>
            </Link>
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
            <Link 
              href="/settings" 
              className="flex items-center gap-3 cursor-pointer text-[#172014] dark:text-white hover:bg-[#F8FAF7] dark:hover:bg-[#202A1E]"
            >
              <Settings className="h-4 w-4 text-[#64705F] dark:text-[#AAB5A5]" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
            <Link 
              href="/help" 
              className="flex items-center gap-3 cursor-pointer text-[#172014] dark:text-white hover:bg-[#F8FAF7] dark:hover:bg-[#202A1E]"
            >
              <HelpCircle className="h-4 w-4 text-[#64705F] dark:text-[#AAB5A5]" />
              <span>Help & Support</span>
            </Link>
          </DropdownMenuItem>
          
          <DropdownMenuSeparator className="bg-[#E2E8DF] dark:bg-[#2C3828]" />
          
          <DropdownMenuItem
            onClick={handleLogout}
            disabled={isLoading}
            className="flex items-center gap-3 cursor-pointer text-[#C62828] hover:bg-[#C62828]/10 dark:hover:bg-[#C62828]/20 focus:text-[#C62828]"
          >
            <LogOut className="h-4 w-4" />
            <span>{isLoading ? 'Logging out...' : 'Log out'}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
