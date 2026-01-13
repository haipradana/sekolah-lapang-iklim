import { Cloud, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface HeaderProps {
  onMenuClick?: () => void;
  isSidebarOpen?: boolean;
}

export const Header = ({ onMenuClick, isSidebarOpen }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="flex h-16 items-center gap-4 px-4 md:px-6">
        {onMenuClick && (
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        )}
        
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-lg transition-all" />
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
              <Cloud className="h-5 w-5" />
            </div>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold text-foreground leading-tight">
              Sekolah Lapang Iklim
            </h1>
            <p className="text-xs text-muted-foreground">
              BMKG Staklim DI Yogyakarta
            </p>
          </div>
        </Link>

        <nav className="ml-auto flex items-center gap-1 md:gap-2">
          <Link to="/modul">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Modul
            </Button>
          </Link>
          <Link to="/progres">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Progres
            </Button>
          </Link>
          <Link to="/tentang">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Tentang
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
