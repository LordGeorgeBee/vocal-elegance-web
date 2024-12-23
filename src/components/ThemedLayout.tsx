import { ThemeToggle } from "./ThemeToggle";
import { ThemeMode, themes } from "@/lib/themes";
import { useEffect } from "react";

interface ThemedLayoutProps {
  children: React.ReactNode;
  theme: ThemeMode;
}

export const ThemedLayout = ({ children, theme }: ThemedLayoutProps) => {
  useEffect(() => {
    // Apply theme colors to CSS variables
    const root = document.documentElement;
    Object.entries(themes[theme]).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [theme]);

  return (
    <div className={`min-h-screen ${theme === 'funeral' ? 'bg-background text-white' : 'bg-background text-foreground'}`}>
      <ThemeToggle currentTheme={theme} />
      {children}
    </div>
  );
};