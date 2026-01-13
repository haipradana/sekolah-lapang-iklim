import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { modulesData } from '@/data/modulesData';
import { useProgress } from '@/hooks/useProgress';
import { 
  CloudSun, 
  BarChart2, 
  Sprout, 
  ChevronDown, 
  ChevronRight,
  CheckCircle2,
  Circle,
  Home,
  BookOpen,
  Trophy,
  Info
} from 'lucide-react';
import { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'cloud-sun': CloudSun,
  'bar-chart-2': BarChart2,
  'sprout': Sprout,
};

interface SidebarProps {
  className?: string;
  onLinkClick?: () => void;
}

export const Sidebar = ({ className, onLinkClick }: SidebarProps) => {
  const location = useLocation();
  const { isSubmoduleComplete } = useProgress();
  const [openModules, setOpenModules] = useState<number[]>([1, 2, 3]);

  const toggleModule = (moduleId: number) => {
    setOpenModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const isActive = (path: string) => location.pathname === path;
  const isModuleActive = (moduleId: number) => location.pathname.startsWith(`/modul/${moduleId}`);

  return (
    <aside className={cn(
      "w-64 flex-shrink-0 bg-sidebar text-sidebar-foreground overflow-y-auto",
      className
    )}>
      <div className="p-4 space-y-1">
        {/* Main Navigation */}
        <Link 
          to="/" 
          onClick={onLinkClick}
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
            isActive('/') 
              ? "bg-sidebar-accent text-sidebar-accent-foreground" 
              : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
          )}
        >
          <Home className="h-4 w-4" />
          <span className="font-medium">Beranda</span>
        </Link>

        <Link 
          to="/modul" 
          onClick={onLinkClick}
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
            isActive('/modul') 
              ? "bg-sidebar-accent text-sidebar-accent-foreground" 
              : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
          )}
        >
          <BookOpen className="h-4 w-4" />
          <span className="font-medium">Daftar Modul</span>
        </Link>

        <Link 
          to="/progres" 
          onClick={onLinkClick}
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
            isActive('/progres') 
              ? "bg-sidebar-accent text-sidebar-accent-foreground" 
              : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
          )}
        >
          <Trophy className="h-4 w-4" />
          <span className="font-medium">Progres Belajar</span>
        </Link>

        <Link 
          to="/tentang" 
          onClick={onLinkClick}
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
            isActive('/tentang') 
              ? "bg-sidebar-accent text-sidebar-accent-foreground" 
              : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
          )}
        >
          <Info className="h-4 w-4" />
          <span className="font-medium">Tentang</span>
        </Link>

        {/* Divider */}
        <div className="my-4 border-t border-sidebar-border" />

        {/* Module Navigation */}
        <p className="px-3 text-xs font-semibold uppercase tracking-wider text-sidebar-muted mb-2">
          Materi Pembelajaran
        </p>

        {modulesData.map((module) => {
          const Icon = iconMap[module.icon] || CloudSun;
          const isOpen = openModules.includes(module.id);

          return (
            <Collapsible
              key={module.id}
              open={isOpen}
              onOpenChange={() => toggleModule(module.id)}
            >
              <CollapsibleTrigger asChild>
                <button
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-left",
                    isModuleActive(module.id)
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                  )}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="font-medium flex-1 text-sm">Modul {module.id}</span>
                  {isOpen ? (
                    <ChevronDown className="h-4 w-4 text-sidebar-muted" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-sidebar-muted" />
                  )}
                </button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="pl-4 mt-1 space-y-0.5">
                <Link
                  to={`/modul/${module.id}`}
                  onClick={onLinkClick}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
                    isActive(`/modul/${module.id}`)
                      ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent/30 hover:text-sidebar-foreground"
                  )}
                >
                  <Circle className="h-2 w-2" />
                  <span>Overview</span>
                </Link>
                
                {module.submodules.map((sub) => {
                  const isComplete = isSubmoduleComplete(sub.id);
                  return (
                    <Link
                      key={sub.id}
                      to={`/modul/${module.id}/${sub.slug}`}
                      onClick={onLinkClick}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
                        isActive(`/modul/${module.id}/${sub.slug}`)
                          ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                          : "text-sidebar-foreground/70 hover:bg-sidebar-accent/30 hover:text-sidebar-foreground"
                      )}
                    >
                      {isComplete ? (
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-400" />
                      ) : (
                        <Circle className="h-2 w-2" />
                      )}
                      <span className="line-clamp-1">{sub.title}</span>
                    </Link>
                  );
                })}
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>
    </aside>
  );
};
