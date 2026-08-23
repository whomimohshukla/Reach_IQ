'use client';

import { Home, MessageSquare, Users, Calendar, BarChart3, Brain, MessageCircle, Settings, HelpCircle, ChevronDown, Bell, Search, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogoWithText } from "@/components/Logo";
import { UserMenu } from "@/components/UserMenu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPage = navigation.find((item) => pathname === item.href || pathname?.startsWith(item.href + '/'))?.name || 'Dashboard';

  return (
    <div className="workspace-grid flex h-screen">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-64 md:flex-col border-r border-border bg-card/85 backdrop-blur-xl">
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
        {/* Mobile Header with Menu Button */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-card/85 px-4 backdrop-blur-xl md:h-20 md:px-8">
          {/* Mobile: Menu Button + Logo */}
          <div className="flex md:hidden items-center gap-3">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="h-10 w-10 md:hidden" />}>
                  <Menu className="h-6 w-6 text-[#172014] dark:text-white" />
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0 bg-white dark:bg-[#141A12]">
                {/* Mobile Menu Content */}
                <div className="flex flex-col h-full">
                  {/* Logo */}
                  <div className="flex h-16 items-center px-6 border-b border-[#E2E8DF] dark:border-[#2C3828]">
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
                          onClick={() => setMobileMenuOpen(false)}
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
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#64705F] dark:text-[#AAB5A5] hover:bg-[#F8FAF7] dark:hover:bg-[#192118] hover:text-[#172014] dark:hover:text-white transition-colors"
                    >
                      <Settings className="h-5 w-5" />
                      <span>Settings</span>
                    </Link>
                    <Link
                      href="/help"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#64705F] dark:text-[#AAB5A5] hover:bg-[#F8FAF7] dark:hover:bg-[#192118] hover:text-[#172014] dark:hover:text-white transition-colors"
                    >
                      <HelpCircle className="h-5 w-5" />
                      <span>Help & Support</span>
                    </Link>
                    
                    {/* User Profile with Dropdown */}
                    <UserMenu user={mockUser} organization={mockOrganization} />
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <LogoWithText href="/dashboard" className="md:hidden" />
            <span className="hidden border-l border-border pl-3 font-mono text-[9px] uppercase tracking-[0.14em] text-primary sm:inline">{currentPage}</span>
          </div>

          {/* Desktop: Search Bar */}
          <div className="hidden flex-1 items-center gap-6 md:flex">
            <div className="min-w-[150px]">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary">Workspace</p>
              <p className="mt-1 text-sm font-semibold">{currentPage}</p>
            </div>
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#64705F] dark:text-[#AAB5A5]" />
              <Input
                placeholder="Search leads, customers, conversations..."
                className="h-12 rounded-[var(--radius)] border-border bg-background pl-12 font-medium text-foreground placeholder:text-muted-foreground focus:bg-card focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Right Side: Notifications */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden items-center gap-2 border border-border px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground lg:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#25d366]" /> WhatsApp live
            </div>
            <Button variant="ghost" size="icon" className="relative h-10 w-10 md:h-11 md:w-11 rounded-xl hover:bg-[#F8FAF7] dark:hover:bg-[#192118]">
              <Bell className="h-5 w-5 text-[#64705F] dark:text-[#AAB5A5]" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#C62828] border-2 border-white dark:border-[#141A12]" />
            </Button>
            {/* Mobile: User Menu */}
            <div className="md:hidden">
              <UserMenu user={mockUser} organization={mockOrganization} />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="workspace-grid flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
