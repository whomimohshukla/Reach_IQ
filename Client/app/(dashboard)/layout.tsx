'use client';

import { Home, MessageSquare, Users, Calendar, BarChart3, Brain, MessageCircle, Settings, HelpCircle, ChevronDown, Bell, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogoWithText } from "@/components/Logo";
import { UserMenu } from "@/components/UserMenu";

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Leads', href: '/leads', icon: Users },
  { name: 'Conversations', href: '/conversations', icon: MessageSquare },
  { name: 'Follow-ups', href: '/followups', icon: Calendar },
  { name: 'Bookings', href: '/bookings', icon: Calendar },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'AI Insights', href: '/ai', icon: Brain },
  { name: 'WhatsApp', href: '/whatsapp', icon: MessageCircle },
];

// Mock user data - replace with actual auth
const mockUser = {
  name: 'Rajesh Kumar',
  email: 'rajesh@abccooling.com',
  role: 'OWNER'
};

const mockOrganization = {
  name: 'ABC Cooling Services'
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#F8FAF7] dark:bg-[#0E120C]">
      {/* Sidebar */}
      <aside className="hidden md:flex md:w-72 md:flex-col bg-white dark:bg-[#141A12] border-r border-[#E2E8DF] dark:border-[#2C3828]">
        {/* Logo */}
        <div className="flex h-20 items-center px-6 border-b border-[#E2E8DF] dark:border-[#2C3828]">
          <LogoWithText href="/dashboard" />
        </div>

        {/* Organization Selector */}
        <div className="px-4 py-5 border-b border-[#E2E8DF] dark:border-[#2C3828]">
          <button className="flex w-full items-center justify-between rounded-xl bg-[#F8FAF7] dark:bg-[#192118] px-4 py-3.5 text-sm hover:bg-[#F1F5EF] dark:hover:bg-[#202A1E] transition-colors">
            <div className="flex items-center gap-3 min-w-0">
              <div className="h-9 w-9 rounded-lg bg-[#467235]/10 flex items-center justify-center text-xs font-bold text-[#467235] flex-shrink-0">
                AC
              </div>
              <span className="font-semibold text-[#172014] dark:text-white truncate">ABC Cooling Services</span>
            </div>
            <ChevronDown className="h-4 w-4 text-[#64705F] dark:text-[#AAB5A5] flex-shrink-0" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-4 py-5 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#467235]/10 text-[#467235] shadow-sm'
                    : 'text-[#64705F] dark:text-[#AAB5A5] hover:bg-[#F8FAF7] dark:hover:bg-[#192118] hover:text-[#172014] dark:hover:text-white'
                }`}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="px-4 py-4 space-y-2 border-t border-[#E2E8DF] dark:border-[#2C3828]">
          <Link
            href="/settings"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#64705F] dark:text-[#AAB5A5] hover:bg-[#F8FAF7] dark:hover:bg-[#192118] hover:text-[#172014] dark:hover:text-white transition-colors"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
          <Link
            href="/help"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#64705F] dark:text-[#AAB5A5] hover:bg-[#F8FAF7] dark:hover:bg-[#192118] hover:text-[#172014] dark:hover:text-white transition-colors"
          >
            <HelpCircle className="h-5 w-5" />
            <span>Help & Support</span>
          </Link>
          
          {/* User Profile with Dropdown */}
          <UserMenu user={mockUser} organization={mockOrganization} />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="flex h-20 items-center justify-between bg-white dark:bg-[#141A12] px-8 border-b border-[#E2E8DF] dark:border-[#2C3828]">
          <div className="flex items-center gap-6 flex-1">
            {/* Search */}
            <div className="relative w-full max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#64705F] dark:text-[#AAB5A5]" />
              <Input
                placeholder="Search leads, customers, conversations..."
                className="pl-12 h-12 bg-[#F8FAF7] dark:bg-[#192118] border-[#E2E8DF] dark:border-[#2C3828] rounded-xl font-medium text-[#172014] dark:text-white placeholder:text-[#64705F] dark:placeholder:text-[#AAB5A5] focus:bg-white dark:focus:bg-[#202A1E] focus:ring-2 focus:ring-[#467235]"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative h-11 w-11 rounded-xl hover:bg-[#F8FAF7] dark:hover:bg-[#192118]">
              <Bell className="h-5 w-5 text-[#64705F] dark:text-[#AAB5A5]" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#C62828] border-2 border-white dark:border-[#141A12]" />
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-[#F8FAF7] dark:bg-[#0E120C]">
          {children}
        </main>
      </div>
    </div>
  );
}
