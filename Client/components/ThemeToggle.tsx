'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/providers/theme-provider';

export function ThemeToggle({ floating = false }: { floating?: boolean }) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={floating
        ? 'fixed right-5 top-5 z-[60] h-10 w-10 rounded-full border border-border bg-card/90 text-muted-foreground shadow-soft backdrop-blur hover:bg-muted hover:text-foreground'
        : 'h-10 w-10 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground'}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}