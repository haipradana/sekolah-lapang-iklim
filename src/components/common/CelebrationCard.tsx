import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Medal, Home, BarChart3 } from 'lucide-react';

export function CelebrationCard() {
  return (
    <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 overflow-hidden">
      <CardContent className="p-8 text-center relative">
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 text-primary/20">
          <Star className="h-8 w-8 animate-pulse" />
        </div>
        <div className="absolute top-4 right-4 text-accent/20">
          <Star className="h-6 w-6 animate-pulse delay-150" />
        </div>
        <div className="absolute bottom-4 left-8 text-secondary/20">
          <Star className="h-5 w-5 animate-pulse delay-300" />
        </div>
        <div className="absolute bottom-4 right-8 text-primary/20">
          <Star className="h-7 w-7 animate-pulse delay-75" />
        </div>
        
        {/* Main content */}
        <div className="relative z-10">
          
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Selamat! Anda Luar Biasa!
          </h2>
          
          <p className="text-lg text-muted-foreground mb-2">
            Anda telah menyelesaikan <span className="font-semibold text-primary">seluruh materi</span> Sekolah Lapang Iklim!
          </p>
          
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Terima kasih telah belajar bersama kami. Semoga ilmu tentang cuaca dan iklim ini bermanfaat untuk pertanian yang lebih baik.
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <Medal className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Petani Cerdas Iklim
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/progres">
              <Button variant="default" className="w-full sm:w-auto">
                <BarChart3 className="mr-2 h-4 w-4" />
                Lihat Progress Lengkap
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="w-full sm:w-auto">
                <Home className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
