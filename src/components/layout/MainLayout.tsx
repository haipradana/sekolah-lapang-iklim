import { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export const MainLayout = ({ children, showSidebar = true }: MainLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onMenuClick={showSidebar ? () => setIsSidebarOpen(!isSidebarOpen) : undefined}
        isSidebarOpen={isSidebarOpen}
      />
      
      <div className="flex">
        {showSidebar && (
          <>
            {/* Mobile & Tablet sidebar overlay */}
            {isSidebarOpen && (
              <div 
                className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                onClick={() => setIsSidebarOpen(false)}
              />
            )}
            
            {/* Sidebar */}
            <Sidebar 
              className={cn(
                "fixed lg:sticky top-16 h-[calc(100vh-4rem)] z-40 transition-transform duration-300 ease-in-out",
                isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
              )}
              onLinkClick={() => setIsSidebarOpen(false)}
            />
          </>
        )}
        
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
};
