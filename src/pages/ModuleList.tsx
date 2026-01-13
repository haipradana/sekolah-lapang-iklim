import { MainLayout } from '@/components/layout/MainLayout';
import { ModuleCard } from '@/components/common/ModuleCard';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { modulesData } from '@/data/modulesData';
import { useProgress } from '@/hooks/useProgress';

export default function ModuleList() {
  const { isSubmoduleComplete } = useProgress();

  const getModuleCompletedCount = (moduleId: number) => {
    const module = modulesData.find(m => m.id === moduleId);
    if (!module) return 0;
    return module.submodules.filter(s => isSubmoduleComplete(s.id)).length;
  };

  return (
    <MainLayout>
      <div className="p-6 md:p-8 max-w-5xl">
        <Breadcrumbs 
          items={[{ label: 'Daftar Modul' }]} 
          className="mb-6"
        />

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Daftar Modul</h1>
          <p className="text-muted-foreground">
            Pilih modul untuk mempelajari materi tentang cuaca, iklim, dan pemanfaatannya bagi pertanian.
          </p>
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
      </div>
    </MainLayout>
  );
}
