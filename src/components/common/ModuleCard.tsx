import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { CloudSun, BarChart2, Sprout, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'cloud-sun': CloudSun,
  'bar-chart-2': BarChart2,
  'sprout': Sprout,
};

interface ModuleCardProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
  submodulesCount: number;
  completedCount?: number;
}

export const ModuleCard = ({
  id,
  title,
  description,
  icon,
  imageUrl,
  submodulesCount,
  completedCount = 0
}: ModuleCardProps) => {
  const Icon = iconMap[icon] || CloudSun;
  const progress = submodulesCount > 0 ? (completedCount / submodulesCount) * 100 : 0;

  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-3 left-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/90 text-primary-foreground backdrop-blur-sm">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-xs text-white/80 mb-1">Modul {id}</p>
          <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
        </div>
      </div>
      
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-muted-foreground">Progres</span>
            <span className="font-medium text-foreground">{completedCount}/{submodulesCount} sub-modul</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Link to={`/modul/${id}`}>
          <Button variant="default" className="w-full group/btn">
            <span>Mulai Belajar</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
