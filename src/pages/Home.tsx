import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { ModuleCard } from '@/components/common/ModuleCard';
import { ProgressBadge } from '@/components/common/ProgressBadge';
import { modulesData } from '@/data/modulesData';
import { useProgress } from '@/hooks/useProgress';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Cloud, 
  Droplets, 
  Sun, 
  Wind,
  Users,
  BookOpen,
  Award,
  MapPin
} from 'lucide-react';

export default function Home() {
  const { progress, isSubmoduleComplete } = useProgress();
  
  const totalSubmodules = modulesData.reduce((acc, m) => acc + m.submodules.length, 0);
  const completedCount = progress.completedSubmodules.length;

  const getModuleCompletedCount = (moduleId: number) => {
    const module = modulesData.find(m => m.id === moduleId);
    if (!module) return 0;
    return module.submodules.filter(s => isSubmoduleComplete(s.id)).length;
  };

  return (
    <MainLayout showSidebar={false}>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <Cloud className="absolute top-10 left-[10%] h-16 w-16 text-white/10 animate-float" />
          <Sun className="absolute top-20 right-[15%] h-20 w-20 text-yellow-300/20 animate-pulse-soft" />
          <Droplets className="absolute bottom-20 left-[20%] h-12 w-12 text-white/10 animate-float" style={{ animationDelay: '1s' }} />
          <Wind className="absolute bottom-32 right-[25%] h-14 w-14 text-white/10 animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm mb-6">
              <MapPin className="h-4 w-4" />
              <span>BMKG Stasiun Klimatologi DI Yogyakarta</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Sekolah Lapang{' '}
              <span className="text-accent">Iklim</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Platform pembelajaran interaktif untuk memahami cuaca, iklim, dan pemanfaatannya 
              bagi sektor pertanian di DI Yogyakarta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/modul">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base font-semibold">
                  Mulai Belajar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/tentang">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base border-white bg-white/20 text-white hover:bg-white/30 hover:text-white backdrop-blur-sm">
                  Tentang Program
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M0 120L48 105C96 90 192 60 288 55C384 50 480 70 576 75C672 80 768 70 864 65C960 60 1056 60 1152 65C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" 
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: BookOpen, label: 'Modul', value: '3' },
            { icon: Users, label: 'Sub-Modul', value: '9' },
            { icon: Award, label: 'Kuis', value: '9+' },
            { icon: Droplets, label: 'Materi Iklim', value: 'Lengkap' },
          ].map((stat, index) => (
            <Card key={index} className="border shadow-sm">
              <CardContent className="p-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3">
                  <stat.icon className="h-6 w-6" />
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Progress Overview */}
      {completedCount > 0 && (
        <section className="container pb-12">
          <Card className="border-0 shadow-card bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <ProgressBadge completed={completedCount} total={totalSubmodules} size="lg" />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-foreground mb-2">Progres Belajar Anda</h3>
                  <p className="text-muted-foreground mb-4">
                    Anda telah menyelesaikan {completedCount} dari {totalSubmodules} sub-modul.
                    {completedCount < totalSubmodules && ' Lanjutkan belajar untuk menyelesaikan semua materi!'}
                  </p>
                  <Link to="/progres">
                    <Button variant="outline">
                      Lihat Detail Progres
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Modules Section */}
      <section className="container pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Materi Pembelajaran</h2>
            <p className="text-muted-foreground">Pilih modul untuk mulai belajar</p>
          </div>
          <Link to="/modul" className="hidden md:block">
            <Button variant="ghost">
              Lihat Semua
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modulesData.map((module) => (
            <ModuleCard
              key={module.id}
              id={module.id}
              title={module.title}
              description={module.description}
              icon={module.icon}
              imageUrl={module.imageUrl}
              submodulesCount={module.submodules.length}
              completedCount={getModuleCompletedCount(module.id)}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Siap Memahami Informasi Iklim?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Dengan memahami cuaca dan iklim, Anda dapat merencanakan kegiatan pertanian 
            dengan lebih baik dan meminimalkan risiko gagal panen.
          </p>
          <Link to="/modul/1/1-cuaca-vs-iklim">
            <Button size="lg" className="text-base">
              Mulai dari Modul 1
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar text-sidebar-foreground py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sidebar-accent text-sidebar-accent-foreground">
                <Cloud className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Sekolah Lapang Iklim</p>
                <p className="text-sm text-sidebar-foreground/70">BMKG Staklim DI Yogyakarta</p>
              </div>
            </div>
            <p className="text-sm text-sidebar-foreground/70">
              © 2025 BMKG. Platform Edukasi Iklim.
            </p>
          </div>
        </div>
      </footer>
    </MainLayout>
  );
}
