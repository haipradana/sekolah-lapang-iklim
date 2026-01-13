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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/90">
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
          <img src="/Logo_BMKG.png" alt="BMKG Logo" className="h-10 w-10 object-contain" />
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
