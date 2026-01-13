import { MainLayout } from '@/components/layout/MainLayout';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ProgressBadge } from '@/components/common/ProgressBadge';
import { modulesData } from '@/data/modulesData';
import { useProgress } from '@/hooks/useProgress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Circle, 
  Trophy,
  ArrowRight,
  RotateCcw,
  CloudSun,
  BarChart2,
  Sprout
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'cloud-sun': CloudSun,
  'bar-chart-2': BarChart2,
  'sprout': Sprout,
};

export default function Progress() {
  const { progress, isSubmoduleComplete, resetProgress } = useProgress();

  const totalSubmodules = modulesData.reduce((acc, m) => acc + m.submodules.length, 0);
  const completedCount = progress.completedSubmodules.length;
  const percentage = Math.round((completedCount / totalSubmodules) * 100);

  const handleReset = () => {
    if (confirm('Apakah Anda yakin ingin mereset semua progres? Tindakan ini tidak dapat dibatalkan.')) {
      resetProgress();
    }
  };

  return (
    <MainLayout>
      <div className="p-6 md:p-8 max-w-4xl">
        <Breadcrumbs 
          items={[{ label: 'Progres Belajar' }]} 
          className="mb-6"
        />

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Progres Belajar</h1>
          <p className="text-muted-foreground">
            Pantau kemajuan belajar Anda di Sekolah Lapang Iklim
          </p>
        </div>

        {/* Overall Progress */}
        <Card className="mb-8 border-0 shadow-card overflow-hidden">
          <div className="gradient-hero p-6 text-white">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <ProgressBadge 
                completed={completedCount} 
                total={totalSubmodules}
                size="lg"
                className="text-white [&_p]:text-white/80"
              />
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">
                  {completedCount === totalSubmodules 
                    ? '🎉 Selamat! Anda telah menyelesaikan semua materi!' 
                    : `${percentage}% Selesai`
                  }
                </h2>
                <p className="text-white/80 mb-4">
                  {completedCount === 0 
                    ? 'Anda belum memulai pembelajaran. Mulai sekarang!'
                    : `Anda telah menyelesaikan ${completedCount} dari ${totalSubmodules} sub-modul.`
                  }
                </p>
                {completedCount < totalSubmodules && (
                  <Link to="/modul">
                    <Button variant="secondary">
                      Lanjutkan Belajar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Achievement */}
        {completedCount === totalSubmodules && (
          <Card className="mb-8 border-2 border-accent bg-accent/10">
            <CardContent className="p-6 text-center">
              <Trophy className="h-16 w-16 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Sertifikat Kelulusan
              </h3>
              <p className="text-muted-foreground mb-4">
                Anda telah menyelesaikan semua materi Sekolah Lapang Iklim!
              </p>
              <Button variant="outline" disabled>
                Unduh Sertifikat (Segera Hadir)
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Module Progress */}
        <div className="space-y-4 mb-8">
          {modulesData.map((module) => {
            const Icon = iconMap[module.icon] || CloudSun;
            const moduleCompleted = module.submodules.filter(s => isSubmoduleComplete(s.id)).length;
            const moduleTotal = module.submodules.length;
            const modulePercentage = Math.round((moduleCompleted / moduleTotal) * 100);

            return (
              <Card key={module.id} className="border shadow-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base">Modul {module.id}: {module.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {moduleCompleted}/{moduleTotal} sub-modul selesai
                      </p>
                    </div>
                    <ProgressBadge 
                      completed={moduleCompleted} 
                      total={moduleTotal}
                      size="sm"
                      showLabel={false}
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {module.submodules.map((sub) => {
                      const isComplete = isSubmoduleComplete(sub.id);
                      return (
                        <Link 
                          key={sub.id}
                          to={`/modul/${module.id}/${sub.slug}`}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                        >
                          {isComplete ? (
                            <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                          ) : (
                            <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                          )}
                          <span className={isComplete ? 'text-foreground' : 'text-muted-foreground'}>
                            {sub.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Reset Progress */}
        {completedCount > 0 && (
          <div className="text-center">
            <Button 
              variant="ghost" 
              className="text-muted-foreground hover:text-destructive"
              onClick={handleReset}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset Progres
            </Button>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
