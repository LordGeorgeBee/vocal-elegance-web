import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";
import { ThemeMode } from "@/lib/themes";

export const ThemeToggle = ({ currentTheme }: { currentTheme: ThemeMode }) => {
  const navigate = useNavigate();

  const handleToggle = (checked: boolean) => {
    navigate(checked ? '/funeral' : '/wedding');
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
      <span className={`text-sm ${currentTheme === 'wedding' ? 'text-foreground' : 'text-white'}`}>Wedding</span>
      <Switch
        checked={currentTheme === 'funeral'}
        onCheckedChange={handleToggle}
      />
      <span className={`text-sm ${currentTheme === 'funeral' ? 'text-white' : 'text-foreground'}`}>Funeral</span>
    </div>
  );
};