import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { QuizCard } from '@/components/common/QuizCard';
import { CelebrationCard } from '@/components/common/CelebrationCard';
import { WeatherClimateCards } from '@/components/content/WeatherClimateCards';
import { WeatherElementsCards } from '@/components/content/WeatherElementsCards';
import { ClimatologyToolsCards } from '@/components/content/ClimatologyToolsCards';
import { DasarianCards } from '@/components/content/DasarianCards';
import { RainfallNatureCards } from '@/components/content/RainfallNatureCards';
import { SeasonZoneCards } from '@/components/content/SeasonZoneCards';
import { PlantingScheduleCards } from '@/components/content/PlantingScheduleCards';
import { MitigationCards } from '@/components/content/MitigationCards';
import { BMKGAccessCards } from '@/components/content/BMKGAccessCards';
import { getModuleById, getSubmoduleBySlug, getAdjacentSubmodules, modulesData } from '@/data/modulesData';
import { useProgress } from '@/hooks/useProgress';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  CheckCircle2, 
  BookOpen,
  Clock,
  ChevronLeft,
  ChevronRight,
  ArrowDown
} from 'lucide-react';

export default function SubmodulePage() {
  const { moduleId, submoduleSlug } = useParams();
  const navigate = useNavigate();
  const { markSubmoduleComplete, isSubmoduleComplete, saveQuizScore } = useProgress();
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  const module = getModuleById(Number(moduleId));
  const submodule = getSubmoduleBySlug(Number(moduleId), submoduleSlug || '');
  const { prev, next } = getAdjacentSubmodules(Number(moduleId), submoduleSlug || '');

  // Check if this is the final submodule of the entire course
  const lastModule = modulesData[modulesData.length - 1];
  const lastSubmodule = lastModule?.submodules[lastModule.submodules.length - 1];
  const isFinalSubmodule = module?.id === lastModule?.id && submodule?.slug === lastSubmodule?.slug;

  // Handle scroll to show/hide sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      const quizSection = document.getElementById('quiz-section');
      if (quizSection) {
        const rect = quizSection.getBoundingClientRect();
        const isQuizVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setShowStickyCTA(!isQuizVisible && window.scrollY > 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToQuiz = () => {
    const quizSection = document.getElementById('quiz-section');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Map submodule slugs to their card components
  const getContentComponent = () => {
    switch (submoduleSlug) {
      case '1-cuaca-vs-iklim':
        return <WeatherClimateCards />;
      case '2-unsur-cuaca-iklim':
        return <WeatherElementsCards />;
      case '3-alat-ukur-klimatologi':
        return <ClimatologyToolsCards />;
      case '1-dasarian':
        return <DasarianCards />;
      case '2-sifat-hujan':
        return <RainfallNatureCards />;
      case '3-zona-musim':
        return <SeasonZoneCards />;
      case '1-jadwal-pola-tanam':
        return <PlantingScheduleCards />;
      case '2-mitigasi-banjir-kekeringan-hama':
        return <MitigationCards />;
      case '3-akses-info-bmkg':
        return <BMKGAccessCards />;
      default:
        return null;
    }
  };

  if (!module || !submodule) {
    return (
      <MainLayout>
        <div className="p-8 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Sub-modul tidak ditemukan</h1>
          <Link to="/modul">
            <Button>Kembali ke Daftar Modul</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  const isComplete = isSubmoduleComplete(submodule.id);

  const handleMarkComplete = () => {
    markSubmoduleComplete(submodule.id);
  };

  const handleQuizComplete = (score: number) => {
    saveQuizScore(submodule.quiz.id, score);
    if (score === 100) {
      markSubmoduleComplete(submodule.id);
    }
  };

  return (
    <MainLayout>
      {/* Sticky CTA for Quiz */}
      {showStickyCTA && (
        <div className="fixed bottom-6 right-6 z-40 animate-in slide-in-from-bottom-5">
          <Button 
            onClick={scrollToQuiz}
            size="lg"
            className="shadow-lg bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <ArrowDown className="mr-2 h-5 w-5 animate-bounce" />
            Yuk kerjakan kuis!
          </Button>
        </div>
      )}

      <div className="p-6 md:p-8">
        <Breadcrumbs 
          items={[
            { label: 'Modul', href: '/modul' },
            { label: `Modul ${module.id}`, href: `/modul/${module.id}` },
            { label: submodule.title }
          ]} 
          className="mb-6"
        />

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-primary mb-2">
            <BookOpen className="h-4 w-4" />
            <span className="text-sm font-medium">Modul {module.id} • Sub-Modul</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {submodule.title}
          </h1>
          <p className="text-muted-foreground">{submodule.summary}</p>
          
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>~10 menit</span>
            </div>
            {isComplete && (
              <div className="flex items-center gap-1.5 text-sm text-success">
                <CheckCircle2 className="h-4 w-4" />
                <span>Selesai</span>
              </div>
            )}
          </div>
        </div>



        {/* Content - Card-based layout */}
        {getContentComponent()}

        <Separator className="my-8" />

        {/* Quiz Section - Neutral styling */}
        <div 
          id="quiz-section" 
          className="mb-10 p-6 md:p-8 rounded-2xl bg-muted/30 border border-border"
        >
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="inline-block w-1 h-6 bg-primary rounded-full"></span>
            Uji Pemahaman Anda
          </h2>
          <QuizCard key={submodule.quiz.id} quiz={submodule.quiz} onComplete={handleQuizComplete} />
        </div>

        {/* Mark Complete Button */}
        {!isComplete && (
          <Card className="mb-8 border-success/30 bg-success/5">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-medium text-foreground">Sudah selesai membaca?</p>
                  <p className="text-sm text-muted-foreground">Tandai sub-modul ini sebagai selesai</p>
                </div>
                <Button onClick={handleMarkComplete} variant="default" className="bg-success hover:bg-success/90">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Tandai Selesai
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Celebration for final submodule */}
        {isFinalSubmodule && isComplete && (
          <div className="mb-8">
            <CelebrationCard />
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between gap-2 sm:gap-4 pt-4">
          {prev ? (
            <Link to={`/modul/${module.id}/${prev.slug}`}>
              <Button variant="outline" size="sm" className="sm:px-4">
                <ChevronLeft className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Sebelumnya</span>
              </Button>
            </Link>
          ) : (
            <Link to={`/modul/${module.id}`}>
              <Button variant="outline" size="sm" className="sm:px-4">
                <ChevronLeft className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Overview</span>
              </Button>
            </Link>
          )}

          {next ? (
            <Link to={`/modul/${module.id}/${next.slug}`}>
              <Button variant="default" size="sm" className="sm:px-4">
                <span className="hidden sm:inline">Selanjutnya</span>
                <ChevronRight className="h-4 w-4 sm:ml-2" />
              </Button>
            </Link>
          ) : !isFinalSubmodule ? (
            <Link to={`/modul/${Number(moduleId) + 1}`}>
              <Button variant="default" size="sm" className="sm:px-4">
                <span className="hidden sm:inline">Modul Berikut</span>
                <ChevronRight className="h-4 w-4 sm:ml-2" />
              </Button>
            </Link>
          ) : null}
        </div>
      </div>
    </MainLayout>
  );
}
