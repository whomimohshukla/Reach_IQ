'use client';

import { Home, MessageSquare, Users, Calendar, BarChart3, Brain, MessageCircle, Settings, HelpCircle, ChevronDown, Bell, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex md:w-72 md:flex-col bg-white" style={{ borderRight: '1px solid rgb(243 244 246)' }}>
        {/* Logo */}
        <div className="flex h-20 items-center gap-3 px-6" style={{ borderBottom: '1px solid rgb(243 244 246)' }}>
          <div className="h-10 w-10 rounded-xl bg-[#44A194] flex items-center justify-center shadow-lg shadow-[#44A194]/25">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.8"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900 leading-none">ReachIQ</span>
            <span className="text-[9px] text-gray-500 font-medium tracking-wider uppercase">Smart Lead Recovery</span>
          </div>
        </div>

        {/* Organization Selector */}
        <div className="px-4 py-5" style={{ borderBottom: '1px solid rgb(243 244 246)' }}>
          <button className="flex w-full items-center justify-between rounded-xl bg-gray-50 px-4 py-3.5 text-sm hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-3 min-w-0">
              <div className="h-9 w-9 rounded-lg bg-[#44A194]/10 flex items-center justify-center text-xs font-bold text-[#44A194] flex-shrink-0">
                AC
              </div>
              <span className="font-semibold text-gray-900 truncate">ABC Cooling Services</span>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-400 flex-shrink-0" />
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
                    ? 'bg-[#44A194]/10 text-[#44A194] shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="px-4 py-4 space-y-2" style={{ borderTop: '1px solid rgb(243 244 246)' }}>
          <Link
            href="/settings"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
            <HelpCircle className="h-5 w-5" />
            <span>Help & Support</span>
          </button>
          
          {/* User Profile */}
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-sm hover:bg-gray-50 transition-colors mt-2">
            <div className="h-9 w-9 rounded-full bg-[#44A194] flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-[#44A194]/25">
              RK
            </div>
            <div className="flex-1 text-left min-w-0">
              <div className="text-sm font-semibold text-gray-900 truncate">Rajesh Kumar</div>
              <div className="text-xs text-gray-500">Owner</div>
            </div>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="flex h-20 items-center justify-between bg-white px-8" style={{ borderBottom: '1px solid rgb(243 244 246)' }}>
          <div className="flex items-center gap-6 flex-1">
            {/* Search */}
            <div className="relative w-full max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search leads, customers, conversations..."
                className="pl-12 h-12 bg-gray-50 rounded-xl font-medium text-gray-900 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#44A194]"
                style={{ border: '1px solid rgb(229 231 235)' }}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative h-11 w-11 rounded-xl hover:bg-gray-50">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" style={{ border: '2px solid white' }} />
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
