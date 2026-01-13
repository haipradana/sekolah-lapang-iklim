import { useParams, Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { SubmoduleCard } from '@/components/common/SubmoduleCard';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ProgressBadge } from '@/components/common/ProgressBadge';
import { getModuleById } from '@/data/modulesData';
import { useProgress } from '@/hooks/useProgress';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CloudSun, BarChart2, Sprout, Target, Clock, BookOpen } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'cloud-sun': CloudSun,
  'bar-chart-2': BarChart2,
  'sprout': Sprout,
};

export default function ModuleOverview() {
  const { moduleId } = useParams();
  const { isSubmoduleComplete } = useProgress();
  
  const module = getModuleById(Number(moduleId));

  if (!module) {
    return (
      <MainLayout>
        <div className="p-8 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Modul tidak ditemukan</h1>
          <Link to="/modul">
            <Button>Kembali ke Daftar Modul</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  const Icon = iconMap[module.icon] || CloudSun;
  const completedCount = module.submodules.filter(s => isSubmoduleComplete(s.id)).length;
  const firstIncomplete = module.submodules.find(s => !isSubmoduleComplete(s.id));

  return (
    <MainLayout>
      <div className="p-6 md:p-8 max-w-4xl">
        <Breadcrumbs 
          items={[
            { label: 'Modul', href: '/modul' },
            { label: `Modul ${module.id}` }
          ]} 
          className="mb-6"
        />

        {/* Module Header */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img 
            src={module.imageUrl} 
            alt={module.title}
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm text-white">
                <Icon className="h-6 w-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm">
                Modul {module.id}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">{module.title}</h1>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card className="border-0 shadow-card">
            <CardContent className="p-4 text-center">
              <BookOpen className="h-5 w-5 mx-auto mb-2 text-primary" />
              <p className="text-lg font-bold text-foreground">{module.submodules.length}</p>
              <p className="text-xs text-muted-foreground">Sub-Modul</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card">
            <CardContent className="p-4 text-center">
              <Clock className="h-5 w-5 mx-auto mb-2 text-primary" />
              <p className="text-lg font-bold text-foreground">~30</p>
              <p className="text-xs text-muted-foreground">Menit</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card">
            <CardContent className="p-4 text-center">
              <Target className="h-5 w-5 mx-auto mb-2 text-primary" />
              <p className="text-lg font-bold text-foreground">{module.submodules.length}</p>
              <p className="text-xs text-muted-foreground">Kuis</p>
            </CardContent>
          </Card>
        </div>

        {/* Description & Progress */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-foreground mb-2">Tentang Modul Ini</h2>
            <p className="text-muted-foreground">{module.description}</p>
          </div>
          <div className="flex-shrink-0">
            <ProgressBadge 
              completed={completedCount} 
              total={module.submodules.length}
              size="lg"
            />
          </div>
        </div>

        {/* CTA */}
        {firstIncomplete && (
          <Link to={`/modul/${module.id}/${firstIncomplete.slug}`} className="block mb-8">
            <Button size="lg" className="w-full md:w-auto">
              {completedCount > 0 ? 'Lanjutkan Belajar' : 'Mulai Belajar'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        )}

        {/* Submodules List */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">Daftar Sub-Modul</h2>
          <div className="space-y-3">
            {module.submodules.map((submodule, index) => (
              <SubmoduleCard
                key={submodule.id}
                moduleId={module.id}
                slug={submodule.slug}
                title={submodule.title}
                summary={submodule.summary}
                imageUrl={submodule.imageUrl}
                isComplete={isSubmoduleComplete(submodule.id)}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
