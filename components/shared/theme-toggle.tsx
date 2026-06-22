'use client';

import { useContext } from 'react';
import { ThemeContext } from './theme-provider';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    return null;
  }

  const { theme, toggleTheme } = context;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="rounded-full"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
}
